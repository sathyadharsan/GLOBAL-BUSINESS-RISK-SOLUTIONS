import type { OfferingLayoutProps } from "@/components/layout/OfferingLayout";

export interface OfferingData extends OfferingLayoutProps {
  slug: string;
}

export const offeringsData: Record<string, OfferingData> = {
  "property-sfsp": {
    slug: "property-sfsp",
    title: "Standard Fire & Special Perils (SFSP) / Commercial Property All Risks",
    subtitle: "Protecting the Physical Assets on the Balance Sheet",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "SFSP is the foundational balance-sheet protection for any enterprise with physical assets. It preserves replacement capital, ensures operational continuity after catastrophic loss, and satisfies lender and mortgagee covenants. For manufacturing and infrastructure-heavy economies like India, it is often the first policy a business purchases and the anchor of all subsequent risk finance.",
    challenges: [
      "Fire, lightning, explosion, and allied perils can destroy uninsured or underinsured assets, causing permanent business failure",
      "Underinsurance due to outdated valuations leads to average clause (pro-rata) penalties",
      "In India, factory license renewals and bank loan covenants often require proof of fire insurance with insurer endorsement",
      "Co-insurance requirements and debris removal costs erode net claim recovery",
      "Seasonal stock fluctuations create mid-year coverage gaps for retailers, agri-processors, and FMCG companies",
      "Business parks and shared facilities create co-occupant liability and contribution disputes"
    ],
    architecture: [
      { term: "Fire & Lightning", desc: "Direct damage from fire ignition and lightning strike, including scorching and smoke damage" },
      { term: "Explosion", desc: "Internal or external explosion; boiler explosion typically endorsed separately" },
      { term: "Riot, Strike, Malicious Damage", desc: "Civil unrest, labor action, vandalism; critical for urban commercial properties" },
      { term: "Storm, Cyclone, Flood", desc: "Wind-driven weather events and rising water; India's coastal belts require specific attention" },
      { term: "Earthquake", desc: "Optional add-on; India sits on high seismic zones II–V; critical for northern and eastern states" },
      { term: "Terrorism", desc: "Covered via pool arrangements (India Terrorism Pool / TRIA in US)" }
    ],
    expertCommentary: "The single most damaging underwriting error for property-owning businesses is outdated sum insured. Indian construction costs have risen 12–18% per year since 2020. A factory insured in 2018 on original build cost is likely underinsured by 40–60% today. Annual reinstatement cost surveys are essential, not optional. Average clause in Indian policies means the insurer reduces claims proportionally — a 50% underinsurance = 50% reduction in every claim paid.",
    indiaContext: [
      "Governed by IRDAI; standardized wordings from the Tariff Advisory Committee (TAC) era, now progressively deregulated",
      "Mandatory for most factory registrations, SEZ units, and bank-financed properties (mortgage clause required)",
      "GST on insurance premium at 18% (input credit available for businesses)",
      "Earthquake Zones II–V require mandatory add-on in many bank-financed structures; Zone V covers Gujarat, Himachal, Uttarakhand, J&K"
    ],
    matrix: {
      scale: "🟢🔵🟠🔴⚫ All Scales",
      scope: "🏠 In-Country | 🌐 Cross-Border | 🌍 Global",
      duration: "📅 Annual | 📆 Multi-Year | 🗓️ Strategic"
    }
  },
  "business-interruption": {
    slug: "business-interruption",
    title: "Business Interruption (BI) / Consequential Loss",
    subtitle: "Converting Asset Protection to Earnings Protection",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    ],
    valueText: "BI converts a property insurance policy from 'asset protection' to 'earnings protection.' It stabilizes cash flow during restoration, protects debt service capacity, preserves customer relationships, and retains key employees who might otherwise depart during a prolonged shutdown. Without BI, a business with fully insured buildings may still fail simply because it cannot meet payroll, loan repayments, and overhead during the reconstruction period.",
    challenges: [
      "43% of businesses globally never reopen after a catastrophic uninsured interruption — BI insurance is the survival mechanism",
      "Indemnity period selection (12 vs. 24 vs. 36 months) frequently underestimates actual rebuild time, especially in India",
      "Gross profit calculation methodology disputes with loss adjusters are the most litigated issue in BI claims",
      "Dependent properties (key suppliers, anchor tenants, critical customers) create unseen contingent exposures",
      "Extra expense to maintain operations (temporary relocation, outsourcing, overtime premiums) is chronically overlooked"
    ],
    architecture: [
      { term: "Loss of Gross Profit", desc: "Standing charges (fixed costs) + net profit + increased cost of working; the core BI coverage" },
      { term: "Indemnity Period", desc: "12, 18, 24, or 36 months; selected based on rebuild estimate plus ramp-up time plus business cycle" },
      { term: "Extended Period of Indemnity", desc: "Covers ramp-up period after physical restoration complete; business rarely returns to 100% day one" },
      { term: "Contingent BI (CBI) — Named", desc: "Loss from physical damage to specifically named suppliers, customers, or contract sites" },
      { term: "Denial of Access", desc: "Loss from government-ordered closure of nearby premises; applies to riot, pollution, crime scene" }
    ],
    expertCommentary: "The most common and expensive BI underinsurance error is selecting a 12-month indemnity period for a business that would genuinely take 24–36 months to restore. In India, add: site clearance (2–3 months), BBMP/municipal building plan re-approval (4–8 months), procurement of imported machinery (6–18 months), labour re-mobilization, and re-building. Buying 12 months saves ₹40,000 in premium and loses ₹4 crore in claim recovery.",
    indiaContext: [
      "Often placed as 'Fire Loss of Profit' or 'Consequential Loss' bundled with SFSP",
      "Critical for Indian manufacturing SMEs dependent on single-location production in industrial estates",
      "DSU (Delay in Start-Up) variant essential for infrastructure, power, and PPP projects to align with debt service obligations",
      "RBI mandates BI considerations in credit risk assessments for manufacturing sector loans above ₹10 crore"
    ],
    matrix: {
      scale: "🔵🟠🔴⚫ SME to MNC",
      scope: "🏠 In-Country | 🌐 Cross-Border | 🌍 Global",
      duration: "📅 Annual | 📆 Multi-Year | 🗓️ Strategic"
    }
  },
  "car-ear": {
    slug: "car-ear",
    title: "Contractors All Risks (CAR) / Erection All Risks (EAR)",
    subtitle: "Protecting Capital Concentration During Construction",
    images: [
      "https://images.unsplash.com/photo-1541888087401-443b2fbbfa78?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "Construction is capital concentration without revenue generation — it is the most financially dangerous phase of any asset's life. CAR/EAR protects the work-in-progress asset, ensuring that a fire, collapse, or flood during construction does not destroy the developer's equity, trigger lender covenant default, or cause project abandonment.",
    challenges: [
      "Construction sites are inherently high-risk environments: hot work (welding, cutting), deep excavation, height work",
      "Design errors during the construction phase create complex liability/property coverage overlaps",
      "Subcontractor default or subcontractor-caused damage creates multi-party coverage disputes",
      "Testing and commissioning phases carry unique failure risks not covered by standard operational policies",
      "Monsoon seasons in India (June–September) are the highest-risk construction period, causing significant schedule disruptions"
    ],
    architecture: [
      { term: "Section 1 — Contract Works", desc: "All physical loss or damage to the permanent and temporary works under construction" },
      { term: "Section 2 — Third-Party Liability", desc: "Bodily injury or property damage to third parties arising from construction activities" },
      { term: "EAR — Erection Works", desc: "Installation of machinery, equipment, structural steel; mechanical and electrical erection" },
      { term: "Advance Loss of Profits (ALOP/DSU)", desc: "Revenue lost from delayed project completion caused by an insured physical loss event" },
      { term: "Cross-Liability", desc: "Separates insured parties — owner, contractor, subcontractors — enabling claims between them" }
    ],
    expertCommentary: "In India, the subcontractor ecosystem is the primary source of CAR disputes. A Tier-1 contractor may employ 40+ subcontractors. When a subcontractor causes damage to the main works, the question 'which policy responds?' can paralyze claims for months. The solution is always cross-liability endorsement and ensuring all subcontractors are named insured.",
    indiaContext: [
      "CAR/EAR is effectively mandatory for all bank-financed infrastructure and commercial projects",
      "Project Insurance Scheme (PIS) has historically supported public sector projects",
      "EAR critical for India's PLI scheme manufacturing plants — semiconductor fabs, display fabs, solar module plants",
      "Monsoon risk requires specific storm/flood sub-limits and schedule provisions in Indian CAR policies"
    ],
    matrix: {
      scale: "🔵🟠🔴⚫ SME to MNC",
      scope: "🏠 In-Country | 🌐 Cross-Border | 🌍 Global",
      duration: "⏱️ Single Project | 📆 Multi-Year Program"
    }
  },
  "machinery-breakdown": {
    slug: "machinery-breakdown",
    title: "Contractors Plant & Machinery (CPM) / Machinery Breakdown",
    subtitle: "Protecting Productive Capital and Equipment",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "Mobile and fixed equipment represent productive capital. CPM and machinery breakdown coverages ensure that a single equipment failure — whether a crane collapse on site, a CNC machine electrical short-circuit, or a boiler explosion — does not halt revenue generation, trigger contractual penalties, or create safety incidents.",
    challenges: [
      "Specialized machinery has long lead times for replacement, causing extended downtime.",
      "Operational errors or electrical shorts can destroy millions of dollars of uninsured machinery instantly.",
      "Boiler explosions pose catastrophic risk to both the physical plant and surrounding facilities."
    ],
    architecture: [
      { term: "CPM — Mobile Equipment", desc: "Cranes, excavators, rollers, compactors, batching plants; accidental damage at work, rest, transit" },
      { term: "Machinery Breakdown", desc: "Fixed industrial plant against electrical/mechanical breakdown, operator error, centrifugal force, explosion" },
      { term: "Boiler & Pressure Vessel", desc: "Explosion, collapse, cracking; mandatory inspection component (Indian Boilers Act)" },
      { term: "Expediting Expenses", desc: "Air freight of emergency replacement parts; critical when OEM lead times are 6+ months" }
    ],
    expertCommentary: "Properly insuring expediting expenses is critical. The cost to air-freight a massive replacement turbine or CNC component from Germany or Japan often exceeds the cost of the part itself. Relying on standard sea freight can add 3-4 months to your business interruption loss.",
    indiaContext: [
      "Boiler insurance is mandatory under the Indian Boilers Act 1923; requires annual third-party inspection AND insurance",
      "Critical for India's infrastructure buildout: road machinery, tunnel boring machines, metro construction equipment",
      "Long lead times for German/Japanese/Korean OEM machinery make expediting expenses coverage extremely valuable"
    ],
    matrix: {
      scale: "🔵🟠🔴⚫ SME to MNC",
      scope: "🏠 In-Country | 🌐 Cross-Border",
      duration: "📅 Annual | 📆 Multi-Year"
    }
  },
  "marine-cargo": {
    slug: "marine-cargo",
    title: "Marine Cargo / Stock Throughput (STP)",
    subtitle: "Securing the Global Supply Chain",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a63?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "Cargo insurance converts 'goods in transit' from an uninsured balance-sheet risk into a financeable, bankable asset. It enables confident international trade, satisfies letter-of-credit requirements, and protects against the most loss-prone segments of the global supply chain.",
    challenges: [
      "Carriers (shipping lines, airlines) have severely limited liability under international conventions (Hague-Visby).",
      "Complex supply chains create gaps in coverage between warehouse, port, and final destination.",
      "Geopolitical instability creates sudden war and strike risks for cross-border transit."
    ],
    architecture: [
      { term: "ICC A — All Risks", desc: "Broadest protection; all external physical loss or damage except named exclusions" },
      { term: "Stock Throughput (STP)", desc: "Seamless cover from raw material purchase through finished goods delivery; eliminates all gaps" },
      { term: "ICC A + War & SRCC", desc: "Recommended standard for most commercial cargo; adds terrorism, war, strikes, riots coverage" },
      { term: "Reefer Extension", desc: "Temperature excursion cover for cold chain cargo (pharma, dairy, frozen food)" }
    ],
    expertCommentary: "Carriers have severely limited liability under international conventions. Hague-Visby limits: approximately USD 500 per package or USD 2/kg, whichever is higher. For a 20-tonne container of electronics, the carrier limit might be USD 40,000 against a cargo value of USD 2 million. Cargo insurance is not optional — carrier liability covers almost nothing.",
    indiaContext: [
      "Marine Insurance Act 1963 governs; ICC A/B/C are the standard clauses used in India",
      "Open cover policies are standard for commodity exporters (rice, cotton, spices, pharmaceuticals, engineering goods)",
      "Stock Throughput increasingly used by Indian manufacturers with global supply chains — Tata, Mahindra, Sun Pharma, Dr. Reddy's",
      "E-way bill and GST compliance have increased documentation discipline but also created new liability trigger points"
    ],
    matrix: {
      scale: "🟢🔵🟠🔴⚫ All Scales",
      scope: "🌐 Cross-Border | 🌍 Global",
      duration: "⏱️ Single Shipment | 📅 Annual Open Cover"
    }
  },
  "marine-hull": {
    slug: "marine-hull",
    title: "Marine Hull & Aviation",
    subtitle: "Protecting Mobile Capital Assets and Liabilities",
    images: [
      "https://images.unsplash.com/photo-1599557878643-851ea7e4bce0?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "For vessel and aircraft owners, hull insurance protects the mobile asset itself — often the single largest capital item on the enterprise balance sheet. P&I club membership provides essentially unlimited third-party liability protection for maritime claims, which can dwarf the vessel value in major collision or pollution incidents.",
    challenges: [
      "Major collision or pollution incidents create liabilities that far exceed the physical value of the vessel.",
      "War risks and piracy require dynamic coverage adjustments based on geographic zones.",
      "Aircraft liability requires strict compliance with international aviation conventions and limits."
    ],
    architecture: [
      { term: "Hull & Machinery (H&M)", desc: "Physical damage to vessel, machinery, equipment; collision liability via 'running down clause'" },
      { term: "Protection & Indemnity (P&I)", desc: "Third-party liability: cargo damage, collision excess, pollution, crew injury, wreck removal" },
      { term: "Loss of Hire", desc: "Daily indemnity for vessel downtime in dry-dock or repair; protects charter income" },
      { term: "Aviation Liability", desc: "Third-party bodily injury and property damage; passenger liability; cargo; DGCA minimums" }
    ],
    expertCommentary: "P&I clubs are essential. While Hull & Machinery covers the asset, the mutualized P&I structure is the only mechanism robust enough to handle the massive multi-billion dollar liabilities associated with modern environmental and wreck removal incidents.",
    indiaContext: [
      "India has a significant coastal fishing fleet and inland waterway fleet; hull insurance mandatory for vessel registration",
      "Major commercial ports drive shipping company demand; P&I clubs (UK Club, American Club, North P&I) are active in India",
      "DGCA mandates minimum aviation liability for all registered civil aircraft; private jet ownership is growing",
      "Drone insurance is rapidly expanding under DGCA RPAS Regulations 2021"
    ],
    matrix: {
      scale: "🟠🔴⚫ Mid-Market to MNC",
      scope: "🌐 Cross-Border | 🌍 Global",
      duration: "📅 Annual | 📆 Multi-Year"
    }
  },
  "parametric": {
    slug: "parametric",
    title: "Parametric & Index-Based Risk Transfer",
    subtitle: "Liquidity and Speed over Indemnity",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    ],
    valueText: "Parametric insurance removes the friction of loss adjustment entirely. It provides liquidity within 24–72 hours of a trigger event, enabling immediate operational response rather than waiting 6–18 months for traditional indemnity claim settlement. This speed of payment can be the difference between business survival and failure in the aftermath of a catastrophe.",
    challenges: [
      "Traditional indemnity claims for natural catastrophes can take years to settle due to complex loss adjustment.",
      "Basis risk: The trigger fires but actual loss is different, or actual loss occurs but the trigger is not met.",
      "Uninsurable economic losses (e.g. lack of foot traffic due to a nearby storm) aren't covered by traditional property policies."
    ],
    architecture: [
      { term: "Weather Index", desc: "Rainfall accumulation, temperature deviation, drought index (NDVI/SPI), wind speed at a reference station" },
      { term: "Natural Catastrophe", desc: "Earthquake magnitude, hurricane windspeed, flood gauge height, wave height" },
      { term: "Production/Operational", desc: "Solar irradiance index for energy producers, commodity yield index for agriculture" },
      { term: "Cat Bond / ILS", desc: "Capital markets risk transfer for peak perils; institutional investors bear risk" }
    ],
    expertCommentary: "Basis risk is the cardinal risk in parametric insurance. Good parametric design minimises basis risk by using local, granular indices (a rain gauge 2km from the farm, not a regional average) and careful threshold calibration. For India, NRSC satellite data and IMD station data are increasingly used to reduce basis risk.",
    indiaContext: [
      "PMFBY (Pradhan Mantri Fasal Bima Yojana) incorporates area-yield and weather index approaches at national scale",
      "Parametric flood and drought pilots active in Bihar, Maharashtra, Karnataka, Odisha",
      "Renewable energy sector (solar, wind) increasingly using production guarantee parametric products",
      "Parametric cyclone cover being explored for Odisha, Andhra Pradesh, and Tamil Nadu coastal industrial corridors"
    ],
    matrix: {
      scale: "🟠🔴⚫ Mid-Market to MNC",
      scope: "🌐 Cross-Border | 🌍 Global",
      duration: "⏱️ Single | 📅 Annual | 📆 Multi-Year | 🗓️ Strategic"
    }
  },
  "cgl": {
    slug: "cgl",
    title: "Commercial General Liability (CGL) / Public Liability",
    subtitle: "The Legal Defense Foundation for Operations",
    images: [
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "General liability is the legal defense foundation of any operating enterprise. It satisfies lease requirements, contractual counterparty demands, and statutory obligations while protecting against the unpredictable cost of third-party injury and property damage claims — including defense costs that often exceed the settlement itself.",
    challenges: [
      "Social inflation and rising consumer awareness are driving massive increases in third-party damage claims.",
      "Landlords and enterprise clients rigidly mandate CGL naming them as additional insureds.",
      "Defense costs (legal fees) frequently exceed the actual indemnity payments, draining corporate cash reserves."
    ],
    architecture: [
      { term: "Coverage A — Bodily Injury & Property Damage", desc: "Premises liability, products liability, completed operations; the core exposure" },
      { term: "Coverage B — Personal & Advertising Injury", desc: "Defamation, false arrest, malicious prosecution, copyright infringement (non-IP)" },
      { term: "Additional Insured Extensions", desc: "Landlords, lenders, joint venture partners, government authorities; contractually required" },
      { term: "Primary & Non-Contributory Wording", desc: "Policy pays first and in full without seeking contribution from additional insured's own policies" }
    ],
    expertCommentary: "India's litigation culture is changing. Delhi, Mumbai, and Bengaluru consumer courts now award meaningful damages for personal injury, product defect, and service negligence. The Consumer Protection Act 2019 expanded class action provisions. CGL limits that were adequate in 2015 are materially underinsured today.",
    indiaContext: [
      "Public Liability Insurance Act 1991 makes general liability MANDATORY for industries handling hazardous substances",
      "'Public Liability Policy' is the standard Indian market naming; CGL terminology is growing in corporate segment",
      "Factory Act compliance requires employer's liability awareness alongside public liability",
      "Hotels, hospitals, shopping malls, educational institutions are primary voluntary buyers in India"
    ],
    matrix: {
      scale: "🟢🔵🟠🔴⚫ All Scales",
      scope: "🏠 In-Country | 🌐 Cross-Border | 🌍 Global",
      duration: "📅 Annual | 📆 Multi-Year"
    }
  },
  "product-liability": {
    slug: "product-liability",
    title: "Product Liability & Product Recall",
    subtitle: "Protecting Brand Equity and Consumer Safety",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "Product liability protects brand equity and enterprise value when a defective product causes harm. Recall insurance funds the logistics of product retrieval from the market, preventing the recall operation itself from becoming a liquidity and operational crisis on top of the original product failure.",
    challenges: [
      "A massive product recall can bankrupt an organization through logistics and disposal costs alone.",
      "Strict liability laws mean manufacturers are liable for harm regardless of negligence.",
      "Brand damage post-recall requires expensive PR campaigns and rehabilitation efforts."
    ],
    architecture: [
      { term: "Manufacturing/Design Defect", desc: "Damage arising from a flaw introduced during production or inherent in the design" },
      { term: "First-Party Recall Costs", desc: "Logistics, disposal, replacement, testing, PR, regulatory liaison — the recall operation" },
      { term: "Third-Party Recall Costs", desc: "Retailer restocking, customer reimbursement, downstream business interruption" },
      { term: "Crisis Management Expenses", desc: "PR firm engagement, call centre, crisis website, social media management" }
    ],
    expertCommentary: "The 10x Rule: Recall costs almost always exceed the product's original profit margin by 10x or more. The direct logistics cost is significant; but lost sales during the crisis, retailer delistings, and brand rehabilitation campaigns are far larger. Product liability and recall insurance must be sized to cover revenue loss, not just recall logistics.",
    indiaContext: [
      "Consumer Protection Act 2019 strengthens product liability; strict liability for manufacturers",
      "Indian pharmaceutical exporters to US/EU face massive product liability exposure in destination markets",
      "FSSAI can mandate food product recalls; enforcement is increasing",
      "Automotive component manufacturers supplying to OEMs face harsh recall indemnification clauses"
    ],
    matrix: {
      scale: "🔵🟠🔴⚫ SME to MNC",
      scope: "🌐 Cross-Border | 🌍 Global",
      duration: "📅 Annual | 📆 Multi-Year"
    }
  },
  "do-liability": {
    slug: "do-liability",
    title: "Directors & Officers (D&O) Liability",
    subtitle: "Corporate Governance and Executive Shield",
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "D&O insurance transforms board service from unlimited personal financial exposure into a manageable, insured professional risk. It attracts qualified independent directors, satisfies institutional investor requirements, and enables confident strategic decision-making by shielding personal assets from the consequences of good-faith business judgments that turn out badly.",
    challenges: [
      "Regulatory investigations (SEBI, RBI, MCA) can financially ruin individual directors before any guilt is established.",
      "Class action shareholder lawsuits following stock drops or M&A announcements.",
      "Qualified independent directors are increasingly refusing board seats without robust D&O cover."
    ],
    architecture: [
      { term: "Side A — Individual Protection", desc: "Personal asset protection when the company CANNOT indemnify (insolvency, regulatory bar)" },
      { term: "Side B — Company Reimbursement", desc: "Corporate reimbursement of the company for amounts paid to indemnify directors" },
      { term: "Side C — Entity Securities Coverage", desc: "Company-level protection for securities claims (IPO, continuous disclosure failures)" },
      { term: "Regulatory Investigation Costs", desc: "SEBI, RBI, CCI, SEC, FCA; investigation costs even if no wrongdoing found" }
    ],
    expertCommentary: "India's corporate governance evolution has created a serious independent director recruitment challenge. Post-Satyam, post-IL&FS, and post-DHFL, the personal liability of independent directors for company failures has been demonstrated. Good D&O insurance, with robust Side A limits, is now a prerequisite for recruiting credible board members — it is a governance investment, not just an insurance expense.",
    indiaContext: [
      "SEBI LODR Regulations mandate D&O considerations for listed companies",
      "Class action suit provisions under Companies Act 2013 (Section 245) increase shareholder action exposure",
      "D&O for IPO-bound startups and unicorns is a rapidly growing segment; PE/VC investors require it",
      "SEBI, RBI, CCI, MCA, and SFIO investigations are primary claim drivers; investigation costs alone can reach ₹10–30 crore"
    ],
    matrix: {
      scale: "🟢🔵🟠🔴⚫ All Scales",
      scope: "🏠 In-Country | 🌐 Cross-Border | 🌍 Global",
      duration: "📅 Annual | 📆 Multi-Year | 🗓️ Strategic"
    }
  },
  "professional-indemnity": {
    slug: "professional-indemnity",
    title: "Professional Indemnity (PI) / Errors & Omissions",
    subtitle: "Protecting Professional Judgement and Expertise",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "Professional indemnity insurance converts professional judgment risk — the risk that well-intentioned expert advice turns out to be wrong — into a budgetable insurance cost. It enables firms to accept complex, high-stakes engagements without fear that a single error or omission will destroy decades of professional reputation and enterprise value.",
    challenges: [
      "Clients suing for financial losses incurred due to consulting, design, or IT implementation errors.",
      "Strict regulatory frameworks holding auditors, architects, and advisors personally accountable.",
      "Contractual requirements from large enterprise clients demanding high PI limits before awarding contracts."
    ],
    architecture: [
      { term: "Negligence & Errors", desc: "Failure to exercise the standard of care expected of a competent professional" },
      { term: "Omissions", desc: "Failing to include essential information or disclosures" },
      { term: "Breach of Professional Duty", desc: "Violation of specific duties under professional codes or contractual obligations" },
      { term: "Disciplinary Proceedings", desc: "Costs of professional body investigations (ICAI, Bar Council, SEBI)" }
    ],
    expertCommentary: "IT/Technology E&O is the most critical driver in the modern economy. Software failure, implementation delay, SaaS platform downtime, and data migration errors can cost clients millions in revenue. If you build software for others, PI is not optional.",
    indiaContext: [
      "MANDATORY for architects and engineers under professional council regulations; for SEBI-registered advisers",
      "India is the world's largest IT/ITES outsourcing hub; E&O required contractually by virtually all US/EU clients",
      "Claims-made form is universal; retroactive date management is critical",
      "Run-off coverage essential when firms merge, dissolve, or retire"
    ],
    matrix: {
      scale: "🟢🔵🟠🔴⚫ All Scales",
      scope: "🏠 In-Country | 🌐 Cross-Border | 🌍 Global",
      duration: "📅 Annual | 📆 Multi-Year"
    }
  },
  "cyber": {
    slug: "cyber",
    title: "Cyber Liability — First & Third Party",
    subtitle: "The Liquidity Bridge for Digital Crisis",
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "Cyber insurance is the liquidity bridge between a security incident and business restoration. It funds the immediate crisis response (forensics, legal, public notification), covers the ongoing revenue loss, and protects against the long-tail liability that can persist for years after the original breach.",
    challenges: [
      "Ransomware attacks paralyze operations, demanding immediate, unbudgeted liquidity.",
      "Regulatory bodies (like DPDP/GDPR) impose massive fines for failing to protect consumer data.",
      "Systemic cloud outages can cause simultaneous business interruption across thousands of clients."
    ],
    architecture: [
      { term: "Incident Response", desc: "Digital forensics, incident containment, legal counsel, breach coach" },
      { term: "Ransomware Response", desc: "Ransom negotiation specialist, ransom payment (where lawful), decryption key" },
      { term: "Cyber Business Interruption", desc: "Revenue loss during system downtime; no physical damage required" },
      { term: "Privacy Liability", desc: "Claims by individuals for breach of personal data; statutory damages" }
    ],
    expertCommentary: "The cyber insurance market's defining challenge is systemic risk. When a major cloud provider suffers an outage, thousands of companies lose revenue simultaneously. For large enterprises, the key design question is not just 'what is my deductible' but 'what is the insurer's ability to pay when everyone claims simultaneously?'",
    indiaContext: [
      "Digital Personal Data Protection Act 2023 (DPDP): breach notification required; penalties up to ₹250 crore",
      "CERT-In Directions 2022 require incident reporting within 6 hours for specific categories",
      "India is globally the #3 most-targeted nation for cyber attacks; UPI ecosystem creates specific fraud exposure",
      "IT/ITES sector in Bengaluru, Hyderabad, Pune handles data for global clients; global privacy law compliance is essential"
    ],
    matrix: {
      scale: "🟢🔵🟠🔴⚫ All Scales",
      scope: "🏠 In-Country | 🌐 Cross-Border | 🌍 Global",
      duration: "📅 Annual | 📆 Multi-Year"
    }
  },
  "epl": {
    slug: "epl",
    title: "Employment Practices Liability (EPL)",
    subtitle: "Protecting the Employer-Employee Dynamic",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "EPL protects the enterprise and its management against employment-related legal claims — covering not just settlements and judgments but the defense costs that frequently exceed the underlying claim itself. As workforce expectations evolve and statutory employee protections expand, EPL has moved from 'nice to have' to 'essential.'",
    challenges: [
      "High frequency of wrongful termination and discrimination claims during corporate restructuring.",
      "Strict compliance requirements and liability under harassment prevention frameworks (like POSH).",
      "Class action exposure in jurisdictions like California for wage and hour violations."
    ],
    architecture: [
      { term: "Wrongful Termination", desc: "Illegal dismissal, constructive dismissal, retrenchment without proper procedure" },
      { term: "Discrimination", desc: "Caste, religion, gender, disability, age discrimination in hiring or promotion" },
      { term: "Sexual Harassment", desc: "Claims under POSH Act; Internal Committee proceedings defense" },
      { term: "Retaliation & Whistleblower", desc: "Claims by employees retaliated against for reporting legal violations" }
    ],
    expertCommentary: "In highly competitive talent markets, HR disputes are increasingly settling in court rather than in mediation. Defending an employment lawsuit, even if entirely frivolous, can cost an organization tens of thousands of dollars in legal fees. EPL guarantees access to top-tier defense counsel without straining the HR budget.",
    indiaContext: [
      "POSH Act 2013 (Prevention of Sexual Harassment) creates mandatory Internal Committee requirements and legal exposure",
      "Industrial Disputes Act 1947 governs retrenchment; procedural non-compliance is a primary EPL claim driver",
      "EPL often bundled with D&O for mid-market and large Indian companies as 'Management Liability' package",
      "Growing claim frequency in IT, financial services, and media sectors"
    ],
    matrix: {
      scale: "🔵🟠🔴⚫ SME to MNC",
      scope: "🏠 In-Country | 🌐 Cross-Border | 🌍 Global",
      duration: "📅 Annual"
    }
  },
  "environmental": {
    slug: "environmental",
    title: "Environmental & Pollution Liability",
    subtitle: "Preventing Legacy Contamination from Stranding Assets",
    images: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "Environmental liability insurance prevents legacy contamination from becoming a permanent stranded asset. It funds remediation, regulatory defense, and third-party compensation — costs that routinely exceed the market value of the contaminated property and can impose generational liability on uninsured businesses.",
    challenges: [
      "Standard CGL policies categorically exclude pollution, leaving huge operational gaps for heavy industry.",
      "Clean-up costs for ground-water contamination can run into tens of millions of dollars.",
      "Strict environmental tribunals holding directors personally responsible for corporate pollution."
    ],
    architecture: [
      { term: "Site-Specific Pollution Liability", desc: "Known and unknown contamination at owned or operated sites; gradual and sudden pollution" },
      { term: "Contractors Pollution", desc: "Environmental damage caused by contractor operations; pipeline, excavation, demolition" },
      { term: "Storage Tank Liability", desc: "Underground (UST) and above-ground (AST) storage tank leaks" },
      { term: "Natural Resource Damage", desc: "Compensation to government for damaged ecosystems, aquifers, rivers, forests" }
    ],
    expertCommentary: "The shift from 'sudden and accidental' coverage to 'gradual pollution' is the hallmark of modern environmental insurance. Contamination that seeps slowly into an aquifer over 10 years is just as devastating—and expensive to clean up—as a catastrophic pipe burst.",
    indiaContext: [
      "National Green Tribunal (NGT) is highly active and increasingly punitive in penalizing polluters",
      "Public Liability Insurance Act 1991 mandates coverage for industries handling Schedule I hazardous substances",
      "BRSR (Business Responsibility and Sustainability Reporting) framework drives environmental liability awareness",
      "Industrial corridors (DMIC) require environmental clearance; insurance is a de-facto lender requirement"
    ],
    matrix: {
      scale: "🟠🔴⚫ Mid-Market to MNC",
      scope: "🏠 In-Country | 🌐 Cross-Border | 🌍 Global",
      duration: "📅 Annual | 📆 Multi-Year | 🗓️ Strategic"
    }
  },
  "trade-credit": {
    slug: "trade-credit",
    title: "Trade Credit Insurance",
    subtitle: "Securing Receivables and Financing Growth",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "Trade credit insurance converts accounts receivable — often 30–50% of an SME's balance sheet assets — from an uninsured credit concentration into a bankable, insured financial instrument. It enables confident expansion into new buyers, geographies, and distribution channels while protecting against the most common cause of SME financial failure: customer insolvency.",
    challenges: [
      "A single major buyer defaulting can wipe out a year's profit for a mid-market manufacturer.",
      "Banks hesitate to provide working capital against uninsured receivables in volatile export markets.",
      "Political instability in emerging markets can trap capital and prevent currency conversion."
    ],
    architecture: [
      { term: "Commercial Insolvency", desc: "Formal bankruptcy, administration, or liquidation of the buyer; policy pays the insured receivable" },
      { term: "Protracted Default", desc: "Buyer refuses or fails to pay within the specified extended period without formal insolvency" },
      { term: "Political Risk — Inconvertibility", desc: "Buyer cannot transfer currency due to government action (capital controls, FX restrictions)" },
      { term: "Whole Turnover Policy", desc: "All buyers; premium as percentage of turnover; simplest; banks love it for invoice financing" }
    ],
    expertCommentary: "Trade Credit is primarily a growth tool, not just a defensive one. By insuring the receivables, CFOs can offer 90-day open account terms to new buyers instead of demanding Letters of Credit, dramatically increasing sales velocity while actually decreasing overall credit risk.",
    indiaContext: [
      "ECGC (Export Credit Guarantee Corporation of India) dominates the export credit space",
      "Private carriers heavily support domestic trade credit for manufacturing supply chains",
      "Factoring and invoice discounting heavily rely on trade credit insurance as the underlying security",
      "Protects against the extended payment delays notoriously common in Indian B2B trade"
    ],
    matrix: {
      scale: "🔵🟠🔴⚫ SME to MNC",
      scope: "🏠 In-Country | 🌐 Cross-Border | 🌍 Global",
      duration: "📅 Annual"
    }
  },
  "ma-insurance": {
    slug: "ma-insurance",
    title: "M&A / Transactional Risk Insurance (W&I)",
    subtitle: "Eliminating Deal Friction and Escrows",
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
    ],
    valueText: "Transactional risk insurance, primarily Warranty & Indemnity (W&I) insurance, facilitates corporate M&A by transferring the risk of breach of seller representations and warranties to the insurance market. This allows sellers to achieve a clean exit with trapped capital, while giving buyers robust, credit-worthy recourse.",
    challenges: [
      "Sellers want a clean exit without tying up 10-20% of proceeds in an escrow account for 2 years.",
      "Buyers need strong financial recourse in case the target company has hidden liabilities.",
      "Known tax or contingent litigation issues can derail an otherwise profitable acquisition."
    ],
    architecture: [
      { term: "Warranty & Indemnity (W&I)", desc: "Covers financial loss resulting from breaches of warranties in the SPA" },
      { term: "Specific Tax Liability", desc: "Rings-fences identified tax risks so the deal can proceed without price chipping" },
      { term: "Contingent Liability", desc: "Covers specific identified litigation risks pending outcome" },
      { term: "Buy-Side Policy", desc: "Most common; buyer claims directly against insurer, bypassing the seller entirely" }
    ],
    expertCommentary: "W&I insurance has fundamentally changed Private Equity exits. It is no longer an exotic product; it is a standard tool used in competitive auctions to allow bidders to offer 'nil recourse' terms to the seller, vastly improving the attractiveness of their bid.",
    indiaContext: [
      "PE and VC exits in India heavily rely on W&I to avoid complex local escrow regulations",
      "Tax insurance is growing as a tool to handle the aggressive stance of Indian tax authorities in M&A",
      "Typically underwritten in international hubs (Singapore, London) for Indian risks",
      "Foreign Direct Investment (FDI) transactions use W&I to mitigate emerging market anxiety"
    ],
    matrix: {
      scale: "🔴⚫ Large to MNC",
      scope: "🌐 Cross-Border | 🌍 Global",
      duration: "⏱️ Single Transaction (Multi-Year Run-off)"
    }
  },
  "ai-liability": {
    slug: "ai-liability",
    title: "AI & Algorithmic Liability",
    subtitle: "Purpose-built coverage for AI-driven business operations",
    images: ["https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop"],
    valueText: "As enterprises integrate artificial intelligence, new liability vectors emerge. AI liability protects against algorithmic bias, copyright infringement, hallucinations, and autonomous operational failures.",
    challenges: ["Lack of legal precedent for AI errors.", "Rapidly evolving regulatory landscape like the EU AI Act.", "Class action risk for algorithmic bias in hiring or lending."],
    architecture: [
      { term: "Algorithmic Bias", desc: "Coverage for claims alleging discriminatory outcomes" },
      { term: "Copyright Infringement", desc: "Defense against training data intellectual property claims" },
      { term: "Operational Failure", desc: "Consequential damages from AI decision-making errors" },
      { term: "Model Failure", desc: "Parametric coverage triggered when AI model accuracy drops below defined threshold" },
      { term: "Explainability / Audit Failure", desc: "Regulatory defense for failure to comply with AI transparency requirements (EU AI Act)" }
    ],
    expertCommentary: "AI is shifting risk from human error to product defect. Standard Tech E&O policies may not fully respond to AI-generated liabilities without specific affirmative coverage endorsements.",
    indiaContext: ["DPDP Act compliance for AI data processing", "Emerging focus from MEITY on AI regulation"],
    matrix: { scale: "🔴⚫ Large to MNC", scope: "🌍 Global", duration: "📅 Annual" }
  },
  "space": {
    slug: "space",
    title: "Space & Satellite Insurance",
    subtitle: "End-to-end coverage for NewSpace India and commercial missions",
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"],
    valueText: "Space insurance secures the massive capital investments required for satellite manufacturing, launch operations, and in-orbit revenue generation, enabling the commercial space sector.",
    challenges: ["Total loss scenarios during launch anomalies.", "Space debris collision risks.", "Extremely specialized capacity and underwriting."],
    architecture: [
      { term: "Pre-Launch Insurance", desc: "Transit insurance for satellite from factory to launch site, storage insurance" },
      { term: "Launch Coverage", desc: "From ignition to successful orbit insertion; LEOP coverage" },
      { term: "In-Orbit Protection", desc: "Physical damage and operational failure in space during operational life" },
      { term: "Third-Party Liability", desc: "Bodily injury or property damage to third parties from launch or re-entry" },
      { term: "Ground Segment", desc: "Property + business interruption for ground control stations and launch facilities" },
      { term: "Business Interruption", desc: "Loss of revenue from satellite downtime (insured per-day value)" }
    ],
    expertCommentary: "With the privatization of the space sector, commercial risk transfer is essential. Traditional property insurers do not write this risk; it requires dedicated space underwriters in London and European markets.",
    indiaContext: ["IN-SPACe regulations require specific insurance for commercial launches", "ISRO collaboration projects"],
    matrix: { scale: "🔴⚫ Large to MNC", scope: "🌍 Global", duration: "⏱️ Mission-Specific" }
  },
  "climate-esg": {
    slug: "climate-esg",
    title: "Climate Risk & ESG Liability",
    subtitle: "Aligning risk transfer with sustainability mandates",
    images: ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"],
    valueText: "Climate and ESG liability products protect directors, officers, and corporations from litigation arising from environmental disclosures, greenwashing allegations, and transition risks.",
    challenges: ["Activist shareholder litigation over climate targets.", "Strict new reporting mandates.", "Reputational damage from greenwashing."],
    architecture: [
      { term: "Greenwashing Defense", desc: "Legal defense for claims alleging misleading environmental claims" },
      { term: "Carbon Credit Risk", desc: "Invalidation or non-delivery of carbon offsets" },
      { term: "Stranded Asset Cover", desc: "Balance sheet protection for assets rendered obsolete by climate regulation" }
    ],
    expertCommentary: "ESG is no longer just a marketing concern; it is a primary D&O liability vector. Boards are being held personally accountable for their climate transition plans.",
    indiaContext: ["BRSR (Business Responsibility and Sustainability Reporting) mandatory for top 1000 listed companies", "SEBI scrutiny on ESG funds"],
    matrix: { scale: "🔴⚫ Large to MNC", scope: "🌐 Cross-Border | 🌍 Global", duration: "📅 Annual" }
  },
  "crypto-digital-assets": {
    slug: "crypto-digital-assets",
    title: "Crypto & Digital Asset Insurance",
    subtitle: "10-Layer Protection for Digital Asset Businesses",
    images: ["https://images.unsplash.com/photo-1605733513597-5c10f5a4f5b5?q=80&w=2070&auto=format&fit=crop"],
    valueText: "Crypto insurance is the foundation of institutional trust in digital asset businesses. Our 10-layer architecture protects exchanges, custodians, DeFi protocols, and blockchain companies against the unique risks of the crypto ecosystem.",
    challenges: [
      "Exchange hacks and custody failures can result in immediate multi-million dollar losses",
      "Smart contract exploits in DeFi protocols create unlimited liability exposure",
      "Regulatory enforcement actions from SEC, CFTC, and global regulators are escalating",
      "Third-party vendor failures (custody providers, node operators) create concentrated risk"
    ],
    architecture: [
      { term: "Layer 1: Custody Protection", desc: "Loss/theft of digital assets in custody (hot wallet, cold wallet, MPC)" },
      { term: "Layer 2: Smart Contract Coverage", desc: "Financial loss from smart contract exploit or bug" },
      { term: "Layer 3: Crime & Theft", desc: "Employee theft, social engineering, third-party fraud involving crypto" },
      { term: "Layer 4: Directors & Officers", desc: "Board/management liability for crypto company decisions" },
      { term: "Layer 5: Professional Liability / E&O", desc: "Tech E&O, advisory E&O for crypto services" },
      { term: "Layer 6: Cyber Insurance", desc: "Ransomware, data breach, business interruption (crypto-specific)" },
      { term: "Layer 7: Regulatory Defense", desc: "Defense costs for SEC, CFTC, or other regulatory investigations" },
      { term: "Layer 8: Validator/Node Insurance", desc: "Slashing risk for proof-of-stake validators" }
    ],
    expertCommentary: "The crypto insurance market is rapidly maturing. For exchanges seeking institutional credibility, a multi-layered approach combining specialist crypto carriers (Coincover, Relm) with traditional cyber leaders (Coalition, Chubb) creates the comprehensive protection necessary for large-scale adoption.",
    indiaContext: [
      "India's crypto regulatory framework evolving; FATF compliance mandatory for VASP operations",
      "Crypto businesses seeking international banking relationships require comprehensive insurance",
      "Tax treatment of digital assets creates specific insurance requirements for Indian exchanges"
    ],
    matrix: { scale: "🔴⚫ Enterprise to MNC", scope: "🌍 Global", duration: "📅 Annual | 🗓️ Strategic" }
  },
  "quantum-computing": {
    slug: "quantum-computing",
    title: "Quantum Computing Risk & Transition Coverage",
    subtitle: "Preparing for the Post-Quantum Era",
    images: ["https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"],
    valueText: "Quantum computing represents the next frontier of technological disruption. Our quantum risk solutions protect hardware investments, IP portfolios, and cryptographic infrastructure against the risks of the quantum transition.",
    challenges: [
      "Q-Day could render current encryption obsolete, requiring massive migration costs",
      "Quantum hardware investments ($100M+) face R&D failure and technical obsolescence risks",
      "Quantum IP faces unique infringement and trade secret risks",
      "Rare earth supply chain for quantum hardware creates geopolitical risk exposure"
    ],
    architecture: [
      { term: "Q-Day / Crypto-Obsolescence Risk", desc: "Quantum transition insurance covering migration costs when quantum computers break current encryption" },
      { term: "Quantum Hardware Investment Loss", desc: "R&D failure insurance covering write-off of quantum hardware investment" },
      { term: "Quantum IP Risk", desc: "IP enforcement and defense insurance for quantum algorithms and hardware designs" },
      { term: "Quantum Supply Chain Risk", desc: "Supply chain risk insurance for rare earth materials critical to quantum hardware" },
      { term: "Quantum Computing E&O", desc: "Professional liability for quantum computing service providers" },
      { term: "Quantum Data Security", desc: "Cyber insurance with quantum-specific endorsement covering data decryption by quantum computers" }
    ],
    expertCommentary: "Quantum computing is not a 2030 risk—it's a 2026-2030 window that enterprise risk managers must prepare for today. The insurance market for quantum transition costs is a true whitespace opportunity, with TRUSTFLOW pioneering structured solutions.",
    indiaContext: [
      "India's National Quantum Mission (NQMs) driving domestic quantum research investment",
      "Government contracts for quantum research require specific risk transfer",
      "Hybrid classical-quantum systems create transitional risk exposure"
    ],
    matrix: { scale: "🔴⚫ Enterprise to MNC", scope: "🌐 Cross-Border | 🌍 Global", duration: "📅 Annual | 📆 Multi-Year" }
  },
  "drone-operations": {
    slug: "drone-operations",
    title: "Drone / UAV Operations Insurance",
    subtitle: "Comprehensive Coverage for Commercial Drone Fleets",
    images: ["https://images.unsplash.com/photo-1506744030328-427c639b6e8c?q=80&w=2070&auto=format&fit=crop"],
    valueText: "Commercial drone operations require specialized risk coverage for aviation liability, cargo protection, privacy claims, and cyber threats targeting autonomous flight systems.",
    challenges: [
      "Third-party bodily injury from drone crashes in populated areas",
      "Cargo loss or damage during drone delivery operations",
      "Privacy liability for cameras and data collection",
      "Airspace violation and regulatory compliance risks"
    ],
    architecture: [
      { term: "Drone Hull & Liability", desc: "Physical damage to drone + third-party bodily injury/property damage" },
      { term: "Drone Fleet Management", desc: "Multi-drone coverage with fleet-level deductibles and AI-based risk pricing" },
      { term: "Drone Cargo Insurance", desc: "Goods being transported by drone (last-mile delivery)" },
      { term: "Drone Privacy Liability", desc: "Invasion of privacy claims from drone surveillance/data collection" },
      { term: "Drone Cyber Insurance", desc: "Cyber attack on drone fleet (GPS spoofing, command hijacking)" },
      { term: "Counter-Drone Coverage", desc: "Insurance against unauthorized drone activity near facilities" },
      { term: "Autonomous Drone Operations", desc: "Specialized coverage for fully autonomous drone operations (BVLOS, swarm)" }
    ],
    expertCommentary: "The commercial drone market is projected to reach $58.4B by 2030. Flock's AI-powered real-time pricing enables accurate risk assessment based on weather, airspace restrictions, and flight parameters—a revolutionary approach for scalable drone insurance.",
    indiaContext: [
      "DGCA RPAS Regulations 2011-2021 govern commercial drone operations in India",
      "Drone delivery pilots by Zomato, Dunzo, and Amazon require comprehensive coverage",
      "Agricultural drones and infrastructure inspection are growing verticals"
    ],
    matrix: { scale: "🔵🟠🔴⚫ SME to Enterprise", scope: "🏠 In-Country | 🌐 Cross-Border", duration: "📅 Annual | ⏱️ Per-Flight" }
  },
  "warranty-guarantees": {
    slug: "warranty-guarantees",
    title: "Warranty & Guarantee Platform",
    subtitle: "Product Warranties, Surety Bonds, Performance Guarantees",
    images: ["https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop"],
    valueText: "Warranties and guarantees are critical for product manufacturers, service providers, and contractors. Our platform enables embedded warranty distribution, AI-powered claims processing, and portfolio optimization.",
    challenges: [
      "Warranty claims cost 10x more than original product profit margin on average",
      "Surety bonds require extensive financial underwriting and collateral management",
      "Performance guarantees in construction create long-tail liability exposure",
      "Bank guarantee requirements tie up working capital for extended periods"
    ],
    architecture: [
      { term: "Product Warranty Programs", desc: "Manufacturer, extended, and service contract coverage" },
      { term: "Performance Guarantees", desc: "Construction, technology, and service level guarantees" },
      { term: "Surety Bonds", desc: "Bid, performance, advance payment, and maintenance bonds" },
      { term: "Bank Guarantee Advisory", desc: "LC, SBLC optimization and risk mitigation" },
      { term: "Embedded Warranty API", desc: "API-first warranty distribution for platform integration" }
    ],
    expertCommentary: "Warranty insurance is a profit center transformation tool. By converting warranty obligations into insured products, manufacturers improve cash flow predictability while offering better customer experience than traditional extended warranties.",
    indiaContext: [
      "IRDAI guidelines for warranty insurance evolving; consumer protection focus increasing",
      "NHAI and MoRTH now accept surety bonds in lieu of bank guarantees for infrastructure projects",
      "Consumer Protection Act 2019 strengthens warranty claim rights and manufacturer liability"
    ],
    matrix: { scale: "🟢🔵🟠🔴⚫ All Scales", scope: "🏠 In-Country | 🌐 Cross-Border", duration: "📅 Annual | 📆 Multi-Year" }
  },
  "contract-risk-analytics": {
    slug: "contract-risk-analytics",
    title: "Contract Risk Analytics (AI-Powered)",
    subtitle: "Automated Liability Exposure & Insurance Gap Detection",
    images: ["https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"],
    valueText: "Every contract contains hidden risk: uncapped indemnification, insurance requirements you don't meet, force majeure gaps, and counterparty vulnerabilities. Our AI engine scans your portfolio, scores each contract, and generates actionable recommendations.",
    challenges: [
      "Thousands of contracts with subtle liability variations across jurisdictions",
      "M&A due diligence requiring rapid contract risk assessment",
      "Regulatory changes creating new contract compliance requirements",
      "Undetected insurance gaps leading to claim denials or uncovered liabilities"
    ],
    architecture: [
      { term: "AI Extraction", desc: "Extract all risk-relevant clauses including indemnification, limits, and insurance requirements" },
      { term: "Risk Scoring", desc: "Score each contract on 12 risk dimensions from 0-100" },
      { term: "Gap Analysis", desc: "Compare contract insurance requirements to actual insurance program" },
      { term: "Recommendations", desc: "Recommend specific insurance products to close identified gaps" },
      { term: "Ongoing Monitoring", desc: "Alert when contracts are amended, renewed, or create new exposures" }
    ],
    expertCommentary: "Contract analytics is the missing link between legal departments and risk managers. By quantifying contractual liability exposure, CFOs can make informed decisions about insurance purchasing without waiting for legal review cycles.",
    indiaContext: [
      "Indian contract law variations across states require jurisdiction-specific analysis",
      "GST and tax compliance clauses create specific insurance implications",
      "M&A activity in India driving adoption of automated contract review"
    ],
    matrix: { scale: "🔴⚫ Enterprise to MNC", scope: "🌐 Cross-Border | 🌍 Global", duration: "📅 Annual SaaS | ⏱️ Per-Contract" }
  },
  "multi-line-cross-border": {
    slug: "multi-line-cross-border",
    title: "Multi-Line & Cross-Border Programs",
    subtitle: "Global Master Programs, Local Admitted Policies, Multinational Pooling",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"],
    valueText: "Operating in multiple countries creates complex insurance compliance challenges. Our cross-border programs ensure regulatory compliance while optimizing global premium allocation and local claim handling.",
    challenges: [
      "Each country has unique insurance licensing and regulatory requirements",
      "Local admitted policies must satisfy tax, legal, and operational mandates",
      "Currency fluctuations affect premium allocation and claim payments",
      "Tax optimization and premium allocation disputes with local authorities"
    ],
    architecture: [
      { term: "Controlled Master Policy", desc: "Centralized governance and standardized coverage across all global operations" },
      { term: "Fronting Network", desc: "Leveraging top-tier local paper while retaining risk centrally" },
      { term: "DIC / DIL", desc: "Difference in Conditions and Difference in Limits to plug local policy gaps" },
      { term: "Local Admitted Coverage", desc: "Compliant local policies meeting statutory and regulatory requirements" }
    ],
    expertCommentary: "India alone has 22 state-level insurance regulations plus central IRDAI oversight. Scaling from 3 to 22 countries requires not just insurance placement expertise, but deep understanding of regulatory arbitrage and compliance harmonization.",
    indiaContext: [
      "IRDAI regulates all insurance operations; IFSCA governs GIFT City captive arrangements",
      "Branch office vs. subsidiary licensing choices affect tax and compliance structures",
      "Foreign reinsurance partnerships enable capacity optimization across Southeast Asia"
    ],
    matrix: { scale: "🔵🟠🔴⚫ SME to MNC", scope: "🌐 Cross-Border | 🌍 Global", duration: "📅 Annual | 📆 Multi-Year" }
  },
  "kidnap-ransom": {
    slug: "kidnap-ransom",
    title: "Kidnap, Ransom & Extortion Insurance",
    subtitle: "Executive Protection & Crisis Response",
    images: ["https://images.unsplash.com/photo-1555066931-4365d1d4d7c8?q=80&w=2070&auto=format&fit=crop"],
    valueText: "Kidnap, Ransom & Extortion insurance provides crisis response, negotiation, and payment coverage for executives operating in high-risk geographies.",
    challenges: [
      "Political instability creating unpredictable security situations",
      "Cyber extortion threatening operational continuity",
      "Family notification and crisis management expertise required",
      "Loyalty and reputation risks in emerging markets"
    ],
    architecture: [
      { term: "Kidnap & Ransom", desc: "Coverage for ransom payments and negotiation services" },
      { term: "Cyber Extortion", desc: "Ransomware attack response and payment coverage" },
      { term: "Crisis Response", desc: "24/7 crisis management and family notification services" },
      { term: "Evacuation Expenses", desc: "Emergency evacuation and relocation coverage" }
    ],
    expertCommentary: "K&R insurance is increasingly relevant for cyber extortion, not just physical kidnapping. The crisis response component—negotiation, forensic investigation, legal counsel—is more valuable than the ransom payment itself.",
    indiaContext: [
      "Naxalite-affected areas and certain Northeast states create specific security risk exposure",
      "Cyber extortion through ransomware is growing rapidly in India's IT sector",
      "Crisis response teams available for immediate deployment across major Indian cities"
    ],
    matrix: { scale: "🔵🟠🔴⚫ SME to MNC", scope: "🌐 Cross-Border | 🌍 Global", duration: "📅 Annual" }
  },
  "terrorism-violence": {
    slug: "terrorism-violence",
    title: "Terrorism & Political Violence",
    subtitle: "Coverage Against Acts of Terror and Civil Unrest",
    images: ["https://images.unsplash.com/photo-1506744030328-427c639b6e8c?q=80&w=2070&auto=format&fit=crop"],
    valueText: "Terrorism and political violence insurance protects physical assets and business interruption losses from acts of terror, civil unrest, and political upheaval.",
    challenges: [
      "Government terrorism pools provide limited coverage with slow claims processes",
      "Political unrest in emerging markets creates unpredictable threat environments",
      "Business interruption from area-wide shutdowns not covered by standard property policies"
    ],
    architecture: [
      { term: "Terrorism Damage", desc: "Physical damage from terrorist acts and sabotage" },
      { term: "Political Violence", desc: "Coverage for war, revolution, civil war, and insurrection" },
      { term: "Business Interruption", desc: "Loss of income during area-wide shutdowns" },
      { term: "Evacuation Expenses", desc: "Emergency evacuation and asset protection costs" }
    ],
    expertCommentary: "Traditional terrorism pools provide inadequate coverage limits. Private terrorism and political violence coverage offers higher limits and faster claims resolution, essential for international operations.",
    indiaContext: [
      "India Terrorism Pool provides basic coverage; private markets offer higher limits",
      "Political rallies and protests in major cities create specific BI exposure",
      "Northeast security situation requires specialized political violence coverage"
    ],
    matrix: { scale: "🟠🔴⚫ Mid-Market to MNC", scope: "🏠 In-Country | 🌐 Cross-Border", duration: "📅 Annual | 📆 Multi-Year" }
  }
};


