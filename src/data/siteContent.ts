export interface DynamicPageContent {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  features: { title: string; description: string }[];
}

export const solutionsData: Record<string, DynamicPageContent> = {
  "global-program-architecture": {
    slug: "global-program-architecture",
    title: "Global Program Architecture",
    subtitle: "Controlled master policy · DIC/DIL · Fronting · GIFT City captive",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    description: "Design and execution of complex multinational insurance programs ensuring global compliance and optimized risk retention.",
    features: [
      { title: "Controlled Master Policy", description: "Centralized governance and standardized coverage across all global operations." },
      { title: "Fronting Network", description: "Leveraging top-tier local paper while retaining risk centrally." },
      { title: "DIC / DIL", description: "Difference in Conditions and Difference in Limits to plug local policy gaps." },
      { title: "Captive Reinsurance", description: "Efficiently channeling risk back to corporate captives." }
    ]
  },
  "captive-insurance": {
    slug: "captive-insurance",
    title: "Captive Insurance & ART",
    subtitle: "GIFT City · Bermuda · Singapore · Rent-a-captive · ILS",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Alternative Risk Transfer solutions allowing large enterprises to self-insure predictable risks efficiently.",
    features: [
      { title: "Single-Parent Captive", description: "Wholly owned subsidiaries for dedicated corporate risk underwriting." },
      { title: "Protected Cell", description: "Renting cell facilities for segregated, lower-cost captive solutions." },
      { title: "Cat Bond", description: "Securitizing catastrophic risks directly to capital markets." },
      { title: "ILW", description: "Industry Loss Warranties to hedge against macro-level market losses." }
    ]
  },
  "long-tenor-infrastructure": {
    slug: "long-tenor-infrastructure",
    title: "Long-Tenor Infrastructure Programs",
    subtitle: "15-year alignment · Rate caps · NMP concessions · Lender compliance",
    heroImage: "https://images.unsplash.com/photo-1541888087401-443b2fbbfa78?q=80&w=2070&auto=format&fit=crop",
    description: "Specialized, multi-year insurance architectures designed to align with infrastructure asset lifecycles and lender requirements.",
    features: [
      { title: "10–15 Year Programs", description: "Locked-in coverage tenors matching concession periods." },
      { title: "CPI Escalation Caps", description: "Predictable premium models adjusting dynamically with inflation." },
      { title: "PPP Aligned", description: "Tailored to meet strict Public-Private Partnership contractual obligations." }
    ]
  },
  "tcor-analytics": {
    slug: "tcor-analytics",
    title: "TCOR Analytics & Benchmarking",
    subtitle: "Total cost of risk · Peer benchmarking · Retention optimisation",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Data-driven optimization of your Total Cost of Risk, balancing retained losses, premiums, and administrative costs.",
    features: [
      { title: "TCOR Model", description: "Holistic mapping of all risk-related financial leakages." },
      { title: "Sector Benchmarks", description: "Comparing your program limits and rates against peer aggregates." },
      { title: "Retention Curve", description: "Mathematical modeling to find the optimal deductible levels." }
    ]
  },
  "claims-advocacy": {
    slug: "claims-advocacy",
    title: "Claims Advocacy",
    subtitle: "24/7 response · Adjuster management · Recovery maximisation",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    description: "Fierce, technical representation during major loss events to ensure fair, fast, and maximum policy payouts.",
    features: [
      { title: "Major Loss Response", description: "Immediate on-site intervention during catastrophic events." },
      { title: "Coverage Dispute", description: "Legal and technical pushback against carrier reservation of rights." },
      { title: "Subrogation", description: "Managing third-party recovery to protect claims records." }
    ]
  },
  "risk-engineering": {
    slug: "risk-engineering",
    title: "Risk Engineering & Loss Prevention",
    subtitle: "Site surveys · IoT monitoring · Safety credits · BCP advisory",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    description: "Proactive risk mitigation strategies to improve facility safety profiles and negotiate premium credits.",
    features: [
      { title: "Reinstatement Valuation", description: "Accurate fixed-asset replacement cost assessments." },
      { title: "Telematics", description: "IoT-driven fleet and machinery monitoring." },
      { title: "Fire Suppression Audit", description: "NFPA/TAC compliance checks to eliminate critical vulnerabilities." }
    ]
  },
  "identification": {
    slug: "identification",
    title: "Risk Identification",
    subtitle: "Discovery and mapping of enterprise risk exposures",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    description: "Comprehensive discovery and mapping of enterprise risk exposures across all operations, assets, and liabilities.",
    features: [
      { title: "Enterprise Risk Mapping", description: "Systematic identification of exposures across all business units and geographies." },
      { title: "Asset Inventory", description: "Complete cataloging of physical, cyber, and intangible assets." },
      { title: "Exposure Register", description: "Living document of all identified risks with ownership and mitigation status." }
    ]
  },
  "assessment": {
    slug: "assessment",
    title: "Risk Assessment",
    subtitle: "Quantification and prioritization of risk scenarios",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Quantification and prioritization of risk scenarios using proprietary models and historical data benchmarking.",
    features: [
      { title: "Risk Quantification", description: "Probability-weighted financial impact modeling for all identified risks." },
      { title: "Peer Benchmarking", description: "Comparing risk profiles against industry aggregates and best practices." },
      { title: "Scenario Analysis", description: "Stress-testing portfolios against tail events and correlated exposures." }
    ]
  },
  "transfer": {
    slug: "transfer",
    title: "Risk Transfer",
    subtitle: "Insurance placement and alternative risk financing",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322375bd5411?q=80&w=2070&auto=format&fit=crop",
    description: "Insurance placement and alternative risk financing structures optimized for your enterprise risk profile.",
    features: [
      { title: "Carrier Placement", description: "Direct access to A++ rated carriers and Lloyd's syndicates globally." },
      { title: "Alternative Risk Transfer", description: "Captives, parametric triggers, and ILS structures for retained risks." },
      { title: "Program Structuring", description: "Layered coverage designs balancing cost, protection, and strategic objectives." }
    ]
  },
  "monitoring": {
    slug: "monitoring",
    title: "Risk Monitoring",
    subtitle: "Continuous tracking and alerting on risk metrics",
    heroImage: "https://images.unsplash.com/photo-1518103241174-ebb0c2b2e1e5?q=80&w=2070&auto=format&fit=crop",
    description: "Continuous tracking and alerting on risk metrics with real-time dashboard visibility across your enterprise.",
    features: [
      { title: "Real-Time Dashboards", description: "Live risk scorecards and exposure tracking across all portfolios." },
      { title: "Threshold Alerting", description: "Automated notifications when risk metrics breach defined tolerances." },
      { title: "Trend Analysis", description: "Monthly and quarterly risk trend reporting with predictive indicators." }
    ]
  },
  "intelligence": {
    slug: "intelligence",
    title: "Risk Intelligence",
    subtitle: "Data-driven insights and predictive analytics",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    description: "Data-driven insights and predictive analytics to anticipate emerging risks before they materialize.",
    features: [
      { title: "Predictive Analytics", description: "Proprietary algorithms forecasting risk events across 150+ markets." },
      { title: "Market Intelligence", description: "Real-time carrier capacity, pricing trends, and regulatory updates." },
      { title: "Scenario Modeling", description: "What-if analysis for strategic planning and board-level decision support." }
    ]
  },
  "claims-management": {
    slug: "claims-management",
    title: "Claims Management",
    subtitle: "End-to-end claims advocacy and recovery optimization",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    description: "End-to-end claims advocacy and recovery optimization ensuring fair, fast, and maximum policy payouts.",
    features: [
      { title: "Claims Triage", description: "Immediate response and classification of all notified claims." },
      { title: "Adjuster Management", description: "Technical oversight of adjuster activities and reserve adequacy." },
      { title: "Recovery Maximisation", description: "Subrogation and recovery pursuit to optimize net position." }
    ]
  },
  "compliance": {
    slug: "compliance",
    title: "Compliance Management",
    subtitle: "Regulatory adherence and reporting frameworks",
    heroImage: "https://images.unsplash.com/photo-1586528125628-5c6a9e3b2d3c?q=80&w=2070&auto=format&fit=crop",
    description: "Regulatory adherence and reporting frameworks ensuring compliance across all jurisdictions and business operations.",
    features: [
      { title: "Regulatory Tracking", description: "Monitoring of evolving regulations across 150+ jurisdictions." },
      { title: "Compliance Frameworks", description: "Structured programs for DPDP, IRDAI, FCA, SEC, and other mandates." },
      { title: "Audit Readiness", description: "Documentation and evidence packages for regulatory examinations." }
    ]
  },
  "supply-chain-resilience": {
    slug: "supply-chain-resilience",
    title: "Supply Chain Resilience",
    subtitle: "Supplier risk management and continuity planning",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a63?q=80&w=2070&auto=format&fit=crop",
    description: "Supplier risk management and continuity planning to protect operations from supply chain disruptions.",
    features: [
      { title: "Supplier Mapping", description: "End-to-end mapping of tier-1 through tier-n supplier dependencies." },
      { title: "Contingent BI", description: "Coverage triggers for unnamed supplier disruptions." },
      { title: "Resilience Planning", description: "Business continuity plans with alternate sourcing strategies." }
    ]
  },
  "business-continuity": {
    slug: "business-continuity",
    title: "Business Continuity",
    subtitle: "Disaster recovery and operational resilience planning",
    heroImage: "https://images.unsplash.com/photo-1486406146906-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Disaster recovery and operational resilience planning to ensure rapid restoration after any disruption.",
    features: [
      { title: "BCP Development", description: "Comprehensive business continuity plans tested against realistic scenarios." },
      { title: "Disaster Recovery", description: "IT and operational recovery procedures with defined RTO/RPO targets." },
      { title: "Resilience Testing", description: "Regular tabletop and live exercises validating recovery capabilities." }
    ]
  },
  "cyber-resilience": {
    slug: "cyber-resilience",
    title: "Cyber Resilience",
    subtitle: "Comprehensive cybersecurity and response planning",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    description: "Comprehensive cybersecurity and response planning to protect against, detect, and recover from cyber threats.",
    features: [
      { title: "Incident Response", description: "Structured response protocols for ransomware, breach, and data loss events." },
      { title: "Zero Trust Architecture", description: "Network segmentation, identity management, and access control frameworks." },
      { title: "Cyber Insurance", description: "Specialized cyber liability coverage with pre-agreed incident response support." }
    ]
  },
  "contract-intelligence": {
    slug: "contract-intelligence",
    title: "Contract Intelligence",
    subtitle: "Automated contract analysis and risk extraction",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    description: "Automated contract analysis and risk extraction to identify indemnification gaps and insurance obligations.",
    features: [
      { title: "Contract Analysis", description: "AI-powered extraction of key terms, indemnification clauses, and liability caps." },
      { title: "Insurance Gap Detection", description: "Identification of coverage shortfalls against contractual obligations." },
      { title: "Risk Scoring", description: "Automated risk scoring for vendor and customer contract portfolios." }
    ]
  },
  "product-liability": {
    slug: "product-liability",
    title: "Product Liability",
    subtitle: "Consumer safety, product defect, and recall exposure protection",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    description: "Specialized product liability architecture for manufacturers, distributors, and consumer-facing brands managing bodily injury, property damage, and recall risk.",
    features: [
      { title: "Product Defect Liability", description: "Coverage for manufacturing, design, and warning defects across consumer and industrial products." },
      { title: "Recall Cost Coordination", description: "Claims, crisis management, and product withdrawal cost support for affected product lines." },
      { title: "Global Limit Structuring", description: "Per-occurrence and aggregate limits aligned to jurisdictional litigation exposure." }
    ]
  },
  "professional-indemnity": {
    slug: "professional-indemnity",
    title: "Professional Indemnity",
    subtitle: "Errors, omissions, and advisory liability protection",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    description: "Professional liability coverage for advisory, consulting, technology, and financial services firms facing negligence, breach of duty, and client financial loss claims.",
    features: [
      { title: "Advisory Liability", description: "Defense and indemnity for alleged errors, omissions, and negligent professional services." },
      { title: "Contractual Liability Alignment", description: "Coverage mapping against client contract indemnity and limitation clauses." },
      { title: "Retroactive Protection", description: "Claims-made structuring with appropriate retroactive dates and run-off planning." }
    ]
  },
  "directors-officers": {
    slug: "directors-officers",
    title: "Directors & Officers",
    subtitle: "Board, executive, and securities claim protection",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop",
    description: "Directors and officers liability architecture protecting leadership teams, boards, and corporate entities from securities, governance, regulatory, and fiduciary claims.",
    features: [
      { title: "Side A DIC Protection", description: "Personal asset protection for directors and officers when indemnification is unavailable." },
      { title: "Securities Defense", description: "Coverage for shareholder claims, prospectus allegations, and regulatory investigations." },
      { title: "IPO and M&A Readiness", description: "Limit and tower structuring for public-company, private-equity, and transaction scenarios." }
    ]
  },
  "trade-credit": {
    slug: "trade-credit",
    title: "Trade Credit",
    subtitle: "Accounts receivable protection against customer default",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    description: "Trade credit insurance and advisory for enterprises protecting accounts receivable from customer insolvency, protracted default, and political non-payment events.",
    features: [
      { title: "Receivables Protection", description: "Coverage for commercial insolvency and prolonged payment default by customers." },
      { title: "Buyer Risk Monitoring", description: "Credit assessment and early-warning signals across domestic and export customer portfolios." },
      { title: "Working Capital Support", description: "Bankable insured receivables that support financing and sales expansion." }
    ]
  },
  "surety-bonds": {
    slug: "surety-bonds",
    title: "Surety Bonds",
    subtitle: "Performance, payment, and working-capital guarantee solutions",
    heroImage: "https://images.unsplash.com/photo-1541888087401-443b2fbbfa78?q=80&w=2070&auto=format&fit=crop",
    description: "Surety and bond structuring for infrastructure, construction, public-sector, and commercial contracts requiring performance and payment guarantees.",
    features: [
      { title: "Performance Guarantees", description: "Bond capacity for contractors and project owners meeting concession and procurement obligations." },
      { title: "Working Capital Optimization", description: "Bank guarantee replacement and credit-line preservation through surety capacity." },
      { title: "Project Compliance", description: "Bond documentation aligned to lender, public-sector, and contract requirements." }
    ]
  },
  "ma-insurance": {
    slug: "ma-insurance",
    title: "M&A Insurance",
    subtitle: "Warranty, indemnity, tax, and transaction risk transfer",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    description: "M&A insurance solutions for private-equity exits, strategic acquisitions, and divestitures requiring warranty, indemnity, tax, and liability risk transfer.",
    features: [
      { title: "Warranty & Indemnity", description: "Breach of warranty coverage supporting clean exits and reduced escrow requirements." },
      { title: "Tax and Title Coverage", description: "Specialized transaction policies for identified tax, title, and regulatory exposures." },
      { title: "Deal Process Integration", description: "Coverage alignment with due diligence, negotiation, signing, and closing timelines." }
    ]
  },
  "climate-risk": {
    slug: "climate-risk",
    title: "Climate Risk Solutions",
    subtitle: "Physical, transition, and parametric climate risk transfer",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    description: "Climate risk solutions combining scenario analytics, resilience advisory, parametric triggers, and insurance structures for physical and transition exposures.",
    features: [
      { title: "Physical Risk Transfer", description: "Property, catastrophe, and parametric structures for flood, wind, wildfire, heat, and supply disruption." },
      { title: "Transition Risk Advisory", description: "Carbon, stranded asset, disclosure, and regulatory transition exposure mapping." },
      { title: "Scenario-Based Structuring", description: "TCFD-aligned scenario modeling to calibrate limits, triggers, and risk appetite." }
    ]
  },
  "ai-risk": {
    slug: "ai-risk",
    title: "AI Risk Solutions",
    subtitle: "AI governance, liability, model, and cyber-physical exposure protection",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    description: "AI risk solutions for organizations deploying autonomous systems, machine learning models, generative AI, and AI-enabled products across regulated markets.",
    features: [
      { title: "AI Liability Mapping", description: "Coverage analysis for algorithmic bias, autonomous decisions, model failure, and product liability." },
      { title: "Governance Controls", description: "Risk controls aligned to EU AI Act, NIST, sector rules, and internal model-risk frameworks." },
      { title: "Cyber-Physical Integration", description: "Coordinated cyber, technology E&O, and specialty coverage for AI-enabled systems." }
    ]
  }
};

