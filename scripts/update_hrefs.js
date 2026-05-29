const fs = require('fs');
const file = 'src/components/layout/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

const reps = [
  // Desktop Industries
  ['<Link href="/industries" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Technology &amp; SaaS</div>',
   '<Link href="/industries/technology-saas" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Technology &amp; SaaS</div>'],
  ['<Link href="/industries" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Manufacturing &amp; Engineering</div>',
   '<Link href="/industries/manufacturing" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Manufacturing &amp; Engineering</div>'],
  ['<Link href="/industries" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Energy &amp; Renewables</div>',
   '<Link href="/industries/energy" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Energy &amp; Renewables</div>'],
  ['<Link href="/industries" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Financial Services &amp; Fintech</div>',
   '<Link href="/industries/fintech" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Financial Services &amp; Fintech</div>'],
  ['<Link href="/industries" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Infrastructure &amp; Real Estate</div>',
   '<Link href="/industries/infrastructure" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Infrastructure &amp; Real Estate</div>'],
  ['<Link href="/industries" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Trade, Logistics &amp; Supply Chain</div>',
   '<Link href="/industries/logistics" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Trade, Logistics &amp; Supply Chain</div>'],
  ['<Link href="/industries" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Agriculture &amp; Food Processing</div>',
   '<Link href="/industries/agriculture" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Agriculture &amp; Food Processing</div>'],
  ['<Link href="/industries" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Healthcare &amp; Pharma</div>',
   '<Link href="/industries/healthcare" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Healthcare &amp; Pharma</div>'],

  // Desktop Solutions
  ['<Link href="/solutions" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Global Program Architecture</div>',
   '<Link href="/solutions/global-program-architecture" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Global Program Architecture</div>'],
  ['<Link href="/solutions" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Captive Insurance & ART</div>',
   '<Link href="/solutions/captive-insurance" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Captive Insurance & ART</div>'],
  ['<Link href="/solutions" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Long-Tenor Infrastructure</div>',
   '<Link href="/solutions/long-tenor-infrastructure" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Long-Tenor Infrastructure</div>'],
  ['<Link href="/solutions" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">TCOR Analytics & Benchmarking</div>',
   '<Link href="/solutions/tcor-analytics" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">TCOR Analytics & Benchmarking</div>'],
  ['<Link href="/solutions" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Claims Advocacy</div>',
   '<Link href="/solutions/claims-advocacy" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Claims Advocacy</div>'],
  ['<Link href="/solutions" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Risk Engineering & Loss Prevention</div>',
   '<Link href="/solutions/risk-engineering" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Risk Engineering & Loss Prevention</div>'],

  // Desktop Use Cases
  ['<Link href="/use-cases" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Unicorn IPO — D&O Structuring</div>',
   '<Link href="/use-cases/unicorn-ipo" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Unicorn IPO — D&O Structuring</div>'],
  ['<Link href="/use-cases" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">PE Fund Exit — W&I Insurance</div>',
   '<Link href="/use-cases/pe-fund-exit" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">PE Fund Exit — W&I Insurance</div>'],
  ['<Link href="/use-cases" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">IT Firm Ransomware Attack</div>',
   '<Link href="/use-cases/it-ransomware" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">IT Firm Ransomware Attack</div>'],
  ['<Link href="/use-cases" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Factory Fire — BI + Rebuild</div>',
   '<Link href="/use-cases/factory-fire" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Factory Fire — BI + Rebuild</div>'],
  ['<Link href="/use-cases" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">500 MW Solar Park</div>',
   '<Link href="/use-cases/solar-park" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">500 MW Solar Park</div>'],
  ['<Link href="/use-cases" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">NHAI 15-Year Highway Concession</div>',
   '<Link href="/use-cases/nhai-highway" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">NHAI 15-Year Highway Concession</div>'],
  ['<Link href="/use-cases" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Supplier Flood — CBI Activation</div>',
   '<Link href="/use-cases/supplier-flood" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Supplier Flood — CBI Activation</div>'],
  ['<Link href="/use-cases" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">SEBI-Registered Adviser PI</div>',
   '<Link href="/use-cases/sebi-adviser" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">SEBI-Registered Adviser PI</div>'],

  // Desktop About Us
  ['<Link href="/about-us" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Our Story & Mission</div>',
   '<Link href="/about-us/our-story" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Our Story & Mission</div>'],
  ['<Link href="/about-us" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Leadership & Team</div>',
   '<Link href="/about-us/leadership" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Leadership & Team</div>'],
  ['<Link href="/about-us" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Credentials & Regulatory</div>',
   '<Link href="/about-us/credentials" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Credentials & Regulatory</div>'],
  ['<Link href="/about-us" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Markets & Carrier Relationships</div>',
   '<Link href="/about-us/markets" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Markets & Carrier Relationships</div>'],
  ['<Link href="/about-us" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">ESG & Sustainability</div>',
   '<Link href="/about-us/esg" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">ESG & Sustainability</div>'],
  ['<Link href="/about-us" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Careers</div>',
   '<Link href="/about-us/careers" className="block group/item">\n                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Careers</div>'],

  // Mobile Industries
  ['<Link href="/industries" className="hover:text-primary transition-colors">Technology &amp; SaaS</Link>',
   '<Link href="/industries/technology-saas" className="hover:text-primary transition-colors">Technology &amp; SaaS</Link>'],
  ['<Link href="/industries" className="hover:text-primary transition-colors">Manufacturing &amp; Engineering</Link>',
   '<Link href="/industries/manufacturing" className="hover:text-primary transition-colors">Manufacturing &amp; Engineering</Link>'],
  ['<Link href="/industries" className="hover:text-primary transition-colors">Energy &amp; Renewables</Link>',
   '<Link href="/industries/energy" className="hover:text-primary transition-colors">Energy &amp; Renewables</Link>'],
  ['<Link href="/industries" className="hover:text-primary transition-colors">Financial Services &amp; Fintech</Link>',
   '<Link href="/industries/fintech" className="hover:text-primary transition-colors">Financial Services &amp; Fintech</Link>'],
  ['<Link href="/industries" className="hover:text-primary transition-colors">Infrastructure &amp; Real Estate</Link>',
   '<Link href="/industries/infrastructure" className="hover:text-primary transition-colors">Infrastructure &amp; Real Estate</Link>'],
  ['<Link href="/industries" className="hover:text-primary transition-colors">Trade, Logistics &amp; Supply Chain</Link>',
   '<Link href="/industries/logistics" className="hover:text-primary transition-colors">Trade, Logistics &amp; Supply Chain</Link>'],
  ['<Link href="/industries" className="hover:text-primary transition-colors">Agriculture &amp; Food Processing</Link>',
   '<Link href="/industries/agriculture" className="hover:text-primary transition-colors">Agriculture &amp; Food Processing</Link>'],
  ['<Link href="/industries" className="hover:text-primary transition-colors">Healthcare &amp; Pharma</Link>',
   '<Link href="/industries/healthcare" className="hover:text-primary transition-colors">Healthcare &amp; Pharma</Link>'],

  // Mobile Solutions
  ['<Link href="/solutions" className="hover:text-primary transition-colors">Global Program Architecture</Link>',
   '<Link href="/solutions/global-program-architecture" className="hover:text-primary transition-colors">Global Program Architecture</Link>'],
  ['<Link href="/solutions" className="hover:text-primary transition-colors">Captive Insurance & ART</Link>',
   '<Link href="/solutions/captive-insurance" className="hover:text-primary transition-colors">Captive Insurance & ART</Link>'],
  ['<Link href="/solutions" className="hover:text-primary transition-colors">Long-Tenor Infrastructure Programs</Link>',
   '<Link href="/solutions/long-tenor-infrastructure" className="hover:text-primary transition-colors">Long-Tenor Infrastructure Programs</Link>'],
  ['<Link href="/solutions" className="hover:text-primary transition-colors">TCOR Analytics & Benchmarking</Link>',
   '<Link href="/solutions/tcor-analytics" className="hover:text-primary transition-colors">TCOR Analytics & Benchmarking</Link>'],
  ['<Link href="/solutions" className="hover:text-primary transition-colors">Claims Advocacy</Link>',
   '<Link href="/solutions/claims-advocacy" className="hover:text-primary transition-colors">Claims Advocacy</Link>'],
  ['<Link href="/solutions" className="hover:text-primary transition-colors">Risk Engineering & Loss Prevention</Link>',
   '<Link href="/solutions/risk-engineering" className="hover:text-primary transition-colors">Risk Engineering & Loss Prevention</Link>'],

  // Mobile Use Cases
  ['<Link href="/use-cases" className="hover:text-primary transition-colors">Property & Operational</Link>',
   '<Link href="/use-cases/property-operational" className="hover:text-primary transition-colors">Property & Operational</Link>'],
  ['<Link href="/use-cases" className="hover:text-primary transition-colors">Liability & Governance</Link>',
   '<Link href="/use-cases/liability-governance" className="hover:text-primary transition-colors">Liability & Governance</Link>'],
  ['<Link href="/use-cases" className="hover:text-primary transition-colors">Financial & M&A Lines</Link>',
   '<Link href="/use-cases/financial-ma" className="hover:text-primary transition-colors">Financial & M&A Lines</Link>'],
  ['<Link href="/use-cases" className="hover:text-primary transition-colors">Industry & Sector Specific</Link>',
   '<Link href="/use-cases/industry-specific" className="hover:text-primary transition-colors">Industry & Sector Specific</Link>'],

  // Mobile About Us
  ['<Link href="/about-us" className="hover:text-primary transition-colors">Our Story & Mission</Link>',
   '<Link href="/about-us/our-story" className="hover:text-primary transition-colors">Our Story & Mission</Link>'],
  ['<Link href="/about-us" className="hover:text-primary transition-colors">Leadership & Team</Link>',
   '<Link href="/about-us/leadership" className="hover:text-primary transition-colors">Leadership & Team</Link>'],
  ['<Link href="/about-us" className="hover:text-primary transition-colors">Credentials & Regulatory</Link>',
   '<Link href="/about-us/credentials" className="hover:text-primary transition-colors">Credentials & Regulatory</Link>'],
  ['<Link href="/about-us" className="hover:text-primary transition-colors">Markets & Carrier Relationships</Link>',
   '<Link href="/about-us/markets" className="hover:text-primary transition-colors">Markets & Carrier Relationships</Link>'],
  ['<Link href="/about-us" className="hover:text-primary transition-colors">ESG & Sustainability</Link>',
   '<Link href="/about-us/esg" className="hover:text-primary transition-colors">ESG & Sustainability</Link>'],
  ['<Link href="/about-us" className="hover:text-primary transition-colors">Careers</Link>',
   '<Link href="/about-us/careers" className="hover:text-primary transition-colors">Careers</Link>']
];

reps.forEach(rep => {
  content = content.replace(rep[0], rep[1]);
});

fs.writeFileSync(file, content, 'utf8');
console.log("Done");
