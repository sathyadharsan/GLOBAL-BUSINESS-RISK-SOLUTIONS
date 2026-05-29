"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Briefcase, Shield, Flame, Sun, Landmark, Waves, Scale, FileWarning,
  Target, Lightbulb, CheckCircle2, Layers, AlertTriangle, PlayCircle
} from "lucide-react";
import { useCasesData } from "@/data/siteContent";
import { cn } from "@/lib/utils";

const SECTIONS_CONFIG = {
  governance: { label: "Governance & Liability", color: "#7C3AED", icon: Briefcase },
  cyber: { label: "Cyber & Technology", color: "#DC2626", icon: Shield },
  property: { label: "Property & Infrastructure", color: "#2563EB", icon: Flame },
  supply: { label: "Supply Chain & Finance", color: "#0D9488", icon: Waves },
};

const CATEGORY_ITEMS: Record<string, { id: string; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string }[]> = {
  governance: [
    { id: "unicorn-ipo", label: "Unicorn IPO — D&O Structuring", icon: Briefcase },
    { id: "pe-fund-exit", label: "PE Fund Exit — W&I Insurance", icon: Scale },
    { id: "sebi-adviser", label: "SEBI-Registered Adviser PI", icon: FileWarning },
  ],
  cyber: [
    { id: "it-ransomware", label: "IT Firm Ransomware Attack", icon: Shield, badge: "Alert" },
  ],
  property: [
    { id: "factory-fire", label: "Factory Fire — BI + Rebuild", icon: Flame },
    { id: "solar-park", label: "500 MW Solar Park", icon: Sun },
    { id: "nhai-highway", label: "NHAI 15-Year Highway Concession", icon: Landmark },
  ],
  supply: [
    { id: "supplier-flood", label: "Supplier Flood — CBI Activation", icon: Waves },
  ],
};

function getCategoryForSlug(slug: string): keyof typeof SECTIONS_CONFIG {
  for (const [cat, items] of Object.entries(CATEGORY_ITEMS)) {
    if (items.some(item => item.id === slug)) return cat as keyof typeof SECTIONS_CONFIG;
  }
  return "governance";
}

interface UseCasesDashboardProps {
  activeSlug: string;
}

export function UseCasesDashboard({ activeSlug }: UseCasesDashboardProps) {
  const router = useRouter();
  const activeCategory = getCategoryForSlug(activeSlug);
  const activeConfig = SECTIONS_CONFIG[activeCategory];
  const currentData = useCasesData[activeSlug];
  const activeGroupItems = CATEGORY_ITEMS[activeCategory] || [];

  const handleSelect = (id: string) => {
    router.push(`/use-cases/${id}`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">

      {/* Page Hero */}
      <div className="w-full bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.08),transparent_55%)]" />
        <div className="container mx-auto px-4 md:px-8 py-14 md:py-20 max-w-6xl relative z-10">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Case Portfolios</span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif leading-tight">
              Real-World Use Cases & Case Studies
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
              See how we&apos;ve structured complex risk solutions for actual client scenarios — from IPO D&amp;O to ransomware response to 15-year highway concessions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-14 max-w-6xl space-y-10">

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
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
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sub-item horizontal switcher cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeGroupItems.map((item) => {
            const isSelected = activeSlug === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={cn(
                  "p-4 bg-white rounded-xl border border-slate-200 transition-all cursor-pointer shadow-sm hover:shadow select-none flex items-center justify-between border-l-[3px]",
                  isSelected ? "ring-2 ring-purple-600 ring-offset-1 font-bold scale-[1.01]" : "hover:border-slate-300"
                )}
                style={{ borderLeftColor: activeConfig.color }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-1.5 rounded-lg bg-slate-50" style={{ color: activeConfig.color }}>
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-xs font-bold text-primary truncate leading-tight">{item.label}</h3>
                </div>
                {item.badge && (
                  <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full shrink-0 bg-red-100 text-red-700">{item.badge}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Case Study Details - Story Timeline Layout */}
        {currentData && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header Banner */}
            <div className="p-6 md:p-8 text-white bg-primary relative border-b border-white/5">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
              <div className="relative z-10 space-y-2 max-w-4xl">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">Case Study</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded border border-white/10">{activeConfig.label}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif leading-tight">{currentData.title}</h2>
                <p className="text-sm text-gray-300">{currentData.subtitle}</p>
              </div>
            </div>

            {/* Timeline Layout */}
            <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8 relative">
              {/* Central vertical line of timeline (only on desktop) */}
              <div className="hidden md:block absolute left-8 top-12 bottom-12 w-0.5 bg-slate-200 z-0" />

              {/* Step 1: The Challenge */}
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="hidden md:flex w-8 h-8 rounded-full bg-red-100 border-2 border-red-500 items-center justify-center font-bold text-red-700 shrink-0 z-10 mt-1.5">
                  1
                </div>
                <div className="flex-1 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-4 hover:shadow transition-shadow border-l-4 border-l-red-500">
                  <div className="flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-wider border-b pb-2">
                    <AlertTriangle className="w-4.5 h-4.5" />
                    <span>The Scenario & Challenge</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {currentData.description}
                  </p>
                </div>
              </div>

              {/* Step 2: The Solution Architecture */}
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="hidden md:flex w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-500 items-center justify-center font-bold text-blue-700 shrink-0 z-10 mt-1.5">
                  2
                </div>
                <div className="flex-1 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-4 hover:shadow transition-shadow border-l-4 border-l-blue-500">
                  <div className="flex items-center gap-2 text-blue-600 font-extrabold text-xs uppercase tracking-wider border-b pb-2">
                    <Layers className="w-4.5 h-4.5" />
                    <span>GBRS Solution Architecture</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentData.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/50 border border-slate-100">
                        <CheckCircle2 className="h-4.5 w-4.5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-primary">{feature.title}</h4>
                          <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Key Takeaway */}
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="hidden md:flex w-8 h-8 rounded-full bg-[#B8860B]/20 border-2 border-[#B8860B] items-center justify-center font-bold text-[#B8860B] shrink-0 z-10 mt-1.5">
                  3
                </div>
                <div className="flex-1 bg-slate-50 border-l-4 border-l-[#B8860B] p-6 rounded-r-2xl relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Lightbulb className="w-32 h-32" />
                  </div>
                  <div className="relative z-10 space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B] flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>KEY TAKEAWAY</span>
                    </div>
                    <blockquote className="text-xs md:text-sm italic font-medium leading-relaxed text-slate-700">
                      &ldquo;Every major loss or corporate event is a stress test for your insurance program. The difference between financial devastation and seamless recovery lies in the structural quality of the architecture built before the event occurred.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom CTA */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-primary">Facing a similar complex operational scenario?</h4>
                <p className="text-[10px] text-muted-foreground">Let&apos;s build a proactive risk architecture before your next event occurs.</p>
              </div>
              <Button onClick={() => router.push("/contact")} className="bg-purple-600 hover:bg-purple-700 text-white font-bold h-10 px-5 text-xs shadow shrink-0 border-0">
                Discuss Your Scenario
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
