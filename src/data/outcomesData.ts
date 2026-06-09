import { Briefcase, Shield, Flame, Sun, Landmark, Waves, Scale, FileWarning, Activity, Database, TrendingUp, Cpu, Globe, Users, Target, ShieldAlert, Zap, BadgeDollarSign, Building2 } from "lucide-react";
import React from "react";

export interface OutcomeData {
  slug: string;
  category: "property" | "liability" | "financial" | "industry" | "cyber";
  title: string;
  subtitle: string;
  heroImage: string;
  overview: {
    description: string;
    challenge: string;
    solution: string;
  };
  kpiMetrics: { value: string; label: string; description?: string; icon: React.ComponentType<{ className?: string }> }[];
  capabilities: { title: string; description: string; icon: React.ComponentType<{ className?: string }> }[];
  verticals: { industry: string; challenge: string; platform: string; icon: React.ComponentType<{ className?: string }> }[];
  businessImpact: { phase: string; description: string; outcome: string }[];
  industryMapping: { sector: string; challenge: string; outcome: string; relevantPlatform: string }[];
  successMetrics: string[];
  relatedSolutions: string[];
  relatedPlatforms: string[];
  relatedRisks: string[];
}

export const outcomesData: Record<string, OutcomeData> = {
  "factory-fire": {
    slug: "factory-fire",
    category: "property",
    title: "Factory Fire — BI + Rebuild",
    subtitle: "SFSP + BI · 36-month indemnity · Temp relocation",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    overview: {
      description: "Ensuring business continuity and full physical asset recovery following a catastrophic factory fire.",
      challenge: "A catastrophic fire destroyed the primary manufacturing facility, halting all operations and threatening a 3-year supply chain fulfillment pipeline.",
      solution: "Activated a comprehensive SFSP + BI program with 36-month indemnity and immediate capital for temporary relocation and expedited rebuilding."
    },
    kpiMetrics: [
      { value: "36-Mo", label: "Indemnity Period", icon: Flame },
      { value: "$120M", label: "Limit Restored", icon: Briefcase },
      { value: "100%", label: "Revenue Protected", icon: Activity },
      { value: "14 Days", label: "Temp Relocation", icon: Globe }
    ],
    capabilities: [
      { title: "Physical Damage Recovery", description: "Full reinstatement value without depreciation.", icon: Shield },
      { title: "Extended BI", description: "36-month indemnity covering actual rebuild timelines.", icon: Activity },
      { title: "Extra Expense", description: "Covering the increased costs of working from a temporary facility.", icon: Briefcase },
      { title: "Claims Advocacy", description: "Expert adjuster management for rapid payouts.", icon: Scale }
    ],
    verticals: [
      { industry: "Manufacturing", challenge: "Single-point-of-failure production facilities", platform: "Risk Diagnostic Engine", icon: Building2 },
      { industry: "Supply Chain", challenge: "Tier-1 dependency bottlenecks", platform: "Supply Chain Monitor", icon: Target },
      { industry: "Real Estate", challenge: "Asset concentration risks", platform: "Climate Scenario", icon: Globe }
    ],
    businessImpact: [
      { phase: "Immediate Response", description: "Zero cash flow disruption through advance payments activated within 24 hours.", outcome: "Operations maintained without liquidity interruption." },
      { phase: "Operational Continuity", description: "Maintained 80% capacity via temporary leased facilities funded by BI coverage.", outcome: "Revenue protected while primary facility was rebuilt." },
      { phase: "Long-Term Recovery", description: "Facility rebuilt with upgraded, code-compliant infrastructure leveraging SFSP proceeds.", outcome: "Strengthened operational resilience for future events." }
    ],
    industryMapping: [
      { sector: "Heavy Manufacturing", challenge: "Single-point-of-failure production facilities threatening global supply", outcome: "Protected global supply commitments despite total facility loss.", relevantPlatform: "Risk Diagnostic Engine" },
      { sector: "Automotive OEM", challenge: "Just-in-time line stoppage penalties from supplier failure", outcome: "Prevented line-stoppage penalties through alternative sourcing coverage.", relevantPlatform: "Supply Chain Monitor" },
      { sector: "Pharmaceuticals", challenge: "API production halt threatening drug supply pipeline", outcome: "Maintained clinical trial supply through expedited alternative manufacturing.", relevantPlatform: "Climate Scenario" }
    ],
    successMetrics: [
      "Zero missed payroll cycles",
      "Retained 95% of customer base",
      "Advanced payout within 30 days"
    ],
    relatedSolutions: ["property-all-risks", "business-interruption", "claims-advocacy"],
    relatedPlatforms: ["risk-diagnostic-engine", "client-portal"],
    relatedRisks: ["fire-explosion", "business-interruption", "supply-chain-failure"]
  },
  "supplier-flood": {
    slug: "supplier-flood",
    category: "property",
    title: "Supplier Flood — Contingent BI",
    subtitle: "Unnamed CBI · Supply chain BI · Fast payout",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a63?q=80&w=2070&auto=format&fit=crop",
    overview: {
      description: "Activating Contingent Business Interruption when a critical tier-1 supplier was halted by regional flooding.",
      challenge: "A critical but unnamed overseas supplier experienced a 1-in-100 year flood event, cutting off a key component.",
      solution: "Triggered unnamed CBI coverage allowing the client to maintain revenue while sourcing alternative components at a premium."
    },
    kpiMetrics: [
      { value: "48-Hr", label: "Event Detection", icon: Waves },
      { value: "$45M", label: "CBI Payout", icon: BadgeDollarSign },
      { value: "0%", label: "Market Share Loss", icon: Target },
      { value: "100+", label: "Suppliers Mapped", icon: Globe }
    ],
    capabilities: [
      { title: "Unnamed CBI", description: "Coverage triggered even without naming the specific supplier.", icon: ShieldAlert },
      { title: "Fast Payout", description: "Expedited claims handling to maintain client cash flow.", icon: Zap },
      { title: "Alternative Sourcing", description: "Coverage for the increased costs of expedited air freight.", icon: Briefcase },
      { title: "Parametric Options", description: "Index-based triggers for future regional flood risks.", icon: Activity }
    ],
    verticals: [
      { industry: "Electronics", challenge: "Concentrated semiconductor suppliers", platform: "Supply Chain Monitor", icon: Cpu },
      { industry: "Automotive", challenge: "Just-in-time component dependency", platform: "Counterparty Assessment", icon: Target },
      { industry: "Retail", challenge: "Seasonal inventory disruption", platform: "Risk Feed", icon: Building2 }
    ],
    businessImpact: [
      { phase: "Supply Disruption", description: "Immediate alternative sourcing funded by Extra Expense coverage.", outcome: "Customer commitments maintained without revenue loss." },
      { phase: "Revenue Impact", description: "Margin loss fully indemnified through CBI triggered within 48 hours.", outcome: "Financial position protected despite supply shock." },
      { phase: "Strategic Shift", description: "Diversified supplier base using predictive modeling and intelligence platform.", outcome: "Supply chain resilience permanently strengthened post-event." }
    ],
    industryMapping: [
      { sector: "Technology Hardware", challenge: "Concentrated semiconductor suppliers creating single-point-of-failure risk", outcome: "Secured alternative chips without margin dilution.", relevantPlatform: "Supply Chain Monitor" },
      { sector: "Apparel", challenge: "Seasonal inventory disruption from supplier flood events", outcome: "Expedited seasonal shipping via airfreight funded by CBI.", relevantPlatform: "Risk Feed" },
      { sector: "Automotive", challenge: "Just-in-time component dependency on flood-prone regions", outcome: "Production continuity maintained through parametric payout.", relevantPlatform: "Climate Scenario" }
    ],
    successMetrics: [
      "Zero stock-outs for flagship products",
      "Full margin recovery on alternative goods",
      "Supply chain mapped to tier-3 post-event"
    ],
    relatedSolutions: ["business-interruption", "parametric-insurance"],
    relatedPlatforms: ["supply-chain-monitor", "political-monitor"],
    relatedRisks: ["natural-catastrophe", "supply-chain-failure"]
  },
  "unicorn-ipo": {
    slug: "unicorn-ipo",
    category: "liability",
    title: "Unicorn IPO — D&O Structuring",
    subtitle: "Pre-IPO allocation · Securities defense · EPL",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    overview: {
      description: "Structuring comprehensive Directors & Officers liability for a tech unicorn leading up to a major IPO.",
      challenge: "Hardening D&O market and complex SEC scrutiny threatened to leave the board exposed during the critical roadshow period.",
      solution: "Executed a pre-IPO allocation strategy, locking in capacity and broad securities claim coverage 6 months prior to listing."
    },
    kpiMetrics: [
      { value: "$100M", label: "Tower Capacity", icon: Briefcase },
      { value: "6 Mo", label: "Pre-IPO Lock", icon: Zap },
      { value: "10+", label: "Carriers Syndicated", icon: Users },
      { value: "A+", label: "Security Rating", icon: Shield }
    ],
    capabilities: [
      { title: "Pre-IPO Allocation", description: "Securing capacity early in a hard market.", icon: Target },
      { title: "Securities Defense", description: "Covering defense costs for prospectus-related claims.", icon: Scale },
      { title: "Side A DIC", description: "Dedicated limits for individual directors.", icon: ShieldAlert },
      { title: "EPL Integration", description: "Protecting against pre-listing employment practice claims.", icon: Users }
    ],
    verticals: [
      { industry: "Technology", challenge: "High valuation scrutiny", platform: "Risk DNA Mapper", icon: Cpu },
      { industry: "Life Sciences", challenge: "Clinical trial disclosure risks", platform: "Regulatory Intelligence", icon: Activity },
      { industry: "Fintech", challenge: "Regulatory compliance during IPO", platform: "Counterparty Assessment", icon: Building2 }
    ],
    businessImpact: [
      { phase: "Pre-Listing", description: "Attracted top-tier independent board members with D&O coverage certainty.", outcome: "Board composition strengthened ahead of IPO." },
      { phase: "Roadshow", description: "Executives focused on valuation without personal liability fear.", outcome: "Successful IPO at target valuation with full demand." },
      { phase: "Post-Listing", description: "Seamless transition to public company D&O with no coverage gaps.", outcome: "Ongoing public company D&O at competitive terms." }
    ],
    industryMapping: [
      { sector: "SaaS", challenge: "High valuation scrutiny and prospectus liability exposure during IPO", outcome: "Successfully listed without prospectus litigation exposure.", relevantPlatform: "Risk DNA Mapper" },
      { sector: "Biotech", challenge: "Clinical trial disclosure risks and FDA-related shareholder suits", outcome: "Protected board from FDA-related shareholder suits.", relevantPlatform: "Regulatory Intelligence" },
      { sector: "Fintech", challenge: "Regulatory compliance scrutiny during high-profile listing", outcome: "Securities defense coverage provided board confidence.", relevantPlatform: "Counterparty Assessment" }
    ],
    successMetrics: [
      "100% board retention through IPO",
      "Tower placed 15% below benchmark pricing",
      "Zero gaps in coverage during public transition"
    ],
    relatedSolutions: ["directors-officers", "professional-indemnity"],
    relatedPlatforms: ["ma-due-diligence", "executive-dashboards"],
    relatedRisks: ["regulatory-compliance", "executive-liability"]
  },
  "it-ransomware": {
    slug: "it-ransomware",
    category: "cyber",
    title: "IT Firm Ransomware Attack",
    subtitle: "Forensics · Ransom · DPDP notification · BI",
    heroImage: "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
    overview: {
      description: "Managing the crisis and financial fallout of a sophisticated ransomware attack on a global IT firm.",
      challenge: "A zero-day exploit encrypted core servers, halting operations and threatening the data of 50+ enterprise clients.",
      solution: "Deployed a pre-breach response team, negotiated with threat actors, and utilized cyber BI to cover the 14-day operational outage."
    },
    kpiMetrics: [
      { value: "4-Hr", label: "Breach Response", icon: Zap },
      { value: "14 Days", label: "System Recovery", icon: Activity },
      { value: "$12M", label: "Ransom Extortion", icon: BadgeDollarSign },
      { value: "0", label: "Client Defections", icon: Users }
    ],
    capabilities: [
      { title: "Forensics & Ransom", description: "Immediate deployment of incident response and negotiation teams.", icon: ShieldAlert },
      { title: "Business Interruption", description: "Reimbursing lost revenue during system downtime.", icon: Target },
      { title: "Data Notification", description: "Covering DPDP and GDPR mandatory breach notifications.", icon: Globe },
      { title: "PR Crisis Management", description: "Protecting brand equity through expert communications.", icon: Users }
    ],
    verticals: [
      { industry: "IT Services", challenge: "Client data aggregation risk", platform: "Cyber Intelligence", icon: Cpu },
      { industry: "Healthcare", challenge: "PHI exposure and HIPAA fines", platform: "Regulatory Intelligence", icon: Activity },
      { industry: "Financials", challenge: "Funds transfer fraud", platform: "Counterparty Assessment", icon: Building2 }
    ],
    businessImpact: [
      { phase: "Containment", description: "Stopped lateral movement within 24 hours using pre-breach response team.", outcome: "Attack surface contained before mass encryption." },
      { phase: "Negotiation", description: "Decryption keys acquired; data exfiltration prevented through proactive response.", outcome: "Client data protected; ransom avoided." },
      { phase: "Recovery", description: "Revenue loss fully indemnified via Cyber BI; systems restored in 14 days.", outcome: "Zero client defections; business continuity maintained." }
    ],
    industryMapping: [
      { sector: "Managed Service Providers", challenge: "Client data aggregation risk across 50+ enterprise customers", outcome: "Retained all client contracts post-breach.", relevantPlatform: "Cyber Intelligence" },
      { sector: "Cloud Hosting", challenge: "Massive forensic and notification costs from infrastructure breach", outcome: "Covered massive forensic and notification costs.", relevantPlatform: "Cyber Due Diligence" },
      { sector: "Healthcare IT", challenge: "PHI exposure and HIPAA fines from platform breach", outcome: "Regulatory defense costs fully covered.", relevantPlatform: "Regulatory Intelligence" }
    ],
    successMetrics: [
      "Zero regulatory fines levied",
      "Full system restore achieved in 14 days",
      "PR strategy prevented stock price drop"
    ],
    relatedSolutions: ["cyber-liability", "business-interruption"],
    relatedPlatforms: ["cyber-intelligence", "cyber-due-diligence"],
    relatedRisks: ["cyber-attack", "data-breach", "business-interruption"]
  },
  "pe-fund-exit": {
    slug: "pe-fund-exit",
    category: "financial",
    title: "PE Fund Exit — W&I Insurance",
    subtitle: "R&W policy · Escrow eliminated · Tax cover",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    overview: {
      description: "Eliminating deal friction and escrow requirements during a Private Equity exit using Warranty & Indemnity insurance.",
      challenge: "Buyers demanded a 15% escrow on a $400M exit, which would drastically reduce the PE fund's IRR.",
      solution: "Structured a buy-side W&I policy, shifting the breach-of-warranty risk to insurers and allowing a clean exit."
    },
    kpiMetrics: [
      { value: "$60M", label: "Escrow Eliminated", icon: BadgeDollarSign },
      { value: "0%", label: "Seller Liability", icon: Shield },
      { value: "14 Days", label: "Policy Binding", icon: Zap },
      { value: "100%", label: "Capital Deployed", icon: Target }
    ],
    capabilities: [
      { title: "Escrow Elimination", description: "Freeing up capital that would otherwise be locked post-sale.", icon: Briefcase },
      { title: "Tax Cover", description: "Insuring against identified contingent tax liabilities.", icon: Scale },
      { title: "Clean Exit", description: "Capping seller liability at $1 (the fraud retention).", icon: Activity },
      { title: "Deal Facilitation", description: "Speeding up negotiations by removing indemnity debates.", icon: Users }
    ],
    verticals: [
      { industry: "Private Equity", challenge: "Fund lifecycle limitations on escrows", platform: "M&A Due Diligence", icon: Building2 },
      { industry: "Real Estate", challenge: "Title and environmental warranties", platform: "Climate Scenario", icon: Globe },
      { industry: "Technology", challenge: "IP infringement representations", platform: "Contract Intelligence", icon: Cpu }
    ],
    businessImpact: [
      { phase: "Negotiation", description: "Removed the major friction point between buyer and seller using W&I structure.", outcome: "Deal terms agreed without escrow holdback." },
      { phase: "Closing", description: "Enabled immediate distribution of funds to LPs through clean exit.", outcome: "Capital recycled to new opportunities." },
      { phase: "Post-Close", description: "Buyer successfully claimed against insurer for minor breach identified post-close.", outcome: "Seller fully protected; W&I policy performed as designed." }
    ],
    industryMapping: [
      { sector: "Mid-Market PE", challenge: "Fund lifecycle limitations on escrows reducing IRR for LPs", outcome: "Boosted fund IRR by eliminating 2-year escrows.", relevantPlatform: "M&A Due Diligence" },
      { sector: "Corporate Divestitures", challenge: "Clean break complexity from retained liabilities", outcome: "Clean break for parent company with full certainty.", relevantPlatform: "Contract Intelligence" },
      { sector: "Venture Capital", challenge: "Portfolio company exit friction from warranty uncertainty", outcome: "Accelerated exit timeline through W&I placement.", relevantPlatform: "Risk DNA Mapper" }
    ],
    successMetrics: [
      "IRR improved by 2.4%",
      "Deal closed 30 days ahead of schedule",
      "Broadest possible warranty coverage secured"
    ],
    relatedSolutions: ["ma-insurance", "directors-officers"],
    relatedPlatforms: ["ma-due-diligence", "contract-intelligence"],
    relatedRisks: ["transaction-risk", "regulatory-compliance"]
  },
  "solar-park": {
    slug: "solar-park",
    category: "industry",
    title: "500 MW Solar Park",
    subtitle: "CAR + EAR + Production guarantee + Parametric",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    overview: {
      description: "Holistic risk transfer for a massive greenfield solar infrastructure project.",
      challenge: "Lenders required guarantees against construction delays and long-term solar irradiance shortfalls before funding.",
      solution: "Designed a comprehensive CAR/EAR program linked with a parametric irradiance hedge to guarantee project revenue."
    },
    kpiMetrics: [
      { value: "500MW", label: "Project Size", icon: Sun },
      { value: "$1.2B", label: "Asset Value", icon: BadgeDollarSign },
      { value: "10 Yr", label: "Revenue Hedge", icon: TrendingUp },
      { value: "100%", label: "Lender Compliant", icon: Shield }
    ],
    capabilities: [
      { title: "Production Guarantee", description: "Hedging against low solar irradiance.", icon: Sun },
      { title: "Parametric Weather", description: "Rapid payout for extreme hail or wind events.", icon: Zap },
      { title: "Delay in Start-Up", description: "Covering debt service if construction is delayed.", icon: Activity },
      { title: "CAR / EAR", description: "Physical damage protection during erection.", icon: Building2 }
    ],
    verticals: [
      { industry: "Renewable Energy", challenge: "Weather dependency and financing", platform: "Climate Scenario", icon: Globe },
      { industry: "Infrastructure", challenge: "Long-term construction risks", platform: "Risk DNA Mapper", icon: Target },
      { industry: "Utilities", challenge: "Grid connection delays", platform: "Regulatory Intelligence", icon: Activity }
    ],
    businessImpact: [
      { phase: "Financing", description: "Secured non-recourse project financing at favorable rates through parametric hedge.", outcome: "Debt terms improved by 120 bps due to risk transfer." },
      { phase: "Construction", description: "Covered massive hail damage to panels during transit and installation.", outcome: "Zero cost overruns from weather events." },
      { phase: "Operation", description: "Stabilized cash flow during unexpected low-sun months via parametric irradiance hedge.", outcome: "Revenue certainty maintained across 25-year horizon." }
    ],
    industryMapping: [
      { sector: "Solar Energy", challenge: "Long-tenor revenue uncertainty from weather and technology risk", outcome: "De-risked the entire 25-year asset lifecycle.", relevantPlatform: "Climate Scenario" },
      { sector: "Wind Energy", challenge: "Replicable model for offshore wind DSU and construction risk", outcome: "Offshore wind DSU program replicated at 3 additional projects.", relevantPlatform: "Risk Diagnostic Engine" },
      { sector: "Battery Storage", challenge: "Technology degradation and revenue shortfall risk", outcome: "Production guarantee hedged degradation risk for lenders.", relevantPlatform: "Supply Chain Monitor" }
    ],
    successMetrics: [
      "Debt cost reduced by 1.2% due to hedges",
      "Zero gap in coverage from construction to ops",
      "Parametric payout triggered within 14 days of storm"
    ],
    relatedSolutions: ["construction-risk", "parametric-insurance"],
    relatedPlatforms: ["climate-scenario", "risk-diagnostic-engine"],
    relatedRisks: ["natural-catastrophe", "project-delay", "climate-change"]
  },
  "nhai-highway": {
    slug: "nhai-highway",
    category: "industry",
    title: "NHAI 15-Year Highway Concession",
    subtitle: "Long-tenor property + BI + Surety + Parametric",
    heroImage: "https://images.unsplash.com/photo-1541888087401-443b2fbbfa78?q=80&w=2070&auto=format&fit=crop",
    overview: {
      description: "Securing a 15-year concession agreement with NHAI using long-tenor insurance and surety solutions.",
      challenge: "The operator needed to lock in operational risk costs for 15 years while freeing up working capital tied in bank guarantees.",
      solution: "Placed a 15-year long-tenor property/BI policy and replaced $40M in bank guarantees with surety bonds."
    },
    kpiMetrics: [
      { value: "15-Yr", label: "Locked Tenor", icon: TrendingUp },
      { value: "$40M", label: "Capital Freed", icon: BadgeDollarSign },
      { value: "300km", label: "Asset Protected", icon: Target },
      { value: "100%", label: "NHAI Compliant", icon: Shield }
    ],
    capabilities: [
      { title: "Surety Bonds", description: "Replacing bank guarantees to free up working capital.", icon: Briefcase },
      { title: "Long-Tenor Property", description: "Locked-in rates for the duration of the concession.", icon: Activity },
      { title: "Loss of Toll Revenue", description: "Business interruption specific to toll collection.", icon: Globe },
      { title: "Parametric Quake", description: "Immediate liquidity post-earthquake.", icon: Zap }
    ],
    verticals: [
      { industry: "Infrastructure", challenge: "Long-term operational cost certainty", platform: "Risk DNA Mapper", icon: Building2 },
      { industry: "Construction", challenge: "Working capital constraints", platform: "Counterparty Assessment", icon: Target },
      { industry: "Public Sector", challenge: "Strict concession agreements", platform: "Regulatory Intelligence", icon: Scale }
    ],
    businessImpact: [
      { phase: "Bidding", description: "Lowered cost of capital enabled a winning bid in competitive tender.", outcome: "Won 15-year concession at favorable terms." },
      { phase: "Capital Optimization", description: "$40M in credit lines freed through surety bond replacement.", outcome: "Capital redeployed to new infrastructure acquisitions." },
      { phase: "Risk Certainty", description: "Protected project IRR from insurance market cycles through long-tenor lock.", outcome: "IRR certainty maintained across 15-year horizon." }
    ],
    industryMapping: [
      { sector: "Toll Roads", challenge: "Concession economics optimization under NHAI requirements", outcome: "Optimized concession economics through surety bonds.", relevantPlatform: "Contract Intelligence" },
      { sector: "Airports & Ports", challenge: "Long-term revenue protection from operational disruption", outcome: "Long-term revenue protection through parametric triggers.", relevantPlatform: "Climate Scenario" },
      { sector: "Social Infrastructure", challenge: "Working capital constraints from bank guarantee requirements", outcome: "$40M working capital freed for expansion.", relevantPlatform: "Counterparty Assessment" }
    ],
    successMetrics: [
      "IRR improved by 3% through capital release",
      "Insurance budget locked for 15 years",
      "Zero compliance breaches with NHAI"
    ],
    relatedSolutions: ["surety-bonds", "business-interruption"],
    relatedPlatforms: ["contract-intelligence", "climate-scenario"],
    relatedRisks: ["natural-catastrophe", "business-interruption"]
  },
  "sebi-adviser": {
    slug: "sebi-adviser",
    category: "liability",
    title: "SEBI-Registered Adviser PI",
    subtitle: "Mandatory PI · Suitability claim · SEBI defense",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    overview: {
      description: "Defending a SEBI-registered financial adviser against suitability claims and regulatory investigations.",
      challenge: "A market crash led to a class-action suitability lawsuit and a parallel SEBI investigation against an advisory firm.",
      solution: "Activated a specialized PI/D&O blended policy covering both client settlements and massive regulatory defense costs."
    },
    kpiMetrics: [
      { value: "$15M", label: "Defense Covered", icon: Scale },
      { value: "0", label: "Fines Paid", icon: Shield },
      { value: "100%", label: "Licensure Saved", icon: Target },
      { value: "48-Hr", label: "Legal Deploy", icon: Zap }
    ],
    capabilities: [
      { title: "SEBI Defense", description: "Covering legal costs for regulatory inquiries.", icon: Scale },
      { title: "Suitability Claim", description: "Protection against allegations of improper investment advice.", icon: Briefcase },
      { title: "Reputation Management", description: "PR costs to protect the firm's market standing.", icon: Users },
      { title: "Retroactive Date", description: "Coverage for advice given years prior to the claim.", icon: Activity }
    ],
    verticals: [
      { industry: "Financial Services", challenge: "Strict fiduciary regulations", platform: "Regulatory Intelligence", icon: Building2 },
      { industry: "Asset Management", challenge: "Market volatility claims", platform: "Risk Feed", icon: TrendingUp },
      { industry: "Fintech", challenge: "Robo-advisory algorithm failure", platform: "Cyber Intelligence", icon: Cpu }
    ],
    businessImpact: [
      { phase: "Investigation", description: "Provided top-tier securities counsel without budget constraints through PI coverage.", outcome: "Full defense team deployed within 48 hours." },
      { phase: "Settlement", description: "Indemnified the firm against class-action damages through PI/D&O blended policy.", outcome: "Settlement reached without firm capital contribution." },
      { phase: "Post-Claim", description: "Maintained SEBI registration and continued operations without interruption.", outcome: "Firm operations continued; license preserved." }
    ],
    industryMapping: [
      { sector: "Wealth Management", challenge: "Existential regulatory action from market crash suitability claims", outcome: "Firm survived existential regulatory action.", relevantPlatform: "Regulatory Intelligence" },
      { sector: "Broker-Dealers", challenge: "Partner personal asset exposure from securities litigation", outcome: "Protected partners' personal assets through Side A coverage.", relevantPlatform: "Risk Feed" },
      { sector: "Investment Advisers", challenge: "SEBI registration loss from defense cost exhaustion", outcome: "Registration maintained through defense cost coverage.", relevantPlatform: "Cyber Intelligence" }
    ],
    successMetrics: [
      "Firm operations continued without interruption",
      "Legal costs fully reimbursed",
      "Successful dismissal of primary SEBI charges"
    ],
    relatedSolutions: ["professional-indemnity", "directors-officers"],
    relatedPlatforms: ["regulatory-intelligence", "executive-dashboards"],
    relatedRisks: ["regulatory-compliance", "executive-liability"]
  }
};

export const ALL_OUTCOME_SLUGS = Object.keys(outcomesData);