export const industriesData: Record<string, DynamicPageContent> = {
  "technology-digital": {
    slug: "technology-digital",
    title: "Technology & Digital",
    subtitle: "Cyber · AI Liability · Tech E&O · D&O · DPDP Compliance",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    description: "Specialized risk architecture for technology companies managing intangible assets, cyber threats, and complex liability exposures across software, SaaS, and digital platforms.",
    features: [
      { title: "Cyber Liability", description: "Comprehensive protection against ransomware, extortion, and data breaches with zero-trust architecture integration." },
      { title: "AI Liability", description: "Coverage for algorithmic bias, autonomous decision failures, and emerging quantum computing risks." },
      { title: "Tech E&O", description: "Financial protection for clients from software failures, service outages, and implementation errors." }
    ]
  },
  "financial-services": {
    slug: "financial-services",
    title: "Financial Services",
    subtitle: "D&O · Cyber · PI · Regulatory Defense · Trade Credit",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Navigating heavily regulated environments with bespoke liability placements for banks, fintech, insurance companies, and financial institutions.",
    features: [
      { title: "Directors & Officers", description: "Personal asset protection for board members against regulatory investigations and shareholder claims." },
      { title: "Cyber Security", description: "Protection against ransomware, data breaches, and deepfake fraud targeting financial transactions." },
      { title: "Professional Liability", description: "Coverage for advisory malpractice, suitability claims, and underwriting errors." }
    ]
  },
  "healthcare-life-sciences": {
    slug: "healthcare-life-sciences",
    title: "Healthcare & Life Sciences",
    subtitle: "Medical Malpractice · Product Liability · Cyber · Clinical Trials",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    description: "Comprehensive risk solutions for hospitals, pharmaceutical companies, biotech firms, and medical device manufacturers.",
    features: [
      { title: "Medical Malpractice", description: "Protection against clinical errors, misdiagnosis, and patient care liabilities." },
      { title: "Product Liability", description: "Coverage for drug development errors, device failures, and pharmaceutical recalls." },
      { title: "Cyber Security", description: "HIPAA compliance defense and patient data breach protection." }
    ]
  },
  "manufacturing-industrial": {
    slug: "manufacturing-industrial",
    title: "Manufacturing & Industrial",
    subtitle: "Property · BI · Product Recall · Equipment Breakdown · CBI",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    description: "Protecting physical assets, supply chains, and revenue streams for heavy manufacturing and advanced industrial operations.",
    features: [
      { title: "Property & Business Interruption", description: "Coverage for fire, explosion, natural disasters, and resulting operational downtime." },
      { title: "Equipment Breakdown", description: "Protection for machinery failures, production line stoppages, and expedited repair costs." },
      { title: "Contingent BI", description: "Supply chain risk protection for critical unnamed supplier dependencies." }
    ]
  },
  "energy-utilities": {
    slug: "energy-utilities",
    title: "Energy & Utilities",
    subtitle: "CAR · Production Guarantee · Parametric · Pollution Liability",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    description: "Risk transfer solutions for oil & gas, renewables, mining, and utility infrastructure with climate resilience.",
    features: [
      { title: "Construction All Risks", description: "Physical damage protection during greenfield energy project development." },
      { title: "Production Guarantee", description: "Revenue protection for renewable energy against low wind or solar irradiance." },
      { title: "Pollution Liability", description: "Coverage for environmental cleanup costs and regulatory fines." }
    ]
  },
  "infrastructure-real-estate": {
    slug: "infrastructure-real-estate",
    title: "Infrastructure & Real Estate",
    subtitle: "15-Year Programs · DSU · Surety · Natural Catastrophe",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Long-term capital protection for highways, ports, airports, commercial properties, and PPP infrastructure projects.",
    features: [
      { title: "Long-Tenor Programs", description: "10-15 year coverage aligned with infrastructure concession periods." },
      { title: "Delay in Start-Up", description: "Protection of anticipated revenue during construction delays." },
      { title: "Surety Bonds", description: "Performance guarantees for contractors with working capital optimization." }
    ]
  },
  "transportation-logistics": {
    slug: "transportation-logistics",
    title: "Transportation & Logistics",
    subtitle: "Marine Cargo · Aviation · Fleet · Warehouse · Cyber",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a63?q=80&w=2070&auto=format&fit=crop",
    description: "End-to-end cargo and liability protection for maritime, aviation, logistics, and freight operations globally.",
    features: [
      { title: "Marine Cargo", description: "Coverage for cargo loss, damage, and total loss during transit." },
      { title: "Aviation Liability", description: "Third-party liability protection for aviation accidents and incidents." },
      { title: "Cyber Security", description: "Protection against supply chain attacks and logistics system compromises." }
    ]
  },
  "retail-hospitality": {
    slug: "retail-hospitality",
    title: "Retail & Hospitality",
    subtitle: "Product Liability · Cyber · EPLI · Business Interruption",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    description: "Risk solutions for retailers, e-commerce platforms, hotels, and hospitality chains managing consumer-facing exposures.",
    features: [
      { title: "Product Liability", description: "Protection against consumer injury claims and defective product lawsuits." },
      { title: "Cyber Security", description: "Customer data protection and POS system attack response." },
      { title: "Employment Practices", description: "Workplace discrimination, harassment, and turnover liability coverage." }
    ]
  },
  "agriculture-environment": {
    slug: "agriculture-environment",
    title: "Agriculture & Environment",
    subtitle: "Parametric · Crop Index · Cold Chain · Pollution · Climate",
    heroImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    description: "Protecting yields, supply chains, and environmental compliance for agricultural and food processing operations.",
    features: [
      { title: "Parametric Weather", description: "Index-based payouts for drought, flood, frost, and crop failure." },
      { title: "Cold Chain", description: "Temperature-sensitive cargo protection for food and pharmaceuticals." },
      { title: "Pollution Liability", description: "Coverage for pesticide use, water contamination, and environmental cleanup." }
    ]
  },
  "government-public-sector": {
    slug: "government-public-sector",
    title: "Government & Public Sector",
    subtitle: "D&O · Cyber · Political Risk · Fiduciary Liability",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    description: "Risk solutions for government entities, municipalities, and public sector organizations with unique liability profiles.",
    features: [
      { title: "Fiduciary Liability", description: "Protection for public officials against mismanagement claims." },
      { title: "Cyber Security", description: "Citizen data protection and critical infrastructure defense." },
      { title: "Political Risk", description: "Coverage for sanctions violations and regulatory investigations." }
    ]
  },
  "education-nonprofit": {
    slug: "education-nonprofit",
    title: "Education & Non-Profit",
    subtitle: "Cyber · D&O · EPLI · Property · Liability",
    heroImage: "https://images.unsplash.com/photo-1542744095-e262ec83c320?q=80&w=2070&auto=format&fit=crop",
    description: "Risk management for universities, schools, and non-profit organizations managing student safety and donor trust.",
    features: [
      { title: "Cyber Security", description: "Student and donor data protection with ransomware response." },
      { title: "Employment Practices", description: "Workplace discrimination and harassment liability for educational institutions." },
      { title: "Directors & Officers", description: "Board member protection for governance and fiduciary decisions." }
    ]
  },
  "emerging-industries": {
    slug: "emerging-industries",
    title: "Emerging & Niche Industries",
    subtitle: "Space · Drone · Climate Tech · AI · Cannabis · Autonomous",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    description: "Specialized risk solutions for frontier industries including space operations, drones, climate technology, AI, and cannabis.",
    features: [
      { title: "Space Insurance", description: "Launch and in-orbit coverage for satellite and space technology operations." },
      { title: "Drone Liability", description: "Coverage for commercial drone accidents and cargo delivery failures." },
      { title: "AI Liability", description: "Protection against algorithmic bias and autonomous system failures." }
    ]
  }
};

