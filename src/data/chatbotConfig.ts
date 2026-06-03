export interface ChatbotPageContext {
  id: string;
  pathPattern: string;
  type: "industry" | "offering" | "risk" | "platform" | "solution" | "outcome" | "about" | "home" | "contact";
  entityName: string;
  intro: string;
  quickReplies: string[];
  diagnosticLabel: string;
  diagnosticPath?: string;
  primaryColor: string;
}

export interface ChatbotIntent {
  id: string;
  label: string;
  category: "cyber" | "insurance" | "compliance" | "governance" | "supply-chain" | "climate" | "financial" | "liability" | "property" | "cargo" | "digital" | "strategy";
  keywords: string[];
  priority: number;
  relatedOfferings?: string[];
  relatedPlatforms?: string[];
  relatedRisks?: string[];
  quickReplies?: string[];
}

export interface LeadStage {
  id: string;
  field: string;
  label: string;
  type: "name" | "email" | "phone" | "company" | "industry" | "country" | "revenue" | "risk" | "timeline";
  options?: string[];
  validation?: (value: string) => boolean;
  placeholder?: string;
}

export interface LeadScore {
  category: string;
  score: number;
  criteria: string;
}

export const LEAD_STAGES: LeadStage[] = [
  { id: "name", field: "name", label: "Full Name", type: "name", placeholder: "Enter your full name" },
  { id: "email", field: "businessEmail", label: "Business Email", type: "email", placeholder: "name@company.com" },
  { id: "phone", field: "phone", label: "Phone Number", type: "phone", placeholder: "+1 (555) 000-0000" },
  { id: "company", field: "company", label: "Company / Organization", type: "company", placeholder: "Enter company name" },
  { id: "industry", field: "industry", label: "Industry Vertical", type: "industry", options: [
    "Technology & Digital", "Financial Services", "Healthcare & Life Sciences",
    "Manufacturing & Industrial", "Energy & Utilities", "Infrastructure & Real Estate",
    "Transportation & Logistics", "Retail & Hospitality", "Agriculture & Environment",
    "Government & Public Sector", "Education & Non-Profit", "Emerging & Niche Industries"
  ]},
  { id: "country", field: "country", label: "Primary Operating Country", type: "country", placeholder: "e.g., India, USA, UK" },
  { id: "revenue", field: "annualRevenue", label: "Annual Revenue Range", type: "revenue", options: [
    "Under $10M", "$10M – $50M", "$50M – $250M", "$250M – $1B", "$1B – $5B", "$5B+"
  ]},
  { id: "risk", field: "primaryRisk", label: "Primary Risk Concern", type: "risk", placeholder: "Describe your top risk concern" },
  { id: "timeline", field: "timeline", label: "Implementation Timeline", type: "timeline", options: [
    "Immediate (within 30 days)", "Short-term (1-3 months)", "Medium-term (3-6 months)", "Long-term (6+ months)", "Planning phase"
  ]},
];

export const LEAD_SCORING_RULES: LeadScore[] = [
  { category: "High Priority", score: 90, criteria: "Revenue $1B+, Immediate timeline, Board-level risk concern" },
  { category: "High Priority", score: 85, criteria: "Revenue $250M–$1B, Short-term timeline, Named risk category" },
  { category: "High Priority", score: 80, criteria: "Financial Services or Healthcare, Any timeline, Consultation booked" },
  { category: "Medium Priority", score: 65, criteria: "Revenue $50M–$250M, Medium-term timeline, Industry identified" },
  { category: "Medium Priority", score: 60, criteria: "Revenue $10M–$50M, Short-term timeline, Specific risk described" },
  { category: "Medium Priority", score: 55, criteria: "Government or Infrastructure, Any timeline, Named risk" },
  { category: "Low Priority", score: 35, criteria: "Revenue under $10M, Long-term or planning phase, General inquiry" },
  { category: "Low Priority", score: 30, criteria: "Incomplete capture, No revenue info, Vague interest" },
];

