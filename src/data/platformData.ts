import React from "react";
import {
  Target, Shield, Database, FileText, Briefcase, Truck, Bell,
  Users, Zap, Cpu, TrendingUp, Activity, BookOpen, Globe, Search,
  BarChart3, AlertTriangle, CheckCircle2, Lock, Layers, RefreshCw,
  CloudLightning, ShieldAlert, Building2, Scale, Landmark, Wifi
} from "lucide-react";

export interface PlatformKPI {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface PlatformCapabilityCard {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export interface PlatformIndustryTab {
  label: string;
  challenges: string[];
  riskExposure: string[];
  relatedPlatforms: string[];
}

export interface PlatformData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  heroImage: string;
  description: string;
  features: string[];
  capabilities: string[];
  businessBenefits: string[];
  kpiMetrics: PlatformKPI[];
  capabilityCards: PlatformCapabilityCard[];
  industryTabs: PlatformIndustryTab[];
  relatedModules: string[];
  relatedRiskSlugs: string[];
  relatedSolutionSlugs: string[];
  useCases: string[];
}

export const platformData: Record<string, PlatformData> = {
  "risk-diagnostic-engine": {
    slug: "risk-diagnostic-engine",
    title: "TRUSTFLOW Risk Diagnostic Engine",
    subtitle: "AI-powered enterprise risk assessment across 20 risk domains",
    category: "Risk Discovery & Diagnostic",
    icon: Target,
    color: "#0052CC",
    heroImage: "https://images.unsplash.com/photo-1518103241174-ebb0c2b2e1e5?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered enterprise risk assessment platform that evaluates an organization's complete risk exposure across 20 risk domains, 200+ specific risks, and 150+ jurisdictions. The engine ingests structured questionnaire responses, unstructured company data, public filings, news sentiment, and industry benchmarks to generate a comprehensive risk score in under 60 seconds.",
    features: [
      "20-question adaptive assessment across 5 risk dimensions",
      "AI-generated risk score (0-100) with severity classification",
      "Industry-specific risk weighting with peer benchmarking",
      "Geographic risk overlay for 150+ jurisdictions",
      "Emerging risk detection module for new exposures",
      "Gap identification with TRUSTFLOW offering recommendations",
    ],
    capabilities: [
      "Automated cross-industry risk scanning",
      "Multi-jurisdictional risk assessment",
      "Real-time risk score generation",
      "Insurance coverage gap analysis",
      "Board-ready PDF reporting",
      "API integration with partner systems",
    ],
    businessBenefits: [
      "Identify critical coverage gaps before IPO or acquisition",
      "Reduce underwriting cycle from 30 days to 30 minutes",
      "Benchmark against 41 industry profiles",
      "Continuous learning improves accuracy with each assessment",
    ],
    kpiMetrics: [
      { value: "60s", label: "Risk Score Generated", icon: Zap },
      { value: "200+", label: "Risk Indicators", icon: Target },
      { value: "150+", label: "Jurisdictions", icon: Globe },
      { value: "41", label: "Industry Profiles", icon: Building2 },
    ],
    capabilityCards: [
      { title: "Adaptive Assessment", description: "20-question AI-driven questionnaire that adapts based on answers.", bullets: ["5 risk dimensions", "Peer benchmarking", "AI severity scoring"], icon: Target },
      { title: "Coverage Gap Analysis", description: "Pinpoints uninsured exposures and recommends tailored programs.", bullets: ["Gap identification", "TRUSTFLOW mapping", "Priority ranking"], icon: Shield },
      { title: "Multi-Jurisdictional Overlay", description: "Geographic risk scoring across 150+ countries.", bullets: ["Country-level risk", "Regulatory flags", "Sanction screening"], icon: Globe },
      { title: "Board-Ready Reporting", description: "Automated PDF risk reports ready for audit committees.", bullets: ["Executive summaries", "Risk heat maps", "Trend analysis"], icon: BarChart3 },
    ],
    industryTabs: [
      { label: "Technology", challenges: ["AI liability", "Cloud concentration", "Rapid product change"], riskExposure: ["Ransomware", "Outage liability", "Regulatory fines"], relatedPlatforms: ["Cyber Intelligence", "Contract Intelligence", "Regulatory Intelligence"] },
      { label: "Financial Services", challenges: ["Capital adequacy", "Systemic risk", "Regulatory complexity"], riskExposure: ["Data breach", "Advice liability", "AML penalties"], relatedPlatforms: ["Counterparty Assessment", "M&A Due Diligence", "Regulatory Intelligence"] },
      { label: "Manufacturing", challenges: ["Supply chain disruption", "Product recall", "Equipment failure"], riskExposure: ["Property damage", "BI loss", "Product liability"], relatedPlatforms: ["Supply Chain Monitor", "Risk DNA Mapper", "Climate Scenario"] },
      { label: "Healthcare", challenges: ["PHI protection", "Clinical trial liability", "Device recall"], riskExposure: ["Malpractice", "Breach notification fines", "FDA investigation"], relatedPlatforms: ["Regulatory Intelligence", "Contract Intelligence", "Cyber Due Diligence"] },
    ],
    relatedModules: ["risk-dna-mapper", "risk-feed", "risk-intelligence-aggregator"],
    relatedRiskSlugs: ["ransomware", "regulatory-compliance-failure", "single-source-supplier-failure"],
    relatedSolutionSlugs: ["professional-indemnity-2", "cyber-first-party", "business-interruption"],
    useCases: [
      "Series C fintech IPO readiness risk assessment",
      "PE firm portfolio-wide risk evaluation",
      "Insurance carrier quote flow integration",
    ],
  },

  "risk-dna-mapper": {
    slug: "risk-dna-mapper",
    title: "TRUSTFLOW Enterprise Risk DNA Mapper",
    subtitle: "Deep-analysis platform constructing complete risk profiles",
    category: "Data & Analytics",
    icon: Database,
    color: "#2563EB",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "A deep-analysis platform that constructs a complete 'Risk DNA' profile for any enterprise by ingesting and analyzing hundreds of data sources including SEC filings, annual reports, patent databases, litigation databases, regulatory filings, news sentiment, social media signals, supply chain data, geographic footprint data, employee reviews, and cybersecurity ratings.",
    features: [
      "Automated data ingestion from 200+ public and proprietary sources",
      "Knowledge graph construction linking entity to risks",
      "Entity resolution across multiple data sources",
      "Risk signal detection from unstructured data",
      "Competitive risk benchmarking",
      "Change detection alerts for significant changes",
    ],
    capabilities: [
      "Real-time knowledge graph visualization",
      "Historical risk profile comparison",
      "Sector-specific risk models for 41 industries",
      "Board-ready risk profile presentation",
      "API integration with diagnostic engine",
    ],
    businessBenefits: [
      "Complete risk picture before first client meeting",
      "Accurate underwriting with hidden exposure identification",
      "Board visibility into evolving risk landscape",
    ],
    kpiMetrics: [
      { value: "200+", label: "Data Sources Ingested", icon: Database },
      { value: "41", label: "Industry Risk Models", icon: Building2 },
      { value: "24/7", label: "Change Detection", icon: Activity },
      { value: "100%", label: "Entity Coverage", icon: Target },
    ],
    capabilityCards: [
      { title: "Knowledge Graph Engine", description: "Constructs entity-to-risk relationship graphs in real time.", bullets: ["Entity resolution", "Relationship mapping", "Signal clustering"], icon: Database },
      { title: "Unstructured Data Mining", description: "Extracts risk signals from news, social, and filings.", bullets: ["NLP extraction", "Sentiment analysis", "Filing parsing"], icon: Search },
      { title: "Competitive Benchmarking", description: "Compares risk profiles against sector peers.", bullets: ["Peer ranking", "Gap identification", "Score trending"], icon: BarChart3 },
      { title: "Change Alerts", description: "Detects significant shifts in risk profile automatically.", bullets: ["Real-time triggers", "Executive alerts", "Audit trail"], icon: Bell },
    ],
    industryTabs: [
      { label: "Private Equity", challenges: ["Portfolio risk aggregation", "Deal sourcing blind spots", "Exit risk"], riskExposure: ["Hidden liabilities", "Management risk", "Environmental exposure"], relatedPlatforms: ["M&A Due Diligence", "Counterparty Assessment", "Contract Intelligence"] },
      { label: "Technology", challenges: ["IP risk", "Talent concentration", "Regulatory change"], riskExposure: ["Patent litigation", "Key-man dependency", "GDPR fines"], relatedPlatforms: ["Cyber Intelligence", "Regulatory Intelligence", "Risk Diagnostic Engine"] },
      { label: "Banking", challenges: ["Counterparty exposure", "Loan book risk", "Systemic linkage"], riskExposure: ["Credit default", "Contagion risk", "Regulatory capital"], relatedPlatforms: ["Counterparty Assessment", "Risk Diagnostic Engine", "Political Monitor"] },
      { label: "Infrastructure", challenges: ["Long-tenor risk", "Climate exposure", "Political risk"], riskExposure: ["Asset stranding", "Catastrophe loss", "Concession breach"], relatedPlatforms: ["Climate Scenario", "Political Monitor", "Supply Chain Monitor"] },
    ],
    relatedModules: ["risk-diagnostic-engine", "supply-chain-monitor", "political-monitor"],
    relatedRiskSlugs: ["d-o-personal-liability", "regulatory-compliance-failure", "natural-catastrophe"],
    relatedSolutionSlugs: ["ma-risk-due-diligence", "d-o", "professional-indemnity-2"],
    useCases: [
      "Prospective client risk profile preparation",
      "Underwriting risk assessment",
      "Quarterly board risk reporting",
    ],
  },

  "cyber-intelligence": {
    slug: "cyber-intelligence",
    title: "TRUSTFLOW Cyber Threat Intelligence Platform",
    subtitle: "Personalized threat intelligence with predictive modeling",
    category: "Risk Discovery & Diagnostic",
    icon: Shield,
    color: "#DC2626",
    heroImage: "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered cyber threat intelligence platform that aggregates threat data from multiple sources and correlates it with the client's specific technology stack, industry, geography, and attack surface to provide personalized, actionable threat intelligence.",
    features: [
      "Real-time threat feed aggregation from 50+ sources",
      "AI-powered threat correlation",
      "Dark web monitoring for client-specific data",
      "Predictive threat modeling",
      "Vulnerability prioritization",
      "Industry-specific threat reports",
    ],
    capabilities: [
      "Threat actor profiling",
      "Automated risk score updates",
      "Incident playbook library",
      "Board-level threat summaries",
      "Integration with cyber insurance design",
    ],
    businessBenefits: [
      "Proactive defense against targeted threats",
      "Faster incident response with playbooks",
      "Reduced cyber insurance premiums through demonstrated maturity",
    ],
    kpiMetrics: [
      { value: "50+", label: "Threat Feed Sources", icon: Wifi },
      { value: "4-Hr", label: "Alert Response Time", icon: Zap },
      { value: "99%", label: "Threat Detection Rate", icon: Shield },
      { value: "24/7", label: "Dark Web Monitoring", icon: Activity },
    ],
    capabilityCards: [
      { title: "Threat Actor Profiling", description: "Identifies and tracks adversaries targeting your sector.", bullets: ["TTPs mapping", "Campaign tracking", "Attribution scoring"], icon: ShieldAlert },
      { title: "Dark Web Monitoring", description: "Scans dark web markets for exposed credentials and data.", bullets: ["Credential leaks", "Data dumps", "Ransom negotiations"], icon: Lock },
      { title: "Predictive Threat Modeling", description: "AI forecasts attack vectors before they materialize.", bullets: ["Attack path prediction", "Vulnerability chaining", "Exploit likelihood"], icon: Activity },
      { title: "Incident Playbooks", description: "Pre-built response workflows for common attack patterns.", bullets: ["Ransomware response", "Data breach protocol", "BEC defense"], icon: RefreshCw },
    ],
    industryTabs: [
      { label: "Technology", challenges: ["Rapid attack surface growth", "SaaS dependency", "AI poisoning"], riskExposure: ["Zero-day exploits", "API vulnerabilities", "Supply chain backdoors"], relatedPlatforms: ["Cyber Due Diligence", "Risk Diagnostic Engine", "Regulatory Intelligence"] },
      { label: "Financial Services", challenges: ["FTF fraud", "SWIFT network threats", "Insider risk"], riskExposure: ["Funds transfer fraud", "Account takeover", "Data exfiltration"], relatedPlatforms: ["Cyber Due Diligence", "Counterparty Assessment", "Regulatory Intelligence"] },
      { label: "Healthcare", challenges: ["PHI aggregation", "Connected device security", "Ransomware targeting"], riskExposure: ["HIPAA breach fines", "Operational shutdown", "Patient data sale"], relatedPlatforms: ["Cyber Due Diligence", "Regulatory Intelligence", "Risk Diagnostic Engine"] },
      { label: "Manufacturing", challenges: ["OT/IT convergence", "Industrial espionage", "Ransomware on PLCs"], riskExposure: ["Production halt", "IP theft", "Safety incident"], relatedPlatforms: ["Supply Chain Monitor", "Risk Diagnostic Engine", "Cyber Due Diligence"] },
    ],
    relatedModules: ["cyber-due-diligence", "risk-intelligence-aggregator", "client-portal"],
    relatedRiskSlugs: ["ransomware", "data-breach", "business-interruption"],
    relatedSolutionSlugs: ["cyber-first-party", "business-interruption", "professional-indemnity-2"],
    useCases: [
      "Manufacturing ransomware targeting alert",
      "Financial services dark web credential discovery",
      "Pharma proactive threat briefing",
    ],
  },

  "risk-intelligence-aggregator": {
    slug: "risk-intelligence-aggregator",
    title: "TRUSTFLOW Real-Time Risk Intelligence Aggregator",
    subtitle: "Fuses multi-domain signals into unified risk intelligence",
    category: "Data & Analytics",
    icon: Activity,
    color: "#0D9488",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered aggregator platform that fuses risk intelligence from all TRUSTFLOW technology partners into a single, personalized risk intelligence feed for each client.",
    features: [
      "Multi-source data fusion across risk domains",
      "AI-powered signal correlation",
      "Personalized feed by industry and geography",
      "Compound risk detection",
      "Predictive alerting",
      "Actionable recommendations",
    ],
    capabilities: [
      "Daily, weekly, monthly executive briefings",
      "Custom alert configuration",
      "Historical analysis of materialized risks",
      "API integration with client portal",
    ],
    businessBenefits: [
      "Single pane of glass for all risk signals",
      "Early warning of converging risks",
      "Reduced noise with personalized filtering",
    ],
    kpiMetrics: [
      { value: "15+", label: "Platform Feeds Fused", icon: Layers },
      { value: "Real-Time", label: "Signal Processing", icon: Activity },
      { value: "95%", label: "Noise Reduction", icon: Target },
      { value: "24/7", label: "Compound Detection", icon: AlertTriangle },
    ],
    capabilityCards: [
      { title: "Multi-Domain Signal Fusion", description: "Aggregates cyber, geopolitical, supply chain, and financial signals.", bullets: ["Cross-domain correlation", "Signal weighting", "Deduplication"], icon: Layers },
      { title: "Personalized Risk Feed", description: "Curated alerts filtered to your industry and geography.", bullets: ["Industry filters", "Geographic focus", "Severity thresholds"], icon: Bell },
      { title: "Compound Risk Detection", description: "Identifies when multiple signals converge into a major event.", bullets: ["Convergence modeling", "Cascade prediction", "Early warning triggers"], icon: AlertTriangle },
      { title: "Executive Briefings", description: "Auto-generated daily, weekly, and monthly summaries.", bullets: ["Board-ready format", "PDF/PPT export", "Custom cadence"], icon: BarChart3 },
    ],
    industryTabs: [
      { label: "Conglomerates", challenges: ["Cross-business risk aggregation", "Interdependency risk", "Board reporting complexity"], riskExposure: ["Cascading failures", "Reputational contagion", "Capital concentration"], relatedPlatforms: ["Executive Dashboards", "Risk DNA Mapper", "Client Portal"] },
      { label: "Financial Services", challenges: ["Systemic risk signals", "Regulatory convergence", "Market event correlation"], riskExposure: ["Systemic collapse", "Regulatory pile-on", "Counterparty contagion"], relatedPlatforms: ["Counterparty Assessment", "Political Monitor", "Regulatory Intelligence"] },
      { label: "Energy", challenges: ["Geopolitical supply risk", "Climate transition signals", "Cyber-physical convergence"], riskExposure: ["Supply disruption", "Stranded assets", "Grid attack"], relatedPlatforms: ["Political Monitor", "Climate Scenario", "Cyber Intelligence"] },
      { label: "Retail", challenges: ["Consumer sentiment shifts", "Supply chain signals", "Fraud pattern changes"], riskExposure: ["Demand collapse", "Inventory disruption", "Payment fraud"], relatedPlatforms: ["Supply Chain Monitor", "Counterparty Assessment", "Cyber Intelligence"] },
    ],
    relatedModules: ["cyber-intelligence", "supply-chain-monitor", "political-monitor"],
    relatedRiskSlugs: ["single-source-supplier-failure", "natural-catastrophe", "ransomware"],
    relatedSolutionSlugs: ["business-interruption", "parametric-insurance", "cyber-first-party"],
    useCases: [
      "Geopolitical supply chain cyber convergence",
      "Daily executive risk briefing",
      "Multi-dimensional risk convergence detection",
    ],
  },

  "contract-intelligence": {
    slug: "contract-intelligence",
    title: "TRUSTFLOW AI Contract Intelligence Engine",
    subtitle: "Extracts and risk-scores contracts at machine speed",
    category: "Due Diligence",
    icon: FileText,
    color: "#7C3AED",
    heroImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered contract analysis platform that reads, understands, and risk-scores enterprise contracts at machine speed, processing thousands of contracts in hours.",
    features: [
      "Multi-format document ingestion (PDF, Word, scanned)",
      "AI clause extraction and classification",
      "Named Entity Recognition for parties and dates",
      "12-dimension risk scoring model",
      "Contract-to-insurance comparison",
      "Bulk processing capability",
    ],
    capabilities: [
      "Insurance requirement extraction",
      "Red flag detection for unusual terms",
      "Portfolio-level risk aggregation",
      "API integration with CLM systems",
    ],
    businessBenefits: [
      "70% reduction in legal review workload",
      "$45M invisible exposure identification in PE deals",
      "Automated contractor agreement screening",
    ],
    kpiMetrics: [
      { value: "70%", label: "Legal Review Reduction", icon: Scale },
      { value: "1000s", label: "Contracts / Hour", icon: Zap },
      { value: "12", label: "Risk Dimensions Scored", icon: Target },
      { value: "$45M", label: "Exposure Identified", icon: AlertTriangle },
    ],
    capabilityCards: [
      { title: "AI Clause Extraction", description: "Identifies and classifies every clause across contract types.", bullets: ["Liability caps", "Indemnification", "IP ownership", "Force majeure"], icon: FileText },
      { title: "Red Flag Detection", description: "Flags unusual or high-risk terms for legal review.", bullets: ["Uncapped liability", "Unilateral termination", "Unfavorable warranties"], icon: AlertTriangle },
      { title: "Insurance Gap Matching", description: "Compares contractual obligations to existing coverage.", bullets: ["Coverage mapping", "Gap identification", "Premium impact"], icon: Shield },
      { title: "Bulk Processing", description: "Handles thousands of documents simultaneously at scale.", bullets: ["Parallel processing", "Batch uploads", "Portfolio aggregation"], icon: Layers },
    ],
    industryTabs: [
      { label: "Private Equity", challenges: ["Thousands of target contracts", "Hidden liabilities", "Indemnity stack complexity"], riskExposure: ["Uncapped warranty breach", "IP infringement", "Environmental indemnity"], relatedPlatforms: ["M&A Due Diligence", "Counterparty Assessment", "Risk DNA Mapper"] },
      { label: "Construction", challenges: ["Subcontractor indemnity chains", "Back-to-back contracts", "Delay penalty clauses"], riskExposure: ["Liquidated damages", "Uncovered delay risk", "Insurance adequacy gaps"], relatedPlatforms: ["Risk Diagnostic Engine", "M&A Due Diligence", "Regulatory Intelligence"] },
      { label: "Technology", challenges: ["SaaS liability terms", "Data processing agreements", "IP ownership disputes"], riskExposure: ["Unlimited liability", "GDPR exposure", "Source code escrow failure"], relatedPlatforms: ["Cyber Due Diligence", "Regulatory Intelligence", "Risk Diagnostic Engine"] },
      { label: "Healthcare", challenges: ["Vendor BAAs", "Clinical trial agreements", "Device licensing"], riskExposure: ["PHI indemnity", "Trial liability", "Recall obligation"], relatedPlatforms: ["Regulatory Intelligence", "M&A Due Diligence", "Cyber Due Diligence"] },
    ],
    relatedModules: ["ma-due-diligence", "regulatory-intelligence", "counterparty-assessment"],
    relatedRiskSlugs: ["m-a-transaction-risk", "regulatory-compliance-failure", "d-o-personal-liability"],
    relatedSolutionSlugs: ["ma-risk-due-diligence", "professional-indemnity-2", "d-o"],
    useCases: [
      "SaaS company acquisition contract analysis",
      "Technology vendor contract review",
      "Construction subcontractor agreement screening",
    ],
  },

  "ma-due-diligence": {
    slug: "ma-due-diligence",
    title: "TRUSTFLOW M&A Risk Due Diligence Suite",
    subtitle: "Comprehensive transaction risk analysis in 72 hours",
    category: "Due Diligence",
    icon: Briefcase,
    color: "#059669",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    description: "A comprehensive AI-powered due diligence platform specifically designed for mergers, acquisitions, and divestitures, generating a complete transaction risk report within 72 hours.",
    features: [
      "Integrated workflow combining contract and financial analysis",
      "Target company insurance adequacy assessment",
      "Warranty & indemnity risk quantification",
      "Environmental liability screening",
      "IP portfolio risk analysis",
      "Litigation risk assessment",
    ],
    capabilities: [
      "72-hour turnaround for complete risk profile",
      "Risk heat map generation",
      "Deal protection recommendations",
      "W&I insurance placement integration",
    ],
    businessBenefits: [
      "$78M undisclosed exposure identification",
      "$30M bid price adjustment based on findings",
      "50-target screening and ranking",
    ],
    kpiMetrics: [
      { value: "72-Hr", label: "Full Report Turnaround", icon: Zap },
      { value: "$78M", label: "Avg Exposure Found", icon: AlertTriangle },
      { value: "50+", label: "Targets Screened", icon: Target },
      { value: "100%", label: "W&I Ready", icon: CheckCircle2 },
    ],
    capabilityCards: [
      { title: "Financial Risk Analysis", description: "Identifies undisclosed liabilities and off-balance-sheet risk.", bullets: ["Pension gap analysis", "Tax contingency", "Litigation reserves"], icon: BarChart3 },
      { title: "W&I Quantification", description: "Prices warranty & indemnity risk for insurance structuring.", bullets: ["Breach probability", "Loss modeling", "Tower sizing"], icon: Scale },
      { title: "Environmental Screening", description: "Assesses site contamination and regulatory exposure.", bullets: ["Phase I/II analysis", "Remediation cost", "Regulatory liability"], icon: AlertTriangle },
      { title: "IP Risk Assessment", description: "Evaluates patent portfolio strength and infringement risk.", bullets: ["Patent validity", "Licensing clarity", "Litigation history"], icon: Shield },
    ],
    industryTabs: [
      { label: "Private Equity", challenges: ["Fast deal timelines", "Multi-target screening", "LP liability exposure"], riskExposure: ["Warranty breach", "Environmental liability", "Litigation tail"], relatedPlatforms: ["Contract Intelligence", "Risk DNA Mapper", "Counterparty Assessment"] },
      { label: "Healthcare", challenges: ["FDA compliance gap", "Clinical data integrity", "Reimbursement risk"], riskExposure: ["FDA enforcement", "PHI indemnity", "Revenue recognition"], relatedPlatforms: ["Regulatory Intelligence", "Contract Intelligence", "Cyber Due Diligence"] },
      { label: "Technology", challenges: ["IP ownership gaps", "Cyber debt", "SaaS metric risk"], riskExposure: ["IP infringement", "Data breach inherited", "ARR overstatement"], relatedPlatforms: ["Cyber Due Diligence", "Contract Intelligence", "Risk Diagnostic Engine"] },
      { label: "Manufacturing", challenges: ["Environmental liability", "Product recall history", "Supply chain risk"], riskExposure: ["Remediation costs", "Recall obligations", "OEM liability"], relatedPlatforms: ["Supply Chain Monitor", "Contract Intelligence", "Regulatory Intelligence"] },
    ],
    relatedModules: ["contract-intelligence", "cyber-due-diligence", "counterparty-assessment"],
    relatedRiskSlugs: ["m-a-transaction-risk", "regulatory-compliance-failure", "d-o-personal-liability"],
    relatedSolutionSlugs: ["ma-risk-due-diligence", "d-o", "professional-indemnity-2"],
    useCases: [
      "Healthcare technology $500M acquisition",
      "Manufacturing sector acquisition screening",
      "Pre-sale vendor due diligence",
    ],
  },

  "counterparty-assessment": {
    slug: "counterparty-assessment",
    title: "TRUSTFLOW Counterparty Risk Assessment Engine",
    subtitle: "Continuous monitoring of business ecosystem entities",
    category: "Due Diligence",
    icon: Search,
    color: "#2563EB",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered platform that continuously monitors and scores the financial health, operational stability, and risk profile of every counterparty in a client's business ecosystem.",
    features: [
      "Continuous monitoring of 50M+ entities globally",
      "Financial health scoring",
      "Payment behavior analysis",
      "News sentiment analysis",
      "Litigation and regulatory action tracking",
      "Early warning alerts 6-12 months ahead",
    ],
    capabilities: [
      "Network analysis for hidden connections",
      "Portfolio-level risk aggregation",
      "Trade credit insurance integration",
      "ERP system API connectivity",
    ],
    businessBenefits: [
      "9 months early warning before customer bankruptcy",
      "Supply chain disruption prevention",
      "Proactive commercial borrower engagement",
    ],
    kpiMetrics: [
      { value: "50M+", label: "Entities Monitored", icon: Globe },
      { value: "9-Mo", label: "Avg Early Warning", icon: AlertTriangle },
      { value: "Real-Time", label: "Financial Scoring", icon: Activity },
      { value: "6-12Mo", label: "Distress Detection Lead", icon: TrendingUp },
    ],
    capabilityCards: [
      { title: "Financial Health Scoring", description: "Continuous credit and operational health monitoring.", bullets: ["Altman Z-score", "Payment behavior", "Cash flow signals"], icon: BarChart3 },
      { title: "Network Risk Analysis", description: "Maps hidden relationships between counterparties.", bullets: ["Beneficial ownership", "Common directors", "Group exposure"], icon: Layers },
      { title: "Early Warning Alerts", description: "Detects distress signals 6-12 months before failure.", bullets: ["Covenant breach signals", "News sentiment drop", "Legal filings"], icon: AlertTriangle },
      { title: "Trade Credit Integration", description: "Feeds into credit insurance underwriting workflows.", bullets: ["Limit recommendations", "Sector benchmarks", "Dynamic monitoring"], icon: Shield },
    ],
    industryTabs: [
      { label: "Banking", challenges: ["Loan book concentration", "SME borrower monitoring", "Covenant compliance"], riskExposure: ["Credit default", "Capital adequacy", "Impairment charges"], relatedPlatforms: ["Risk DNA Mapper", "Regulatory Intelligence", "Risk Diagnostic Engine"] },
      { label: "Manufacturing", challenges: ["Tier-1 supplier monitoring", "OEM customer dependency", "Payment terms risk"], riskExposure: ["Supply disruption", "Revenue concentration", "Receivables default"], relatedPlatforms: ["Supply Chain Monitor", "Risk Diagnostic Engine", "Political Monitor"] },
      { label: "Retail", challenges: ["Supplier base financial health", "Seasonal cash flow risk", "Franchise partner risk"], riskExposure: ["Inventory shortfall", "Store closure contagion", "Franchisor default"], relatedPlatforms: ["Supply Chain Monitor", "Risk Intelligence Aggregator", "Risk Diagnostic Engine"] },
      { label: "Energy", challenges: ["Offtaker credit risk", "Joint venture partner health", "EPC contractor risk"], riskExposure: ["Offtaker default", "JV dissolution", "Project delay"], relatedPlatforms: ["Political Monitor", "Climate Scenario", "M&A Due Diligence"] },
    ],
    relatedModules: ["supply-chain-monitor", "risk-intelligence-aggregator", "client-portal"],
    relatedRiskSlugs: ["single-source-supplier-failure", "m-a-transaction-risk", "regulatory-compliance-failure"],
    relatedSolutionSlugs: ["business-interruption", "ma-risk-due-diligence", "performance-bonds"],
    useCases: [
      "Manufacturer customer distress detection",
      "Retailer supplier financial screening",
      "Bank loan portfolio monitoring",
    ],
  },

  "cyber-due-diligence": {
    slug: "cyber-due-diligence",
    title: "TRUSTFLOW Cyber Due Diligence Platform",
    subtitle: "External vulnerability assessment without internal access",
    category: "Due Diligence",
    icon: Shield,
    color: "#DC2626",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered platform that conducts comprehensive cybersecurity due diligence on any organization externally, without requiring internal access.",
    features: [
      "External attack surface discovery",
      "Domain and IP reputation analysis",
      "Cloud infrastructure security assessment",
      "Email security evaluation",
      "Exposed credential monitoring",
      "Cyber Risk Score with benchmarking",
    ],
    capabilities: [
      "Remediation priority recommendations",
      "Compliance posture assessment",
      "Integration with insurance design",
      "Dark web scanning",
    ],
    businessBenefits: [
      "$15M price reduction in tech acquisition",
      "Bottom decile cyber posture identification",
      "Vendor cybersecurity ranking",
    ],
    kpiMetrics: [
      { value: "0", label: "Internal Access Required", icon: Lock },
      { value: "48-Hr", label: "Full Assessment", icon: Zap },
      { value: "$15M", label: "Avg Price Adjustment", icon: AlertTriangle },
      { value: "100%", label: "External Coverage", icon: Shield },
    ],
    capabilityCards: [
      { title: "Attack Surface Discovery", description: "Maps all external-facing assets without internal access.", bullets: ["Domain enumeration", "IP range scanning", "API endpoint discovery"], icon: Search },
      { title: "Exposed Credential Scanning", description: "Identifies leaked credentials on dark and open web.", bullets: ["Dark web monitoring", "Password breach check", "MFA gap detection"], icon: Lock },
      { title: "Cloud Security Assessment", description: "Evaluates cloud infrastructure security posture.", bullets: ["S3 bucket exposure", "IAM misconfiguration", "Cloud service risk"], icon: CloudLightning },
      { title: "Compliance Posture Scoring", description: "Maps findings to regulatory frameworks.", bullets: ["SOC 2 gaps", "ISO 27001 alignment", "NIST framework score"], icon: CheckCircle2 },
    ],
    industryTabs: [
      { label: "Private Equity", challenges: ["Pre-acquisition cyber debt", "Inherited vulnerabilities", "Ransom risk at close"], riskExposure: ["Post-acquisition breach", "Integration failure", "Regulatory fines"], relatedPlatforms: ["M&A Due Diligence", "Contract Intelligence", "Cyber Intelligence"] },
      { label: "Technology", challenges: ["Rapid asset growth", "Open source exposure", "Third-party code risk"], riskExposure: ["Supply chain compromise", "Data exfiltration", "API breach"], relatedPlatforms: ["Cyber Intelligence", "Risk Diagnostic Engine", "Regulatory Intelligence"] },
      { label: "Financial Services", challenges: ["Third-party vendor cyber risk", "Core banking system exposure", "SWIFT network security"], riskExposure: ["Vendor breach contagion", "Funds transfer fraud", "Regulatory sanctions"], relatedPlatforms: ["Counterparty Assessment", "Cyber Intelligence", "Regulatory Intelligence"] },
      { label: "Healthcare", challenges: ["Medical device security", "EHR system exposure", "Telehealth platform risk"], riskExposure: ["PHI data breach", "Ransomware on medical devices", "HIPAA enforcement"], relatedPlatforms: ["Cyber Intelligence", "Regulatory Intelligence", "Risk Diagnostic Engine"] },
    ],
    relatedModules: ["cyber-intelligence", "ma-due-diligence", "risk-intelligence-aggregator"],
    relatedRiskSlugs: ["ransomware", "data-breach", "m-a-transaction-risk"],
    relatedSolutionSlugs: ["cyber-first-party", "ma-risk-due-diligence", "professional-indemnity-2"],
    useCases: [
      "Tech acquisition cybersecurity assessment",
      "Cyber insurance underwriting",
      "Cloud service vendor evaluation",
    ],
  },

  "supply-chain-monitor": {
    slug: "supply-chain-monitor",
    title: "TRUSTFLOW Supply Chain Risk Monitor",
    subtitle: "Multi-tier supplier financial and operational monitoring",
    category: "Risk Monitoring",
    icon: Truck,
    color: "#F59E0B",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a63?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered platform that continuously monitors the health, stability, and risk exposure of a client's multi-tier supply chain.",
    features: [
      "Multi-tier supplier mapping (Tier 1 through Tier N)",
      "Supplier financial health monitoring",
      "Geopolitical risk monitoring",
      "Natural catastrophe exposure assessment",
      "Cybersecurity rating monitoring",
      "ESG compliance screening",
    ],
    capabilities: [
      "Logistics disruption tracking",
      "Alternative supplier identification",
      "Disruption impact simulation",
      "Early warning alerts",
    ],
    businessBenefits: [
      "Semiconductor shortage risk mitigation",
      "Supplier distress early warning",
      "Agricultural supply chain climate adaptation",
    ],
    kpiMetrics: [
      { value: "Tier-N", label: "Deep Supplier Mapping", icon: Layers },
      { value: "195", label: "Countries Monitored", icon: Globe },
      { value: "48-Hr", label: "Disruption Alert", icon: AlertTriangle },
      { value: "100+", label: "Suppliers Mapped", icon: Truck },
    ],
    capabilityCards: [
      { title: "Multi-Tier Mapping", description: "Visualizes supplier dependencies from Tier 1 to Tier N.", bullets: ["Network visualization", "Concentration risk", "Single-source flags"], icon: Layers },
      { title: "Financial Health Monitoring", description: "Tracks supplier financial stability in real time.", bullets: ["Credit scoring", "Payment behavior", "Distress signals"], icon: BarChart3 },
      { title: "Geopolitical Overlay", description: "Flags supply chain exposure to political instability.", bullets: ["Country risk scoring", "Sanctions screening", "Trade route risk"], icon: Globe },
      { title: "Alternative Supplier ID", description: "Recommends backup suppliers during disruption events.", bullets: ["Qualified alternatives", "Lead time analysis", "Cost impact"], icon: RefreshCw },
    ],
    industryTabs: [
      { label: "Automotive", challenges: ["Just-in-time dependency", "Semiconductor concentration", "EV transition risk"], riskExposure: ["Line stoppage", "Component shortage", "OEM penalty"], relatedPlatforms: ["Counterparty Assessment", "Political Monitor", "Risk Intelligence Aggregator"] },
      { label: "Technology", challenges: ["TSMC concentration risk", "Rare earth dependency", "Software supply chain"], riskExposure: ["Chip shortage", "Materials access", "Backdoor attacks"], relatedPlatforms: ["Cyber Intelligence", "Political Monitor", "Risk Diagnostic Engine"] },
      { label: "Food & Agri", challenges: ["Climate-driven crop failure", "Port disruption", "Cold chain integrity"], riskExposure: ["Harvest shortfall", "Logistics breakdown", "Product spoilage"], relatedPlatforms: ["Climate Scenario", "Political Monitor", "Counterparty Assessment"] },
      { label: "Pharmaceuticals", challenges: ["API sourcing concentration", "GMP compliance upstream", "Cold chain breach"], riskExposure: ["Drug shortage", "Regulatory recall", "Contamination liability"], relatedPlatforms: ["Regulatory Intelligence", "Counterparty Assessment", "Cyber Due Diligence"] },
    ],
    relatedModules: ["counterparty-assessment", "political-monitor", "risk-intelligence-aggregator"],
    relatedRiskSlugs: ["single-source-supplier-failure", "natural-catastrophe", "business-interruption"],
    relatedSolutionSlugs: ["business-interruption", "parametric-insurance", "property-sfsp"],
    useCases: [
      "Automotive semiconductor risk monitoring",
      "Tier 2 supplier financial distress detection",
      "Agricultural crop failure preparation",
    ],
  },

  "political-monitor": {
    slug: "political-monitor",
    title: "TRUSTFLOW Political Risk Monitor",
    subtitle: "Real-time geopolitical risk tracking across 195 countries",
    category: "Risk Monitoring",
    icon: Globe,
    color: "#0D9488",
    heroImage: "https://images.unsplash.com/photo-1569863959165-56b1e4e89f9f?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered platform that monitors political risk across 195 countries in real-time, detecting emerging political risks including political instability, regime change, sanctions, and trade restrictions.",
    features: [
      "195-country political risk scoring",
      "Real-time event detection",
      "Sanctions monitoring",
      "Currency control monitoring",
      "Election risk assessment",
      "Trade policy monitoring",
    ],
    capabilities: [
      "Regime change probability assessment",
      "Terrorism and political violence risk scoring",
      "Custom alert configuration",
      "Supply chain geopolitical mapping",
    ],
    businessBenefits: [
      "Mining company political risk mitigation",
      "Sanctions compliance protection",
      "Infrastructure investment risk pricing",
    ],
    kpiMetrics: [
      { value: "195", label: "Countries Covered", icon: Globe },
      { value: "Real-Time", label: "Event Detection", icon: Activity },
      { value: "500+", label: "Sanctions Lists Monitored", icon: AlertTriangle },
      { value: "24/7", label: "Political Pulse", icon: Zap },
    ],
    capabilityCards: [
      { title: "Country Risk Scoring", description: "Dynamic political risk scores for 195 countries.", bullets: ["Stability index", "Conflict probability", "Regime change risk"], icon: Globe },
      { title: "Sanctions Intelligence", description: "Monitors 500+ global sanctions and export control lists.", bullets: ["OFAC", "EU sanctions", "UN resolutions"], icon: AlertTriangle },
      { title: "Election Risk Assessment", description: "Models election outcomes and policy change implications.", bullets: ["Polling analysis", "Policy scenario modeling", "Investment impact"], icon: Target },
      { title: "Terrorism & PV Scoring", description: "Tracks terrorism and political violence risk by region.", bullets: ["Incident tracking", "Group activity", "Asset exposure"], icon: ShieldAlert },
    ],
    industryTabs: [
      { label: "Mining & Resources", challenges: ["Operating in high-risk jurisdictions", "Nationalization risk", "Community conflict"], riskExposure: ["Expropriation", "License revocation", "Force majeure"], relatedPlatforms: ["Supply Chain Monitor", "Risk DNA Mapper", "Climate Scenario"] },
      { label: "Infrastructure", challenges: ["Long-tenor political exposure", "Concession risk", "Local content law"], riskExposure: ["Contract termination", "Currency inconvertibility", "War damage"], relatedPlatforms: ["Climate Scenario", "Counterparty Assessment", "Regulatory Intelligence"] },
      { label: "Financial Services", challenges: ["Sovereign risk exposure", "Correspondent banking", "Sanctions compliance"], riskExposure: ["Sovereign default", "AML penalties", "Asset freeze"], relatedPlatforms: ["Counterparty Assessment", "Regulatory Intelligence", "Risk DNA Mapper"] },
      { label: "Manufacturing", challenges: ["Factory in volatile regions", "Trade war exposure", "Cross-border logistics"], riskExposure: ["Import tariffs", "Factory seizure", "Logistics blockade"], relatedPlatforms: ["Supply Chain Monitor", "Risk Intelligence Aggregator", "Regulatory Intelligence"] },
    ],
    relatedModules: ["supply-chain-monitor", "risk-intelligence-aggregator", "regulatory-intelligence"],
    relatedRiskSlugs: ["natural-catastrophe", "regulatory-compliance-failure", "single-source-supplier-failure"],
    relatedSolutionSlugs: ["parametric-insurance", "performance-bonds", "business-interruption"],
    useCases: [
      "Sub-Saharan African mining investment",
      "US sanctions entity screening",
      "Southeast Asian infrastructure evaluation",
    ],
  },

  "regulatory-intelligence": {
    slug: "regulatory-intelligence",
    title: "TRUSTFLOW Regulatory Intelligence Platform",
    subtitle: "Monitors regulatory changes across 150+ jurisdictions",
    category: "Risk Monitoring",
    icon: BookOpen,
    color: "#7C3AED",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered platform that monitors, analyzes, and interprets regulatory changes across 150+ jurisdictions and 20+ regulatory domains.",
    features: [
      "Monitoring of 500+ regulatory bodies",
      "NLP-powered extraction of regulatory changes",
      "Industry-specific filtering",
      "Geography-specific alerts",
      "Impact assessment",
      "Compliance gap analysis",
    ],
    capabilities: [
      "Actionable recommendations",
      "Deadline tracking",
      "Integration with insurance compliance checker",
      "Historical regulatory trend analysis",
    ],
    businessBenefits: [
      "Singapore MAS cybersecurity compliance",
      "Brazil LGPD cross-border data transfer update",
      "EU AI Act enforcement guidance response",
    ],
    kpiMetrics: [
      { value: "500+", label: "Regulatory Bodies", icon: Landmark },
      { value: "150+", label: "Jurisdictions", icon: Globe },
      { value: "20+", label: "Regulatory Domains", icon: BookOpen },
      { value: "Real-Time", label: "Change Detection", icon: Activity },
    ],
    capabilityCards: [
      { title: "NLP Regulatory Parsing", description: "Automatically extracts and classifies regulatory changes.", bullets: ["Change identification", "Impact classification", "Deadline extraction"], icon: BookOpen },
      { title: "Compliance Gap Analysis", description: "Maps regulations to existing compliance frameworks.", bullets: ["Gap identification", "Remediation roadmap", "Priority ranking"], icon: CheckCircle2 },
      { title: "Jurisdiction Filtering", description: "Filters alerts to your operating geographies.", bullets: ["Country selection", "Multi-jurisdiction view", "Regulatory calendar"], icon: Globe },
      { title: "Deadline Tracking", description: "Manages compliance deadlines with automated reminders.", bullets: ["Calendar integration", "Escalation alerts", "Audit trails"], icon: AlertTriangle },
    ],
    industryTabs: [
      { label: "Financial Services", challenges: ["MiFID II updates", "Basel IV capital rules", "AML/KYC changes"], riskExposure: ["Regulatory fine", "License suspension", "Capital shortfall"], relatedPlatforms: ["Risk Diagnostic Engine", "Counterparty Assessment", "Risk Intelligence Aggregator"] },
      { label: "Technology", challenges: ["GDPR & DPDP evolution", "AI Act compliance", "Digital Services Act"], riskExposure: ["Data transfer fines", "AI liability exposure", "Platform regulation"], relatedPlatforms: ["Cyber Intelligence", "Cyber Due Diligence", "Contract Intelligence"] },
      { label: "Pharmaceuticals", challenges: ["FDA/EMA rule changes", "Pharmacovigilance updates", "Clinical trial regulations"], riskExposure: ["Product recall mandate", "Market access loss", "Trial suspension"], relatedPlatforms: ["Risk Diagnostic Engine", "M&A Due Diligence", "Contract Intelligence"] },
      { label: "Energy", challenges: ["Carbon pricing evolution", "TCFD disclosure mandates", "Grid code updates"], riskExposure: ["Carbon penalty", "Stranded asset disclosure", "License compliance"], relatedPlatforms: ["Climate Scenario", "Risk DNA Mapper", "Political Monitor"] },
    ],
    relatedModules: ["political-monitor", "risk-intelligence-aggregator", "contract-intelligence"],
    relatedRiskSlugs: ["regulatory-compliance-failure", "d-o-personal-liability", "ransomware"],
    relatedSolutionSlugs: ["d-o", "professional-indemnity-2", "cyber-first-party"],
    useCases: [
      "Financial institution cybersecurity requirements",
      "Multinational data privacy compliance",
      "AI company liability endorsement update",
    ],
  },

  "climate-scenario": {
    slug: "climate-scenario",
    title: "TRUSTFLOW Climate Scenario Analysis Platform",
    subtitle: "Long-term climate risk modeling under multiple scenarios",
    category: "Planning & Scenario",
    icon: Zap,
    color: "#F59E0B",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered platform that models the long-term impact of climate change on enterprise assets, supply chains, and business models under multiple climate scenarios.",
    features: [
      "Multi-scenario modeling (RCP 2.6, 4.5, 8.5)",
      "Physical risk assessment",
      "Transition risk assessment",
      "Asset-level climate risk scoring",
      "Supply chain climate risk mapping",
      "Revenue impact modeling",
    ],
    capabilities: [
      "Stranded asset identification",
      "Adaptation cost estimation",
      "Insurance implication analysis",
      "TCFD-aligned disclosure generation",
    ],
    businessBenefits: [
      "Supply chain diversification planning",
      "Transition strategy development",
      "Infrastructure capital planning integration",
    ],
    kpiMetrics: [
      { value: "3", label: "Climate Scenarios Modeled", icon: CloudLightning },
      { value: "25-Yr", label: "Projection Horizon", icon: TrendingUp },
      { value: "100%", label: "TCFD Aligned", icon: CheckCircle2 },
      { value: "Asset", label: "Level Scoring", icon: Target },
    ],
    capabilityCards: [
      { title: "Physical Risk Assessment", description: "Models flood, heat, wind, and drought risk to assets.", bullets: ["Asset-level scoring", "Geospatial mapping", "Return period analysis"], icon: CloudLightning },
      { title: "Transition Risk Modeling", description: "Quantifies business impact of decarbonization policies.", bullets: ["Carbon price scenarios", "Stranded asset ID", "Revenue impact"], icon: TrendingUp },
      { title: "TCFD Disclosure Generation", description: "Automates climate risk reporting under TCFD framework.", bullets: ["Board-ready reports", "Scenario narratives", "Metric disclosure"], icon: CheckCircle2 },
      { title: "Adaptation Cost Estimation", description: "Models cost of physical adaptation to climate scenarios.", bullets: ["CapEx requirements", "Insurance implications", "Resilience scoring"], icon: BarChart3 },
    ],
    industryTabs: [
      { label: "Renewable Energy", challenges: ["Irradiance variability", "Flood risk to assets", "Grid curtailment"], riskExposure: ["Revenue shortfall", "Physical damage", "Connection delay"], relatedPlatforms: ["Supply Chain Monitor", "Risk DNA Mapper", "Political Monitor"] },
      { label: "Real Estate", challenges: ["Coastal flood risk", "Heat stress on buildings", "Stranded asset risk"], riskExposure: ["Asset value decline", "Insurance premium spike", "Stranded capital"], relatedPlatforms: ["Counterparty Assessment", "Risk Diagnostic Engine", "Regulatory Intelligence"] },
      { label: "Agriculture", challenges: ["Drought and crop failure", "Extreme heat events", "Water scarcity"], riskExposure: ["Harvest loss", "Water access risk", "Supply chain break"], relatedPlatforms: ["Supply Chain Monitor", "Political Monitor", "Risk Intelligence Aggregator"] },
      { label: "Infrastructure", challenges: ["Long-tenor climate exposure", "Sea level rise", "Extreme weather events"], riskExposure: ["Bridge/road damage", "Flood inundation", "Stranded investment"], relatedPlatforms: ["Political Monitor", "Counterparty Assessment", "Risk DNA Mapper"] },
    ],
    relatedModules: ["supply-chain-monitor", "risk-intelligence-aggregator", "regulatory-intelligence"],
    relatedRiskSlugs: ["natural-catastrophe", "regulatory-compliance-failure", "business-interruption"],
    relatedSolutionSlugs: ["parametric-insurance", "property-sfsp", "car-construction"],
    useCases: [
      "Global food company agricultural risk",
      "Fossil fuel company transition planning",
      "City government infrastructure assessment",
    ],
  },

  "client-portal": {
    slug: "client-portal",
    title: "TRUSTFLOW Client Risk Portal",
    subtitle: "Dashboard access to all risk metrics and claims",
    category: "Client Experience",
    icon: Users,
    color: "#7C3AED",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    description: "A unified dashboard providing clients access to all risk metrics, claims status, documentation, and risk intelligence in one place.",
    features: [
      "Claim tracking and status updates",
      "Document repository with blockchain verification",
      "Risk scorecards and trend analysis",
      "Policy management and renewals",
      "Risk intelligence feed access",
      "Messaging with Risk Architects",
    ],
    capabilities: [
      "Single sign-on with federated identity",
      "Role-based access control",
      "Mobile-responsive design",
      "Real-time notifications",
    ],
    businessBenefits: [
      "Centralized risk management view",
      "Faster claims processing",
      "Improved broker-carrier communication",
    ],
    kpiMetrics: [
      { value: "1", label: "Unified Dashboard", icon: Layers },
      { value: "Real-Time", label: "Claims Updates", icon: Activity },
      { value: "SSO", label: "Secure Access", icon: Lock },
      { value: "24/7", label: "Self-Service Access", icon: Users },
    ],
    capabilityCards: [
      { title: "Claims Tracking", description: "Real-time status updates for all open and closed claims.", bullets: ["Stage tracking", "Document uploads", "Payment status"], icon: Activity },
      { title: "Document Vault", description: "Blockchain-verified document repository for all policies.", bullets: ["Policy storage", "Audit trails", "Version control"], icon: Lock },
      { title: "Risk Scorecards", description: "Personalized risk score trends over time.", bullets: ["Score history", "Risk category breakdown", "Peer comparison"], icon: BarChart3 },
      { title: "Architect Messaging", description: "Direct communication channel with your Risk Architect.", bullets: ["Encrypted messaging", "File sharing", "Meeting scheduling"], icon: Users },
    ],
    industryTabs: [
      { label: "Corporates", challenges: ["Multi-policy complexity", "Multi-entity management", "Renewal visibility"], riskExposure: ["Coverage gaps", "Policy lapse", "Claims delay"], relatedPlatforms: ["Executive Dashboards", "Risk Feed", "Risk Intelligence Aggregator"] },
      { label: "Private Equity", challenges: ["Portfolio-wide policy visibility", "Claims tracking across entities", "LP reporting"], riskExposure: ["Unclaimed losses", "Portfolio coverage gaps", "Reporting gaps"], relatedPlatforms: ["Executive Dashboards", "M&A Due Diligence", "Risk DNA Mapper"] },
      { label: "Financial Services", challenges: ["Regulatory document retention", "Audit trail requirements", "Claims audit"], riskExposure: ["Non-compliance", "Document loss", "Claims fraud"], relatedPlatforms: ["Regulatory Intelligence", "Risk Diagnostic Engine", "Executive Dashboards"] },
      { label: "Healthcare", challenges: ["Multi-site policy management", "Claims volume", "Regulatory document needs"], riskExposure: ["Claims backlog", "Policy confusion", "Compliance gaps"], relatedPlatforms: ["Risk Diagnostic Engine", "Regulatory Intelligence", "Risk Feed"] },
    ],
    relatedModules: ["risk-feed", "executive-dashboards", "risk-intelligence-aggregator"],
    relatedRiskSlugs: ["regulatory-compliance-failure", "business-interruption", "d-o-personal-liability"],
    relatedSolutionSlugs: ["claims-advocacy", "professional-indemnity-2", "d-o"],
    useCases: [
      "Daily claims status review",
      "Policy document access",
      "Risk intelligence consumption",
    ],
  },

  "risk-feed": {
    slug: "risk-feed",
    title: "TRUSTFLOW Risk Intelligence Feed",
    subtitle: "Personalized risk intelligence and action alerts",
    category: "Client Experience",
    icon: Bell,
    color: "#0D9488",
    heroImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    description: "A personalized, real-time risk intelligence feed delivering curated alerts and insights based on each client's specific risk profile, industry, and geography.",
    features: [
      "Personalized by industry and geography",
      "Multi-source signal aggregation",
      "Severity classification (Critical/High/Medium/Low)",
      "Compound risk detection",
      "Actionable recommendations",
      "Executive summary generation",
    ],
    capabilities: [
      "Daily, weekly, monthly briefings",
      "Custom alert rules configuration",
      "Historical analysis reports",
      "Integration with client portal",
    ],
    businessBenefits: [
      "Proactive risk management",
      "Reduced signal noise",
      "Faster executive decision-making",
    ],
    kpiMetrics: [
      { value: "4-Tier", label: "Severity Classification", icon: AlertTriangle },
      { value: "<1-Hr", label: "Alert Delivery Time", icon: Zap },
      { value: "95%", label: "Noise Filtered", icon: Target },
      { value: "Daily", label: "Executive Briefings", icon: Bell },
    ],
    capabilityCards: [
      { title: "Personalized Curation", description: "Feed filtered by your industry, geography, and risk profile.", bullets: ["Industry filters", "Geographic focus", "Risk type selection"], icon: Bell },
      { title: "Severity Classification", description: "Each alert is scored Critical / High / Medium / Low.", bullets: ["4-tier scoring", "Action priority", "Escalation rules"], icon: AlertTriangle },
      { title: "Executive Summaries", description: "Auto-generated briefings for board and risk committee.", bullets: ["Daily digest", "Weekly summary", "Monthly report"], icon: BarChart3 },
      { title: "Custom Alert Rules", description: "Configure triggers based on threshold and event types.", bullets: ["Keyword alerts", "Country triggers", "Risk score thresholds"], icon: Target },
    ],
    industryTabs: [
      { label: "C-Suite Executives", challenges: ["Information overload", "Prioritizing signals", "Board reporting speed"], riskExposure: ["Missed early warnings", "Reactive risk posture", "Reputational lag"], relatedPlatforms: ["Executive Dashboards", "Client Portal", "Risk Intelligence Aggregator"] },
      { label: "Risk Teams", challenges: ["Multi-domain monitoring", "Alert fatigue", "Cross-department coordination"], riskExposure: ["Coverage gaps", "Slow response", "Siloed intelligence"], relatedPlatforms: ["Risk Intelligence Aggregator", "Client Portal", "Regulatory Intelligence"] },
      { label: "Financial Services", challenges: ["Regulatory alert volume", "Market event monitoring", "Counterparty signals"], riskExposure: ["Compliance miss", "Market loss", "Counterparty default"], relatedPlatforms: ["Regulatory Intelligence", "Counterparty Assessment", "Political Monitor"] },
      { label: "Manufacturing", challenges: ["Supply chain signal volume", "Geopolitical monitoring", "Weather event tracking"], riskExposure: ["Production halt", "Logistics disruption", "Input cost spike"], relatedPlatforms: ["Supply Chain Monitor", "Political Monitor", "Climate Scenario"] },
    ],
    relatedModules: ["risk-intelligence-aggregator", "client-portal", "executive-dashboards"],
    relatedRiskSlugs: ["single-source-supplier-failure", "ransomware", "natural-catastrophe"],
    relatedSolutionSlugs: ["business-interruption", "cyber-first-party", "parametric-insurance"],
    useCases: [
      "CFO daily risk briefing consumption",
      "Risk team proactive action",
      "Board-level reporting",
    ],
  },

  "executive-dashboards": {
    slug: "executive-dashboards",
    title: "TRUSTFLOW Executive Dashboards",
    subtitle: "Board-level risk visualization and reporting",
    category: "Client Experience",
    icon: TrendingUp,
    color: "#2563EB",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Board-level dashboards providing comprehensive risk visualization, key metrics tracking, and strategic insights for executive decision-making.",
    features: [
      "Enterprise risk score trends",
      "Top 10 risk exposures",
      "Insurance program summary",
      "Claims performance metrics",
      "Emerging risk alerts",
      "Peer benchmarking",
    ],
    capabilities: [
      "Auto-generated quarterly reports",
      "Interactive visualizations",
      "Export to PDF/PPT formats",
      "Multi-entity portfolio view",
    ],
    businessBenefits: [
      "Improved board risk literacy",
      "Strategic risk planning support",
      "Insurance ROI demonstration",
    ],
    kpiMetrics: [
      { value: "10", label: "Top Risks Tracked", icon: AlertTriangle },
      { value: "Quarterly", label: "Auto Reports", icon: BarChart3 },
      { value: "PDF/PPT", label: "Export Formats", icon: CheckCircle2 },
      { value: "Multi", label: "Entity Portfolio View", icon: Layers },
    ],
    capabilityCards: [
      { title: "Risk Score Trends", description: "Tracks enterprise risk score over time with drill-down.", bullets: ["Score history", "Category breakdown", "Benchmark comparison"], icon: TrendingUp },
      { title: "Insurance ROI Metrics", description: "Demonstrates value of insurance program quantitatively.", bullets: ["Claims recovered", "Premium optimization", "Coverage effectiveness"], icon: BarChart3 },
      { title: "Interactive Visualizations", description: "Drag-and-drop risk dashboards for executive use.", bullets: ["Heat maps", "Risk radar charts", "Trend lines"], icon: Layers },
      { title: "Board Pack Generation", description: "Auto-generates quarterly board risk presentations.", bullets: ["PDF/PPT export", "Board narrative", "Action items"], icon: CheckCircle2 },
    ],
    industryTabs: [
      { label: "Listed Companies", challenges: ["TCFD/ESG disclosure", "Audit committee requirements", "Shareholder reporting"], riskExposure: ["Disclosure liability", "Governance failure", "Reputational damage"], relatedPlatforms: ["Regulatory Intelligence", "Client Portal", "Risk Feed"] },
      { label: "Private Equity", challenges: ["LP risk reporting", "Portfolio-wide visibility", "Fund lifecycle tracking"], riskExposure: ["LP dissatisfaction", "Portfolio concentration", "Exit risk"], relatedPlatforms: ["Risk DNA Mapper", "M&A Due Diligence", "Client Portal"] },
      { label: "Banking", challenges: ["ICAAP/ILAAP reporting", "Risk appetite framework", "Board risk committee"], riskExposure: ["Capital adequacy", "Liquidity risk", "Governance fines"], relatedPlatforms: ["Regulatory Intelligence", "Counterparty Assessment", "Risk Intelligence Aggregator"] },
      { label: "Conglomerates", challenges: ["Aggregated risk view", "Business unit comparison", "Strategic risk alignment"], riskExposure: ["Concentration risk", "Reporting gaps", "Strategic misalignment"], relatedPlatforms: ["Risk Intelligence Aggregator", "Client Portal", "Risk DNA Mapper"] },
    ],
    relatedModules: ["client-portal", "risk-feed", "risk-intelligence-aggregator"],
    relatedRiskSlugs: ["d-o-personal-liability", "regulatory-compliance-failure", "business-interruption"],
    relatedSolutionSlugs: ["d-o", "professional-indemnity-2", "claims-advocacy"],
    useCases: [
      "Quarterly board reporting",
      "Risk committee presentations",
      "Audit committee updates",
    ],
  },

  "api-integrations": {
    slug: "api-integrations",
    title: "TRUSTFLOW API Integrations",
    subtitle: "RESTful APIs for seamless system connectivity",
    category: "Data & Analytics",
    icon: Cpu,
    color: "#0052CC",
    heroImage: "https://images.unsplash.com/photo-1518103241174-ebb0c2b2e1e5?q=80&w=2070&auto=format&fit=crop",
    description: "Comprehensive RESTful APIs enabling seamless integration of TRUSTFLOW platform capabilities with enterprise systems, partner platforms, and third-party applications.",
    features: [
      "Risk diagnostic API endpoints",
      "Contract analysis API",
      "Claims status API",
      "Policy data API",
      "Risk intelligence feed API",
      "Document verification API",
    ],
    capabilities: [
      "OAuth 2.0 authentication",
      "Rate limiting and throttling",
      "OpenAPI 3.0 documentation",
      "Webhook notifications",
      "White-label embedding options",
    ],
    businessBenefits: [
      "Automated risk assessment workflows",
      "Embedded insurance offerings",
      "Reduced manual data entry",
    ],
    kpiMetrics: [
      { value: "OAuth2", label: "Security Standard", icon: Lock },
      { value: "99.9%", label: "API Uptime SLA", icon: Activity },
      { value: "OpenAPI", label: "3.0 Documented", icon: CheckCircle2 },
      { value: "<100ms", label: "Response Latency", icon: Zap },
    ],
    capabilityCards: [
      { title: "Risk Assessment APIs", description: "Programmatic access to all risk scoring engines.", bullets: ["Diagnostic endpoint", "Score retrieval", "Batch processing"], icon: Target },
      { title: "Webhook Notifications", description: "Real-time push events for risk alerts and changes.", bullets: ["Event subscription", "Payload customization", "Retry logic"], icon: Bell },
      { title: "White-Label Embedding", description: "Embed TRUSTFLOW capabilities in partner platforms.", bullets: ["iFrame embedding", "Branded UI", "Custom domain support"], icon: Layers },
      { title: "OpenAPI Documentation", description: "Full 3.0 spec documentation with sandbox testing.", bullets: ["Interactive docs", "Code samples", "Sandbox environment"], icon: Cpu },
    ],
    industryTabs: [
      { label: "InsurTech", challenges: ["Real-time underwriting data", "Policy issuance automation", "Claims triage"], riskExposure: ["Data latency", "Integration failure", "API downtime"], relatedPlatforms: ["Risk Diagnostic Engine", "Client Portal", "Risk Feed"] },
      { label: "Banks & Lenders", challenges: ["CRM risk scoring integration", "Loan origination automation", "KYC enrichment"], riskExposure: ["Compliance miss", "Slow credit decision", "Data quality"], relatedPlatforms: ["Counterparty Assessment", "Regulatory Intelligence", "Risk Diagnostic Engine"] },
      { label: "Enterprise Procurement", challenges: ["Supplier risk scoring in ERP", "Contract risk at signature", "PO approval automation"], riskExposure: ["Supplier default", "Contractual liability", "Audit trail gap"], relatedPlatforms: ["Supply Chain Monitor", "Contract Intelligence", "Counterparty Assessment"] },
      { label: "Technology Platforms", challenges: ["Embedded insurance features", "Risk-as-a-service delivery", "Multi-tenant architecture"], riskExposure: ["Feature liability", "Data isolation", "Scaling failures"], relatedPlatforms: ["Risk Diagnostic Engine", "Client Portal", "Risk Intelligence Aggregator"] },
    ],
    relatedModules: ["client-portal", "executive-dashboards", "risk-intelligence-aggregator"],
    relatedRiskSlugs: ["ransomware", "regulatory-compliance-failure", "business-interruption"],
    relatedSolutionSlugs: ["cyber-first-party", "professional-indemnity-2", "business-interruption"],
    useCases: [
      "Procurement platform integration",
      "CRM risk scoring automation",
      "Partner platform embedding",
    ],
  },
};

export const ALL_PLATFORM_SLUGS = Object.keys(platformData);