export const useCasesData: Record<string, DynamicPageContent> = {
  "unicorn-ipo": {
    slug: "unicorn-ipo",
    title: "Unicorn IPO — D&O Structuring",
    subtitle: "Pre-IPO allocation · Securities defense · EPL",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Structuring comprehensive Directors & Officers liability for a tech unicorn leading up to a major IPO.",
    features: [
      { title: "Pre-IPO Allocation", description: "Securing capacity early in a hard market." },
      { title: "Securities Defense", description: "Covering defense costs for prospectus-related claims." }
    ]
  },
  "pe-fund-exit": {
    slug: "pe-fund-exit",
    title: "PE Fund Exit — W&I Insurance",
    subtitle: "R&W policy · Escrow eliminated · Tax cover",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    description: "Eliminating deal friction and escrow requirements during a Private Equity exit using Warranty & Indemnity insurance.",
    features: [
      { title: "Escrow Elimination", description: "Freeing up capital that would otherwise be locked post-sale." },
      { title: "Tax Cover", description: "Insuring against identified contingent tax liabilities." }
    ]
  },
  "it-ransomware": {
    slug: "it-ransomware",
    title: "IT Firm Ransomware Attack",
    subtitle: "Forensics · Ransom · DPDP notification · BI",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    description: "Managing the crisis and financial fallout of a sophisticated ransomware attack on a global IT firm.",
    features: [
      { title: "Forensics & Ransom", description: "Immediate deployment of incident response and negotiation teams." },
      { title: "Business Interruption", description: "Reimbursing lost revenue during system downtime." }
    ]
  },
  "factory-fire": {
    slug: "factory-fire",
    title: "Factory Fire — BI + Rebuild",
    subtitle: "SFSP + BI · 36-month indemnity · Temp relocation",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    description: "Ensuring business continuity and full physical asset recovery following a catastrophic factory fire.",
    features: [
      { title: "36-Month Indemnity", description: "Extended BI coverage to match actual rebuild timelines." },
      { title: "Temp Relocation", description: "Covering increased costs of working from a temporary facility." }
    ]
  },
  "solar-park": {
    slug: "solar-park",
    title: "500 MW Solar Park",
    subtitle: "CAR + EAR + Production guarantee + Parametric",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    description: "Holistic risk transfer for a massive greenfield solar infrastructure project.",
    features: [
      { title: "Production Guarantee", description: "Hedging against low solar irradiance." },
      { title: "Parametric", description: "Rapid payout for extreme weather events." }
    ]
  },
  "nhai-highway": {
    slug: "nhai-highway",
    title: "NHAI 15-Year Highway Concession",
    subtitle: "Long-tenor property + BI + Surety + Parametric",
    heroImage: "https://images.unsplash.com/photo-1541888087401-443b2fbbfa78?q=80&w=2070&auto=format&fit=crop",
    description: "Securing a 15-year concession agreement with NHAI using long-tenor insurance and surety solutions.",
    features: [
      { title: "Surety Bonds", description: "Replacing bank guarantees to free up working capital." },
      { title: "Long-Tenor Property", description: "Locked-in rates for the duration of the concession." }
    ]
  },
  "supplier-flood": {
    slug: "supplier-flood",
    title: "Supplier Flood — CBI Activation",
    subtitle: "Unnamed CBI · Supply chain BI · Fast payout",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a63?q=80&w=2070&auto=format&fit=crop",
    description: "Activating Contingent Business Interruption when a critical tier-1 supplier was halted by regional flooding.",
    features: [
      { title: "Unnamed CBI", description: "Coverage triggered even without naming the specific supplier." },
      { title: "Fast Payout", description: "Expedited claims handling to maintain client cash flow." }
    ]
  },
  "sebi-adviser": {
    slug: "sebi-adviser",
    title: "SEBI-Registered Adviser PI",
    subtitle: "Mandatory PI · Suitability claim · SEBI defense",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Defending a SEBI-registered financial adviser against suitability claims and regulatory investigations.",
    features: [
      { title: "SEBI Defense", description: "Covering legal costs for regulatory inquiries." },
      { title: "Suitability Claim", description: "Protection against allegations of improper investment advice." }
    ]
  }
};

