import * as React from "react";
import { Zap, Database, Mail, Bot, Users, Lock, Flame, Recycle, FileWarning, Scale, Gavel, Target, TrendingUp, HeartPulse, Shield, Share2, Building2, Rocket, UserX, Thermometer, Truck, Globe, CreditCard, Banknote, Cpu, Briefcase, Container, Leaf } from "lucide-react";

export interface RiskData {
  slug: string;
  label: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
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
  icon: React.ComponentType<{ className?: string }>;
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
      { id: "single-source-supplier", label: "Single-Source Supplier Failure", description: "Dependence on sole suppliers for critical components" },
      { id: "geographic-concentration", label: "Geographic Concentration Risk", description: "Over-reliance on single regions or markets" },
      { id: "counterparty-default", label: "Counterparty / Customer Default", description: "Major customer or partner insolvency" },
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
      { id: "quantum-encryption-breach", label: "Quantum Computing — Encryption Breach", description: "Current encryption rendered obsolete by quantum computers" },
      { id: "satellite-cyber-attack", label: "Satellite Cyber Attack", description: "Jamming, spoofing, and command takeover" },
      { id: "autonomous-vehicle-accident", label: "Autonomous Vehicle — Fatal Accident", description: "Self-driving vehicle liability incidents" },
      { id: "drone-injury", label: "Drone — Third-Party Injury", description: "UAV operations causing bystander injury" },
      { id: "climate-tech-failure", label: "Climate Tech — Technology Failure", description: "Green technology underperformance" },
      { id: "ai-governance-failure", label: "AI Governance Failure", description: "Regulatory compliance and algorithm bias risks" },
    ]
  },
};

