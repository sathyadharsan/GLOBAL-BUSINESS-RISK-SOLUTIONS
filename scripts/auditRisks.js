const fs = require('fs');
const data = fs.readFileSync('src/data/risksData.ts', 'utf8');

const risks = [];
['cross-industry','cross-functional','industry-specific','emerging'].forEach(cat => {
  const m = data.match(new RegExp(cat + '[\\s\\S]*?risks: \\[([\\s\\S]*?)\\]'));
  if(m){
    const ids = m[1].match(/id: "([^"]+)"/g).map(s=>s.replace('id: "','').replace('"',''));
    ids.forEach(id => risks.push(id));
  }
});

console.log('Total risk detail routes:', risks.length);
console.log('Category routes:', 4);
console.log('Total risk pages:', risks.length + 4);
