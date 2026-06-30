

import * as React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuTriggerNoChevron,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Menu,
  ChevronRight,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Globe2,
  Briefcase,
  TrendingUp,
  Target,
  Zap,
  Database,
  Wrench,
  Monitor,
  Building2,
  Landmark,
  HeartPulse,
  ShoppingBag,
  Tv,
  Car,
  CreditCard,
  FlaskConical,
  ShieldAlert,
  ShieldCheck,
  Fuel,
  Plane,
  GraduationCap,
  Wheat,
  Truck,
  AlertTriangle,
  FileText,
  Gem,
  Anchor,
  Train,
  Home,
  Sparkles,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  CATEGORY_GROUPS,
  getOfferingsByCategory,
} from "@/data/offeringsData";

function useScrolled(threshold = 16) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

const SECTION =
  "text-sm font-extrabold text-slate-800 uppercase tracking-wide";
const LINK =
  "group flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-slate-600 hover:text-blue-600 hover:bg-slate-50";

// Keyword → icon matcher, shared by category headings and individual links,
// so every label gets a relevant icon without hand-mapping 250+ entries.
const ICON_RULES: { match: RegExp; icon: React.ComponentType<{ className?: string }> }[] = [
  { match: /auto|vehicle|\bcar\b/i, icon: Car },
  { match: /bank|landmark/i, icon: Landmark },
  { match: /financial|insurance|credit|trade credit|surety/i, icon: CreditCard },
  { match: /health|medical|hospital|life science/i, icon: HeartPulse },
  { match: /pharma|bio|drug|chem/i, icon: FlaskConical },
  { match: /cyber|ransomware|breach|fraud|hack/i, icon: ShieldAlert },
  { match: /defence|government|public sector|compliance|governance/i, icon: ShieldCheck },
  { match: /oil|gas|fuel/i, icon: Fuel },
  { match: /energy|power|renewable|solar|utilit/i, icon: Zap },
  { match: /tourism|hospitality|aviation|\bairline/i, icon: Plane },
  { match: /education|training|allied/i, icon: GraduationCap },
  { match: /agriculture|food|textile|wheat/i, icon: Wheat },
  { match: /port|rail|highway/i, icon: Anchor },
  { match: /transport|logistics|cargo|marine|supply chain/i, icon: Truck },
  { match: /infrastructure|construction|real estate|cement|steel|engineering/i, icon: Building2 },
  { match: /tech|digital|software|it &|semiconductor|electronics|telecom|science/i, icon: Monitor },
  { match: /risk|liability|litigation|exposure|catastrophe/i, icon: AlertTriangle },
  { match: /platform|engine|intelligence|analytics|diagnostic|mapper|monitor/i, icon: Database },
  { match: /climate|esg|sustainab|emerging/i, icon: Globe2 },
  { match: /contract|legal|director|advisory|consult/i, icon: FileText },
  { match: /retail|fmcg|consumer|durable/i, icon: ShoppingBag },
  { match: /media|entertainment/i, icon: Tv },
  { match: /gems|jewellery/i, icon: Gem },
  { match: /manufactur|msme|industrial/i, icon: Wrench },
];

function getThemeIcon(text: string) {
  for (const rule of ICON_RULES) {
    if (rule.match.test(text)) return rule.icon;
  }
  return Briefcase;
}

