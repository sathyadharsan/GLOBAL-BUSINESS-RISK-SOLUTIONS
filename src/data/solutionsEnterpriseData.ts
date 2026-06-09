import { Shield, Target, Globe, TrendingUp, Activity, CheckCircle2, BarChart3, Layers, Building2, FileText } from "lucide-react";

export interface SolutionKPICard {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description: string;
}

export interface SolutionCapabilityCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bullets: string[];
}

export interface SolutionIndustryTabContent {
  industryChallenges: string[];
  industryRiskExposure: string[];
  recommendedOfferings: string[];
  relatedRisks: string[];
  relatedPlatforms: string[];
  industryBenefits: string[];
}

export interface SolutionIndustryTab {
  label: string;
  content: SolutionIndustryTabContent;
}

export interface SolutionFrameworkStep {
  title: string;
  description: string;
}

export interface SolutionBusinessImpact {
  title: string;
  description: string;
}

export interface SolutionRelatedCard {
  title: string;
  description: string;
  href?: string;
}

export interface SolutionIndustryMatrixItem {
  industry: string;
  applicability: string;
}

export interface SolutionProgramStructureItem {
  title: string;
  description: string;
  features: string[];
}

export interface SolutionEnterpriseData {
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    badge: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  kpis: SolutionKPICard[];
  capabilities: SolutionCapabilityCard[];
  industryTabs: SolutionIndustryTab[];
  framework: {
    title: string;
    subtitle: string;
    steps: SolutionFrameworkStep[];
  };
  businessImpact: SolutionBusinessImpact[];
  relatedRisks: SolutionRelatedCard[];
  relatedOfferings: SolutionRelatedCard[];
  relatedPlatforms: SolutionRelatedCard[];
  industryMatrix: SolutionIndustryMatrixItem[];
  globalProgramStructure: SolutionProgramStructureItem[];
  executiveCTA: {
    title: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
}

export const solutionsEnterpriseData: Record<string, SolutionEnterpriseData> = {
  "global-program-architecture": {
    slug: "global-program-architecture",
    hero: {
      title: "Global Program Architecture",
      subtitle: "Controlled master policy · DIC/DIL · Fronting · GIFT City captive",
      description: "Design and execution of complex multinational insurance programs ensuring global compliance and optimized risk retention.",
      heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
      badge: "Enterprise Risk Solutions",
      primaryCTA: "Request Consultation",
      secondaryCTA: "Download Framework",
    },
    kpis: [
      { icon: Globe, value: "150+", label: "Countries Covered", description: "Global reach across all major markets" },
      { icon: CheckCircle2, value: "99%", label: "Program Compliance", description: "Cross-border regulatory alignment" },
      { icon: Building2, value: "45+", label: "A++ Rated Carriers", description: "Top-tier capacity access" },
      { icon: Activity, value: "24/7", label: "Program Advisory", description: "Continuous expert support" },
    ],
    capabilities: [
      { icon: Layers, title: "Program Structuring", description: "Multi-line, multi-jurisdiction insurance programs optimized for enterprise scale and complexity.", bullets: ["Global Master Policies", "DIC/DIL Endorsements", "Carrier Optimization", "Limit Adequacy Modeling"] },
      { icon: Globe, title: "Fronting Network", description: "Leveraging top-tier local admitted paper while retaining risk centrally across jurisdictions.", bullets: ["Local Compliance", "Fronting Agreements", "Centralized Governance", "Tax Optimization"] },
      { icon: Shield, title: "Captive Integration", description: "Efficiently channeling risk back to corporate captives with domicile optimization.", bullets: ["GIFT City Access", "Bermuda Structures", "Singapore Cells", "Rent-a-Captive"] },
      { icon: BarChart3, title: "TCOR Optimization", description: "Total cost of risk analysis balancing retention, premium, and administrative efficiency.", bullets: ["Cost Benchmarking", "Retention Modeling", "Premium Allocation", "Claims Analytics"] },
    ],
    industryTabs: [
      {
        label: "Technology",
        content: {
          industryChallenges: ["Rapid global expansion outpacing insurance coordination", "Multi-jurisdiction cyber liability harmonization", "Cloud concentration across regulatory regimes"],
          industryRiskExposure: ["Cross-border data transfer regulatory fines", "SaaS liability across 30+ jurisdictions", "AI-generated content liability gaps"],
          recommendedOfferings: ["Global Program Architecture", "Cyber Insurance — First-Party", "Technology E&O"],
          relatedRisks: ["Cyber Risk", "Regulatory Investigation", "AI Governance Failure"],
          relatedPlatforms: ["Risk Diagnostic Engine", "Contract Intelligence", "Regulatory Intelligence"],
          industryBenefits: ["Unified global coverage", "Regulatory compliance at scale", "Centralized claims advocacy"],
        },
      },
      {
        label: "Manufacturing",
        content: {
          industryChallenges: ["Supply chain spanning 20+ countries with varying standards", "Consolidated property program with local admitted requirements", "BI synchronization across multi-site operations"],
          industryRiskExposure: ["Catastrophe aggregation across facilities", "Contingent BI from unnamed suppliers", "Product liability across distribution networks"],
          recommendedOfferings: ["Global Program Architecture", "Property All-Risks Insurance", "Contingent Business Interruption"],
          relatedRisks: ["Natural Catastrophe", "Supply Chain Risk", "Product Liability"],
          relatedPlatforms: ["Supply Chain Risk Visualizer", "Claims Velocity Dashboard", "Risk Intelligence Feed"],
          industryBenefits: ["Master program efficiency", "Local compliance assurance", "Unified claims handling"],
        },
      },
      {
        label: "Financial Services",
        content: {
          industryChallenges: ["Regulatory divergence across 50+ banking jurisdictions", "D&O tower coordination across listed entities", "Capital adequacy impact of insurance program design"],
          industryRiskExposure: ["Regulatory investigation across jurisdictions", "Cyber attack on global transaction systems", "Directors personal liability in multiple regimes"],
          recommendedOfferings: ["Global Program Architecture", "Directors & Officers Liability", "Cyber Insurance — Regulatory Defense"],
          relatedRisks: ["Regulatory Investigation", "Cyber Risk", "D&O Personal Liability"],
          relatedPlatforms: ["Regulatory Intelligence Platform", "Policy Intelligence Platform", "Executive Dashboard"],
          industryBenefits: ["Regulatory harmonization", "Capital-efficient structuring", "Global claims advocacy"],
        },
      },
      {
        label: "Energy",
        content: {
          industryChallenges: ["15-year concession alignment with insurance markets", "Construction delay risk across emerging markets", "Production guarantee across variable resource jurisdictions"],
          industryRiskExposure: ["Construction cost escalation in emerging economies", "Political risk across project jurisdictions", "Natural catastrophe in offshore locations"],
          recommendedOfferings: ["Global Program Architecture", "Long-Tenor Infrastructure", "Political Risk Insurance"],
          relatedRisks: ["Construction Risk", "Political Risk", "Natural Catastrophe"],
          relatedPlatforms: ["Climate Analytics Platform", "Parametric Risk Platform", "Supply Chain Risk Visualizer"],
          industryBenefits: ["Concession-compliant structuring", "Multi-year rate certainty", "Parametric triggers"],
        },
      },
      {
        label: "Healthcare",
        content: {
          industryChallenges: ["Multi-country clinical trial liability alignment", "Product recall coordination across supply chains", "HIPAA/GDPR/DPDP compliance across facilities"],
          industryRiskExposure: ["Clinical trial adverse events across jurisdictions", "Pharmaceutical recall in multiple markets", "Patient data breach notification obligations"],
          recommendedOfferings: ["Global Program Architecture", "Product Liability Insurance", "Cyber Insurance — Regulatory Defense"],
          relatedRisks: ["Product Liability", "Data Breach", "Regulatory Investigation"],
          relatedPlatforms: ["Regulatory Intelligence Platform", "Risk Diagnostic Engine", "Contract Intelligence"],
          industryBenefits: ["Unified clinical trial coverage", "Regulatory alignment", "Global recall response"],
        },
      },
    ],
    framework: {
      title: "Solution Architecture Framework",
      subtitle: "Four-phase methodology for designing and implementing enterprise global programs.",
      steps: [
        { title: "Assessment", description: "Comprehensive mapping of global exposures, local compliance requirements, and existing program gaps across all jurisdictions." },
        { title: "Strategy", description: "Design of master program structure, fronting network, captive integration, and DIC/DIL placement aligned to risk appetite." },
        { title: "Placement", description: "Coordinated carrier negotiations across A++ markets, local admitted placements, and reinsurance optimization." },
        { title: "Optimization", description: "Continuous TCOR monitoring, annual reinstatement reviews, and dynamic adjustment to evolving risk landscape." },
      ],
    },
    businessImpact: [
      { title: "Premium Efficiency", description: "Consolidated purchasing power across global operations reducing total cost of risk by 15-25% through master program leverage." },
      { title: "Regulatory Certainty", description: "Full compliance across 150+ jurisdictions eliminating penalty exposure and ensuring uninterrupted business operations." },
      { title: "Claims Velocity", description: "Centralized claims advocacy with local language capabilities reducing settlement time by 40% on average." },
      { title: "Balance Sheet Protection", description: "Optimized retention and transfer preserving enterprise value through catastrophic aggregation scenarios." },
    ],
    relatedRisks: [
      { title: "Regulatory Compliance Failure", description: "Multi-jurisdictional insurance and tax compliance across global operations requiring continuous monitoring.", href: "/risks/regulatory-compliance-failure" },
      { title: "Natural Catastrophe", description: "Aggregated property exposure across multiple geographies requiring parametric and reinsurance solutions.", href: "/risks/natural-catastrophe" },
      { title: "Currency Fluctuation", description: "Cross-border premium and claims settlement exposure requiring hedging and currency management.", href: "/risks/currency-fluctuation" },
      { title: "Political Risk", description: "Expropriation, currency inconvertibility, and political violence across emerging market operations.", href: "/risks/political-risk" },
    ],
    relatedOfferings: [
      { title: "Long-Tenor Infrastructure Programs", description: "15-year insurance alignment for concession projects and lender requirements.", href: "/solutions/long-tenor-infrastructure" },
      { title: "TCOR Analytics & Benchmarking", description: "Data-driven optimization of total cost of risk across the global program.", href: "/solutions/tcor-analytics" },
      { title: "Captive Insurance & ART", description: "Alternative risk transfer structures including GIFT City captive and ILS access.", href: "/solutions/captive-insurance" },
      { title: "Parametric Insurance Solutions", description: "Trigger-based risk transfer for rapid liquidity on catastrophe events.", href: "/offerings/parametric-insurance" },
    ],
    relatedPlatforms: [
      { title: "Risk Diagnostic Engine", description: "AI-powered assessment across 20 domains and 200+ risk categories with gap analysis.", href: "/platform/risk-diagnostic-engine" },
      { title: "Regulatory Intelligence Platform", description: "Real-time monitoring of 150+ jurisdictions with compliance alerts and filing support.", href: "/platform/regulatory-intelligence" },
      { title: "Contract Intelligence Platform", description: "Automated contract risk scoring, indemnification analysis, and insurance gap detection.", href: "/platform/contract-intelligence" },
      { title: "Executive Dashboard", description: "Board-level risk visibility with drill-down capabilities and TCOR tracking.", href: "/platform/executive-dashboard" },
    ],
    industryMatrix: [
      { industry: "Technology", applicability: "Global master program with cyber tower, D&O, and E&O coverage across 30+ jurisdictions" },
      { industry: "Manufacturing", applicability: "Consolidated property/BI program with parametric triggers and contingent BI mapping" },
      { industry: "Financial Services", applicability: "DIC/DIL layered program with regulatory defense and D&O Side A/B/C coverage" },
      { industry: "Energy & Infrastructure", applicability: "15-year locked programs with CAR/EAR, production guarantee, and political risk" },
      { industry: "Healthcare & Life Sciences", applicability: "Global clinical trial coverage with product liability and regulatory defense alignment" },
      { industry: "Retail & E-Commerce", applicability: "Multi-market property/BI program with cyber and supply chain contingent BI" },
      { industry: "Transportation & Logistics", applicability: "Fleet and cargo program with marine coverage and supply chain risk mapping" },
      { industry: "Agriculture & Environment", applicability: "Parametric weather triggers with crop insurance and pollution liability" },
    ],
    globalProgramStructure: [
      { title: "Local Program", description: "Single jurisdiction with admitted carrier placement and statutory compliance.", features: ["Admitted insurer requirements", "Local regulatory filing", "Standard policy terms", "Country-specific coverage"] },
      { title: "Regional Program", description: "Multi-country coordination with consistent coverage terms and centralized governance.", features: ["Cross-border DIC/DIL", "Unified policy terms", "Regional hub governance", "Currency management"] },
      { title: "Global Master Program", description: "Controlled master policy with fronting network and captive reinsurance integration.", features: ["Master policy placement", "Fronting network", "Captive reinsurance", "Centralized claims advocacy"] },
      { title: "Strategic Global Program", description: "Full enterprise architecture with captive, parametric, and ILS layers for peak risks.", features: ["Captive integration", "Parametric triggers", "ILS/cat bond access", "Strategic advisory retainer"] },
    ],
    executiveCTA: {
      title: "Ready to Architect Your Global Risk Program?",
      description: "Connect with our senior global program architects to design a customized insurance architecture aligned to your organization's cross-border exposures and strategic objectives.",
      primaryCTA: "Book Consultation",
      secondaryCTA: "Schedule Risk Assessment",
    },
  },
  "risk-engineering": {
    slug: "risk-engineering",
    hero: {
      title: "Risk Engineering & Loss Prevention",
      subtitle: "Site surveys · IoT monitoring · Safety credits · BCP advisory",
      description: "Proactive risk mitigation strategies to improve facility safety profiles, reduce loss frequency, and negotiate premium credits with carriers.",
      heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      badge: "Enterprise Risk Solutions",
      primaryCTA: "Request Consultation",
      secondaryCTA: "Download Framework",
    },
    kpis: [
      { icon: Shield, value: "40%", label: "Loss Reduction", description: "Average improvement in loss frequency" },
      { icon: TrendingUp, value: "15%", label: "Premium Credits", description: "Average safety credit achieved" },
      { icon: Globe, value: "500+", label: "Sites Assessed", description: "Facilities surveyed globally" },
      { icon: Activity, value: "24/7", label: "Monitoring Active", description: "Continuous IoT surveillance" },
    ],
    capabilities: [
      { icon: Target, title: "Site Assessment", description: "Comprehensive on-site engineering surveys identifying physical and operational risk exposures.", bullets: ["Facility inspection", "NFPA/TAC compliance", "HazOp studies", "Reinstatement valuation"] },
      { icon: BarChart3, title: "IoT & Telematics", description: "Real-time monitoring of equipment, fleet, and environmental conditions with predictive analytics.", bullets: ["Fleet telematics", "Equipment sensors", "Environmental monitors", "Predictive maintenance"] },
      { icon: CheckCircle2, title: "Safety Programs", description: "Structured safety management systems delivering measurable loss reduction and carrier credits.", bullets: ["Behavioral safety", "Training programs", "Safety audits", "Performance metrics"] },
      { icon: FileText, title: "Business Continuity", description: "Crisis response planning and business continuity advisory ensuring rapid operational recovery.", bullets: ["BCP development", "Crisis simulation", "Recovery planning", "Stakeholder communication"] },
    ],
    industryTabs: [
      {
        label: "Manufacturing",
        content: {
          industryChallenges: ["Equipment breakdown causing unplanned downtime", "Process safety incidents with regulatory exposure", "Supply chain disruption from facility losses"],
          industryRiskExposure: ["Machinery failure and business interruption", "Fire and explosion in high-hazard processes", "Product recall from contamination events"],
          recommendedOfferings: ["Risk Engineering & Loss Prevention", "Equipment Breakdown Insurance", "Product Liability Insurance"],
          relatedRisks: ["Equipment Breakdown", "Property Damage", "Product Liability"],
          relatedPlatforms: ["Risk Diagnostic Engine", "Supply Chain Risk Visualizer", "Claims Velocity Dashboard"],
          industryBenefits: ["Reduced loss frequency", "Carrier premium credits", "Regulatory compliance assurance"],
        },
      },
      {
        label: "Energy",
        content: {
          industryChallenges: ["High-hazard process safety in oil and gas operations", "Renewable asset exposure to extreme weather", "Grid stability and cyber-physical convergence"],
          industryRiskExposure: ["Process safety incidents with catastrophic potential", "Production shortfall from equipment failure", "Natural catastrophe damage to installations"],
          recommendedOfferings: ["Risk Engineering & Loss Prevention", "Production Guarantee Insurance", "Parametric Insurance Solutions"],
          relatedRisks: ["Construction Risk", "Natural Catastrophe", "Cyber Risk"],
          relatedPlatforms: ["Climate Analytics Platform", "Parametric Risk Platform", "Risk Intelligence Feed"],
          industryBenefits: ["Enhanced process safety", "Production reliability", "Parametric liquidity"],
        },
      },
      {
        label: "Transportation",
        content: {
          industryChallenges: ["Fleet safety and driver behavior management", "Cargo damage and transit liability", "Warehouse fire and operational risk"],
          industryRiskExposure: ["Vehicle collision and liability claims", "Cargo loss, damage, and delay", "Warehouse damage and business interruption"],
          recommendedOfferings: ["Risk Engineering & Loss Prevention", "Marine Cargo Insurance", "Fleet Liability Program"],
          relatedRisks: ["Marine Cargo Loss", "Fleet Accident", "Warehouse Damage"],
          relatedPlatforms: ["Supply Chain Risk Visualizer", "Risk Diagnostic Engine", "Claims Velocity Dashboard"],
          industryBenefits: ["Fleet safety improvement", "Reduced cargo claims", "Lower insurance costs"],
        },
      },
      {
        label: "Real Estate",
        content: {
          industryChallenges: ["Building safety and fire protection compliance", "Tenant mix and occupancy risk", "Natural catastrophe exposure across portfolio"],
          industryRiskExposure: ["Fire and water damage to properties", "Earthquake and windstorm catastrophe", "Business interruption from tenant disruption"],
          recommendedOfferings: ["Risk Engineering & Loss Prevention", "Property All-Risks Insurance", "Business Interruption Insurance"],
          relatedRisks: ["Property Damage", "Business Interruption", "Natural Catastrophe"],
          relatedPlatforms: ["Climate Analytics Platform", "Risk Diagnostic Engine", "Claims Velocity Dashboard"],
          industryBenefits: ["Enhanced building safety", "Catastrophe resilience", "Reduced BI exposure"],
        },
      },
      {
        label: "Healthcare",
        content: {
          industryChallenges: ["Medical equipment reliability and maintenance", "Patient data center and facility security", "Clinical trial supply chain integrity"],
          industryRiskExposure: ["Equipment failure impacting patient care", "Facility damage and service interruption", "Clinical trial supply chain disruption"],
          recommendedOfferings: ["Risk Engineering & Loss Prevention", "Medical Malpractice Insurance", "Cyber Insurance — Regulatory Defense"],
          relatedRisks: ["Medical Malpractice", "Data Breach", "Business Interruption"],
          relatedPlatforms: ["Risk Diagnostic Engine", "Regulatory Intelligence Platform", "Contract Intelligence"],
          industryBenefits: ["Patient safety assurance", "Operational continuity", "Regulatory compliance"],
        },
      },
    ],
    framework: {
      title: "Solution Architecture Framework",
      subtitle: "Four-phase engineering methodology for enterprise risk mitigation.",
      steps: [
        { title: "Assessment", description: "On-site engineering surveys, HazOp studies, reinstatement valuation, and IoT sensor deployment planning." },
        { title: "Strategy", description: "Risk prioritization matrix, safety program design, carrier presentation strategy, and premium credit roadmap." },
        { title: "Placement", description: "Engineering report submission to carriers, safety program certification, and parametric trigger design where applicable." },
        { title: "Optimization", description: "Continuous monitoring via IoT, annual re-assessment, loss trend analysis, and dynamic safety program enhancement." },
      ],
    },
    businessImpact: [
      { title: "Loss Frequency Reduction", description: "Average 40% reduction in claim frequency through proactive engineering controls and safety programs." },
      { title: "Premium Credit Realization", description: "15-25% premium credits achievable through documented safety improvements and engineering excellence." },
      { title: "Operational Continuity", description: "Reduced unplanned downtime through predictive maintenance and business continuity planning." },
      { title: "Regulatory Compliance", description: "NFPA, TAC, and local regulatory compliance assurance reducing penalty exposure and audit risk." },
    ],
    relatedRisks: [
      { title: "Equipment Breakdown", description: "Machinery failure, boiler explosion, and electrical disturbance coverage and prevention.", href: "/risks/equipment-breakdown" },
      { title: "Property Damage", description: "Fire, explosion, natural catastrophe, and allied perils affecting physical assets.", href: "/risks/fire-explosion" },
      { title: "Business Interruption", description: "Revenue loss from operational disruption requiring continuity planning.", href: "/risks/business-interruption" },
      { title: "Supply Chain Risk", description: "Contingent BI and dependency mapping across multi-tier supplier networks.", href: "/risks/supply-chain-risk" },
    ],
    relatedOfferings: [
      { title: "Property All-Risks Insurance", description: "Comprehensive physical asset protection with reinstatement valuation integration.", href: "/offerings/property-sfsp" },
      { title: "Equipment Breakdown Insurance", description: "Machinery and electrical equipment protection with expedited repair coverage.", href: "/offerings/equipment-breakdown" },
      { title: "Business Interruption Insurance", description: "Revenue continuity protection aligned to reinstatement timelines.", href: "/offerings/business-interruption" },
      { title: "Contingent Business Interruption", description: "Supply chain dependency protection for critical unnamed suppliers.", href: "/offerings/contingent-bi" },
    ],
    relatedPlatforms: [
      { title: "Risk Diagnostic Engine", description: "AI-powered assessment across 20 domains and 200+ risk categories.", href: "/platform/risk-diagnostic-engine" },
      { title: "Supply Chain Risk Visualizer", description: "Multi-tier dependency mapping and concentration analysis platform.", href: "/platform/supply-chain-risk" },
      { title: "Claims Velocity Dashboard", description: "Real-time claims tracking and settlement analytics platform.", href: "/platform/claims-velocity" },
      { title: "Climate Analytics Platform", description: "TCFD-aligned scenario analysis with asset-level physical risk modeling.", href: "/platform/climate-analytics" },
    ],
    industryMatrix: [
      { industry: "Manufacturing", applicability: "High-hazard process safety, equipment reliability, and production continuity engineering" },
      { industry: "Energy & Renewables", applicability: "Offshore and onshore asset protection, production guarantee, and grid resilience" },
      { industry: "Transportation & Logistics", applicability: "Fleet safety, cargo integrity, and warehouse fire protection" },
      { industry: "Real Estate & Infrastructure", applicability: "Building safety, catastrophe resilience, and tenant continuity" },
      { industry: "Healthcare", applicability: "Medical equipment reliability, facility safety, and clinical trial supply chain" },
      { industry: "Technology & Data Centers", applicability: "Cooling system reliability, power redundancy, and fire suppression" },
      { industry: "Agriculture & Food Processing", applicability: "Cold chain integrity, processing facility safety, and supply chain resilience" },
      { industry: "Mining & Metals", applicability: "Heavy equipment reliability, processing plant safety, and tailings management" },
    ],
    globalProgramStructure: [
      { title: "Facility Assessment", description: "On-site engineering survey with HazOp, reinstatement valuation, and IoT deployment.", features: ["On-site engineering", "HazOp study", "Reinstatement valuation", "IoT sensor plan"] },
      { title: "Safety Program Design", description: "Structured safety management system with behavioral safety and training programs.", features: ["Behavioral safety", "Safety committees", "Training curriculum", "Performance metrics"] },
      { title: "Carrier Presentation", description: "Engineering report submission, safety certification, and premium credit negotiation.", features: ["Engineering reports", "Carrier presentations", "Credit negotiation", "Safety certification"] },
      { title: "Continuous Optimization", description: "IoT monitoring, loss trend analysis, annual re-assessment, and program refinement.", features: ["IoT monitoring", "Loss analytics", "Annual re-assessment", "Program enhancement"] },
    ],
    executiveCTA: {
      title: "Ready to Engineer Your Risk Resilience?",
      description: "Connect with our risk engineering specialists to design a proactive loss prevention program reducing frequency and improving safety outcomes.",
      primaryCTA: "Book Consultation",
      secondaryCTA: "Request Site Assessment",
    },
  },
  "long-tenor-infrastructure": {
    slug: "long-tenor-infrastructure",
    hero: {
      title: "Long-Tenor Infrastructure Programs",
      subtitle: "15-year alignment · Rate caps · NMP concessions · Lender compliance",
      description: "Specialized, multi-year insurance architectures designed to align with infrastructure asset lifecycles and lender requirements.",
      heroImage: "https://images.unsplash.com/photo-1541888087401-443b2fbbfa78?q=80&w=2070&auto=format&fit=crop",
      badge: "Enterprise Risk Solutions",
      primaryCTA: "Request Consultation",
      secondaryCTA: "Download Framework",
    },
    kpis: [
      { icon: Globe, value: "15yr", label: "Maximum Tenor", description: "Aligned to concession periods" },
      { icon: CheckCircle2, value: "100%", label: "Lender Compliance", description: "Meeting NMP and bank requirements" },
      { icon: TrendingUp, value: "CPI-Capped", label: "Premium Escalation", description: "Predictable cost trajectory" },
      { icon: Activity, value: "24/7", label: "Program Advisory", description: "Continuous specialist support" },
    ],
    capabilities: [
      { icon: Layers, title: "Long-Tenor Structuring", description: "Insurance programs locked for 10-15 years aligned to concession and financing periods.", bullets: ["10-15 year tenors", "Rate lock mechanisms", "CPI escalation caps", "Multi-year placement"] },
      { icon: Shield, title: "Construction Coverage", description: "CAR/EAR and delay-in-start-up protection aligned to project milestones and lender drawdown schedules.", bullets: ["CAR/EAR placement", "DSU coverage", "BI during construction", "Expediting expenses"] },
      { icon: BarChart3, title: "Revenue Protection", description: "Production guarantee and parametric triggers ensuring revenue continuity throughout concession period.", bullets: ["Production guarantee", "Parametric weather triggers", "Revenue floor protection", "Availability-based payment"] },
      { icon: FileText, title: "Lender Compliance", description: "Structured to meet strict bank and NMP insurance requirements with certificate and compliance tracking.", bullets: ["NMP requirements", "Bank certificate tracking", "Compliance reporting", "Mortgagee clauses"] },
    ],
    industryTabs: [
      {
        label: "Transportation",
        content: {
          industryChallenges: ["15-year highway concession with uncertain traffic revenue", "Construction delay risk affecting project completion", "Natural catastrophe exposure across corridor"],
          industryRiskExposure: ["Delay in start-up from construction delays", "Traffic revenue shortfall from competing routes", "CAT damage to completed sections"],
          recommendedOfferings: ["Long-Tenor Infrastructure Programs", "Delay in Start-Up Insurance", "Parametric Insurance Solutions"],
          relatedRisks: ["Construction Risk", "Business Interruption", "Natural Catastrophe"],
          relatedPlatforms: ["Climate Analytics Platform", "Parametric Risk Platform", "Risk Diagnostic Engine"],
          industryBenefits: ["Concession-compliant structuring", "Revenue protection", "Multi-year rate certainty"],
        },
      },
      {
        label: "Energy",
        content: {
          industryChallenges: ["Greenfield renewable project with 20-year PPA", "Construction cost escalation in emerging markets", "Production shortfall from resource variability"],
          industryRiskExposure: ["Construction delay and cost overrun", "Wind/solar underperformance vs PPA minimum", "CAT damage during operational phase"],
          recommendedOfferings: ["Long-Tenor Infrastructure Programs", "Production Guarantee Insurance", "Parametric Insurance Solutions"],
          relatedRisks: ["Construction Risk", "Production Risk", "Natural Catastrophe"],
          relatedPlatforms: ["Climate Analytics Platform", "Parametric Risk Platform", "Supply Chain Risk Visualizer"],
          industryBenefits: ["PPA-aligned coverage", "Production revenue floor", "CAT protection"],
        },
      },
      {
        label: "Real Estate",
        content: {
          industryChallenges: ["Large commercial development with 8-year construction phase", "Presale unit delivery timeline risk", "Interest carry and holding cost exposure"],
          industryRiskExposure: ["Construction delay triggering buyer cancellation", "CAT damage to partially built structure", "Cost escalation exceeding contingency"],
          recommendedOfferings: ["Long-Tenor Infrastructure Programs", "Delay in Start-Up Insurance", "Construction All-Risks Insurance"],
          relatedRisks: ["Construction Risk", "Natural Catastrophe", "Business Interruption"],
          relatedPlatforms: ["Climate Analytics Platform", "Risk Diagnostic Engine", "Claims Velocity Dashboard"],
          industryBenefits: ["Developer risk mitigation", "Presale protection", "Lender confidence"],
        },
      },
      {
        label: "Social Infrastructure",
        content: {
          industryChallenges: ["PPP hospital project with availability-based payments", "Public sector procurement compliance requirements", "Performance guarantee obligations across 20-year term"],
          industryRiskExposure: ["Performance failure triggering penalty deductions", "Facility damage affecting service availability", "Regulatory non-compliance penalties"],
          recommendedOfferings: ["Long-Tenor Infrastructure Programs", "Performance Bonds & Guarantees", "Construction All-Risks Insurance"],
          relatedRisks: ["Performance Risk", "Regulatory Compliance", "Business Interruption"],
          relatedPlatforms: ["Risk Diagnostic Engine", "Policy Intelligence Platform", "Executive Dashboard"],
          industryBenefits: ["PPP compliance assurance", "Performance guarantee structuring", "Long-term cost certainty"],
        },
      },
      {
        label: "Mining & Metals",
        content: {
          industryChallenges: ["Mine development with 12-year extraction horizon", "Commodity price volatility affecting project economics", "Environmental rehabilitation obligations"],
          industryRiskExposure: ["Construction delay in remote locations", "Production shortfall from geological uncertainty", "Environmental liability and remediation costs"],
          recommendedOfferings: ["Long-Tenor Infrastructure Programs", "Political Risk Insurance", "Parametric Insurance Solutions"],
          relatedRisks: ["Political Risk", "Production Risk", "Environmental Liability"],
          relatedPlatforms: ["Climate Analytics Platform", "Parametric Risk Platform", "Regulatory Intelligence Platform"],
          industryBenefits: ["Mine-life coverage alignment", "Environmental compliance", "Political risk hedging"],
        },
      },
    ],
    framework: {
      title: "Solution Architecture Framework",
      subtitle: "Four-phase methodology for long-tenor infrastructure insurance programs.",
      steps: [
        { title: "Assessment", description: "Project lifecycle review, lender requirement mapping, risk exposure quantification, and existing program gap analysis." },
        { title: "Strategy", description: "Tenor design, rate cap structuring, CPI escalation modeling, and parametric trigger design aligned to project cash flows." },
        { title: "Placement", description: "Carrier market engagement across construction and operational phases, reinsurance optimization, and certificate tracking setup." },
        { title: "Optimization", description: "Annual reinstatement, CPI adjustment implementation, milestone tracking, and lender compliance reporting." },
      ],
    },
    businessImpact: [
      { title: "Lender Confidence", description: "Meeting all NMP and bank insurance requirements ensuring uninterrupted drawdown and refinancing access." },
      { title: "Cost Predictability", description: "CPI-capped premium escalation eliminating budget uncertainty over 10-15 year concession periods." },
      { title: "Revenue Protection", description: "Production guarantee and parametric triggers ensuring minimum revenue thresholds throughout project life." },
      { title: "Regulatory Compliance", description: "Structured to meet statutory insurance requirements across all project jurisdictions with automated tracking." },
    ],
    relatedRisks: [
      { title: "Construction Risk", description: "Physical damage, third-party liability, and delay during project development phase.", href: "/risks/construction-risk" },
      { title: "Business Interruption", description: "Revenue loss from operational disruption during construction and operational phases.", href: "/risks/business-interruption" },
      { title: "Natural Catastrophe", description: "Earthquake, flood, windstorm, and other CAT perils affecting project sites.", href: "/risks/natural-catastrophe" },
      { title: "Political Risk", description: "Expropriation, currency inconvertibility, and political violence in emerging markets.", href: "/risks/political-risk" },
    ],
    relatedOfferings: [
      { title: "Global Program Architecture", description: "Multi-jurisdiction master programs with DIC/DIL and fronting structures.", href: "/solutions/global-program-architecture" },
      { title: "TCOR Analytics & Benchmarking", description: "Data-driven optimization of total cost of risk across infrastructure portfolio.", href: "/solutions/tcor-analytics" },
      { title: "Captive Insurance & ART", description: "Alternative risk transfer including captive reinsurance and ILS structures.", href: "/solutions/captive-insurance" },
      { title: "Parametric Insurance Solutions", description: "Trigger-based CAT and weather coverage with rapid payout.", href: "/offerings/parametric-insurance" },
    ],
    relatedPlatforms: [
      { title: "Climate Analytics Platform", description: "TCFD-aligned scenario analysis with asset-level physical risk modeling.", href: "/platform/climate-analytics" },
      { title: "Parametric Risk Platform", description: "Index-based trigger monitoring, payout automation, and basis risk assessment.", href: "/platform/parametric-risk" },
      { title: "Risk Diagnostic Engine", description: "AI-powered assessment across 20 domains and 200+ risk categories.", href: "/platform/risk-diagnostic-engine" },
      { title: "Executive Dashboard", description: "Board-level risk visibility with TCOR tracking and milestone monitoring.", href: "/platform/executive-dashboard" },
    ],
    industryMatrix: [
      { industry: "Highways & Roads", applicability: "15-year DSU, CAR, and parametric weather coverage aligned to NHAI concession terms" },
      { industry: "Rail & Metro", applicability: "Long-tenor all-risk and delay coverage aligned to project financing and operational milestones" },
      { industry: "Ports & Terminals", applicability: "CAT protection, business interruption, and cargo liability over concession life" },
      { industry: "Power & Renewables", applicability: "Production guarantee, CAR/EAR, and parametric weather triggers aligned to PPA terms" },
      { industry: "Social Infrastructure", applicability: "Hospital and school PPP programs with performance bond and availability-based coverage" },
      { industry: "Water & Wastewater", applicability: "Treatment plant and pipeline infrastructure with long-tenor all-risk protection" },
      { industry: "Mining & Resources", applicability: "Mine development and extraction with political risk and environmental rehabilitation" },
      { industry: "Telecom & Digital", applicability: "Submarine cable and data center infrastructure with long-term capacity protection" },
    ],
    globalProgramStructure: [
      { title: "Project Assessment", description: "Feasibility review, lender requirement mapping, and risk quantification for concession lifecycle.", features: ["Lender requirement review", "Risk quantification", "Concession term mapping", "Gap analysis"] },
      { title: "Program Design", description: "Tenor structuring, rate cap design, CPI escalation modeling, and parametric trigger calibration.", features: ["Tenor design", "Rate cap structuring", "CPI modeling", "Trigger calibration"] },
      { title: "Carrier Placement", description: "Construction and operational phase carrier markets, reinsurance optimization, and certificate tracking.", features: ["CAR/EAR placement", "Operational all-risk", "Reinsurance optimization", "Certificate tracking"] },
      { title: "Lifetime Management", description: "Annual reinstatement, CPI adjustment, milestone compliance, and lender reporting throughout concession.", features: ["Annual reinstatement", "CPI adjustment", "Milestone tracking", "Lender reporting"] },
    ],
    executiveCTA: {
      title: "Ready to Structure Your Long-Tenor Program?",
      description: "Connect with our infrastructure risk specialists to design a multi-year insurance architecture aligned to your project lifecycle and lender requirements.",
      primaryCTA: "Book Consultation",
      secondaryCTA: "Request Assessment",
    },
  },
  "tcor-analytics": {
    slug: "tcor-analytics",
    hero: {
      title: "TCOR Analytics & Benchmarking",
      subtitle: "Total cost of risk · Peer benchmarking · Retention optimisation",
      description: "Data-driven optimization of your Total Cost of Risk, balancing retained losses, premiums, and administrative costs against industry peers.",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      badge: "Enterprise Risk Solutions",
      primaryCTA: "Request Consultation",
      secondaryCTA: "Download Framework",
    },
    kpis: [
      { icon: BarChart3, value: "30+", label: "Industries Benchmarked", description: "Comprehensive peer comparison data" },
      { icon: TrendingUp, value: "15-25%", label: "TCOR Reduction", description: "Average optimization achieved" },
      { icon: Globe, value: "150+", label: "Jurisdictions", description: "Global benchmarking coverage" },
      { icon: Activity, value: "Real-Time", label: "Analytics Active", description: "Continuous TCOR monitoring" },
    ],
    capabilities: [
      { icon: Target, title: "TCOR Modeling", description: "Holistic mapping of all risk-related financial leakages including premiums, retained losses, and administrative costs.", bullets: ["Premium allocation", "Retained loss tracking", "Admin cost mapping", "Cash flow impact"] },
      { icon: BarChart3, title: "Peer Benchmarking", description: "Comparing your program limits, rates, and retention strategy against anonymized industry aggregates.", bullets: ["Industry peer groups", "Rate benchmarking", "Limit comparison", "Retention analysis"] },
      { icon: TrendingUp, title: "Retention Optimization", description: "Mathematical modeling to find the optimal deductible and self-insured retention levels.", bullets: ["PML analysis", "VaR modeling", "Stop-loss design", "Capital optimization"] },
      { icon: CheckCircle2, title: "Program Optimization", description: "Actionable recommendations for limit increases, carrier consolidation, and coverage restructuring.", bullets: ["Limit adequacy review", "Carrier consolidation", "Coverage restructuring", "Cost reduction roadmap"] },
    ],
    industryTabs: [
      {
        label: "Technology",
        content: {
          industryChallenges: ["Rapidly evolving cyber exposure outpacing traditional modeling", "D&O and E&O limits inadequate for IPO-stage valuations", "Global expansion creating multi-jurisdiction compliance costs"],
          industryRiskExposure: ["Cyber incident costs averaging $4.45M per breach", "D&O defense costs: $5M-$40M for SEC investigations", "Regulatory fines under GDPR and emerging AI frameworks"],
          recommendedOfferings: ["TCOR Analytics & Benchmarking", "Cyber Insurance — First-Party", "Directors & Officers Liability"],
          relatedRisks: ["Cyber Risk", "D&O Personal Liability", "Regulatory Investigation"],
          relatedPlatforms: ["Risk Diagnostic Engine", "Executive Dashboard", "Policy Intelligence Platform"],
          industryBenefits: ["Data-driven limit adequacy", "Peer-validated retention levels", "TCOR transparency for investors"],
        },
      },
      {
        label: "Manufacturing",
        content: {
          industryChallenges: ["Fragmented property programs across 40+ global facilities", "Supply chain contingent BI gaps from unnamed suppliers", "Product liability and recall costs underinsured"],
          industryRiskExposure: ["Property damage aggregating across facilities", "Contingent BI from key supplier failures", "Product liability class actions exceeding limits"],
          recommendedOfferings: ["TCOR Analytics & Benchmarking", "Property All-Risks Insurance", "Product Liability Insurance"],
          relatedRisks: ["Property Damage", "Supply Chain Risk", "Product Liability"],
          relatedPlatforms: ["Supply Chain Risk Visualizer", "Claims Velocity Dashboard", "Risk Intelligence Feed"],
          industryBenefits: ["Consolidated program efficiency", "Gap identification", "Retention optimization"],
        },
      },
      {
        label: "Financial Services",
        content: {
          industryChallenges: ["Regulatory-driven D&O and PI limits diverging across jurisdictions", "Cyber premium escalation without coverage adequacy validation", "Professional liability from advisory services underinsured"],
          industryRiskExposure: ["Regulatory investigation defense costs", "Data breach notification and remediation costs", "Investment advice liability claims"],
          recommendedOfferings: ["TCOR Analytics & Benchmarking", "Directors & Officers Liability", "Cyber Insurance — Regulatory Defense"],
          relatedRisks: ["Regulatory Investigation", "Cyber Risk", "Professional Liability"],
          relatedPlatforms: ["Regulatory Intelligence Platform", "Policy Intelligence Platform", "Executive Dashboard"],
          industryBenefits: ["Regulatory-aligned structuring", "Cost transparency", "Peer benchmarking"],
        },
      },
      {
        label: "Healthcare",
        content: {
          industryChallenges: ["Medical malpractice premiums escalating without outcome improvement", "Clinical trial liability caps below actual exposure", "Cyber and privacy liability across multi-site operations"],
          industryRiskExposure: ["Malpractice class actions exceeding policy limits", "Clinical trial adverse event costs", "HIPAA/DPDP breach notification obligations"],
          recommendedOfferings: ["TCOR Analytics & Benchmarking", "Medical Malpractice Insurance", "Cyber Insurance — Regulatory Defense"],
          relatedRisks: ["Medical Malpractice", "Data Breach", "Product Liability"],
          relatedPlatforms: ["Risk Diagnostic Engine", "Regulatory Intelligence Platform", "Claims Velocity Dashboard"],
          industryBenefits: ["Limit adequacy validation", "Premium efficiency", "Claims pattern analysis"],
        },
      },
      {
        label: "Energy",
        content: {
          industryChallenges: ["Construction and operational phase TCOR misalignment", "Production guarantee premium vs coverage gap", "Parametric trigger basis risk vs traditional coverage"],
          industryRiskExposure: ["Construction delay and cost escalation", "Production shortfall below PPA minimum", "Natural catastrophe aggregate exposure"],
          recommendedOfferings: ["TCOR Analytics & Benchmarking", "Long-Tenor Infrastructure Programs", "Parametric Insurance Solutions"],
          relatedRisks: ["Construction Risk", "Production Risk", "Natural Catastrophe"],
          relatedPlatforms: ["Climate Analytics Platform", "Parametric Risk Platform", "Risk Diagnostic Engine"],
          industryBenefits: ["Tenor-aligned TCOR", "Production guarantee optimization", "Parametric cost efficiency"],
        },
      },
    ],
    framework: {
      title: "Solution Architecture Framework",
      subtitle: "Four-phase methodology for TCOR optimization and program restructuring.",
      steps: [
        { title: "Assessment", description: "Comprehensive TCOR data collection across premiums, claims, retentions, and administrative costs over 3-5 year history." },
        { title: "Strategy", description: "Peer benchmarking analysis, retention optimization modeling, and coverage restructuring roadmap development." },
        { title: "Placement", description: "Carrier market execution, limit restructuring, deductible optimization, and reinsurance placement." },
        { title: "Optimization", description: "Continuous TCOR monitoring, annual benchmarking updates, and dynamic program refinement." },
      ],
    },
    businessImpact: [
      { title: "Cost Reduction", description: "15-25% TCOR reduction through optimized retention, carrier consolidation, and limit restructuring." },
      { title: "Limit Adequacy", description: "Elimination of coverage gaps identified through peer benchmarking and exposure modeling." },
      { title: "Board Confidence", description: "Data-driven risk program transparency enabling strategic decision-making and investor confidence." },
      { title: "Strategic Optionality", description: "Optimized program design supporting M&A, expansion, and capital market transactions." },
    ],
    relatedRisks: [
      { title: "Coverage Gap", description: "Unidentified insurance gaps leaving critical exposures uninsured and balance sheet exposed.", href: "/risks/contract-risk-exposure" },
      { title: "Premium Volatility", description: "Hard market cycles creating unsustainable cost spikes without retention optimization.", href: "/risks/premium-volatility" },
      { title: "Regulatory Compliance", description: "Multi-jurisdictional insurance requirements with evolving penalty structures.", href: "/risks/regulatory-compliance-failure" },
      { title: "D&O Personal Liability", description: "Board member personal exposure from coverage gaps and Side A limitations.", href: "/risks/d-o-personal-liability" },
    ],
    relatedOfferings: [
      { title: "Global Program Architecture", description: "Multi-jurisdiction master programs with cross-border optimization.", href: "/solutions/global-program-architecture" },
      { title: "Risk Engineering & Loss Prevention", description: "Proactive risk mitigation reducing loss frequency and premium costs.", href: "/solutions/risk-engineering" },
      { title: "Captive Insurance & ART", description: "Alternative risk transfer structures for peak and retained risks.", href: "/solutions/captive-insurance" },
      { title: "Alternative Risk Transfer", description: "Parametric, ILS, and captive solutions for cost-efficient risk retention.", href: "/solutions/alternative-risk-transfer" },
    ],
    relatedPlatforms: [
      { title: "Risk Diagnostic Engine", description: "AI-powered assessment across 20 domains with coverage gap identification.", href: "/platform/risk-diagnostic-engine" },
      { title: "Executive Dashboard", description: "Board-level TCOR visibility with peer benchmarking and trend analysis.", href: "/platform/executive-dashboard" },
      { title: "Policy Intelligence Platform", description: "Automated policy analysis with limit, sublimit, and exclusion gap detection.", href: "/platform/policy-intelligence" },
      { title: "Claims Velocity Dashboard", description: "Claims analytics and settlement performance benchmarking.", href: "/platform/claims-velocity" },
    ],
    industryMatrix: [
      { industry: "Technology & SaaS", applicability: "Cyber tower optimization, D&O limit adequacy, and global E&O structuring" },
      { industry: "Financial Services", applicability: "Regulatory-aligned D&O, cyber, and PI program with capital efficiency" },
      { industry: "Manufacturing", applicability: "Consolidated property/BI with contingent BI mapping and retention optimization" },
      { industry: "Healthcare", applicability: "Malpractice and product liability program with limit benchmarking" },
      { industry: "Energy & Infrastructure", applicability: "Long-tenor program TCOR aligned to concession cash flows" },
      { industry: "Retail & E-Commerce", applicability: "Multi-market property/BI/cyber consolidation and retention modeling" },
      { industry: "Professional Services", applicability: "PI tower optimization, claims funding, and peer limit benchmarking" },
      { industry: "Government & Public Sector", applicability: "Public entity program structuring with statutory compliance and cost control" },
    ],
    globalProgramStructure: [
      { title: "TCOR Assessment", description: "3-5 year historical data collection across all risk-related costs and exposures.", features: ["Premium analysis", "Claims history review", "Retention tracking", "Admin cost mapping"] },
      { title: "Benchmarking", description: "Peer comparison against anonymized industry aggregates with gap identification.", features: ["Peer group selection", "Rate benchmarking", "Limit comparison", "Gap prioritization"] },
      { title: "Optimization", description: "Retention modeling, carrier consolidation, and coverage restructuring execution.", features: ["Retention optimization", "Carrier rationalization", "Limit restructuring", "Cost reduction plan"] },
      { title: "Monitoring", description: "Continuous TCOR tracking, annual benchmarking updates, and dynamic refinement.", features: ["Real-time TCOR", "Annual benchmarking", "Trend analysis", "Program refinement"] },
    ],
    executiveCTA: {
      title: "Ready to Optimize Your Total Cost of Risk?",
      description: "Connect with our TCOR analytics team to benchmark your program against industry peers and identify optimization opportunities.",
      primaryCTA: "Book Consultation",
      secondaryCTA: "Request TCOR Review",
    },
  },
};
