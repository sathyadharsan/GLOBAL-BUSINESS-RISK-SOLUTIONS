"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Cpu, Factory, Zap, Landmark, Truck, Wheat, Stethoscope, TrendingUp,
  Target, Lightbulb, CheckCircle2, Layers, Users, BookOpen, Rocket
} from "lucide-react";
import { industriesData } from "@/data/siteContent";
import { cn } from "@/lib/utils";

const SECTIONS_CONFIG = {
  technology: { label: "Technology & Digital", color: "#6366F1", icon: Cpu },
  financial: { label: "Financial Services", color: "#059669", icon: Landmark },
  healthcare: { label: "Healthcare & Life Sciences", color: "#DC2626", icon: Stethoscope },
  industrial: { label: "Manufacturing & Industrial", color: "#D97706", icon: Factory },
  infrastructure: { label: "Infrastructure & Real Estate", color: "#7C3AED", icon: Landmark },
  transportation: { label: "Transportation & Logistics", color: "#0891B2", icon: Truck },
  agriculture: { label: "Agriculture & Environment", color: "#16A34A", icon: Wheat },
  retail: { label: "Retail & Hospitality", color: "#DB2777", icon: TrendingUp },
  government: { label: "Government & Public Sector", color: "#475569", icon: Users },
  education: { label: "Education & Non-Profit", color: "#4F46E5", icon: BookOpen },
  emerging: { label: "Emerging Industries", color: "#A21CAF", icon: Rocket },
};

const INDUSTRY_IMAGES: Record<string, string> = {
  "technology-digital": "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
  "financial-services": "https://images.unsplash.com/photo-1563986768609-322375bd5411?q=80&w=2070&auto=format&fit=crop",
  "healthcare-life-sciences": "https://images.unsplash.com/photo-1576091160399-1e6e23e5a1ae?q=80&w=2070&auto=format&fit+crop",
  "manufacturing-industrial": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "energy-utilities": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
  "infrastructure-real-estate": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  "transportation-logistics": "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a63?q=80&w=2070&auto=format&fit=crop",
  "retail-hospitality": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  "agriculture-environment": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
  "government-public-sector": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
  "education-nonprofit": "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop",
  "emerging-industries": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  "default": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
};

const INDUSTRY_SLIDER_IMAGES: Record<string, string> = {
  "technology-digital": "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
  "financial-services": "https://images.unsplash.com/photo-1563986768609-322375bd5411?q=80&w=2070&auto=format&fit=crop",
  "healthcare-life-sciences": "https://images.unsplash.com/photo-1576091160399-1e6e23e5a1ae?q=80&w=2070&auto=format&fit=crop",
  "manufacturing-industrial": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "energy-utilities": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
  "infrastructure-real-estate": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  "transportation-logistics": "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a63?q=80&w=2070&auto=format&fit=crop",
  "retail-hospitality": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  "agriculture-environment": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
  "government-public-sector": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
  "education-nonprofit": "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop",
  "emerging-industries": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
};

const CATEGORY_ITEMS: Record<string, { id: string; label: string; icon: React.ComponentType<{ className?: string }> }[]> = {
  technology: [
    { id: "technology-digital", label: "Technology & Digital", icon: Cpu },
  ],
  financial: [
    { id: "financial-services", label: "Financial Services", icon: Landmark },
  ],
  healthcare: [
    { id: "healthcare-life-sciences", label: "Healthcare & Life Sciences", icon: Stethoscope },
  ],
  industrial: [
    { id: "manufacturing-industrial", label: "Manufacturing & Industrial", icon: Factory },
  ],
  infrastructure: [
    { id: "infrastructure-real-estate", label: "Infrastructure & Real Estate", icon: Landmark },
  ],
  transportation: [
    { id: "transportation-logistics", label: "Transportation & Logistics", icon: Truck },
  ],
  agriculture: [
    { id: "agriculture-environment", label: "Agriculture & Environment", icon: Wheat },
  ],
  retail: [
    { id: "retail-hospitality", label: "Retail & Hospitality", icon: TrendingUp },
  ],
  government: [
    { id: "government-public-sector", label: "Government & Public Sector", icon: Users },
  ],
  education: [
    { id: "education-nonprofit", label: "Education & Non-Profit", icon: BookOpen },
  ],
  emerging: [
    { id: "emerging-industries", label: "Emerging Industries", icon: Rocket },
  ],
};