export const solutionsCategories = {
  "property-asset-protection": {
    slug: "property-asset-protection",
    title: "Property & Asset Protection",
    subtitle: "Physical asset security across enterprise operations",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    description: "Comprehensive protection for buildings, machinery, inventory, and revenue streams against fire, natural disasters, theft, and operational perils.",
    solutions: ["property-all-risks", "business-interruption", "construction-risk", "marine-cargo", "parametric-insurance"]
  },
  "liability-governance": {
    slug: "liability-governance",
    title: "Liability & Governance Shield",
    subtitle: "Enterprise protection from legal and regulatory exposures",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop",
    description: "Protection against third-party claims, product liability, professional errors, board decisions, and evolving AI and cyber liabilities.",
    solutions: ["general-liability", "product-liability", "directors-officers", "professional-indemnity", "cyber-liability"]
  },
  "financial-transaction-risk": {
    slug: "financial-transaction-risk",
    title: "Financial & Transaction Risk",
    subtitle: "Credit, guarantee, and M&A risk transfer solutions",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Coverage for accounts receivable, contractual guarantees, transaction risk, and political uncertainty in emerging markets.",
    solutions: ["trade-credit", "surety-bonds", "ma-insurance", "political-risk"]
  },
  "emerging-risk-solutions": {
    slug: "emerging-risk-solutions",
    title: "Emerging Risk Solutions",
    subtitle: "Innovative coverage for frontier exposures",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43470bc77f68?q=80&w=2070&auto=format&fit=crop",
    description: "Parametric triggers, AI liability, space insurance, climate risk, and cyber-physical convergence addressing novel enterprise exposures.",
    solutions: ["parametric-insurance", "climate-risk-solutions", "ai-risk-solutions", "space-insurance"]
  },
  "alternative-risk-transfer": {
    slug: "alternative-risk-transfer",
    title: "Alternative Risk Transfer",
    subtitle: "Captives, ILS, and self-insurance optimization",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    description: "Insurance-linked securities, captive insurance, and self-insurance solutions for enterprises seeking control over premium volatility and risk retention.",
    solutions: ["captive-insurance", "parametric-insurance", "ils-cat-bonds"]
  }
};

