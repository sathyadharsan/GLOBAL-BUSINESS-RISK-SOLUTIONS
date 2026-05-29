"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Building2, Shield, Activity, Anchor, Briefcase, Globe,
  ChevronRight, Zap, Scale, TrendingUp, Leaf, BadgeDollarSign,
  Cpu, Rocket, AlertCircle, Target, Lightbulb, MapPin, Grid, CheckCircle2, ShieldAlert, Truck, Search
} from "lucide-react";
import { offeringsData } from "@/data/offeringsData";
import { cn } from "@/lib/utils";

const SECTIONS_CONFIG = {
  property: { label: "Property & Asset Protection", color: "#2E6DA4", icon: Building2 },
  liability: { label: "Liability & Governance Shield", color: "#C84B20", icon: Shield },
  financial: { label: "Financial & Contractual Lines", color: "#6A1B9A", icon: TrendingUp },
  motor: { label: "Motor & Mobility", color: "#1A7A8A", icon: Truck },
  emerging: { label: "Emerging & Specialty Risks", color: "#B8860B", icon: Cpu },
};

const CATEGORY_ITEMS: Record<string, { id: string; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string }[]> = {
  property: [
    { id: "property-sfsp", label: "SFSP / Property All Risks", icon: Building2 },
    { id: "business-interruption", label: "Business Interruption", icon: Activity },
    { id: "car-ear", label: "CAR / EAR / Builders Risk", icon: Activity },
    { id: "machinery-breakdown", label: "CPM / Machinery Breakdown", icon: Search },
    { id: "marine-cargo", label: "Marine Cargo / STP", icon: Anchor },
    { id: "marine-hull", label: "Marine Hull & Aviation", icon: Anchor },
    { id: "parametric", label: "Parametric & Index-Based", icon: Zap, badge: "New" },
  ],
  liability: [
    { id: "cgl", label: "CGL / Public Liability", icon: Shield },
    { id: "product-liability", label: "Product Liability & Recall", icon: Shield },
    { id: "do-liability", label: "Directors & Officers (D&O)", icon: Briefcase },
    { id: "professional-indemnity", label: "Professional Indemnity", icon: Scale },
    { id: "cyber", label: "Cyber Liability", icon: Shield, badge: "Alert" },
    { id: "epl", label: "Employment Practices (EPL)", icon: ShieldAlert },
    { id: "environmental", label: "Environmental / Pollution", icon: Leaf },
  ],
  financial: [
    { id: "trade-credit", label: "Trade Credit Insurance", icon: TrendingUp },
    { id: "political-risk", label: "Political Risk", icon: Globe },
    { id: "surety", label: "Surety Bonds & Guarantees", icon: BadgeDollarSign },
    { id: "fidelity", label: "Fidelity Guarantee / Crime", icon: Shield, badge: "New" },
  ],
  motor: [
    { id: "fleet", label: "Commercial Motor & Fleet", icon: Truck },
  ],
  emerging: [
    { id: "ai-liability", label: "AI & Algorithmic Liability", icon: Cpu, badge: "New" },
    { id: "space", label: "Space & Satellite", icon: Rocket, badge: "New" },
    { id: "climate-esg", label: "Climate & ESG", icon: Leaf, badge: "New" },
  ],
};

function getCategoryForSlug(slug: string): keyof typeof SECTIONS_CONFIG {
  for (const [cat, items] of Object.entries(CATEGORY_ITEMS)) {
    if (items.some(item => item.id === slug)) return cat as keyof typeof SECTIONS_CONFIG;
  }
  return "property";
}

interface OfferingsDashboardProps {
  activeSlug: string;
}

