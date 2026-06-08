const fs = require('fs');
const data = fs.readFileSync('src/data/risksData.ts', 'utf8');

const counts = {};
['cross-industry', 'cross-functional', 'industry-specific', 'emerging'].forEach(cat => {
  const match = data.match(new RegExp(cat + '[\\s\\S]*?risks: \\[([\\s\\S]*?)\\]'));
  const ids = match[1].match(/id: "([^"]+)"/g).map(s => s.replace('id: "', '').replace('"', ''));
  counts[cat] = ids;
  console.log(`${cat}: ${ids.length}`);
});

// Check for duplicates
const all = Object.values(counts).flat();
const dupes = all.filter((id, i) => all.indexOf(id) !== i);
console.log('Duplicates:', [...new Set(dupes)]);

// Count risksData entries
const risksDataMatch = data.match(/export const risksData[\s\S]*?^};/m);
const risksDataIds = risksDataMatch[0].match(/^\s+"([^"]+)":/gm).map(s => s.trim().replace('":', '').replace('"', '').replace(/^"/, ''));
console.log('risksData entries:', risksDataIds.length);

// Check for missing
const missing = all.filter(id => !risksDataIds.includes(id));
console.log('Missing in risksData:', missing.length, missing);

// Check for extras in risksData
const extra = risksDataIds.filter(id => !all.includes(id));
console.log('Extra in risksData:', extra.length, extra);