export const solutionsIndustryMapping: Record<string, string[]> = {
  "property-all-risks": ["Manufacturing & Industrial", "Real Estate", "Retail & E-Commerce", "Healthcare", "Energy & Renewables", "Technology & SaaS"],
  "business-interruption": ["Manufacturing & Industrial", "Retail & E-Commerce", "Hospitality", "Healthcare", "Data Centers"],
  "construction-risk": ["Construction & Engineering", "Infrastructure", "Real Estate Development"],
  "marine-cargo": ["Manufacturing", "Automotive", "Pharmaceuticals", "Food & Beverage", "Electronics"],
  "general-liability": ["All Industries", "Retail", "Hospitality", "Technology"],
  "product-liability": ["Manufacturing", "Automotive", "Consumer Electronics", "Pharmaceuticals"],
  "directors-officers": ["All Industries", "Financial Services", "Technology", "Healthcare"],
  "professional-indemnity": ["Professional Services", "IT Services", "Financial Advisors", "Legal"],
  "cyber-liability": ["Technology", "Financial Services", "Healthcare", "Retail"],
  "trade-credit": ["Manufacturing", "Wholesale & Distribution", "Automotive"],
  "surety-bonds": ["Construction", "Infrastructure", "Government"],
  "ma-insurance": ["Private Equity", "Technology", "Healthcare", "Financial Services"],
  "political-risk": ["Infrastructure", "Energy", "Mining", "Renewables"],
  "parametric-insurance": ["Agriculture", "Energy", "Manufacturing", "Construction"],
  "climate-risk-solutions": ["Real Estate", "Energy", "Infrastructure", "Manufacturing"],
  "ai-risk-solutions": ["Technology", "Financial Services", "Healthcare", "Automotive"],
  "space-insurance": ["Technology", "Defense", "Telecommunications"],
  "captive-insurance": ["Large Enterprise", "MNC", "Financial Services"],
  "ils-cat-bonds": ["Large Enterprise", "MNC", "Insurance Companies"]
};

