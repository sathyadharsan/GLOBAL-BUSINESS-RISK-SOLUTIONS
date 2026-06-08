const fs = require('fs');

const risks = [
  { id: "ransomware", label: "Ransomware Attack", desc: "Malware encryption demanding payment for decryption" },
  { id: "data-breach", label: "Data Breach (Customer PII)", desc: "Unauthorized access to personal identifiable information" },
  { id: "bec", label: "Business Email Compromise / Social Engineering", desc: "Fraudulent wire transfers via executive impersonation" },
  { id: "supply-chain-cyber", label: "Supply Chain Cyber Attack", desc: "Trusted vendor compromise affecting downstream customers" },
  { id: "deepfake-fraud", label: "Deepfake Fraud", desc: "AI-generated audio/video for fraudulent authorizations" },
  { id: "d-o-personal-liability", label: "Directors & Officers Personal Liability", desc: "Personal liability for directors and officers" },
  { id: "employment-practices", label: "Employment Practices Liability", desc: "Workplace discrimination, harassment, and termination claims" },
  { id: "crime-employee-dishonesty", label: "Crime & Employee Dishonesty", desc: "Employee theft, embezzlement, and fraud" },
  { id: "natural-catastrophe", label: "Natural Catastrophe — Property Damage", desc: "Fire, flood, earthquake, wind damage to physical assets" },
  { id: "business-interruption", label: "Business Interruption (All Causes)", desc: "Revenue loss from operational disruption" },
  { id: "regulatory-investigation", label: "Regulatory Investigation & Fines", desc: "Government penalties and enforcement actions" },
  { id: "class-action-lawsuit", label: "Class Action Lawsuit", desc: "Mass litigation with multiplicative damages" },
  { id: "key-person-loss", label: "Key Person Loss", desc: "Dependence on critical individuals" },
  { id: "reputational-damage", label: "Reputational Damage", desc: "Brand value erosion and public perception crises" },
  { id: "ip-infringement", label: "Intellectual Property Infringement", desc: "Patent, trademark, or copyright violations" },
  { id: "contract-risk-exposure", label: "Contract Risk Exposure", desc: "Unfavorable contractual terms and disputes" },
  { id: "climate-physical", label: "Climate Change — Physical Risk", desc: "Increased frequency and severity of extreme weather events" },
  { id: "climate-transition", label: "Climate Change — Transition Risk", desc: "Asset write-downs as business models become obsolete" },
  { id: "pandemic", label: "Pandemic / Communicable Disease", desc: "Government-mandated shutdowns and workforce illness" },
  { id: "ai-governance-failure", label: "AI Governance Failure", desc: "Biased algorithms, unexplainable decisions, data privacy violations" },
  { id: "single-source-supplier-failure", label: "Single-Source Supplier Failure", desc: "Dependence on sole suppliers for critical components" },
  { id: "geographic-concentration", label: "Geographic Concentration Risk", desc: "Over-reliance on single regions or markets" },
  { id: "counterparty-customer-default", label: "Counterparty / Customer Default", desc: "Major customer or partner insolvency" },
  { id: "currency-fluctuation", label: "Currency Fluctuation", desc: "Exchange rate volatility impacting cross-border revenue" },
  { id: "regulatory-compliance-failure", label: "Regulatory Compliance Failure", desc: "Failure to comply with applicable laws or regulations" },
  { id: "workforce-disruption", label: "Workforce Disruption", desc: "Labor shortages, strikes, or mass resignation events" },
  { id: "technology-obsolescence", label: "Technology Obsolescence", desc: "Core systems becoming outdated and incompatible" },
  { id: "m-a-transaction-risk", label: "M&A — Transaction Risk", desc: "Undisclosed liabilities and integration failures" },
  { id: "third-party-vendor-risk", label: "Third-Party / Vendor Risk", desc: "Critical vendor failures or non-compliance" },
  { id: "data-privacy-protection", label: "Data Privacy & Protection", desc: "GDPR, CCPA, DPDP and similar regulation violations" },
  { id: "esg-risk", label: "ESG Risk", desc: "Environmental, Social, and Governance related litigation and fines" },
  { id: "cloud-outage", label: "Cloud Infrastructure Outage", desc: "Systemic service provider failures affecting all users" },
  { id: "ai-product-liability", label: "AI Product Liability", desc: "Harmful or biased decisions from AI systems" },
  { id: "open-source-license", label: "Open Source License Dispute", desc: "Violations of open source licensing terms" },
  { id: "securities-litigation", label: "Securities Litigation", desc: "Shareholder claims of misrepresentation or omission" },
  { id: "aml-violation", label: "Anti-Money Laundering Violation", desc: "Regulatory failures in detecting financial crime" },
  { id: "fiduciary-breach", label: "Fiduciary Breach", desc: "Breach of duty in managing funds or investments" },
  { id: "crypto-exchange-hack", label: "Crypto Exchange Hack", desc: "Hot wallet or platform compromise" },
  { id: "smart-contract-exploit", label: "Smart Contract Exploit", desc: "DeFi protocol vulnerabilities and exploits" },
  { id: "validator-slashing", label: "Validator Slashing", desc: "Proof-of-stake penalties for protocol violations" },
  { id: "medical-malpractice", label: "Medical Malpractice", desc: "Healthcare provider negligence claims" },
  { id: "pharmaceutical-product-liability", label: "Pharmaceutical Product Liability", desc: "Drug-related injury and mass tort litigation" },
  { id: "clinical-trial-failure", label: "Clinical Trial Failure", desc: "Drug candidate failure and R&D write-offs" },
  { id: "hipaa-violation", label: "HIPAA Violation", desc: "Patient health information protection failures" },
  { id: "product-recall", label: "Product Recall", desc: "Defective or contaminated product retrieval" },
  { id: "environmental-contamination", label: "Environmental Contamination", desc: "Industrial pollution and cleanup costs" },
  { id: "workplace-fatality", label: "Workplace Fatality / Serious Injury", desc: "Employee injury or death on premises" },
  { id: "warranty-cost-escalation", label: "Warranty Cost Escalation", desc: "Unexpected warranty claims exceeding projections" },
  { id: "well-blowout", label: "Well Blowout / Oil Spill", desc: "Uncontrolled release of oil or gas" },
  { id: "renewable-generation-variability", label: "Renewable Energy — Generation Variability", desc: "Solar/wind underperformance affecting contracts" },
  { id: "tailings-dam-failure", label: "Mining — Tailings Dam Failure", desc: "Catastrophic waste storage facility collapse" },
  { id: "rare-earth-supply", label: "Rare Earth Supply Disruption", desc: "Critical material shortages affecting production" },
  { id: "construction-delay", label: "Construction Delay & Cost Overrun", desc: "Projects exceeding budget and schedule" },
  { id: "defective-workmanship", label: "Defective Workmanship / Design Defect", desc: "Structural defects requiring rebuild" },
  { id: "contractor-insolvency", label: "Contractor Insolvency", desc: "General contractor financial failure mid-project" },
  { id: "cargo-theft", label: "Cargo Theft in Transit", desc: "High-value shipment theft during transport" },
  { id: "container-ship-casualty", label: "Container Ship Casualty", desc: "Vessel incidents disrupting global trade" },
  { id: "aviation-fatal-accident", label: "Aviation — Fatal Accident", desc: "Aircraft crashes causing liability claims" },
  { id: "satellite-launch-failure", label: "Satellite Launch Failure", desc: "Rocket failures destroying high-value payloads" },
  { id: "satellite-cyber-attack", label: "Satellite Cyber Attack", desc: "Jamming, spoofing, and command takeover" },
  { id: "drone-injury", label: "Drone — Third-Party Injury", desc: "UAV operations causing bystander injury" },
  { id: "autonomous-vehicle-accident", label: "Autonomous Vehicle — Fatal Accident", desc: "Self-driving vehicle liability incidents" },
  { id: "quantum-encryption-breach", label: "Quantum Computing — Encryption Breach", desc: "Current encryption rendered obsolete" },
  { id: "ecommerce-data-breach", label: "E-Commerce Data Breach", desc: "Payment card and customer data theft" },
  { id: "food-safety-incident", label: "Food Safety Incident", desc: "Contaminated product causing illness" },
  { id: "hotel-guest-injury", label: "Hotel / Resort — Guest Injury", desc: "Guest injury on property" },
  { id: "crop-failure", label: "Crop Failure — Drought", desc: "Agricultural production loss from drought" },
  { id: "livestock-epidemic", label: "Livestock Disease Epidemic", desc: "Animal disease outbreak requiring culling" },
  { id: "critical-infrastructure-cyber", label: "Critical Infrastructure Cyber Attack", desc: "Power grid and utility disruptions" },
  { id: "ppp-concession-frustration", label: "PPP / Concession Agreement Frustration", desc: "Government contract termination or modification" },
  { id: "cannabis-regulatory", label: "Cannabis — Regulatory Enforcement", desc: "Licensing and compliance failures" },
  { id: "climate-tech-failure", label: "Climate Tech — Technology Failure", desc: "Green technology underperformance" },
  { id: "emerging-ai-governance", label: "Emerging AI Governance", desc: "Regulatory compliance and algorithm bias risks" },
  { id: "emerging-quantum-encryption", label: "Emerging Quantum Encryption", desc: "Current encryption rendered obsolete by quantum computers" },
  { id: "emerging-satellite-cyber", label: "Emerging Satellite Cyber", desc: "Jamming, spoofing, and command takeover" },
  { id: "emerging-autonomous-vehicle", label: "Emerging Autonomous Vehicle", desc: "Self-driving vehicle liability incidents" },
  { id: "emerging-drone-injury", label: "Emerging Drone Injury", desc: "UAV operations causing bystander injury" },
  { id: "emerging-climate-tech", label: "Emerging Climate Tech", desc: "Green technology underperformance" },
];

