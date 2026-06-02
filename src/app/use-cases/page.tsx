"use client";

import React, { useState, useEffect } from "react";
import { TwoPanelLayout, SidebarGroup } from "@/components/layout/TwoPanelLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, ShieldAlert, BadgeDollarSign, Building2, 
  ArrowRight, Shield, Target, LayoutGrid, CheckCircle2, ChevronRight, Activity, Globe, MapPin, Info
} from "lucide-react";
import { useCasesData } from "@/data/siteContent";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SECTIONS_CONFIG = {
  property: {
    label: "Property & Operational",
    color: "#2E6DA4",
    borderClass: "border-l-[3px] border-l-[#2E6DA4]",
    icon: Zap
  },
  liability: {
    label: "Liability & Governance",
    color: "#C84B20",
    borderClass: "border-l-[3px] border-l-[#C84B20]",
    icon: ShieldAlert
  },
  financial: {
    label: "Financial & M&A Lines",
    color: "#6A1B9A",
    borderClass: "border-l-[3px] border-l-[#6A1B9A]",
    icon: BadgeDollarSign
  },
  industry: {
    label: "Industry & Sector Specific",
    color: "#B8860B",
    borderClass: "border-l-[3px] border-l-[#B8860B]",
    icon: Building2
  }
};

const groups: SidebarGroup[] = [
  {
    label: "BY CATEGORY",
    items: [
      { id: "property", label: "Property & Operational", icon: Zap },
      { id: "liability", label: "Liability & Governance", icon: ShieldAlert },
      { id: "financial", label: "Financial & M&A", icon: BadgeDollarSign },
      { id: "industry", label: "Industry Specific", icon: Building2 }
    ]
  }
];

const useCases = {
  property: [
    { title: "Factory fire — BI + rebuild recovery", desc: "SFSP + BI · 36-month indemnity · Temp relocation", slug: "factory-fire" },
    { title: "Supplier flood — contingent BI activation", desc: "Unnamed CBI · Supply chain BI · Fast payout", slug: "supplier-flood" },
    { title: "PLI scheme factory construction", desc: "CAR / EAR + DSU · Cross-liability · Monsoon cover" },
    { title: "Pharma cold chain export — US buyer", desc: "ICC A + Reefer + War · Open cover · LC compliance" },
    { title: "Odisha cyclone — parametric payout", desc: "Wind trigger · 48-hr payout · Overlay on SFSP" },
    { title: "Steel plant machinery breakdown", desc: "EBI · Expediting expenses · BI from breakdown" }
  ],
  liability: [
    { title: "Unicorn IPO — D&O Side A/B/C", desc: "Pre-IPO allocation · Securities defense · EPL", slug: "unicorn-ipo" },
    { title: "IT company ransomware attack", desc: "Forensics · Ransom · DPDP notification · BI", slug: "it-ransomware" },
    { title: "SEBI investigation — D&O defense", desc: "Regulatory investigation costs · Side A · DIC" },
    { title: "IT firm — US client E&O claim", desc: "Tech E&O · Claims-made · Retro date managed" },
    { title: "Auto component OEM recall", desc: "Recall logistics · OEM indemnification · PR" },
    { title: "POSH Act — EPL defense", desc: "Internal committee · Defense costs · Settlement" }
  ],
  financial: [
    { title: "PE fund exit — W&I insurance", desc: "R&W policy · Escrow eliminated · Tax cover", slug: "pe-fund-exit" },
    { title: "SME exporter — African buyer default", desc: "ECGC + private credit · Protracted default" },
    { title: "MSME NHAI contract — surety bonds", desc: "Bid + performance bond · Working capital freed" },
    { title: "Indian pharma — Nigeria inconvertibility", desc: "Currency inconvertibility · Contract frustration" },
    { title: "India M&A — tax liability insurance", desc: "Transfer pricing · Retrospective tax risk locked" },
    { title: "Fintech — employee BEC fraud", desc: "BBB · Funds transfer fraud · Social engineering" }
  ],
  industry: [
    { title: "500 MW Rajasthan solar park", desc: "CAR + EAR + Production guarantee + Parametric", slug: "solar-park" },
    { title: "NHAI 15-year highway concession", desc: "Long-tenor property + BI + Surety + Parametric", slug: "nhai-highway" },
    { title: "Agri-startup — PMFBY + parametric", desc: "Crop index + Drought trigger + Cold chain" },
    { title: "SEBI-registered adviser — PI + D&O", desc: "Mandatory PI · Suitability claim · SEBI defense", slug: "sebi-adviser" },
    { title: "BFSI AI credit scoring — bias claim", desc: "AI E&O · Regulatory defense · Class action" },
    { title: "NewSpace startup — mission insurance", desc: "Launch + In-orbit + 3P liability + Revenue BI" }
  ]
};

