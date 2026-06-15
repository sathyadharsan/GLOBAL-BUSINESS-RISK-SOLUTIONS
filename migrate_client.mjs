import fs from 'fs';
import path from 'path';

function capitalize(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

function processContent(content) {
  let newContent = content.replace(/['"]use client['"];?\n?/g, '');
  newContent = newContent.replace(/['"]use server['"];?\n?/g, '');
  newContent = newContent.replace(/import\s+Link\s+from\s+['"]next\/link['"]/g, "import { Link } from 'react-router-dom'");
  newContent = newContent.replace(/<Link([^>]*?)href=(['"{])/g, '<Link$1to=$2');
  newContent = newContent.replace(/import\s+Image\s+from\s+['"]next\/image['"]/g, "");
  newContent = newContent.replace(/<Image([^>]*?)\/?>/g, (match, attrs) => {
    let newAttrs = attrs.replace(/\s+(priority|quality=\{[^\}]+\}|placeholder=['"][^'"]+['"])/g, '');
    return `<img${newAttrs} />`;
  });
  newContent = newContent.replace(/import\s+\{([^}]+)\}\s+from\s+['"]next\/navigation['"]/g, (match, imports) => {
    let newImports = imports;
    newImports = newImports.replace('useRouter', 'useNavigate');
    newImports = newImports.replace('usePathname', 'useLocation');
    newImports = newImports.replace('useParams', 'useParams');
    return `import { ${newImports} } from 'react-router-dom'`;
  });
  newContent = newContent.replace(/const\s+router\s*=\s*useRouter\(\)/g, "const navigate = useNavigate()");
  newContent = newContent.replace(/router\.push\(/g, "navigate(");
  newContent = newContent.replace(/router\.back\(\)/g, "navigate(-1)");
  return newContent;
}

const sourceFile = path.resolve('src/app/offerings/category/[category]/client.tsx');
const destDir = path.resolve('src/pages/Offerings/Category');
const destFile = path.join(destDir, 'client.tsx');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(sourceFile)) {
  const content = fs.readFileSync(sourceFile, 'utf8');
  const processed = processContent(content);
  fs.writeFileSync(destFile, processed);
  console.log('Migrated client.tsx successfully');
} else {
  console.log('Source file not found');
}