export function OfferingsDashboard({ activeSlug }: OfferingsDashboardProps) {
  const router = useRouter();
  const activeCategory = getCategoryForSlug(activeSlug);
  const activeConfig = SECTIONS_CONFIG[activeCategory];
  const currentOfferingData = offeringsData[activeSlug] || offeringsData["property-sfsp"];
  const activeGroupItems = CATEGORY_ITEMS[activeCategory] || [];

  const handleSelect = (id: string) => {
    router.push(`/offerings/${id}`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">

      {/* Page Hero */}
      <div className="w-full bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 py-14 md:py-20 max-w-6xl">
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif leading-tight">
              Comprehensive Non-Life Insurance Solutions
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
              22 specialized risk transfer products engineered to protect enterprise balance sheets across every asset class, liability exposure, and emerging risk frontier.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["22 Product Lines", "150+ Countries", "A++ Rated Carriers"].map((badge, i) => (
                <span key={i} className="text-xs font-semibold px-3 py-1 bg-white/10 hover:bg-white/15 rounded-full border border-white/10 transition-colors">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-14 max-w-6xl space-y-10">

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(SECTIONS_CONFIG).map(([key, config]) => {
            const isActive = key === activeCategory;
            const Icon = config.icon;
            return (
              <button
                key={key}
                onClick={() => {
                  const firstItem = CATEGORY_ITEMS[key]?.[0];
                  if (firstItem) handleSelect(firstItem.id);
                }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all border",
                  isActive
                    ? "bg-white text-primary shadow-md border-slate-200 ring-2 ring-blue-500/20"
                    : "bg-white/60 text-slate-500 border-slate-100 hover:bg-white hover:text-primary hover:shadow-sm"
                )}
              >
                <Icon className="w-4 h-4" style={{ color: config.color }} />
                <span className="hidden sm:inline">{config.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Header */}
        <div className="pb-3 border-b flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-primary tracking-tight font-serif">
              {activeConfig.label}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Select a product below to view coverage details
            </p>
          </div>
          <activeConfig.icon className="h-6 w-6 shrink-0" style={{ color: activeConfig.color }} />
        </div>

        {/* Two-Panel Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar: Product List Navigation */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto lg:pr-2 pr-0 space-y-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 px-1">
              Select Offering ({activeGroupItems.length})
            </div>
            <div className="flex flex-col gap-2.5">
              {activeGroupItems.map((item) => {
                const isSelected = activeSlug === item.id;
                const data = offeringsData[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={cn(
                      "p-3.5 bg-white rounded-lg border border-slate-200 transition-all cursor-pointer shadow-sm hover:shadow select-none flex flex-col justify-between min-h-[95px] border-l-[4px]",
                      isSelected 
                        ? "ring-2 ring-blue-600 ring-offset-1 shadow border-r-blue-600/10 scale-[1.01]" 
                        : "hover:border-slate-300 hover:translate-x-1"
                    )}
                    style={{ borderLeftColor: activeConfig.color }}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between min-w-0">
                        <div className="flex items-center gap-2 min-w-0">
                          {item.icon && (
                            <div style={{ color: activeConfig.color }} className="shrink-0">
                              <item.icon className="h-4 w-4" />
                            </div>
                          )}
                          <h3 className="text-xs font-bold text-primary truncate leading-tight">{item.label}</h3>
                        </div>
                        {item.badge && (
                          <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full shrink-0 bg-blue-100 text-blue-700">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                        {data?.valueText || "Expert corporate coverage designed to transfer systemic liability."}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                      <span className="text-[9px] font-semibold text-blue-600">
                        {isSelected ? "Currently Viewing" : "View Details"} →
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        {data?.matrix?.scale?.split(" ").pop() || "All scales"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Content Details */}
          <div className="lg:col-span-8">
            {currentOfferingData && (
              <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">

                {/* Header Banner */}
                <div className="p-6 md:p-8 text-white bg-primary relative border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
                  <div className="relative z-10 space-y-2 max-w-4xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-600/50 px-2 py-0.5 rounded border border-blue-500/20">
                        {activeConfig.label}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded border border-white/10">
                        {currentOfferingData.matrix?.scope || "Global"}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif leading-tight">
                      {currentOfferingData.title}
                    </h2>
                    <p className="text-sm text-gray-300">{currentOfferingData.subtitle}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-10">

                  {/* Value Proposition */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b">
                      <Target className="h-5 w-5 text-blue-600" />
                      <h3 className="text-base font-bold text-primary font-serif">Enterprise Value Positioning</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-5xl">{currentOfferingData.valueText}</p>
                  </div>

                  {/* Challenges & Architecture Grid */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    {/* Challenges */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        <h3 className="text-base font-bold text-primary font-serif">Underwriting Challenges & Exposures</h3>
                      </div>
                      <div className="space-y-3">
                        {currentOfferingData.challenges?.map((challenge, i) => (
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
                        <h3 className="text-base font-bold text-primary font-serif">Coverage Architecture</h3>
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
                            {currentOfferingData.architecture?.map((item, i) => (
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

                  {/* Expert Commentary */}
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
                          &ldquo;{currentOfferingData.expertCommentary}&rdquo;
                        </blockquote>
                      </div>
                    </div>
                  )}

                  {/* India Context */}
                  {currentOfferingData.indiaContext && currentOfferingData.indiaContext.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <h3 className="text-base font-bold text-primary font-serif">India Context & Regulatory Compliance</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentOfferingData.indiaContext.map((point, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-blue-50/20 border border-blue-100 text-xs">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                            <span className="text-slate-700 leading-relaxed">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 4D Matrix */}
                  {currentOfferingData.matrix && (
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
                  )}
                </div>

                {/* CTA */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-primary font-serif">Need specialized risk architecture?</h4>
                    <p className="text-xs text-muted-foreground">Book a free 30-minute diagnostic session with our senior risk underwriters.</p>
                  </div>
                  <Button onClick={() => router.push("/contact")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm w-full sm:w-auto h-11 px-6">
                    Request Free Risk Assessment
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