// Generate RiskData entries
const riskDataEntries = risks.map(r => `  "${r.id}": {
    slug: "${r.id}", label: "${r.label}", description: "${r.desc}",
    longDescription: "Enterprise-level ${r.desc.toLowerCase()} exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },`).join('\n\n');

const fullContent = `import * as React from "react";
import { Zap, Database, Mail, Bot, Users, Lock, Flame, Recycle, FileWarning, Scale, Gavel, Target, TrendingUp, HeartPulse, Shield, Share2, Building2, Rocket, UserX, Thermometer, Truck, Globe, CreditCard, Banknote, Cpu, Briefcase, Container, Leaf, Cloud, Brain, FileCode, Eye, Coins, Server, Gem, Pill, HardHat, Wrench, Building, Ship, Car, Drone, Satellite, DollarSign, AlertTriangle, Package, Factory, FlaskConical, Wheat, FileSearch, ShoppingCart, Apple, Hotel, Fuel, Headphones } from "lucide-react";

export interface RiskData {
  slug: string;
  label: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  costOfRisk: string;
  likelihood: "Rare" | "Possible" | "Likely" | "Very Likely" | "Almost Certain";
  businessImpact: {
    operational: string;
    financial: string;
    regulatory: string;
    reputational: string;
  };
  potentialImplications: string[];
  relatedIndustries: string[];
  relatedOfferings: string[];
  relatedSolutions: string[];
}

export interface RiskCategory {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  risks: {
    id: string;
    label: string;
    description: string;
  }[];
}

export const riskCategories: Record<string, RiskCategory> = {
  "cross-industry": {
    id: "cross-industry",
    label: "Cross-Industry Risks",
    icon: Shield,
    color: "#1E40AF",
    risks: [
      { id: "ransomware", label: "Ransomware Attack", description: "Malware encryption demanding payment for decryption" },
      { id: "data-breach", label: "Data Breach (Customer PII)", description: "Unauthorized access to personal identifiable information" },
      { id: "bec", label: "Business Email Compromise / Social Engineering", description: "Fraudulent wire transfers via executive impersonation" },
      { id: "supply-chain-cyber", label: "Supply Chain Cyber Attack", description: "Trusted vendor compromise affecting downstream customers" },
      { id: "deepfake-fraud", label: "Deepfake Fraud", description: "AI-generated audio/video for fraudulent authorizations" },
      { id: "d-o-personal-liability", label: "Directors & Officers Personal Liability", description: "Personal liability for directors and officers" },
      { id: "employment-practices", label: "Employment Practices Liability", description: "Workplace discrimination, harassment, and termination claims" },
      { id: "crime-employee-dishonesty", label: "Crime & Employee Dishonesty", description: "Employee theft, embezzlement, and fraud" },
      { id: "natural-catastrophe", label: "Natural Catastrophe — Property Damage", description: "Fire, flood, earthquake, wind damage to physical assets" },
      { id: "business-interruption", label: "Business Interruption (All Causes)", description: "Revenue loss from operational disruption" },
      { id: "regulatory-investigation", label: "Regulatory Investigation & Fines", description: "Government penalties and enforcement actions" },
      { id: "class-action-lawsuit", label: "Class Action Lawsuit", description: "Mass litigation with multiplicative damages" },
      { id: "key-person-loss", label: "Key Person Loss", description: "Dependence on critical individuals" },
      { id: "reputational-damage", label: "Reputational Damage", description: "Brand value erosion and public perception crises" },
      { id: "ip-infringement", label: "Intellectual Property Infringement", description: "Patent, trademark, or copyright violations" },
      { id: "contract-risk-exposure", label: "Contract Risk Exposure", description: "Unfavorable contractual terms and disputes" },
      { id: "climate-physical", label: "Climate Change — Physical Risk", description: "Increased frequency and severity of extreme weather events" },
      { id: "climate-transition", label: "Climate Change — Transition Risk", description: "Asset write-downs as business models become obsolete" },
      { id: "pandemic", label: "Pandemic / Communicable Disease", description: "Government-mandated shutdowns and workforce illness" },
      { id: "ai-governance-failure", label: "AI Governance Failure", description: "Biased algorithms, unexplainable decisions, data privacy violations" },
    ]
  },
  "cross-functional": {
    id: "cross-functional",
    label: "Cross-Functional Risks",
    icon: Share2,
    color: "#7C3AED",
    risks: [
      { id: "single-source-supplier-failure", label: "Single-Source Supplier Failure", description: "Dependence on sole suppliers for critical components" },
      { id: "geographic-concentration", label: "Geographic Concentration Risk", description: "Over-reliance on single regions or markets" },
      { id: "counterparty-customer-default", label: "Counterparty / Customer Default", description: "Major customer or partner insolvency" },
      { id: "currency-fluctuation", label: "Currency Fluctuation", description: "Exchange rate volatility impacting cross-border revenue" },
      { id: "regulatory-compliance-failure", label: "Regulatory Compliance Failure", description: "Failure to comply with applicable laws or regulations" },
      { id: "workforce-disruption", label: "Workforce Disruption", description: "Labor shortages, strikes, or mass resignation events" },
      { id: "technology-obsolescence", label: "Technology Obsolescence", description: "Core systems becoming outdated and incompatible" },
      { id: "m-a-transaction-risk", label: "M&A — Transaction Risk", description: "Undisclosed liabilities and integration failures" },
      { id: "third-party-vendor-risk", label: "Third-Party / Vendor Risk", description: "Critical vendor failures or non-compliance" },
      { id: "data-privacy-protection", label: "Data Privacy & Protection", description: "GDPR, CCPA, DPDP and similar regulation violations" },
      { id: "esg-risk", label: "ESG Risk", description: "Environmental, Social, and Governance related litigation and fines" },
    ]
  },
  "industry-specific": {
    id: "industry-specific",
    label: "Industry-Specific Risks",
    icon: Building2,
    color: "#0D9488",
    risks: [
      { id: "cloud-outage", label: "Cloud Infrastructure Outage", description: "Systemic service provider failures affecting all users" },
      { id: "ai-product-liability", label: "AI Product Liability", description: "Harmful or biased decisions from AI systems" },
      { id: "open-source-license", label: "Open Source License Dispute", description: "Violations of open source licensing terms" },
      { id: "securities-litigation", label: "Securities Litigation", description: "Shareholder claims of misrepresentation or omission" },
      { id: "aml-violation", label: "Anti-Money Laundering Violation", description: "Regulatory failures in detecting financial crime" },
      { id: "fiduciary-breach", label: "Fiduciary Breach", description: "Breach of duty in managing funds or investments" },
      { id: "crypto-exchange-hack", label: "Crypto Exchange Hack", description: "Hot wallet or platform compromise" },
      { id: "smart-contract-exploit", label: "Smart Contract Exploit", description: "DeFi protocol vulnerabilities and exploits" },
      { id: "validator-slashing", label: "Validator Slashing", description: "Proof-of-stake penalties for protocol violations" },
      { id: "medical-malpractice", label: "Medical Malpractice", description: "Healthcare provider negligence claims" },
      { id: "pharmaceutical-product-liability", label: "Pharmaceutical Product Liability", description: "Drug-related injury and mass tort litigation" },
      { id: "clinical-trial-failure", label: "Clinical Trial Failure", description: "Drug candidate failure and R&D write-offs" },
      { id: "hipaa-violation", label: "HIPAA Violation", description: "Patient health information protection failures" },
      { id: "product-recall", label: "Product Recall", description: "Defective or contaminated product retrieval" },
      { id: "environmental-contamination", label: "Environmental Contamination", description: "Industrial pollution and cleanup costs" },
      { id: "workplace-fatality", label: "Workplace Fatality / Serious Injury", description: "Employee injury or death on premises" },
      { id: "warranty-cost-escalation", label: "Warranty Cost Escalation", description: "Unexpected warranty claims exceeding projections" },
      { id: "well-blowout", label: "Well Blowout / Oil Spill", description: "Uncontrolled release of oil or gas" },
      { id: "renewable-generation-variability", label: "Renewable Energy — Generation Variability", description: "Solar/wind underperformance affecting contracts" },
      { id: "tailings-dam-failure", label: "Mining — Tailings Dam Failure", description: "Catastrophic waste storage facility collapse" },
      { id: "rare-earth-supply", label: "Rare Earth Supply Disruption", description: "Critical material shortages affecting production" },
      { id: "construction-delay", label: "Construction Delay & Cost Overrun", description: "Projects exceeding budget and schedule" },
      { id: "defective-workmanship", label: "Defective Workmanship / Design Defect", description: "Structural defects requiring rebuild" },
      { id: "contractor-insolvency", label: "Contractor Insolvency", description: "General contractor financial failure mid-project" },
      { id: "cargo-theft", label: "Cargo Theft in Transit", description: "High-value shipment theft during transport" },
      { id: "container-ship-casualty", label: "Container Ship Casualty", description: "Vessel incidents disrupting global trade" },
      { id: "aviation-fatal-accident", label: "Aviation — Fatal Accident", description: "Aircraft crashes causing liability claims" },
      { id: "satellite-launch-failure", label: "Satellite Launch Failure", description: "Rocket failures destroying high-value payloads" },
      { id: "satellite-cyber-attack", label: "Satellite Cyber Attack", description: "Jamming, spoofing, and command takeover" },
      { id: "drone-injury", label: "Drone — Third-Party Injury", description: "UAV operations causing bystander injury" },
      { id: "autonomous-vehicle-accident", label: "Autonomous Vehicle — Fatal Accident", description: "Self-driving vehicle liability incidents" },
      { id: "quantum-encryption-breach", label: "Quantum Computing — Encryption Breach", description: "Current encryption rendered obsolete" },
      { id: "ecommerce-data-breach", label: "E-Commerce Data Breach", description: "Payment card and customer data theft" },
      { id: "food-safety-incident", label: "Food Safety Incident", description: "Contaminated product causing illness" },
      { id: "hotel-guest-injury", label: "Hotel / Resort — Guest Injury", description: "Guest injury on property" },
      { id: "crop-failure", label: "Crop Failure — Drought", description: "Agricultural production loss from drought" },
      { id: "livestock-epidemic", label: "Livestock Disease Epidemic", description: "Animal disease outbreak requiring culling" },
      { id: "critical-infrastructure-cyber", label: "Critical Infrastructure Cyber Attack", description: "Power grid and utility disruptions" },
      { id: "ppp-concession-frustration", label: "PPP / Concession Agreement Frustration", description: "Government contract termination or modification" },
      { id: "cannabis-regulatory", label: "Cannabis — Regulatory Enforcement", description: "Licensing and compliance failures" },
      { id: "climate-tech-failure", label: "Climate Tech — Technology Failure", description: "Green technology underperformance" },
    ]
  },
  "emerging": {
    id: "emerging",
    label: "Emerging Risks",
    icon: Rocket,
    color: "#6D28D9",
    risks: [
      { id: "emerging-ai-governance", label: "Emerging AI Governance", description: "Regulatory compliance and algorithm bias risks" },
      { id: "emerging-quantum-encryption", label: "Emerging Quantum Encryption", description: "Current encryption rendered obsolete by quantum computers" },
      { id: "emerging-satellite-cyber", label: "Emerging Satellite Cyber", description: "Jamming, spoofing, and command takeover" },
      { id: "emerging-autonomous-vehicle", label: "Emerging Autonomous Vehicle", desc: "Self-driving vehicle liability incidents" },
      { id: "emerging-drone-injury", label: "Emerging Drone Injury", desc: "UAV operations causing bystander injury" },
      { id: "emerging-climate-tech", label: "Emerging Climate Tech", desc: "Green technology underperformance" },
    ]
  },
};

export const risksData: Record<string, RiskData> = {
${riskDataEntries}
};
`;

fs.writeFileSync('src/data/risksData.ts', fullContent);
console.log('Done. Total risks:', risks.length);