export default function UseCases() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof SECTIONS_CONFIG>("property");
  const [selectedCaseSlug, setSelectedCaseSlug] = useState<string | null>("factory-fire");

  const currentCaseData = selectedCaseSlug ? useCasesData[selectedCaseSlug] : null;
  const activeConfig = SECTIONS_CONFIG[activeCategory];
  const activeList = useCases[activeCategory];

  return (
    <TwoPanelLayout
      groups={groups}
      activeId={activeCategory}
      onItemSelect={(id) => {
        setActiveCategory(id as keyof typeof SECTIONS_CONFIG);
        // Default select the first sluggable case study in this category
        const firstWithSlug = useCases[id as keyof typeof SECTIONS_CONFIG].find(c => c.slug);
        if (firstWithSlug && firstWithSlug.slug) {
          setSelectedCaseSlug(firstWithSlug.slug);
        } else {
          setSelectedCaseSlug(null);
        }
      }}
      heroTitle="30 Enterprise Client Use Cases"
      heroSubtitle="Real-world scenario simulations demonstrating how our integrated risk transfer architectures protect corporate cash flow and corporate governance globally. Select a tab below."
      heroBadges={["Case Studies"]}
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      heroStats={[
        { val: "30", label: "Use Cases" },
        { val: "8", label: "Detailed Cases" },
        { val: "150+", label: "Countries" },
        { val: "Fortune 500", label: "Clients" }
      ]}
    >
      
      {/* 1. Category Header */}
      <div className="mb-6 pb-3 border-b flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary font-serif">
            {activeConfig.label} Scenarios
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Detailed case studies are marked with "Interactive Case Study" and can be expanded in-place
          </p>
        </div>
        <activeConfig.icon className="h-6 w-6 text-slate-400 shrink-0" style={{ color: activeConfig.color }} />
      </div>

      {/* 2. SUMMARY CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeList.map((item, i) => {
          const isSelected = item.slug && selectedCaseSlug === item.slug;
          return (
            <div
              key={i}
              onClick={() => {
                if (item.slug) {
                  setSelectedCaseSlug(item.slug);
                }
              }}
              className={cn(
                "p-4 bg-white rounded-lg border border-slate-200 transition-all select-none flex flex-col justify-between min-h-[140px]",
                activeConfig.borderClass,
                item.slug ? "cursor-pointer hover:shadow-md" : "opacity-85 shadow-none",
                isSelected ? "ring-2 ring-blue-600 ring-offset-1 shadow-md scale-[1.01]" : item.slug ? "hover:-translate-y-[2px]" : ""
              )}
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-primary leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-2.5 border-t border-slate-100">
                <span className="text-[10px] font-semibold text-blue-600">
                  {item.slug ? (isSelected ? "Expanded Detail" : "Read Case Study →") : "Illustrative Scenario"}
                </span>
                {item.slug && (
                  <span className="text-[9px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 tracking-wide uppercase shrink-0">
                    Interactive
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. DYNAMIC EXPANDED DETAIL CARD */}
      {selectedCaseSlug && currentCaseData && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header Banner */}
          <div className="p-6 text-white bg-primary relative border-b border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
            <div className="relative z-10 space-y-2 max-w-4xl">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-600/50 px-2 py-0.5 rounded border border-blue-500/20">
                CASE STUDY PROFILE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif leading-tight">
                {currentCaseData.title}
              </h2>
              <p className="text-sm text-gray-300">
                {currentCaseData.subtitle}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            
            {/* Overview Narrative */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b">
                <LayoutGrid className="h-5 w-5 text-blue-600" />
                <h3 className="text-base font-bold text-primary font-serif">Case Narrative & Risk Engineering</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                {currentCaseData.description}
              </p>
            </div>

            {/* Program Features & Structured Coverage Stack */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <h3 className="text-base font-bold text-primary font-serif">Critical Program Components Activated</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentCaseData.features.map((feature, i) => (
                  <div key={i} className="bg-slate-50/50 p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Call-to-action bottom panel */}
          <div className="p-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-primary font-serif">Experiencing similar risk exposures?</h4>
              <p className="text-xs text-muted-foreground">Book a free 30-minute diagnostic session with our senior risk underwriters.</p>
            </div>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm w-full h-12 px-6 flex items-center justify-center gap-2">
                Request Case Consultation <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>
      )}

    </TwoPanelLayout>
  );
}
