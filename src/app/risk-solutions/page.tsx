"use client";

import React, { useState, useEffect } from "react";
import { TwoPanelLayout, SidebarGroup } from "@/components/layout/TwoPanelLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, Shield, Activity, Anchor, Briefcase, Globe, 
  Zap, Scale, TrendingUp, Leaf, 
  Cpu, Rocket, AlertCircle, Target, Lightbulb, MapPin, Grid, Info, CheckCircle2, ShieldAlert, BadgeDollarSign, Truck, Search
} from "lucide-react";
import { offeringsData, OfferingData } from "@/data/offeringsData";
import { cn } from "@/lib/utils";

// Category specs with color coding and icons
const SECTIONS_CONFIG = {
  property: {
    label: "Property & Asset Protection",
    color: "#e8a317", // Amber
    bgClass: "bg-neutral-900 border-neutral-800 text-amber-500",
    borderClass: "border-l-[4px] border-l-[#e8a317]",
    icon: Building2
  },
  liability: {
    label: "Liability & Governance Shield",
    color: "#e63946", // Risk Red
    bgClass: "bg-neutral-900 border-neutral-800 text-red-500",
    borderClass: "border-l-[4px] border-l-[#e63946]",
    icon: Shield
  },
  financial: {
    label: "Financial & Contractual Lines",
    color: "#00d4aa", // Cyber Teal
    bgClass: "bg-neutral-900 border-neutral-800 text-teal-400",
    borderClass: "border-l-[4px] border-l-[#00d4aa]",
    icon: TrendingUp
  },
  motor: {
    label: "Motor & Mobility",
    color: "#33e0be", // Light Teal
    bgClass: "bg-neutral-900 border-neutral-800 text-teal-300",
    borderClass: "border-l-[4px] border-l-[#33e0be]",
    icon: Truck
  },
  emerging: {
    label: "Emerging & Specialty Risks",
    color: "#f0b83a", // Gold Accent
    bgClass: "bg-neutral-900 border-neutral-800 text-yellow-500",
    borderClass: "border-l-[4px] border-l-[#f0b83a]",
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
      { id: "climate-esg", label: "Climate & ESG", icon: Leaf, badge: "New" },
      { id: "crypto-digital-assets", label: "Crypto & Digital Asset Insurance", icon: Cpu, badge: "New" },
      { id: "quantum-computing", label: "Quantum Computing Risk", icon: Cpu, badge: "New" },
      { id: "drone-operations", label: "Drone / UAV Operations", icon: Rocket, badge: "New" },
      { id: "warranty-guarantees", label: "Warranty & Guarantee Platform", icon: BadgeDollarSign, badge: "New" },
      { id: "contract-risk-analytics", label: "Contract Risk Analytics", icon: Shield, badge: "New" },
      { id: "multi-line-cross-border", label: "Multi-Line & Cross-Border", icon: Globe, badge: "New" },
      { id: "kidnap-ransom", label: "Kidnap, Ransom & Extortion", icon: Shield, badge: "New" },
      { id: "terrorism-violence", label: "Terrorism & Political Violence", icon: Shield, badge: "New" }
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
      heroTitle="Strategic Risk Solutions"
      heroSubtitle="22 bespoke non-life risk transfer products. Select any solution in the structural listing below to examine its enterprise architecture."
      heroBadges={["22 Product Lines", "150+ Countries", "A++ Rated Capacity"]}
    >
      
      {/* 1. Category Summary Section Header */}
      <div className="mb-6 pb-3 border-b border-neutral-800 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight font-sans">
            {activeConfig.label}
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5 font-sans">
            Select a solution program below to dynamically expand details
          </p>
        </div>
        <activeConfig.icon className="h-6 w-6 text-neutral-400 shrink-0" style={{ color: activeConfig.color }} />
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
                "p-4 bg-neutral-900 rounded-lg border border-neutral-800 transition-all cursor-pointer shadow-sm hover:shadow-md select-none flex flex-col justify-between min-h-[140px]",
                activeConfig.borderClass,
                isSelected ? "ring-2 ring-accent-500 ring-offset-2 ring-offset-neutral-950 shadow-md scale-[1.01]" : "hover:border-neutral-700 hover:-translate-y-[2px]"
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
                    <h3 className="text-sm font-bold text-white truncate leading-tight font-sans">
                      {item.label}
                    </h3>
                  </div>
                  {item.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 bg-cyber-500/10 text-cyber-400 border border-cyber-500/20">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {data?.valueText || "Expert corporate coverage designed to transfer systemic liability and minimize cash volatility."}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-2.5 border-t border-neutral-800">
                <span className="text-[10px] font-bold text-accent-500 flex items-center gap-0.5 font-sans">
                  {isSelected ? "Currently Expanded" : "Expand Details"} →
                </span>
                <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest font-mono">
                  {data?.matrix?.scale?.split(" ").pop() || "All scales"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. DYNAMIC EXPANDED DETAIL CARD */}
      {currentOfferingData && (
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 shadow-md overflow-hidden mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header Banner */}
          <div className="p-6 text-white bg-neutral-950 relative border-b border-neutral-800">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-transparent z-0" />
            <div className="relative z-10 space-y-2 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-neutral-900 text-accent-500 px-2 py-0.5 rounded border border-neutral-800 font-sans">
                  {activeConfig.label}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-neutral-900 text-cyber-400 px-2 py-0.5 rounded border border-neutral-800 font-sans">
                  {currentOfferingData.matrix.scope}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-sans leading-tight text-white">
                {currentOfferingData.title}
              </h2>
              <p className="text-sm text-neutral-400 font-serif italic">
                {currentOfferingData.subtitle}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-10">
            
            {/* Value Proposition */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-neutral-800">
                <Target className="h-5 w-5 text-accent-500" />
                <h3 className="text-base font-bold text-white font-sans">Enterprise Value Positioning</h3>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-5xl">
                {currentOfferingData.valueText}
              </p>
            </div>

            {/* Challenges & Coverage Architecture Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Challenges */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-neutral-800">
                  <AlertCircle className="h-5 w-5 text-risk-500" />
                  <h3 className="text-base font-bold text-white font-sans">Underwriting Challenges & Exposures</h3>
                </div>
                <div className="space-y-3">
                  {currentOfferingData.challenges.map((challenge, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-neutral-950 p-3 rounded-lg border border-neutral-850 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: activeConfig.color }} />
                      <span className="text-neutral-300 leading-relaxed">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coverage Architecture */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-neutral-800">
                  <Grid className="h-5 w-5 text-cyber-500" />
                  <h3 className="text-base font-bold text-white font-sans">Coverage Architecture</h3>
                </div>
                <div className="border border-neutral-800 rounded-lg overflow-hidden max-h-[350px] overflow-y-auto bg-neutral-950">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-neutral-900 text-white font-bold border-b border-neutral-800 sticky top-0 z-10 font-sans">
                      <tr>
                        <th className="px-4 py-3 w-1/3">Term</th>
                        <th className="px-4 py-3">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-850">
                      {currentOfferingData.architecture.map((item, i) => (
                        <tr key={i} className="hover:bg-neutral-900/50 transition-colors">
                          <td className="px-4 py-3 font-semibold text-white align-top font-sans">{item.term}</td>
                          <td className="px-4 py-3 text-neutral-400 leading-relaxed align-top">{item.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Premium Gold Callout: Expert Commentary */}
            {currentOfferingData.expertCommentary && (
              <div className="p-6 bg-neutral-950 border-l-[4px] border-l-accent-500 rounded-r-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Lightbulb className="w-32 h-32 text-accent-500" />
                </div>
                <div className="relative z-10 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-accent-500 flex items-center gap-1.5 font-sans">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>EXPERT COMMENTARY</span>
                  </div>
                  <blockquote className="text-sm md:text-base italic font-medium leading-relaxed text-neutral-200">
                    "{currentOfferingData.expertCommentary}"
                  </blockquote>
                </div>
              </div>
            )}

            {/* India Context */}
            {currentOfferingData.indiaContext && currentOfferingData.indiaContext.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-neutral-800">
                  <MapPin className="h-5 w-5 text-accent-500" />
                  <h3 className="text-base font-bold text-white font-sans">India Context & Regulatory Compliance</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentOfferingData.indiaContext.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-neutral-950 border border-neutral-800 text-xs">
                      <CheckCircle2 className="h-4.5 w-4.5 text-cyber-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-300 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4D Matrix summary */}
            <div className="pt-6 border-t border-neutral-800">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-center">
                  <div className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-1 font-sans">Enterprise Scale</div>
                  <div className="text-xs font-semibold text-white truncate font-sans">{currentOfferingData.matrix.scale}</div>
                </div>
                <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-center">
                  <div className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-1 font-sans">Operational Scope</div>
                  <div className="text-xs font-semibold text-white truncate font-sans">{currentOfferingData.matrix.scope}</div>
                </div>
                <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-center">
                  <div className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-1 font-sans">Duration / Tenor</div>
                  <div className="text-xs font-semibold text-white truncate font-sans">{currentOfferingData.matrix.duration}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Call-to-action bottom panel */}
          <div className="p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-sans">Need specialized risk architecture?</h4>
              <p className="text-xs text-neutral-400 font-serif">Book a free 30-minute diagnostic session with our senior risk underwriters.</p>
            </div>
            <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans h-11 px-6 shadow-md shrink-0">
              Request Free Risk Assessment
            </Button>
          </div>

        </div>
      )}

    </TwoPanelLayout>
  );
}
