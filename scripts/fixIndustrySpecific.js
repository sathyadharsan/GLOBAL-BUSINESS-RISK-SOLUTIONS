const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/risksData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Remove the 4 extra industry-specific risks that were added beyond the required 41
const extraRisks = [
  { id: "digital-identity-theft", label: "Digital Identity Theft", description: "Compromise of personal digital identities" },
  { id: "biotech-research-failure", label: "Biotech Research Failure", description: "Failed clinical research leading to sunk costs" },
  { id: "oil-gas-price-volatility", label: "Oil & Gas Price Volatility", description: "Sharp swings in commodity prices affecting margins" },
  { id: "social-media-misinformation", label: "Social Media Misinformation", description: "Spread of false information harming brand" },
];

extraRisks.forEach(risk => {
  const regex = new RegExp(`\\s*\\{ id: "${risk.id}", label: "${risk.label.replace(/"/g, '\\"')}", description: "${risk.description.replace(/"/g, '\\"')}" \\},?\\n`, 'g');
  content = content.replace(regex, '');
});

// Write back
fs.writeFileSync(filePath, content);
console.log('Removed 4 extra industry-specific risks');
console.log('File updated successfully');