function getCategoryForSlug(slug: string): keyof typeof SECTIONS_CONFIG {
  for (const [cat, items] of Object.entries(CATEGORY_ITEMS)) {
    if (items.some(item => item.id === slug)) return cat as keyof typeof SECTIONS_CONFIG;
  }
  return "technology";
}

interface IndustriesDashboardProps {
  activeSlug: string;
}

export function IndustriesDashboard({ activeSlug }: IndustriesDashboardProps) {
  const router = useRouter();
  const activeCategory = getCategoryForSlug(activeSlug);
  const activeConfig = SECTIONS_CONFIG[activeCategory];
  const currentData = industriesData[activeSlug];
  const activeGroupItems = CATEGORY_ITEMS[activeCategory] || [];
  const heroImage = INDUSTRY_IMAGES[activeSlug] || INDUSTRY_IMAGES["default"];

  const handleSelect = (id: string) => {
    router.push(`/industries/${id}`);
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
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 h-full flex flex-col justify-center max-w-6xl">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Industry Practices</span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif leading-tight text-white">
              Enterprise Risk Consulting Microsites
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed">
              Deep domain expertise across 12 industry practices. We don&apos;t sell generic policies — we engineer risk solutions that mirror the operational reality of your sector.
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

        {/* Sector Showcase Cards Grid */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            {activeConfig.label} Practices ({activeGroupItems.length})
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeGroupItems.map((item) => {
              const isSelected = activeSlug === item.id;
              const data = industriesData[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={cn(
                    "p-5 bg-white rounded-2xl border border-slate-200/80 transition-all cursor-pointer shadow-sm hover:shadow select-none flex flex-col justify-between min-h-[140px] relative overflow-hidden",
                    isSelected
                      ? "ring-2 ring-blue-500 ring-offset-2 shadow-md scale-[1.01]"
                      : "hover:border-slate-300 hover:-translate-y-0.5"
                  )}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-slate-50" style={{ color: activeConfig.color }}>
                        <item.icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-sm font-extrabold text-primary tracking-tight leading-tight">{item.label}</h3>
                    </div>
                    <p className="text-[11px] text-muted-foreground line-clamp-3 leading-relaxed">
                      {data?.description || "Industry-specific risk architecture and coverage solutions."}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 text-[10px]">
                    <span className="font-semibold text-blue-600">
                      {isSelected ? "Active Practice" : "View Practice"} →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sector Details Panel */}
        {currentData && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header Banner */}
            <div className="p-6 md:p-8 text-white bg-primary relative border-b border-white/5">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
              <div className="relative z-10 space-y-2 max-w-4xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
                    INDUSTRY PRACTICE
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif leading-tight">
                  {currentData.title}
                </h2>
                <p className="text-sm text-gray-300">{currentData.subtitle}</p>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Risk Profile */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b">
                      <Target className="h-5 w-5 text-blue-600" />
                      <h3 className="text-sm font-extrabold text-primary font-serif uppercase tracking-wide">Industry Risk Profile</h3>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{currentData.description}</p>
                  </div>

                  <div className="p-5 bg-slate-50 border-l-4 border-blue-500 rounded-r-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Lightbulb className="w-32 h-32" />
                    </div>
                    <div className="relative z-10 space-y-1.5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>SECTOR INSIGHT</span>
                      </div>
                      <blockquote className="text-xs md:text-sm italic font-medium leading-relaxed text-slate-700">
                        &ldquo;Every industry has distinct risk characteristics. Our practice leaders design coverage that matches your operational reality.&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Right Column: Coverage Architecture */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b">
                    <Layers className="h-5 w-5 text-blue-600" />
                    <h3 className="text-sm font-extrabold text-primary font-serif uppercase tracking-wide">Critical Coverage Architecture</h3>
                  </div>
                  <div className="space-y-3">
                    {currentData.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-300">
                        <CheckCircle2 className="h-4.5 w-4.5 text-blue-500 shrink-0 mt-0.5" />
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
                <h4 className="text-xs font-bold text-primary">Ready for sector-specific risk assessment?</h4>
                <p className="text-[10px] text-muted-foreground">Connect with our industry practice leaders.</p>
              </div>
              <Button onClick={() => router.push("/contact")} className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-10 px-5 text-xs shadow shrink-0 border-0">
                Request Sector Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