export const PAGE_CONTEXTS: ChatbotPageContext[] = [
  { id: "home", pathPattern: "/", type: "home", entityName: "homepage",
    intro: "Welcome to TRUSTFLOW — Enterprise Risk Intelligence.\n\nI help organizations quantify, transfer, and monitor risk across 200+ categories and 150+ markets.\n\nHow may I assist you today?",
    quickReplies: ["Risk Diagnostic", "Explore Offerings", "Cyber Assessment", "Industry Solutions", "Book Consultation"],
    diagnosticLabel: "Full Enterprise Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#0052CC" },

  { id: "industry-technology", pathPattern: "/industries/technology-digital", type: "industry", entityName: "Technology & Digital",
    intro: "Welcome to Technology & Digital Risk Practice.\n\nTechnology enterprises face AI liability, cyber exposure, deepfake fraud, and cloud infrastructure risk at scale.\n\nWhich risk area would you like to assess?",
    quickReplies: ["Cyber Risk", "AI Liability", "Deepfake Fraud", "Cloud Outage", "Tech E&O"],
    diagnosticLabel: "Technology Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#6366F1" },

  { id: "industry-financial", pathPattern: "/industries/financial-services", type: "industry", entityName: "Financial Services",
    intro: "Welcome to Financial Services Risk Practice.\n\nFinancial institutions navigate regulatory defense, D&O exposure, sanctions compliance, and deepfake fraud targeting transactions.\n\nWhat would you like to evaluate?",
    quickReplies: ["AML Compliance", "Fraud Monitoring", "Regulatory Compliance", "Cyber Resilience", "D&O Protection"],
    diagnosticLabel: "Financial Services Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#0052CC" },

  { id: "industry-healthcare", pathPattern: "/industries/healthcare-life-sciences", type: "industry", entityName: "Healthcare & Life Sciences",
    intro: "Healthcare organizations face unique operational, cyber, and compliance risks.\n\nWhat would you like to assess today?",
    quickReplies: ["HIPAA Compliance", "Medical Malpractice", "Vendor Risk", "Data Security", "Clinical Trials"],
    diagnosticLabel: "Healthcare Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#DC2626" },

  { id: "industry-manufacturing", pathPattern: "/industries/manufacturing-industrial", type: "industry", entityName: "Manufacturing & Industrial",
    intro: "Manufacturing and industrial operations face property, BI, supply chain, and equipment risks.\n\nWhich area concerns you most?",
    quickReplies: ["Property & BI", "Supply Chain", "Equipment Breakdown", "Pollution Liability", "Product Recall"],
    diagnosticLabel: "Manufacturing Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#B45309" },

  { id: "industry-energy", pathPattern: "/industries/energy-utilities", type: "industry", entityName: "Energy & Utilities",
    intro: "Energy and utility operations face climate physical risk, pollution liability, and political risk across markets.\n\nWhat would you like to evaluate?",
    quickReplies: ["Climate Risk", "Pollution Liability", "Political Risk", "Production Guarantee", "CAR Coverage"],
    diagnosticLabel: "Energy Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#059669" },

  { id: "industry-infrastructure", pathPattern: "/industries/infrastructure-real-estate", type: "industry", entityName: "Infrastructure & Real Estate",
    intro: "Infrastructure and real estate face natural catastrophe, delay in start-up, and contractor default risks.\n\nWhat area should we assess?",
    quickReplies: ["Natural Catastrophe", "Delay in Start-Up", "Contractor Default", "Surety Bonds", "Climate Risk"],
    diagnosticLabel: "Infrastructure Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#0D9488" },

  { id: "industry-transportation", pathPattern: "/industries/transportation-logistics", type: "industry", entityName: "Transportation & Logistics",
    intro: "Transportation and logistics face marine cargo, aviation liability, supply chain, and cyber risks.\n\nWhich concerns you most?",
    quickReplies: ["Marine Cargo", "Aviation Liability", "Supply Chain", "Cyber Security", "Warehouse Risk"],
    diagnosticLabel: "Transportation Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#7C3AED" },

  { id: "industry-retail", pathPattern: "/industries/retail-hospitality", type: "industry", entityName: "Retail & Hospitality",
    intro: "Retail and hospitality face data breach, ransomware, EPLI, and product liability risks.\n\nWhat should we assess?",
    quickReplies: ["Cyber Security", "Product Liability", "EPLI", "Business Interruption", "Customer Data"],
    diagnosticLabel: "Retail Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#EC4899" },

  { id: "industry-agriculture", pathPattern: "/industries/agriculture-environment", type: "industry", entityName: "Agriculture & Environment",
    intro: "Agriculture and environment face climate physical risk, parametric exposure, and pollution liability.\n\nWhat risk concern?",
    quickReplies: ["Climate Risk", "Parametric Coverage", "Pollution Liability", "Cold Chain", "Crop Failure"],
    diagnosticLabel: "Agriculture Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#059669" },

  { id: "industry-government", pathPattern: "/industries/government-public-sector", type: "industry", entityName: "Government & Public Sector",
    intro: "Government entities face board liability, cyber security, and political risk exposures.\n\nWhat would you like to assess?",
    quickReplies: ["D&O Liability", "Cyber Security", "Political Risk", "Fiduciary Risk", "Sanctions Compliance"],
    diagnosticLabel: "Government Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#1E40AF" },

  { id: "industry-education", pathPattern: "/industries/education-nonprofit", type: "industry", entityName: "Education & Non-Profit",
    intro: "Education and non-profit organizations face student data risk, D&O, and EPLI exposures.\n\nWhat area?",
    quickReplies: ["Student Data Breach", "D&O Protection", "EPLI", "Property Insurance", "Donor Trust Risk"],
    diagnosticLabel: "Education Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#0F766E" },

  { id: "industry-emerging", pathPattern: "/industries/emerging-industries", type: "industry", entityName: "Emerging & Niche Industries",
    intro: "Emerging industries including space, drone, AI, and climate tech face frontier risk profiles.\n\nWhich area concerns you?",
    quickReplies: ["Space Insurance", "Drone Liability", "AI Liability", "Crypto Risk", "Autonomous Vehicle"],
    diagnosticLabel: "Emerging Industry Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#6D28D9" },

  { id: "offering-property", pathPattern: "/offerings/property-sfsp", type: "offering", entityName: "Property All-Risks Insurance",
    intro: "Interested in Property All-Risks Insurance?\n\nI can help you evaluate:\n• Replacement cost adequacy\n• Business Interruption alignment\n• Parametric triggers for catastrophe\n• Multi-country program structuring",
    quickReplies: ["Coverage Assessment", "Replacement Cost", "BI Duration", "Parametric Option", "Multi-Country"],
    diagnosticLabel: "Property Insurance Readiness Assessment", diagnosticPath: "/contact", primaryColor: "#0052CC" },

  { id: "offering-bi", pathPattern: "/offerings/business-interruption", type: "offering", entityName: "Business Interruption Insurance",
    intro: "Business Interruption converts property protection into earnings protection.\n\nWould you like to assess:\n• Revenue exposure modeling\n• Indemnity period adequacy\n• Contingent BI dependencies",
    quickReplies: ["Revenue Modeling", "Indemnity Period", "Contingent BI", "Extra Expense", "Ramp-Up Coverage"],
    diagnosticLabel: "BI Coverage Assessment", diagnosticPath: "/contact", primaryColor: "#0052CC" },

  { id: "offering-cyber", pathPattern: "/offerings/cyber", type: "offering", entityName: "Cyber Insurance",
    intro: "Interested in Cyber Insurance?\n\nI can guide you through:\n• Ransomware exposure quantification\n• Data breach response readiness\n• Regulatory defense coverage\n• Vendor cyber risk assessment",
    quickReplies: ["Ransomware Exposure", "Breach Response", "Regulatory Defense", "Vendor Cyber Risk", "Premium Estimate"],
    diagnosticLabel: "Cyber Risk Maturity Assessment", diagnosticPath: "/contact", primaryColor: "#DC2626" },

  { id: "offering-do", pathPattern: "/offerings/do-liability", type: "offering", entityName: "Directors & Officers Liability",
    intro: "D&O insurance enables confident governance with personal asset protection.\n\nShall we evaluate:\n• Side A DIC tower adequacy\n• Securities litigation coverage\n• Regulatory defense funding\n• Multi-jurisdictional placement",
    quickReplies: ["Side A DIC", "Securities Coverage", "Regulatory Defense", "IPO Readiness", "Global Placement"],
    diagnosticLabel: "D&O Coverage Diagnostic", diagnosticPath: "/contact", primaryColor: "#1E40AF" },

  { id: "risk-cyber", pathPattern: "/risks/cyber", type: "risk", entityName: "Cyber Risks",
    intro: "Cyber risks span ransomware, data breach, deepfake fraud, and supply chain attacks.\n\nWhich scenario should we assess?",
    quickReplies: ["Ransomware Exposure", "Data Breach Cost", "Deepfake Fraud", "Supply Chain Cyber", "Cyber Insurance Gap"],
    diagnosticLabel: "Cyber Risk Assessment", diagnosticPath: "/contact", primaryColor: "#DC2626" },

  { id: "risk-supply-chain", pathPattern: "/risks/supply-chain", type: "risk", entityName: "Supply Chain Risks",
    intro: "Supply Chain disruptions can impact revenue and resilience.\n\nWould you like to evaluate:\n• Supplier Risk\n• Logistics Risk\n• Country Risk\n• Vendor Concentration",
    quickReplies: ["Supplier Risk", "Logistics Risk", "Country Risk", "Vendor Concentration", "CBI Activation"],
    diagnosticLabel: "Supply Chain Risk Assessment", diagnosticPath: "/contact", primaryColor: "#F59E0B" },

  { id: "platform-diagnostic", pathPattern: "/platform/risk-diagnostic-engine", type: "platform", entityName: "Risk Diagnostic Engine",
    intro: "Interested in our Risk Diagnostic Platform?\n\nWould you like a readiness assessment? I can guide you through:\n• 20-domain risk evaluation\n• Industry benchmarking\n• Coverage gap analysis\n• Board-ready reporting",
    quickReplies: ["Readiness Assessment", "20-Domain Evaluation", "Industry Benchmarking", "Coverage Gap Analysis", "Live Demo"],
    diagnosticLabel: "Platform Readiness Assessment", diagnosticPath: "/contact", primaryColor: "#0052CC" },

  { id: "platform-cyber-intel", pathPattern: "/platform/cyber-intelligence", type: "platform", entityName: "Cyber Threat Intelligence",
    intro: "Our Cyber Threat Intelligence Platform delivers 24/7 monitoring and predictive risk modeling.\n\nWould you like:\n• Threat landscape briefing\n• Dark web monitoring setup\n• Vulnerability prioritization review",
    quickReplies: ["Threat Briefing", "Dark Web Monitoring", "Vulnerability Assessment", "Integration Demo", "Platform Trial"],
    diagnosticLabel: "Cyber Intelligence Onboarding Assessment", diagnosticPath: "/contact", primaryColor: "#DC2626" },

  { id: "solution-profile", pathPattern: "/solutions/global-program-architecture", type: "solution", entityName: "Global Program Architecture",
    intro: "Global Program Architecture covers controlled master policy, DIC/DIL, fronting, and captive strategies across 150+ markets.\n\nWhich component interests you?",
    quickReplies: ["Program Design", "Captive Strategy", "Fronting Network", "DIC/DIL Structuring", "Multi-Country Compliance"],
    diagnosticLabel: "Program Architecture Diagnostic", diagnosticPath: "/contact", primaryColor: "#0052CC" },

  { id: "solution-claims", pathPattern: "/solutions/claims-advocacy", type: "solution", entityName: "Claims Advocacy",
    intro: "Claims Advocacy provides 24/7 response, adjuster management, and recovery maximisation.\n\nWould you like:\n• Major loss response review\n• Subrogation strategy\n• Coverage dispute assessment",
    quickReplies: ["Major Loss Response", "Coverage Dispute", "Subrogation", "Recovery Optimisation", " expedited Claims"],
    diagnosticLabel: "Claims Advocacy Assessment", diagnosticPath: "/contact", primaryColor: "#0F766E" },

  { id: "outcome-it-ransomware", pathPattern: "/outcomes/it-ransomware", type: "outcome", entityName: "IT Firm Ransomware Attack",
    intro: "Ransomware response requires forensics, ransom negotiation, DPDP notification, and business continuity.\n\nShall we assess your ransomware readiness?",
    quickReplies: ["Forensics & Response", "Ransom Negotiation", "DPDP Notification", "Business Continuity", "Cyber Insurance Activation"],
    diagnosticLabel: "Ransomware Incident Readiness Assessment", diagnosticPath: "/contact", primaryColor: "#DC2626" },

  { id: "about-our-story", pathPattern: "/about-us/our-story", type: "about", entityName: "Our Story & Mission",
    intro: "TRUSTFLOW is the risk architecture arm for 150+ markets.\n\nI can help you understand how we approach:\n• Balance sheet protection\n• Global compliance structuring\n• Industry-specific risk architecture\n• AI-driven risk intelligence",
    quickReplies: ["Risk Philosophy", "Global Reach", "Insurance Approach", "Platform Overview", "Partnership Inquiry"],
    diagnosticLabel: "Enterprise Compatibility Assessment", diagnosticPath: "/contact", primaryColor: "#0052CC" },

  { id: "contact", pathPattern: "/contact", type: "contact", entityName: "Contact",
    intro: "You're on our Contact page — ready to speak with a senior risk architect?\n\nI can help you prepare before your consultation:\n• Risk prioritization\n• Coverage gap analysis\n• Diagnostic scheduling",
    quickReplies: ["Schedule Consultation", "Risk Diagnostic", "Coverage Review", "Platform Demo", "TCOR Analysis"],
    diagnosticLabel: "Consultation Pre-Assessment", diagnosticPath: "/contact", primaryColor: "#0052CC" },

  { id: "risk-intelligence-center", pathPattern: "/risks/risk-intelligence-center", type: "risk", entityName: "Risk Intelligence Center",
    intro: "Welcome to the Risk Intelligence Center.\n\nMonitor cyber threats, regulatory risks, climate exposures, and emerging enterprise risks in real-time.\n\nWhat would you like to analyze today?",
    quickReplies: ["Top Enterprise Risks", "Cyber Threat Intelligence", "Regulatory Monitoring", "Climate Risk Assessment", "Supply Chain Threats"],
    diagnosticLabel: "Risk Intelligence Assessment", diagnosticPath: "/contact", primaryColor: "#0052CC" },

  { id: "risk-diagnostic", pathPattern: "/risks/risk-diagnostic", type: "risk", entityName: "Risk Diagnostic",
    intro: "Welcome to the Risk Diagnostic.\n\nConduct board-level risk assessment with exposure analysis and coverage gap identification.\n\nWhich domain would you like to assess?",
    quickReplies: ["20-Domain Evaluation", "Coverage Gap Analysis", "Risk Scoring", "Benchmark Comparison", "Board Reporting"],
    diagnosticLabel: "Enterprise Risk Diagnostic", diagnosticPath: "/contact", primaryColor: "#0052CC" },
];