export type SolutionCategory = keyof typeof solutionsCategories;
export type SolutionSlug = string;

export const officeLocations = [
  {
    id: "us-office",
    name: "US Office",
    address: "501 E Kennedy Blvd Suite 1400\nTampa, FL 33602, United States",
    email: "connect@trustflow.in",
    phone: "+91 9513288612"
  },
  {
    id: "singapore-office",
    name: "Singapore Office",
    address: "5 Temasek Boulevard, 17th Floor\nSingapore 038985",
    email: "connect@trustflow.in",
    phone: "+65 6050 5235"
  },
  {
    id: "india-office",
    name: "India Office",
    address: "TRUSTGRID.AI INNNOVATION PVT LTD\nSuite : 32 , 235, BINNAMANGALA,\n2nd Floor, 13th Cross Road,\nIndira Nagar 2nd Stage, Hoysala Nagar,\nBengaluru – 560038 , India",
    email: "",
    phone: ""
  },
  {
    id: "mumbai-office",
    name: "Mumbai Office",
    address: "WeWork, Raheja Platinum,\nRoad, off Andheri - Kurla Road,\nSag Baug, Marol, Andheri East,\nMumbai, Maharashtra 400059",
    email: "cs@trustflow.in",
    phone: "+91 9513088612"
  },
  {
    id: "bangalore-office",
    name: "Bangalore Office",
    address: "WeWork, 13th floor, Tin Factory,\nSalarpuria Magnificia, 78, Old Madras Rd,\nnext to KR Puram, Mahadevapura,\nBengaluru, Karnataka 560016",
    email: "cs@trustflow.in",
    phone: "+91 9513088612"
  }
];

