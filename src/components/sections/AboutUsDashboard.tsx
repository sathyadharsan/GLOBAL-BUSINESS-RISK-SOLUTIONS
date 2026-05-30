"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  BookOpen, Users, Award, Handshake, Leaf, GraduationCap,
  Target, Lightbulb, CheckCircle2, Layers, ShieldAlert, Award as Badge
} from "lucide-react";
import { aboutUsData } from "@/data/siteContent";
import { cn } from "@/lib/utils";

const SECTIONS_CONFIG = {
  company: { label: "Company & Culture", color: "#e8a317", icon: BookOpen },
  governance: { label: "Governance & Markets", color: "#00d4aa", icon: Award },
  impact: { label: "Impact & Talent", color: "#33e0be", icon: Leaf },
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

  const handleSelect = (id: string) => {
    router.push(`/about/${id}`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-neutral-950 text-neutral-200">

      {/* Page Hero */}
      <div className="w-full bg-neutral-900 border-b border-neutral-850 relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,212,170,0.06),transparent_55%)]" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold text-accent-500 uppercase tracking-widest font-sans">About TRUSTFLOW</span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-sans leading-tight text-white">
              Business Risk Architecture Platform
            </h1>
            <p className="text-base md:text-lg text-neutral-400 max-w-3xl leading-relaxed font-serif">
              We are risk architects — not generic insurance agents. We design structural balance sheet protection for the world&apos;s most dynamic enterprises across 150+ countries.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-14 max-w-6xl space-y-10">

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-neutral-850">
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
                  "flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-bold transition-all border font-sans",
                  isActive
                    ? "bg-neutral-900 text-white shadow-lg border-neutral-850 ring-2 ring-accent-500/20"
                    : "bg-neutral-950 text-neutral-400 border-neutral-850 hover:bg-neutral-900 hover:text-white"
                )}
              >
                <Icon className="w-4 h-4" style={{ color: isActive ? "#e8a317" : config.color }} />
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic horizontal pill switcher for sub-sections */}
        <div className="bg-neutral-900 border border-neutral-850 p-2 rounded-xl flex flex-wrap gap-1">
          {activeGroupItems.map((item) => {
            const isSelected = activeSlug === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all font-sans",
                  isSelected
                    ? "bg-neutral-950 text-accent-400 shadow-sm border border-neutral-850 font-bold"
                    : "text-neutral-400 hover:bg-neutral-950 border border-transparent"
                )}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: isSelected ? "#e8a317" : activeConfig.color }} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Stacked Profiles Panel */}
        {currentData && (
          <div className="bg-neutral-900 rounded-2xl border border-neutral-850 shadow-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header Banner */}
            <div className="p-6 md:p-8 text-white bg-neutral-950 relative border-b border-neutral-850">
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-transparent z-0" />
              <div className="relative z-10 space-y-2 max-w-4xl">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-neutral-900 text-accent-500 px-2 py-0.5 rounded border border-neutral-850 font-mono">{activeConfig.label}</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-sans leading-tight text-white">{currentData.title}</h2>
                <p className="text-sm text-neutral-400 font-serif italic">{currentData.subtitle}</p>
              </div>
            </div>

            {/* Profile Grid Panel */}
            <div className="p-6 md:p-10 space-y-10 max-w-5xl mx-auto">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Description & Strategic Insight */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-neutral-850">
                      <Target className="h-5 w-5 text-accent-500" />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-sans">Section Overview</h3>
                    </div>
                    <p className="text-xs md:text-sm text-neutral-350 leading-relaxed font-serif">{currentData.description}</p>
                  </div>

                  <div className="p-5 bg-neutral-950 border-l-4 border-accent-500 rounded-r-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5"><Lightbulb className="w-32 h-32 text-accent-500" /></div>
                    <div className="relative z-10 space-y-1.5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-accent-500 flex items-center gap-1.5 font-sans">
                        <Lightbulb className="w-3.5 h-3.5" /><span>OUR PHILOSOPHY</span>
                      </div>
                      <blockquote className="text-xs md:text-sm italic font-medium leading-relaxed text-neutral-300 font-serif">
                        &ldquo;We don&apos;t sell insurance policies. We design risk architectures. The difference is the same as between a contractor who pours concrete and a structural engineer who designs bridges that withstand seismic forces.&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Right Column: Dynamic Highlights Checklist */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-neutral-850">
                    <Layers className="h-5 w-5 text-cyber-500" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-sans">Highlights & Key Pillars</h3>
                  </div>
                  <div className="space-y-3">
                    {currentData.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-850 hover:bg-neutral-950 hover:border-neutral-800 transition-all duration-300">
                        <CheckCircle2 className="h-4.5 w-4.5 text-cyber-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs md:text-sm font-bold text-white font-sans">{feature.title}</h4>
                          <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed font-serif">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom CTA */}
            <div className="p-6 bg-neutral-950 border-t border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white font-sans">Interested in partnering with us?</h4>
                <p className="text-[10px] text-neutral-400 font-serif">Start a diagnostic conversation with our advisory desk today.</p>
              </div>
              <Button onClick={() => router.push("/contact")} className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold h-10 px-5 text-xs shadow-md border-0 font-sans">
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