export const CHATBOT_INTENTS: ChatbotIntent[] = [
  { id: "cyber-risk", label: "Cyber Risk", category: "cyber", priority: 100, keywords: ["cyber", "ransomware", "data breach", "security", "hack", "malware", "phishing", "breach", "dark web", "vulnerability", "threat", "incident response", "forensics"], relatedOfferings: ["cyber-first-party", "cyber-third-party", "cyber-ransomware", "cyber-data-breach-response", "cyber-threat-intelligence", "cyber-vendor-risk"], relatedPlatforms: ["cyber-intelligence", "risk-diagnostic-engine"], relatedRisks: ["ransomware", "data-breach", "bec", "supply-chain-cyber", "deepfake-fraud"], quickReplies: ["Ransomware Exposure", "Breach Response", "Vendor Cyber Risk", "Premium Estimate", "Regulatory Defense"] },
  { id: "insurance-solutions", label: "Insurance Solutions", category: "insurance", priority: 90, keywords: ["insurance", "coverage", "policy", "premium", "claim", "underwriting", "placement", "renewal", "program", "placement", "retention", "limit", "deductible", "tower"], relatedOfferings: ["property-sfsp", "business-interruption", "d-o", "epli", "professional-indemnity-2", "product-liability-2", "trade-credit-2", "political-risk-2"], quickReplies: ["Coverage Assessment", "Premium Estimate", "Program Design", "Renewal Review", "Gap Analysis"] },
  { id: "compliance-governance", label: "Compliance & Governance", category: "compliance", priority: 85, keywords: ["regulatory", "compliance", "audit", "governance", "GDPR", "DPDP", "HIPAA", "SEBI", "IRDAI", "CERT-In", "FCA", "SOX", "sanctions", "AML", "KYC"], relatedOfferings: ["d-o", "epli"], relatedPlatforms: ["regulatory-intelligence", "risk-diagnostic-engine"], relatedRisks: ["regulatory-investigation", "regulatory-compliance-failure"], quickReplies: ["Regulatory Audit", "AML Compliance", "DPDP Readiness", "Sanctions Screening", "Governance Review"] },
  { id: "governance-risk", label: "Governance & D&O", category: "governance", priority: 88, keywords: ["D&O", "directors", "officers", "governance", "board", "securities", "fiduciary", "shareholder", "IPO", "M&A", "litigation"], relatedOfferings: ["d-o"], relatedRisks: ["d-o-personal-liability", "regulatory-investigation", "class-action-lawsuit"], quickReplies: ["Side A DIC", "Securities Coverage", "IPO Readiness", "Regulatory Defense", "Global Placement"] },
  { id: "supply-chain-risk", label: "Supply Chain Risk", category: "supply-chain", priority: 82, keywords: ["supply chain", "supplier", "vendor", "logistics", "procurement", "tier-1", "tier-2", "cargo", "maritime", "warehouse", "inventory"], relatedOfferings: ["contingent-bi", "marine-cargo", "business-interruption"], relatedPlatforms: ["supply-chain-monitor", "risk-diagnostic-engine"], relatedRisks: ["single-source-supplier", "geographic-concentration", "counterparty-default", "supply-chain-cyber"], quickReplies: ["Supplier Mapping", "CBI Coverage", "Logistics Risk", "Vendor Assessment", "Geographic Diversification"] },
  { id: "climate-risk", label: "Climate & ESG Risk", category: "climate", priority: 78, keywords: ["climate", "ESG", "carbon", "emission", "sustainability", "TCFD", "green", "renewable", "physical risk", "transition", "stranded assets", "pollution"], relatedOfferings: ["parametric", "property-sfsp", "environmental"], relatedPlatforms: ["climate-scenario", "supply-chain-monitor"], relatedRisks: ["climate-physical", "climate-transition", "pollution", "environmental-contamination"], quickReplies: ["Climate Assessment", "TCFD Compliance", "Parametric Coverage", "Carbon Risk", "Physical Risk"] },
  { id: "financial-risk", label: "Financial & Transaction Risk", category: "financial", priority: 80, keywords: ["credit", "trade", "receivable", "currency", "forex", "political", "expropriation", "insolvency", "default", "M&A", "acquisition", "due diligence", "warranty", "W&I"], relatedOfferings: ["trade-credit-2", "political-risk-2", "professional-indemnity-2"], relatedRisks: ["counterparty-default", "currency-fluctuation", "m-a-transaction-risk"], quickReplies: ["Trade Credit", "Political Risk", "M&A Due Diligence", "W&I Insurance", "Currency Hedging"] },
  { id: "liability-risk", label: "Liability & Professional Risk", category: "liability", priority: 75, keywords: ["liability", "malpractice", "negligence", "errors", "omissions", "E&O", "PI", "product liability", "recall", "employment", "harassment", "discrimination", "EPLI", "workplace"], relatedOfferings: ["professional-indemnity-2", "tech-e-o", "product-liability-2", "epli", "product-recall"], relatedRisks: ["employment-practices", "ip-infringement", "product-recall", "class-action-lawsuit"], quickReplies: ["Professional Liability", "Product Recall", " Employment Practices", "Malpractice", "Class Action"] },
  { id: "property-risk", label: "Property & Physical Risk", category: "property", priority: 77, keywords: ["property", "fire", "flood", "earthquake", "natural disaster", "catastrophe", "BI", "business interruption", "equipment", "breakdown", "factory", "facility"], relatedOfferings: ["property-sfsp", "business-interruption", "equipment-breakdown"], relatedRisks: ["natural-catastrophe", "workforce-disruption"], quickReplies: ["Property Coverage", "BI Duration", "Equipment Breakdown", "Catastrophe Modeling", "Parametric Option"] },
  { id: "cargo-transport", label: "Cargo & Transportation Risk", category: "cargo", priority: 72, keywords: ["cargo", "marine", "shipping", "freight", "aviation", "fleet", "warehouse", "logistics", "transport", "port", "container"], relatedOfferings: ["marine-cargo", "contingent-bi"], relatedRisks: ["cargo-theft", "container-ship-casualty", "aviation-fatal-accident"], quickReplies: ["Marine Cargo", "Fleet Coverage", "Warehouse Risk", "Aviation Liability", "Transit Security"] },
  { id: "digital-tech-risk", label: "Digital & Technology Risk", category: "digital", priority: 79, keywords: ["AI", "artificial intelligence", "algorithm", "cloud", "SaaS", "software", "tech", "digital", "automation", "data", "platform", "API", "deepfake", "quantum"], relatedOfferings: ["tech-e-o", "cyber-first-party"], relatedRisks: ["ai-governance-failure", "technology-obsolescence", "cloud-outage", "quantum-encryption-breach"], quickReplies: ["AI Liability", "Cloud Risk", "Tech E&O", "Algorithm Bias", "Quantum Readiness"] },
  { id: "strategy-advisory", label: "Strategy & Advisory", category: "strategy", priority: 70, keywords: ["consulting", "advisory", "strategy", "TCOR", "benchmarking", "risk architecture", "diagnostic", "assessment", "readiness", "maturity", "transformation", "engagement"], relatedPlatforms: ["risk-diagnostic-engine", "risk-dna-mapper", "ma-due-diligence", "contract-intelligence"], quickReplies: ["Risk Diagnostic", "TCOR Analysis", "Industry Benchmarking", "Readiness Assessment", "Platform Demo"] },
];