export const newLeadershipTeam = [
  {
    id: "leadership-risk-ai-governance",
    name: "Leadership Team – Risk Management, AI & Governance",
    members: [
      {
        id: "murali",
        name: "Murali Venkat",
        title: "Chief AI & Risk Officer (CAIRO)",
        location: "India",
        bio: "Chief AI & Risk Officer (CAIRO)",
        image: ""
      },
      {
        id: "sowmya",
        name: "Sowmya Venugopal",
        title: "Global Head of Business Risk & ESG",
        location: "India",
        bio: "Global Head of Business Risk & ESG",
        image: ""
      },
      {
        id: "vinod",
        name: "Vinod",
        title: "Enterprise Risk Director",
        location: "India",
        bio: "Enterprise Risk Director",
        image: ""
      },
      {
        id: "kumaraguru",
        name: "Kumaraguru",
        title: "Head of Cyber Risk & Digital Resilience",
        location: "India",
        bio: "Head of Cyber Risk & Digital Resilience",
        image: ""
      },
      {
        id: "narayanan",
        name: "Narayanan",
        title: "Head of Governance, Risk & Compliance (GRC)",
        location: "India",
        bio: "Head of Governance, Risk & Compliance (GRC)",
        image: ""
      }
    ]
  },
  {
    id: "additional-strategic-practice-leads",
    name: "Additional Strategic Practice Leads",
    members: [
      {
        id: "risk-intelligence-lead",
        name: "TBD",
        title: "Head – Risk Intelligence, Analytics & Predictive Insights",
        location: "Global",
        bio: "Head – Risk Intelligence, Analytics & Predictive Insights – TBD",
        image: ""
      },
      {
        id: "crisis-disaster-lead",
        name: "TBD",
        title: "Head – Crisis & Disaster Risk Management",
        location: "Global",
        bio: "Head – Crisis & Disaster Risk Management – TBD",
        image: ""
      }
    ]
  }
];

