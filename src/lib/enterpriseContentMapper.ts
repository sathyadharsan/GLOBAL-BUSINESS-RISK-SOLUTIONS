import { OfferingData } from "@/data/offeringsData";

export interface KPI {
  value: string;
  label: string;
}

export interface Capability {
  title: string;
  desc: string;
  bullets: string[];
}

export interface ChallengeCard {
  title: string;
  description: string;
}

export interface CoverageLayer {
  title: string;
  items: string[];
}

export interface BenefitCard {
  title: string;
  description: string;
}

export interface RiskCard {
  title: string;
  description: string;
}

export interface PlatformCard {
  title: string;
  description: string;
}

export interface SolutionCard {
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  clientProfile: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export interface Diagnostic {
  title: string;
  description: string;
}

export interface IndustryTabContent {
  label: string;
  content: {
    industryChallenges: string[];
    industryRiskExposure: string[];
    recommendedOfferings: string[];
    relatedRisks: string[];
    relatedPlatforms: string[];
    industryBenefits: string[];
  };
}

export interface EnterpriseContent {
  kpis: KPI[];
  capabilities: Capability[];
  challengeCards: ChallengeCard[];
  coverageLayers: CoverageLayer[];
  benefitCards: BenefitCard[];
  riskCards: RiskCard[];
  platformCards: PlatformCard[];
  solutionCards: SolutionCard[];
  caseStudies: CaseStudy[];
  diagnostics: Diagnostic[];
  industryTabs: IndustryTabContent[];
}

const CATEGORY_KPIS: Record<string, KPI[]> = {
  "insurance-solutions": [
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Claim Settlement Ratio" },
    { value: "45+", label: "A++ Rated Carriers" },
    { value: "24/7", label: "Claims Advocacy" },
  ],
  "cyber-digital-risk": [
    { value: "2hrs", label: "Incident Response" },
    { value: "99.9%", label: "Ransomware Recovery" },
    { value: "50+", label: "Cyber Carriers" },
    { value: "24/7", label: "Threat Monitoring" },
  ],
  "warranty-guarantee": [
    { value: "30%", label: "Cost Reduction" },
    { value: "99%", label: "Claims Accuracy" },
    { value: "20+", label: "Surety Carriers" },
    { value: "48hrs", label: "Digital Issuance" },
  ],
  "alternative-risk-transfer": [
    { value: "$2B+", label: "ILS Capacity" },
    { value: "15yr", label: "Multi-Year Structuring" },
    { value: "10+", label: "Captive Domiciles" },
    { value: "72hrs", label: "Parametric Payout" },
  ],
  "ai-contract-analytics": [
    { value: "12", label: "Risk Dimensions" },
    { value: "72hrs", label: "Due Diligence" },
    { value: "99%", label: "Gap Detection" },
    { value: "150+", label: "Jurisdictions" },
  ],
  "industry-programs": [
    { value: "30+", label: "Industry Verticals" },
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Client Retention" },
    { value: "24/7", label: "Expert Support" },
  ],
  "advisory-consulting": [
    { value: "ISO31000", label: "Aligned Frameworks" },
    { value: "150+", label: "Jurisdictions" },
    { value: "20+", label: "Years Experience" },
    { value: "24/7", label: "Advisory Access" },
  ],
  "technology-platforms": [
    { value: "200+", label: "Risk Categories" },
    { value: "20", label: "Assessment Domains" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "24/7", label: "Real-Time Feed" },
  ],
  "emerging-risks": [
    { value: "$2B+", label: "Lloyd's Capacity" },
    { value: "Pioneer", label: "Market Position" },
    { value: "10-Layer", label: "Crypto Coverage" },
    { value: "24/7", label: "Crisis Response" },
  ],
};

const SLUG_KPIS: Record<string, KPI[]> = {
  "cyber-first-party": [
    { value: "2hrs", label: "Incident Response" },
    { value: "99.9%", label: "Ransomware Recovery" },
    { value: "50+", label: "Cyber Carriers" },
    { value: "24/7", label: "Threat Monitoring" },
  ],
  "cyber-third-party": [
    { value: "2hrs", label: "Incident Response" },
    { value: "99.9%", label: "Ransomware Recovery" },
    { value: "50+", label: "Cyber Carriers" },
    { value: "24/7", label: "Threat Monitoring" },
  ],
  "tech-eo": [
    { value: "2hrs", label: "Incident Response" },
    { value: "99.9%", label: "Ransomware Recovery" },
    { value: "50+", label: "Cyber Carriers" },
    { value: "24/7", label: "Threat Monitoring" },
  ],
  "ai-liability": [
    { value: "2hrs", label: "Incident Response" },
    { value: "99.9%", label: "Ransomware Recovery" },
    { value: "50+", label: "Cyber Carriers" },
    { value: "24/7", label: "Threat Monitoring" },
  ],
  "property-sfsp": [
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Claim Settlement Ratio" },
    { value: "45+", label: "A++ Rated Carriers" },
    { value: "RCM", label: "Annual Reinstatement" },
  ],
  "business-interruption": [
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Claim Settlement Ratio" },
    { value: "45+", label: "A++ Rated Carriers" },
    { value: "RCM", label: "Annual Reinstatement" },
  ],
  "equipment-breakdown": [
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Claim Settlement Ratio" },
    { value: "45+", label: "A++ Rated Carriers" },
    { value: "RCM", label: "Annual Reinstatement" },
  ],
  "cyber-all-risks": [
    { value: "2hrs", label: "Incident Response" },
    { value: "99.9%", label: "Ransomware Recovery" },
    { value: "50+", label: "Cyber Carriers" },
    { value: "24/7", label: "Threat Monitoring" },
  ],
  "comprehensive-general-liability": [
    { value: "$500M+", label: "Limits Available" },
    { value: "99%", label: "Claims Efficiency" },
    { value: "50+", label: "Liability Carriers" },
    { value: "24/7", label: "Claims Response" },
  ],
  "employer-liability": [
    { value: "$500M+", label: "Limits Available" },
    { value: "99%", label: "Claims Efficiency" },
    { value: "50+", label: "Liability Carriers" },
    { value: "24/7", label: "Claims Response" },
  ],
  "professional-indemnity": [
    { value: "$500M+", label: "Limits Available" },
    { value: "99%", label: "Claims Efficiency" },
    { value: "50+", label: "Liability Carriers" },
    { value: "24/7", label: "Claims Response" },
  ],
  "directors-officers": [
    { value: "$500M+", label: "Limits Available" },
    { value: "99%", label: "Claims Efficiency" },
    { value: "50+", label: "Liability Carriers" },
    { value: "24/7", label: "Claims Response" },
  ],
  "trade-credit": [
    { value: "$10B+", label: "Buyers Assessed" },
    { value: "99.5%", label: "Recovery Rate" },
    { value: "150+", label: "Countries Covered" },
    { value: "$50M+", label: "Coverage Limits" },
  ],
  "marine-cargo": [
    { value: "$10B+", label: "Cargo Insured" },
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Claims Efficiency" },
    { value: "24/7", label: "Cargo Tracking" },
  ],
  "product-recall": [
    { value: "$10B+", label: "Product Lines Covered" },
    { value: "99%", label: "Recall Response" },
    { value: "150+", label: "Countries Covered" },
    { value: "24/7", label: "Crisis Support" },
  ],
  "warranty-insurance": [
    { value: "30%", label: "Cost Reduction" },
    { value: "99%", label: "Claims Accuracy" },
    { value: "20+", label: "Surety Carriers" },
    { value: "48hrs", label: "Digital Issuance" },
  ],
  "performance-bond": [
    { value: "30%", label: "Cost Reduction" },
    { value: "99%", label: "Claims Accuracy" },
    { value: "20+", label: "Surety Carriers" },
    { value: "48hrs", label: "Digital Issuance" },
  ],
  "captive-insurance": [
    { value: "$2B+", label: "ILS Capacity" },
    { value: "15yr", label: "Multi-Year Structuring" },
    { value: "10+", label: "Captive Domiciles" },
    { value: "72hrs", label: "Parametric Payout" },
  ],
  "parametric-insurance": [
    { value: "$2B+", label: "ILS Capacity" },
    { value: "15yr", label: "Multi-Year Structuring" },
    { value: "10+", label: "Captive Domiciles" },
    { value: "72hrs", label: "Parametric Payout" },
  ],
  "insurance-linked-securities": [
    { value: "$2B+", label: "ILS Capacity" },
    { value: "15yr", label: "Multi-Year Structuring" },
    { value: "10+", label: "Captive Domiciles" },
    { value: "72hrs", label: "Parametric Payout" },
  ],
  "ai-contract-risk-analytics": [
    { value: "12", label: "Risk Dimensions" },
    { value: "72hrs", label: "Due Diligence" },
    { value: "99%", label: "Gap Detection" },
    { value: "150+", label: "Jurisdictions" },
  ],
  "ma-due-diligence": [
    { value: "12", label: "Risk Dimensions" },
    { value: "72hrs", label: "Due Diligence" },
    { value: "99%", label: "Gap Detection" },
    { value: "150+", label: "Jurisdictions" },
  ],
  "contract-compliance": [
    { value: "12", label: "Risk Dimensions" },
    { value: "72hrs", label: "Due Diligence" },
    { value: "99%", label: "Gap Detection" },
    { value: "150+", label: "Jurisdictions" },
  ],
  "manufacturing-program": [
    { value: "30+", label: "Industry Verticals" },
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Client Retention" },
    { value: "24/7", label: "Expert Support" },
  ],
  "technology-program": [
    { value: "30+", label: "Industry Verticals" },
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Client Retention" },
    { value: "24/7", label: "Expert Support" },
  ],
  "healthcare-program": [
    { value: "30+", label: "Industry Verticals" },
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Client Retention" },
    { value: "24/7", label: "Expert Support" },
  ],
  "financial-services-program": [
    { value: "30+", label: "Industry Verticals" },
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Client Retention" },
    { value: "24/7", label: "Expert Support" },
  ],
  "energy-program": [
    { value: "30+", label: "Industry Verticals" },
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Client Retention" },
    { value: "24/7", label: "Expert Support" },
  ],
  "erma-consulting": [
    { value: "ISO31000", label: "Aligned Frameworks" },
    { value: "150+", label: "Jurisdictions" },
    { value: "20+", label: "Years Experience" },
    { value: "24/7", label: "Advisory Access" },
  ],
  "climate-advisory": [
    { value: "ISO31000", label: "Aligned Frameworks" },
    { value: "150+", label: "Jurisdictions" },
    { value: "20+", label: "Years Experience" },
    { value: "24/7", label: "Advisory Access" },
  ],
  "actuarial-services": [
    { value: "ISO31000", label: "Aligned Frameworks" },
    { value: "150+", label: "Jurisdictions" },
    { value: "20+", label: "Years Experience" },
    { value: "24/7", label: "Advisory Access" },
  ],
  "regulatory-compliance": [
    { value: "ISO31000", label: "Aligned Frameworks" },
    { value: "150+", label: "Jurisdictions" },
    { value: "20+", label: "Years Experience" },
    { value: "24/7", label: "Advisory Access" },
  ],
  "ai-risk-diagnostic-engine": [
    { value: "200+", label: "Risk Categories" },
    { value: "20", label: "Assessment Domains" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "24/7", label: "Real-Time Feed" },
  ],
  "policy-intelligence": [
    { value: "200+", label: "Risk Categories" },
    { value: "20", label: "Assessment Domains" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "24/7", label: "Real-Time Feed" },
  ],
  "risk-intelligence-feed": [
    { value: "200+", label: "Risk Categories" },
    { value: "20", label: "Assessment Domains" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "24/7", label: "Real-Time Feed" },
  ],
  "executive-dashboard": [
    { value: "200+", label: "Risk Categories" },
    { value: "20", label: "Assessment Domains" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "24/7", label: "Real-Time Feed" },
  ],
  "crypto-insurance": [
    { value: "$2B+", label: "Lloyd's Capacity" },
    { value: "Pioneer", label: "Market Position" },
    { value: "10-Layer", label: "Crypto Coverage" },
    { value: "24/7", label: "Crisis Response" },
  ],
  "quantum-risk": [
    { value: "$2B+", label: "Lloyd's Capacity" },
    { value: "Pioneer", label: "Market Position" },
    { value: "10-Layer", label: "Crypto Coverage" },
    { value: "24/7", label: "Crisis Response" },
  ],
  "drone-insurance": [
    { value: "$2B+", label: "Lloyd's Capacity" },
    { value: "Pioneer", label: "Market Position" },
    { value: "10-Layer", label: "Crypto Coverage" },
    { value: "24/7", label: "Crisis Response" },
  ],
  "space-insurance": [
    { value: "$2B+", label: "Lloyd's Capacity" },
    { value: "Pioneer", label: "Market Position" },
    { value: "10-Layer", label: "Crypto Coverage" },
    { value: "24/7", label: "Crisis Response" },
  ],
};

const CATEGORY_CAPABILITIES: Record<string, Capability[]> = {
  "insurance-solutions": [
    {
      title: "Program Structuring",
      desc: "Multi-line, multi-jurisdiction insurance programs optimized for enterprise scale.",
      bullets: ["Global Master Policies", "DIC/DIL Endorsements", "Carrier Optimization", "Limit Adequacy Modeling"],
    },
    {
      title: "Claims Advocacy",
      desc: "Dedicated claims handling with former adjusters and coverage counsel.",
      bullets: ["Forensic Coordination", "Dispute Escalation", "Subrogation Recovery", "SLA-Backed Response"],
    },
    {
      title: "Risk Analytics",
      desc: "Data-driven underwriting, exposure mapping, and portfolio optimization.",
      bullets: ["Predictive Modeling", "Loss Analytics", "Benchmarking", "TCOR Optimization"],
    },
    {
      title: "Regulatory Compliance",
      desc: "Multi-jurisdictional alignment with audit-ready documentation.",
      bullets: ["150+ Jurisdictions", "Filing Coordination", "Statutory Compliance", "Penalty Avoidance"],
    },
  ],
  "cyber-digital-risk": [
    {
      title: "Incident Response",
      desc: "24/7 breach response with forensic investigators and legal counsel.",
      bullets: ["Forensic Investigation", "Legal Defense", "Breach Coach", "PR Management"],
    },
    {
      title: "Cyber Tower Placement",
      desc: "Structured tower with primary, excess, and regulatory layers.",
      bullets: ["Primary Coverage", "Excess Layers", "Regulatory Defense", "Ransomware Extension"],
    },
    {
      title: "Security Integration",
      desc: "Integration with Coalition, BitSight, and threat intelligence platforms.",
      bullets: ["Security Scoring", "Premium Credits", "Vulnerability Alerts", "Vendor Assessment"],
    },
    {
      title: "Regulatory Navigation",
      desc: "GDPR, DPDP, HIPAA, PCI-DSS alignment across jurisdictions.",
      bullets: ["Multi-Jurisdictional", "Investigation Defense", "Penalty Coverage", "Disclosure Planning"],
    },
  ],
  "warranty-guarantee": [
    {
      title: "Actuarial Pricing",
      desc: "Claims-based premium modeling with real-time analytics.",
      bullets: ["Predictive Pricing", "Reserve Modeling", "Fraud Detection", "Quality Feedback"],
    },
    {
      title: "Surety Optimization",
      desc: "Performance bonds, bid bonds, and guarantee structuring.",
      bullets: ["Digital Issuance", "AI Risk Assessment", "Conditional Release", "Portfolio Management"],
    },
    {
      title: "Embedded Distribution",
      desc: "API-first warranty platform with point-of-sale integration.",
      bullets: ["REST API", "OAuth Security", "Real-Time Quoting", "Revenue Share"],
    },
    {
      title: "Portfolio Analytics",
      desc: "Real-time dashboard for claims ratios and reserve adequacy.",
      bullets: ["Anomaly Detection", "Fraud Prevention", "Quality Insights", "Benchmarking"],
    },
  ],
  "alternative-risk-transfer": [
    {
      title: "Captive Formation",
      desc: "End-to-end captive insurance company setup and management.",
      bullets: ["Domicile Selection", "Capitalization", "Reinsurance Strategy", "Regulatory Compliance"],
    },
    {
      title: "Parametric Design",
      desc: "Trigger-based risk transfer with objective data indices.",
      bullets: ["Local Indices", "Basis Risk Minimization", "24-72hr Payout", "Hybrid Structures"],
    },
    {
      title: "ILS Access",
      desc: "Capital markets capacity for catastrophe and peak risks.",
      bullets: ["Cat Bonds", "Industry Loss Warranties", "Sidecars", "Bermuda Market"],
    },
    {
      title: "Retention Optimization",
      desc: "Actuarial analysis for optimal self-insurance levels.",
      bullets: ["PML Studies", "VaR Calculations", "Stop-Loss Design", "Capital Adequacy"],
    },
  ],
  "ai-contract-analytics": [
    {
      title: "AI Risk Scoring",
      desc: "12-dimension contract analysis with gap identification.",
      bullets: ["Indemnification Review", "Liability Analysis", "Insurance Gaps", "Remediation Plans"],
    },
    {
      title: "Compliance Automation",
      desc: "Automated contract-to-program gap analysis and monitoring.",
      bullets: ["Requirement Extraction", "Matrix Comparison", "Exposure Quantification", "Renewal Alerts"],
    },
    {
      title: "M&A Due Diligence",
      desc: "72-hour contract and insurance risk assessment for deals.",
      bullets: ["Document Ingestion", "Risk Quantification", "W&I Placement", "Deal Certainty"],
    },
    {
      title: "Quality Assurance",
      desc: "Continuous contract monitoring and risk scoring updates.",
      bullets: ["Version Tracking", "Change Alerts", "Renegotiation Support", "Benchmarking"],
    },
  ],
  "industry-programs": [
    {
      title: "Sector Expertise",
      desc: "Deep domain knowledge across 30+ industry verticals.",
      bullets: ["Practice Leaders", "Regulatory Alignment", "Peer Benchmarking", "Claims Advocacy"],
    },
    {
      title: "Integrated Programs",
      desc: "Multi-line solutions spanning property, liability, and cyber.",
      bullets: ["Property & BI", "Product Liability", "Cyber Coverage", "Employment Practices"],
    },
    {
      title: "Global Scale",
      desc: "Cross-border programs with local admitted policies.",
      bullets: ["Master Policies", "Local Compliance", "Currency Management", "Centralized Governance"],
    },
    {
      title: "Claims Integration",
      desc: "Unified claims handling across all program lines.",
      bullets: ["Forensic Support", "Cross-Border Recovery", "Dispute Resolution", "Subrogation"],
    },
  ],
  "advisory-consulting": [
    {
      title: "ERM Framework",
      desc: "ISO 31000 and COSO-aligned enterprise risk management.",
      bullets: ["Risk Appetite", "Governance Design", "Board Reporting", "Culture Change"],
    },
    {
      title: "Climate Advisory",
      desc: "TCFD-aligned physical and transition risk assessment.",
      bullets: ["Scenario Analysis", "Asset-Level Modeling", "Insurance Alignment", "Investor Reporting"],
    },
    {
      title: "Actuarial Services",
      desc: "Loss modeling, PML studies, and reserve adequacy.",
      bullets: ["PML Analysis", "VaR Modeling", "Tail Risk Assessment", "Capital Optimization"],
    },
    {
      title: "Regulatory Compliance",
      desc: "Multi-jurisdictional insurance compliance monitoring.",
      bullets: ["150+ Jurisdictions", "Statutory Mapping", "Filing Coordination", "Penalty Avoidance"],
    },
  ],
  "technology-platforms": [
    {
      title: "AI Assessment",
      desc: "20-domain risk evaluation with 200+ risk categories.",
      bullets: ["Instant Scoring", "Gap Analysis", "Industry Benchmark", "PDF Reporting"],
    },
    {
      title: "Policy Intelligence",
      desc: "AI-powered policy document analysis and gap detection.",
      bullets: ["Document Ingestion", "Silent Cyber Detection", "Sublimit Analysis", "Renewal Tracking"],
    },
    {
      title: "Real-Time Monitoring",
      desc: "Live risk intelligence across carriers, jurisdictions, and threats.",
      bullets: ["Carrier Alerts", "Regulatory Updates", "Threat Feeds", "Portfolio Tracking"],
    },
    {
      title: "Executive Dashboards",
      desc: "Board-level risk visibility with drill-down capabilities.",
      bullets: ["Risk Heatmaps", "TCOR Tracking", "Trend Analysis", "Action Planning"],
    },
  ],
  "emerging-risks": [
    {
      title: "Pioneer Coverage",
      desc: "First-to-market insurance for quantum, AI, and space risks.",
      bullets: ["10-Layer Crypto", "Q-Day Parametric", "AV Fleet Coverage", "Space Syndicates"],
    },
    {
      title: "Specialist Placement",
      desc: "Lloyd's syndicates and specialist market access.",
      bullets: ["Lloyd's Capacity", "Munich Re Partnership", "Bermuda ILS", "US Specialty"],
    },
    {
      title: "Risk Definition",
      desc: "Pioneering risk taxonomy for emerging exposures.",
      bullets: ["Quantum Risk", "AI Liability", "Drone Risk", "Space Liability"],
    },
    {
      title: "Crisis Response",
      desc: "24/7 specialist support for emerging risk incidents.",
      bullets: ["Technical Advisors", "Legal Counsel", "PR Support", "Recovery Planning"],
    },
  ],
};

const CATEGORY_CHALLENGES: Record<string, ChallengeCard[]> = {
  "insurance-solutions": [
    { title: "Coverage Gaps", description: "Standard policies exclude key perils and leave BI coverage inadequate for actual rebuild timelines." },
    { title: "Premium Volatility", description: "Carrier retrenchment and catastrophe losses driving rate escalation without limit adequacy." },
    { title: "Claims Delays", description: "Complex multi-jurisdiction claims with adjuster disputes and coverage denials." },
    { title: "Regulatory Complexity", description: "150+ jurisdictions with mandatory insurance, tax, and filing requirements." },
  ],
  "cyber-digital-risk": [
    { title: "Ransomware Escalation", description: "Double extortion and supply chain attacks increasing frequency and severity." },
    { title: "Regulatory Defense", description: "GDPR, DPDP, HIPAA investigations with immediate defense cost exposure." },
    { title: "Systemic Risk", description: "Cloud concentration and third-party outages creating correlated losses." },
    { title: "AI Liability", description: "Autonomous decisions and algorithmic discrimination creating new exposure." },
  ],
  "warranty-guarantee": [
    { title: "Claims Volatility", description: "Unpredictable warranty costs eroding margins without actuarial modeling." },
    { title: "Surety Qualification", description: "Traditional surety markets excluding unrated contractors and emerging risks." },
    { title: "Distribution Friction", description: "Point-of-sale warranty attachment rates limited by integration complexity." },
    { title: "Reserve Adequacy", description: "Warranty reserves misaligned with actual claims patterns and quality issues." },
  ],
  "alternative-risk-transfer": [
    { title: "Peak Risk Capacity", description: "Traditional reinsurance markets lacking capacity for catastrophe and peak perils." },
    { title: "Premium Volatility", description: "Hard markets creating unsustainable cost spikes for retained risks." },
    { title: "Captive Complexity", description: "Regulatory, capital, and management requirements for captive formation." },
    { title: "Basis Risk", description: "Parametric triggers misaligned with actual loss experience." },
  ],
  "ai-contract-analytics": [
    { title: "Hidden Liability", description: "Uncapped indemnities and silent exclusions lurking in enterprise contracts." },
    { title: "Compliance Gaps", description: "Insurance programs failing to meet contractual requirements across jurisdictions." },
    { title: "Deal Timeline", description: "Traditional due diligence taking weeks while deal momentum requires rapid turnaround." },
    { title: "Document Overload", description: "Thousands of contracts requiring manual review with inconsistent results." },
  ],
  "industry-programs": [
    { title: "Fragmented Coverage", description: "Siloed policies with inconsistent terms and coverage gaps across locations." },
    { title: "Regulatory Divergence", description: "Industry-specific mandates varying by jurisdiction with evolving penalty structures." },
    { title: "Supply Chain Risk", description: "Single-source dependencies and geographic concentration creating uninsured exposure." },
    { title: "Crisis Response", description: "Business continuity planning gaps and slow recovery capability." },
  ],
  "advisory-consulting": [
    { title: "Risk Blind Spots", description: "Structured risk identification and quantification gaps across enterprise functions." },
    { title: "Governance Gaps", description: "Board-level risk reporting insufficient for strategic decision-making." },
    { title: "Climate Exposure", description: "Physical and transition climate risk unassessed at asset and portfolio levels." },
    { title: "Regulatory Volatility", description: "Multi-jurisdictional insurance requirements changing quarterly in key markets." },
  ],
  "technology-platforms": [
    { title: "Assessment Fatigue", description: "Manual risk questionnaires with inconsistent results and low completion rates." },
    { title: "Policy Blindness", description: "Coverage gaps hidden in dense policy documents without expert review." },
    { title: "Lagging Intelligence", description: "Risk data delayed by weeks when real-time visibility is required." },
    { title: "Siloed Data", description: "Risk, insurance, and compliance data fragmented across systems." },
  ],
  "emerging-risks": [
    { title: "Market Immaturity", description: "Limited carrier capacity and undefined risk taxonomy for emerging exposures." },
    { title: "Regulatory Uncertainty", description: "Evolving regulatory frameworks creating coverage and compliance ambiguity." },
    { title: "Technology Evolution", description: "Rapid innovation outpacing risk control and insurance product development." },
    { title: "Valuation Complexity", description: "Novel risk assets and exposures difficult to quantify for insurance purposes." },
  ],
};

const CATEGORY_COVERAGE: Record<string, CoverageLayer[]> = {
  "insurance-solutions": [
    { title: "Primary Layer", items: ["A++ carrier placement", "Core peril coverage", "Standard terms & conditions", "Claims handling"] },
    { title: "Excess Layer", items: ["Catastrophe protection", "Sublimit optimization", "Umbrella liability", "Reinsurance backstop"] },
    { title: "Parametric Layer", items: ["Weather triggers", "CAT bond access", "Hybrid structures", "Rapid liquidity"] },
    { title: "Strategic Layer", items: ["Captive integration", "Multi-year structuring", "Global coordination", "Advisory retainer"] },
  ],
  "cyber-digital-risk": [
    { title: "Prevention Layer", items: ["Security scoring", "Threat intelligence", "Vendor monitoring", "Premium credits"] },
    { title: "First-Party Layer", items: ["Ransomware coverage", "Forensics", "Business interruption", "Data recovery"] },
    { title: "Third-Party Layer", items: ["Privacy liability", "Regulatory defense", "Network security", "Media liability"] },
    { title: "Crisis Layer", items: ["Incident response", "Legal counsel", "PR management", "Recovery planning"] },
  ],
  "warranty-guarantee": [
    { title: "Actuarial Layer", items: ["Claims modeling", "Pricing optimization", "Fraud detection", "Quality feedback"] },
    { title: "Surety Layer", items: ["Performance bonds", "Bid guarantees", "Advance payment", "Maintenance bonds"] },
    { title: "API Layer", items: ["Point-of-sale integration", "Real-time quoting", "Digital issuance", "Claims automation"] },
    { title: "Analytics Layer", items: ["Portfolio tracking", "Anomaly detection", "Reserve forecasting", "Benchmarking"] },
  ],
  "alternative-risk-transfer": [
    { title: "Retention Layer", items: ["Self-insurance", "High deductibles", "Captive fronting", "Stop-loss protection"] },
    { title: "Traditional Layer", items: ["Primary coverage", "Reinsurance towers", "Carrier placement", "Policy terms"] },
    { title: "Parametric Layer", items: ["Weather indices", "CAT triggers", "Production triggers", "Hybrid coverage"] },
    { title: "Capital Layer", items: ["Cat bonds", "ILS structures", "Sidecars", "Investor capital"] },
  ],
  "ai-contract-analytics": [
    { title: "Ingestion Layer", items: ["Document parsing", "Clause extraction", "Version control", "Bulk processing"] },
    { title: "Analysis Layer", items: ["Risk scoring", "Gap detection", "Exposure mapping", "Benchmarking"] },
    { title: "Remediation Layer", items: ["Gap prioritization", "Negotiation support", "Template updates", "Training"] },
    { title: "Monitoring Layer", items: ["Change detection", "Renewal alerts", "Compliance tracking", "Reporting"] },
  ],
  "industry-programs": [
    { title: "Foundation Layer", items: ["Property coverage", "Liability coverage", "Cyber protection", "Workers comp"] },
    { title: "Specialty Layer", items: ["Product liability", "Professional indemnity", "D&O coverage", "EPL coverage"] },
    { title: "Parametric Layer", items: ["Weather triggers", "CAT bonds", "Parametric flood", "Rapid payout"] },
    { title: "Advisory Layer", items: ["Claims advocacy", "Compliance monitoring", "Risk consulting", "Crisis response"] },
  ],
  "advisory-consulting": [
    { title: "Assessment Layer", items: ["Current state review", "Gap analysis", "Benchmarking", "Risk quantification"] },
    { title: "Design Layer", items: ["Framework design", "Governance structure", "Policy development", "Process design"] },
    { title: "Implementation Layer", items: ["Change management", "Training programs", "System integration", "Pilot testing"] },
    { title: "Monitoring Layer", items: ["KPI tracking", "Audit support", "Continuous improvement", "Board reporting"] },
  ],
  "technology-platforms": [
    { title: "Data Layer", items: ["Document ingestion", "API integration", "Data enrichment", "Quality control"] },
    { title: "Intelligence Layer", items: ["AI scoring", "Gap detection", "Trend analysis", "Predictive alerts"] },
    { title: "Visualization Layer", items: ["Executive dashboards", "Heatmaps", "Reports", "Drill-down analytics"] },
    { title: "Action Layer", items: ["Recommendation engine", "Workflow automation", "Remediation tracking", "ROI measurement"] },
  ],
  "emerging-risks": [
    { title: "Assessment Layer", items: ["Risk definition", "Exposure modeling", "Valuation", "Scenario planning"] },
    { title: "Design Layer", items: ["Product structuring", "Carrier placement", "Pricing models", "Trigger design"] },
    { title: "Placement Layer", items: ["Lloyd's syndicates", "Specialist markets", "ILS access", "Reinsurance"] },
    { title: "Crisis Layer", items: ["Incident response", "Technical advisors", "Legal counsel", "PR support"] },
  ],
};

const CATEGORY_DIAGNOSTICS: Record<string, Diagnostic[]> = {
  "insurance-solutions": [
    { title: "Coverage Adequacy Assessment", description: "Comprehensive review of policy limits, deductibles, and exclusions against actual exposures." },
    { title: "Claims Handling Review", description: "Evaluation of claims settlement patterns, dispute frequency, and recovery optimization." },
    { title: "Program Optimization", description: "Analysis of premium allocation, carrier performance, and cross-border compliance." },
    { title: "Renewal Strategy", description: "Market positioning, coverage benchmarking, and negotiation strategy for upcoming renewals." },
  ],
  "cyber-digital-risk": [
    { title: "Cyber Insurance Readiness", description: "Security posture assessment against carrier underwriting requirements and coverage gap analysis." },
    { title: "Incident Response Planning", description: "Tabletop exercise design, vendor retainer optimization, and crisis workflow validation." },
    { title: "Regulatory Compliance Gap", description: "GDPR, DPDP, HIPAA alignment review with defense cost exposure modeling." },
    { title: "Ransomware Resilience", description: "Backup verification, payment readiness, and recovery timeline assessment." },
  ],
  "warranty-guarantee": [
    { title: "Warranty Cost of Risk", description: "Total warranty economics analysis including claims, reserves, and operational costs." },
    { title: "Surety Qualification", description: "Contractor risk assessment, bonding capacity analysis, and surety market positioning." },
    { title: "Claims Leakage Review", description: "Fraud detection analysis, claims process optimization, and recovery opportunity identification." },
    { title: "Distribution Strategy", description: "Point-of-sale integration assessment and attachment rate optimization." },
  ],
  "alternative-risk-transfer": [
    { title: "Retention Optimization", description: "Actuarial analysis of optimal self-insurance levels with volatility modeling." },
    { title: "Captive Feasibility", description: "Domicile selection, capitalization requirements, and regulatory pathway analysis." },
    { title: "Parametric Design", description: "Index selection, threshold calibration, and basis risk assessment." },
    { title: "ILS Market Access", description: "Catastrophe bond structuring, investor presentation, and placement strategy." },
  ],
  "ai-contract-analytics": [
    { title: "Contract Risk Scoring", description: "12-dimension analysis of contract portfolio with prioritization and remediation planning." },
    { title: "Compliance Gap Analysis", description: "Contractual insurance requirements vs. actual program coverage matrix." },
    { title: "M&A Due Diligence", description: "Rapid contract and insurance risk assessment for transaction timelines." },
    { title: "AI Implementation", description: "Contract corpus ingestion, model training, and deployment roadmap." },
  ],
  "industry-programs": [
    { title: "Industry Risk Assessment", description: "Sector-specific exposure mapping, regulatory requirements, and peer benchmarking." },
    { title: "Program Integration", description: "Multi-line consolidation, term harmonization, and governance framework design." },
    { title: "Claims Optimization", description: "Industry-specific claims strategy, advocacy integration, and recovery enhancement." },
    { title: "Supply Chain Mapping", description: "Multi-tier dependency analysis and contingent BI gap identification." },
  ],
  "advisory-consulting": [
    { title: "ERM Maturity Assessment", description: "Framework evaluation against ISO 31000 and COSO with gap prioritization." },
    { title: "Climate Risk Diagnostic", description: "TCFD-aligned physical and transition scenario analysis at asset level." },
    { title: "Regulatory Compliance Audit", description: "Multi-jurisdictional insurance requirement review with penalty exposure modeling." },
    { title: "Governance Review", description: "Board risk reporting effectiveness, risk culture assessment, and decision framework design." },
  ],
  "technology-platforms": [
    { title: "Platform Capability Assessment", description: "Feature gap analysis against enterprise requirements and integration roadmap." },
    { title: "Data Quality Review", description: "Input data assessment, enrichment gaps, and output reliability validation." },
    { title: "User Adoption Analysis", description: "Stakeholder engagement metrics, training needs, and change management planning." },
    { title: "ROI Measurement", description: "Time-to-value calculation, cost savings, and risk reduction quantification." },
  ],
  "emerging-risks": [
    { title: "Exposure Quantification", description: "Novel risk asset valuation, scenario modeling, and insurance need assessment." },
    { title: "Market Positioning", description: "Carrier appetite review, coverage availability, and placement strategy." },
    { title: "Regulatory Landscape", description: "Emerging regulatory frameworks, compliance requirements, and penalty structures." },
    { title: "Crisis Preparedness", description: "Incident response planning, technical advisor retainer, and recovery strategy." },
  ],
};

function getOfferingSpecificKPIs(offering: OfferingData): KPI[] {
  if (SLUG_KPIS[offering.slug]) {
    return SLUG_KPIS[offering.slug];
  }
  const base = CATEGORY_KPIS[offering.category] || CATEGORY_KPIS["insurance-solutions"];

  if (offering.slug.includes("property") || offering.slug.includes("sfsp")) {
    return [
      { value: "150+", label: "Countries Covered" },
      { value: "99%", label: "Claim Settlement Ratio" },
      { value: "RCM", label: "Annual Reinstatement" },
      { value: "24/7", label: "Claims Advocacy" },
    ];
  }
  if (offering.slug.includes("cyber")) {
    return [
      { value: "2hrs", label: "Incident Response" },
      { value: "99.9%", label: "Ransomware Recovery" },
      { value: "50+", label: "Cyber Carriers" },
      { value: "24/7", label: "Threat Monitoring" },
    ];
  }
  if (offering.slug.includes("warranty")) {
    return [
      { value: "30%", label: "Cost Reduction" },
      { value: "99%", label: "Claims Accuracy" },
      { value: "20+", label: "Surety Carriers" },
      { value: "48hrs", label: "Digital Issuance" },
    ];
  }
  return base;
}

function getOfferingSpecificCapabilities(offering: OfferingData): Capability[] {
  return CATEGORY_CAPABILITIES[offering.category] || CATEGORY_CAPABILITIES["insurance-solutions"];
}

function getOfferingSpecificChallenges(offering: OfferingData): ChallengeCard[] {
  return CATEGORY_CHALLENGES[offering.category] || CATEGORY_CHALLENGES["insurance-solutions"];
}

function getOfferingSpecificCoverage(offering: OfferingData): CoverageLayer[] {
  return CATEGORY_COVERAGE[offering.category] || CATEGORY_COVERAGE["insurance-solutions"];
}

function getOfferingSpecificBenefits(offering: OfferingData): BenefitCard[] {
  if (offering.businessBenefits && offering.businessBenefits.length >= 4) {
    return offering.businessBenefits.slice(0, 4).map((b) => ({ title: b.split(" ").slice(0, 3).join(" "), description: b }));
  }
  return [
    { title: "Risk Reduction", description: "Structured identification, quantification, and mitigation of enterprise exposures." },
    { title: "Operational Continuity", description: "Rapid liquidity, crisis response, and business continuity funding." },
    { title: "Regulatory Alignment", description: "Multi-jurisdictional compliance assurance with audit-ready documentation." },
    { title: "Financial Protection", description: "Optimized retention, transfer, and financing to preserve balance sheet integrity." },
  ];
}

function getOfferingSpecificRisks(offering: OfferingData): RiskCard[] {
  const risks = offering.relatedRisks || [];
  if (risks.length >= 4) {
    return risks.slice(0, 4).map((r) => ({ title: r, description: `Key exposure within ${offering.title} program scope.` }));
  }
  return [
    { title: "Cyber Risk", description: "First and third-party cyber coverage with incident response." },
    { title: "Supply Chain Risk", description: "Contingent BI and dependency mapping across tiers." },
    { title: "Climate Risk", description: "Physical and transition risk with parametric coverage." },
    { title: "Operational Risk", description: "Business interruption, equipment breakdown, and resilience." },
  ];
}

function getOfferingSpecificPlatforms(offering: OfferingData): PlatformCard[] {
  const platforms = offering.relatedPlatforms || [];
  if (platforms.length >= 4) {
    return platforms.slice(0, 4).map((p) => ({ title: p, description: `Technology platform supporting ${offering.title} delivery.` }));
  }
  return [
    { title: "Risk Diagnostic Engine", description: "AI-powered assessment across 20 domains and 200+ risk categories." },
    { title: "Contract Intelligence", description: "Automated contract risk scoring and insurance gap detection." },
    { title: "Regulatory Intelligence", description: "Real-time monitoring of 150+ jurisdictions." },
    { title: "Climate Analytics", description: "TCFD-aligned scenario analysis with asset-level modeling." },
  ];
}

function getOfferingSpecificSolutions(offering: OfferingData): SolutionCard[] {
  const solutions: SolutionCard[] = [
    {
      title: `${offering.title} Program`,
      description: offering.executiveOverview || offering.shortDescription || "Comprehensive risk transfer solution.",
    },
    {
      title: "Cross-Border Structuring",
      description: "Global master program with local admitted policies and regulatory compliance.",
    },
  ];

  if (offering.category === "cyber-digital-risk") {
    solutions.push({ title: "Incident Response Retainer", description: "24/7 forensic, legal, and PR support for cyber events." });
  }
  if (offering.category === "alternative-risk-transfer") {
    solutions.push({ title: "Parametric Risk Transfer", description: "Trigger-based coverage with 24-72 hour payout." });
  }
  if (offering.category === "ai-contract-analytics") {
    solutions.push({ title: "Due Diligence Acceleration", description: "72-hour contract risk assessment for M&A timelines." });
  }

  return solutions;
}

function getOfferingSpecificCaseStudies(offering: OfferingData): CaseStudy[] {
  const industry = offering.industryApplicability?.[0] || "enterprise";
  const offeringName = offering.title;

  if (offering.slug.includes("property") || offering.slug.includes("sfsp")) {
    return [
      {
        title: "Global Industrial Manufacturer",
        clientProfile: "Fortune 500 with 40+ facilities across 15 countries",
        challenge: "Fragmented property program with coverage gaps and inconsistent terms.",
        solution: "Consolidated global master program with TRUSTFLOW claims advocacy.",
        outcome: "18% premium reduction, 40% faster claims settlement.",
      },
    ];
  }
  if (offering.slug.includes("cyber")) {
    return [
      {
        title: "Financial Services Institution",
        clientProfile: "Regional bank with 2M+ customer records",
        challenge: "Cyber coverage gaps and regulatory defense exposure.",
        solution: "Integrated cyber tower with incident response retainer.",
        outcome: "Complete coverage alignment, $50M+ limit adequacy.",
      },
    ];
  }
  if (offering.slug.includes("manufacturing")) {
    return [
      {
        title: "Automotive Manufacturer",
        clientProfile: "Tier-1 supplier with 12 facilities across 3 countries",
        challenge: "Supply chain disruption and product liability exposure.",
        solution: "Integrated property, contingent BI, and product liability program.",
        outcome: "Supply chain resilience, 25% reduction in total cost of risk.",
      },
    ];
  }

  return [
    {
      title: `${industry} Enterprise`,
      clientProfile: `Leading ${industry.toLowerCase()} organization with multi-jurisdiction operations`,
      challenge: `Complex ${offeringName.toLowerCase()} requirements across multiple lines and geographies.`,
      solution: `Integrated ${offeringName.toLowerCase()} program with TRUSTFLOW advisory and claims advocacy.`,
      outcome: `Optimized coverage, reduced total cost of risk, and regulatory compliance achieved.`,
    },
  ];
}

function getOfferingSpecificDiagnostics(offering: OfferingData): Diagnostic[] {
  const base = CATEGORY_DIAGNOSTICS[offering.category] || CATEGORY_DIAGNOSTICS["insurance-solutions"];

  if (offering.slug.includes("cyber")) {
    return [
      { title: "Cyber Insurance Readiness", description: "Evaluate security posture, coverage gaps, and incident response readiness against benchmarks." },
      { title: "Ransomware Resilience Assessment", description: "Backup verification, payment readiness, and recovery timeline validation." },
      { title: "Regulatory Defense Planning", description: "GDPR, DPDP, HIPAA alignment review with defense cost modeling." },
      { title: "Vendor Risk Assessment", description: "Third-party cyber exposure mapping and supply chain security review." },
    ];
  }
  if (offering.slug.includes("property") || offering.slug.includes("bi")) {
    return [
      { title: "Property Risk Assessment", description: "Asset valuation, exposure modeling, and coverage adequacy review." },
      { title: "Business Interruption Modeling", description: "Revenue analysis, indemnity period optimization, and contingent BI mapping." },
      { title: "CAT Exposure Review", description: "Natural catastrophe modeling, parametric trigger design, and reinsurance optimization." },
      { title: "Claims Readiness", description: "Documentation review, forensic coordination, and claims advocacy planning." },
    ];
  }
  return base;
}

function getOfferingSpecificIndustryTabs(offering: OfferingData) {
  const industries = offering.industryApplicability?.slice(0, 5) || ["Technology", "Healthcare", "Manufacturing", "Financial Services", "Energy"];

  return industries.map((industry) => {
    const lowerIndustry = industry.toLowerCase();
    let industryChallenges: string[] = [];
    let industryRiskExposure: string[] = [];
    let recommendedOfferings: string[] = [];
    let relatedRisks: string[] = [];
    let relatedPlatforms: string[] = [];
    let industryBenefits: string[] = [];

    if (lowerIndustry.includes("technology") || lowerIndustry.includes("digital") || lowerIndustry.includes("saas")) {
      industryChallenges = ["Rapid innovation outpacing risk controls", "AI and autonomous system liability", "Cloud concentration and systemic failure"];
      industryRiskExposure = ["Cyber attack and ransomware", "Professional liability from outages", "Regulatory investigation and defense"];
      recommendedOfferings = offering.industryApplicability?.slice(0, 3) || [offering.title];
      relatedRisks = ["Cyber Risk", "Tech E&O", "AI Risk"];
      relatedPlatforms = offering.relatedPlatforms?.slice(0, 3) || ["Cyber Risk Maturity Assessment"];
      industryBenefits = ["Innovation confidence", "Investor-grade protection", "Global scaling assurance"];
    } else if (lowerIndustry.includes("healthcare") || lowerIndustry.includes("pharma") || lowerIndustry.includes("medical")) {
      industryChallenges = ["Patient data privacy and security", "Clinical trial liability", "Medical device and pharmaceutical recall"];
      industryRiskExposure = ["Medical malpractice", "Data breach notification", "Regulatory investigation"];
      recommendedOfferings = offering.industryApplicability?.slice(0, 3) || [offering.title];
      relatedRisks = offering.relatedRisks?.slice(0, 3) || ["Medical Malpractice", "Data Breach"];
      relatedPlatforms = offering.relatedPlatforms?.slice(0, 3) || ["Risk Diagnostic Engine"];
      industryBenefits = ["Patient safety assurance", "Regulatory compliance", "Product launch protection"];
    } else if (lowerIndustry.includes("manufacturing") || lowerIndustry.includes("industrial")) {
      industryChallenges = ["Global supply chain vulnerability", "Equipment breakdown and downtime", "Product liability and recall"];
      industryRiskExposure = ["Property damage and BI", "Supply chain disruption", "Product defect claims"];
      recommendedOfferings = offering.industryApplicability?.slice(0, 3) || [offering.title];
      relatedRisks = offering.relatedRisks?.slice(0, 3) || ["Property Damage", "Supply Chain"];
      relatedPlatforms = offering.relatedPlatforms?.slice(0, 3) || ["Supply Chain Risk Visualizer"];
      industryBenefits = ["Operational continuity", "Supply chain resilience", "Product quality confidence"];
    } else if (lowerIndustry.includes("financial") || lowerIndustry.includes("banking") || lowerIndustry.includes("fintech")) {
      industryChallenges = ["Regulatory penalty severity", "Systemic cyber risk", "Professional liability from advice"];
      industryRiskExposure = ["Regulatory investigation", "Data breach of customer records", "Investment advice liability"];
      recommendedOfferings = offering.industryApplicability?.slice(0, 3) || [offering.title];
      relatedRisks = offering.relatedRisks?.slice(0, 3) || ["Regulatory Risk", "Cyber Risk"];
      relatedPlatforms = offering.relatedPlatforms?.slice(0, 3) || ["Regulatory Intelligence Platform"];
      industryBenefits = ["Regulatory compliance", "Cyber incident resilience", "Professional liability protection"];
    } else if (lowerIndustry.includes("energy") || lowerIndustry.includes("renewable") || lowerIndustry.includes("oil") || lowerIndustry.includes("gas")) {
      industryChallenges = ["Construction delay and cost escalation", "Production shortfall from weather", "Grid cyber security"];
      industryRiskExposure = ["Construction risk", "Production guarantee trigger", "Natural catastrophe damage"];
      recommendedOfferings = offering.industryApplicability?.slice(0, 3) || [offering.title];
      relatedRisks = offering.relatedRisks?.slice(0, 3) || ["Construction Risk", "Production Risk"];
      relatedPlatforms = offering.relatedPlatforms?.slice(0, 3) || ["Parametric Risk Platform"];
      industryBenefits = ["Project completion assurance", "Revenue protection for renewables", "Grid cybersecurity"];
    } else {
      industryChallenges = ["Regulatory compliance complexity", "Operational risk management", "Supply chain vulnerability"];
      industryRiskExposure = offering.riskScenarios?.slice(0, 3) || ["Operational disruption", "Liability exposure", "Regulatory penalty"];
      recommendedOfferings = offering.industryApplicability?.slice(0, 3) || [offering.title];
      relatedRisks = offering.relatedRisks?.slice(0, 3) || ["Operational Risk", "Liability Risk"];
      relatedPlatforms = offering.relatedPlatforms?.slice(0, 3) || ["Risk Diagnostic Engine"];
      industryBenefits = offering.businessBenefits?.slice(0, 3) || ["Risk reduction", "Operational continuity", "Regulatory alignment"];
    }

    return {
      label: industry,
      content: {
        industryChallenges,
        industryRiskExposure,
        recommendedOfferings,
        relatedRisks,
        relatedPlatforms,
        industryBenefits,
      },
    };
  });
}

export function buildEnterpriseContent(offering: OfferingData): EnterpriseContent {
  return {
    kpis: getOfferingSpecificKPIs(offering),
    capabilities: getOfferingSpecificCapabilities(offering),
    challengeCards: getOfferingSpecificChallenges(offering),
    coverageLayers: getOfferingSpecificCoverage(offering),
    benefitCards: getOfferingSpecificBenefits(offering),
    riskCards: getOfferingSpecificRisks(offering),
    platformCards: getOfferingSpecificPlatforms(offering),
    solutionCards: getOfferingSpecificSolutions(offering),
    caseStudies: getOfferingSpecificCaseStudies(offering),
    diagnostics: getOfferingSpecificDiagnostics(offering),
    industryTabs: getOfferingSpecificIndustryTabs(offering),
  };
}
