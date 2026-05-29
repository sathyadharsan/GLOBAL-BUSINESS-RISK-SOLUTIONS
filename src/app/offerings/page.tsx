"use client";

import React, { useState, useEffect } from "react";
import { TwoPanelLayout, SidebarGroup } from "@/components/layout/TwoPanelLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, Shield, Activity, Anchor, Briefcase, Globe, 
  ChevronUp, ChevronDown, Zap, Scale, TrendingUp, Leaf, 
  Cpu, Rocket, AlertCircle, Target, Lightbulb, MapPin, Grid, Info, CheckCircle2, ShieldAlert, BadgeDollarSign, Truck, Search
} from "lucide-react";
import { offeringsData, OfferingData } from "@/data/offeringsData";
import { cn } from "@/lib/utils";

// Category specs with color coding and icons
const SECTIONS_CONFIG = {
  property: {
    label: "Property & Asset Protection",
    color: "#2E6DA4", // Blue
    bgClass: "bg-blue-50 border-blue-200 text-blue-700",
    borderClass: "border-l-[4px] border-l-[#2E6DA4]",
    icon: Building2
  },
  liability: {
    label: "Liability & Governance Shield",
    color: "#C84B20", // Coral
    bgClass: "bg-coral-50 border-coral-200 text-coral-700",
    borderClass: "border-l-[4px] border-l-[#C84B20]",
    icon: Shield
  },
  financial: {
    label: "Financial & Contractual Lines",
    color: "#6A1B9A", // Purple
    bgClass: "bg-purple-50 border-purple-200 text-purple-700",
    borderClass: "border-l-[4px] border-l-[#6A1B9A]",
    icon: TrendingUp
  },
  motor: {
    label: "Motor & Mobility",
    color: "#1A7A8A", // Teal
    bgClass: "bg-teal-50 border-teal-200 text-teal-700",
    borderClass: "border-l-[4px] border-l-[#1A7A8A]",
    icon: Truck
  },
  emerging: {
    label: "Emerging & Specialty Risks",
    color: "#B8860B", // Gold
    bgClass: "bg-gold-50 border-gold-200 text-gold-700",
    borderClass: "border-l-[4px] border-l-[#B8860B]",
    icon: Cpu
  }
};

const groups: SidebarGroup[] = [
  {
    label: "PROPERTY & ASSET",
    items: [
      { id: "property-sfsp", label: "SFSP / Property All Risks", icon: Building2 },
      { id: "business-interruption", label: "Business Interruption", icon: Activity },
      { id: "car-ear", label: "CAR / EAR / Builders Risk", icon: Activity },
      { id: "machinery-breakdown", label: "CPM / Machinery Breakdown", icon: Search },
      { id: "marine-cargo", label: "Marine Cargo / STP", icon: Anchor },
      { id: "marine-hull", label: "Marine Hull & Aviation", icon: Anchor },
      { id: "parametric", label: "Parametric & Index-Based", icon: Zap, badge: "New" }
    ]
  },
  {
    label: "LIABILITY & GOVERNANCE",
    items: [
      { id: "cgl", label: "CGL / Public Liability", icon: Shield },
      { id: "product-liability", label: "Product Liability & Recall", icon: Shield },
      { id: "do-liability", label: "Directors & Officers (D&O)", icon: Briefcase },
      { id: "professional-indemnity", label: "Professional Indemnity", icon: Scale },
      { id: "cyber", label: "Cyber Liability", icon: Shield, badge: "Alert" },
      { id: "epl", label: "Employment Practices (EPL)", icon: ShieldAlert },
      { id: "environmental", label: "Environmental / Pollution", icon: Leaf }
    ]
  },
  {
    label: "FINANCIAL LINES",
    items: [
      { id: "trade-credit", label: "Trade Credit Insurance", icon: TrendingUp },
      { id: "political-risk", label: "Political Risk", icon: Globe },
      { id: "surety", label: "Surety Bonds & Guarantees", icon: BadgeDollarSign },
      { id: "fidelity", label: "Fidelity Guarantee / Crime", icon: Shield, badge: "New" }
    ]
  },
  {
    label: "MOTOR & TRANSPORT",
    items: [
      { id: "fleet", label: "Commercial Motor & Fleet", icon: Truck }
    ]
  },
  {
    label: "EMERGING RISKS",
    items: [
      { id: "ai-liability", label: "AI & Algorithmic Liability", icon: Cpu, badge: "New" },
      { id: "space", label: "Space & Satellite", icon: Rocket, badge: "New" },
      { id: "climate-esg", label: "Climate & ESG", icon: Leaf, badge: "New" }
    ]
  }
];

