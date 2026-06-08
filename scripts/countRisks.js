const fs = require('fs');
const data = fs.readFileSync('src/data/risksData.ts', 'utf8');

const counts = {};
['cross-industry', 'cross-functional', 'industry-specific', 'emerging'].forEach(cat => {
  const match = data.match(new RegExp(cat + '[\\s\\S]*?risks: \\[([\\s\\S]*?)\\]'));
  const ids = match[1].match(/id: "([^"]+)"/g).map(s => s.replace('id: "', '').replace('"', ''));
  counts[cat] = ids.length;
});

const total = Object.values(counts).reduce((a,b) => a+b, 0);
console.log('Cross-Industry:', counts['cross-industry']);
console.log('Cross-Functional:', counts['cross-functional']);
console.log('Industry-Specific:', counts['industry-specific']);
console.log('Emerging:', counts['emerging']);
console.log('Total:', total);
