"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  CATEGORY_GROUPS,
  getOfferingsByCategory,
} from "@/data/offeringsData";

const SECTION =
  "text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2 px-3 pt-1 border-b border-slate-100 pb-1.5";
const LINK =
  "flex items-start gap-2 px-3 py-1.5 rounded text-[13px] transition-all text-slate-700 hover:text-blue-600 hover:bg-slate-50";
const CHEV = <ChevronRight className="h-3 w-3 text-blue-600 flex-shrink-0 mt-0.5" />;

function MegaGrid({
  items,
}: {
  items: { title: string; links: { href: string; label: string; bold?: boolean }[] }[];
}) {
  return (
    <div className="w-[1160px] p-6 bg-white">
      <div className="grid grid-cols-4 gap-x-12 gap-y-0">
        {items.map((col) => (
          <div key={col.title} className="flex flex-col min-w-[200px]">
            <div className={SECTION}>{col.title}</div>
            {col.links.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                className={cn(LINK, l.bold && "bg-blue-50 text-blue-700 font-semibold")}
              >
                {CHEV}
                <span className="font-medium whitespace-nowrap leading-tight">
                  {l.label}
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Home: 4 rows × 2 cols (8 items) ───
const HOME = [
  { title: "MAIN PAGES", links: [
      { href: "/", label: "Homepage" },
      { href: "/about-us", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
      { href: "/insights", label: "Insights" },
    ]},
  { title: "SOLUTIONS", links: [
      { href: "/solutions", label: "All Solutions" },
      { href: "/solutions/property-asset-protection", label: "Property & Asset Protection" },
      { href: "/solutions/liability-governance", label: "Liability & Governance" },
      { href: "/solutions/emerging-risk-solutions", label: "Emerging Risk Solutions" },
    ]},
  { title: "INDUSTRIES", links: [
      { href: "/industries", label: "All Industries" },
      { href: "/industries/technology-digital", label: "Technology & Digital" },
      { href: "/industries/manufacturing-industrial", label: "Manufacturing & Industrial" },
      { href: "/industries/energy-utilities", label: "Energy & Utilities" },
    ]},
  { title: "PLATFORM", links: [
      { href: "/platform", label: "All Platforms" },
      { href: "/platform/risk-diagnostic-engine", label: "Risk Diagnostic Engine" },
      { href: "/platform/cyber-intelligence", label: "Cyber Intelligence" },
      { href: "/platform/risk-dna-mapper", label: "Risk DNA Mapper" },
    ]},
  { title: "OUTCOMES", links: [
      { href: "/outcomes", label: "All Outcomes" },
      { href: "/outcomes/unicorn-ipo", label: "Unicorn IPO — D&O" },
      { href: "/outcomes/factory-fire", label: "Factory Fire — BI + Rebuild" },
      { href: "/outcomes/it-ransomware", label: "IT Ransomware" },
    ]},
  { title: "RISKS", links: [
      { href: "/risks", label: "All Risks" },
      { href: "/risks/cross-industry", label: "Cross-Industry Risks" },
      { href: "/risks/cross-functional", label: "Cross-Functional Risks" },
      { href: "/risks/emerging", label: "Emerging Risks" },
    ]},
  { title: "OFFERINGS", links: [
      { href: "/offerings", label: "All Offerings" },
      { href: "/offerings/category/insurance-solutions", label: "Insurance Solutions" },
      { href: "/offerings/category/cyber-digital-risk", label: "Cyber & Digital Risk" },
      { href: "/offerings/category/emerging-risks", label: "Emerging & Frontier Risk" },
    ]},
  { title: "COMPANY", links: [
      { href: "/about-us", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
      { href: "/insights", label: "Insights" },
      { href: "/about-us#leadership", label: "Leadership & Culture" },
    ]},
];

// ─── Industries: 2 rows × 4 cols ───
const INDUSTRIES = [
  { title: "MANUFACTURING & INDUSTRIAL", links: [
      { href: "/industries/manufacturing-industrial", label: "Manufacturing & Industrial" },
      { href: "/industries/technology-digital", label: "Technology & Digital" },
      { href: "/industries/energy-utilities", label: "Energy & Utilities" },
      { href: "/industries/government-public-sector", label: "Government & Public Sector" },
    ]},
  { title: "TECHNOLOGY & ELECTRONICS", links: [
      { href: "/industries/technology-digital", label: "IT & BPM" },
      { href: "/industries/technology-digital", label: "Electronics & Semiconductor" },
      { href: "/industries/technology-digital", label: "Telecommunications" },
      { href: "/industries/technology-digital", label: "Science & Technology" },
    ]},
  { title: "INFRASTRUCTURE & CONSTRUCTION", links: [
      { href: "/industries/infrastructure-real-estate", label: "Cement" },
      { href: "/industries/infrastructure-real-estate", label: "Steel" },
      { href: "/industries/infrastructure-real-estate", label: "Infrastructure" },
      { href: "/industries/infrastructure-real-estate", label: "Real Estate & Highways" },
    ]},
  { title: "ENERGY & UTILITIES", links: [
      { href: "/industries/energy-utilities", label: "Oil & Gas" },
      { href: "/industries/energy-utilities", label: "Power" },
      { href: "/industries/energy-utilities", label: "Renewable Energy" },
      { href: "/industries/energy-utilities", label: "Ports & Railways" },
    ]},
  { title: "FINANCIAL SERVICES", links: [
      { href: "/industries/financial-services", label: "Banking" },
      { href: "/industries/financial-services", label: "Financial Services" },
      { href: "/industries/financial-services", label: "Insurance" },
      { href: "/industries/financial-services", label: "E-Commerce" },
    ]},
  { title: "HEALTHCARE & LIFE SCIENCES", links: [
      { href: "/industries/healthcare-life-sciences", label: "Pharmaceuticals" },
      { href: "/industries/healthcare-life-sciences", label: "Healthcare" },
      { href: "/industries/healthcare-life-sciences", label: "Medical Devices" },
      { href: "/industries/healthcare-life-sciences", label: "Biotechnology" },
    ]},
  { title: "CONSUMER & RETAIL", links: [
      { href: "/industries/retail-hospitality", label: "FMCG" },
      { href: "/industries/retail-hospitality", label: "Retail" },
      { href: "/industries/retail-hospitality", label: "Consumer Durables" },
      { href: "/industries/retail-hospitality", label: "Textiles & Food Processing" },
    ]},
  { title: "MEDIA & SERVICES", links: [
      { href: "/industries/emerging-industries", label: "Media & Entertainment" },
      { href: "/industries/emerging-industries", label: "Tourism & Hospitality" },
      { href: "/industries/emerging-industries", label: "Aviation" },
      { href: "/industries/emerging-industries", label: "Education & Allied" },
    ]},
];

// ─── Risks: 2 rows × 4 cols ───
const RISKS = [
  { title: "CYBER RISKS", links: [
      { href: "/risks/ransomware", label: "Ransomware Attack" },
      { href: "/risks/data-breach", label: "Data Breach (PII)" },
      { href: "/risks/supply-chain-cyber", label: "Supply Chain Cyber Attack" },
      { href: "/risks/bec", label: "Business Email Compromise" },
    ]},
  { title: "FINANCIAL RISKS", links: [
      { href: "/risks/d-o-personal-liability", label: "D&O Personal Liability" },
      { href: "/risks/employment-practices", label: "Employment Practices Liability" },
      { href: "/risks/crime-employee-dishonesty", label: "Crime & Employee Dishonesty" },
      { href: "/risks/regulatory-investigation", label: "Regulatory Investigation & Fines" },
    ]},
  { title: "OPERATIONAL RISKS", links: [
      { href: "/risks/natural-catastrophe", label: "Natural Catastrophe" },
      { href: "/risks/business-interruption", label: "Business Interruption" },
      { href: "/risks/key-person-loss", label: "Key Person Loss" },
      { href: "/risks/reputational-damage", label: "Reputational Damage" },
    ]},
  { title: "REGULATORY RISKS", links: [
      { href: "/risks/climate-physical", label: "Climate Change — Physical" },
      { href: "/risks/climate-transition", label: "Climate Change — Transition" },
      { href: "/risks/pandemic", label: "Pandemic / Communicable Disease" },
      { href: "/risks/risk-intelligence-center", label: "Risk Intelligence Center" },
    ]},
  { title: "CLIMATE RISKS", links: [
      { href: "/risks/climate-physical", label: "Physical Climate Risk" },
      { href: "/risks/climate-transition", label: "Transition Climate Risk" },
      { href: "/risks/emerging", label: "Emerging Climate Tech" },
      { href: "/risks/emerging", label: "Supply Chain Climate Risk" },
    ]},
  { title: "EMERGING RISKS", links: [
      { href: "/risks/emerging", label: "Quantum Encryption" },
      { href: "/risks/emerging", label: "Satellite Cyber" },
      { href: "/risks/emerging", label: "Autonomous Vehicle" },
      { href: "/risks/emerging", label: "Drone Third-Party Injury" },
    ]},
  { title: "STRATEGIC RISKS", links: [
      { href: "/risks/m-a-transaction-risk", label: "M&A Transaction Risk" },
      { href: "/risks/third-party-vendor-risk", label: "Third-Party Vendor Risk" },
      { href: "/risks/currency-fluctuation", label: "Currency Fluctuation" },
      { href: "/risks/ai-product-liability", label: "AI Product Liability" },
    ]},
  { title: "COMPLIANCE RISKS", links: [
      { href: "/risks/contract-risk-exposure", label: "Contract Risk Exposure" },
      { href: "/risks/ip-infringement", label: "IP Infringement" },
      { href: "/risks/securities-litigation", label: "Securities Litigation" },
      { href: "/risks/aml-violation", label: "AML Violation" },
    ]},
];

// ─── Offerings: 2 rows × 4 cols (8 categories, excluding technology-platforms) ───
const OFFERINGS = [
  { title: "INSURANCE SOLUTIONS", links: [
      { href: "/offerings/property-sfsp", label: "Property All-Risks" },
      { href: "/offerings/business-interruption", label: "Business Interruption" },
      { href: "/offerings/contingent-bi", label: "Contingent BI" },
      { href: "/offerings/equipment-breakdown", label: "Equipment Breakdown" },
    ]},
  { title: "CYBER & DIGITAL RISK", links: [
      { href: "/offerings/cyber-first-party", label: "Cyber First Party" },
      { href: "/offerings/cyber-third-party", label: "Cyber Third Party Liability" },
      { href: "/offerings/cyber-regulatory-defense", label: "Regulatory Defense" },
      { href: "/offerings/cyber-ransomware", label: "Ransomware Protection" },
    ]},
  { title: "WARRANTY & GUARANTEE", links: [
      { href: "/offerings/product-warranty-program", label: "Product Warranty Design" },
      { href: "/offerings/extended-warranty-program", label: "Extended Warranty Design" },
      { href: "/offerings/performance-bonds", label: "Performance Bonds" },
      { href: "/offerings/bid-bonds", label: "Bid Bonds" },
    ]},
  { title: "ALTERNATIVE RISK TRANSFER", links: [
      { href: "/offerings/captive-insurance", label: "Captive Insurance" },
      { href: "/offerings/parametric-insurance", label: "Parametric Solutions" },
      { href: "/offerings/ils-cat-bonds", label: "ILS / Cat Bonds" },
      { href: "/offerings/risk-retention-groups", label: "Risk Retention Groups" },
    ]},
  { title: "AI CONTRACT & ANALYTICS", links: [
      { href: "/offerings/ai-contract-risk-analytics", label: "AI Contract Analytics" },
      { href: "/offerings/contract-compliance-checker", label: "Compliance Checker" },
      { href: "/offerings/ma-risk-due-diligence", label: "M&A Due Diligence" },
      { href: "/offerings/category/ai-contract-analytics", label: "View All →", bold: true },
    ]},
  { title: "INDUSTRY PROGRAMS", links: [
      { href: "/offerings/financial-services-program", label: "Financial Services" },
      { href: "/offerings/healthcare-program", label: "Healthcare" },
      { href: "/offerings/manufacturing-program", label: "Manufacturing" },
      { href: "/offerings/energy-program", label: "Energy & Renewables" },
    ]},
  { title: "ADVISORY & CONSULTING", links: [
      { href: "/offerings/erm-consulting", label: "ERM Consulting" },
      { href: "/offerings/climate-risk-advisory", label: "Climate Risk Advisory" },
      { href: "/offerings/ma-risk-advisory", label: "M&A Risk Advisory" },
      { href: "/offerings/claims-advocacy", label: "Claims Advocacy" },
    ]},
  { title: "EMERGING & FRONTIER RISK", links: [
      { href: "/offerings/crypto-insurance", label: "Crypto & Digital Asset" },
      { href: "/offerings/quantum-risk-insurance", label: "Quantum Computing" },
      { href: "/offerings/drone-insurance", label: "Drone / UAV" },
      { href: "/offerings/space-insurance", label: "Space & Satellite" },
    ]},
];

function OfferingsMega() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Offerings</NavigationMenuTrigger>
      <NavigationMenuContent>
        <MegaGrid items={OFFERINGS} />
        <div className="px-6 pb-4 pt-0">
          <Link
            href="/offerings"
            className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            View All Offerings →
          </Link>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

// ─── Solutions: 2 rows × 4 cols ───
const SOLUTIONS = [
  { title: "PROPERTY ASSET PROTECTION", links: [
      { href: "/solutions/property-asset-protection", label: "Property & Asset Protection" },
      { href: "/solutions/property-sfsp", label: "Property All-Risks" },
      { href: "/solutions/business-interruption", label: "Business Interruption" },
      { href: "/solutions/contingent-bi", label: "Contingent BI" },
    ]},
  { title: "LIABILITY & GOVERNANCE", links: [
      { href: "/solutions/liability-governance", label: "Liability & Governance" },
      { href: "/solutions/product-liability", label: "Product Liability" },
      { href: "/solutions/professional-indemnity", label: "Professional Indemnity" },
      { href: "/solutions/directors-officers", label: "Directors & Officers" },
    ]},
  { title: "FINANCIAL & TRANSACTION", links: [
      { href: "/solutions/financial-transaction-risk", label: "Financial & Transaction Risk" },
      { href: "/solutions/trade-credit", label: "Trade Credit" },
      { href: "/solutions/surety-bonds", label: "Surety Bonds" },
      { href: "/solutions/ma-insurance", label: "M&A Insurance" },
    ]},
  { title: "EMERGING RISK SOLUTIONS", links: [
      { href: "/solutions/emerging-risk-solutions", label: "Emerging Risk Solutions" },
      { href: "/solutions/climate-risk", label: "Climate Risk Solutions" },
      { href: "/solutions/ai-risk", label: "AI Risk Solutions" },
      { href: "/solutions/space-insurance", label: "Space Insurance" },
    ]},
  { title: "ALTERNATIVE RISK TRANSFER", links: [
      { href: "/solutions/alternative-risk-transfer", label: "Alternative Risk Transfer" },
      { href: "/solutions/captive-insurance", label: "Captive Insurance" },
      { href: "/solutions/parametric-insurance", label: "Parametric Insurance" },
      { href: "/solutions/ils-cat-bonds", label: "ILS / Cat Bonds" },
    ]},
  { title: "RISK ENGINEERING", links: [
      { href: "/solutions/risk-engineering", label: "Risk Engineering & Loss Prevention" },
      { href: "/solutions/property-asset-protection", label: "Property & Asset Protection" },
      { href: "/solutions/claims-advocacy", label: "Claims Advocacy" },
      { href: "/solutions/business-interruption", label: "Business Interruption" },
    ]},
  { title: "PROGRAM ARCHITECTURE", links: [
      { href: "/solutions/global-program-architecture", label: "Global Program Architecture" },
      { href: "/solutions/tcor-analytics", label: "TCOR Analytics" },
      { href: "/solutions/long-tenor-infrastructure", label: "Long-Tenor Infrastructure" },
      { href: "/solutions/risk-engineering", label: "Risk Engineering" },
    ]},
  { title: "SPECIALISED PROGRAMS", links: [
      { href: "/solutions/property-asset-protection", label: "Property Solutions" },
      { href: "/solutions/liability-governance", label: "Liability Shield" },
      { href: "/solutions/alternative-risk-transfer", label: "Alternative Risk Transfer" },
      { href: "/solutions", label: "View All Solutions →", bold: true },
    ]},
];

// ─── Outcomes: 2 rows × 4 cols ───
const OUTCOMES = [
  { title: "PROPERTY CASES", links: [
      { href: "/outcomes/factory-fire", label: "Factory Fire — BI + Rebuild" },
      { href: "/outcomes/supplier-flood", label: "Supplier Flood — CBI" },
      { href: "/outcomes/nhai-highway", label: "NHAI Highway Concession" },
      { href: "/outcomes/solar-park", label: "500 MW Solar Park" },
    ]},
  { title: "LIABILITY CASES", links: [
      { href: "/outcomes/unicorn-ipo", label: "Unicorn IPO — D&O" },
      { href: "/outcomes/pe-fund-exit", label: "PE Fund Exit — W&I" },
      { href: "/outcomes/it-ransomware", label: "IT Ransomware Attack" },
      { href: "/outcomes/sebi-adviser", label: "SEBI Adviser PI" },
    ]},
  { title: "RISK SCENARIOS", links: [
      { href: "/risks/emerging", label: "Emerging Risks" },
      { href: "/risks/industry-specific", label: "Industry-Specific Risks" },
      { href: "/risks/cross-industry", label: "Cross-Industry Risks" },
      { href: "/risks/cross-functional", label: "Cross-Functional Risks" },
    ]},
  { title: "FINANCIAL OUTCOMES", links: [
      { href: "/solutions/tcor-analytics", label: "TCOR Analytics" },
      { href: "/solutions/claims-advocacy", label: "Claims Advocacy" },
      { href: "/outcomes", label: "View All Outcomes →", bold: true },
    ]},
  { title: "INFRASTRUCTURE", links: [
      { href: "/outcomes/nhai-highway", label: "NHAI Highway" },
      { href: "/solutions/long-tenor-infrastructure", label: "Long-Tenor Programs" },
      { href: "/outcomes/solar-park", label: "Solar Park" },
      { href: "/outcomes", label: "View All →", bold: true },
    ]},
  { title: "CYBER OUTCOMES", links: [
      { href: "/outcomes/it-ransomware", label: "IT Ransomware Attack" },
      { href: "/risks/cross-industry", label: "Ransomware" },
      { href: "/risks/cross-industry", label: "Data Breach" },
      { href: "/platform/cyber-intelligence", label: "Cyber Intelligence" },
    ]},
  { title: "PROPERTY", links: [
      { href: "/outcomes/factory-fire", label: "Factory Fire" },
      { href: "/outcomes/supplier-flood", label: "Supplier Flood" },
      { href: "/solutions/property-asset-protection", label: "Property Solutions" },
      { href: "/outcomes", label: "View All →", bold: true },
    ]},
  { title: "BROWSE ALL", links: [
      { href: "/outcomes", label: "View All Outcomes →", bold: true },
      { href: "/outcomes/unicorn-ipo", label: "Unicorn IPO" },
      { href: "/outcomes/pe-fund-exit", label: "PE Fund Exit" },
      { href: "/outcomes/factory-fire", label: "Factory Fire" },
    ]},
];

// ─── Company: 1 row × 4 cols ───
const COMPANY = [
  { title: "ABOUT GBRS", links: [
      { href: "/about-us", label: "About Us" },
      { href: "/about-us#about", label: "Our Story & Mission" },
      { href: "/about-us#why-risk", label: "Why Risk Intelligence" },
      { href: "/ecosystem", label: "Ecosystem" },
      { href: "/about-us#by-the-numbers", label: "By The Numbers" },
    ]},
  { title: "OUR TEAM", links: [
      { href: "/about-us#leadership", label: "Leadership & Teams" },
      { href: "/about-us#leadership", label: "Risk Management & AI" },
      { href: "/about-us#leadership", label: "Technical & Operations" },
      { href: "/about-us#leadership", label: "Strategic Practice Leads" },
    ]},
  { title: "OUR OFFICES", links: [
      { href: "/about-us#offices", label: "All Offices" },
      { href: "/about-us#offices", label: "India — Bengaluru" },
      { href: "/about-us#offices", label: "India — Mumbai" },
      { href: "/about-us#offices", label: "Singapore & US" },
    ]},
  { title: "CONNECT", links: [
      { href: "/contact", label: "Contact Us", bold: true },
      { href: "/insights", label: "Insights & Research" },
      { href: "/contact", label: "Book for Consulting" },
      { href: "/contact", label: "Talk to a Risk Expert" },
    ]},
];

// ─── Platform: 2 rows × 4 cols ───
const PLATFORMS = [
  { title: "RISK INTELLIGENCE", links: [
      { href: "/platform/risk-intelligence-aggregator", label: "Risk Intelligence Aggregator" },
      { href: "/platform/risk-diagnostic-engine", label: "Risk Diagnostic Engine" },
      { href: "/platform/risk-dna-mapper", label: "Risk DNA Mapper" },
      { href: "/platform/cyber-intelligence", label: "Cyber Intelligence" },
    ]},
  { title: "SUPPLY CHAIN", links: [
      { href: "/platform/supply-chain-monitor", label: "Supply Chain Monitor" },
      { href: "/platform/counterparty-assessment", label: "Counterparty Assessment" },
      { href: "/platform/climate-scenario", label: "Climate Analytics" },
      { href: "/platform/political-monitor", label: "Political Risk Monitor" },
    ]},
  { title: "REGULATORY & COMPLIANCE", links: [
      { href: "/platform/regulatory-intelligence", label: "Regulatory Intelligence" },
      { href: "/platform/contract-intelligence", label: "Contract Intelligence" },
      { href: "/platform/ma-due-diligence", label: "M&A Due Diligence Suite" },
      { href: "/platform", label: "View All Platforms →", bold: true },
    ]},
  { title: "ANALYTICS", links: [
      { href: "/platform/risk-diagnostic-engine", label: "Risk Diagnostic Engine" },
      { href: "/platform/risk-dna-mapper", label: "Risk DNA Mapper" },
      { href: "/platform/climate-scenario", label: "Climate Scenario Analysis" },
      { href: "/platform/cyber-intelligence", label: "Cyber Intelligence" },
    ]},
  { title: "EMERGING RISK", links: [
      { href: "/platform/cyber-intelligence", label: "Cyber Threat Intelligence" },
      { href: "/platform/climate-scenario", label: "Climate Analytics" },
      { href: "/platform/political-monitor", label: "Political Risk Monitor" },
      { href: "/platform", label: "View All Platforms →", bold: true },
    ]},
  { title: "DATA & INSIGHTS", links: [
      { href: "/platform/risk-dna-mapper", label: "Risk DNA Mapper" },
      { href: "/platform/risk-intelligence-aggregator", label: "Risk Intelligence Feed" },
      { href: "/platform/risk-diagnostic-engine", label: "Diagnostic Engine" },
      { href: "/platform", label: "View All →", bold: true },
    ]},
  { title: "MONITORING", links: [
      { href: "/platform/supply-chain-monitor", label: "Supply Chain Monitor" },
      { href: "/platform/counterparty-assessment", label: "Counterparty Assessment" },
      { href: "/platform/political-monitor", label: "Political Risk Monitor" },
      { href: "/platform/climate-scenario", label: "Climate Analytics" },
    ]},
  { title: "BROWSE ALL", links: [
      { href: "/platform", label: "View All Platforms →", bold: true },
      { href: "/platform/risk-diagnostic-engine", label: "Risk Diagnostic Engine" },
      { href: "/platform/risk-dna-mapper", label: "Risk DNA Mapper" },
      { href: "/platform/cyber-intelligence", label: "Cyber Intelligence" },
    ]},
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex flex-col items-center text-center">
            <span className="text-xl font-bold tracking-tight text-primary leading-tight">
              TRUSTFLOW
            </span>
            <span className="text-xs font-normal text-muted-foreground mt-1">
              Risk Advisory Insurance & Resilience Solutions
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaGrid items={HOME} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaGrid items={INDUSTRIES} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Risks</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaGrid items={RISKS} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <OfferingsMega />

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaGrid items={SOLUTIONS} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Outcomes</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaGrid items={OUTCOMES} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaGrid items={PLATFORMS} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaGrid items={COMPANY} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Button className="bg-primary text-white hover:bg-primary/90">
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-90">Contact Us</div>
              </div>
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="flex flex-col gap-6 pt-10 pb-8">
                <div>
                  <Link href="/" className="flex flex-col items-center text-center mb-4">
                    <span className="text-xl font-bold tracking-tight text-primary leading-tight">
                      TRUSTFLOW
                    </span>
                    <span className="text-xs font-normal text-muted-foreground mt-1">
                      Risk Advisory Insurance Resilience Solutions
                    </span>
                  </Link>
                </div>
                <div>
                  <Link href="/" className="text-lg font-semibold text-primary">Home</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                    <Link href="/insights" className="hover:text-primary transition-colors">Insights</Link>
                  </div>
                </div>
                <div>
                  <Link href="/industries" className="text-lg font-semibold text-primary">Industries</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/industries/technology-digital" className="hover:text-primary transition-colors">Technology & Digital</Link>
                    <Link href="/industries/manufacturing-industrial" className="hover:text-primary transition-colors">Manufacturing & Industrial</Link>
                    <Link href="/industries/energy-utilities" className="hover:text-primary transition-colors">Energy & Utilities</Link>
                    <Link href="/industries/financial-services" className="hover:text-primary transition-colors">Financial Services</Link>
                    <Link href="/industries/infrastructure-real-estate" className="hover:text-primary transition-colors">Infrastructure & Real Estate</Link>
                    <Link href="/industries/transportation-logistics" className="hover:text-primary transition-colors">Transportation & Logistics</Link>
                    <Link href="/industries/agriculture-environment" className="hover:text-primary transition-colors">Agriculture & Environment</Link>
                    <Link href="/industries/healthcare-life-sciences" className="hover:text-primary transition-colors">Healthcare & Life Sciences</Link>
                    <Link href="/industries/retail-hospitality" className="hover:text-primary transition-colors">Retail & Hospitality</Link>
                    <Link href="/industries/government-public-sector" className="hover:text-primary transition-colors">Government & Public Sector</Link>
                    <Link href="/industries/education-nonprofit" className="hover:text-primary transition-colors">Education & Non-Profit</Link>
                    <Link href="/industries/emerging-industries" className="hover:text-primary transition-colors">Emerging Industries</Link>
                  </div>
                </div>
                <div>
                  <Link href="/risks" className="text-lg font-semibold text-primary">Risks</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/risks/cross-industry" className="hover:text-primary transition-colors">Cross-Industry Risks</Link>
                    <Link href="/risks/cross-functional" className="hover:text-primary transition-colors">Cross-Functional Risks</Link>
                    <Link href="/risks/industry-specific" className="hover:text-primary transition-colors">Industry-Specific Risks</Link>
                    <Link href="/risks/emerging" className="hover:text-primary transition-colors">Emerging Risks</Link>
                    <Link href="/risks/risk-intelligence-center" className="hover:text-primary transition-colors">Risk Intelligence Center</Link>
                  </div>
                </div>
                <div>
                  <Link href="/offerings" className="text-lg font-semibold text-primary">Offerings</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    {Object.entries(CATEGORY_GROUPS).map(([key, cat]) => (
                      <Link key={key} href={`/offerings/category/${key}`} className="hover:text-primary transition-colors">{cat.label}</Link>
                    ))}
                  </div>
                </div>
                <div>
                  <Link href="/solutions" className="text-lg font-semibold text-primary">Solutions</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/solutions/global-program-architecture" className="hover:text-primary transition-colors">Global Program Architecture</Link>
                    <Link href="/solutions/captive-insurance" className="hover:text-primary transition-colors">Captive Insurance & ART</Link>
                    <Link href="/solutions/risk-engineering" className="hover:text-primary transition-colors">Risk Engineering & Loss Prevention</Link>
                    <Link href="/solutions/long-tenor-infrastructure" className="hover:text-primary transition-colors">Long-Tenor Infrastructure</Link>
                    <Link href="/solutions/tcor-analytics" className="hover:text-primary transition-colors">TCOR Analytics & Benchmarking</Link>
                    <Link href="/solutions/claims-advocacy" className="hover:text-primary transition-colors">Claims Advocacy</Link>
                    <Link href="/solutions/property-asset-protection" className="hover:text-primary transition-colors">Property & Asset Protection</Link>
                    <Link href="/solutions/alternative-risk-transfer" className="hover:text-primary transition-colors">Alternative Risk Transfer</Link>
                    <Link href="/solutions/emerging-risk-solutions" className="hover:text-primary transition-colors">Emerging Risk Solutions</Link>
                    <Link href="/solutions/liability-governance" className="hover:text-primary transition-colors">Liability & Governance Shield</Link>
                  </div>
                </div>
                <div>
                  <Link href="/outcomes" className="text-lg font-semibold text-primary">Outcomes</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/outcomes/unicorn-ipo" className="hover:text-primary transition-colors">Unicorn IPO — D&O</Link>
                    <Link href="/outcomes/pe-fund-exit" className="hover:text-primary transition-colors">PE Fund Exit — W&I</Link>
                    <Link href="/outcomes/it-ransomware" className="hover:text-primary transition-colors">IT Ransomware Attack</Link>
                    <Link href="/outcomes/factory-fire" className="hover:text-primary transition-colors">Factory Fire — BI + Rebuild</Link>
                    <Link href="/outcomes/solar-park" className="hover:text-primary transition-colors">500 MW Solar Park</Link>
                    <Link href="/outcomes/nhai-highway" className="hover:text-primary transition-colors">NHAI Highway Concession</Link>
                    <Link href="/outcomes/supplier-flood" className="hover:text-primary transition-colors">Supplier Flood — CBI</Link>
                    <Link href="/outcomes/sebi-adviser" className="hover:text-primary transition-colors">SEBI Adviser PI</Link>
                  </div>
                </div>
                <div>
                  <Link href="/platform" className="text-lg font-semibold text-primary">Platform</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/platform/risk-diagnostic-engine" className="hover:text-primary transition-colors">Risk Diagnostic Engine</Link>
                    <Link href="/platform/risk-dna-mapper" className="hover:text-primary transition-colors">Risk DNA Mapper</Link>
                    <Link href="/platform/cyber-intelligence" className="hover:text-primary transition-colors">Cyber Threat Intelligence</Link>
                    <Link href="/platform/contract-intelligence" className="hover:text-primary transition-colors">Contract Intelligence</Link>
                    <Link href="/platform/ma-due-diligence" className="hover:text-primary transition-colors">M&A Due Diligence Suite</Link>
                    <Link href="/platform/supply-chain-monitor" className="hover:text-primary transition-colors">Supply Chain Risk Monitor</Link>
                    <Link href="/platform/political-monitor" className="hover:text-primary transition-colors">Political Risk Monitor</Link>
                    <Link href="/platform/regulatory-intelligence" className="hover:text-primary transition-colors">Regulatory Intelligence</Link>
                    <Link href="/platform/climate-scenario" className="hover:text-primary transition-colors">Climate Scenario Analysis</Link>
                    <Link href="/platform/risk-intelligence-aggregator" className="hover:text-primary transition-colors">Risk Intelligence Aggregator</Link>
                    <Link href="/platform/counterparty-assessment" className="hover:text-primary transition-colors">Counterparty Assessment</Link>
                  </div>
                </div>
                <div>
                  <Link href="/about-us" className="text-lg font-semibold text-primary">Company</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="/about-us#about" className="hover:text-primary transition-colors">Our Story & Mission</Link>
                    <Link href="/about-us#why-risk" className="hover:text-primary transition-colors">Why Risk Intelligence</Link>
                    <Link href="/about-us#by-the-numbers" className="hover:text-primary transition-colors">By The Numbers</Link>
                    <Link href="/about-us#leadership" className="hover:text-primary transition-colors">Leadership & Teams</Link>
                    <Link href="/ecosystem" className="hover:text-primary transition-colors">Ecosystem</Link>
                    <Link href="/about-us#offices" className="hover:text-primary transition-colors">Our Offices</Link>
                    <Link href="/insights" className="hover:text-primary transition-colors">Insights & Research</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                  <Link href="/contact">
                    <Button className="w-full justify-start">
                      <div className="text-left leading-tight">
                        <div className="text-[10px] opacity-90">Contact Us</div>
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
