"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Globe, Building2, Landmark, BarChart3, ShieldCheck, Wrench,
  Target, Lightbulb, CheckCircle2, Layers, Award, ShieldAlert
} from "lucide-react";
import { solutionsData } from "@/data/siteContent";
import { cn } from "@/lib/utils";

const SECTIONS_CONFIG = {
  advisory: { label: "Advisory & Architecture", color: "#1E5EFF", icon: Globe },
  engineering: { label: "Risk Engineering & Analytics", color: "#0F766E", icon: Wrench },
  claims: { label: "Claims & Recovery", color: "#C84B20", icon: ShieldCheck },
};

const CATEGORY_ITEMS: Record<string, { id: string; label: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }> }[]> = {
  advisory: [
    { id: "global-program-architecture", label: "Global Program Architecture", icon: Globe },
    { id: "captive-insurance", label: "Captive Insurance & ART", icon: Building2 },
    { id: "long-tenor-infrastructure", label: "Long-Tenor Infrastructure", icon: Landmark },
  ],
  engineering: [
    { id: "tcor-analytics", label: "TCOR Analytics & Benchmarking", icon: BarChart3 },
    { id: "risk-engineering", label: "Risk Engineering & Loss Prevention", icon: Wrench },
  ],
  claims: [
    { id: "claims-advocacy", label: "Claims Advocacy", icon: ShieldCheck },
  ],
};

function getCategoryForSlug(slug: string): keyof typeof SECTIONS_CONFIG {
  for (const [cat, items] of Object.entries(CATEGORY_ITEMS)) {
    if (items.some(item => item.id === slug)) return cat as keyof typeof SECTIONS_CONFIG;
  }
  return "advisory";
}

interface SolutionsDashboardProps {
  activeSlug: string;
}

export function SolutionsDashboard({ activeSlug }: SolutionsDashboardProps) {
  const router = useRouter();
  const activeCategory = getCategoryForSlug(activeSlug);
  const activeConfig = SECTIONS_CONFIG[activeCategory];
  const currentData = solutionsData[activeSlug];
  const activeGroupItems = CATEGORY_ITEMS[activeCategory] || [];

  const handleSelect = (id: string) => {
    router.push(`/solutions/${id}`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">

      {/* Page Hero */}
      <div className="w-full bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(30,94,255,0.08),transparent_55%)]" />
        <div className="container mx-auto px-4 md:px-8 py-14 md:py-20 max-w-6xl relative z-10">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Strategic Services</span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif leading-tight">
              Enterprise Risk Solutions
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
              Strategic advisory, risk engineering, and claims advocacy services that go beyond traditional brokerage to deliver measurable balance sheet protection.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-14 max-w-6xl space-y-10">

        {/* Category Selector Tabs */}
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
                  "flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold transition-all border",
                  isActive
                    ? "bg-slate-900 text-white shadow-lg border-slate-900 ring-4 ring-slate-900/10"
                    : "bg-white text-slate-500 border-slate-200 hover:bg-slate-100 hover:text-primary"
                )}
              >
                <Icon className="w-4 h-4" style={{ color: isActive ? "#60A5FA" : config.color }} />
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Horizontal Sub-item Switcher (Interactive Pills) */}
        <div className="bg-white border border-slate-200 p-2 rounded-xl flex flex-wrap gap-1">
          {activeGroupItems.map((item) => {
            const isSelected = activeSlug === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all",
                  isSelected
                    ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100 font-bold"
                    : "text-slate-600 hover:bg-slate-50 border border-transparent"
                )}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: isSelected ? "#1D4ED8" : activeConfig.color }} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Alternating Solutions Layout (Split Layout) */}
        {currentData && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Panel: Content Overview & Testimonial */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    {activeConfig.label}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary font-serif leading-snug">
                    {currentData.title}
                  </h2>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {currentData.subtitle}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm font-serif">
                    <Target className="w-4 h-4" />
                    <span>Solution Overview</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {currentData.description}
                  </p>
                </div>
              </div>

              {/* Expert commentary panel */}
              <div className="p-6 bg-slate-900 text-white rounded-2xl relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Lightbulb className="w-32 h-32 text-blue-400" />
                </div>
                <div className="relative z-10 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>STRATEGIC COMMENTARY</span>
                  </div>
                  <blockquote className="text-xs md:text-sm italic font-medium leading-relaxed text-slate-300">
                    &ldquo;Effective risk management isn&apos;t about buying the cheapest policy — it&apos;s about architecting a structural shield around your balance sheet that adapts to the speed and volatility of your industry.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Right Panel: Service Capabilities / Features Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-primary font-bold text-sm font-serif">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>Key Capabilities & Service Components</span>
                </div>

                <div className="space-y-4">
                  {currentData.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-500/20 hover:bg-white hover:shadow transition-all duration-300">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                        <CheckCircle2 className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-primary">{feature.title}</h4>
                        <p className="text-[11px] md:text-xs text-muted-foreground mt-1 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Claims Performance Highlight Box */}
              <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white rounded-2xl p-6 shadow-md flex justify-between items-center">
                <div className="space-y-1 max-w-[70%]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Claims Guarantee</span>
                  </h4>
                  <p className="text-[10px] text-blue-100 leading-relaxed">
                    All GBRS structural programs include pre-agreed insurer SLA templates to prevent claims settlement disputes.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-2xl font-black text-blue-300 tracking-tight">14 Days</span>
                  <span className="text-[8px] text-blue-200 uppercase tracking-widest font-bold">Avg. Payout</span>
                </div>
              </div>

              {/* CTA Consultation Card */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-primary">Need customized service implementation?</h4>
                  <p className="text-[10px] text-muted-foreground">Schedule a private session with our risk structuring desk.</p>
                </div>
                <Button onClick={() => router.push("/contact")} className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-10 px-5 text-xs shadow shrink-0">
                  Book Diagnostic
                </Button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