export const AUTO_OPEN_RULES = {
  DWELL_TIME_MS: 15000,
  PAGE_VISIT_THRESHOLD: 3,
  RETURN_VISIT: true,
  INTERACTION_TRIGGER: "scroll-depth-50",
};

export const DIAGNOSTIC_TYPES: Record<string, { label: string; description: string; cta: string }> = {
  "industry": { label: "Industry Diagnostic", description: "Comprehensive risk assessment tailored to your industry vertical", cta: "Request Industry Diagnostic" },
  "offering": { label: "Offering Diagnostic", description: "Coverage optimization and readiness assessment for this offering", cta: "Request Coverage Assessment" },
  "risk": { label: "Risk Assessment", description: "Exposure quantification and risk transfer strategy for this risk category", cta: "Request Risk Assessment" },
  "platform": { label: "Platform Readiness Assessment", description: "Evaluate your organization's readiness for this platform", cta: "Request Platform Assessment" },
  "solution": { label: "Solution Diagnostic", description: "Strategic advisory diagnostic for this solution area", cta: "Request Advisory Session" },
  "outcome": { label: "Outcome Assessment", description: "Scenario-specific risk transfer assessment", cta: "Assess This Outcome" },
  "about": { label: "Compatibility Assessment", description: "Evaluate how TRUSTFLOW fits your enterprise requirements", cta: "Schedule Consultation" },
  "home": { label: "Full Enterprise Diagnostic", description: "20-domain risk assessment across all risk categories", cta: "Start Full Diagnostic" },
  "contact": { label: "Pre-Consultation Diagnostic", description: "Preparation assessment before your risk architect consultation", cta: "Begin Pre-Assessment" },
};

