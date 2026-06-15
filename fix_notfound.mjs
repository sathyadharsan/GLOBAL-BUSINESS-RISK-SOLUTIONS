import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {
      callback(fullPath);
    }
  }
}

const pagesDir = path.resolve('src/pages');

walkDir(pagesDir, (fullPath) => {
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;
  
  if (content.includes('notFound')) {
    content = content.replace(/import\s+\{\s*notFound\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import { Navigate } from 'react-router-dom';");
    content = content.replace(/notFound\(\);?/g, 'return <Navigate to="/404" replace />;');
    changed = true;
  }
  
  // also fix next/navigation notFound -> Navigate
  if (content.includes('next/navigation')) {
    content = content.replace(/import\s+\{\s*notFound\s*\}\s+from\s+['"]next\/navigation['"];?/g, "import { Navigate } from 'react-router-dom';");
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed notFound in ${fullPath}`);
  }
});
