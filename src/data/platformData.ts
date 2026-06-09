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
  description?: string;
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
  recommendedArchitecture: string[];
  businessBenefits: string[];
  useCases: string[];
  relatedPlatforms: string[];
  relatedRisks: string[];
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
      { label: "Technology", challenges: ["AI liability and autonomous system risk", "Cloud concentration and systemic failure", "Rapid product innovation outpacing risk controls", "Supply chain backdoor vulnerabilities"], riskExposure: ["Ransomware and supply chain attacks", "Outage liability from SaaS failures", "Regulatory investigation and defense costs", "Intellectual property theft"], recommendedArchitecture: ["Multi-cloud redundancy with automated failover", "Zero-trust security model implementation", "AI model governance and audit trails", "Cyber first-party and third-party liability stack"], businessBenefits: ["Reduced cyber premium through demonstrated maturity", "Board-ready risk visibility and reporting", "Accelerated underwriting cycles", "Comprehensive supply chain resilience"], useCases: ["Series C fintech IPO readiness assessment", "SaaS platform vendor due diligence", "Technology sector risk benchmarking"], relatedPlatforms: ["Cyber Intelligence", "Contract Intelligence", "Regulatory Intelligence"], relatedRisks: ["Ransomware Attack", "Data Breach", "Regulatory Investigation", "Business Interruption"] },
      { label: "Financial Services", challenges: ["Capital adequacy under stress scenarios", "Systemic cyber and contagion risk", "Multi-jurisdictional regulatory complexity", "Real-time fraud and FTF exposure"], riskExposure: ["Data breach of customer records", "Advice liability and suitability claims", "AML/KYC regulatory penalties", "Funds transfer fraud (SWIFT threats)"], recommendedArchitecture: ["Enterprise cyber insurance with regulatory defense", "D&O tower with Side A DIC coverage", "Professional indemnity for advisory services", "Parametric trigger for liquidity events"], businessBenefits: ["Regulatory defense cost coverage", "Rapid liquidity access via parametric triggers", "Balance sheet protection from tail events", "Shareholder value preservation"], useCases: ["Banking sector cyber stress testing", "Fintech regulatory compliance program", "Asset manager D&O placement"], relatedPlatforms: ["Counterparty Assessment", "M&A Due Diligence", "Regulatory Intelligence"], relatedRisks: ["Regulatory Investigation & Fines", "Data Privacy & Protection", "D&O Personal Liability", "Business Email Compromise"] },
      { label: "Manufacturing", challenges: ["Global supply chain vulnerability", "Equipment breakdown and extended downtime", "Product liability and recall scenarios", "OT/IT convergence security gaps"], riskExposure: ["Property damage and business interruption", "Supply chain disruption at Tier-N", "Product defect and recall claims", "Industrial espionage and IP theft"], recommendedArchitecture: ["Property + BI with 36-month indemnity", "Supply chain risk monitoring platform", "Contingent BI for unnamed suppliers", "Product liability with recall cost coverage"], businessBenefits: ["Minimized production downtime through BI coverage", "Supplier risk visibility and early warning", "Rapid claims payout for operational continuity", "Regulatory recall cost management"], useCases: ["Automotive semiconductor shortage response", "Manufacturing sector due diligence", "Tier-2 supplier financial distress screening"], relatedPlatforms: ["Supply Chain Monitor", "Risk DNA Mapper", "Climate Scenario"], relatedRisks: ["Supply Chain Failure", "Equipment Breakdown", "Product Liability", "Natural Catastrophe"] },
      { label: "Healthcare", challenges: ["Patient data privacy and HIPAA compliance", "Clinical trial liability and FDA scrutiny", "Medical device and pharmaceutical recall", "Connected device and telehealth security"], riskExposure: ["HIPAA breach notification fines", "Operational shutdown from ransomware", "Patient data sale on dark web", "FDA investigation and enforcement"], recommendedArchitecture: ["Healthcare cyber with HIPAA defense coverage", "Medical malpractice and clinical trial PI", "Product liability for device manufacturers", "Regulatory defense for FDA investigations"], businessBenefits: ["Protected patient trust and brand equity", "Rapid incident response with forensics coverage", "Clinical trial continuity assurance", "Multi-jurisdictional compliance support"], useCases: ["Pharma proactive threat briefing", "Hospital ransomware response planning", "Medical device cybersecurity assessment"], relatedPlatforms: ["Regulatory Intelligence", "Contract Intelligence", "Cyber Due Diligence"], relatedRisks: ["Medical Malpractice", "Data Breach", "FDA Investigation", "Clinical Trial Liability"] },
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
      { label: "Private Equity", challenges: ["Portfolio risk aggregation across holdings", "Deal sourcing blind spots and hidden liabilities", "Exit risk from undisclosed exposures", "LP liability and reporting requirements"], riskExposure: ["Hidden liabilities in target companies", "Management risk and key person dependency", "Environmental liability from acquisitions", "Warranty breach and IP infringement"], recommendedArchitecture: ["M&A Due Diligence + W&I insurance stack", "Contract Intelligence for portfolio screening", "Risk DNA Mapper for ongoing monitoring", "D&O and EPL for fund governance"], businessBenefits: ["Complete risk picture before first client meeting", "Accurate underwriting with hidden exposure identification", "Board visibility into evolving portfolio risk", "Accelerated deal execution with certainty"], useCases: ["Prospective client risk profile preparation", "Underwriting risk assessment", "Quarterly board risk reporting", "50-target screening and ranking"], relatedPlatforms: ["M&A Due Diligence", "Counterparty Assessment", "Contract Intelligence"], relatedRisks: ["M&A Transaction Risk", "Regulatory Compliance Failure", "D&O Personal Liability"] },
      { label: "Technology", challenges: ["IP risk and patent litigation exposure", "Talent concentration and key-man dependency", "Regulatory change across 150+ jurisdictions", "Cyber debt from M&A roll-up strategy"], riskExposure: ["Patent litigation and IP infringement", "Key-man dependency on CTO/founder", "GDPR and emerging AI Act fines", "Inherited cyber vulnerabilities from acquisitions"], recommendedArchitecture: ["Cyber Due Diligence pre-acquisition", "Contract Intelligence for IP and SaaS terms", "Regulatory Intelligence for compliance tracking", "D&O with securities defense coverage"], businessBenefits: ["IP portfolio risk quantification before deals", "Cyber debt identification at acquisition", "Multi-jurisdictional regulatory compliance", "Board-level risk intelligence and reporting"], useCases: ["Tech acquisition cybersecurity assessment", "SaaS company contract review", "Quarterly board risk reporting"], relatedPlatforms: ["Cyber Intelligence", "Regulatory Intelligence", "Risk Diagnostic Engine"], relatedRisks: ["Patent Litigation", "Data Breach", "Regulatory Investigation", "Cyber Attack"] },
      { label: "Banking", challenges: ["Counterparty exposure across loan portfolio", "Loan book risk from economic stress", "Systemic linkage and contagion risk", "Regulatory capital adequacy requirements"], riskExposure: ["Credit default from stressed obligors", "Contagion risk from interconnected exposures", "Regulatory capital shortfall under stress", "Covenant breach and impairment charges"], recommendedArchitecture: ["Counterparty Assessment for continuous monitoring", "Regulatory Intelligence for capital rule changes", "Risk DNA Mapper for portfolio aggregation", "Political Monitor for sovereign risk"], businessBenefits: ["9-month early warning before customer bankruptcy", "Supply chain disruption prevention", "Proactive commercial borrower engagement", "Portfolio-level risk aggregation and reporting"], useCases: ["Bank loan portfolio monitoring", "SME borrower financial screening", "Systemic risk stress testing"], relatedPlatforms: ["Counterparty Assessment", "Risk Diagnostic Engine", "Political Monitor"], relatedRisks: ["Credit Default", "Contagion Risk", "Regulatory Capital Shortfall", "Sovereign Default"] },
      { label: "Infrastructure", challenges: ["Long-tenor risk over 15-30 year horizon", "Climate exposure to physical assets", "Political risk from concession agreements", "Geographic concentration amplifying events"], riskExposure: ["Asset stranding from climate transition", "Catastrophe loss from extreme weather", "Concession breach and contract termination", "Currency inconvertibility and war damage"], recommendedArchitecture: ["Climate Scenario for physical/transition modeling", "Political Monitor for 195-country risk scoring", "Risk DNA Mapper for project-level analysis", "Long-tenor property/BI with parametric triggers"], businessBenefits: ["25-year climate risk visibility for assets", "Political risk mitigation across jurisdictions", "Infrastructure capital planning integration", "Lender-compliant risk reporting and modeling"], useCases: ["Global infrastructure risk assessment", "Climate scenario analysis for asset portfolio", "Political risk monitoring for concessions"], relatedPlatforms: ["Climate Scenario", "Political Monitor", "Supply Chain Monitor"], relatedRisks: ["Natural Catastrophe", "Climate Change — Physical Risk", "Climate Change — Transition Risk", "Political Violence"] },
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
      { label: "Technology", challenges: ["Rapid attack surface growth across SaaS and APIs", "SaaS dependency creating shadow IT risk", "AI poisoning and model manipulation", "Supply chain backdoor in third-party code"], riskExposure: ["Zero-day exploits targeting cloud infrastructure", "API vulnerabilities in microservices", "Supply chain backdoors in dependencies", "Insider threat and privilege escalation"], recommendedArchitecture: ["Cyber first-party with incident response retainer", "Supply chain cyber monitoring platform", "Dark web and credential leak monitoring", "Regulatory defense for GDPR/DPDP/AI Act"], businessBenefits: ["Proactive defense against targeted threats", "Faster incident response with pre-built playbooks", "Reduced cyber premiums through demonstrated maturity", "Board-level threat intelligence and reporting"], useCases: ["Manufacturing ransomware targeting alert", "Financial services dark web credential discovery", "Technology sector threat benchmarking"], relatedPlatforms: ["Cyber Due Diligence", "Risk Diagnostic Engine", "Regulatory Intelligence"], relatedRisks: ["Ransomware Attack", "Data Breach", "Supply Chain Cyber Attack", "Business Interruption"] },
      { label: "Financial Services", challenges: ["Funds-to-funds (FTF) fraud at scale", "SWIFT network and correspondent banking threats", "Insider risk and privilege abuse", "Regulatory scrutiny of cyber resilience"], riskExposure: ["Funds transfer fraud via SWIFT compromise", "Account takeover and credential stuffing", "Data exfiltration from core banking systems", "Regulatory sanctions and AML penalties"], recommendedArchitecture: ["Cyber first-party with FTF coverage extension", "Counterparty Assessment for vendor risk", "Regulatory Intelligence for compliance monitoring", "D&O for regulatory defense and board liability"], businessBenefits: ["FTF fraud detection and rapid containment", "Vendor cyber risk visibility across supply chain", "Regulatory compliance assurance and documentation", "Executive confidence through board-ready reporting"], useCases: ["Banking sector cyber stress testing", "Fintech vendor cybersecurity evaluation", "Financial institution incident response drill"], relatedPlatforms: ["Cyber Due Diligence", "Counterparty Assessment", "Regulatory Intelligence"], relatedRisks: ["Ransomware Attack", "Data Breach", "Funds Transfer Fraud", "Regulatory Investigation"] },
      { label: "Healthcare", challenges: ["PHI aggregation across multiple systems", "Connected medical device security gaps", "Ransomware specifically targeting healthcare", "Telehealth platform expansion creating new exposure"], riskExposure: ["HIPAA breach notification fines", "Operational shutdown from ransomware", "Patient data sale on dark web", "FDA investigation and enforcement actions"], recommendedArchitecture: ["Healthcare-specific cyber with HIPAA defense", "Medical device security assessment platform", "Business interruption for operational shutdown", "Regulatory defense for FDA and state AG actions"], businessBenefits: ["Patient trust and brand protection", "Rapid incident response with forensics coverage", "Clinical trial continuity assurance", "Multi-state regulatory defense coordination"], useCases: ["Hospital ransomware response planning", "Pharma proactive threat briefing", "Medical device cybersecurity assessment"], relatedPlatforms: ["Cyber Due Diligence", "Regulatory Intelligence", "Risk Diagnostic Engine"], relatedRisks: ["Ransomware Attack", "Data Breach", "Medical Device Security", "HIPAA Violation"] },
      { label: "Manufacturing", challenges: ["OT/IT convergence creating new attack surface", "Industrial espionage targeting IP and processes", "Ransomware on PLCs and SCADA systems", "Third-party code and firmware supply chain"], riskExposure: ["Production halt from ransomware on OT systems", "IP theft of manufacturing processes and designs", "Safety incident from compromised control systems", "Supply chain compromise via firmware backdoors"], recommendedArchitecture: ["Cyber first-party with OT coverage extension", "Supply chain cyber monitoring for firmware", "Business interruption for production shutdown", "Product liability for compromised output"], businessBenefits: ["Production continuity through BI coverage", "OT-specific threat detection and response", "Supply chain firmware integrity verification", "IP protection through contract and cyber stack"], useCases: ["Manufacturing ransomware targeting alert", "OT security assessment for smart factory", "Supply chain firmware risk monitoring"], relatedPlatforms: ["Supply Chain Monitor", "Risk Diagnostic Engine", "Cyber Due Diligence"], relatedRisks: ["Ransomware Attack", "Supply Chain Cyber Attack", "Industrial Espionage", "Business Interruption"] },
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
      { label: "Conglomerates", challenges: ["Cross-business risk aggregation across diverse holdings", "Interdependency risk between business units", "Board reporting complexity for multi-entity portfolios", "Strategic risk alignment across sectors"], riskExposure: ["Cascading failures from correlated business units", "Reputational contagion from subsidiary events", "Capital concentration in single sectors", "Strategic misalignment from siloed risk data"], recommendedArchitecture: ["Risk Intelligence Aggregator for multi-domain fusion", "Risk DNA Mapper for enterprise-level aggregation", "Executive Dashboards for consolidated board reporting", "Client Portal for multi-entity management"], businessBenefits: ["Single pane of glass for all enterprise risk signals", "Early warning of converging risks across business units", "Reduced noise with personalized filtering by sector", "Board-ready executive briefings at all cadences"], useCases: ["Geopolitical supply chain cyber convergence detection", "Daily executive risk briefing for conglomerate C-suite", "Multi-dimensional risk convergence alerting"], relatedPlatforms: ["Executive Dashboards", "Risk DNA Mapper", "Client Portal"], relatedRisks: ["Strategic Misalignment", "Reputational Damage", "Concentration Risk", "Cascading Failure"] },
      { label: "Financial Services", challenges: ["Systemic risk signals across interconnected markets", "Regulatory convergence across 150+ jurisdictions", "Market event correlation in real-time", "Counterparty risk from interconnected institutions"], riskExposure: ["Systemic collapse from correlated defaults", "Regulatory pile-on from multiple jurisdictions", "Counterparty contagion through exposure chains", "Market loss from delayed signal response"], recommendedArchitecture: ["Risk Intelligence Aggregator for market signal fusion", "Counterparty Assessment for continuous monitoring", "Regulatory Intelligence for multi-jurisdictional tracking", "Political Monitor for sovereign risk correlation"], businessBenefits: ["Real-time multi-domain signal correlation", "Counterparty early warning at 9-month horizon", "Regulatory convergence detection and alerting", "Systemic risk stress testing and visualization"], useCases: ["Financial institution multi-domain risk monitoring", "Regulatory convergence alert response", "Counterparty systemic risk assessment"], relatedPlatforms: ["Counterparty Assessment", "Political Monitor", "Regulatory Intelligence"], relatedRisks: ["Systemic Collapse", "Regulatory Pile-On", "Counterparty Contagion", "Market Crash"] },
      { label: "Energy", challenges: ["Geopolitical supply risk across producing regions", "Climate transition signals affecting asset values", "Cyber-physical convergence in grid operations", "Commodity price volatility from multiple drivers"], riskExposure: ["Supply disruption from geopolitical events", "Stranded assets from climate policy", "Grid attack from cyber-physical convergence", "Price collapse from demand destruction"], recommendedArchitecture: ["Risk Intelligence Aggregator for multi-domain fusion", "Climate Scenario for transition risk modeling", "Political Monitor for 195-country risk scoring", "Cyber Intelligence for OT security monitoring"], businessBenefits: ["Multi-domain risk signal correlation for energy sector", "Climate transition risk quantification for strategy", "Geopolitical supply risk early warning", "Cyber-physical convergence detection and response"], useCases: ["Energy sector geopolitical risk monitoring", "Climate transition portfolio risk assessment", "Grid cyber-physical threat detection"], relatedPlatforms: ["Political Monitor", "Climate Scenario", "Cyber Intelligence"], relatedRisks: ["Supply Disruption", "Stranded Asset Risk", "Grid Cyber Attack", "Price Collapse"] },
      { label: "Retail", challenges: ["Consumer sentiment shifts affecting demand", "Supply chain signals across global networks", "Fraud pattern changes in payment systems", "Seasonal volatility and inventory risk"], riskExposure: ["Demand collapse from consumer sentiment", "Inventory disruption from supply chain", "Payment fraud from evolving attack vectors", "Store closure from franchise distress"], recommendedArchitecture: ["Risk Intelligence Aggregator for demand signal fusion", "Supply Chain Monitor for logistics tracking", "Counterparty Assessment for supplier scoring", "Risk Feed for retail-specific alert configuration"], businessBenefits: ["Consumer demand signal integration for planning", "Supply chain early warning and alternative routing", "Supplier financial health monitoring at Tier-N", "Fraud pattern detection and prevention alerting"], useCases: ["Retail demand signal monitoring and response", "Supply chain disruption early warning", "Payment fraud pattern detection"], relatedPlatforms: ["Supply Chain Monitor", "Counterparty Assessment", "Cyber Intelligence"], relatedRisks: ["Demand Collapse", "Supply Chain Disruption", "Payment Fraud", "Inventory Shortfall"] },
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
      { label: "Private Equity", challenges: ["Thousands of target contracts per deal", "Hidden liabilities and indemnity stack complexity", "IP ownership gaps and encumbrances", "Environmental liability from legacy operations"], riskExposure: ["Uncapped warranty breach exposure", "IP infringement from acquired assets", "Environmental indemnity and remediation costs", "Employment and tax contingent liabilities"], recommendedArchitecture: ["M&A Due Diligence + Contract Intelligence stack", "W&I insurance for breach quantification", "Environmental liability screening platform", "Professional indemnity for post-close claims"], businessBenefits: ["70% reduction in legal review workload", "$45M invisible exposure identification in PE deals", "Automated contractor agreement screening", "Accelerated deal timeline through certainty"], useCases: ["SaaS company acquisition contract analysis", "Technology vendor contract review", "Construction subcontractor agreement screening"], relatedPlatforms: ["M&A Due Diligence", "Counterparty Assessment", "Risk DNA Mapper"], relatedRisks: ["M&A Transaction Risk", "Regulatory Compliance Failure", "D&O Personal Liability", "Contract Risk Exposure"] },
      { label: "Construction", challenges: ["Subcontractor indemnity chain complexity", "Back-to-back contract alignment issues", "Delay penalty clauses with liquidated damages", "Insurance adequacy gaps across project tiers"], riskExposure: ["Liquidated damages for project delays", "Uncovered delay risk from weather events", "Insurance adequacy gaps in subcontractor programs", "Environmental liability from site contamination"], recommendedArchitecture: ["Contract Intelligence for indemnity mapping", "Supply Chain Monitor for subcontractor risk", "Regulatory Intelligence for compliance tracking", "Professional indemnity for design team protection"], businessBenefits: ["Full subcontractor risk visibility before signing", "Automated insurance certificate tracking", "Delay risk quantification from contract terms", "Regulatory compliance assurance across jurisdictions"], useCases: ["Construction subcontractor agreement screening", "Project contract risk benchmarking", "Subcontractor insurance compliance monitoring"], relatedPlatforms: ["Risk Diagnostic Engine", "M&A Due Diligence", "Regulatory Intelligence"], relatedRisks: ["Project Delay", "Supply Chain Failure", "Professional Indemnity Claim", "Environmental Liability"] },
      { label: "Technology", challenges: ["SaaS liability terms creating unlimited exposure", "Data processing agreements with regulatory risk", "IP ownership disputes in open source", "Source code escrow and licensing failures"], riskExposure: ["Unlimited liability from uncapped SaaS terms", "GDPR and data transfer fines", "Source code escrow failure in vendor bankruptcy", "IP infringement from third-party components"], recommendedArchitecture: ["Contract Intelligence for clause extraction", "Cyber Due Diligence for vendor assessment", "Regulatory Intelligence for compliance monitoring", "Cyber insurance with contractual liability coverage"], businessBenefits: ["Unlimited liability exposure identification", "Automated contract risk scoring at machine speed", "Insurance gap detection before signing", "Regulatory compliance assurance in data agreements"], useCases: ["SaaS vendor contract review and negotiation", "Technology M&A contract diligence", "Data processing agreement audit"], relatedPlatforms: ["Cyber Due Diligence", "Regulatory Intelligence", "Risk Diagnostic Engine"], relatedRisks: ["Data Breach", "GDPR Violation", "IP Infringement", "Contract Risk Exposure"] },
      { label: "Healthcare", challenges: ["Vendor BAAs with inadequate protection", "Clinical trial agreements with liability gaps", "Device licensing with recall obligations", "Multi-site contract management complexity"], riskExposure: ["PHI indemnity failure from vendor breach", "Trial liability from adverse events", "Recall obligation without insurance backstop", "Regulatory non-compliance from contract gaps"], recommendedArchitecture: ["Contract Intelligence for BAA review", "Regulatory Intelligence for FDA/HIPAA tracking", "Cyber Due Diligence for vendor assessment", "Medical malpractice with clinical trial coverage"], businessBenefits: ["PHI indemnity identification before signing", "Automated contract risk scoring for BAAs", "Clinical trial liability quantification", "Regulatory compliance assurance in vendor contracts"], useCases: ["Hospital vendor contract risk review", "Pharma clinical trial agreement diligence", "Medical device licensing agreement analysis"], relatedPlatforms: ["Regulatory Intelligence", "M&A Due Diligence", "Cyber Due Diligence"], relatedRisks: ["HIPAA Violation", "Clinical Trial Liability", "Medical Malpractice", "Product Liability"] },
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
      { label: "Private Equity", challenges: ["Fast deal timelines with compressed DD windows", "Multi-target screening across portfolio pipeline", "LP liability and disclosure requirements", "Environmental liability from legacy operations"], riskExposure: ["Warranty breach from undisclosed issues", "Environmental liability and remediation costs", "Litigation tail from pre-acquisition actions", "Tax contingency from prior periods"], recommendedArchitecture: ["M&A Due Diligence for 72-hour comprehensive screening", "Contract Intelligence for agreement analysis", "Risk DNA Mapper for target risk profiling", "W&I insurance for breach quantification"], businessBenefits: ["72-hour turnaround for complete risk profile", "$78M average exposure identification per deal", "50-target screening and ranking capability", "W&I-ready report for insurance placement"], useCases: ["Healthcare technology $500M acquisition screening", "Manufacturing sector acquisition due diligence", "Pre-sale vendor due diligence for PE portfolio"], relatedPlatforms: ["Contract Intelligence", "Risk DNA Mapper", "Counterparty Assessment"], relatedRisks: ["M&A Transaction Risk", "Environmental Liability", "Warranty Breach", "Litigation Tail"] },
      { label: "Healthcare", challenges: ["FDA compliance gap in target portfolio", "Clinical data integrity and trial conduct", "Reimbursement risk from coding practices", "Product liability from acquired assets"], riskExposure: ["FDA enforcement and consent decree", "PHI indemnity failure from data breach", "Revenue recognition irregularities", "Clinical trial adverse event liability"], recommendedArchitecture: ["M&A Due Diligence for healthcare-specific screening", "Contract Intelligence for BAA and clinical trial agreements", "Regulatory Intelligence for FDA/EMA tracking", "Cyber Due Diligence for inherited cyber risk"], businessBenefits: ["FDA compliance gap identification before close", "Clinical data integrity verification", "Reimbursement risk quantification", "Cyber debt assessment at acquisition"], useCases: ["Healthcare technology acquisition due diligence", "Pharma clinical trial agreement review", "Hospital system portfolio screening"], relatedPlatforms: ["Regulatory Intelligence", "Contract Intelligence", "Cyber Due Diligence"], relatedRisks: ["FDA Investigation", "HIPAA Violation", "Clinical Trial Liability", "Revenue Recognition Fraud"] },
      { label: "Technology", challenges: ["IP ownership gaps and encumbrance risk", "Cyber debt from security incidents", "SaaS metric risk from overstated ARR", "Open source license compliance issues"], riskExposure: ["IP infringement from acquired code", "Data breach inherited from target", "ARR overstatement from aggressive accounting", "SaaS liability from uncapped customer contracts"], recommendedArchitecture: ["M&A Due Diligence for IP and cyber assessment", "Cyber Due Diligence for inherited vulnerabilities", "Contract Intelligence for SaaS and IP terms", "Risk DNA Mapper for ongoing portfolio monitoring"], businessBenefits: ["IP portfolio risk quantification before signing", "Cyber debt identification at acquisition", "SaaS metric validation and ARR verification", "Open source license compliance audit"], useCases: ["Technology M&A IP and cyber diligence", "SaaS company acquisition screening", "Tech portfolio quarterly risk reporting"], relatedPlatforms: ["Cyber Due Diligence", "Contract Intelligence", "Risk Diagnostic Engine"], relatedRisks: ["IP Infringement", "Data Breach", "SaaS Liability", "Revenue Recognition Fraud"] },
      { label: "Manufacturing", challenges: ["Environmental liability from legacy operations", "Product recall history across product lines", "Supply chain risk from key suppliers", "OT/IT security gaps in operational technology"], riskExposure: ["Remediation costs from soil and water contamination", "Recall obligations from design or manufacturing defects", "OEM liability from defective components", "Industrial espionage targeting trade secrets"], recommendedArchitecture: ["M&A Due Diligence for environmental and product screening", "Supply Chain Monitor for key supplier assessment", "Contract Intelligence for OEM and distribution agreements", "Cyber Due Diligence for OT security assessment"], businessBenefits: ["Environmental liability quantification before close", "Product recall history and cost projection", "Supply chain risk visibility across acquired network", "OT security posture assessment at acquisition"], useCases: ["Manufacturing acquisition environmental screening", "Industrial company product liability review", "Supply chain risk assessment for acquisition targets"], relatedPlatforms: ["Supply Chain Monitor", "Contract Intelligence", "Regulatory Intelligence"], relatedRisks: ["Environmental Liability", "Product Recall", "Supply Chain Failure", "Industrial Espionage"] },
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
      { label: "Banking", challenges: ["Loan book concentration in stressed sectors", "SME borrower monitoring at scale", "Covenant compliance and early warning", "Systemic linkage and contagion risk"], riskExposure: ["Credit default from stressed obligors", "Capital adequacy impairment under stress", "Impairment charges from downgrade waves", "Counterparty contagion from interconnected exposures"], recommendedArchitecture: ["Counterparty Assessment for continuous monitoring", "Risk DNA Mapper for portfolio aggregation", "Regulatory Intelligence for capital rule tracking", "Trade credit insurance for receivables protection"], businessBenefits: ["9-month early warning before customer bankruptcy", "Supply chain disruption prevention", "Proactive commercial borrower engagement", "Portfolio-level risk aggregation and reporting"], useCases: ["Bank loan portfolio monitoring", "SME borrower financial screening", "Systemic risk stress testing"], relatedPlatforms: ["Risk DNA Mapper", "Regulatory Intelligence", "Risk Diagnostic Engine"], relatedRisks: ["Credit Default", "Contagion Risk", "Regulatory Capital Shortfall", "Sovereign Default"] },
      { label: "Manufacturing", challenges: ["Tier-1 supplier financial distress monitoring", "OEM customer dependency creating concentration risk", "Payment terms risk in extended supply chains", "Geographic concentration amplifying geopolitical events"], riskExposure: ["Supply disruption from Tier-1 failure", "Revenue concentration from single OEM customer", "Receivables default from distressed suppliers", "Logistics blockade from trade war escalation"], recommendedArchitecture: ["Supply Chain Monitor for multi-tier visibility", "Counterparty Assessment for supplier scoring", "Political Monitor for geographic risk", "Business interruption for operational shutdown"], businessBenefits: ["Tier-N supplier visibility for proactive management", "Financial distress early warning for key suppliers", "Alternative supplier identification during disruption", "Receivables protection through trade credit integration"], useCases: ["Manufacturer customer distress detection", "Retailer supplier financial screening", "Bank loan portfolio monitoring"], relatedPlatforms: ["Supply Chain Monitor", "Risk Diagnostic Engine", "Political Monitor"], relatedRisks: ["Supply Chain Failure", "Customer Concentration", "Receivables Default", "Geopolitical Risk"] },
      { label: "Retail", challenges: ["Supplier base financial health volatility", "Seasonal cash flow stress and inventory risk", "Franchise partner operational risk", "Consumer sentiment and demand volatility"], riskExposure: ["Inventory shortfall from supplier disruption", "Store closure contagion from franchise failures", "Franchisor default and brand damage", "Demand collapse from consumer sentiment shifts"], recommendedArchitecture: ["Counterparty Assessment for supplier monitoring", "Supply Chain Monitor for inventory risk", "Risk Intelligence Aggregator for demand signals", "Business interruption for revenue protection"], businessBenefits: ["Real-time supplier financial health tracking", "Seasonal cash flow stress early warning", "Franchise risk visibility across portfolio", "Consumer demand signal integration for planning"], useCases: ["Retailer supplier financial screening", "Franchise portfolio risk monitoring", "Seasonal inventory risk planning"], relatedPlatforms: ["Supply Chain Monitor", "Risk Intelligence Aggregator", "Risk Diagnostic Engine"], relatedRisks: ["Supply Chain Failure", "Consumer Demand Collapse", "Franchisor Default", "Inventory Disruption"] },
      { label: "Energy", challenges: ["Offtaker credit risk in long-term contracts", "Joint venture partner financial stability", "EPC contractor performance and insolvency risk", "Geopolitical supply risk in volatile regions"], riskExposure: ["Offtaker default on take-or-pay contracts", "JV dissolution from partner distress", "Project delay from EPC contractor failure", "Supply disruption from geopolitical instability"], recommendedArchitecture: ["Counterparty Assessment for offtaker scoring", "Political Monitor for operating jurisdiction risk", "Climate Scenario for physical asset exposure", "M&A Due Diligence for JV partner assessment"], businessBenefits: ["Offtaker credit monitoring with early warning", "Joint venture risk visibility before commitment", "EPC contractor financial health tracking", "Geopolitical supply risk quantification"], useCases: ["Energy offtaker credit risk monitoring", "Infrastructure JV partner due diligence", "Mining investment political risk evaluation"], relatedPlatforms: ["Political Monitor", "Climate Scenario", "M&A Due Diligence"], relatedRisks: ["Offtaker Default", "Project Delay", "Political Violence", "Supply Disruption"] },
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
      { label: "Private Equity", challenges: ["Pre-acquisition cyber debt identification", "Inherited vulnerabilities from target systems", "Ransom risk at close from breach exposure", "Post-close integration failure from architecture gaps"], riskExposure: ["Post-acquisition breach from inherited vulnerabilities", "Integration failure from incompatible security architectures", "Regulatory fines from data breach notification laws", "Reputational damage from inherited cyber incidents"], recommendedArchitecture: ["Cyber Due Diligence for external assessment", "M&A Due Diligence for transaction risk integration", "Contract Intelligence for cyber warranty terms", "Cyber first-party insurance with prior acts coverage"], businessBenefits: ["Zero internal access required for assessment", "48-hour turnaround for complete cyber profile", "$15M average price adjustment from findings", "Bottom decile cyber posture identification"], useCases: ["Tech acquisition cybersecurity assessment", "Cyber insurance underwriting for portfolio", "Cloud service vendor evaluation at investment"], relatedPlatforms: ["M&A Due Diligence", "Contract Intelligence", "Cyber Intelligence"], relatedRisks: ["Ransomware Attack", "Data Breach", "Regulatory Fine", "Post-Acquisition Breach"] },
      { label: "Technology", challenges: ["Rapid asset growth creating exposure sprawl", "Open source exposure in codebase", "Third-party code and dependency risk", "API security in microservices architecture"], riskExposure: ["Supply chain compromise via third-party code", "Data exfiltration from misconfigured APIs", "API breach from unpatched endpoints", "Open source license compliance violation"], recommendedArchitecture: ["Cyber Due Diligence for external attack surface", "Cyber Intelligence for real-time threat monitoring", "Contract Intelligence for vendor cyber terms", "Regulatory Intelligence for compliance tracking"], businessBenefits: ["External attack surface discovery without access", "API and microservice vulnerability identification", "Third-party code supply chain risk assessment", "Open source license compliance verification"], useCases: ["Technology M&A cyber due diligence", "Vendor cybersecurity assessment program", "Cloud service provider security evaluation"], relatedPlatforms: ["Cyber Intelligence", "Risk Diagnostic Engine", "Regulatory Intelligence"], relatedRisks: ["Supply Chain Attack", "API Breach", "Open Source Violation", "Data Exfiltration"] },
      { label: "Financial Services", challenges: ["Third-party vendor cyber risk across supply chain", "Core banking system exposure to nation-state actors", "SWIFT network security and fraud prevention", "Regulatory scrutiny of cyber resilience posture"], riskExposure: ["Vendor breach contagion through interconnected systems", "Funds transfer fraud via SWIFT compromise", "Regulatory sanctions for inadequate cyber controls", "Data exfiltration from core banking systems"], recommendedArchitecture: ["Cyber Due Diligence for vendor assessment", "Counterparty Assessment for vendor risk monitoring", "Regulatory Intelligence for cyber rule tracking", "Cyber first-party with FTF coverage extension"], businessBenefits: ["Third-party vendor cyber risk quantification", "SWIFT network security assessment", "Regulatory compliance assurance and documentation", "Vendor cybersecurity ranking and monitoring"], useCases: ["Financial institution vendor cyber assessment", "Banking sector cyber stress testing", "Fintech vendor security evaluation"], relatedPlatforms: ["Counterparty Assessment", "Cyber Intelligence", "Regulatory Intelligence"], relatedRisks: ["Vendor Breach Contagion", "Funds Transfer Fraud", "Regulatory Sanction", "Data Exfiltration"] },
      { label: "Healthcare", challenges: ["Medical device security and patch management", "EHR system exposure across enterprise", "Telehealth platform risk from rapid expansion", "Connected IoMT device attack surface growth"], riskExposure: ["PHI data breach from EHR compromise", "Ransomware on medical devices causing operational halt", "HIPAA enforcement and notification penalties", "Patient safety incident from device compromise"], recommendedArchitecture: ["Cyber Due Diligence for medical device assessment", "Regulatory Intelligence for HIPAA/FDA tracking", "Cyber first-party with HIPAA defense coverage", "Business interruption for operational shutdown"], businessBenefits: ["Medical device external vulnerability assessment", "EHR security posture evaluation", "IoMT attack surface discovery", "HIPAA compliance verification and documentation"], useCases: ["Hospital cybersecurity assessment program", "Medical device vendor security evaluation", "Telehealth platform risk assessment"], relatedPlatforms: ["Cyber Intelligence", "Regulatory Intelligence", "Risk Diagnostic Engine"], relatedRisks: ["PHI Data Breach", "Medical Device Ransomware", "HIPAA Violation", "Patient Safety Incident"] },
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
      { label: "Automotive", challenges: ["Just-in-time dependency creating line-stoppage risk", "Semiconductor concentration in limited foundries", "EV transition disrupting traditional supply chains", "Quality recall cascading across models"], riskExposure: ["Line stoppage from single-source component failure", "Component shortage from geopolitical disruption", "OEM penalty from delivery failure", "Product recall from supply chain defect"], recommendedArchitecture: ["Multi-tier mapping with alternative supplier ID", "Counterparty Assessment for Tier-1 monitoring", "Political Monitor for geographic risk overlay", "Parametric triggers for logistics disruption"], businessBenefits: ["Real-time supplier distress early warning", "Alternative supplier qualification in advance", "Supply chain resilience through visibility", "Reduced line-stoppage risk through BI coverage"], useCases: ["Automotive semiconductor risk monitoring", "Tier 2 supplier financial distress detection", "EV supply chain redesign risk assessment"], relatedPlatforms: ["Counterparty Assessment", "Political Monitor", "Risk Intelligence Aggregator"], relatedRisks: ["Supply Chain Failure", "Component Shortage", "Business Interruption", "Product Recall"] },
      { label: "Technology", challenges: ["TSMC concentration risk for advanced chips", "Rare earth dependency for hardware production", "Software supply chain via open source", "Third-party firmware and hardware backdoors"], riskExposure: ["Chip shortage from foundry disruption", "Materials access risk from export controls", "Backdoor attacks in third-party firmware", "Software supply chain via compromised dependencies"], recommendedArchitecture: ["Supply Chain Monitor for Tier-N visibility", "Cyber Due Diligence for firmware assessment", "Political Monitor for export control tracking", "Counterparty Assessment for key supplier scoring"], businessBenefits: ["Multi-tier supplier visibility and risk scoring", "Firmware integrity verification before deployment", "Geopolitical supply risk quantification", "Alternative sourcing triggered automatically"], useCases: ["Technology hardware supply chain risk monitoring", "Firmware security assessment program", "Semiconductor sourcing diversification planning"], relatedPlatforms: ["Cyber Intelligence", "Political Monitor", "Risk Diagnostic Engine"], relatedRisks: ["Supply Chain Cyber Attack", "Chip Shortage", "Hardware Backdoor", "Export Control Violation"] },
      { label: "Food & Agri", challenges: ["Climate-driven crop failure and yield volatility", "Port disruption from extreme weather and labor", "Cold chain integrity for perishable goods", "Pesticide and contamination regulatory risk"], riskExposure: ["Harvest shortfall from drought or flood", "Logistics breakdown from port closure", "Product spoilage from cold chain breach", "Regulatory recall from contamination event"], recommendedArchitecture: ["Climate Scenario for crop yield modeling", "Supply Chain Monitor for logistics tracking", "Parametric triggers for weather events", "Product liability with recall cost coverage"], businessBenefits: ["Climate-driven harvest risk quantification", "Port disruption early warning and alternative routing", "Cold chain integrity monitoring and alerting", "Recall cost management and rapid payout"], useCases: ["Agricultural crop failure preparation", "Food supply chain disruption response", "Cold chain integrity monitoring program"], relatedPlatforms: ["Climate Scenario", "Political Monitor", "Counterparty Assessment"], relatedRisks: ["Natural Catastrophe", "Crop Failure", "Cold Chain Breach", "Product Contamination"] },
      { label: "Pharmaceuticals", challenges: ["API sourcing concentration in limited geographies", "GMP compliance upstream at supplier facilities", "Cold chain breach for temperature-sensitive drugs", "Clinical trial supply chain complexity"], riskExposure: ["Drug shortage from API supply disruption", "Regulatory recall from GMP non-compliance", "Contamination liability from cold chain failure", "Trial delay from supply chain disruption"], recommendedArchitecture: ["Supply Chain Monitor for API sourcing", "Regulatory Intelligence for GMP tracking", "Cold chain monitoring with parametric triggers", "Clinical trial PI for supply delay claims"], businessBenefits: ["API supplier diversification through risk visibility", "GMP compliance monitoring across supply chain", "Cold chain integrity assurance for drug products", "Clinical trial timeline protection through BI coverage"], useCases: ["Pharmaceutical supply chain risk monitoring", "Cold chain integrity program design", "API sourcing diversification strategy"], relatedPlatforms: ["Regulatory Intelligence", "Counterparty Assessment", "Cyber Due Diligence"], relatedRisks: ["Drug Shortage", "GMP Non-Compliance", "Cold Chain Breach", "Clinical Trial Delay"] },
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
      { label: "Mining & Resources", challenges: ["Operating in high-risk and remote jurisdictions", "Nationalization and expropriation risk", "Community conflict and social license to operate", "Resource nationalism and export restrictions"], riskExposure: ["Expropriation of assets without compensation", "License revocation from regulatory change", "Force majeure from civil unrest and war", "Environmental liability from legacy operations"], recommendedArchitecture: ["Political Risk insurance for expropriation coverage", "Political Monitor for 195-country risk scoring", "Climate Scenario for environmental impact modeling", "Supply Chain Monitor for logistics disruption"], businessBenefits: ["Real-time political risk scoring for 195 countries", "Sanctions and export control compliance monitoring", "Election risk modeling for investment timing", "Terrorism and political violence coverage quantification"], useCases: ["Sub-Saharan African mining investment evaluation", "US sanctions entity screening program", "Southeast Asian infrastructure political risk assessment"], relatedPlatforms: ["Supply Chain Monitor", "Risk DNA Mapper", "Climate Scenario"], relatedRisks: ["Expropriation", "Political Violence", "Currency Inconvertibility", "Sanctions Violation"] },
      { label: "Infrastructure", challenges: ["Long-tenor political exposure over 20-30 years", "Concession risk from government contract breach", "Local content law and employment requirements", "Currency inconvertibility and transfer restriction"], riskExposure: ["Contract termination from political change", "Currency inconvertibility trapping capital offshore", "War damage to infrastructure assets", "Regulatory change increasing operating costs"], recommendedArchitecture: ["Political Risk insurance for concession protection", "Climate Scenario for physical asset risk modeling", "Counterparty Assessment for government partner risk", "Long-tenor property/BI for operational coverage"], businessBenefits: ["Concession risk quantified before bid submission", "Political risk pricing integrated into project finance", "Currency risk hedging through insurance structure", "Regulatory change early warning for compliance"], useCases: ["Infrastructure concession risk assessment", "PPP project political risk evaluation", "Cross-border infrastructure investment analysis"], relatedPlatforms: ["Climate Scenario", "Counterparty Assessment", "Regulatory Intelligence"], relatedRisks: ["Political Violence", "Expropriation", "Contract Termination", "Currency Inconvertibility"] },
      { label: "Financial Services", challenges: ["Sovereign risk exposure across bond portfolios", "Correspondent banking and cross-border payment risk", "Sanctions compliance across 500+ lists", "Geopolitical event correlation with market risk"], riskExposure: ["Sovereign default from fiscal stress and default", "AML penalties for sanctions screening failure", "Asset freeze from OFAC and EU sanctions", "Correspondent banking relationship termination"], recommendedArchitecture: ["Political Monitor for sovereign risk scoring", "Counterparty Assessment for bank and counterparty risk", "Regulatory Intelligence for sanctions tracking", "Political Risk insurance for sovereign exposure"], businessBenefits: ["Real-time sovereign risk scoring for 195 countries", "Sanctions list monitoring across 500+ sources", "Election risk modeling for emerging market timing", "Political violence scoring for asset protection"], useCases: ["Sovereign bond portfolio risk monitoring", "Emerging market banking exposure assessment", "Cross-border payment sanctions screening program"], relatedPlatforms: ["Counterparty Assessment", "Regulatory Intelligence", "Risk DNA Mapper"], relatedRisks: ["Sovereign Default", "Sanctions Violation", "AML Penalty", "Asset Freeze"] },
      { label: "Manufacturing", challenges: ["Factory location in politically volatile regions", "Trade war exposure across multiple jurisdictions", "Cross-border logistics vulnerability to disruption", "Supply chain concentration in high-risk geographies"], riskExposure: ["Import tariffs from trade war escalation", "Factory seizure from nationalization actions", "Logistics blockade from conflict or sanctions", "Supply chain disruption from political instability"], recommendedArchitecture: ["Political Monitor for operating country risk scoring", "Supply Chain Monitor for geographic concentration mapping", "Trade credit insurance for receivables protection", "Political Risk insurance for asset protection"], businessBenefits: ["Geographic supply chain risk quantification and mapping", "Political event early warning for operations", "Trade policy change impact assessment", "Supply chain diversification triggered by risk signals"], useCases: ["Manufacturing geopolitical risk assessment", "Supply chain political risk mapping program", "Factory location political risk evaluation"], relatedPlatforms: ["Supply Chain Monitor", "Risk Intelligence Aggregator", "Regulatory Intelligence"], relatedRisks: ["Trade War Escalation", "Factory Seizure", "Logistics Blockade", "Sanctions Violation"] },
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
      { label: "Financial Services", challenges: ["MiFID II updates requiring operational change", "Basel IV capital rules tightening requirements", "AML/KYC changes across 150+ jurisdictions", "Emerging AI and crypto regulatory frameworks"], riskExposure: ["Regulatory fine under GDPR, HIPAA, CCPA", "License suspension from compliance failure", "Capital shortfall from Basel IV miscalculation", "Antitrust and anti-bribery fines reaching billions"], recommendedArchitecture: ["Regulatory Intelligence for real-time monitoring", "D&O liability for executive protection", "Professional indemnity for advisory services", "Cyber regulatory defense coverage extension"], businessBenefits: ["Multi-jurisdictional compliance assurance", "Defense cost coverage for regulatory actions", "Regulatory navigation support from alerts", "Consent decree management and remediation tracking"], useCases: ["Financial institution cybersecurity requirements", "Multinational data privacy compliance program", "AI company liability endorsement update"], relatedPlatforms: ["Risk Diagnostic Engine", "Counterparty Assessment", "Risk Intelligence Aggregator"], relatedRisks: ["Regulatory Investigation & Fines", "Data Privacy & Protection", "AI Governance Failure", "Antitrust Violation"] },
      { label: "Technology", challenges: ["GDPR and DPDP evolution across markets", "AI Act compliance for model deployment", "Digital Services Act content moderation", "Emerging crypto and stablecoin frameworks"], riskExposure: ["Data transfer fines under GDPR Chapter V", "AI liability exposure from model decisions", "Platform regulation and content liability", "Cross-border data flow disruption"], recommendedArchitecture: ["Regulatory Intelligence for 150+ jurisdiction tracking", "Cyber first-party with regulatory defense", "Professional indemnity for advisory liability", "Contract Intelligence for SaaS terms and DPAs"], businessBenefits: ["Real-time regulatory change detection", "Compliance gap analysis with remediation roadmap", "Multi-jurisdictional filing coordination", "Penalty avoidance through proactive compliance"], useCases: ["AI company liability endorsement update", "Multinational data privacy compliance program", "Technology sector regulatory benchmarking"], relatedPlatforms: ["Cyber Intelligence", "Cyber Due Diligence", "Contract Intelligence"], relatedRisks: ["GDPR Violation", "AI Governance Failure", "Data Breach", "Platform Regulation"] },
      { label: "Pharmaceuticals", challenges: ["FDA/EMA rule changes affecting drug pipelines", "Pharmacovigilance updates requiring new reporting", "Clinical trial regulations across jurisdictions", "Post-market surveillance requirements"], riskExposure: ["Product recall mandate from safety signals", "Market access loss from regulatory non-compliance", "Trial suspension from protocol violations", "Adverse event reporting penalties"], recommendedArchitecture: ["Regulatory Intelligence for FDA/EMA tracking", "M&A Due Diligence for target compliance", "Product liability with recall cost coverage", "Clinical trial PI for research liability"], businessBenefits: ["FDA and EMA change detection in real-time", "Clinical trial compliance documentation", "Product recall cost management and advocacy", "Market access preservation through compliance"], useCases: ["Pharmaceutical regulatory compliance program", "Drug safety signal monitoring", "Clinical trial regulatory filing management"], relatedPlatforms: ["Risk Diagnostic Engine", "M&A Due Diligence", "Contract Intelligence"], relatedRisks: ["FDA Investigation", "Product Recall", "Clinical Trial Liability", "Regulatory Compliance Failure"] },
      { label: "Energy", challenges: ["Carbon pricing evolution across jurisdictions", "TCFD disclosure mandates for public companies", "Grid code updates for renewable integration", "Methane and emissions reporting requirements"], riskExposure: ["Carbon penalty from emissions exceeding caps", "Stranded asset disclosure and write-downs", "License compliance failure for operations", "Climate transition risk materialization"], recommendedArchitecture: ["Climate Scenario for transition risk modeling", "Regulatory Intelligence for carbon tracking", "Political Monitor for policy change risk", "Parametric insurance for weather event liquidity"], businessBenefits: ["Carbon price scenario modeling for strategy", "TCFD-aligned disclosure generation", "Grid code compliance tracking and alerting", "Climate transition risk quantification for investors"], useCases: ["Energy sector carbon pricing compliance", "TCFD disclosure preparation", "Renewable energy regulatory compliance program"], relatedPlatforms: ["Climate Scenario", "Risk DNA Mapper", "Political Monitor"], relatedRisks: ["Carbon Penalty", "Stranded Asset Risk", "Climate Change — Transition Risk", "Regulatory Compliance Failure"] },
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
      { label: "Renewable Energy", challenges: ["Irradiance variability impacting revenue forecasts", "Flood risk to ground-mounted solar assets", "Grid curtailment reducing effective generation", "Technology obsolescence over 25-year asset life"], riskExposure: ["Revenue shortfall from below-threshold irradiance", "Physical damage from extreme weather events", "Connection delay from grid queue congestion", "Stranded asset from policy or technology change"], recommendedArchitecture: ["Climate Scenario for irradiance and flood modeling", "Parametric weather triggers for rapid payout", "Delay in Start-Up coverage for construction", "Production guarantee for revenue protection"], businessBenefits: ["25-year climate risk visibility for project finance", "Parametric payout within 14 days of storm", "Construction delay coverage for debt service", "TCFD-aligned disclosure for investor requirements"], useCases: ["Global food company agricultural risk", "Fossil fuel company transition planning", "City government infrastructure assessment"], relatedPlatforms: ["Supply Chain Monitor", "Risk DNA Mapper", "Political Monitor"], relatedRisks: ["Natural Catastrophe", "Revenue Shortfall", "Connection Delay", "Stranded Asset"] },
      { label: "Real Estate", challenges: ["Coastal flood risk accelerating with sea level rise", "Heat stress on building systems and occupancy", "Stranded asset risk from carbon transition", "Insurance premium escalation in high-risk zones"], riskExposure: ["Asset value decline from climate physical risk", "Insurance premium spike or coverage withdrawal", "Stranded capital from transition regulation", "Flood inundation from extreme precipitation"], recommendedArchitecture: ["Climate Scenario for asset-level physical risk", "Counterparty Assessment for tenant credit risk", "Risk Diagnostic Engine for portfolio screening", "Property + BI with flood and wind coverage"], businessBenefits: ["Asset-level climate risk scoring for portfolio", "Insurance premium stress testing and planning", "Transition risk quantification for investors", "Physical adaptation cost estimation for CapEx"], useCases: ["Real estate portfolio climate risk assessment", "Commercial property insurance optimization", "Coastal asset transition planning"], relatedPlatforms: ["Counterparty Assessment", "Risk Diagnostic Engine", "Regulatory Intelligence"], relatedRisks: ["Natural Catastrophe", "Flood Inundation", "Stranded Asset Risk", "Insurance Coverage Gap"] },
      { label: "Agriculture", challenges: ["Drought and crop failure from changing precipitation", "Extreme heat events reducing yield and quality", "Water scarcity from competing demand", "Pest and disease pressure from warmer temperatures"], riskExposure: ["Harvest loss from drought or flood", "Water access risk from regulatory restriction", "Supply chain break from logistics disruption", "Price collapse from global oversupply"], recommendedArchitecture: ["Climate Scenario for yield probability modeling", "Parametric weather triggers for rapid payout", "Supply Chain Monitor for logistics tracking", "Crop insurance with multi-peril coverage"], businessBenefits: ["Climate-driven yield risk quantification", "Parametric payout within days of weather event", "Supply chain disruption early warning", "Water scarcity risk mapping for irrigation planning"], useCases: ["Agricultural crop failure preparation", "Food supply chain disruption response", "Agri portfolio climate risk assessment"], relatedPlatforms: ["Supply Chain Monitor", "Political Monitor", "Risk Intelligence Aggregator"], relatedRisks: ["Drought", "Flood", "Crop Failure", "Water Scarcity"] },
      { label: "Infrastructure", challenges: ["Long-tenor climate exposure over 30-50 years", "Sea level rise threatening coastal assets", "Extreme weather events increasing in frequency", "Grid code updates requiring system adaptation"], riskExposure: ["Bridge/road damage from extreme weather", "Flood inundation from storm surge", "Stranded investment from policy change", "Asset value decline from physical risk materialization"], recommendedArchitecture: ["Climate Scenario for 25-year physical modeling", "Political Monitor for regulatory change tracking", "Counterparty Assessment for concession partner risk", "Long-tenor property/BI with parametric triggers"], businessBenefits: ["25-year climate risk visibility for asset planning", "Political risk pricing for concession agreements", "Physical adaptation cost estimation for CapEx", "Lender-compliant risk reporting and modeling"], useCases: ["Infrastructure climate risk assessment", "Transport asset adaptation planning", "Utility grid resilience investment analysis"], relatedPlatforms: ["Political Monitor", "Counterparty Assessment", "Risk DNA Mapper"], relatedRisks: ["Natural Catastrophe", "Sea Level Rise", "Grid Failure", "Stranded Investment"] },
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
      { label: "Corporates", challenges: ["Multi-policy complexity across subsidiaries", "Multi-entity management across jurisdictions", "Renewal visibility across global programs", "Claims tracking across multiple carriers"], riskExposure: ["Coverage gaps from policy misalignment", "Policy lapse from fragmented management", "Claims delay from manual tracking", "Document loss from decentralized storage"], recommendedArchitecture: ["Client Portal for centralized policy management", "Claims advocacy for multi-carrier coordination", "Regulatory Intelligence for compliance tracking", "Risk Feed for real-time risk intelligence"], businessBenefits: ["Single pane of glass for all policies and claims", "Faster claims processing through digital tracking", "Improved broker-carrier communication", "Centralized risk management view across entities"], useCases: ["Daily claims status review across program", "Policy document access and renewal tracking", "Risk intelligence consumption for risk teams"], relatedPlatforms: ["Executive Dashboards", "Risk Feed", "Risk Intelligence Aggregator"], relatedRisks: ["Coverage Gap", "Claims Delay", "Policy Lapse", "Regulatory Compliance Failure"] },
      { label: "Private Equity", challenges: ["Portfolio-wide policy visibility across holdings", "Claims tracking across multiple entities", "LP reporting requirements for risk exposure", "Fund lifecycle management of insurance programs"], riskExposure: ["Unclaimed losses from poor tracking", "Portfolio coverage gaps from rapid M&A", "Reporting gaps from fragmented data", "D&O coverage gaps in portfolio companies"], recommendedArchitecture: ["Client Portal for portfolio-wide visibility", "M&A Due Diligence for rapid target screening", "Risk DNA Mapper for ongoing portfolio monitoring", "D&O and EPL for fund and portfolio coverage"], businessBenefits: ["Portfolio-level risk aggregation and reporting", "LP-friendly risk reporting dashboards", "Accelerated deal execution with ready intelligence", "Fund lifecycle insurance program management"], useCases: ["Portfolio-wide risk reporting for LPs", "Pre-exit insurance program review", "New acquisition rapid risk assessment"], relatedPlatforms: ["Executive Dashboards", "M&A Due Diligence", "Risk DNA Mapper"], relatedRisks: ["Coverage Gap", "Portfolio Concentration", "M&A Transaction Risk", "D&O Personal Liability"] },
      { label: "Financial Services", challenges: ["Regulatory document retention requirements", "Audit trail requirements for risk decisions", "Claims audit and scrutiny from regulators", "Multi-jurisdictional compliance documentation"], riskExposure: ["Non-compliance from missing documentation", "Document loss from inadequate systems", "Claims fraud from insufficient oversight", "Regulatory penalty from audit failure"], recommendedArchitecture: ["Client Portal with blockchain document vault", "Regulatory Intelligence for compliance tracking", "Risk Diagnostic Engine for audit-ready reporting", "Executive Dashboards for board risk reporting"], businessBenefits: ["Audit-ready document trail with blockchain verification", "Regulatory compliance assurance and documentation", "Claims oversight and fraud prevention", "Board-level risk reporting and governance"], useCases: ["Regulatory document retention compliance", "Audit trail generation for risk decisions", "Claims oversight and review program"], relatedPlatforms: ["Regulatory Intelligence", "Risk Diagnostic Engine", "Executive Dashboards"], relatedRisks: ["Regulatory Compliance Failure", "Document Loss", "Claims Fraud", "Governance Failure"] },
      { label: "Healthcare", challenges: ["Multi-site policy management across facilities", "High claims volume from clinical operations", "Regulatory document needs for compliance", "HIPAA and patient data in claims processing"], riskExposure: ["Claims backlog from manual processing", "Policy confusion from multiple programs", "Compliance gaps from fragmented documentation", "HIPAA violation from insecure document handling"], recommendedArchitecture: ["Client Portal for multi-site policy management", "Claims advocacy for high-volume clinical claims", "Regulatory Intelligence for HIPAA tracking", "Cyber Due Diligence for vendor compliance"], businessBenefits: ["Multi-site policy visibility and management", "Faster claims processing through automation", "Regulatory compliance documentation and tracking", "HIPAA-compliant document handling"], useCases: ["Multi-site policy management and renewal", "Claims volume reporting and tracking", "Regulatory compliance documentation"], relatedPlatforms: ["Risk Diagnostic Engine", "Regulatory Intelligence", "Risk Feed"], relatedRisks: ["HIPAA Violation", "Claims Backlog", "Policy Confusion", "Regulatory Compliance Failure"] },
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
      { label: "C-Suite Executives", challenges: ["Information overload from multi-domain signals", "Prioritizing critical signals from noise", "Board reporting speed and quality requirements", "Strategic risk alignment with business objectives"], riskExposure: ["Missed early warnings from signal volume", "Reactive risk posture from delayed intelligence", "Reputational lag from slow stakeholder communication", "Strategic misalignment from poor risk visibility"], recommendedArchitecture: ["Executive Dashboards for board-ready visualization", "Risk Intelligence Aggregator for signal fusion", "Risk Feed for personalized executive briefing", "Risk Diagnostic Engine for comprehensive assessment"], businessBenefits: ["Executive briefings at daily, weekly, and monthly cadence", "4-tier severity scoring for rapid prioritization", "95% noise reduction through intelligent filtering", "Board-ready format with PDF and PPT export"], useCases: ["CFO daily risk briefing consumption", "CEO weekly strategic risk review", "Board quarterly risk committee presentation"], relatedPlatforms: ["Executive Dashboards", "Client Portal", "Risk Intelligence Aggregator"], relatedRisks: ["Strategic Misalignment", "Reputational Damage", "Board Liability", "Missed Early Warning"] },
      { label: "Risk Teams", challenges: ["Multi-domain monitoring across cyber, climate, geopolitical", "Alert fatigue from high-volume signal feeds", "Cross-department coordination and escalation", "Regulatory reporting requirements across jurisdictions"], riskExposure: ["Coverage gaps from domain silos", "Slow response from alert fatigue", "Siloed intelligence preventing holistic view", "Compliance miss from missed regulatory signals"], recommendedArchitecture: ["Risk Intelligence Aggregator for multi-domain fusion", "Risk Feed for team-specific alert configuration", "Regulatory Intelligence for compliance tracking", "Supply Chain Monitor for operational risk"], businessBenefits: ["Multi-domain signal correlation and fusion", "Custom alert rules reducing alert fatigue", "Cross-department escalation and coordination", "Regulatory compliance assurance through monitoring"], useCases: ["Risk team proactive action on emerging signals", "Regulatory alert triage and response", "Cross-functional risk committee coordination"], relatedPlatforms: ["Risk Intelligence Aggregator", "Client Portal", "Regulatory Intelligence"], relatedRisks: ["Coverage Gap", "Regulatory Compliance Failure", "Slow Response", "Intelligence Silo"] },
      { label: "Financial Services", challenges: ["Regulatory alert volume across 150+ jurisdictions", "Market event monitoring in real-time", "Counterparty signal integration", "Capital adequacy and liquidity risk tracking"], riskExposure: ["Compliance miss from missed regulatory change", "Market loss from slow signal response", "Counterparty default from insufficient monitoring", "Capital adequacy breach from risk mispricing"], recommendedArchitecture: ["Risk Feed with regulatory alert configuration", "Counterparty Assessment for continuous monitoring", "Regulatory Intelligence for rule change tracking", "Risk Intelligence Aggregator for market signal fusion"], businessBenefits: ["Real-time regulatory alert delivery", "Counterparty risk early warning at 9-month horizon", "Market event correlation and impact assessment", "Capital risk quantification for ICAAP/ILAAP"], useCases: ["Financial institution regulatory alert monitoring", "Market event risk assessment and response", "Counterparty credit risk early warning"], relatedPlatforms: ["Regulatory Intelligence", "Counterparty Assessment", "Political Monitor"], relatedRisks: ["Regulatory Compliance Failure", "Counterparty Default", "Market Loss", "Capital Adequacy Breach"] },
      { label: "Manufacturing", challenges: ["Supply chain signal volume across Tier-N", "Geopolitical monitoring for sourcing regions", "Weather event tracking for logistics", "Equipment health and operational risk signals"], riskExposure: ["Production halt from supply chain disruption", "Logistics disruption from extreme weather", "Input cost spike from commodity volatility", "Equipment failure from deferred maintenance"], recommendedArchitecture: ["Risk Feed with supply chain signal filters", "Supply Chain Monitor for multi-tier visibility", "Climate Scenario for weather risk modeling", "Political Monitor for sourcing region stability"], businessBenefits: ["Supply chain signal prioritization and alerting", "Geopolitical early warning for sourcing decisions", "Weather event impact assessment for logistics", "Operational risk visibility across production network"], useCases: ["Manufacturing supply chain risk monitoring", "Geopolitical risk alert for sourcing regions", "Weather event logistics disruption planning"], relatedPlatforms: ["Supply Chain Monitor", "Political Monitor", "Climate Scenario"], relatedRisks: ["Supply Chain Failure", "Production Halt", "Logistics Disruption", "Input Cost Spike"] },
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
      { label: "Listed Companies", challenges: ["TCFD and ESG disclosure requirements intensifying", "Audit committee risk oversight expectations", "Shareholder reporting on emerging risks", "Regulatory disclosure timelines across jurisdictions"], riskExposure: ["Disclosure liability from incomplete reporting", "Governance failure from inadequate oversight", "Reputational damage from risk event surprise", "Shareholder litigation from material risk omission"], recommendedArchitecture: ["Executive Dashboards for board risk visualization", "Risk Intelligence Aggregator for multi-domain signals", "Risk Diagnostic Engine for comprehensive assessment", "Climate Scenario for TCFD-aligned reporting"], businessBenefits: ["TCFD-aligned disclosure auto-generation", "Board-level risk literacy and visualization", "Insurance ROI demonstration through metrics", "Peer benchmarking against industry sector"], useCases: ["Quarterly board reporting on risk posture", "Audit committee risk oversight presentation", "Shareholder ESG and risk disclosure"], relatedPlatforms: ["Regulatory Intelligence", "Client Portal", "Risk Feed"], relatedRisks: ["Disclosure Liability", "Governance Failure", "Reputational Damage", "Shareholder Litigation"] },
      { label: "Private Equity", challenges: ["LP risk reporting across portfolio holdings", "Portfolio-wide risk visibility across sectors", "Fund lifecycle tracking of risk evolution", "Exit risk assessment and buyer due diligence"], riskExposure: ["LP dissatisfaction from poor risk communication", "Portfolio concentration from undetected correlation", "Exit risk from undisclosed emerging risks", "Fund valuation impact from risk mispricing"], recommendedArchitecture: ["Risk DNA Mapper for portfolio aggregation", "M&A Due Diligence for exit readiness", "Executive Dashboards for LP reporting", "Client Portal for LP self-service access"], businessBenefits: ["Portfolio-wide risk aggregation by fund and sector", "LP-friendly risk reporting dashboards", "Fund lifecycle risk tracking and alerting", "Exit readiness through demonstrated risk management"], useCases: ["Quarterly LP risk reporting package", "Portfolio risk committee presentation", "Pre-exit risk assessment for buyer DD"], relatedPlatforms: ["Risk DNA Mapper", "M&A Due Diligence", "Client Portal"], relatedRisks: ["LP Dissatisfaction", "Portfolio Concentration", "Exit Risk", "Valuation Impact"] },
      { label: "Banking", challenges: ["ICAAP/ILAAP reporting requirements", "Risk appetite framework implementation", "Board risk committee oversight expectations", "Multi-entity portfolio risk aggregation"], riskExposure: ["Capital adequacy breach from risk underestimation", "Liquidity risk from correlated exposures", "Governance fines from inadequate oversight", "Reputational damage from risk event surprise"], recommendedArchitecture: ["Regulatory Intelligence for capital rule tracking", "Counterparty Assessment for credit risk", "Risk Intelligence Aggregator for signal fusion", "Executive Dashboards for board risk reporting"], businessBenefits: ["ICAAP/ILAAP-ready risk reporting", "Risk appetite framework visualization", "Board risk committee confidence and oversight", "Multi-entity portfolio aggregation and drill-down"], useCases: ["ICAAP/ILAAP annual stress reporting", "Board risk committee quarterly presentation", "Risk appetite framework monitoring"], relatedPlatforms: ["Regulatory Intelligence", "Counterparty Assessment", "Risk Intelligence Aggregator"], relatedRisks: ["Capital Adequacy Breach", "Liquidity Risk", "Governance Failure", "Regulatory Penalty"] },
      { label: "Conglomerates", challenges: ["Aggregated risk view across business units", "Business unit comparison and benchmarking", "Strategic risk alignment with corporate objectives", "Cross-border risk correlation and contagion"], riskExposure: ["Concentration risk from correlated business units", "Reporting gaps from siloed risk data", "Strategic misalignment from poor risk visibility", "Cascading failure from interconnected exposures"], recommendedArchitecture: ["Risk Intelligence Aggregator for cross-domain fusion", "Client Portal for multi-entity management", "Risk DNA Mapper for enterprise-level aggregation", "Executive Dashboards for consolidated reporting"], businessBenefits: ["Enterprise-level risk aggregation and visualization", "Business unit comparison and benchmarking", "Strategic risk alignment with corporate objectives", "Board-level confidence through comprehensive reporting"], useCases: ["Enterprise risk committee quarterly review", "Business unit risk benchmarking and ranking", "Strategic risk alignment assessment"], relatedPlatforms: ["Risk Intelligence Aggregator", "Client Portal", "Risk DNA Mapper"], relatedRisks: ["Concentration Risk", "Cascading Failure", "Strategic Misalignment", "Reporting Gap"] },
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
      { label: "InsurTech", challenges: ["Real-time underwriting data from multiple sources", "Policy issuance automation across carriers", "Claims triage and routing at scale", "Regulatory compliance across 150+ jurisdictions"], riskExposure: ["Data latency causing underwriting errors", "Integration failure from carrier API changes", "API downtime disrupting real-time quotes", "Regulatory non-compliance from missing data"], recommendedArchitecture: ["Risk Diagnostic API for embedded assessment", "OpenAPI 3.0 documentation for developer adoption", "Webhook notifications for real-time event handling", "OAuth 2.0 for secure partner authentication"], businessBenefits: ["Automated risk assessment at point of quote", "Embedded insurance offerings in partner platforms", "Reduced manual data entry and processing time", "White-label embedding with custom branding"], useCases: ["Procurement platform risk scoring integration", "CRM risk scoring automation for BFSI", "Partner platform embedded insurance features"], relatedPlatforms: ["Risk Diagnostic Engine", "Client Portal", "Risk Feed"], relatedRisks: ["Integration Failure", "Data Latency", "API Downtime", "Regulatory Compliance Failure"] },
      { label: "Banks & Lenders", challenges: ["CRM risk scoring integration across 150+ jurisdictions", "Loan origination automation and speed requirements", "KYC enrichment from multiple data sources", "Regulatory compliance for lending decisions"], riskExposure: ["Compliance miss from inadequate risk data", "Slow credit decision from manual processes", "Data quality issues from multiple sources", "Regulatory penalty from discriminatory lending"], recommendedArchitecture: ["Counterparty Assessment API for credit scoring", "Regulatory Intelligence API for compliance checks", "Risk Diagnostic API for loan risk assessment", "OpenAPI 3.0 for enterprise integration"], businessBenefits: ["Automated credit risk scoring at origination", "KYC enrichment from 200+ data sources", "Regulatory compliance assurance and documentation", "Real-time risk signal delivery for credit decisions"], useCases: ["Bank loan origination automation", "SME credit scoring from alternative data", "Regulatory compliance checking at point of lending"], relatedPlatforms: ["Counterparty Assessment", "Regulatory Intelligence", "Risk Diagnostic Engine"], relatedRisks: ["Credit Default", "Regulatory Compliance Failure", "Data Quality Issue", "Lending Discrimination"] },
      { label: "Enterprise Procurement", challenges: ["Supplier risk scoring integrated into ERP systems", "Contract risk assessment at point of signature", "Purchase order approval automation", "Multi-tier supply chain visibility"], riskExposure: ["Supplier default from poor financial health", "Contractual liability from unvetted terms", "Audit trail gap from manual processes", "Compliance failure from unapproved suppliers"], recommendedArchitecture: ["Supply Chain Monitor API for supplier risk", "Contract Intelligence API for clause extraction", "Counterparty Assessment API for financial scoring", "Webhook notifications for risk event alerts"], businessBenefits: ["Automated supplier risk scoring in procurement workflow", "Contract risk flags before PO approval", "Multi-tier supplier visibility in ERP", "Real-time risk alerts for procurement decisions"], useCases: ["Procurement platform supplier risk scoring", "ERP contract risk at signature", "PO approval automation with risk gates"], relatedPlatforms: ["Supply Chain Monitor", "Contract Intelligence", "Counterparty Assessment"], relatedRisks: ["Supplier Default", "Contractual Liability", "Audit Trail Gap", "Compliance Failure"] },
      { label: "Technology Platforms", challenges: ["Embedded insurance features in SaaS products", "Risk-as-a-service delivery to enterprise clients", "Multi-tenant architecture and data isolation", "Scaling risk engines for millions of transactions"], riskExposure: ["Feature liability from incorrect risk scoring", "Data isolation breach across tenants", "Scaling failures during peak demand", "Regulatory non-compliance in embedded insurance"], recommendedArchitecture: ["Risk Diagnostic API for embedded assessment", "Client Portal API for white-label delivery", "Risk Intelligence Aggregator for multi-tenant signals", "OAuth 2.0 with rate limiting for enterprise security"], businessBenefits: ["Risk-as-a-service delivery at scale", "Embedded insurance features in 10+ verticals", "White-label branding for partner platforms", "99.9% API uptime SLA for enterprise trust"], useCases: ["SaaS platform embedded risk assessment", "Marketplace vendor risk scoring", "Enterprise procurement integrated risk checks"], relatedPlatforms: ["Risk Diagnostic Engine", "Client Portal", "Risk Intelligence Aggregator"], relatedRisks: ["Scaling Failure", "Data Isolation Breach", "Feature Liability", "Regulatory Non-Compliance"] },
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