export const BEHAVIOR_EVENTS = {
  CHAT_OPEN: "chat_open",
  CHAT_CLOSE: "chat_close",
  MESSAGE_SENT: "message_sent",
  MESSAGE_RECEIVED: "message_received",
  QUICK_REPLY_CLICK: "quick_reply_click",
  DIAGNOSTIC_REQUEST: "diagnostic_request",
  LEAD_CAPTURE_START: "lead_capture_start",
  LEAD_CAPTURE_COMPLETE: "lead_capture_complete",
  LEAD_CAPTURE_ABANDON: "lead_capture_abandon",
  PAGE_VIEW: "page_view",
  CONVERSATION_COMPLETE: "conversation_complete",
  CONSULTATION_BOOK: "consultation_book",
} as const;

export type BehaviorEventType = typeof BEHAVIOR_EVENTS[keyof typeof BEHAVIOR_EVENTS];

export interface BehaviorEvent {
  type: BehaviorEventType;
  timestamp: number;
  data?: Record<string, unknown>;
}

export interface ChatbotMessage {
  id: string;
  role: "bot" | "user";
  text: string;
  type: "text" | "quick-replies" | "lead-form" | "diagnostic";
  timestamp: number;
  quickReplies?: string[];
  leadStage?: LeadStage;
  diagnosticType?: string;
  diagnosticLabel?: string;
}

