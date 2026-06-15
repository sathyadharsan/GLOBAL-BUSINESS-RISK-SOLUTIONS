import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appDir = path.join(__dirname, 'src', 'app');
const pagesDir = path.join(__dirname, 'src', 'pages');

function capitalize(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

function getPageNameAndPath(relPath) {
  if (relPath === 'page.tsx' || relPath === 'page.jsx') {
    return { name: 'Home', newPath: 'Home.tsx' };
  }
  
  const parts = relPath.split(path.sep);
  // remove page.tsx
  parts.pop();
  
  let nameParts = [];
  let pathParts = [];
  
  for (const part of parts) {
    if (part.startsWith('[') && part.endsWith(']')) {
      const param = part.slice(1, -1);
      nameParts.push(capitalize(param) + 'Detail');
      pathParts.push(capitalize(param) + 'Detail');
    } else {
      nameParts.push(capitalize(part));
      pathParts.push(capitalize(part));
    }
  }
  
  const name = nameParts.join('');
  let newPath = pathParts.join('/') + '.tsx';
  
  // Special case for root pages
  if (parts.length === 1) {
    newPath = capitalize(parts[0]) + '.tsx';
  }
  
  return { name, newPath };
}

function processContent(content) {
  // Remove "use client" and "use server"
  let newContent = content.replace(/['"]use client['"];?\n?/g, '');
  newContent = newContent.replace(/['"]use server['"];?\n?/g, '');
  
  // Replace next/link
  newContent = newContent.replace(/import\s+Link\s+from\s+['"]next\/link['"]/g, "import { Link } from 'react-router-dom'");
  // React Router DOM doesn't use href for Link, it uses to
  // We need to be careful with <Link href="..."> to <Link to="...">
  newContent = newContent.replace(/<Link([^>]*?)href=(['"{])/g, '<Link$1to=$2');
  
  // Replace next/image
  newContent = newContent.replace(/import\s+Image\s+from\s+['"]next\/image['"]/g, "");
  newContent = newContent.replace(/<Image([^>]*?)\/?>/g, (match, attrs) => {
    // Remove priority, quality, etc if they exist
    let newAttrs = attrs.replace(/\s+(priority|quality=\{[^\}]+\}|placeholder=['"][^'"]+['"])/g, '');
    return `<img${newAttrs} />`;
  });
  
  // Replace next/navigation
  newContent = newContent.replace(/import\s+\{([^}]+)\}\s+from\s+['"]next\/navigation['"]/g, (match, imports) => {
    let newImports = imports;
    newImports = newImports.replace('useRouter', 'useNavigate');
    newImports = newImports.replace('usePathname', 'useLocation');
    newImports = newImports.replace('useParams', 'useParams'); // Same name
    return `import { ${newImports} } from 'react-router-dom'`;
  });
  
  // Replace usage of router.push with navigate
  newContent = newContent.replace(/const\s+router\s*=\s*useRouter\(\)/g, "const navigate = useNavigate()");
  newContent = newContent.replace(/router\.push\(/g, "navigate(");
  newContent = newContent.replace(/router\.back\(\)/g, "navigate(-1)");
  
  // Remove metadata exports
  newContent = newContent.replace(/export\s+const\s+metadata[^;]+;/g, '');
  newContent = newContent.replace(/export\s+const\s+metadata[\s\S]*?};/g, '');
  
  // Remove generateStaticParams
  newContent = newContent.replace(/export\s+async\s+function\s+generateStaticParams[\s\S]*?}\n/g, '');
  
  return newContent;
}

function processComponentDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processComponentDirectory(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx') || entry.name.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const processed = processContent(content);
      if (content !== processed) {
        fs.writeFileSync(fullPath, processed);
        console.log(`Updated component: ${fullPath}`);
      }
    }
  }
}

function walkDir(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (entry.name === 'page.tsx' || entry.name === 'page.jsx') {
      callback(fullPath);
    }
  }
}

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

console.log('Migrating pages...');
const routes = [];

walkDir(appDir, (fullPath) => {
  const relPath = path.relative(appDir, fullPath);
  const { name, newPath } = getPageNameAndPath(relPath);
  
  const content = fs.readFileSync(fullPath, 'utf8');
  const newContent = processContent(content);
  
  const targetPath = path.join(pagesDir, newPath);
  const targetDir = path.dirname(targetPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  fs.writeFileSync(targetPath, newContent);
  console.log(`Migrated: ${relPath} -> pages/${newPath}`);
  
  let routePath = '/' + path.dirname(relPath).replace(/\\/g, '/');
  if (routePath === '/.') routePath = '/';
  
  // Handle dynamic routes [slug] -> :slug
  routePath = routePath.replace(/\[([^\]]+)\]/g, ':$1');
  
  routes.push({
    path: routePath,
    componentName: name,
    importPath: `./pages/${newPath.replace('.tsx', '')}`
  });
});

console.log('\nProcessing components directory...');
const componentsDir = path.join(__dirname, 'src', 'components');
if (fs.existsSync(componentsDir)) {
  processComponentDirectory(componentsDir);
}

console.log('\nGenerating App.tsx...');
const imports = routes.map(r => `const ${r.componentName} = lazy(() => import('${r.importPath}'));`).join('\n');
const routeElements = routes.map(r => `          <Route path="${r.path}" element={<${r.componentName} />} />`).join('\n');

const appTsx = `import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChatbotProvider } from '@/components/chatbot/ChatbotProvider';

// Lazy load pages
${imports}

function App() {
  return (
    <Router>
      <div className="min-h-full flex flex-col font-sans">
        <Navbar />
        <ChatbotProvider>
          <main className="flex-1">
            <Suspense fallback={<div className="flex h-[50vh] items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
              <Routes>
${routeElements}
              </Routes>
            </Suspense>
          </main>
        </ChatbotProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.tsx'), appTsx);
console.log('App.tsx generated successfully.');

// Delete Next.js specific files and folders
console.log('\nCleaning up Next.js files...');
const filesToRemove = ['.next', 'next.config.ts', 'next-env.d.ts', 'src/app/layout.tsx', 'src/app/page.tsx'];
for (const file of filesToRemove) {
  const p = path.join(__dirname, file);
  if (fs.existsSync(p)) {
    if (fs.statSync(p).isDirectory()) {
      fs.rmSync(p, { recursive: true, force: true });
    } else {
      fs.unlinkSync(p);
    }
    console.log(`Removed: ${file}`);
  }
}

console.log('Migration script complete!');