export const risksData: Record<string, RiskData> = {
  "ransomware": {
    slug: "ransomware",
    label: "Ransomware Attack",
    description: "Malware encryption demanding payment for decryption",
    longDescription: "Production systems encrypted and rendered inoperable. Revenue stops immediately. Customer data potentially exfiltrated. Regulatory notification clocks start ticking. Board crisis meetings required. Recovery timeline measured in weeks to months.",
    icon: Zap,
    color: "#DC2626",
    costOfRisk: "$500K — $50M+ per incident (ransom + forensics + business interruption + notification + legal + regulatory)",
    likelihood: "Almost Certain",
    businessImpact: {
      operational: "Complete operational shutdown lasting days to months, system rebuild required",
      financial: "Ransom demands, recovery costs, lost revenue, and potential business closure",
      regulatory: "GDPR, HIPAA, CCPA, DPDP notification requirements triggered",
      reputational: "Customer trust erosion and potential permanent brand damage"
    },
    potentialImplications: [
      "Complete operational shutdown lasting days to months",
      "Customer trust erosion and contract termination",
      "Regulatory fines under GDPR, HIPAA, CCPA, DPDP",
      "Class action lawsuits from affected customers or employees",
      "Board personal liability exposure if cyber governance was inadequate",
      "Permanent reputational damage if incident becomes public",
      "Cyber insurance premiums increasing significantly at renewal",
      "Potential business closure for small and mid-size companies"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["cyber", "directors-officers"],
    relatedSolutions: ["Cyber Risk Advisory", "Enterprise Risk Management Consulting"]
  },
  "data-breach": {
    slug: "data-breach",
    label: "Data Breach (Customer PII)",
    description: "Unauthorized access to personal identifiable information",
    longDescription: "Personal identifiable information (names, SSNs, financial data, health records) exposed. Regulatory notification obligations triggered across every jurisdiction where affected individuals reside. Forensic investigation required. Credit monitoring services must be offered to affected individuals.",
    icon: Database,
    color: "#DC2626",
    costOfRisk: "$150 — $550+ per compromised record. Average total cost: $4.45M per breach (global average). Healthcare average: $10.93M per breach.",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Forensic investigation, system remediation, and security overhaul",
      financial: "Average breach cost of $4.45M globally, $10.93M in healthcare",
      regulatory: "Multi-jurisdictional regulatory fines up to 4% of global revenue",
      reputational: "65% of breach victims lose trust, brand damage lasting years"
    },
    potentialImplications: [
      "Multi-jurisdictional regulatory fines (GDPR fines up to 4% of global revenue)",
      "Class action litigation (US: average settlement $10M-$50M+)",
      "Customer churn (studies show 65% of breach victims lose trust)",
      "Brand damage affecting new customer acquisition for years",
      "Board and CISO personal liability exposure",
      "Increased cost of capital (credit rating impact)",
      "Cyber insurance premium increases at renewal",
      "Regulatory consent decree requiring ongoing compliance investment"
    ],
    relatedIndustries: ["technology", "healthcare", "financial-services", "retail"],
    relatedOfferings: ["cyber", "directors-officers"],
    relatedSolutions: ["Cyber Risk Advisory", "Regulatory & Compliance Advisory"]
  },
  "bec": {
    slug: "bec",
    label: "Business Email Compromise / Social Engineering Fraud",
    description: "Fraudulent wire transfers via executive impersonation",
    longDescription: "Direct financial loss from fraudulent wire transfers. Funds typically moved to offshore accounts within hours. Recovery rate without specialized intervention: less than 20%.",
    icon: Mail,
    color: "#C2410C",
    costOfRisk: "$125K — $5M+ per incident. Average BEC loss: $125K. Sophisticated attacks with deepfake enhancement: $1M-$5M+.",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "Internal investigation costs and process overhaul required",
      financial: "Irreversible financial loss if funds not recovered within 72 hours",
      regulatory: "Board liability for inadequate financial controls",
      reputational: "Employee termination and morale impact"
    },
    potentialImplications: [
      "Irreversible financial loss if funds not recovered within 72 hours",
      "Internal investigation costs and process overhaul",
      "Board liability for inadequate financial controls",
      "Employee termination and morale impact",
      "Audit finding and potential covenant breach",
      "Insurance claim dispute if social engineering sublimit is inadequate"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["crime-fidelity", "directors-officers"],
    relatedSolutions: ["Cyber Risk Advisory", "Enterprise Risk Management Consulting"]
  },
  "deepfake-fraud": {
    slug: "deepfake-fraud",
    label: "Deepfake Fraud",
    description: "AI-generated audio/video for fraudulent authorizations",
    longDescription: "AI-generated audio or video of executives used to authorize fraudulent transactions, manipulate stock prices, or deceive employees into transferring funds or confidential information.",
    icon: Bot,
    color: "#7C3AED",
    costOfRisk: "$1M — $50M+ per incident. Average deepfake-enabled financial fraud: $2.5M.",
    likelihood: "Likely",
    businessImpact: {
      operational: "Fundamental overhaul of communication verification protocols needed",
      financial: "Direct financial loss from fraudulent authorizations",
      regulatory: "Market manipulation liability if publicly traded",
      reputational: "Employee trust erosion (cannot trust executive communications)"
    },
    potentialImplications: [
      "Direct financial loss from fraudulent authorizations",
      "Securities manipulation liability if publicly traded",
      "Employee trust erosion (cannot trust executive communications)",
      "Customer deception leading to contract disputes",
      "Regulatory investigation (market manipulation, insider trading)",
      "Need for fundamental overhaul of communication verification protocols"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["crime-fidelity", "cyber", "directors-officers"],
    relatedSolutions: ["Cyber Risk Advisory", "Enterprise Risk Management Consulting"]
  },
  "d-o-personal-liability": {
    slug: "d-o-personal-liability",
    label: "Directors & Officers Personal Liability",
    description: "Personal liability for directors and officers",
    longDescription: "Directors and officers personally named in lawsuits alleging breach of fiduciary duty, mismanagement, misleading statements, or failure of oversight. Personal assets at risk if company cannot indemnify.",
    icon: Users,
    color: "#1E40AF",
    costOfRisk: "$1M — $200M+ per claim. Average securities class action settlement: $35M. Defense costs alone: $5M-$40M.",
    likelihood: "Likely",
    businessImpact: {
      operational: "Management attention diverted to litigation defense",
      financial: "Personal financial ruin for directors/officers without Side A coverage",
      regulatory: "Board crisis meetings and investor relations strain",
      reputational: "Personal reputation damage for named executives"
    },
    potentialImplications: [
      "Personal financial ruin for directors/officers without Side A coverage",
      "Inability to recruit qualified board members",
      "Company funds diverted to indemnification instead of operations",
      "Stock price decline from litigation publicity",
      "Regulatory investigation compounding litigation costs",
      "Potential delisting or going-private transaction"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["directors-officers", "fiduciary-liability"],
    relatedSolutions: ["Enterprise Risk Management Consulting"]
  },
  "employment-practices": {
    slug: "employment-practices",
    label: "Employment Practices Liability",
    description: "Workplace discrimination, harassment, and termination claims",
    longDescription: "Current or former employees allege wrongful termination, discrimination, harassment, retaliation, or wage violations. Class actions multiply exposure by affected employee count.",
    icon: UserX,
    color: "#0F766E",
    costOfRisk: "$75K — $50M+ per claim. Average EPLI claim: $200K. Class action settlements: $10M-$60M+.",
    likelihood: "Very Likely",
    businessImpact: {
      operational: "HR department resources diverted to claims management",
      financial: "Significant settlement or verdict costs",
      regulatory: "EEOC investigations and regulatory scrutiny",
      reputational: "Brand damage affecting talent recruitment"
    },
    potentialImplications: [
      "Significant settlement or verdict costs",
      "Executive termination (if accused of harassment)",
      "Brand damage affecting talent recruitment",
      "Regulatory consent decree requiring ongoing monitoring",
      "AI hiring tools may need complete rebuild (discrimination cases)",
      "Board liability for failure of oversight (toxic culture claims)"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["employment-practices", "directors-officers", "ai-liability"],
    relatedSolutions: ["Enterprise Risk Management Consulting"]
  },
  "crime-employee-dishonesty": {
    slug: "crime-employee-dishonesty",
    label: "Crime & Employee Dishonesty",
    description: "Employee theft, embezzlement, and fraud",
    longDescription: "Direct financial loss from employee theft, embezzlement, forgery, or unauthorized transactions. Often discovered long after the fact, making recovery difficult.",
    icon: Lock,
    color: "#B45309",
    costOfRisk: "$117K median per fraud scheme. Management-level fraud: $500K+. Large embezzlement cases: $5M-$50M+.",
    likelihood: "Possible",
    businessImpact: {
      operational: "Internal investigation and control implementation",
      financial: "Direct financial loss reducing profitability or causing insolvency",
      regulatory: "Audit firm liability exposure",
      reputational: "Internal culture questions and trust issues"
    },
    potentialImplications: [
      "Direct financial loss reducing profitability or causing insolvency",
      "Financial statement restatement",
      "Bank covenant breach (triggering loan acceleration)",
      "Board liability for failure of internal controls",
      "Audit firm liability exposure",
      "Criminal prosecution of the perpetrator (with associated costs)"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["crime-fidelity", "directors-officers"],
    relatedSolutions: ["Enterprise Risk Management Consulting"]
  },
  "natural-catastrophe": {
    slug: "natural-catastrophe",
    label: "Natural Catastrophe — Property Damage",
    description: "Fire, flood, earthquake, wind damage to physical assets",
    longDescription: "Physical destruction or damage to buildings, equipment, inventory, and infrastructure. Operations halted during repair or rebuild.",
    icon: Flame,
    color: "#DC2626",
    costOfRisk: "$1M — $500M+ per event. Global insured natural catastrophe losses: $100B+ annually. Individual major events: $10B-$100B+.",
    likelihood: "Almost Certain",
    businessImpact: {
      operational: "Complete loss of production capability for months or years",
      financial: "Replacement cost potentially exceeding insurance limits",
      regulatory: "Environmental and safety authority investigations",
      reputational: "Community impact (factory closure affecting local economy)"
    },
    potentialImplications: [
      "Complete loss of production capability for months or years",
      "Replacement cost exceeding insurance limits",
      "Employee displacement and safety concerns",
      "Customer defection to competitors during downtime",
      "Supply chain disruption affecting downstream customers",
      "Community impact (factory closure affecting local economy)"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["property-sfsp", "business-interruption", "parametric"],
    relatedSolutions: ["Climate Risk & Resilience Advisory"]
  },
  "regulatory-investigation": {
    slug: "regulatory-investigation",
    label: "Regulatory Investigation & Fines",
    description: "Government penalties and enforcement actions",
    longDescription: "Government agency opens formal investigation into business practices. Defense costs begin immediately regardless of outcome. Fines and penalties if violation found.",
    icon: Gavel,
    color: "#0F766E",
    costOfRisk: "$100K — $100M+ per investigation. GDPR fines: up to 4% of global revenue. Antitrust fines: up to 10% of global revenue. FCPA fines: $1M-$2B+.",
    likelihood: "Likely",
    businessImpact: {
      operational: "Business practices restricted, processes re-engineered",
      financial: "Defense costs consuming significant resources, massive fines reducing profitability",
      regulatory: "Consent decree limiting future business practices",
      reputational: "Public scrutiny and media attention affecting customer confidence"
    },
    potentialImplications: [
      "Defense costs consuming significant resources",
      "Fines reducing profitability",
      "Consent decree limiting future business practices",
      "Criminal prosecution of individuals",
      "Reputational damage affecting customer and investor confidence",
      "Market access restrictions (debarment, license revocation)",
      "Increased regulatory scrutiny going forward"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["directors-officers", "cyber", "political-risk"],
    relatedSolutions: ["Regulatory & Compliance Advisory"]
  },
  "class-action-lawsuit": {
    slug: "class-action-lawsuit",
    label: "Class Action Lawsuit",
    description: "Mass litigation with multiplicative damages",
    longDescription: "A group of plaintiffs with common claims sues collectively. The size of the affected class multiplies individual damages to enormous totals.",
    icon: Scale,
    color: "#B45309",
    costOfRisk: "$5M — $500M+ per class action. Average class action settlement: $20M-$50M. Defense costs: $3M-$20M.",
    likelihood: "Likely",
    businessImpact: {
      operational: "Years of litigation consuming management attention",
      financial: "Massive settlement or verdict costs potential",
      regulatory: "Regulatory investigation triggered by allegations",
      reputational: "Public exposure damaging business relationships"
    },
    potentialImplications: [
      "Massive settlement or verdict costs",
      "Years of litigation consuming management attention",
      "Stock price impact during litigation",
      "Insurance coverage disputes (adequacy of limits)",
      "Reputational damage affecting business relationships",
      "Regulatory investigation triggered by class action allegations",
      "Precedent-setting verdict affecting entire industry"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["directors-officers", "employment-practices", "cyber", "product-liability"],
    relatedSolutions: ["Enterprise Risk Management Consulting"]
  },
  "ip-infringement": {
    slug: "ip-infringement",
    label: "Intellectual Property Infringement",
    description: "Patent, trademark, or copyright violations",
    longDescription: "Company accused of infringing another party's patent, trademark, copyright, or trade secret. Must defend the claim or face injunction and damages.",
    icon: FileWarning,
    color: "#0F766E",
    costOfRisk: "$500K — $100M+ per claim. Patent troll settlements average: $2M-$10M. Complex patent litigation: $5M-$50M+.",
    likelihood: "Possible",
    businessImpact: {
      operational: "Product removal from market if injunction granted",
      financial: "Defense costs ($2M-$10M+), settlement or damages ($5M-$100M+)",
      regulatory: "IP office proceedings and potential sanctions",
      reputational: "Industry perception of innovation capability questioned"
    },
    potentialImplications: [
      "Defense costs ($2M-$10M+ for patent litigation)",
      "Settlement or damages ($5M-$100M+)",
      "Injunction preventing sale of key product",
      "Lost licensing revenue if own IP is invalidated",
      "Product redesign costs to design around patent",
      "Market access restriction in specific jurisdictions"
    ],
    relatedIndustries: ["technology", "manufacturing"],
    relatedOfferings: ["professional-indemnity", "technology-e&o", "product-liability"],
    relatedSolutions: ["Enterprise Risk Management Consulting"]
  },
  "contract-risk-exposure": {
    slug: "contract-risk-exposure",
    label: "Contract Risk Exposure",
    description: "Unfavorable contractual terms and disputes",
    longDescription: "Hidden contractual terms create financial exposure that exceeds the enterprise's insurance coverage. Counterparty may enforce unfavorable terms in a dispute.",
    icon: Share2,
    color: "#8B5CF6",
    costOfRisk: "$100K — $100M+ per contract dispute. Uncapped indemnification clauses: unlimited exposure.",
    likelihood: "Almost Certain",
    businessImpact: {
      operational: "Contractual disputes and renegotiation efforts",
      financial: "Unlimited liability exposure from uncapped indemnification",
      regulatory: "Governing law disputes and jurisdictional challenges",
      reputational: "Counterparty relationship strain affecting future deals"
    },
    potentialImplications: [
      "Unlimited liability exposure from uncapped indemnification",
      "Insurance coverage gaps where contractual requirements exceed actual policy",
      "Counterparty default with no contractual recourse",
      "Governing law unfavorable to the enterprise",
      "Force majeure gaps leaving enterprise exposed to unforeseen events",
      "Data protection liability from inadequate DPA terms"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["multi-line-cross-border"],
    relatedSolutions: ["AI-Powered Contract Risk Analytics", "Insurance Requirement Compliance Checker"]
  },
  "climate-physical": {
    slug: "climate-physical",
    label: "Climate Change — Physical Risk",
    description: "Increased frequency and severity of extreme weather events",
    longDescription: "Acute: more frequent and severe hurricanes, floods, wildfires, heatwaves, and droughts. Chronic: sea level rise, temperature change, water scarcity, ecosystem disruption.",
    icon: Thermometer,
    color: "#059669",
    costOfRisk: "$10M — $1B+ per event (acute). $100M-$5B+ portfolio impairment (chronic). Global insured losses: $100B+ annually.",
    likelihood: "Almost Certain",
    businessImpact: {
      operational: "Asset damage requiring repair or replacement",
      financial: "Insurance availability crisis in high-risk zones",
      regulatory: "TCFD, EU Taxonomy compliance requirements",
      reputational: "Climate resilience questions from stakeholders"
    },
    potentialImplications: [
      "Increased property damage and insurance costs",
      "Business interruption from climate events",
      "Supply chain disruption (agricultural, water-dependent)",
      "Asset value decline in high-risk locations",
      "Stranded assets as climate transition accelerates",
      "Insurance availability crisis in high-risk zones",
      "Regulatory compliance costs (TCFD, EU Taxonomy)"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["property-sfsp", "business-interruption", "parametric"],
    relatedSolutions: ["Climate Risk & Resilience Advisory"]
  },
  "climate-transition": {
    slug: "climate-transition",
    label: "Climate Change — Transition Risk",
    description: "Asset write-downs as business models become obsolete",
    longDescription: "Policy changes (carbon taxes, emission standards), technology shifts (renewables replacing fossil fuels), market repricing (ESG investment criteria), and reputational consequences (greenwashing allegations).",
    icon: Recycle,
    color: "#059669",
    costOfRisk: "$50M — $5B+ (asset write-downs). Carbon pricing: $50-$200/ton in regulated markets.",
    likelihood: "Almost Certain",
    businessImpact: {
      operational: "Business model adaptation and technology shift requirements",
      financial: "Stranded assets, increased operating costs, capital access restrictions",
      regulatory: "Emission reporting, carbon trading compliance",
      reputational: "Greenwashing litigation risk and stakeholder skepticism"
    },
    potentialImplications: [
      "Stranded assets (fossil fuel reserves, carbon-intensive infrastructure)",
      "Increased operating costs from carbon pricing",
      "Capital access restrictions (ESG lending criteria)",
      "Customer loss (procurement requiring net-zero supply chains)",
      "Regulatory compliance costs (emission reporting, carbon trading)",
      "Greenwashing litigation risk",
      "Board liability for failure to address climate risk"
    ],
    relatedIndustries: ["energy", "manufacturing", "transportation"],
    relatedOfferings: ["directors-officers", "parametric"],
    relatedSolutions: ["Climate Risk & Resilience Advisory", "Enterprise Risk Management Consulting"]
  },
  "pandemic": {
    slug: "pandemic",
    label: "Pandemic / Communicable Disease",
    description: "Government-mandated shutdowns and workforce illness",
    longDescription: "Government-mandated shutdowns, workforce illness, supply chain disruption, demand collapse in specific sectors, and long-term behavioral shifts.",
    icon: HeartPulse,
    color: "#EC4899",
    costOfRisk: "$10M — $10B+ (global pandemic impact). COVID-19 global economic cost: $12.5T+.",
    likelihood: "Possible",
    businessImpact: {
      operational: "Complete operational shutdown from government mandates",
      financial: "Revenue collapse in affected sectors, supply chain disruption",
      regulatory: "Health authority compliance and reporting requirements",
      reputational: "Workforce wellbeing and community safety questions"
    },
    potentialImplications: [
      "Complete operational shutdown (government mandate)",
      "Revenue collapse in affected sectors",
      "Workforce unavailability (illness, quarantine)",
      "Supply chain disruption (global sourcing affected)",
      "Insurance coverage disputes (pandemic exclusions common)",
      "Long-term demand shift (remote work, digital transformation)",
      "Mental health and workforce wellbeing impact"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["business-interruption", "parametric"],
    relatedSolutions: ["Enterprise Risk Management Consulting"]
  },
  "supply-chain-cyber": {
    slug: "supply-chain-cyber",
    label: "Supply Chain Cyber Attack",
    description: "Trusted vendor compromise affecting downstream customers",
    longDescription: "Trusted vendor's software update contains malware or backdoor. Compromise may persist for months before detection. All downstream customers affected simultaneously. Response requires coordination across multiple organizations.",
    icon: Share2,
    color: "#6366F1",
    costOfRisk: "$5M — $500M+ depending on scope and industry. Average cost: $4.63M (higher than direct breach).",
    likelihood: "Likely",
    businessImpact: {
      operational: "Multi-month compromise requiring complete system rebuild",
      financial: "Customer liability claims cascading across the supply chain",
      regulatory: "Investigation (how did you vet your vendor?)",
      reputational: "Loss of customer confidence in your security posture"
    },
    potentialImplications: [
      "Multi-month compromise requiring complete system rebuild",
      "Customer liability claims cascading across the supply chain",
      "Regulatory investigation (how did you vet your vendor?)",
      "Insurance coverage dispute (which policy covers supply chain risk?)",
      "Loss of customer confidence in your security posture",
      "Potential for intellectual property theft during undetected period"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["cyber", "directors-officers"],
    relatedSolutions: ["Supply Chain Risk Visualizer", "Supply Chain Risk Advisory"]
  },
  "key-person-loss": {
    slug: "key-person-loss",
    label: "Key Person Loss",
    description: "Dependence on critical individuals",
    longDescription: "Critical individual unable to serve due to death, disability, sudden departure, or incapacitation. Business continuity threatened if the organization depends heavily on one person's relationships, expertise, or decision-making.",
    icon: Users,
    color: "#64748B",
    costOfRisk: "1x-5x the key person's annual revenue contribution. For a CEO of a $500M company: $50M-$250M in business impact.",
    likelihood: "Possible",
    businessImpact: {
      operational: "Operational disruption if key person held specialized knowledge",
      financial: "Revenue decline if key person managed key customer relationships",
      regulatory: "Investor confidence decline and potential covenant breach",
      reputational: "Competitive vulnerability during transition period"
    },
    potentialImplications: [
      "Revenue decline if key person managed key customer relationships",
      "Operational disruption if key person held specialized knowledge",
      "Investor confidence decline and potential covenant breach",
      "Recruitment cost and time to find replacement",
      "Competitive vulnerability during transition period",
      "Potential forced sale or liquidation for small businesses"
    ],
    relatedIndustries: ["professional-services", "technology", "healthcare", "financial-services"],
    relatedOfferings: ["key-person", "directors-officers"],
    relatedSolutions: ["Enterprise Risk Management Consulting"]
  },
  "reputational-damage": {
    slug: "reputational-damage",
    label: "Reputational Damage",
    description: "Brand value erosion and public perception crises",
    longDescription: "Negative public perception spreads rapidly through social media and news coverage. Customer trust erodes. Employees lose confidence. Investors flee. Years of brand rehabilitation investment required. Potential business closure for consumer-facing brands.",
    icon: HeartPulse,
    color: "#EC4899",
    costOfRisk: "$5M — $500M+ in direct and indirect costs. Brand value destruction can exceed the company's entire annual revenue.",
    likelihood: "Possible",
    businessImpact: {
      operational: "Brand rehabilitation investment required for years",
      financial: "Customer churn (immediate and ongoing)",
      regulatory: "Regulatory scrutiny triggered by media attention",
      reputational: "Potential business closure for consumer-facing brands"
    },
    potentialImplications: [
      "Customer churn (immediate and ongoing)",
      "Employee recruitment and retention difficulty",
      "Stock price decline",
      "Partnership and sponsorship termination",
      "Regulatory scrutiny triggered by media attention",
      "Years of brand rehabilitation investment required",
      "Potential business closure for consumer-facing brands"
    ],
    relatedIndustries: ["consumer-goods", "retail", "hospitality", "media"],
    relatedOfferings: ["cyber", "product-liability"],
    relatedSolutions: ["Enterprise Risk Management Consulting"]
  },
  "single-source-supplier": {
    slug: "single-source-supplier",
    label: "Single-Source Supplier Failure",
    description: "Dependence on sole suppliers for critical components",
    longDescription: "Soil supplier of critical component becomes unavailable. Production halts immediately. No alternative available in the short term. Qualifying a new supplier takes months to years.",
    icon: Truck,
    color: "#0D9488",
    costOfRisk: "$10M — $2B+ depending on revenue dependency. Automotive chip shortage cost: $210B industry-wide.",
    likelihood: "Likely",
    businessImpact: {
      operational: "Complete production halt with no workaround",
      financial: "Revenue loss proportional to dependency level",
      regulatory: "Supply chain reporting requirements triggered",
      reputational: "Customer relationship strain from missed deliveries"
    },
    potentialImplications: [
      "Complete production halt with no workaround",
      "Revenue loss proportional to dependency level",
      "Customer contract penalties for non-delivery",
      "Market share loss to competitors with alternative sources",
      "Emergency sourcing at premium prices (30-100% above normal)",
      "Long-term supply chain restructuring costs",
      "Share price impact for public companies"
    ],
    relatedIndustries: ["manufacturing", "technology", "automotive"],
    relatedOfferings: ["business-interruption", "political-risk"],
    relatedSolutions: ["Supply Chain Risk Visualizer", "Supply Chain Risk Advisory"]
  },
  "geographic-concentration": {
    slug: "geographic-concentration",
    label: "Geographic Concentration Risk",
    description: "Over-reliance on single regions or markets",
    longDescription: "All supply chain links, production facilities, or customer markets in one region are affected by the same event. No geographic diversification to fall back on.",
    icon: Globe,
    color: "#7C3AED",
    costOfRisk: "$50M — $5B+ when a single region is affected by a catastrophe. Thailand floods 2011: $45B insured losses, massive electronics supply chain disruption.",
    likelihood: "Possible",
    businessImpact: {
      operational: "Cascading supply chain failure across all suppliers in the region",
      financial: "Multiple production facilities impacted simultaneously",
      regulatory: "Business continuity plan inadequacy questions",
      reputational: "Customer confidence in geographic risk management questioned"
    },
    potentialImplications: [
      "Cascading supply chain failure across all suppliers in the region",
      "Multiple production facilities impacted simultaneously",
      "Insurance aggregation limits may be insufficient for concentrated exposure",
      "Recovery timeline extended because all local resources are affected",
      "Long-term strategic reconsideration of geographic footprint"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["business-interruption", "political-risk", "parametric"],
    relatedSolutions: ["Supply Chain Risk Visualizer", "Supply Chain Risk Advisory", "Climate Risk & Resilience Advisory"]
  },
  "counterparty-default": {
    slug: "counterparty-default",
    label: "Counterparty / Customer Default",
    description: "Major customer or partner insolvency",
    longDescription: "Major customer becomes insolvent or unable to pay. Outstanding receivables become bad debt. Revenue from that customer ceases permanently.",
    icon: CreditCard,
    color: "#1E40AF",
    costOfRisk: "50-75% of outstanding receivables. For a company with $200M in receivables and $50M at risk from one default.",
    likelihood: "Likely",
    businessImpact: {
      operational: "Production overcapacity (capacity built for lost customer)",
      financial: "Bad debt write-off reducing profitability",
      regulatory: "Bank covenant breach (receivables quality decline)",
      reputational: "Credit rating downgrade triggering customer concern"
    },
    potentialImplications: [
      "Bad debt write-off reducing profitability",
      "Cash flow crisis if customer was a significant portion of revenue",
      "Bank covenant breach (receivables quality decline)",
      "Production overcapacity (capacity built for lost customer)",
      "Need to find replacement customers (6-18 months)",
      "Credit rating downgrade",
      "Potential insolvency for over-concentrated companies"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["trade-credit", "crime-fidelity"],
    relatedSolutions: ["Real-Time Risk Intelligence Feed (counterparty monitoring)"]
  },
  "currency-fluctuation": {
    slug: "currency-fluctuation",
    label: "Currency Fluctuation",
    description: "Exchange rate volatility impacting cross-border revenue",
    longDescription: "Exchange rate movements erode margins on cross-border transactions. Revenue earned in foreign currency is worth less when converted to home currency.",
    icon: Banknote,
    color: "#6B7280",
    costOfRisk: "2-15% of cross-border revenue. For a company with $500M in international revenue: $10M-$75M annual exposure to currency movements.",
    likelihood: "Almost Certain",
    businessImpact: {
      operational: "Hedging program implementation and management",
      financial: "Margin compression reducing profitability",
      regulatory: "Financial reporting volatility concerns",
      reputational: "Investor confidence questions on currency hedging"
    },
    potentialImplications: [
      "Margin compression reducing profitability",
      "Budget variance (forecasts rendered inaccurate)",
      "Competitive disadvantage vs. local-currency competitors",
      "Hedging costs reducing margins further",
      "Cash flow volatility complicating financial planning",
      "Potential covenant breach if financial metrics deteriorate"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["political-risk", "multi-line-cross-border"],
    relatedSolutions: ["Regulatory & Compliance Advisory"]
  },
  "regulatory-compliance-failure": {
    slug: "regulatory-compliance-failure",
    label: "Regulatory Compliance Failure",
    description: "Failure to comply with applicable laws or regulations",
    longDescription: "Company fails to comply with applicable laws or regulations. Regulatory authority imposes fines, penalties, or operational restrictions.",
    icon: Shield,
    color: "#10B981",
    costOfRisk: "$100K — $500M+ per violation. Industry-specific fines can reach billions.",
    likelihood: "Likely",
    businessImpact: {
      operational: "Operational restrictions (license suspension, product ban)",
      financial: "Financial penalties reducing profitability",
      regulatory: "Consent decree limiting future business practices",
      reputational: "Market access restrictions (debarment)"
    },
    potentialImplications: [
      "Financial penalties reducing profitability",
      "Operational restrictions (license suspension, product ban)",
      "Criminal prosecution of individuals",
      "Consent decree limiting future business practices",
      "Increased regulatory scrutiny going forward",
      "Market access restrictions (debarment)",
      "Reputational damage affecting customer and investor confidence"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["directors-officers", "cyber", "environmental"],
    relatedSolutions: ["Cross-Border Insurance Compliance Checker", "Regulatory & Compliance Advisory"]
  },
  "workforce-disruption": {
    slug: "workforce-disruption",
    label: "Workforce Disruption",
    description: "Labor shortages, strikes, or mass resignation events",
    longDescription: "Inability to recruit, retain, or protect workforce. Production reduced due to labor shortage. Strike halts operations. Workplace injury triggers investigation.",
    icon: Users,
    color: "#0D9488",
    costOfRisk: "$5K — $500K+ per employee for replacement. Mass workforce disruption: $10M-$100M+.",
    likelihood: "Likely",
    businessImpact: {
      operational: "Production slowdown or halt from labor shortage",
      financial: "Strike-related losses (wages, production, customer commitments)",
      regulatory: "OSHA investigation and fines",
      reputational: "Reputation as employer damaged"
    },
    potentialImplications: [
      "Production slowdown or halt from labor shortage",
      "Strike-related losses (wages, production, customer commitments)",
      "Workplace injury claims (medical costs, litigation)",
      "OSHA investigation and fines",
      "Reputational damage as employer",
      "Increased labor costs to attract/retain workers",
      "Knowledge loss from experienced employee departure"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["employment-practices", "directors-officers"],
    relatedSolutions: ["Enterprise Risk Management Consulting"]
  },
  "technology-obsolescence": {
    slug: "technology-obsolescence",
    label: "Technology Obsolescence",
    description: "Core systems becoming outdated and incompatible",
    longDescription: "Core technology platform becomes outdated. Competitors with newer technology gain advantage. Cost of maintaining legacy systems increases while capability decreases.",
    icon: Cpu,
    color: "#6366F1",
    costOfRisk: "$10M — $500M+ for complete technology platform replacement. Ongoing competitive disadvantage: $5M-$50M annually.",
    likelihood: "Likely",
    businessImpact: {
      operational: "Massive capital expenditure for platform replacement",
      financial: "Security vulnerabilities in legacy systems",
      regulatory: "Compliance with new technology regulations",
      reputational: "Customer experience degradation"
    },
    potentialImplications: [
      "Massive capital expenditure for platform replacement",
      "Competitive disadvantage during transition period",
      "Data migration risks and potential loss",
      "Employee retraining costs",
      "Customer experience degradation",
      "Security vulnerabilities in legacy systems",
      "Integration challenges with modern ecosystem"
    ],
    relatedIndustries: ["technology", "financial-services"],
    relatedOfferings: ["cyber", "technology-e&o"],
    relatedSolutions: ["Enterprise Risk Management Consulting"]
  },
  "m-a-transaction-risk": {
    slug: "m-a-transaction-risk",
    label: "M&A — Transaction Risk",
    description: "Undisclosed liabilities and integration failures",
    longDescription: "Buyer discovers undisclosed liabilities after closing. Warranties and indemnifications prove insufficient. Integration synergies fail to materialize.",
    icon: Briefcase,
    color: "#B45309",
    costOfRisk: "$5M — $500M+ from undisclosed liabilities, warranty breaches, or integration failures. 70% of acquisitions fail to create expected value.",
    likelihood: "Likely",
    businessImpact: {
      operational: "Cultural integration failure",
      financial: "Undisclosed tax, environmental, or litigation liabilities",
      regulatory: "Regulatory approval delays or denial",
      reputational: "Share price impact from write-down"
    },
    potentialImplications: [
      "Undisclosed tax, environmental, or litigation liabilities",
      "Warranty & indemnity claims against seller (may be uncollectible)",
      "Key talent departure post-acquisition",
      "Cultural integration failure",
      "Customer loss during transition",
      "Technology integration challenges",
      "Overpayment write-down"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["ma-insurance", "directors-officers", "environmental"],
    relatedSolutions: ["M&A Transaction Risk Due Diligence", "M&A Transaction Risk Advisory"]
  },
  "third-party-vendor-risk": {
    slug: "third-party-vendor-risk",
    label: "Third-Party / Vendor Risk",
    description: "Critical vendor failures or non-compliance",
    longDescription: "Critical vendor fails to perform, suffers a data breach, or becomes insolvent. Enterprise operations disrupted, customer data exposed, or contractual obligations unmet.",
    icon: Container,
    color: "#F97316",
    costOfRisk: "$1M — $100M+ per vendor failure. Average vendor-related data breach: $4.63M.",
    likelihood: "Almost Certain",
    businessImpact: {
      operational: "Operational disruption from vendor service failure",
      financial: "Emergency vendor replacement costs",
      regulatory: "Regulatory fines for inadequate vendor oversight",
      reputational: "Customer claims for service disruption"
    },
    potentialImplications: [
      "Operational disruption from vendor service failure",
      "Data breach liability from vendor security failure",
      "Regulatory fines for inadequate vendor oversight",
      "Customer claims for service disruption",
      "Emergency vendor replacement costs",
      "Contractual disputes over service levels"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["business-interruption", "cyber", "directors-officers"],
    relatedSolutions: ["Supply Chain Risk Visualizer", "Supply Chain Risk Advisory"]
  },
  "data-privacy-protection": {
    slug: "data-privacy-protection",
    label: "Data Privacy & Protection",
    description: "GDPR, CCPA, DPDP and similar regulation violations",
    longDescription: "Failure to comply with data privacy regulations. Regulatory investigation and fines. Class action lawsuits from affected individuals.",
    icon: Lock,
    color: "#10B981",
    costOfRisk: "$150 — $550+ per compromised record. GDPR fines: up to 4% of global revenue. Average privacy violation: $4.45M.",
    likelihood: "Almost Certain",
    businessImpact: {
      operational: "Multi-jurisdictional investigation coordination",
      financial: "Multi-jurisdictional fines (different regulators in different countries)",
      regulatory: "Mandatory data processing restrictions",
      reputational: "Customer trust erosion"
    },
    potentialImplications: [
      "Multi-jurisdictional fines (different regulators in different countries)",
      "Class action litigation",
      "Mandatory data processing restrictions",
      "Customer trust erosion",
      "Cross-border data transfer restrictions",
      "Increased compliance costs (DPO, privacy impact assessments)"
    ],
    relatedIndustries: ["technology", "healthcare", "retail", "financial-services"],
    relatedOfferings: ["cyber", "directors-officers"],
    relatedSolutions: ["AI-Powered Contract Risk Analytics (DPA review)", "Regulatory & Compliance Advisory"]
  },
  "esg-risk": {
    slug: "esg-risk",
    label: "ESG Risk",
    description: "Environmental, Social, and Governance related litigation and fines",
    longDescription: "Company faces claims of misleading sustainability claims, inadequate social responsibility, or governance failures. Investors, customers, and regulators apply increasing pressure.",
    icon: Leaf,
    color: "#059669",
    costOfRisk: "$5M — $500M+ from ESG-related litigation, fines, and capital access restrictions.",
    likelihood: "Likely",
    businessImpact: {
      operational: "Capital access restrictions (ESG-linked lending)",
      financial: "Greenwashing litigation and regulatory fines",
      regulatory: "ESG disclosure requirements and compliance",
      reputational: "Customer loss (procurement requiring ESG compliance)"
    },
    potentialImplications: [
      "Greenwashing litigation and regulatory fines",
      "Capital access restrictions (ESG-linked lending and investment)",
      "Customer loss (procurement requiring ESG compliance)",
      "Employee attraction and retention challenges",
      "Board liability for ESG governance failures",
      "Brand damage from public ESG criticism"
    ],
    relatedIndustries: ["all"],
    relatedOfferings: ["directors-officers", "environmental"],
    relatedSolutions: ["Climate Risk & Resilience Advisory", "Enterprise Risk Management Consulting"]
  },
};