export interface LeadCaptureData {
  name?: string;
  businessEmail?: string;
  phone?: string;
  company?: string;
  industry?: string;
  country?: string;
  annualRevenue?: string;
  primaryRisk?: string;
  timeline?: string;
  score?: number;
  completed?: boolean;
}

export interface ChatbotSession {
  id: string;
  currentPageContext: ChatbotPageContext | null;
  matchedIntent: ChatbotIntent | null;
  conversationHistory: { role: "bot" | "user"; text: string; timestamp: number }[];
  leadData: LeadCaptureData;
  leadStageIndex: number;
  behaviorEvents: BehaviorEvent[];
  sessionStart: number;
  lastActivity: number;
  isLeadCaptureActive: boolean;
  isDiagnosticActive: boolean;
  messages: { id: string; role: "bot" | "user"; text: string; type: "text" | "quick-replies" | "lead-form" | "diagnostic"; timestamp: number }[];
}

export function createInitialSession(): ChatbotSession {
  return {
    id: crypto.randomUUID(),
    currentPageContext: null,
    matchedIntent: null,
    conversationHistory: [],
    leadData: {},
    leadStageIndex: 0,
    behaviorEvents: [],
    sessionStart: Date.now(),
    lastActivity: Date.now(),
    isLeadCaptureActive: false,
    isDiagnosticActive: false,
    messages: [],
  };
}