function VerticalMegaMenu({
  menuName,
  description,
  items,
  ctaText = "Need help choosing the right solutions?",
  ctaLink = "/contact",
  ctaButtonText = "Contact Us",
}: {
  menuName: string;
  description: string;
  items: { title: string; links: { href: string; label: string; bold?: boolean }[] }[];
  ctaText?: string;
  ctaLink?: string;
  ctaButtonText?: string;
}) {
  const [activeTab, setActiveTab] = React.useState(0);

  // If the items array changes, reset activeTab
  React.useEffect(() => {
    setActiveTab(0);
  }, [items]);

  const activeGroup = items[activeTab] || items[0];

  return (
    <div className="w-[1000px] h-[520px] flex bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
      {/* Left Panel */}
      <div className="w-1/3 bg-[#f8fafc]/90 backdrop-blur-md border-r border-slate-100 p-6 flex flex-col justify-between shrink-0">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{menuName}</h3>
          <p className="text-xs text-slate-500 mt-1.5 mb-6 leading-relaxed">
            {description}
          </p>
          <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 relative">
            {items.map((item, idx) => (
              <button
                key={item.title}
                onMouseEnter={() => setActiveTab(idx)}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "relative w-full text-left flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-200 group text-sm font-medium",
                  activeTab === idx
                    ? "text-blue-600 font-semibold"
                    : "text-slate-600 hover:text-blue-600"
                )}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId={`activeTabPill-${menuName}`}
                    className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-100/90 z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.title}</span>
                <span className="relative z-10 shrink-0">
                  {activeTab !== idx && (
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all duration-200" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col p-6 h-full justify-between bg-white overflow-hidden">
        {/* Links Grid */}
        <div className="flex-1 overflow-y-auto pr-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="grid grid-cols-2 gap-x-6 gap-y-3"
            >
              {activeGroup?.links.map((link) => (
                <Link
                  key={link.href + link.label}
                  to={link.href}
                  className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50/80 transition-all border border-transparent hover:border-slate-100"
                >
                  <span className={cn(
                    "text-[15px] font-medium text-slate-700 group-hover:text-blue-600 transition-colors leading-snug pr-2",
                    link.bold && "text-blue-600 font-bold"
                  )}>
                    {link.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact Banner */}
        <div className="mt-4 p-4 bg-slate-50/80 border border-slate-100 rounded-xl flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 font-semibold">
            {ctaText}
          </span>
          <Link to={ctaLink}>
            <button className="bg-[#3b82f6] hover:bg-blue-600 hover:brightness-110 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all">
              {ctaButtonText}
            </button>
          </Link>
        </div>
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
  const navigate = useNavigate();

  return (
    <NavigationMenuItem>
      <NavigationMenuTriggerNoChevron
        className={cn(
          navigationMenuTriggerStyle(),
          "text-lg font-bold"
        )}
        onClick={() => navigate("/offerings")}
      >
        <Sparkles className="h-4.5 w-4.5 mr-2 text-slate-400 group-hover/navigation-menu-trigger:text-blue-600 group-data-popup-open/navigation-menu-trigger:text-blue-600 group-data-open/navigation-menu-trigger:text-blue-600 transition-colors shrink-0" />
        Offerings
      </NavigationMenuTriggerNoChevron>
      <NavigationMenuContent>
        <VerticalMegaMenu
          menuName="Offerings"
          description="Browse our comprehensive suite of insurance and risk transfer programs."
          items={OFFERINGS}
          ctaText="Want to explore all of our solutions and coverages?"
          ctaLink="/offerings"
          ctaButtonText="View All Offerings"
        />
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
  { title: "ABOUT TRUSTFLOW", links: [
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
  const scrolled = useScrolled();
  const navigate = useNavigate();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-slate-200/80 shadow-sm py-2 px-4 md:px-6"
          : "border-slate-100 bg-white/10 backdrop-blur-[2px] px-3 pt-3 pb-3 md:px-6 md:pt-4 md:pb-4"
      )}
    >
      <div className="relative mx-auto max-w-[1400px]">
        {/* Ambient gradient glow — animates continuously, intensifies on scroll */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
          <motion.div
            className="absolute -top-10 left-8 h-28 w-28 rounded-full bg-blue-400/30 blur-3xl md:h-40 md:w-40"
            animate={{ x: [0, 30, 0], y: [0, 12, 0], opacity: scrolled ? [0.5, 0.8, 0.5] : [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -top-8 right-12 h-28 w-28 rounded-full bg-violet-400/30 blur-3xl md:h-40 md:w-40"
            animate={{ x: [0, -24, 0], y: [0, 16, 0], opacity: scrolled ? [0.5, 0.8, 0.5] : [0.3, 0.5, 0.3] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div
          className={cn(
            "relative flex items-center justify-between gap-3 rounded-full border bg-white/75 backdrop-blur-xl transition-all duration-300 px-4 md:px-6",
            scrolled
              ? "h-14 border-white/60 bg-white/90 shadow-xl shadow-slate-900/10"
              : "h-20 border-white/50 shadow-lg shadow-slate-900/5"
          )}
        >
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-sm shrink-0">
              <Shield className="h-4.5 w-4.5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight text-primary">
                TRUSTFLOW
              </span>
              {!scrolled && (
                <span className="text-xs font-normal text-muted-foreground">
                  Risk Advisory Insurance & Resilience Solutions
                </span>
              )}
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <NavigationMenu align="center">
            <NavigationMenuList className="gap-3">
              <NavigationMenuItem>
                <NavigationMenuTriggerNoChevron
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg font-bold"
                  )}
                  onClick={() => navigate("/")}
                >
                  <Home className="h-4.5 w-4.5 mr-2 text-slate-400 group-hover/navigation-menu-trigger:text-blue-600 group-data-popup-open/navigation-menu-trigger:text-blue-600 group-data-open/navigation-menu-trigger:text-blue-600 transition-colors shrink-0" />
                  Home
                </NavigationMenuTriggerNoChevron>
                <NavigationMenuContent>
                  <VerticalMegaMenu
                    menuName="Home"
                    description="Explore our main sections, outcomes, solutions, platforms, and company offerings."
                    items={HOME}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTriggerNoChevron
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg font-bold"
                  )}
                  onClick={() => navigate("/industries")}
                >
                  <Building2 className="h-4.5 w-4.5 mr-2 text-slate-400 group-hover/navigation-menu-trigger:text-blue-600 group-data-popup-open/navigation-menu-trigger:text-blue-600 group-data-open/navigation-menu-trigger:text-blue-600 transition-colors shrink-0" />
                  Industries
                </NavigationMenuTriggerNoChevron>
                <NavigationMenuContent>
                  <VerticalMegaMenu
                    menuName="Industries"
                    description="Explore our sector-specific risk advisory, insurance, and resilience solutions."
                    items={INDUSTRIES}
                    ctaText="Want to explore all of our industry solutions?"
                    ctaLink="/industries"
                    ctaButtonText="View All Industries"
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTriggerNoChevron
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg font-bold"
                  )}
                  onClick={() => navigate("/risks")}
                >
                  <ShieldAlert className="h-4.5 w-4.5 mr-2 text-slate-400 group-hover/navigation-menu-trigger:text-blue-600 group-data-popup-open/navigation-menu-trigger:text-blue-600 group-data-open/navigation-menu-trigger:text-blue-600 transition-colors shrink-0" />
                  Risks
                </NavigationMenuTriggerNoChevron>
                <NavigationMenuContent>
                  <VerticalMegaMenu
                    menuName="Risks"
                    description="Analyze and mitigate specialized risks across sectors, functions, and operations."
                    items={RISKS}
                    ctaText="Want to view all identified risk categories?"
                    ctaLink="/risks"
                    ctaButtonText="View All Risks"
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <OfferingsMega />

              <NavigationMenuItem>
                <NavigationMenuTriggerNoChevron
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg font-bold"
                  )}
                  onClick={() => navigate("/solutions")}
                >
                  <Cpu className="h-4.5 w-4.5 mr-2 text-slate-400 group-hover/navigation-menu-trigger:text-blue-600 group-data-popup-open/navigation-menu-trigger:text-blue-600 group-data-open/navigation-menu-trigger:text-blue-600 transition-colors shrink-0" />
                  Solutions
                </NavigationMenuTriggerNoChevron>
                <NavigationMenuContent>
                  <VerticalMegaMenu
                    menuName="Solutions"
                    description="Discover tailored architectures, engineering, and liability solutions."
                    items={SOLUTIONS}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTriggerNoChevron
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg font-bold"
                  )}
                  onClick={() => navigate("/outcomes")}
                >
                  <TrendingUp className="h-4.5 w-4.5 mr-2 text-slate-400 group-hover/navigation-menu-trigger:text-blue-600 group-data-popup-open/navigation-menu-trigger:text-blue-600 group-data-open/navigation-menu-trigger:text-blue-600 transition-colors shrink-0" />
                  Outcomes
                </NavigationMenuTriggerNoChevron>
                <NavigationMenuContent>
                  <VerticalMegaMenu
                    menuName="Outcomes"
                    description="Read case studies of how we mitigated disasters and facilitated growth."
                    items={OUTCOMES}
                    ctaText="Want to see all of our outcomes and case studies?"
                    ctaLink="/outcomes"
                    ctaButtonText="View All Outcomes"
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTriggerNoChevron
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg font-bold"
                  )}
                  onClick={() => navigate("/platform")}
                >
                  <Database className="h-4.5 w-4.5 mr-2 text-slate-400 group-hover/navigation-menu-trigger:text-blue-600 group-data-popup-open/navigation-menu-trigger:text-blue-600 group-data-open/navigation-menu-trigger:text-blue-600 transition-colors shrink-0" />
                  Platform
                </NavigationMenuTriggerNoChevron>
                <NavigationMenuContent>
                  <VerticalMegaMenu
                    menuName="Platform"
                    description="Leverage our AI-powered risk intelligence, diagnostic, and mapping tools."
                    items={PLATFORMS}
                    ctaText="Want to explore all of our platform tools?"
                    ctaLink="/platform"
                    ctaButtonText="View All Platforms"
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTriggerNoChevron
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg font-bold"
                  )}
                  onClick={() => navigate("/about-us")}
                >
                  <Briefcase className="h-4.5 w-4.5 mr-2 text-slate-400 group-hover/navigation-menu-trigger:text-blue-600 group-data-popup-open/navigation-menu-trigger:text-blue-600 group-data-open/navigation-menu-trigger:text-blue-600 transition-colors shrink-0" />
                  Company
                </NavigationMenuTriggerNoChevron>
                <NavigationMenuContent>
                  <VerticalMegaMenu
                    menuName="Company"
                    description="Learn about our story, mission, team, and global risk management network."
                    items={COMPANY}
                    ctaText="Get in touch with one of our offices directly."
                    ctaLink="/contact"
                    ctaButtonText="Contact Us"
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <Link to="/contact">
            <Button className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:brightness-110 transition-all gap-2 px-5">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="rounded-full" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="flex flex-col gap-6 pt-10 pb-8">
                <div>
                  <Link to="/" className="flex items-center gap-2.5 mb-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shrink-0">
                      <Shield className="h-4.5 w-4.5" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-xl font-bold tracking-tight text-primary">
                        TRUSTFLOW
                      </span>
                      <span className="text-xs font-normal text-muted-foreground">
                        Risk Advisory Insurance & Resilience Solutions
                      </span>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link to="/" className="text-lg font-semibold text-primary">Home</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-base text-muted-foreground">
                    <Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                    <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                    <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
                  </div>
                </div>
                <div>
                  <Link to="/industries" className="text-lg font-semibold text-primary">Industries</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-base text-muted-foreground">
                    <Link to="/industries/technology-digital" className="hover:text-primary transition-colors">Technology & Digital</Link>
                    <Link to="/industries/manufacturing-industrial" className="hover:text-primary transition-colors">Manufacturing & Industrial</Link>
                    <Link to="/industries/energy-utilities" className="hover:text-primary transition-colors">Energy & Utilities</Link>
                    <Link to="/industries/financial-services" className="hover:text-primary transition-colors">Financial Services</Link>
                    <Link to="/industries/infrastructure-real-estate" className="hover:text-primary transition-colors">Infrastructure & Real Estate</Link>
                    <Link to="/industries/transportation-logistics" className="hover:text-primary transition-colors">Transportation & Logistics</Link>
                    <Link to="/industries/agriculture-environment" className="hover:text-primary transition-colors">Agriculture & Environment</Link>
                    <Link to="/industries/healthcare-life-sciences" className="hover:text-primary transition-colors">Healthcare & Life Sciences</Link>
                    <Link to="/industries/retail-hospitality" className="hover:text-primary transition-colors">Retail & Hospitality</Link>
                    <Link to="/industries/government-public-sector" className="hover:text-primary transition-colors">Government & Public Sector</Link>
                    <Link to="/industries/education-nonprofit" className="hover:text-primary transition-colors">Education & Non-Profit</Link>
                    <Link to="/industries/emerging-industries" className="hover:text-primary transition-colors">Emerging Industries</Link>
                  </div>
                </div>
                <div>
                  <Link to="/risks" className="text-lg font-semibold text-primary">Risks</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-base text-muted-foreground">
                    <Link to="/risks/cross-industry" className="hover:text-primary transition-colors">Cross-Industry Risks</Link>
                    <Link to="/risks/cross-functional" className="hover:text-primary transition-colors">Cross-Functional Risks</Link>
                    <Link to="/risks/industry-specific" className="hover:text-primary transition-colors">Industry-Specific Risks</Link>
                    <Link to="/risks/emerging" className="hover:text-primary transition-colors">Emerging Risks</Link>
                    <Link to="/risks/risk-intelligence-center" className="hover:text-primary transition-colors">Risk Intelligence Center</Link>
                  </div>
                </div>
                <div>
                  <Link to="/offerings" className="text-lg font-semibold text-primary">Offerings</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-base text-muted-foreground">
                    {(Object.entries(CATEGORY_GROUPS) as [string, any][]).map(([key, cat]) => (
                      <Link key={key} to={`/offerings/category/${key}`} className="hover:text-primary transition-colors">{cat.label}</Link>
                    ))}
                  </div>
                </div>
                <div>
                  <Link to="/solutions" className="text-lg font-semibold text-primary">Solutions</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-base text-muted-foreground">
                    <Link to="/solutions/global-program-architecture" className="hover:text-primary transition-colors">Global Program Architecture</Link>
                    <Link to="/solutions/captive-insurance" className="hover:text-primary transition-colors">Captive Insurance & ART</Link>
                    <Link to="/solutions/risk-engineering" className="hover:text-primary transition-colors">Risk Engineering & Loss Prevention</Link>
                    <Link to="/solutions/long-tenor-infrastructure" className="hover:text-primary transition-colors">Long-Tenor Infrastructure</Link>
                    <Link to="/solutions/tcor-analytics" className="hover:text-primary transition-colors">TCOR Analytics & Benchmarking</Link>
                    <Link to="/solutions/claims-advocacy" className="hover:text-primary transition-colors">Claims Advocacy</Link>
                    <Link to="/solutions/property-asset-protection" className="hover:text-primary transition-colors">Property & Asset Protection</Link>
                    <Link to="/solutions/alternative-risk-transfer" className="hover:text-primary transition-colors">Alternative Risk Transfer</Link>
                    <Link to="/solutions/emerging-risk-solutions" className="hover:text-primary transition-colors">Emerging Risk Solutions</Link>
                    <Link to="/solutions/liability-governance" className="hover:text-primary transition-colors">Liability & Governance Shield</Link>
                  </div>
                </div>
                <div>
                  <Link to="/outcomes" className="text-lg font-semibold text-primary">Outcomes</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-base text-muted-foreground">
                    <Link to="/outcomes/unicorn-ipo" className="hover:text-primary transition-colors">Unicorn IPO — D&O</Link>
                    <Link to="/outcomes/pe-fund-exit" className="hover:text-primary transition-colors">PE Fund Exit — W&I</Link>
                    <Link to="/outcomes/it-ransomware" className="hover:text-primary transition-colors">IT Ransomware Attack</Link>
                    <Link to="/outcomes/factory-fire" className="hover:text-primary transition-colors">Factory Fire — BI + Rebuild</Link>
                    <Link to="/outcomes/solar-park" className="hover:text-primary transition-colors">500 MW Solar Park</Link>
                    <Link to="/outcomes/nhai-highway" className="hover:text-primary transition-colors">NHAI Highway Concession</Link>
                    <Link to="/outcomes/supplier-flood" className="hover:text-primary transition-colors">Supplier Flood — CBI</Link>
                    <Link to="/outcomes/sebi-adviser" className="hover:text-primary transition-colors">SEBI Adviser PI</Link>
                  </div>
                </div>
                <div>
                  <Link to="/platform" className="text-lg font-semibold text-primary">Platform</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-base text-muted-foreground">
                    <Link to="/platform/risk-diagnostic-engine" className="hover:text-primary transition-colors">Risk Diagnostic Engine</Link>
                    <Link to="/platform/risk-dna-mapper" className="hover:text-primary transition-colors">Risk DNA Mapper</Link>
                    <Link to="/platform/cyber-intelligence" className="hover:text-primary transition-colors">Cyber Threat Intelligence</Link>
                    <Link to="/platform/contract-intelligence" className="hover:text-primary transition-colors">Contract Intelligence</Link>
                    <Link to="/platform/ma-due-diligence" className="hover:text-primary transition-colors">M&A Due Diligence Suite</Link>
                    <Link to="/platform/supply-chain-monitor" className="hover:text-primary transition-colors">Supply Chain Risk Monitor</Link>
                    <Link to="/platform/political-monitor" className="hover:text-primary transition-colors">Political Risk Monitor</Link>
                    <Link to="/platform/regulatory-intelligence" className="hover:text-primary transition-colors">Regulatory Intelligence</Link>
                    <Link to="/platform/climate-scenario" className="hover:text-primary transition-colors">Climate Scenario Analysis</Link>
                    <Link to="/platform/risk-intelligence-aggregator" className="hover:text-primary transition-colors">Risk Intelligence Aggregator</Link>
                    <Link to="/platform/counterparty-assessment" className="hover:text-primary transition-colors">Counterparty Assessment</Link>
                  </div>
                </div>
                <div>
                  <Link to="/about-us" className="text-lg font-semibold text-primary">Company</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-base text-muted-foreground">
                    <Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                    <Link to="/about-us#about" className="hover:text-primary transition-colors">Our Story & Mission</Link>
                    <Link to="/about-us#why-risk" className="hover:text-primary transition-colors">Why Risk Intelligence</Link>
                    <Link to="/about-us#by-the-numbers" className="hover:text-primary transition-colors">By The Numbers</Link>
                    <Link to="/about-us#leadership" className="hover:text-primary transition-colors">Leadership & Teams</Link>
                    <Link to="/ecosystem" className="hover:text-primary transition-colors">Ecosystem</Link>
                    <Link to="/about-us#offices" className="hover:text-primary transition-colors">Our Offices</Link>
                    <Link to="/insights" className="hover:text-primary transition-colors">Insights & Research</Link>
                    <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                  <Link to="/contact">
                    <Button className="w-full justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white gap-2">
                      Contact Us
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  );
}
