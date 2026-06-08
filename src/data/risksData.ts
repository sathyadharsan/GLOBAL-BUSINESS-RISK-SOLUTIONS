import * as React from "react";
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
      { id: "emerging-autonomous-vehicle", label: "Emerging Autonomous Vehicle", description: "Self-driving vehicle liability incidents" },
      { id: "emerging-drone-injury", label: "Emerging Drone Injury", description: "UAV operations causing bystander injury" },
      { id: "emerging-climate-tech", label: "Emerging Climate Tech", description: "Green technology underperformance" },
    ]
  },
};

export const risksData: Record<string, RiskData> = {
  "ransomware": {
    slug: "ransomware", label: "Ransomware Attack", description: "Malware encryption demanding payment for decryption",
    longDescription: "Enterprise-level malware encryption demanding payment for decryption exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "data-breach": {
    slug: "data-breach", label: "Data Breach (Customer PII)", description: "Unauthorized access to personal identifiable information",
    longDescription: "Enterprise-level unauthorized access to personal identifiable information exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "bec": {
    slug: "bec", label: "Business Email Compromise / Social Engineering", description: "Fraudulent wire transfers via executive impersonation",
    longDescription: "Enterprise-level fraudulent wire transfers via executive impersonation exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "supply-chain-cyber": {
    slug: "supply-chain-cyber", label: "Supply Chain Cyber Attack", description: "Trusted vendor compromise affecting downstream customers",
    longDescription: "Enterprise-level trusted vendor compromise affecting downstream customers exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "deepfake-fraud": {
    slug: "deepfake-fraud", label: "Deepfake Fraud", description: "AI-generated audio/video for fraudulent authorizations",
    longDescription: "Enterprise-level ai-generated audio/video for fraudulent authorizations exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "d-o-personal-liability": {
    slug: "d-o-personal-liability", label: "Directors & Officers Personal Liability", description: "Personal liability for directors and officers",
    longDescription: "Enterprise-level personal liability for directors and officers exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "employment-practices": {
    slug: "employment-practices", label: "Employment Practices Liability", description: "Workplace discrimination, harassment, and termination claims",
    longDescription: "Enterprise-level workplace discrimination, harassment, and termination claims exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "crime-employee-dishonesty": {
    slug: "crime-employee-dishonesty", label: "Crime & Employee Dishonesty", description: "Employee theft, embezzlement, and fraud",
    longDescription: "Enterprise-level employee theft, embezzlement, and fraud exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "natural-catastrophe": {
    slug: "natural-catastrophe", label: "Natural Catastrophe — Property Damage", description: "Fire, flood, earthquake, wind damage to physical assets",
    longDescription: "Enterprise-level fire, flood, earthquake, wind damage to physical assets exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "business-interruption": {
    slug: "business-interruption", label: "Business Interruption (All Causes)", description: "Revenue loss from operational disruption",
    longDescription: "Enterprise-level revenue loss from operational disruption exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "regulatory-investigation": {
    slug: "regulatory-investigation", label: "Regulatory Investigation & Fines", description: "Government penalties and enforcement actions",
    longDescription: "Enterprise-level government penalties and enforcement actions exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "class-action-lawsuit": {
    slug: "class-action-lawsuit", label: "Class Action Lawsuit", description: "Mass litigation with multiplicative damages",
    longDescription: "Enterprise-level mass litigation with multiplicative damages exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "key-person-loss": {
    slug: "key-person-loss", label: "Key Person Loss", description: "Dependence on critical individuals",
    longDescription: "Enterprise-level dependence on critical individuals exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "reputational-damage": {
    slug: "reputational-damage", label: "Reputational Damage", description: "Brand value erosion and public perception crises",
    longDescription: "Enterprise-level brand value erosion and public perception crises exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "ip-infringement": {
    slug: "ip-infringement", label: "Intellectual Property Infringement", description: "Patent, trademark, or copyright violations",
    longDescription: "Enterprise-level patent, trademark, or copyright violations exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "contract-risk-exposure": {
    slug: "contract-risk-exposure", label: "Contract Risk Exposure", description: "Unfavorable contractual terms and disputes",
    longDescription: "Enterprise-level unfavorable contractual terms and disputes exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "climate-physical": {
    slug: "climate-physical", label: "Climate Change — Physical Risk", description: "Increased frequency and severity of extreme weather events",
    longDescription: "Enterprise-level increased frequency and severity of extreme weather events exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "climate-transition": {
    slug: "climate-transition", label: "Climate Change — Transition Risk", description: "Asset write-downs as business models become obsolete",
    longDescription: "Enterprise-level asset write-downs as business models become obsolete exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "pandemic": {
    slug: "pandemic", label: "Pandemic / Communicable Disease", description: "Government-mandated shutdowns and workforce illness",
    longDescription: "Enterprise-level government-mandated shutdowns and workforce illness exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "ai-governance-failure": {
    slug: "ai-governance-failure", label: "AI Governance Failure", description: "Biased algorithms, unexplainable decisions, data privacy violations",
    longDescription: "Enterprise-level biased algorithms, unexplainable decisions, data privacy violations exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "single-source-supplier-failure": {
    slug: "single-source-supplier-failure", label: "Single-Source Supplier Failure", description: "Dependence on sole suppliers for critical components",
    longDescription: "Enterprise-level dependence on sole suppliers for critical components exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "geographic-concentration": {
    slug: "geographic-concentration", label: "Geographic Concentration Risk", description: "Over-reliance on single regions or markets",
    longDescription: "Enterprise-level over-reliance on single regions or markets exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "counterparty-customer-default": {
    slug: "counterparty-customer-default", label: "Counterparty / Customer Default", description: "Major customer or partner insolvency",
    longDescription: "Enterprise-level major customer or partner insolvency exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "currency-fluctuation": {
    slug: "currency-fluctuation", label: "Currency Fluctuation", description: "Exchange rate volatility impacting cross-border revenue",
    longDescription: "Enterprise-level exchange rate volatility impacting cross-border revenue exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "regulatory-compliance-failure": {
    slug: "regulatory-compliance-failure", label: "Regulatory Compliance Failure", description: "Failure to comply with applicable laws or regulations",
    longDescription: "Enterprise-level failure to comply with applicable laws or regulations exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "workforce-disruption": {
    slug: "workforce-disruption", label: "Workforce Disruption", description: "Labor shortages, strikes, or mass resignation events",
    longDescription: "Enterprise-level labor shortages, strikes, or mass resignation events exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "technology-obsolescence": {
    slug: "technology-obsolescence", label: "Technology Obsolescence", description: "Core systems becoming outdated and incompatible",
    longDescription: "Enterprise-level core systems becoming outdated and incompatible exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "m-a-transaction-risk": {
    slug: "m-a-transaction-risk", label: "M&A — Transaction Risk", description: "Undisclosed liabilities and integration failures",
    longDescription: "Enterprise-level undisclosed liabilities and integration failures exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "third-party-vendor-risk": {
    slug: "third-party-vendor-risk", label: "Third-Party / Vendor Risk", description: "Critical vendor failures or non-compliance",
    longDescription: "Enterprise-level critical vendor failures or non-compliance exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "data-privacy-protection": {
    slug: "data-privacy-protection", label: "Data Privacy & Protection", description: "GDPR, CCPA, DPDP and similar regulation violations",
    longDescription: "Enterprise-level gdpr, ccpa, dpdp and similar regulation violations exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "esg-risk": {
    slug: "esg-risk", label: "ESG Risk", description: "Environmental, Social, and Governance related litigation and fines",
    longDescription: "Enterprise-level environmental, social, and governance related litigation and fines exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "cloud-outage": {
    slug: "cloud-outage", label: "Cloud Infrastructure Outage", description: "Systemic service provider failures affecting all users",
    longDescription: "Enterprise-level systemic service provider failures affecting all users exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "ai-product-liability": {
    slug: "ai-product-liability", label: "AI Product Liability", description: "Harmful or biased decisions from AI systems",
    longDescription: "Enterprise-level harmful or biased decisions from ai systems exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "open-source-license": {
    slug: "open-source-license", label: "Open Source License Dispute", description: "Violations of open source licensing terms",
    longDescription: "Enterprise-level violations of open source licensing terms exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "securities-litigation": {
    slug: "securities-litigation", label: "Securities Litigation", description: "Shareholder claims of misrepresentation or omission",
    longDescription: "Enterprise-level shareholder claims of misrepresentation or omission exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "aml-violation": {
    slug: "aml-violation", label: "Anti-Money Laundering Violation", description: "Regulatory failures in detecting financial crime",
    longDescription: "Enterprise-level regulatory failures in detecting financial crime exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "fiduciary-breach": {
    slug: "fiduciary-breach", label: "Fiduciary Breach", description: "Breach of duty in managing funds or investments",
    longDescription: "Enterprise-level breach of duty in managing funds or investments exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "crypto-exchange-hack": {
    slug: "crypto-exchange-hack", label: "Crypto Exchange Hack", description: "Hot wallet or platform compromise",
    longDescription: "Enterprise-level hot wallet or platform compromise exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "smart-contract-exploit": {
    slug: "smart-contract-exploit", label: "Smart Contract Exploit", description: "DeFi protocol vulnerabilities and exploits",
    longDescription: "Enterprise-level defi protocol vulnerabilities and exploits exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "validator-slashing": {
    slug: "validator-slashing", label: "Validator Slashing", description: "Proof-of-stake penalties for protocol violations",
    longDescription: "Enterprise-level proof-of-stake penalties for protocol violations exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "medical-malpractice": {
    slug: "medical-malpractice", label: "Medical Malpractice", description: "Healthcare provider negligence claims",
    longDescription: "Enterprise-level healthcare provider negligence claims exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "pharmaceutical-product-liability": {
    slug: "pharmaceutical-product-liability", label: "Pharmaceutical Product Liability", description: "Drug-related injury and mass tort litigation",
    longDescription: "Enterprise-level drug-related injury and mass tort litigation exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "clinical-trial-failure": {
    slug: "clinical-trial-failure", label: "Clinical Trial Failure", description: "Drug candidate failure and R&D write-offs",
    longDescription: "Enterprise-level drug candidate failure and r&d write-offs exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "hipaa-violation": {
    slug: "hipaa-violation", label: "HIPAA Violation", description: "Patient health information protection failures",
    longDescription: "Enterprise-level patient health information protection failures exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "product-recall": {
    slug: "product-recall", label: "Product Recall", description: "Defective or contaminated product retrieval",
    longDescription: "Enterprise-level defective or contaminated product retrieval exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "environmental-contamination": {
    slug: "environmental-contamination", label: "Environmental Contamination", description: "Industrial pollution and cleanup costs",
    longDescription: "Enterprise-level industrial pollution and cleanup costs exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "workplace-fatality": {
    slug: "workplace-fatality", label: "Workplace Fatality / Serious Injury", description: "Employee injury or death on premises",
    longDescription: "Enterprise-level employee injury or death on premises exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "warranty-cost-escalation": {
    slug: "warranty-cost-escalation", label: "Warranty Cost Escalation", description: "Unexpected warranty claims exceeding projections",
    longDescription: "Enterprise-level unexpected warranty claims exceeding projections exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "well-blowout": {
    slug: "well-blowout", label: "Well Blowout / Oil Spill", description: "Uncontrolled release of oil or gas",
    longDescription: "Enterprise-level uncontrolled release of oil or gas exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "renewable-generation-variability": {
    slug: "renewable-generation-variability", label: "Renewable Energy — Generation Variability", description: "Solar/wind underperformance affecting contracts",
    longDescription: "Enterprise-level solar/wind underperformance affecting contracts exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "tailings-dam-failure": {
    slug: "tailings-dam-failure", label: "Mining — Tailings Dam Failure", description: "Catastrophic waste storage facility collapse",
    longDescription: "Enterprise-level catastrophic waste storage facility collapse exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "rare-earth-supply": {
    slug: "rare-earth-supply", label: "Rare Earth Supply Disruption", description: "Critical material shortages affecting production",
    longDescription: "Enterprise-level critical material shortages affecting production exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "construction-delay": {
    slug: "construction-delay", label: "Construction Delay & Cost Overrun", description: "Projects exceeding budget and schedule",
    longDescription: "Enterprise-level projects exceeding budget and schedule exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "defective-workmanship": {
    slug: "defective-workmanship", label: "Defective Workmanship / Design Defect", description: "Structural defects requiring rebuild",
    longDescription: "Enterprise-level structural defects requiring rebuild exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "contractor-insolvency": {
    slug: "contractor-insolvency", label: "Contractor Insolvency", description: "General contractor financial failure mid-project",
    longDescription: "Enterprise-level general contractor financial failure mid-project exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "cargo-theft": {
    slug: "cargo-theft", label: "Cargo Theft in Transit", description: "High-value shipment theft during transport",
    longDescription: "Enterprise-level high-value shipment theft during transport exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "container-ship-casualty": {
    slug: "container-ship-casualty", label: "Container Ship Casualty", description: "Vessel incidents disrupting global trade",
    longDescription: "Enterprise-level vessel incidents disrupting global trade exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "aviation-fatal-accident": {
    slug: "aviation-fatal-accident", label: "Aviation — Fatal Accident", description: "Aircraft crashes causing liability claims",
    longDescription: "Enterprise-level aircraft crashes causing liability claims exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "satellite-launch-failure": {
    slug: "satellite-launch-failure", label: "Satellite Launch Failure", description: "Rocket failures destroying high-value payloads",
    longDescription: "Enterprise-level rocket failures destroying high-value payloads exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "satellite-cyber-attack": {
    slug: "satellite-cyber-attack", label: "Satellite Cyber Attack", description: "Jamming, spoofing, and command takeover",
    longDescription: "Enterprise-level jamming, spoofing, and command takeover exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "drone-injury": {
    slug: "drone-injury", label: "Drone — Third-Party Injury", description: "UAV operations causing bystander injury",
    longDescription: "Enterprise-level uav operations causing bystander injury exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "autonomous-vehicle-accident": {
    slug: "autonomous-vehicle-accident", label: "Autonomous Vehicle — Fatal Accident", description: "Self-driving vehicle liability incidents",
    longDescription: "Enterprise-level self-driving vehicle liability incidents exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "quantum-encryption-breach": {
    slug: "quantum-encryption-breach", label: "Quantum Computing — Encryption Breach", description: "Current encryption rendered obsolete",
    longDescription: "Enterprise-level current encryption rendered obsolete exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "ecommerce-data-breach": {
    slug: "ecommerce-data-breach", label: "E-Commerce Data Breach", description: "Payment card and customer data theft",
    longDescription: "Enterprise-level payment card and customer data theft exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "food-safety-incident": {
    slug: "food-safety-incident", label: "Food Safety Incident", description: "Contaminated product causing illness",
    longDescription: "Enterprise-level contaminated product causing illness exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "hotel-guest-injury": {
    slug: "hotel-guest-injury", label: "Hotel / Resort — Guest Injury", description: "Guest injury on property",
    longDescription: "Enterprise-level guest injury on property exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "crop-failure": {
    slug: "crop-failure", label: "Crop Failure — Drought", description: "Agricultural production loss from drought",
    longDescription: "Enterprise-level agricultural production loss from drought exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "livestock-epidemic": {
    slug: "livestock-epidemic", label: "Livestock Disease Epidemic", description: "Animal disease outbreak requiring culling",
    longDescription: "Enterprise-level animal disease outbreak requiring culling exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "critical-infrastructure-cyber": {
    slug: "critical-infrastructure-cyber", label: "Critical Infrastructure Cyber Attack", description: "Power grid and utility disruptions",
    longDescription: "Enterprise-level power grid and utility disruptions exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "ppp-concession-frustration": {
    slug: "ppp-concession-frustration", label: "PPP / Concession Agreement Frustration", description: "Government contract termination or modification",
    longDescription: "Enterprise-level government contract termination or modification exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "cannabis-regulatory": {
    slug: "cannabis-regulatory", label: "Cannabis — Regulatory Enforcement", description: "Licensing and compliance failures",
    longDescription: "Enterprise-level licensing and compliance failures exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "climate-tech-failure": {
    slug: "climate-tech-failure", label: "Climate Tech — Technology Failure", description: "Green technology underperformance",
    longDescription: "Enterprise-level green technology underperformance exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "emerging-ai-governance": {
    slug: "emerging-ai-governance", label: "Emerging AI Governance", description: "Regulatory compliance and algorithm bias risks",
    longDescription: "Enterprise-level regulatory compliance and algorithm bias risks exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "emerging-quantum-encryption": {
    slug: "emerging-quantum-encryption", label: "Emerging Quantum Encryption", description: "Current encryption rendered obsolete by quantum computers",
    longDescription: "Enterprise-level current encryption rendered obsolete by quantum computers exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "emerging-satellite-cyber": {
    slug: "emerging-satellite-cyber", label: "Emerging Satellite Cyber", description: "Jamming, spoofing, and command takeover",
    longDescription: "Enterprise-level jamming, spoofing, and command takeover exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "emerging-autonomous-vehicle": {
    slug: "emerging-autonomous-vehicle", label: "Emerging Autonomous Vehicle", description: "Self-driving vehicle liability incidents",
    longDescription: "Enterprise-level self-driving vehicle liability incidents exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "emerging-drone-injury": {
    slug: "emerging-drone-injury", label: "Emerging Drone Injury", description: "UAV operations causing bystander injury",
    longDescription: "Enterprise-level uav operations causing bystander injury exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },

  "emerging-climate-tech": {
    slug: "emerging-climate-tech", label: "Emerging Climate Tech", description: "Green technology underperformance",
    longDescription: "Enterprise-level green technology underperformance exposure with significant operational, financial, and reputational implications for organizations across sectors.",
    icon: Shield, color: "#1E40AF", costOfRisk: "$1M — $500M+ per incident", likelihood: "Likely",
    businessImpact: { operational: "Significant operational disruption across business units", financial: "Direct losses, remediation costs, and legal expenses", regulatory: "Regulatory scrutiny and compliance penalties", reputational: "Brand damage and stakeholder trust erosion" },
    potentialImplications: ["Operational disruption", "Financial losses", "Regulatory penalties", "Reputational damage", "Litigation exposure", "Insurance premium increases"],
    relatedIndustries: ["all"], relatedOfferings: ["cyber", "directors-officers"], relatedSolutions: ["Enterprise Risk Management Consulting"]
  },
};
