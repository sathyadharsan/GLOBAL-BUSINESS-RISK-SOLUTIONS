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

export const aboutUsData: Record<string, DynamicPageContent> = {
  "our-story": {
    slug: "our-story",
    title: "Our Story & Mission",
    subtitle: "Founded · Philosophy · 'Protect the Balance Sheet' · 150+ countries",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "We are risk architects. We don't just sell insurance; we design structural balance sheet protection for the world's most dynamic enterprises.",
    features: [
      { title: "Protect the Balance Sheet", description: "Our core philosophy driving every placement." },
      { title: "Global Reach", description: "Executing programs across 150+ countries with local compliance." }
    ]
  },
  "leadership": {
    slug: "leadership",
    title: "Leadership & Team",
    subtitle: "Risk architects · Sector practice leaders · Claims team",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop",
    description: "Meet the executive team and practice leaders who bring decades of specialized underwriting and broking experience.",
    features: [
      { title: "Sector Practice Leaders", description: "Deep domain experts running specific industry verticals." },
      { title: "Claims Advocacy Team", description: "Ex-adjusters and lawyers fighting for your recoveries." }
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