export const leadershipTeam = [
  {
    id: "executive",
    name: "Executive Leadership",
    members: [
      {
        id: "balaji",
        name: "Balaji Venkatraman",
        title: "Director Growth",
        location: "India",
        bio: "Driving strategic growth and market expansion across global enterprise risk solutions.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "lavanya",
        name: "Lavanya Seshadri",
        title: "Engineering Head",
        location: "India",
        bio: "Leading engineering excellence and platform architecture for enterprise risk technology.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c501de802?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "vignesh",
        name: "Vignesh KS",
        title: "Product Lead",
        location: "India",
        bio: "Defining product vision and roadmap for AI-powered risk intelligence platforms.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "ai-engineering",
    name: "AI Engineering",
    members: [
      {
        id: "dinesh",
        name: "Dinesh Kumar",
        title: "Lead AI Engineer",
        location: "India",
        bio: "Leading AI model development and deep learning research for risk prediction systems.",
        image: "https://images.unsplash.com/photo-1500648562565-61b4a6d7a8c9?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "hemalatha",
        name: "Hemalatha",
        title: "AI Engineer & Tech Lead",
        location: "India",
        bio: "Tech lead overseeing AI engineering initiatives and cross-functional delivery.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "prithivin",
        name: "Prithivin L",
        title: "Project Lead",
        location: "India",
        bio: "Project lead managing end-to-end delivery of enterprise AI risk solutions.",
        image: "https://images.unsplash.com/photo-1567532237091-e9d7de4b52c8?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "shiva-kumar",
        name: "Shiva Kumar",
        title: "Senior Product Architect",
        location: "India",
        bio: "Senior architect designing scalable product infrastructure for risk platforms.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "architecture",
    name: "Architecture & DevOps",
    members: [
      {
        id: "natarajan",
        name: "Natarajan",
        title: "Sr Blockchain Architect",
        location: "India",
        bio: "Senior blockchain architect building decentralized risk and insurance solutions.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "ritin",
        name: "Ritin",
        title: "Senior AI Architect",
        location: "India",
        bio: "Senior architect responsible for AI system design and ML platform strategy.",
        image: "https://images.unsplash.com/photo-1500648562565-61b4a6d7a8c9?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "viswanath",
        name: "Viswanath",
        title: "Sr DevOps Engineer",
        location: "India",
        bio: "Senior DevOps engineer managing cloud infrastructure and CI/CD pipelines.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "ai-specialists",
    name: "AI Specialists",
    members: [
      {
        id: "subashini",
        name: "Subashini Kaushik",
        title: "AI Engineer - LLM / RAG",
        location: "India",
        bio: "AI engineer specializing in LLM fine-tuning and retrieval-augmented generation systems.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c501de802?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "shwetha",
        name: "Shwetha B",
        title: "Full Stack AI Engineer",
        location: "India",
        bio: "Full stack AI engineer building end-to-end intelligent applications.",
        image: "https://images.unsplash.com/photo-1567532237091-e9d7de4b52c8?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "sharyas",
        name: "Sharyas Yagna",
        title: "AI Engineer",
        location: "India",
        bio: "AI engineer focused on machine learning models and predictive analytics.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "pranav",
        name: "Pranav Kapoor",
        title: "AI Engineer",
        location: "India",
        bio: "AI engineer developing intelligent automation and risk scoring systems.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "sonu",
        name: "Sonu Priyadarshini",
        title: "RPA Engineer",
        location: "India",
        bio: "RPA engineer automating complex risk workflows and business processes.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "platform-engineering",
    name: "Platform Engineering",
    members: [
      {
        id: "neha",
        name: "Neha Hebber",
        title: "FinTech Platform Engineer",
        location: "India",
        bio: "FinTech platform engineer building secure and scalable financial risk systems.",
        image: "https://images.unsplash.com/photo-1500648562565-61b4a6d7a8c9?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "swathi",
        name: "Swathi Iyer",
        title: "IIT Madras - BTech",
        location: "India",
        bio: "BTech graduate from IIT Madras contributing to platform engineering and risk modeling.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c501de802?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "aishwarya",
        name: "Aishwarya L Bhatt",
        title: "AI Performance Marketing",
        location: "India",
        bio: "AI performance marketing specialist optimizing digital campaigns and lead generation.",
        image: "https://images.unsplash.com/photo-1567532237091-e9d7de4b52c8?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "chintya",
        name: "Chintya Liu",
        title: "Industry Consultant",
        location: "India",
        bio: "Industry consultant providing domain expertise across insurance and risk verticals.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "kallol",
        name: "Kallol Pal",
        title: "Technology Advisor",
        location: "India",
        bio: "Technology advisor guiding enterprise architecture and digital transformation.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "interns",
    name: "Interns",
    members: [
      {
        id: "soumya",
        name: "Soumya S",
        title: "Company Secretary & Admin",
        location: "India",
        bio: "Supporting company secretarial functions and administrative operations.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "annapoorani",
        name: "Annapoorani",
        title: "Automation Engineering",
        location: "India",
        bio: "Automation engineering intern contributing to workflow and process optimization.",
        image: "https://images.unsplash.com/photo-1500648562565-61b4a6d7a8c9?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "poojasri",
        name: "Poojasri",
        title: "AI Engineering (Intern)",
        location: "India",
        bio: "AI engineering intern supporting machine learning and data science initiatives.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c501de802?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "harikrishnan",
        name: "HariKrishnan K",
        title: "AI Engineering (Intern)",
        location: "India",
        bio: "AI engineering intern working on risk prediction and NLP models.",
        image: "https://images.unsplash.com/photo-1567532237091-e9d7de4b52c8?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "praveen",
        name: "Praveen Kumar R",
        title: "AI Engineering (Intern)",
        location: "India",
        bio: "AI engineering intern contributing to model training and evaluation.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "sathya",
        name: "Sathya M",
        title: "AI Engineering (Intern)",
        location: "India",
        bio: "AI engineering intern driving innovative solutions in machine learning and risk analytics.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
      }
    ]
  }
];

export const aboutUsData: Record<string, DynamicPageContent> = {
  "our-story": {
    slug: "our-story",
    title: "Company Overview",
    subtitle: "Protect the Balance Sheet. Enable the Business Plan.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "TRUSTFLOW operates at the intersection of corporate governance, capital efficiency, and strategic risk transfer. We act as trusted advisors to executive boards, risk managers, and institutional investors across 150+ countries. Our approach transcends traditional brokerage—we build resilient architectures that withstand the complexities of the modern global economy.",
    features: [
      { title: "Enterprise Value Preserved", description: "Securing physical assets, intellectual property, brand equity, and stakeholder trust against tail risks." },
      { title: "Earnings Volatility Reduced", description: "Stabilizing cash flow, safeguarding debt covenants, and ensuring investor confidence during disruptions." },
      { title: "Strategic Optionality Maintained", description: "Enabling aggressive expansion, cross-border M&A, and R&D pipelines with robust insurance backing." }
    ]
  },
  "leadership": {
    slug: "leadership",
    title: "Leadership & Team",
    subtitle: "Specialist Risk Underwriters and Claims Advocates",
    heroImage: "https://images.unsplash.com/photo-1521791136001-8038a031ab48?q=80&w=2070&auto=format&fit=crop",
    description: "Our leadership is comprised of seasoned risk architects, ex-loss adjusters, legal counsel, and sector practice leaders. Rather than generalist brokers, we deploy dedicated experts who speak the language of your industry and run proprietary benchmarking models.",
    features: [
      { title: "Executive Leadership", description: "Visionary executives with 25+ years guiding global insurance and reinsurance strategies." },
      { title: "Technology Team", description: "Engineering and data science specialists building risk models and analytics platforms." },
      { title: "Advisory Board", description: "Independent directors and industry veterans providing strategic oversight." },
      { title: "Global Delivery", description: "Client service teams operating across our international office network." }
    ]
  },
  "credentials": {
    slug: "credentials",
    title: "Credentials & Regulatory",
    subtitle: "IRDAI broker licence · Lloyd's coverholder · FCA · GIFT City IFSCA",
    heroImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    description: "Fully licensed and regulated to operate across major global financial and insurance hubs.",
    features: [
      { title: "IRDAI & FCA", description: "Direct broking licenses in India and the UK." },
      { title: "GIFT City IFSCA", description: "Pioneering captive and reinsurance solutions in India's first IFSC." }
    ]
  },
  "markets": {
    slug: "markets",
    title: "Markets & Carrier Relationships",
    subtitle: "A++ carriers · Lloyd's syndicates · Reinsurers",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Direct access to global capacity, ensuring competitive pricing and robust security for our clients.",
    features: [
      { title: "Lloyd's Syndicates", description: "Direct placement capabilities into the London market." },
      { title: "Global Reinsurers", description: "Structuring facultative support for massive risk aggregates." }
    ]
  },
  "global-presence": {
    slug: "global-presence",
    title: "Global Presence & Office Locations",
    subtitle: "Operating Across 5 Strategic Hubs",
    heroImage: "https://images.unsplash.com/photo-1526304640581-b13c124b72bc?q=80&w=2070&auto=format&fit=crop",
    description: "Our international office network ensures we are always close to our clients, providing local expertise with global scale. Each office is staffed with specialists who understand regional risk dynamics and regulatory requirements.",
    features: [
      { title: "US Office (HQ)", description: "New York headquarters managing North American and European operations." },
      { title: "Singapore Office", description: "Asia-Pacific hub for Southeast Asian and ANZ market coverage." },
      { title: "India - GIFT City", description: "International financial services center for captive insurance solutions." },
      { title: "India - Mumbai", description: "Western India operations and financial sector specialization." },
      { title: "India - Bangalore", description: "Technology and innovation center for risk engineering." }
    ]
  },
  "esg": {
    slug: "esg",
    title: "ESG & Sustainability",
    subtitle: "Green premium discounts · Climate advisory · BRSR",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    description: "Integrating environmental, social, and governance metrics into risk profiling to achieve better market terms.",
    features: [
      { title: "Green Premium Discounts", description: "Leveraging strong ESG scores for rate reductions." },
      { title: "Climate Advisory", description: "TCFD alignment and stranded asset risk modelling." }
    ]
  },
  "careers": {
    slug: "careers",
    title: "Careers",
    subtitle: "Risk brokers · Claims advocates · Actuaries",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    description: "Join a high-performance team of technical experts shaping the future of enterprise risk.",
    features: [
      { title: "Risk Brokers", description: "Structuring complex deals for Fortune 500s." },
      { title: "Actuaries & Analysts", description: "Building TCOR models and parametric indices." }
    ]
  }
};
