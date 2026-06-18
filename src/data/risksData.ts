import * as React from "react";
import { Zap, Database, Mail, Bot, Users, Lock, Flame, Recycle, FileWarning, Scale, Gavel, Target, TrendingUp, HeartPulse, Shield, Share2, Building2, Rocket, UserX, Thermometer, Truck, Globe, CreditCard, Banknote, Cpu, Briefcase, Container, Leaf, Cloud, Brain, FileCode, Eye, Coins, Server, Gem, Pill, HardHat, Wrench, Building, Ship, Car, Drone, Satellite, DollarSign, AlertTriangle, Package, Factory, FlaskConical, Wheat, FileSearch, ShoppingCart, Apple, Hotel, Fuel, Headphones, Activity, FileText } from "lucide-react";

export interface RiskData {
  slug: string;
  label: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  costOfRisk: string;
  currentState: string;
  timeValueOfMitigation: string;
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
    longDescription: "Enterprise-grade ransomware attack encrypting critical systems with data theft and public release threats, causing operational paralysis, regulatory notification obligations, and third-party liability. Average downtime 22 days and payments averaging $1.5M make this a high-velocity, board-level priority exposure.",
    icon: Bot, color: "#DC2626", costOfRisk: "$4.5M average total cost per incident; $10M–$100M+ for critical infrastructure", currentState: "Endemic — 72% of organizations attacked in 2023; average downtime 22 days", timeValueOfMitigation: "Hyper-acute — 96-hour payment deadline; business continuity plan execution value highest in first 4 hours",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Average 22-day downtime; production halt, asset unusability, service suspension across geographies",
      financial: "Direct ransom demands averaging $1.5M; remediation costs, legal fees, forensic investigation",
      regulatory: "Regulatory notification obligations; personal data breach disclosure requirements; industry-specific reporting mandates",
      reputational: "Customer and stakeholder trust erosion; media exposure from public data release; brand crisis management"
    },
    potentialImplications: ["Operational paralysis", "Data exfiltration and public release", "Regulatory fines and notification costs", "Third-party liability claims", "Insurance coverage disputes", "Permanent customer attrition", "Executive and board scrutiny", "SLA breach penalties"],
    relatedIndustries: ["technology", "healthcare", "financial-services", "energy", "manufacturing"], relatedOfferings: ["cyber", "parametric", "business-interruption"], relatedSolutions: ["Cyber Risk Management", "Incident Response Planning", "Cyber Insurance Optimization"]
  },

  "data-breach": {
    slug: "data-breach", label: "Data Breach (Customer PII)", description: "Unauthorized access to personal identifiable information",
    longDescription: "Enterprise-level unauthorized access to personally identifiable information (PII) and protected health data affecting customers, employees, and third parties. Escalating enforcement under GDPR, HIPAA, and India DPDP Act 2023 creates multi-jurisdictional exposure with breach notification clocks starting within 72 hours.",
    icon: Database, color: "#7C3AED", costOfRisk: "$5M–$50M per breach; up to $1.5M+ per violation category under HIPAA OCR", currentState: "Enforcement Surge — HHS fines up 25% YoY; India DPDP Act 2023 adds new cross-border complexity", timeValueOfMitigation: "Immediate upon breach — 72-hour notification clocks start; forensic preservation value highest in first 24 hours",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "System lockdown, forensic investigation, customer notification infrastructure deployment, credit monitoring for affected individuals",
      financial: "Direct breach response costs, regulatory fines, class action settlements",
      regulatory: "GDPR, HIPAA, DPDP, and sector-specific breach notification obligations with 72-hour deadlines",
      reputational: "Loss of customer trust, brand damage, media scrutiny, competitive disadvantage for data-sensitive businesses"
    },
    potentialImplications: ["Regulatory fines under multiple regimes", "Class action litigation", "Customer churn and acquisition costs", "Forensic investigation expenses", "Credit monitoring and identity protection costs", "Business partner contractual penalties", "Board and C-suite accountability", "Mandated security architecture redesign"],
    relatedIndustries: ["technology", "healthcare", "financial-services", "retail", "legal"], relatedOfferings: ["cyber", "privacy", "directors-officers"], relatedSolutions: ["Data Privacy & Protection", "Incident Response Planning", "Cyber Insurance Optimization"]
  },

  "bec": {
    slug: "bec", label: "Business Email Compromise / Social Engineering", description: "Fraudulent wire transfers via executive impersonation",
    longDescription: "Enterprise-level social engineering fraud involving fraudulent wire transfers through executive impersonation using compromised credentials or AI-generated synthetic identities. Deepfake-enabled attacks surged 900% in 2023, with banking incidents averaging $12M+ per occurrence.",
    icon: Mail, color: "#F97316", costOfRisk: "$2M–$20M per social engineering event; $12M+ average for banking sector", currentState: "Emerging — Deepfake incidents up 900% in 2023; banking sector seeing $12M+ average per incident", timeValueOfMitigation: "Real-time verification — 30-second voice authentication delay prevents 95% of deepfake wire fraud",
    likelihood: "Likely",
    businessImpact: {
      operational: "Wire transfer fraud detection infrastructure; account lockout and recovery procedures; forensic investigation",
      financial: "Direct financial loss from fraudulent transfers; legal recovery costs; enhanced authentication system costs",
      regulatory: "Regulatory reporting obligations for wire fraud; potential AML compliance failures",
      reputational: "Client and counterparty confidence erosion; loss of wire transfer trust with banking partners"
    },
    potentialImplications: ["Wire transfer fund loss", "Executive impersonation via deepfake", "Compromised vendor payment vectors", "Multi-factor authentication bypass", "Recovery litigation across jurisdictions", "Banking partnership disputes", "Regulatory examination findings", "Shareholder disclosure requirements"],
    relatedIndustries: ["financial-services", "technology", "legal", "retail"], relatedOfferings: ["cyber", "crime-fidelity", "directors-officers"], relatedSolutions: ["Social Engineering Defense", "Wire Transfer Controls", "Cyber Risk Management"]
  },

  "supply-chain-cyber": {
    slug: "supply-chain-cyber", label: "Supply Chain Cyber Attack", description: "Trusted vendor compromise affecting downstream customers",
    longDescription: "Enterprise-level trusted vendor compromise (SolarWinds, MOVEit pattern) granting attacker lateral movement access to thousands of downstream entities. Systemic risk where 61% of breaches involve third parties. NIS2 and SEC cyber rules mandate vendor diligence with cascading liability often uninsured.",
    icon: Share2, color: "#8B5CF6", costOfRisk: "$10M–$100M per ecosystem incident; cascading liability often uninsured", currentState: "Systemic — 61% of breaches involve third parties; NIS2/SEC mandates vendor diligence", timeValueOfMitigation: "Contagion velocity — 48-hour window between initial vendor compromise and mass exploitation",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Vendor ecosystem shutdown; customer notification across thousands of downstream entities; forensic investigation",
      financial: "Remediation costs, legal defense, customer notification expenses, contingent BI claims",
      regulatory: "NIS2 vendor diligence obligations; SEC cyber disclosure requirements; GDPR controller-processor liability",
      reputational: "Supply chain trust destruction; customer relationship damage; brand association with compromised vendors"
    },
    potentialImplications: ["Downstream customer data breach", "Vendor contract termination cascades", "Regulatory enforcement for inadequate diligence", "Contingent BI claims from customers", "Supply chain reputation loss", "Shareholder derivative litigation", "Cyber insurance disputes", "Board oversight failures"],
    relatedIndustries: ["technology", "financial-services", "healthcare", "manufacturing", "energy"], relatedOfferings: ["cyber", "supply-chain", "directors-officers"], relatedSolutions: ["Supply Chain Risk Management", "Third-Party Due Diligence", "Cyber Insurance Optimization"]
  },

  "deepfake-fraud": {
    slug: "deepfake-fraud", label: "Deepfake Fraud", description: "AI-generated audio/video for fraudulent authorizations",
    longDescription: "Enterprise-level AI-generated audio/video deepfake fraud enabling unauthorized wire transfers, market manipulation, and executive impersonation. Incidents surged 900% in 2023 with banking sector losses averaging $12M+ per event. Market manipulation fines reach $10M–$100M+.",
    icon: Eye, color: "#EC4899", costOfRisk: "$2M–$20M per social engineering event; $10M–$100M+ in market manipulation fines", currentState: "Emerging — Deepfake incidents up 900% in 2023; banking sector seeing $12M+ average per incident", timeValueOfMitigation: "Real-time verification — 30-second voice authentication delay prevents 95% of deepfake wire fraud",
    likelihood: "Likely",
    businessImpact: {
      operational: "Real-time verification system deployment; incident response across multiple jurisdictions; forensic authentication",
      financial: "Direct fraud losses; market manipulation penalties; enhanced authentication infrastructure costs",
      regulatory: "SEC insider trading and market manipulation investigations; wire fraud reporting obligations",
      reputational: "Investor and client trust erosion; public disclosure of authorization circumvention"
    },
    potentialImplications: ["Wire transfer fraud via executive deepfake", "Market manipulation and insider trading investigations", "Employee and client authorization bypass", "Real-time payment system exploitation", "Regulatory gap in deepfake-specific frameworks", "Forensic authentication costs", "Shareholder litigation over governance failures", "Trusted voice biometric systems compromised"],
    relatedIndustries: ["financial-services", "technology", "legal", "retail"], relatedOfferings: ["cyber", "crime-fidelity", "directors-officers"], relatedSolutions: ["AI Governance & Ethics", "Deepfake Detection Systems", "Cyber Risk Management"]
  },

  "d-o-personal-liability": {
    slug: "d-o-personal-liability", label: "Directors & Officers Personal Liability", description: "Personal liability for directors and officers",
    longDescription: "Enterprise-level personal liability exposure for directors and officers arising from securities litigation, regulatory enforcement, breach of fiduciary duty, and derivative claims. 200+ securities class actions filed annually in the US with average settlements exceeding $50M+. D&O insurance premiums have surged 200–500%.",
    icon: Users, color: "#1E40AF", costOfRisk: "$5M–$500M per settlement; D&O premiums up 200–500% for IPO-stage companies", currentState: "Chronic — 200+ securities class actions filed annually; average settlement $50M+; SPAC litigation surge", timeValueOfMitigation: "12–24 month discovery — Early case assessment and settlement authority within 90 days reduces cost 30%",
    likelihood: "Possible",
    businessImpact: {
      operational: "Board and executive time diverted to litigation defense; governance process disruption; regulatory cooperation demands",
      financial: "Settlement costs, D&O premium spikes, legal defense fees, derivative claim exposure, personal asset risk",
      regulatory: "SEC, DOJ, and FINRA investigations; derivative suits; regulatory sanctions on individual officers",
      reputational: "Executive and board reputation destruction; public trial proceedings; shareholder confidence erosion"
    },
    potentialImplications: ["Securities class action settlements", "Regulatory fines on individual directors", "D&O insurance coverage disputes", "Board composition changes and resignations", "Executive recruitment crisis", "Shareholder derivative suits", "Regulatory consent orders", "Governance reform mandates"],
    relatedIndustries: ["financial-services", "technology", "healthcare", "legal", "all"], relatedOfferings: ["directors-officers", "cyber"], relatedSolutions: ["D&O Liability", "Executive Protection", "Governance Advisory"]
  },

  "employment-practices": {
    slug: "employment-practices", label: "Employment Practices Liability", description: "Workplace discrimination, harassment, and termination claims",
    longDescription: "Enterprise-level workplace discrimination, harassment, wrongful termination, and hostile work environment claims. EPL insurance premiums rising with claim frequency increase, particularly post-pandemic. $1M–$50M per claim with class action settlements potentially reaching $100M+.",
    icon: UserX, color: "#DC2626", costOfRisk: "$1M–$50M per claim; class action settlements can reach $100M+ for systemic violations", currentState: "Active — Post-pandemic workplace scrutiny elevated; remote/hybrid work creating new liability vectors", timeValueOfMitigation: "Medium Term — Workplace compliance programs reduce frequency by 40% when implemented proactively",
    likelihood: "Likely",
    businessImpact: {
      operational: "HR department overload; investigation and remediation procedures; workplace culture disruption",
      financial: "Settlement costs, legal defense, class action exposure, EPL insurance premium increases",
      regulatory: "EEOC and state agency investigations; compliance with Title VII, ADA, ADEA, and expanding state laws",
      reputational: "Employer brand damage; Glassdoor and social media reputation; talent acquisition difficulties"
    },
    potentialImplications: ["Systemic discrimination class actions", "EEOC charge and investigation costs", "Wrongful termination and retaliation claims", "Executive departure costs", "Workplace culture and productivity loss", "Regulatory compliance audits", "Training and remediation program costs", "Board-level workplace governance failures"],
    relatedIndustries: ["financial-services", "technology", "healthcare", "manufacturing", "retail", "all"], relatedOfferings: ["employment-practices", "cyber"], relatedSolutions: ["Employment Practices Liability", "Workplace Compliance", "HR Advisory Services"]
  },

  "crime-employee-dishonesty": {
    slug: "crime-employee-dishonesty", label: "Crime & Employee Dishonesty", description: "Employee theft, embezzlement, and fraud",
    longDescription: "Enterprise-level employee theft, embezzlement, and fraud through fidelity bond and crime insurance programs. Internal fraud schemes ranging from single-employee theft to sophisticated collusion rings, often undetected for extended periods. Employee dishonesty represents 40% of all business crime losses.",
    icon: Coins, color: "#EA580C", costOfRisk: "$1M–$20M per incident; median internal fraud duration 18 months", currentState: "Active — Internal fraud comprising 40% of business crime losses; remote work expanding attack surface", timeValueOfMitigation: "Medium Term — Detection velocity critical in first 90 days; controls most cost-effective pre-incident",
    likelihood: "Likely",
    businessImpact: {
      operational: "Investigation and disciplinary procedures; internal control remediation; personnel and morale disruption",
      financial: "Direct financial loss from embezzlement and theft; investigation costs; recovery litigation expenses",
      regulatory: "SAR filing requirements for financial institutions; SOX compliance obligations; industry-specific mandated controls",
      reputational: "Internal trust erosion; customer and investor confidence in financial controls; partner due diligence failures"
    },
    potentialImplications: ["Collusive fraud rings involving multiple employees", "Embezzlement undetected for 18+ months", "Forensic accounting investigation costs", "Regulatory enforcement for inadequate controls", "Fidelity bond claim disputes", "Employee background check failures", "Management override of controls", "Whistleblower exposure and retaliation claims"],
    relatedIndustries: ["financial-services", "technology", "healthcare", "retail", "manufacturing", "all"], relatedOfferings: ["crime-fidelity", "cyber"], relatedSolutions: ["Crime & Fidelity Coverage", "Internal Controls Advisory", "Forensic Investigation Services"]
  },

  "natural-catastrophe": {
    slug: "natural-catastrophe", label: "Natural Catastrophe — Property Damage", description: "Fire, flood, earthquake, wind damage to physical assets",
    longDescription: "Enterprise-level natural catastrophe property damage from fire, flood, earthquake, windstorm, and severe weather to physical assets and infrastructure. Climate-intensified catastrophe events increasing in frequency and severity with modeled insured losses exceeding $100B in recent years.",
    icon: Flame, color: "#DC2626", costOfRisk: "$10M–$500M+ per event; aggregate annual catastrophe exposure averaging $50M–$200M", currentState: "Active & Severe — Major catastrophe events occurring quarterly; 2022–2024 seeing record billion-dollar disasters", timeValueOfMitigation: "Acute — Losses realized in hours; business continuity and insurance recovery value highest post-event",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Facility and asset damage; production halt; supply chain disruption; workforce displacement; recovery 12–36 months",
      financial: "Physical asset replacement costs; business interruption losses; supply chain disruption; insurance timing gaps",
      regulatory: "Building code upgrade requirements; environmental damage liability; workplace safety enforcement",
      reputational: "Community and stakeholder impact; supply chain partner disruption; ESG scrutiny"
    },
    potentialImplications: ["Catastrophic property damage", "Business interruption exceeding 12 months", "Supply chain shock to customers and suppliers", "Environmental release and cleanup liability", "Insurance claim disputes and coverage gaps", "Workforce safety and workers compensation", "Regulatory rebuilding requirements", "Investor and rating agency scrutiny"],
    relatedIndustries: ["manufacturing", "energy", "retail", "healthcare", "financial-services", "construction", "agriculture", "all"], relatedOfferings: ["property-sfsp", "business-interruption", "parametric"], relatedSolutions: ["Catastrophe Risk Analytics", "Business Continuity Planning", "Property Insurance Optimization"]
  },

  "business-interruption": {
    slug: "business-interruption", label: "Business Interruption (All Causes)", description: "Revenue loss from operational disruption",
    longDescription: "Enterprise-level revenue loss from operational disruption spanning cyber attacks, supply chain failures, natural catastrophes, regulatory actions, and pandemics. Business interruption coverage remains the largest uninsured gap with only 25–40% of enterprises carrying adequate limits for cascading BI losses.",
    icon: Activity, color: "#F59E0B", costOfRisk: "$5M–$50M per incident; severe events can exceed $500M in cascading BI", currentState: "Active — Major outages quarterly; 65% carry inadequate BI coverage for systemic events", timeValueOfMitigation: "Hours-to-days — Inventory buffer value decays exponentially after 7 days; insurance trigger latency 45–90 days",
    likelihood: "Likely",
    businessImpact: {
      operational: "Revenue cessation across multiple business lines; customer attrition; talent retention during furloughs",
      financial: "Revenue gap $5M–$50M per week; fixed cost overhead continuation; credit facility stress",
      regulatory: "Contractual SLA penalties; regulatory reporting for material disruptions; sector-specific reporting",
      reputational: "Customer and partner trust erosion; competitive displacement during outage; brand damage from extended disruption"
    },
    potentialImplications: ["Revenue loss exceeding cash reserves", "Customer SLA breach and penalties", "Contract termination and portfolio losses", "Workforce reduction and retention costs", "Regulatory loss of license or approval", "Bankruptcy risk for prolonged disruptions", "Insurance claim denial due to coverage gaps", "Shareholder litigation over inadequate insurance"],
    relatedIndustries: ["technology", "energy", "healthcare", "financial-services", "retail", "manufacturing", "all"], relatedOfferings: ["business-interruption", "parametrics", "cyber"], relatedSolutions: ["Business Interruption Coverage", "Crisis Response & Recovery", "Insurance Program Review"]
  },

  "regulatory-investigation": {
    slug: "regulatory-investigation", label: "Regulatory Investigation & Fines", description: "Government penalties and enforcement actions",
    longDescription: "Enterprise-level government penalties and enforcement actions from regulatory bodies across multiple jurisdictions. OFAC penalties exceeded $1.5B in 2023 with enforcement intensifying across financial services, technology, healthcare, and manufacturing.",
    icon: Gavel, color: "#B91C1C", costOfRisk: "$10M–$100M per major enforcement action; OFAC penalties exceeding $1.5B industry-wide", currentState: "Enforcement Intensifying — OFAC penalties exceeded $1.5B in 2023; real-time screening now expected", timeValueOfMitigation: "Continuous exposure — Every transaction carries latent risk; retrospective detection costs 10× more than prevention",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Resource diversion to regulatory response; compliance program overhaul; mandated remediation procedures",
      financial: "Direct fines and penalties; remediation costs; structural compliance investments; increased insurance costs",
      regulatory: "Multi-jurisdictional regulatory enforcement; OFAC, SEC, DOJ, FTC, EU coordinated actions",
      reputational: "Public enforcement proceedings; press and NGO scrutiny; customer confidence erosion"
    },
    potentialImplications: ["OFAC sanctions violations and penalties", "Sector-specific enforcement actions", "Deferred prosecution agreements", "Monitor-imposed governance requirements", "Multi-jurisdictional enforcement cascade", "Executive personal liability", "License suspension or revocation", "Shareholder derivative suits over compliance failures"],
    relatedIndustries: ["financial-services", "technology", "healthcare", "manufacturing", "energy", "all"], relatedOfferings: ["regulatory-compliance", "cyber", "directors-officers"], relatedSolutions: ["Regulatory Compliance Management", "Enforcement Defense", "Global Compliance Advisory"]
  },

  "class-action-lawsuit": {
    slug: "class-action-lawsuit", label: "Class Action Lawsuit", description: "Mass litigation with multiplicative damages",
    longDescription: "Enterprise-level mass litigation with multiplicative damages from consumer fraud, securities violations, product liability, environmental harm, and data breach claims. Class action filings remain elevated above 200 annually in the US alone with average settlements exceeding $50M.",
    icon: Scale, color: "#7C3AED", costOfRisk: "$5M–$500M per settlement; average class-action payout $50M+", currentState: "Chronic — 200+ securities class actions annually; average settlement $50M+", timeValueOfMitigation: "12–24 month discovery — Early case assessment within 90 days reduces cost 30%",
    likelihood: "Possible",
    businessImpact: {
      operational: "Legal operations and discovery strain; management and board time diverted; employee and customer disruption",
      financial: "Settlement payments, legal defense fees, class notice and administration costs",
      regulatory: "Regulatory investigations triggered by allegations; consent decrees and court-supervised remedies",
      reputational: "Public litigation proceedings; media coverage of alleged misconduct; brand damage"
    },
    potentialImplications: ["Securities class action shareholder recoveries", "Consumer fraud class certification", "Multi-district litigation defense costs", "Court-supervised remediation requirements", "Executive and board personal liability", "Shareholder derivative suits", "Fiduciary duty breach allegations", "Regulatory parallel proceedings"],
    relatedIndustries: ["financial-services", "technology", "healthcare", "retail", "manufacturing", "energy", "all"], relatedOfferings: ["directors-officers", "cyber", "employment-practices"], relatedSolutions: ["Class Action Defense", "Litigation Funding", "Executive Protection"]
  },

  "key-person-loss": {
    slug: "key-person-loss", label: "Key Person Loss", description: "Dependence on critical individuals",
    longDescription: "Enterprise-level departure of key technical, revenue-generating, or regulatory-dependent individuals. Client relationship value often representing 20–30% of revenue at risk. The AI talent war produced 300% salary inflation in critical technology roles.",
    icon: UserX, color: "#6B7280", costOfRisk: "150–400% of annual salary to replace; client value 20–30% revenue at risk", currentState: "Elevated — AI talent war with 300% salary inflation; aging workforce in utilities creating succession gaps", timeValueOfMitigation: "30–90 day notice period — Knowledge transfer value highest at resignation moment",
    likelihood: "Likely",
    businessImpact: {
      operational: "Project and initiative disruption; client relationship interruption; knowledge transfer void",
      financial: "Recruitment of 2–4 replacements at premium cost; revenue at risk from departing client relationships",
      regulatory: "Key person departure triggering compliance reviews; licensing implications",
      reputational: "Client confidence erosion; investor concerns over management stability; talent brand impact"
    },
    potentialImplications: ["Revenue loss from departing executives with major clients", "Institutional knowledge irreplaceable for 12–24 months", "Regulatory notification triggers", "Competitive intelligence transfer to rivals", "Project portfolio disruption", "Team morale collapse", "Accelerated turnover in remaining team", "Client retention under new advisor"],
    relatedIndustries: ["technology", "financial-services", "healthcare", "legal", "all"], relatedOfferings: ["key-person", "directors-officers", "cyber"], relatedSolutions: ["Key Person Insurance", "Executive Retention Programs", "Succession Planning Advisory"]
  },

  "reputational-damage": {
    slug: "reputational-damage", label: "Reputational Damage", description: "Brand value erosion and public perception crises",
    longDescription: "Enterprise-level brand value erosion and public perception crises from ESG failures, data breaches, product defects, executive misconduct, environmental incidents, and supply chain scandals. The 24-hour news cycle and social media amplification create immediate destruction. Early response latency can triple long-term brand damage cost.",
    icon: TrendingUp, color: "#BE185D", costOfRisk: "$5M–$500M direct losses; brand value destruction often incalculable", currentState: "Active — 24-hour media cycle determines brand survival; social media amplification accelerating crisis velocity", timeValueOfMitigation: "Immediate — Response latency costs 3× longer-term; crisis communications value in first 4 hours",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Crisis management team activation; customer service overload; stakeholder communication infrastructure",
      financial: "Revenue decline from attrition; customer acquisition cost increase; crisis communications spend",
      regulatory: "Regulatory enforcement from disclosure failures; greenwashing and ESG litigation",
      reputational: "Long-term brand impairment; customer and investor confidence; valuation discount 10–40%"
    },
    potentialImplications: ["Customer acquisition cost spikes 50–100%", "Social media viral negative campaign", "Employee recruitment and retention crisis", "Investor relations damage and valuation impact", "Regulatory ESG disclosure enforcement", "Trademark and brand confusion claims", "Executive leadership accountability", "Channel partner relationship loss"],
    relatedIndustries: ["technology", "retail", "healthcare", "energy", "financial-services", "all"], relatedOfferings: ["cyber", "directors-officers", "esg"], relatedSolutions: ["Reputation Risk Management", "Crisis Communications", "ESG Disclosure Advisory"]
  },

  "ip-infringement": {
    slug: "ip-infringement", label: "Intellectual Property Infringement", description: "Patent, trademark, or copyright violations",
    longDescription: "Enterprise-level patent, trademark, or copyright violations including willful infringement claims, trade secret misappropriation, and open source license compliance failures. IP litigation costs average $5M–$50M per case with unrecovered R&D of $10B–$50B in technology, pharmaceutical, and manufacturing sectors.",
    icon: FileCode, color: "#7C3AED", costOfRisk: "$5M–$50M per litigation case; unrecovered R&D $10B–$50B in tech and pharmaceutical sectors", currentState: "Structural — Technology and pharmaceutical patent wars escalating; open source becoming litigation risk", timeValueOfMitigation: "12–24 month litigation — Patent filing and IP audit value highest before infringement exposure",
    likelihood: "Likely",
    businessImpact: {
      operational: "Product redesign or withdrawal; engineering resource diversion; sales channel termination",
      financial: "Litigation defense costs; damages awards; licensing fees; redesign and re-release expenses",
      regulatory: "ITC Section 337 exclusion orders; ITAR and EAR technology transfer restrictions",
      reputational: "Innovation brand erosion; competitor confidence in IP protection"
    },
    potentialImplications: ["Patent infringement damages and injunctions", "Trade secret misappropriation by departing employees", "Open source license compliance enforcement", "International IP confiscation", "Counterfeiting and gray market diversion", "Brand and trademark dilution", "Dilution and tarnishment claims", "Competitive intelligence exposure"],
    relatedIndustries: ["technology", "healthcare", "manufacturing", "pharmaceutical", "legal", "all"], relatedOfferings: ["intellectual-property", "cyber"], relatedSolutions: ["IP Risk Advisory", "Patent Portfolio Management", "Open Source License Compliance"]
  },

  "contract-risk-exposure": {
    slug: "contract-risk-exposure", label: "Contract Risk Exposure", description: "Unfavorable contractual terms and disputes",
    longDescription: "Enterprise-level unfavorable contractual terms and business disputes spanning M&A earn-outs, joint ventures, outsourcing, and customer contracts. Contractual liability cascading into multi-jurisdictional litigation and insurance disputes.",
    icon: FileText, color: "#059669", costOfRisk: "5–15% of contract value at risk; major disputes averaging $10M–$500M", currentState: "Structural — M&A integration failures and JV disputes increasing with market volatility", timeValueOfMitigation: "Project-milestone dependent — Risk concentrates at 60–80% completion",
    likelihood: "Possible",
    businessImpact: {
      operational: "Contract breach management; relationship disruption; project execution delays",
      financial: "Contract remedies and damages; legal costs; opportunity cost of stalled projects",
      regulatory: "Contractual regulation in regulated sectors; mandated terms and conditions",
      reputational: "Business partner and counterparty trust erosion; enforceability reputation"
    },
    potentialImplications: ["Material contract breach and remedies", "Acquisition indemnification claims", "Joint venture deadlock and dissolution", "Outsourcing contract failures", "Supply chain performance failures", "Force majeure and frustration claims", "Insurance coverage disputes", "Cross-border enforcement challenges"],
    relatedIndustries: ["financial-services", "technology", "construction", "energy", "retail", "all"], relatedOfferings: ["contract-risk", "cyber", "directors-officers"], relatedSolutions: ["Contract Risk Management", "Dispute Resolution", "Transaction Advisory Services"]
  },

  "climate-physical": {
    slug: "climate-physical", label: "Climate Change — Physical Risk", description: "Increased frequency and severity of extreme weather events",
    longDescription: "Enterprise-level physical climate risk from extreme weather events including superstorms, mega-fires, coastal flooding, and heat stress. The 2021 Texas grid crisis demonstrated cascading physical risk with $200B+ in economic losses. Grid instability and physical asset vulnerability accelerating.",
    icon: Thermometer, color: "#DC2626", costOfRisk: "$10B–$50B per major grid event; Texas 2021 $200B+ economic loss", currentState: "Emerging — Texas/California incidents; storage deployment lagging", timeValueOfMitigation: "Real-time balancing — Inertia measured in seconds; storage peaks at dusk",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Physical asset damage; production halt; supply chain failure cascade",
      financial: "Physical losses, business interruption, energy cost spikes",
      regulatory: "Resilience mandates; building upgrades; CSRD disclosure",
      reputational: "ESG scrutiny; investor climate risk assessment"
    },
    potentialImplications: ["Physical damage exceeding $5B per event", "Grid instability causing blackouts", "Agricultural yield collapse", "Property depreciation in high-risk zones", "Supply chain disruption", "Insurance market withdrawal", "Climate migration workforce displacement", "Resilience upgrade mandates"],
    relatedIndustries: ["energy", "manufacturing", "construction", "agriculture", "all"], relatedOfferings: ["climate-physical", "property-sfsp", "parametric"], relatedSolutions: ["Climate Risk Modeling", "Physical Resilience Advisory", "Parametric Insurance Solutions"]
  },

  "climate-transition": {
    slug: "climate-transition", label: "Climate Change — Transition Risk", description: "Asset write-downs as business models become obsolete",
    longDescription: "Enterprise-level climate transition risk from carbon-intensive business models becoming economically unviable. $1T+ in stranded fossil fuel assets by 2035. CBAM adds 5–20% cost increase with multi-jurisdictional reporting under CSRD.",
    icon: Leaf, color: "#16A34A", costOfRisk: "$100B–$500B sector write-downs; individual supermajors $10B–$50B", currentState: "Accelerating — 50% fossil reserves unburnable; CBAM 2026; CSRD 2024+", timeValueOfMitigation: "Decade-scale front-loaded — 2025–2030 decisions determine 40-year viability",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Portfolio reassessment; capital reallocation; business model transformation",
      financial: "Asset impairment; stranded write-downs; carbon costs",
      regulatory: "CBAM tariff; CSRD reporting; EU Taxonomy",
      reputational: "ESG divestment; greenwashing litigation"
    },
    potentialImplications: ["Fossil reserve write-downs $1T+", "Margins compressed 10–30%", "Green bond failures", "Disclosure requirements", "Distressed asset stranding", "Workforce transition costs", "Green peer disadvantage", "Financing cost increase"],
    relatedIndustries: ["energy", "manufacturing", "steel", "cement", "chemicals", "all"], relatedOfferings: ["climate-transition", "esg", "parametric"], relatedSolutions: ["Climate Transition Planning", "ESG Strategy", "Carbon Accounting Advisory"]
  },

  "pandemic": {
    slug: "pandemic", label: "Pandemic / Communicable Disease", description: "Government-mandated shutdowns and workforce illness",
    longDescription: "Enterprise-level pandemic risk from novel pathogens causing shutdown, healthcare collapse, and supply chain paralysis. COVID-19 cost $14T+ with most losses uninsurable. H5N1 avian flu keeps threat elevated.",
    icon: HeartPulse, color: "#DC2626", costOfRisk: "$5T–$15T per severe pandemic; COVID-19 $14T+", currentState: "Persistent — COVID cost $14T+; H5N1 monitored; lab leak debate ongoing", timeValueOfMitigation: "100-day vaccine target — Pandemic bond most valuable pre-emergence",
    likelihood: "Possible",
    businessImpact: {
      operational: "Shutdowns; absenteeism 30%+; supply chain destruction",
      financial: "Revenue cessation; fixed costs; unfunded reserves",
      regulatory: "Emergency declarations; BI exclusions standard",
      reputational: "Health scrutiny; employer brand impact"
    },
    potentialImplications: ["Revenue loss exceeding reserves 6–18 months", "Absenteeism 40–60%", "Total supply chain disruption", "Healthcare collapse", "BI coverage denials", "Regulatory override of contracts", "Insufficient government programs", "Stranded underutilized assets"],
    relatedIndustries: ["healthcare", "pharmaceutical", "retail", "aviation", "logistics", "all"], relatedOfferings: ["pandemic", "parametrics", "business-interruption"], relatedSolutions: ["Pandemic Preparedness", "Parametric Pandemic Financing", "Business Continuity Planning"]
  },

  "ai-governance-failure": {
    slug: "ai-governance-failure", label: "AI Governance Failure", description: "Biased algorithms, unexplainable decisions, data privacy violations",
    longDescription: "Enterprise-level AI governance failure from biased algorithms, unexplainable decisions, and autonomous failures. EU AI Act and US EO 14110 create new obligations with no global treaty. Uninsurable existential risk at AGI scale.",
    icon: Brain, color: "#7C3AED", costOfRisk: "$100B+ compliance; existential risk incalculable", currentState: "Emerging — EU AI Act, US EO 14110; NIST mandatory; no treaty", timeValueOfMitigation: "Pre-deployment — Safety before thresholds; retroactive governance impossible",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Algorithmic failures; autonomous malfunction; data pipeline contamination",
      financial: "AI Act fines up to 7% revenue; legal defense for harm",
      regulatory: "EU tiered; US reporting; China registration; India convergence",
      reputational: "Consumer trust destroyed; talent attrition; investor reassessment"
    },
    potentialImplications: ["Bias class actions", "Hallucination causing customer harm", "Autonomous fatality", "Multi-jurisdictional enforcement", "Shareholder derivative claims", "Trade secret leakage", "National security restrictions"],
    relatedIndustries: ["technology", "financial-services", "healthcare", "legal", "automotive", "all"], relatedOfferings: ["cyber", "directors-officers", "technology-errors-omissions"], relatedSolutions: ["AI Risk Governance", "Algorithmic Audit", "AI Insurance Solutions"]
  },

  "single-source-supplier-failure": {
    slug: "single-source-supplier-failure", label: "Single-Source Supplier Failure", description: "Dependence on sole suppliers for critical components",
    longDescription: "Enterprise-level single-source dependency creating production halt. Semiconductor shortage cost $200B+ in 2021–2023. Dual-sourcing takes 12–24 months.",
    icon: Package, color: "#7C3AED", costOfRisk: "$100B+ losses; corporate $1B–$10B", currentState: "Structural — 90% semiconductors from Taiwan; 60% rare earths from China", timeValueOfMitigation: "Months to pivot — Dual-sourcing 12–24 months",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Production stoppage; delivery failures",
      financial: "Revenue loss; premium sourcing; penalties",
      regulatory: "Notification; force majeure",
      reputational: "Customer trust erosion"
    },
    potentialImplications: ["Stoppage $100K–$2M/hr", "Contract penalties", "200–400% premium sourcing", "Workforce downtime", "Loss to competitors", "Inventory liquidation", "Regulatory scrutiny"],
    relatedIndustries: ["manufacturing", "technology", "automotive", "aerospace", "energy", "construction"], relatedOfferings: ["supply-chain", "cyber", "directors-officers"], relatedSolutions: ["Supply Chain Risk Management", "Supplier Diversification", "Business Interruption Coverage"]
  },

  "geographic-concentration": {
    slug: "geographic-concentration", label: "Geographic Concentration Risk", description: "Over-reliance on single regions or markets",
    longDescription: "Enterprise-level geographic concentration from over-reliance on single regions for revenue, production, or data centers. 60% of low-income countries near debt distress.",
    icon: Globe, color: "#0891B2", costOfRisk: "$100B+ losses; corporate $1B–$10B", currentState: "Structural — Taiwan semiconductors; China rare earths", timeValueOfMitigation: "Months to pivot — Diversification 12–36 months",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Regional disruption; workforce displacement",
      financial: "Revenue loss; asset impairment",
      regulatory: "Divergence; sanctions",
      reputational: "Regional relationships"
    },
    potentialImplications: ["Access denial loss", "Regional impairment", "FX impact", "Sanctions cascade", "Dual compliance", "Data sovereignty", "Regional disadvantage"],
    relatedIndustries: ["technology", "financial-services", "energy", "retail", "all"], relatedOfferings: ["supply-chain", "cyber"], relatedSolutions: ["Geographic Risk Mapping", "Business Continuity", "Trade Advisory"]
  },

  "counterparty-customer-default": {
    slug: "counterparty-customer-default", label: "Counterparty / Customer Default", description: "Major customer or partner insolvency",
    longDescription: "Enterprise-level major customer insolvency with 60% of low-income countries near debt distress. Single-customer concentration over 20% of revenue. China property $9T contagion risk.",
    icon: CreditCard, color: "#DC2626", costOfRisk: "$500B–$2T sovereign defaults; individual $1B+", currentState: "Elevated — 60% near distress; China property $9T", timeValueOfMitigation: "Sudden stop — Credit access closes in 48 hours",
    likelihood: "Possible",
    businessImpact: {
      operational: "Collections acceleration; customer replacement",
      financial: "Revenue loss; bad debt; covenant breaches",
      regulatory: "Capital adequacy; impaired loan reporting",
      reputational: "Relationship loss; confidence erosion"
    },
    potentialImplications: ["Major customer insolvency", "Credit cascade", "Supply chain disruption", "Trade credit claims", "Bankruptcy disputes", "Bonus failures", "Furloughs", "Market erosion"],
    relatedIndustries: ["financial-services", "technology", "manufacturing", "retail", "energy"], relatedOfferings: ["credit-surety", "parametrics", "business-interruption"], relatedSolutions: ["Trade Credit Insurance", "Counterparty Risk", "Credit Advisory"]
  },

  "currency-fluctuation": {
    slug: "currency-fluctuation", label: "Currency Fluctuation", description: "Exchange rate volatility impacting cross-border revenue",
    longDescription: "Enterprise-level FX volatility from emerging market depreciation. BRL 15–25% annualized. 10–20% IRR erosion for USD investors.",
    icon: DollarSign, color: "#16A34A", costOfRisk: "10–20% IRR erosion; $1B+ FX losses", currentState: "Chronic — EM 15–25% annualized; interventions insufficient", timeValueOfMitigation: "12-month forward most effective",
    likelihood: "Very Likely",
    businessImpact: { operational: "Cash complexity; hedging", financial: "Translation losses; costs", regulatory: "Capital controls", reputational: "Investor confidence" },
    potentialImplications: ["USD debt distress", "Import spikes", "Repatriation blocks", "Pension mismatch", "Hedge cost", "Controls", "Investor exit", "Default correlation"],
    relatedIndustries: ["financial-services", "retail", "manufacturing", "energy"], relatedOfferings: ["foreign-exchange", "parametrics"], relatedSolutions: ["FX Risk Management", "Emerging Market Advisory"]
  },

  "regulatory-compliance-failure": {
    slug: "regulatory-compliance-failure", label: "Regulatory Compliance Failure", description: "Failure to comply with applicable laws or regulations",
    longDescription: "Enterprise-level multi-jurisdictional compliance failure under GDPR, CSRD, DPDP, CBAM, HIPAA, OFAC, SEC. Penalties 2–7% global revenue.",
    icon: FileWarning, color: "#B91C1C", costOfRisk: "$10M–$100M restructuring; fines 2–7% revenue", currentState: "Fragmenting — DPF challenged; DPDP 2023; PIPL strict; US patchwork", timeValueOfMitigation: "12–24 month — Renegotiate before enforcement",
    likelihood: "Very Likely",
    businessImpact: { operational: "Overhaul; reporting", financial: "Fines; remediation", regulatory: "Multi-jurisdictional penalties", reputational: "Publicity; erosion" },
    potentialImplications: ["GDPR 4%", "License suspension", "Access denial", "Consent decrees", "Cascade", "Shareholder litigation", "Executive liability", "Cost disadvantage"],
    relatedIndustries: ["technology", "financial-services", "healthcare", "manufacturing"], relatedOfferings: ["regulatory-compliance", "cyber"], relatedSolutions: ["Compliance Program", "Regulatory Change Management"]
  },

  "workforce-disruption": {
    slug: "workforce-disruption", label: "Workforce Disruption", description: "Labor shortages, strikes, or mass resignation events",
    longDescription: "Enterprise-level labor shortages, strikes, mass resignations. UAW $5B+ strike. 300% AI talent inflation. 24-hour activation window for contingent labor.",
    icon: Headphones, color: "#DC2626", costOfRisk: "$100M–$1B per strike; 150–400% replacement", currentState: "Resurgent — UAW $5B+; AI talent 300% inflation", timeValueOfMitigation: "Hours to days — 24-hour activation critical",
    likelihood: "Likely",
    businessImpact: { operational: "Disruption; knowledge walkout", financial: "Overtime; delays; recruitment", regulatory: "Labor law; unfair practice", reputational: "Brand damage; acquisition difficulty" },
    potentialImplications: ["Multi-billion strike", "Knowledge loss", "Critical gaps", "Quality concerns", "Regulatory intervention", "Labor accountability", "SLA breach", "Competitor acquisition"],
    relatedIndustries: ["technology", "financial-services", "healthcare", "manufacturing", "retail", "energy"], relatedOfferings: ["employment-practices"], relatedSolutions: ["Workforce Risk Advisory", "Labor Relations"]
  },

  "technology-obsolescence": {
    slug: "technology-obsolescence", label: "Technology Obsolescence", description: "Core systems becoming outdated and incompatible",
    longDescription: "Enterprise-level core system obsolescence. $1.2M debt per developer; 40% legacy code. Breaches $4.5M average.",
    icon: Cpu, color: "#6B7280", costOfRisk: "15–25% IT maintenance; $4.5M breach", currentState: "Chronic — $1.2M debt; 40% legacy", timeValueOfMitigation: "Long-tail — 3–5 year erosion; refactoring 10× ROI",
    likelihood: "Very Likely",
    businessImpact: { operational: "Failures; upgrade inability; breaches", financial: "TCO; breach costs", regulatory: "Non-compliance", reputational: "Experience degradation" },
    potentialImplications: ["Code breaches", "Regulatory failures", "Competitive disadvantage", "Cost escalation", "Vendor EOL", "Knowledge loss", "Integration failures", "Enforcement"],
    relatedIndustries: ["technology", "financial-services", "healthcare", "energy"], relatedOfferings: ["cyber", "technology-errors-omissions"], relatedSolutions: ["Technology Risk", "Legacy Modernization"]
  },

  "m-a-transaction-risk": {
    slug: "m-a-transaction-risk", label: "M&A — Transaction Risk", description: "Undisclosed liabilities and integration failures",
    longDescription: "Enterprise-level M&A transaction risk from undisclosed liabilities, integration failures destroying 70–90% of deal value. Technology debt primary risk in digital acquisitions.",
    icon: Briefcase, color: "#7C3AED", costOfRisk: "5–15% deal value; $500M–$5B failure", currentState: "Active — Integration failures peak 12–18 months", timeValueOfMitigation: "12–24 months — First 12 months critical",
    likelihood: "Likely",
    businessImpact: { operational: "Integration; consolidation; disruption", financial: "Writedown; indemnification; overruns", regulatory: "Antitrust; transfer", reputational: "Failure publicity" },
    potentialImplications: ["70–90% destruction", "Undisclosed liability", "Cultural exodus", "System failures", "Earn-out disputes", "Antitrust", "Customer loss", "Management distraction"],
    relatedIndustries: ["technology", "financial-services", "healthcare", "manufacturing"], relatedOfferings: ["ma-transaction", "directors-officers"], relatedSolutions: ["M&A Advisory", "Due Diligence"]
  },

  "third-party-vendor-risk": {
    slug: "third-party-vendor-risk", label: "Third-Party / Vendor Risk", description: "Critical vendor failures or non-compliance",
    longDescription: "Enterprise-level critical vendor failures creating cascading risk. 61% of breaches involve third parties. Board-level under NIS2 and SEC.",
    icon: Building, color: "#0891B2", costOfRisk: "$10M–$100M per incident; often uninsured", currentState: "Systemic — 61% third-party; NIS2/SEC mandate diligence", timeValueOfMitigation: "48-hour window; continuous monitoring",
    likelihood: "Very Likely",
    businessImpact: { operational: "Disruption; alternate activation", financial: "Replacement; penalties", regulatory: "NIS2; SEC; GDPR", reputational: "Customer damage" },
    potentialImplications: ["Breach cascading", "No backup failure", "Distress collapse", "Fourth-party", "Liability", "2–3x cost", "BI from outage", "Bankruptcy data"],
    relatedIndustries: ["technology", "financial-services", "healthcare", "retail", "manufacturing"], relatedOfferings: ["cyber", "supply-chain"], relatedSolutions: ["Third-Party Risk", "Vendor Due Diligence"]
  },

  "data-privacy-protection": {
    slug: "data-privacy-protection", label: "Data Privacy & Protection", description: "GDPR, CCPA, DPDP and similar regulation violations",
    longDescription: "Enterprise-level cross-border data violations under GDPR, HIPAA, India DPDP 2023, China PIPL, US state laws. 72-hour clocks. 4% global revenue maximum.",
    icon: Lock, color: "#1E40AF", costOfRisk: "$10M–$50M per breach; $1.5M+ per HIPAA category", currentState: "Enforcement Surge — HHS +25%; DPDP 2023; PIPL strict", timeValueOfMitigation: "Immediate — 72-hour notification; first 24 hours critical",
    likelihood: "Very Likely",
    businessImpact: { operational: "Notification; redesign; localization", financial: "Fines; forensics", regulatory: "GDPR, HIPAA, DPDP, PIPL overlap", reputational: "Trust erosion" },
    potentialImplications: ["GDPR 4%", "DPDP enforcement", "Private suits", "Transfer prohibition", "Cloud exclusion", "China loss", "Model disruption", "Multi-jurisdiction cascade"],
    relatedIndustries: ["technology", "healthcare", "financial-services", "legal", "retail"], relatedOfferings: ["privacy", "cyber"], relatedSolutions: ["Data Privacy", "Cross-Border Advisory"]
  },

  "ai-product-liability": {
    slug: "ai-product-liability", label: "AI Product Liability", description: "Harmful or biased decisions from AI systems",
    longDescription: "Enterprise-level AI product liability from biased algorithms, autonomous decisions, generative outputs, and model failures that cause bodily injury, financial loss, discrimination, or operational harm. The exposure combines product liability, technology errors and omissions, cyber, and emerging regulatory liability.",
    icon: Brain, color: "#7C3AED", costOfRisk: "$5M–$100M per claim; AI Act fines up to 7% of global revenue", currentState: "Emerging — EU AI Act, NIST AI RMF, and sector AI rules are creating new liability baselines", timeValueOfMitigation: "Pre-deployment — Model validation, monitoring, and insurance placement before launch",
    likelihood: "Likely",
    businessImpact: {
      operational: "Model suspension; incident response; customer remediation",
      financial: "Defense costs; settlements; regulatory penalties; product recall or retraining",
      regulatory: "AI Act, DPDP, sector safety, and consumer protection investigations",
      reputational: "Loss of trust in AI-enabled products and governance failures"
    },
    potentialImplications: ["Algorithmic bias claims", "Autonomous system injury", "Generative AI hallucination liability", "Regulatory enforcement", "Product recall or shutdown", "Technology E&O coverage disputes", "Class action aggregation", "Board oversight scrutiny"],
    relatedIndustries: ["technology", "healthcare", "financial-services", "automotive", "retail", "all"], relatedOfferings: ["ai-liability-advanced", "cyber-risk-advisory", "product-liability-2"], relatedSolutions: ["AI Risk Solutions", "Technology E&O", "Cyber Liability"]
  },

  "securities-litigation": {
    slug: "securities-litigation", label: "Securities Litigation", description: "Shareholder claims of misrepresentation or omission",
    longDescription: "Enterprise-level securities litigation from alleged misstatements, omissions, forecast failures, IPO disclosures, M&A announcements, or regulatory investigations. Public companies, SPACs, PE-backed issuers, and high-growth private companies can face multiplicative defense and settlement exposure.",
    icon: Scale, color: "#1E40AF", costOfRisk: "$5M–$500M per settlement; defense costs can exceed $20M before merits", currentState: "Active — Securities class actions remain elevated across IPO, SPAC, crypto, AI, and climate disclosure themes", timeValueOfMitigation: "12–24 month discovery — Early case assessment and D&O tower adequacy are critical",
    likelihood: "Possible",
    businessImpact: {
      operational: "Board and management distraction; disclosure controls; governance remediation",
      financial: "Defense fees; settlements; D&O retentions; valuation impact",
      regulatory: "SEC, SEBI, FCA, and exchange investigations",
      reputational: "Investor confidence erosion and governance scrutiny"
    },
    potentialImplications: ["Shareholder class action", "Derivative suits", "Regulatory parallel proceedings", "D&O coverage disputes", "Executive indemnification pressure", "Settlement allocation disputes", "Disclosure control overhaul", "Board turnover"],
    relatedIndustries: ["financial-services", "technology", "healthcare", "energy", "all"], relatedOfferings: ["d-o", "directors-officers", "ma-risk-advisory"], relatedSolutions: ["Directors & Officers", "Governance Advisory", "M&A Insurance"]
  },

  "aml-violation": {
    slug: "aml-violation", label: "AML Violation", description: "Anti-money laundering and financial crime compliance failures",
    longDescription: "Enterprise-level anti-money laundering, sanctions, and financial crime compliance failures from inadequate customer due diligence, transaction monitoring, beneficial ownership controls, or suspicious activity reporting. Exposure is acute for banks, fintechs, crypto platforms, payment providers, and cross-border trade businesses.",
    icon: Banknote, color: "#B91C1C", costOfRisk: "$10M–$1B+ in fines; licensing restrictions and monitor obligations", currentState: "Intensifying — OFAC, FinCEN, FATF, and India AML enforcement are expanding beneficial ownership and sanctions screening expectations", timeValueOfMitigation: "Continuous — Real-time screening and audit trails are the lowest-cost control before enforcement",
    likelihood: "Likely",
    businessImpact: {
      operational: "Transaction holds; remediation programs; independent monitor oversight",
      financial: "Fines; penalties; legal defense; compliance system investment",
      regulatory: "AML, sanctions, licensing, and reporting enforcement",
      reputational: "Counterparty de-risking and loss of banking relationships"
    },
    potentialImplications: ["Civil and criminal penalties", "License suspension", "Deferred prosecution agreements", "Beneficial ownership gaps", "Sanctions violations", "SAR reporting failures", "Correspondent banking loss", "Executive accountability"],
    relatedIndustries: ["financial-services", "fintech", "crypto", "legal", "real-estate", "all"], relatedOfferings: ["regulatory-advisory", "cyber-regulatory-defense", "crime-fidelity"], relatedSolutions: ["Regulatory Compliance", "Financial Crime Advisory", "Cyber Regulatory Defense"]
  },

  "risk-intelligence-center": {
    slug: "risk-intelligence-center", label: "Risk Intelligence Center", description: "Centralized risk signals, analytics, and advisory response",
    longDescription: "Enterprise-level risk intelligence capability that consolidates cyber, geopolitical, supply chain, regulatory, climate, and financial signals into actionable board and executive decision support. The center connects monitoring, analytics, insurance gap identification, and crisis response workflows.",
    icon: Target, color: "#0D9488", costOfRisk: "$10M–$100M from delayed detection; severe crises can exceed $1B in cascading losses", currentState: "Strategic priority — Enterprises are consolidating fragmented alerts into continuous intelligence and response platforms", timeValueOfMitigation: "Continuous — Early warning and pre-event mitigation are materially cheaper than crisis response",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Signal triage; incident playbooks; cross-functional response",
      financial: "Loss prevention; insurance recovery optimization; avoided downtime",
      regulatory: "Audit trails; disclosure readiness; governance reporting",
      reputational: "Stakeholder confidence through proactive risk visibility"
    },
    potentialImplications: ["Delayed crisis detection", "Fragmented executive reporting", "Uninsured emerging exposures", "Regulatory disclosure gaps", "Supply chain blind spots", "Cyber-physical convergence", "Board oversight gaps", "Premium and capacity disadvantage"],
    relatedIndustries: ["all", "financial-services", "technology", "energy", "manufacturing", "healthcare"], relatedOfferings: ["risk-diagnostic-engine-enterprise", "policy-gap-analyzer-platform", "regulatory-advisory"], relatedSolutions: ["Global Program Architecture", "TCOR Analytics & Benchmarking", "AI Risk Solutions"]
  },

  "esg-risk": {
    slug: "esg-risk", label: "ESG Risk", description: "Environmental, Social, and Governance related litigation and fines",
    longDescription: "Enterprise-level ESG risk from mandatory disclosure under CSRD, SEC Rules, Green Deal, CBAM. Greenwashing litigation rising. $500B+ green bond destabilization risk.",
    icon: Leaf, color: "#16A34A", costOfRisk: "$5M–$50M assurance; $100B+ stranded", currentState: "Implementation — CSRD 2024+; CBAM 2026", timeValueOfMitigation: "Annual — First-year baseline; 40% error reduction",
    likelihood: "Very Likely",
    businessImpact: { operational: "Reporting; decarbonization; audit", financial: "CBAM; bond default; stranded", regulatory: "CSRD audit; SEC disclosure", reputational: "Greenwashing litigation; boycott" },
    potentialImplications: ["Greenwashing suits", "CSRD liability", "CBAM 5–20%", "Bond acceleration", "Access denial", "Divestment", "Talent attrition", "Data investigation"],
    relatedIndustries: ["energy", "manufacturing", "steel", "cement", "chemicals", "financial-services", "agriculture"], relatedOfferings: ["esg", "climate-transition"], relatedSolutions: ["ESG Strategy", "Climate Transition", "Sustainability Assurance"]
  },
};
