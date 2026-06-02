export interface IndustryRisk {
  name: string;
  description: string;
}

export interface IndustrySolution {
  risk: string;
  mitigation: string[];
  outcome: string;
}

export interface IndustryCaseStudy {
  challenge: string;
  approach: string;
  outcome: string;
  impact: string;
}

export interface IndustryData {
  slug: string;
  risks: IndustryRisk[];
  solutions: IndustrySolution[];
  caseStudies: IndustryCaseStudy[];
}

export const INDUSTRIES_DATA_ENHANCED: Record<string, IndustryData> = {
  "technology-digital": {
    slug: "technology-digital",
    risks: [
      { name: "Ransomware Attack", description: "Malicious encryption of systems with demands for payment to restore access." },
      { name: "Data Breach (PII)", description: "Unauthorized access to personally identifiable customer or employee data." },
      { name: "Business Email Compromise", description: "Fraudulent wire transfer requests through compromised executive email accounts." },
      { name: "Supply Chain Cyber Attack", description: "Third-party vendor security failures affecting core operations." },
      { name: "AI Algorithm Liability", description: "Claims arising from biased or erroneous AI-driven decisions." },
      { name: "Crypto Exchange Hack", description: "Digital asset theft from cryptocurrency platforms and custodians." },
    ],
    solutions: [
      {
        risk: "Ransomware Attack",
        mitigation: ["Cyber Insurance", "Zero Trust Architecture", "Incident Response Planning"],
        outcome: "Business Continuity Protection"
      },
      {
        risk: "Data Breach (PII)",
        mitigation: ["Cyber Insurance", "GDPR Compliance", "Multi-Factor Authentication"],
        outcome: "Regulatory Compliance & Customer Trust"
      },
      {
        risk: "AI Algorithm Liability",
        mitigation: ["AI Liability Insurance", "Algorithm Audits", "Quality Assurance"],
        outcome: "Innovation Protection & Risk Transfer"
      },
    ],
    caseStudies: [
      {
        challenge: "Series C SaaS company preparing for IPO faced cybersecurity scrutiny and D&O concerns.",
        approach: "Implemented cyber insurance with zero-trust architecture, secured Side A DIC coverage for board protection.",
        outcome: "Successfully completed IPO with clean regulatory review and $0 disclosure risk gaps.",
        impact: "$2.3B valuation with full cyber and governance coverage in place."
      },
      {
        challenge: "Global fintech suffered BEC fraud resulting in $8M loss and regulatory investigation.",
        approach: "Deployed crime insurance coverage, implemented AI detection tools, employee security training program.",
        outcome: "Full recovery achieved with enhanced fraud prevention protocols.",
        impact: "95% reduction in fraud attempts within 6 months of implementation."
      },
      {
        challenge: "Technology platform faced class-action lawsuit over algorithmic bias claims.",
        approach: "Secured AI liability insurance with algorithm audit provisions, established bias testing framework.",
        outcome: "Litigation resolved with structured settlement and improved AI governance.",
        impact: "$12M liability transferred without impacting balance sheet or future innovation."
      },
    ]
  },
  "financial-services": {
    slug: "financial-services",
    risks: [
      { name: "Ransomware Attack", description: "Encryption attacks targeting core banking and trading systems." },
      { name: "Data Breach (PII)", description: "Customer financial and personal data exposure incidents." },
      { name: "SEC Investigations", description: "Regulatory scrutiny of investment decisions and disclosures." },
      { name: "Sanctions Violations", description: "Non-compliance with international trade and financial sanctions." },
      { name: "D&O Liability", description: "Board member personal liability from corporate decisions and governance." },
      { name: "Deepfake Fraud", description: "AI-generated fraudulent communications targeting financial transfers." },
    ],
    solutions: [
      {
        risk: "SEC Investigations",
        mitigation: ["D&O Insurance", "Legal Defense Fund", "Compliance Automation"],
        outcome: "Regulatory Risk Mitigation"
      },
      {
        risk: "Sanctions Violations",
        mitigation: ["Sanctions Compliance Framework", "Political Risk Insurance", "Legal Defense"],
        outcome: "International Trade Protection"
      },
      {
        risk: "Deepfake Fraud",
        mitigation: ["Crime Insurance", "AI Detection Tools", "Employee Training"],
        outcome: "Fraud Prevention & Resilience"
      },
    ],
    caseStudies: [
      {
        challenge: "Private equity fund preparing portfolio company exits required comprehensive W&I coverage.",
        approach: "Structured R&W policy with escrow elimination, tax cover extension, and regulatory defense.",
        outcome: "Completed $1.2B exit with full transaction liability protection.",
        impact: "Eliminated $50M escrow requirement while maintaining buyer confidence."
      },
      {
        challenge: "Regional bank faced ransomware attack affecting 2.3M customer accounts.",
        approach: "Activated cyber incident response, deployed forensics and legal teams, managed regulatory notifications.",
        outcome: "Systems restored within 72 hours with zero customer data compromised.",
        impact: "Maintained customer confidence and avoided regulatory penalties."
      },
      {
        challenge: "Investment advisory firm faced $5M claim over unsuitable investment recommendations.",
        approach: "Secured professional liability coverage with compliance audit endorsement.",
        outcome: "Claim resolved through mediation with structured settlement.",
        impact: "Protected advisor reputation while maintaining regulatory standing."
      },
    ]
  },
  "healthcare-life-sciences": {
    slug: "healthcare-life-sciences",
    risks: [
      { name: "Medical Malpractice", description: "Clinical errors and misdiagnosis leading to patient harm claims." },
      { name: "Pharmaceutical Liability", description: "Drug development, testing, and manufacturing defect exposures." },
      { name: "HIPAA Data Breach", description: "Patient health information exposure and regulatory penalties." },
      { name: "FDA Compliance Failures", description: "Regulatory violations during drug development and manufacturing." },
      { name: "Product Recall", description: "Mandatory withdrawal of medical devices or pharmaceutical products." },
      { name: "Supply Chain Disruption", description: "Critical API shortage affecting drug production schedules." },
    ],
    solutions: [
      {
        risk: "Medical Malpractice",
        mitigation: ["Medical Malpractice Insurance", "Quality Control Programs", "FDA Compliance"],
        outcome: "Clinical Risk Protection"
      },
      {
        risk: "Pharmaceutical Liability",
        mitigation: ["Product Liability Insurance", "Quality Control", "Compliance Audits"],
        outcome: "Drug Development Security"
      },
      {
        risk: "Supply Chain Disruption",
        mitigation: ["Contingent BI", "Dual Sourcing", "Crisis Management Plan"],
        outcome: "Supply Chain Resilience"
      },
    ],
    caseStudies: [
      {
        challenge: "Pharmaceutical manufacturer faced FDA-mandated recall of critical diabetes medication.",
        approach: "Activated product recall coverage, coordinated logistics for global withdrawal, managed PR response.",
        outcome: "Recalled 2.1M units within 30 days with zero additional liability.",
        impact: "$47M recall costs fully covered with brand reputation preserved."
      },
      {
        challenge: "Hospital system faced ransomware attack during pandemic affecting patient care.",
        approach: "Deployed cyber insurance with HIPAA compliance, restored systems within 48 hours.",
        outcome: "Minimal patient care disruption with full regulatory compliance maintained.",
        impact: "Protected 50,000+ patient records without breach notification required."
      },
      {
        challenge: "Medical device company faced $15M product liability claim over device failure.",
        approach: "Secured product liability coverage with quality control integration.",
        outcome: "Claim resolved favorably with coverage for defense and settlement.",
        impact: "Product liability risks transferred without impacting R&D budget."
      },
    ]
  },
  "manufacturing-industrial": {
    slug: "manufacturing-industrial",
    risks: [
      { name: "Fire & Explosion", description: "Facility damage from industrial accidents and equipment failures." },
      { name: "Equipment Breakdown", description: "Production machinery failures causing operational downtime." },
      { name: "Supply Chain Disruption", description: "Critical supplier failures halting production schedules." },
      { name: "Ransomware Attack", description: "Cyber attacks on manufacturing execution systems." },
      { name: "Pollution Liability", description: "Environmental contamination and cleanup regulatory costs." },
      { name: "Product Recall", description: "Defective product withdrawal and safety remediation costs." },
    ],
    solutions: [
      {
        risk: "Fire & Explosion",
        mitigation: ["Property All-Risks Insurance", "Boiler & Machinery Insurance", "Safety Audits"],
        outcome: "Physical Asset Protection"
      },
      {
        risk: "Supply Chain Disruption",
        mitigation: ["Contingent BI", "Real-Time Monitoring", "Dual Sourcing Strategy"],
        outcome: "Operational Continuity"
      },
      {
        risk: "Pollution Liability",
        mitigation: ["Environmental Liability Insurance", "EPA Audits", "Compliance Programs"],
        outcome: "Environmental Protection"
      },
    ],
    caseStudies: [
      {
        challenge: "Automotive manufacturer faced $120M fire loss at primary assembly plant.",
        approach: "Activated property insurance with business interruption coverage, coordinated rebuild timeline.",
        outcome: "Full facility restored within 18 months with operations maintained.",
        impact: "Zero production loss through temporary facility arrangement and insurance acceleration."
      },
      {
        challenge: "Electronics manufacturer faced semiconductor shortage affecting 40% of production.",
        approach: "Deployed contingent BI coverage with dual sourcing strategy implementation.",
        outcome: "Secured alternative suppliers within 60 days with minimal revenue impact.",
        impact: "Reduced supply chain concentration risk by 75% post-event."
      },
      {
        challenge: "Chemical manufacturer faced EPA investigation over wastewater discharge.",
        approach: "Activated environmental liability coverage, conducted third-party remediation.",
        outcome: "Clean water certification achieved with $3M regulatory penalty avoided.",
        impact: "Environmental compliance restored with full cost recovery from insurer."
      },
    ]
  },
  "energy-utilities": {
    slug: "energy-utilities",
    risks: [
      { name: "Fire & Explosion", description: "Oil & gas facility accidents and equipment failures." },
      { name: "Pollution Liability", description: "Environmental contamination and climate impact costs." },
      { name: "Climate Physical Risk", description: "Extreme weather affecting energy production and infrastructure." },
      { name: "Carbon Emissions Fines", description: "Regulatory penalties for exceeding emission thresholds." },
      { name: "Political Risk", description: "Government expropriation and policy changes in emerging markets." },
      { name: "Supply Chain Disruption", description: "Energy commodity supply interruptions affecting production." },
    ],
    solutions: [
      {
        risk: "Climate Physical Risk",
        mitigation: ["Parametric Flood/Wildfire Insurance", "Climate Resilience Audits", "Relocation Strategies"],
        outcome: "Climate Resilience"
      },
      {
        risk: "Pollution Liability",
        mitigation: ["Environmental Liability Insurance", "EPA Audits", "Compliance Programs"],
        outcome: "Environmental Compliance"
      },
      {
        risk: "Political Risk",
        mitigation: ["Political Risk Insurance", "Legal Defense", "Crisis Management"],
        outcome: "Investment Security"
      },
    ],
    caseStudies: [
      {
        challenge: "Solar farm operator faced 30% below-target production due to weather patterns.",
        approach: "Activated production guarantee coverage with parametric trigger integration.",
        outcome: "Full revenue shortfall recovered within 14 days of parametric event.",
        impact: "Maintained investor returns despite adverse weather conditions."
      },
      {
        challenge: "Oil & gas company faced regulatory $12M carbon credit penalty.",
        approach: "Deployed ESG compliance program with carbon offset strategy.",
        outcome: "Penalty reduced to $2M with future credit generation optimized.",
        impact: "Transformed compliance cost into revenue opportunity."
      },
      {
        challenge: "Renewables developer faced permit revocation in cross-border project.",
        approach: "Secured political risk coverage with legal defense and project restructuring.",
        outcome: "New permits obtained in alternative jurisdiction.",
        impact: "Project viability maintained with $8M political risk transfer."
      },
    ]
  },
  "infrastructure-real-estate": {
    slug: "infrastructure-real-estate",
    risks: [
      { name: "Natural Catastrophe", description: "Hurricanes, earthquakes, floods affecting property portfolios." },
      { name: "Climate Physical Risk", description: "Sea-level rise and extreme weather for coastal properties." },
      { name: "Delay & Cost Overrun", description: "Construction delays exceeding budget and timeline." },
      { name: "Contractor Default", description: "Construction partner insolvency affecting project completion." },
      { name: "Pollution Liability", description: "Construction contamination and environmental cleanup." },
      { name: "Supply Chain Disruption", description: "Material supplier failures affecting construction schedules." },
    ],
    solutions: [
      {
        risk: "Natural Catastrophe",
        mitigation: ["Property All-Risks Insurance", "Parametric Insurance", "Climate Resilience Audits"],
        outcome: "Asset Protection"
      },
      {
        risk: "Delay & Cost Overrun",
        mitigation: ["Construction All-Risks", "Delay in Start-Up Insurance", "Contingency Planning"],
        outcome: "Project Completion Security"
      },
      {
        risk: "Contractor Default",
        mitigation: ["Performance Bond / Surety", "Vendor Audits", "Legal Defense"],
        outcome: "Project Continuity Assurance"
      },
    ],
    caseStudies: [
      {
        challenge: "Highway concession faced 18-month delay due to contractor insolvency.",
        approach: "Activated surety bond coverage with alternative contractor mobilization.",
        outcome: "Project completed with 6-month extension and full penalty recovery.",
        impact: "Lender confidence maintained with working capital protected."
      },
      {
        challenge: "Commercial real estate portfolio faced repeated flood losses in coastal region.",
        approach: "Deployed parametric flood coverage with relocation and hardening strategy.",
        outcome: "Future flood events covered with $15M parametric program.",
        impact: "Property values protected with 40% premium reduction vs traditional."
      },
    ]
  },
  "transportation-logistics": {
    slug: "transportation-logistics",
    risks: [
      { name: "Marine Cargo Total Loss", description: "Cargo damage or loss during maritime transit." },
      { name: "Aviation Liability", description: "Third-party injury or damage from aviation operations." },
      { name: "Supply Chain Disruption", description: "Port and logistics hub operational failures." },
      { name: "Ransomware Attack", description: "Cyber attacks on logistics and tracking systems." },
      { name: "Vendor Cyber Breach", description: "Third-party logistics partner security failures." },
      { name: "Currency Inconvertibility", description: "Foreign exchange restrictions affecting international payments." },
    ],
    solutions: [
      {
        risk: "Marine Cargo Total Loss",
        mitigation: ["Marine Cargo Insurance", "Risk Assessments", "Crisis Management"],
        outcome: "Cargo Protection"
      },
      {
        risk: "Supply Chain Disruption",
        mitigation: ["Contingent BI", "Dual Sourcing", "Real-Time Monitoring"],
        outcome: "Logistics Continuity"
      },
      {
        risk: "Currency Inconvertibility",
        mitigation: ["Political Risk Insurance", "Legal Defense", "Financial Hedging"],
        outcome: "Cross-Border Payment Protection"
      },
    ],
    caseStudies: [
      {
        challenge: "Global logistics firm faced $25M cargo loss from port warehouse fire.",
        approach: "Activated marine cargo and stock throughput coverage with expedited claims.",
        outcome: "Full cargo value recovered within 30 days.",
        impact: "Supplier relationships maintained with immediate working capital restored."
      },
    ]
  },
  "retail-hospitality": {
    slug: "retail-hospitality",
    risks: [
      { name: "Data Breach (PII)", description: "Customer payment and personal data exposure incidents." },
      { name: "Ransomware Attack", description: "Point-of-sale and inventory system encryption attacks." },
      { name: "Consumer Class Actions", description: "Product liability and consumer protection lawsuits." },
      { name: "Consumer Data Privacy Violations", description: "Regulatory penalties for mishandling customer data." },
      { name: "Talent Shortages", description: "Staffing challenges affecting seasonal operations." },
      { name: "Social Inequality Claims", description: "Reputational damage from perceived discriminatory practices." },
    ],
    solutions: [
      {
        risk: "Data Breach (PII)",
        mitigation: ["Cyber Insurance", "GDPR Compliance", "Multi-Factor Authentication"],
        outcome: "Customer Data Protection"
      },
      {
        risk: "Consumer Class Actions",
        mitigation: ["Product Liability Insurance", "Legal Defense Fund", "Quality Control"],
        outcome: "Product Liability Protection"
      },
      {
        risk: "Talent Shortages",
        mitigation: ["Talent Development Programs", "Contingency Planning", "Employee Engagement"],
        outcome: "Workforce Stability"
      },
    ],
    caseStudies: [
      {
        challenge: "E-commerce platform faced $40M class action over data breach incident.",
        approach: "Deployed cyber liability coverage with customer notification and credit monitoring.",
        outcome: "Class action settled for $8M with regulatory fines covered.",
        impact: "Brand trust rebuilt with comprehensive privacy program implementation."
      },
    ]
  },
  "agriculture-environment": {
    slug: "agriculture-environment",
    risks: [
      { name: "Climate Physical Risk", description: "Drought, flood, and extreme weather affecting crop yields." },
      { name: "Water Scarcity", description: "Irrigation and processing water supply interruptions." },
      { name: "Deforestation Fines", description: "Regulatory penalties for illegal logging or land clearing." },
      { name: "Biodiversity Loss", description: "Environmental damage claims from ecosystem disruption." },
      { name: "Supply Chain Disruption", description: "Agricultural input supplier failures." },
      { name: "Citizen Lawsuits", description: "Environmental harm litigation from community groups." },
    ],
    solutions: [
      {
        risk: "Climate Physical Risk",
        mitigation: ["Parametric Flood/Wildfire Insurance", "Climate Resilience Audits", "Relocation Strategies"],
        outcome: "Yield Protection"
      },
      {
        risk: "Water Scarcity",
        mitigation: ["Water Management Plans", "Contingency BI", "Sustainable Sourcing"],
        outcome: "Water Security"
      },
      {
        risk: "Supply Chain Disruption",
        mitigation: ["Contingent BI", "Dual Sourcing", "Crisis Management Plan"],
        outcome: "Supply Chain Stability"
      },
    ],
    caseStudies: [
      {
        challenge: "Agri-tech company faced $18M loss from drought affecting crop insurance portfolio.",
        approach: "Deployed parametric drought insurance with weather index triggers.",
        outcome: "48-hour payout achieved with full portfolio protection maintained.",
        impact: "Insurance payout enabled input purchases for next season."
      },
    ]
  },
  "government-public-sector": {
    slug: "government-public-sector",
    risks: [
      { name: "Sanctions Violations", description: "Penalties for violating international trade sanctions." },
      { name: "Board Liability", description: "Public official personal liability from governance decisions." },
      { name: "Ransomware Attack", description: "Citizen data and critical infrastructure system compromises." },
      { name: "Citizen Lawsuits", description: "Public liability claims for negligence or service failures." },
      { name: "Social Inequality", description: "Reputational risk from perceived service discrimination." },
    ],
    solutions: [
      {
        risk: "Sanctions Violations",
        mitigation: ["Sanctions Compliance Framework", "Political Risk Insurance", "Legal Defense"],
        outcome: "Regulatory Compliance Protection"
      },
      {
        risk: "Board Liability",
        mitigation: ["D&O Insurance", "Board Training", "Risk Oversight Committees"],
        outcome: "Governance Protection"
      },
      {
        risk: "Ransomware Attack",
        mitigation: ["Cyber Insurance", "Zero Trust Architecture", "Incident Response"],
        outcome: "Citizen Data Protection"
      },
    ],
    caseStudies: [
      {
        challenge: "Municipal government faced $12M lawsuit over infrastructure negligence.",
        approach: "Secured municipal liability coverage with emergency response activation.",
        outcome: "Settlement achieved with zero budget impact to city operations.",
        impact: "Infrastructure improvements funded through insurance recovery."
      },
    ]
  },
  "education-nonprofit": {
    slug: "education-nonprofit",
    risks: [
      { name: "Data Breach (PII)", description: "Student and donor personal information exposure." },
      { name: "Ransomware Attack", description: "Educational system and research data encryption attacks." },
      { name: "Discrimination Lawsuits", description: "Workplace and educational equity litigation." },
      { name: "Workplace Harassment", description: "Faculty and staff misconduct claims." },
      { name: "Vendor Compliance Failures", description: "Third-party service provider regulatory violations." },
    ],
    solutions: [
      {
        risk: "Data Breach (PII)",
        mitigation: ["Cyber Insurance", "GDPR Compliance", "Multi-Factor Authentication"],
        outcome: "Data Security"
      },
      {
        risk: "Discrimination Lawsuits",
        mitigation: ["EPLI Insurance", "Diversity Training", "Compliance Audits"],
        outcome: "Equity Protection"
      },
      {
        risk: "Vendor Compliance Failures",
        mitigation: ["Vendor Compliance Audits", "Contractual Indemnification", "Legal Defense"],
        outcome: "Third-Party Risk Management"
      },
    ],
    caseStudies: [
      {
        challenge: "University faced $6M lawsuit over research data breach incident.",
        approach: "Activated cyber liability coverage with student notification and credit monitoring.",
        outcome: "Full claim resolved with enhanced security protocols implemented.",
        impact: "Research funding maintained with zero donor confidence impact."
      },
    ]
  },
  "emerging-industries": {
    slug: "emerging-industries",
    risks: [
      { name: "AI Algorithm Liability", description: "Autonomy and bias-related claims in emerging technologies." },
      { name: "Space Satellite Failure", description: "Satellite and space technology operational failures." },
      { name: "Drone Operations Liability", description: "Commercial drone accident and cargo damage claims." },
      { name: "Autonomous Vehicle Liability", description: "Self-driving vehicle accident and safety claims." },
      { name: "Climate Tech Liability", description: "Carbon capture and renewable energy technology failures." },
      { name: "Crypto Exchange Hack", description: "Digital asset platform security breaches." },
      { name: "Cannabis Compliance Failures", description: "Regulatory violations in cannabis operations." },
      { name: "Media Defamation Lawsuits", description: "Reputation claims from content publication." },
    ],
    solutions: [
      {
        risk: "AI Algorithm Liability",
        mitigation: ["AI Liability Insurance", "Algorithm Audits", "Quality Control"],
        outcome: "Innovation Protection"
      },
      {
        risk: "Space Satellite Failure",
        mitigation: ["Space Insurance", "Quality Control", "Crisis Management"],
        outcome: "Orbital Asset Protection"
      },
      {
        risk: "Drone Operations Liability",
        mitigation: ["Drone Fleet Insurance", "Safety Audits", "Compliance Programs"],
        outcome: "Drone Operation Security"
      },
    ],
    caseStudies: [
      {
        challenge: "Space tech startup faced $200M liability exposure from launch failure.",
        approach: "Secured space insurance with launch and in-orbit coverage layers.",
        outcome: "Full program reinstated with enhanced risk controls.",
        impact: "Series B valuation maintained despite launch setback."
      },
    ]
  },
};