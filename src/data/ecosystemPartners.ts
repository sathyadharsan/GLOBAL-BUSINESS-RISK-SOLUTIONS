import type { DynamicPageContent } from "./siteContent";

export interface EcosystemPartner {
  name: string;
  category: "carrier" | "insurtech" | "warranty" | "technology" | "legal" | "reinsurance" | "emerging";
  headquarters: string;
  description: string;
  integrationModel: string;
  website: string;
  featured?: boolean;
}

export const ecosystemPartners: EcosystemPartner[] = [
  // Category 1: Global Insurance Carrier Partners
  {
    name: "AXA XL",
    category: "carrier",
    headquarters: "France/Switzerland",
    description: "Top-tier syndicates & market capacity for cross-border cyber + specialty programs",
    integrationModel: "Primary carrier for cross-border programs; API integration for real-time quoting",
    website: "https://axaxl.com",
    featured: true
  },
  {
    name: "Chubb Ltd.",
    category: "carrier",
    headquarters: "USA/Switzerland",
    description: "Cyber, D&O, Property, EPLI, Product Liability specialist",
    integrationModel: "Lead carrier for management liability towers; dedicated claims specialists in TRUSTFLOW workflow",
    website: "https://chubb.com",
    featured: true
  },
  {
    name: "Allianz SE",
    category: "carrier",
    headquarters: "Germany",
    description: "Cyber, Property, Liability, Engineering, Marine, Aviation coverage",
    integrationModel: "Global program carrier; threat intelligence feeds integrated into client dashboard",
    website: "https://allianz.com",
    featured: true
  },
  {
    name: "AIG",
    category: "carrier",
    headquarters: "USA",
    description: "Cyber, D&O, Trade Credit, Political Risk, K&R specialist",
    integrationModel: "Lead carrier for political risk and trade credit programs",
    website: "https://aig.com",
    featured: true
  },
  {
    name: "Zurich Insurance",
    category: "carrier",
    headquarters: "Switzerland",
    description: "Cyber, Property, Liability, Construction, Product Recall specialist",
    integrationModel: "Lead carrier for construction + engineering programs",
    website: "https://zurich.com",
    featured: true
  },
  {
    name: "Beazley",
    category: "carrier",
    headquarters: "UK",
    description: "Cyber specialist carrier; breach response services",
    integrationModel: "Cyber specialist partner; breach response integrated into multi-layered cyber architecture",
    website: "https://beazley.com",
    featured: true
  },
  {
    name: "Hiscox",
    category: "carrier",
    headquarters: "UK",
    description: "Professional Indemnity, E&O, Cyber, D&O for SME + mid-market",
    integrationModel: "Technology E&O and SME cyber provider",
    website: "https://hiscox.co.uk",
    featured: true
  },
  {
    name: "Travelers",
    category: "carrier",
    headquarters: "USA",
    description: "Cyber, Property, Business Interruption, Workers' Comp",
    integrationModel: "US-focused commercial programs; cross-border extension via TRUSTFLOW",
    website: "https://travelers.com",
    featured: true
  },
  {
    name: "Liberty Mutual",
    category: "carrier",
    headquarters: "USA",
    description: "Multinational Business, Property, Workers' Comp, Surety",
    integrationModel: "Multinational program carrier; strong surety capability",
    website: "https://libertymutual.com",
    featured: true
  },

  // Category 2: Insurtech & Digital Insurance Partners
  {
    name: "Coalition",
    category: "insurtech",
    headquarters: "USA",
    description: "Active Cyber Insurance + 24/7 Security Monitoring + Incident Response",
    integrationModel: "Primary cyber prevention + monitoring partner; Layer 1 of multi-carrier cyber architecture",
    website: "https://coalitioninc.com",
    featured: true
  },
  {
    name: "Next Insurance (ERGO NEXT)",
    category: "insurtech",
    headquarters: "USA",
    description: "Digital-first SMB Insurance, Workers' Comp, Multi-Location",
    integrationModel: "SMB referral partner; API integration for instant referral + coverage",
    website: "https://nextinsurance.com",
    featured: true
  },
  {
    name: "Coterie",
    category: "insurtech",
    headquarters: "USA",
    description: "API-based Commercial Business Insurance, Real-time Quotes",
    integrationModel: "Embedded insurance API partner for instant commercial quotes",
    website: "https://coterieinsurance.com",
    featured: true
  },
  {
    name: "Wefox",
    category: "insurtech",
    headquarters: "Germany",
    description: "Smart Insurance Distribution, MGA Services, Digital Platform",
    integrationModel: "Pan-European distribution partner for EU market access",
    website: "https://wefox.com",
    featured: true
  },
  {
    name: "Bolttech",
    category: "insurtech",
    headquarters: "Singapore",
    description: "Embedded Insurance, 700+ Distributors, 230+ Insurers, 6,500+ Products",
    integrationModel: "Embedded insurance infrastructure for warranty + insurance programs",
    website: "https://bolttech.com",
    featured: true
  },
  {
    name: "Lemonade",
    category: "insurtech",
    headquarters: "USA",
    description: "AI-driven Underwriting & Claims Processing",
    integrationModel: "AI claims processing technology licensing for commercial adaptation",
    website: "https://lemonade.com",
    featured: true
  },
  {
    name: "Vouch",
    category: "insurtech",
    headquarters: "USA",
    description: "AI Insurance (first-of-its-kind), Tech E&O, Cyber for Startups",
    integrationModel: "Startup insurance partner; AI risk framework incorporated into emerging tech coverage",
    website: "https://vouch.us",
    featured: true
  },
  {
    name: "ACKO",
    category: "insurtech",
    headquarters: "India",
    description: "Enterprise/Business Insurance, API-first, Zero Commission",
    integrationModel: "India market partner; API integration for Indian commercial distribution",
    website: "https://acko.com",
    featured: true
  },
  {
    name: "Digit Insurance",
    category: "insurtech",
    headquarters: "India",
    description: "Business, Cyber, Property, Claims in 90 Seconds",
    integrationModel: "Claims speed innovation benchmark for 40% improvement target",
    website: "https://digit.in",
    featured: true
  },
  {
    name: "SafeTree",
    category: "insurtech",
    headquarters: "India",
    description: "AI Surety Bond Tool, Project-linked Insurance",
    integrationModel: "AI-powered surety bond assessment model adapted globally",
    website: "https://safetree.in",
    featured: true
  },

  // Category 3: Warranty & Guarantee Platform Partners
  {
    name: "Assurant",
    category: "warranty",
    headquarters: "USA",
    description: "Extended Warranty Programs, Mobile Device Protection, Flood Insurance",
    integrationModel: "Primary warranty underwriting partner for consumer electronics + mobile",
    website: "https://assurant.com",
    featured: true
  },
  {
    name: "Fortegra",
    category: "warranty",
    headquarters: "USA",
    description: "Warranty Solutions, Credit Protection, Specialty Underwriting",
    integrationModel: "Specialty warranty partner for niche products + services",
    website: "https://fortegra.com",
    featured: true
  },
  {
    name: "Domestic & General",
    category: "warranty",
    headquarters: "UK",
    description: "Extended Warranty, Appliance Protection, Digital Warranty Platform",
    integrationModel: "European warranty partner; digital-first warranty distribution",
    website: "https://domesticandgeneral.com",
    featured: true
  },
  {
    name: "Cover Genius",
    category: "warranty",
    headquarters: "Australia",
    description: "Embedded Warranty & Insurance, XCover Platform, 60+ Countries",
    integrationModel: "Global embedded warranty infrastructure partner",
    website: "https://covergenius.com",
    featured: true
  },

  // Category 4: 3rd-Party Technology Partners
  {
    name: "Everstream Analytics",
    category: "technology",
    headquarters: "USA",
    description: "Supply chain risk monitoring + predictive analytics",
    integrationModel: "Supply chain risk visualization in TRUSTFLOW client dashboard",
    website: "https://everstream.ai"
  },
  {
    name: "Interos",
    category: "technology",
    headquarters: "USA",
    description: "Multi-tier supply chain risk mapping + continuous monitoring",
    integrationModel: "Real-time supply chain risk feed for TRUSTFLOW risk intelligence",
    website: "https://interos.ai"
  },
  {
    name: "Verisk Maplecroft",
    category: "technology",
    headquarters: "UK",
    description: "Political risk, human rights, environmental risk data by geography",
    integrationModel: "Political risk heat map + country risk scoring for clients",
    website: "https://maplecroft.com"
  },
  {
    name: "CyberCube Analytics",
    category: "technology",
    headquarters: "USA",
    description: "Cyber risk modeling for insurance",
    integrationModel: "Cyber risk modeling engine for program design",
    website: "https://cybcube.com",
    featured: true
  },
  {
    name: "BitSight",
    category: "technology",
    headquarters: "USA",
    description: "Continuous security ratings for organizations",
    integrationModel: "Cyber risk monitoring feed integrated into client dashboard",
    website: "https://bitsight.com"
  },
  {
    name: "SecurityScorecard",
    category: "technology",
    headquarters: "USA",
    description: "Security ratings and cyber risk intelligence",
    integrationModel: "Security posture continuous monitoring",
    website: "https://securityscorecard.com"
  },
  {
    name: "Moody's RMS",
    category: "technology",
    headquarters: "USA",
    description: "Catastrophe risk modeling (hurricane, earthquake, flood, wildfire)",
    integrationModel: "Property catastrophe risk assessment for programs",
    website: "https://rms.com"
  },
  {
    name: "Jupiter Intelligence",
    category: "technology",
    headquarters: "USA",
    description: "Climate risk analytics (physical + transition)",
    integrationModel: "Climate scenario analysis for TRUSTFLOW clients",
    website: "https://jupiterintel.com"
  },
  {
    name: "Chainalysis",
    category: "technology",
    headquarters: "USA",
    description: "Blockchain analytics + crypto compliance",
    integrationModel: "Crypto transaction monitoring for crypto risk clients",
    website: "https://chainalysis.com"
  },
  {
    name: "Elliptic",
    category: "technology",
    headquarters: "UK",
    description: "Crypto compliance and blockchain analytics",
    integrationModel: "Digital asset compliance monitoring",
    website: "https://elliptic.co"
  },
  {
    name: "Fireblocks",
    category: "technology",
    headquarters: "USA",
    description: "Digital asset custody + transfer infrastructure",
    integrationModel: "Crypto custody risk assessment for warranty programs",
    website: "https://fireblocks.com"
  },
  {
    name: "Flock",
    category: "technology",
    headquarters: "UK",
    description: "AI-powered drone insurance, real-time risk assessment",
    integrationModel: "Real-time drone risk pricing based on weather and airspace",
    website: "https://flockcover.com",
    featured: true
  },
  {
    name: "Satellite Vu",
    category: "technology",
    headquarters: "UK",
    description: "Satellite imagery + thermal monitoring",
    integrationModel: "Geospatial risk monitoring for property and energy clients",
    website: "https://satellitevu.com"
  },
  {
    name: "Palantir",
    category: "technology",
    headquarters: "USA",
    description: "Data analytics + risk intelligence platform",
    integrationModel: "Enterprise risk data integration for large clients",
    website: "https://palantir.com"
  },
  {
    name: "Snowflake",
    category: "technology",
    headquarters: "USA",
    description: "Data platform + analytics",
    integrationModel: "Risk data warehousing + analytics backbone",
    website: "https://snowflake.com"
  },
  {
    name: "Okta",
    category: "technology",
    headquarters: "USA",
    description: "Identity verification + access management",
    integrationModel: "Identity federation for client portal and partner ecosystem",
    website: "https://okta.com"
  },
  {
    name: "Stripe",
    category: "technology",
    headquarters: "USA",
    description: "Payment processing + financial infrastructure",
    integrationModel: "Premium payment processing + warranty claims disbursement",
    website: "https://stripe.com",
    featured: true
  },
  {
    name: "Kira Systems",
    category: "technology",
    headquarters: "Canada",
    description: "AI contract analysis platform",
    integrationModel: "AI-powered contract risk extraction engine",
    website: "https://kirasystems.com"
  },
  {
    name: "Luminance",
    category: "technology",
    headquarters: "UK",
    description: "AI-powered contract review and analysis",
    integrationModel: "Contract analytics for TRUSTFLOW's legal risk module",
    website: "https://luminance.com"
  },

  // Category 5: Insurance Brokerage & Advisory Partners
  {
    name: "Marsh McLennan",
    category: "legal",
    headquarters: "USA",
    description: "Global brokerage, risk advisory, reinsurance",
    integrationModel: "Collaboration partner for largest global programs",
    website: "https://marsh.com"
  },
  {
    name: "Aon plc",
    category: "legal",
    headquarters: "Ireland/USA",
    description: "Risk brokerage, actuarial, reinsurance, M&A",
    integrationModel: "Collaborative partner for M&A transaction solutions",
    website: "https://aon.com"
  },
  {
    name: "Willis Towers Watson",
    category: "legal",
    headquarters: "UK",
    description: "Global brokerage, analytics, human capital",
    integrationModel: "Analytics collaboration for enterprise risk quantification",
    website: "https://wtw.com"
  },
  {
    name: "Lockton Companies",
    category: "legal",
    headquarters: "USA",
    description: "Independent brokerage, cyber, risk advisory",
    integrationModel: "Collaborative on specialty placements; carrier-agnostic philosophy alignment",
    website: "https://lockton.com"
  },
  {
    name: "Howden",
    category: "legal",
    headquarters: "UK",
    description: "Commercial risk, specialty lines, global broker",
    integrationModel: "European + emerging market collaboration",
    website: "https://howdengroup.com"
  },

  // Category 6: Claims & Legal Partners
  {
    name: "Crawford & Company",
    category: "legal",
    headquarters: "USA",
    description: "Global claims management",
    integrationModel: "Third-party claims administrator integrated into advocacy workflow",
    website: "https://crawfordandcompany.com"
  },
  {
    name: "Sedgwick",
    category: "legal",
    headquarters: "USA",
    description: "Claims management + adjusting",
    integrationModel: "Alternative claims TPA for specific geographies/lines",
    website: "https://sedgwick.com"
  },
  {
    name: "Kennedys Law",
    category: "legal",
    headquarters: "UK",
    description: "Insurance-focused law firm",
    integrationModel: "Legal counsel for complex claims and coverage disputes",
    website: "https://kennedys.com"
  },
  {
    name: "Clyde & Co",
    category: "legal",
    headquarters: "UK",
    description: "Insurance + maritime + aviation law",
    integrationModel: "Specialist legal partner for marine, aviation, and specialty claims",
    website: "https://clydeco.com"
  },
  {
    name: "DLA Piper",
    category: "legal",
    headquarters: "USA",
    description: "Global law firm, corporate + regulatory",
    integrationModel: "Cross-border regulatory + compliance advisory partner",
    website: "https://dlapiper.com"
  },

  // Category 7: Reinsurance & Capital Markets Partners
  {
    name: "Munich Re",
    category: "reinsurance",
    headquarters: "Germany",
    description: "Reinsurance, Risk Modeling, Parametric Products",
    integrationModel: "Parametric product development partner; reinsurance capacity",
    website: "https://munichre.com",
    featured: true
  },
  {
    name: "Hannover Re",
    category: "reinsurance",
    headquarters: "Germany",
    description: "Reinsurance, Specialty Lines",
    integrationModel: "Reinsurance capacity + ILS structuring",
    website: "https://hannover-re.com"
  },
  {
    name: "Swiss Re",
    category: "reinsurance",
    headquarters: "Switzerland",
    description: "Reinsurance, Risk Modeling, Parametric Products",
    integrationModel: "Parametric product development; climate risk modeling",
    website: "https://swissre.com",
    featured: true
  },

  // Category 8: Emerging Technology Insurance Partners
  {
    name: "Evertas (Coincover)",
    category: "emerging",
    headquarters: "UK",
    description: "Crypto insurance, digital asset custody coverage",
    integrationModel: "Primary crypto insurance partner for custody and smart contract coverage",
    website: "https://coincover.com",
    featured: true
  },
  {
    name: "Relm Insurance",
    category: "emerging",
    headquarters: "UK",
    description: "Crypto, blockchain, Web3 insurance",
    integrationModel: "Specialist Web3 insurance partner for DeFi protocols and DAOs",
    website: "https://relminsurance.com",
    featured: true
  },
  {
    name: "Canopius",
    category: "emerging",
    headquarters: "UK",
    description: "Fintech insurance, digital assets, political risk",
    integrationModel: "Fintech + digital asset specialist within Lloyd's",
    website: "https://canopius.com"
  },
  {
    name: "Global Aerospace",
    category: "emerging",
    headquarters: "UK",
    description: "Aviation + space insurance",
    integrationModel: "Space launch + in-orbit insurance via specialist aviation/space market",
    website: "https://global-aero.com",
    featured: true
  },
  {
    name: "Tokio Marine Kiln",
    category: "emerging",
    headquarters: "UK",
    description: "Space, cyber, specialty insurance",
    integrationModel: "Lloyd's syndicate with space + emerging tech capability",
    website: "https://tokiomarinekiln.com"
  },
  {
    name: "Insurtech Gateway",
    category: "emerging",
    headquarters: "UK",
    description: "Specialist underwriting for drone operations",
    integrationModel: "Drone liability + hull insurance specialist",
    website: "https://insurtechgateway.com"
  },
  {
    name: "Verifly",
    category: "emerging",
    headquarters: "USA",
    description: "On-demand drone insurance",
    integrationModel: "Usage-based drone insurance for commercial operators",
    website: "https://verifly.com"
  },
  {
    name: "Dedrone",
    category: "emerging",
    headquarters: "USA",
    description: "Counter-drone technology + airspace security",
    integrationModel: "Drone threat monitoring for critical infrastructure clients",
    website: "https://dedrone.com"
  },
  {
    name: "Berkley Technology",
    category: "emerging",
    headquarters: "USA",
    description: "Technology firms, cyber, property, global",
    integrationModel: "Technology-specific coverage for quantum computing companies",
    website: "https://berkley.com"
  }
];

export const categoryLabels = {
  carrier: "Global Insurance Carriers",
  insurtech: "Insurtech & Digital Partners",
  warranty: "Warranty & Guarantee Partners",
  technology: "Risk Intelligence Technology",
  legal: "Claims & Advisory Partners",
  reinsurance: "Reinsurance & Capital Markets",
  emerging: "Emerging Risk Partners"
};