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
  "technology-saas": {
    slug: "technology-saas",
    title: "Technology & SaaS",
    subtitle: "Cyber · Tech E&O · D&O · AI liability · DPDP",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    description: "Specialized risk architecture for hyper-growth technology companies, managing intangible assets and complex liability exposures.",
    features: [
      { title: "Cyber Liability", description: "Comprehensive protection against ransomware, extortion, and data breaches." },
      { title: "Tech E&O", description: "Covering financial losses for clients resulting from software failure or service outage." },
      { title: "DPDP Compliance", description: "Managing regulatory fines and notification costs under new data privacy laws." }
    ]
  },
  "manufacturing": {
    slug: "manufacturing",
    title: "Manufacturing & Engineering",
    subtitle: "Property · BI · Product recall · PLI schemes · CBI",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    description: "Protecting physical assets, supply chains, and revenue streams for heavy industry and advanced manufacturing.",
    features: [
      { title: "Property & BI", description: "Protecting balance sheets from catastrophic facility damage and associated downtime." },
      { title: "Product Recall", description: "Covering the logistics and crisis management costs of withdrawing defective units." },
      { title: "CBI", description: "Contingent Business Interruption for critical unnamed suppliers." }
    ]
  },
  "energy": {
    slug: "energy",
    title: "Energy & Renewables",
    subtitle: "CAR · Production guarantee · Parametric · BESS",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    description: "Risk transfer for solar, wind, hydro, and traditional energy generation facilities globally.",
    features: [
      { title: "Production Guarantee", description: "Insuring against revenue loss due to lack of wind or solar irradiance." },
      { title: "BESS", description: "Specialized cover for Battery Energy Storage Systems and thermal runaway." },
      { title: "CAR", description: "Construction All Risks for greenfield energy projects." }
    ]
  },
  "fintech": {
    slug: "fintech",
    title: "Financial Services & Fintech",
    subtitle: "BBB · PI · Cyber · D&O · RBI / SEBI compliance",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Navigating the heavily regulated landscape of digital finance with bespoke liability placements.",
    features: [
      { title: "Bankers Blanket Bond", description: "Protection against internal fraud, electronic crime, and forgery." },
      { title: "SEBI Compliance", description: "Regulatory investigation defense costs and D&O structures." }
    ]
  },
  "infrastructure": {
    slug: "infrastructure",
    title: "Infrastructure & Real Estate",
    subtitle: "15-year programs · DSU · Surety · NMP projects",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Long-term capital protection for highways, ports, airports, and commercial real estate portfolios.",
    features: [
      { title: "15-Year Programs", description: "Locked-in terms for concession-based infrastructure projects." },
      { title: "DSU", description: "Delay in Start-Up cover protecting anticipated revenue during construction." }
    ]
  },
  "logistics": {
    slug: "logistics",
    title: "Trade, Logistics & Supply Chain",
    subtitle: "Marine · Fleet · Warehouse · Freight forwarder",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a63?q=80&w=2070&auto=format&fit=crop",
    description: "Seamless cargo and liability protection moving across borders and multimodal transport networks.",
    features: [
      { title: "Stock Throughput", description: "End-to-end coverage from raw materials to final destination." },
      { title: "Freight Forwarder Liability", description: "E&O and cargo liability for logistics operators." }
    ]
  },
  "agriculture": {
    slug: "agriculture",
    title: "Agriculture & Food Processing",
    subtitle: "PMFBY · Parametric · Recall · Cold chain",
    heroImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    description: "Protecting yields, securing supply chains, and ensuring food safety from farm to fork.",
    features: [
      { title: "Parametric Weather", description: "Index-based payouts for drought, excess rainfall, or temperature." },
      { title: "Cold Chain", description: "Spoilage coverage for temperature-sensitive transit." }
    ]
  },
  "healthcare": {
    slug: "healthcare",
    title: "Healthcare & Pharma",
    subtitle: "Clinical trials · Product recall · PI · USFDA recall",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    description: "Mitigating severe liability exposures in drug development, medical device manufacturing, and patient care.",
    features: [
      { title: "Clinical Trials", description: "No-fault compensation cover for trial participants globally." },
      { title: "USFDA Recall", description: "Financial protection against mandated withdrawals in the US market." }
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
