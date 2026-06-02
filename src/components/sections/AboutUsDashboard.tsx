"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  BookOpen, Users, Award, Handshake, Leaf, GraduationCap,
  Target, Lightbulb, CheckCircle2, Layers, ShieldAlert, ChevronRight
} from "lucide-react";
import { aboutUsData } from "@/data/siteContent";
import { cn } from "@/lib/utils";

const SECTIONS_CONFIG = {
  company: { label: "Company & Culture", color: "#1E3A5F", icon: BookOpen },
  governance: { label: "Governance & Markets", color: "#059669", icon: Award },
  impact: { label: "Impact & Talent", color: "#7C3AED", icon: Leaf },
};

const ABOUT_IMAGES: Record<string, string> = {
  "our-story": "https://images.unsplash.com/photo-1552664551-3c6fdcabc5ab?q=80&w=2070&auto=format&fit=crop",
  "leadership": "https://images.unsplash.com/photo-1521791136001-8038a031ab48?q=80&w=2070&auto=format&fit=crop",
  "credentials": "https://images.unsplash.com/photo-1507679752028-92cf626ee0a9?q=80&w=2070&auto=format&fit=crop",
  "markets": "https://images.unsplash.com/photo-1526304640581-b13c124b72bc?q=80&w=2070&auto=format&fit=crop",
  "esg": "https://images.unsplash.com/photo-1466611653911-95081537e5b1?q=80&w=2070&auto=format&fit=crop",
  "default": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
};

const CATEGORY_ITEMS: Record<string, { id: string; label: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }> }[]> = {
  company: [
    { id: "our-story", label: "Our Story & Mission", icon: BookOpen },
    { id: "leadership", label: "Leadership & Team", icon: Users },
  ],
  governance: [
    { id: "credentials", label: "Credentials & Regulatory", icon: Award },
    { id: "markets", label: "Markets & Carrier Relationships", icon: Handshake },
  ],
  impact: [
    { id: "esg", label: "ESG & Sustainability", icon: Leaf },
    { id: "careers", label: "Careers", icon: GraduationCap },
  ],
};

function getCategoryForSlug(slug: string): keyof typeof SECTIONS_CONFIG {
  for (const [cat, items] of Object.entries(CATEGORY_ITEMS)) {
    if (items.some(item => item.id === slug)) return cat as keyof typeof SECTIONS_CONFIG;
  }
  return "company";
}

interface AboutUsDashboardProps {
  activeSlug: string;
}

export function AboutUsDashboard({ activeSlug }: AboutUsDashboardProps) {
  const router = useRouter();
  const activeCategory = getCategoryForSlug(activeSlug);
  const activeConfig = SECTIONS_CONFIG[activeCategory];
  const currentData = aboutUsData[activeSlug];
  const activeGroupItems = CATEGORY_ITEMS[activeCategory] || [];
  const heroImage = ABOUT_IMAGES[activeSlug] || ABOUT_IMAGES["default"];

  const handleSelect = (id: string) => {
    router.push(`/about-us/${id}`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">

      {/* Page Hero with Background */}
      <div className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 h-full flex flex-col justify-center max-w-6xl">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">About GBRS</span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif leading-tight text-white">
              About Global Business Risk Solutions
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed">
              We are risk architects — not insurance agents. We design structural balance sheet protection for the world&apos;s most dynamic enterprises across 150+ countries.
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

        {/* Dynamic horizontal pill switcher for sub-sections */}
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
                    ? "bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-100 font-bold"
                    : "text-slate-600 hover:bg-slate-50 border border-transparent"
                )}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: isSelected ? "#047857" : activeConfig.color }} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Stacked Profiles Panel */}
        {currentData && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header Banner */}
            <div className="p-6 md:p-8 text-white bg-primary relative border-b border-white/5">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
              <div className="relative z-10 space-y-2 max-w-4xl">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">{activeConfig.label}</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif leading-tight">{currentData.title}</h2>
                <p className="text-sm text-gray-300">{currentData.subtitle}</p>
              </div>
            </div>

            {/* Profile Grid Panel */}
            <div className="p-6 md:p-10 space-y-10 max-w-5xl mx-auto">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Description & Strategic Insight */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b">
                      <Target className="h-5 w-5 text-emerald-600" />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Section Overview</h3>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{currentData.description}</p>
                  </div>

                  <div className="p-5 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5"><Lightbulb className="w-32 h-32" /></div>
                    <div className="relative z-10 space-y-1.5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5" /><span>OUR PHILOSOPHY</span>
                      </div>
                      <blockquote className="text-xs md:text-sm italic font-medium leading-relaxed text-slate-700">
                        &ldquo;We don&apos;t sell insurance. We architect structural protection. The difference is the same as between a contractor who pours concrete and an engineer who designs bridges that withstand earthquakes.&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Right Column: Dynamic Highlights Checklist */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b">
                    <Layers className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Highlights & Key Pillars</h3>
                  </div>
                  <div className="space-y-3">
                    {currentData.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-300">
                        <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs md:text-sm font-bold text-primary">{feature.title}</h4>
                          <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom CTA */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-primary">Interested in partnering with us?</h4>
                <p className="text-[10px] text-muted-foreground">Start a diagnostic conversation with our advisory desk today.</p>
              </div>
              <Button onClick={() => router.push("/contact")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-10 px-5 text-xs shadow shrink-0 border-0">
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