export default function Offerings() {
  const [selectedSlug, setSelectedSlug] = useState("property-sfsp");
  const [activeCategory, setActiveCategory] = useState<keyof typeof SECTIONS_CONFIG>("property");

  // Determine the category when the selected offering changes
  useEffect(() => {
    const foundGroup = groups.find(g => g.items.some(item => item.id === selectedSlug));
    if (foundGroup) {
      const catKey = Object.keys(SECTIONS_CONFIG).find(
        key => SECTIONS_CONFIG[key as keyof typeof SECTIONS_CONFIG].label.toLowerCase().includes(foundGroup.label.toLowerCase()) ||
               (key === "property" && foundGroup.label.includes("PROPERTY")) ||
               (key === "liability" && foundGroup.label.includes("LIABILITY")) ||
               (key === "financial" && foundGroup.label.includes("FINANCIAL")) ||
               (key === "motor" && foundGroup.label.includes("MOTOR")) ||
               (key === "emerging" && foundGroup.label.includes("EMERGING"))
      ) as keyof typeof SECTIONS_CONFIG;
      if (catKey) {
        setActiveCategory(catKey);
      }
    }
  }, [selectedSlug]);

  const activeGroupItems = groups.find(g => 
    g.label.toLowerCase().includes(activeCategory) || 
    (activeCategory === "property" && g.label.includes("PROPERTY")) ||
    (activeCategory === "liability" && g.label.includes("LIABILITY")) ||
    (activeCategory === "financial" && g.label.includes("FINANCIAL")) ||
    (activeCategory === "motor" && g.label.includes("MOTOR")) ||
    (activeCategory === "emerging" && g.label.includes("EMERGING"))
  )?.items || [];

  const currentOfferingData = offeringsData[selectedSlug];
  const activeConfig = SECTIONS_CONFIG[activeCategory];

  return (
    <TwoPanelLayout
      groups={groups}
      activeId={selectedSlug}
      onItemSelect={(id) => setSelectedSlug(id)}
      heroTitle="Comprehensive Non-Life Insurance Solutions"
      heroSubtitle="22 specialized risk transfer products. Click any item in the navigation or sidebar to view complete structural coverage details in-place."
      heroBadges={["22 Product Lines", "150+ Countries", "A++ Rated Carriers"]}
    >
      
      {/* 1. Category Summary Section Header */}
      <div className="mb-6 pb-3 border-b flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary tracking-tight font-serif">
            {activeConfig.label}
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Active category listings and dynamic expanded detail card below
          </p>
        </div>
        <activeConfig.icon className="h-6 w-6 text-slate-400 shrink-0" style={{ color: activeConfig.color }} />
      </div>

      {/* 2. SUMMARY CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeGroupItems.map((item) => {
          const isSelected = selectedSlug === item.id;
          const data = offeringsData[item.id];
          return (
            <div
              key={item.id}
              onClick={() => setSelectedSlug(item.id)}
              className={cn(
                "p-4 bg-white rounded-lg border border-slate-200 transition-all cursor-pointer shadow-sm hover:shadow-md select-none flex flex-col justify-between min-h-[140px]",
                activeConfig.borderClass,
                isSelected ? "ring-2 ring-blue-600 ring-offset-1 shadow-md scale-[1.01]" : "hover:-translate-y-[2px]"
              )}
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    {item.icon && (
                      <div style={{ color: activeConfig.color }} className="shrink-0 flex items-center">
                        <item.icon className="h-5 w-5" />
                      </div>
                    )}
                    <h3 className="text-sm font-bold text-primary truncate leading-tight">
                      {item.label}
                    </h3>
                  </div>
                  {item.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 bg-blue-100 text-blue-700">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {data?.valueText || "Expert corporate coverage designed to transfer systemic liability and minimize cash volatility."}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-2.5 border-t border-slate-100">
                <span className="text-[10px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-0.5">
                  {isSelected ? "Currently Expanded" : "Expand Details"} →
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  {data?.matrix?.scale?.split(" ").pop() || "All scales"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. DYNAMIC EXPANDED DETAIL CARD */}
      {currentOfferingData && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header Banner */}
          <div className="p-6 text-white bg-primary relative border-b border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
            <div className="relative z-10 space-y-2 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-600/50 px-2 py-0.5 rounded border border-blue-500/20">
                  {activeConfig.label}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded border border-white/10">
                  {currentOfferingData.matrix.scope}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif leading-tight">
                {currentOfferingData.title}
              </h2>
              <p className="text-sm text-gray-300">
                {currentOfferingData.subtitle}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-10">
            
            {/* Value Proposition */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b">
                <Target className="h-5 w-5 text-blue-600" />
                <h3 className="text-base font-bold text-primary">Enterprise Value Positioning</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-5xl">
                {currentOfferingData.valueText}
              </p>
            </div>

            {/* Challenges & Coverage Architecture Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Challenges */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <h3 className="text-base font-bold text-primary">Underwriting Challenges & Exposures</h3>
                </div>
                <div className="space-y-3">
                  {currentOfferingData.challenges.map((challenge, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-slate-50/50 p-3 rounded-lg border border-slate-100 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: activeConfig.color }} />
                      <span className="text-slate-600 leading-relaxed">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coverage Architecture */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Grid className="h-5 w-5 text-blue-600" />
                  <h3 className="text-base font-bold text-primary">Coverage Architecture</h3>
                </div>
                <div className="border border-slate-200 rounded-lg overflow-hidden max-h-[350px] overflow-y-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-primary font-bold border-b sticky top-0 z-10">
                      <tr>
                        <th className="px-4 py-3 w-1/3">Term</th>
                        <th className="px-4 py-3">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {currentOfferingData.architecture.map((item, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-4 py-3 font-semibold text-primary align-top">{item.term}</td>
                          <td className="px-4 py-3 text-slate-500 leading-relaxed align-top">{item.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Premium Gold Callout: Expert Commentary */}
            {currentOfferingData.expertCommentary && (
              <div className="p-6 bg-slate-50 border-l-[4px] border-l-[#B8860B] rounded-r-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Lightbulb className="w-32 h-32" />
                </div>
                <div className="relative z-10 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B] flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>EXPERT COMMENTARY</span>
                  </div>
                  <blockquote className="text-sm md:text-base italic font-medium leading-relaxed text-slate-700">
                    "{currentOfferingData.expertCommentary}"
                  </blockquote>
                </div>
              </div>
            )}

            {/* India Context */}
            {currentOfferingData.indiaContext && currentOfferingData.indiaContext.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <h3 className="text-base font-bold text-primary">India Context & Regulatory Compliance</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentOfferingData.indiaContext.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-blue-50/20 border border-blue-100 text-xs">
                      <CheckCircle2 className="h-4.5 w-4.5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4D Matrix summary */}
            <div className="pt-6 border-t">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg text-center">
                  <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Enterprise Scale</div>
                  <div className="text-xs font-semibold text-primary truncate">{currentOfferingData.matrix.scale}</div>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg text-center">
                  <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Operational Scope</div>
                  <div className="text-xs font-semibold text-primary truncate">{currentOfferingData.matrix.scope}</div>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg text-center">
                  <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Duration / Tenor</div>
                  <div className="text-xs font-semibold text-primary truncate">{currentOfferingData.matrix.duration}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Call-to-action bottom panel */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-primary">Need specialized risk architecture?</h4>
              <p className="text-xs text-muted-foreground">Book a free 30-minute diagnostic session with our senior risk underwriters.</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm w-full sm:w-auto h-11 px-6">
              Request Free Risk Assessment
            </Button>
          </div>

        </div>
      )}

    </TwoPanelLayout>
  );
}
