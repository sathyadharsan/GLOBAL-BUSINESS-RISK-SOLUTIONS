"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Cpu, Factory, Zap, Landmark, Building, Truck, Wheat, Stethoscope, TrendingUp,
  Target, Lightbulb, CheckCircle2, Layers, Shield, Laptop, Rocket, Leaf
} from "lucide-react";
import { industriesData } from "@/data/siteContent";
import { industriesExtendedData } from "@/data/industriesExtended";
import { cn } from "@/lib/utils";

const allIndustriesData = { ...industriesData, ...industriesExtendedData };

const SECTIONS_CONFIG = {
  tech: { label: "Technology & Digital", color: "#6366F1", icon: Cpu },
  financial: { label: "Financial Services", color: "#059669", icon: Landmark },
  industrial: { label: "Industrial & Energy", color: "#D97706", icon: Factory },
  supply: { label: "Supply Chain & Logistics", color: "#0891B2", icon: Truck },
  infrastructure: { label: "Infrastructure & Real Estate", color: "#7C3AED", icon: Building },
  emerging: { label: "Emerging Verticals", color: "#F59E0B", icon: Rocket },
};

const CATEGORY_ITEMS: Record<string, { id: string; label: string; icon: React.ComponentType<{ className?: string }> }[]> = {
  tech: [
    { id: "technology-saas", label: "Technology & SaaS", icon: Cpu },
    { id: "ai-machine-learning", label: "AI & Machine Learning", icon: Cpu },
    { id: "fintech-digital-payments", label: "Fintech & Digital Payments", icon: Landmark },
    { id: "cybersecurity-companies", label: "Cybersecurity Companies", icon: Shield },
    { id: "telecommunications", label: "Telecommunications", icon: Laptop },
    { id: "data-centers", label: "Data Centers & Cloud Infrastructure", icon: Laptop },
    { id: "media-entertainment", label: "Media & Entertainment", icon: Laptop },
    { id: "education-edtech", label: "Education & EdTech", icon: Laptop }
  ],
  financial: [
    { id: "financial-services", label: "Financial Services & Banking", icon: Landmark },
    { id: "private-equity", label: "Private Equity & Venture Capital", icon: TrendingUp },
    { id: "nonprofit-ngo", label: "Non-Profit & NGO", icon: Landmark }
  ],
  industrial: [
    { id: "manufacturing", label: "Manufacturing & Industrial", icon: Factory },
    { id: "mining-resources", label: "Mining & Natural Resources", icon: Factory },
    { id: "energy", label: "Energy & Renewables", icon: Zap },
    { id: "pharmaceuticals-biotech", label: "Pharmaceuticals & Biotech", icon: Stethoscope },
    { id: "healthcare", label: "Healthcare & Life Sciences", icon: Stethoscope },
    { id: "food-beverage", label: "Food & Beverage", icon: Wheat },
    { id: "agritech", label: "Agriculture & AgriTech", icon: Wheat }
  ],
  infrastructure: [
    { id: "real-estate", label: "Real Estate & Construction", icon: Building },
    { id: "infrastructure", label: "Infrastructure & PPP", icon: Building }
  ],
  supply: [
    { id: "logistics", label: "Logistics & Supply Chain", icon: Truck },
    { id: "maritime-shipping", label: "Maritime & Shipping", icon: Truck },
    { id: "aviation-aerospace", label: "Aviation & Aerospace", icon: Truck }
  ],
  emerging: [
    { id: "crypto-blockchain", label: "Crypto & Blockchain", icon: Cpu },
    { id: "drone-uav", label: "Drone / UAV Operations", icon: Rocket },
    { id: "satellite-space", label: "Space & Satellite", icon: Rocket },
    { id: "electric-vehicles", label: "Electric Vehicles & Clean Mobility", icon: Zap },
    { id: "quantum-computing", label: "Quantum Computing", icon: Cpu },
    { id: "synthetic-biology", label: "Synthetic Biology & BioTech", icon: Leaf },
    { id: "autonomous-vehicles", label: "Autonomous Vehicles & Robotics", icon: Cpu },
    { id: "cyber-physical-systems", label: "Cyber-Physical Systems", icon: Laptop },
    { id: "metaverse-virtual", label: "Metaverse & Virtual Environments", icon: Laptop },
    { id: "digital-assets-custody", label: "Digital Asset Custody", icon: Cpu },
    { id: "carbon-climate", label: "Carbon Credits & Climate Transition", icon: Leaf }
  ]
};

function getCategoryForSlug(slug: string): keyof typeof SECTIONS_CONFIG {
  for (const [cat, items] of Object.entries(CATEGORY_ITEMS)) {
    if (items.some(item => item.id === slug)) return cat as keyof typeof SECTIONS_CONFIG;
  }
  return "tech";
}

interface IndustriesDashboardProps {
  activeSlug: string;
}

export function IndustriesDashboard({ activeSlug }: IndustriesDashboardProps) {
  const router = useRouter();
  const activeCategory = getCategoryForSlug(activeSlug);
  const activeConfig = SECTIONS_CONFIG[activeCategory];
  const currentData = allIndustriesData[activeSlug];
  const activeGroupItems = CATEGORY_ITEMS[activeCategory] || [];

  const handleSelect = (id: string) => {
    router.push(`/industries/${id}`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">

      {/* Page Hero */}
      <div className="w-full bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_55%)]" />
        <div className="container mx-auto px-4 md:px-8 py-14 md:py-20 max-w-6xl relative z-10">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Domain Expertise</span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif leading-tight">
              Industry-Specialized Risk Architecture
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
              Deep domain expertise across 41 industry verticals. We don&apos;t sell generic policies — we engineer risk solutions that mirror the operational reality of your sector.
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
            Sectors under {activeConfig.label} ({activeGroupItems.length})
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeGroupItems.map((item) => {
              const isSelected = activeSlug === item.id;
              const data = industriesData[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={cn(
                    "p-5 bg-white rounded-2xl border border-slate-200/80 transition-all cursor-pointer shadow-sm hover:shadow select-none flex flex-col justify-between min-h-[120px] relative overflow-hidden",
                    isSelected
                      ? "ring-2 ring-indigo-500 ring-offset-2 shadow-md scale-[1.01]"
                      : "hover:border-slate-300 hover:-translate-y-0.5"
                  )}
                >
                  {/* Subtle top bar styling using sector config color */}
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: activeConfig.color }} />
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-slate-50" style={{ color: activeConfig.color }}>
                        <item.icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-xs font-extrabold text-primary tracking-tight leading-tight">{item.label}</h3>
                    </div>
                    <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                      {data?.description || "Sector-specific risk transfer profile."}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-2 border-t border-slate-100 text-[10px]">
                    <span className="font-semibold text-indigo-600">
                      {isSelected ? "Active Profile" : "View Details"} →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sector Details Panel (Stacked below the Sector Grid) */}
        {currentData && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header Banner */}
            <div className="p-6 md:p-8 text-white bg-primary relative border-b border-white/5">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
              <div className="relative z-10 space-y-2 max-w-4xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeConfig.label}
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
                
                {/* Left Column: Risk Profile & Commentary */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b">
                      <Target className="h-5 w-5 text-indigo-600" />
                      <h3 className="text-sm font-extrabold text-primary font-serif uppercase tracking-wide">Industry Risk Profile</h3>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{currentData.description}</p>
                  </div>

                  <div className="p-5 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Lightbulb className="w-32 h-32" />
                    </div>
                    <div className="relative z-10 space-y-1.5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>SECTOR INSIGHT</span>
                      </div>
                      <blockquote className="text-xs md:text-sm italic font-medium leading-relaxed text-slate-700">
                        &ldquo;Every sector has its own risk DNA. A manufacturing conglomerate and a SaaS unicorn both need insurance — but the structural architecture is fundamentally different.&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Right Column: Exposure Coverage Components */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b">
                    <Layers className="h-5 w-5 text-indigo-600" />
                    <h3 className="text-sm font-extrabold text-primary font-serif uppercase tracking-wide">Critical Coverage Architecture</h3>
                  </div>
                  <div className="space-y-3">
                    {currentData.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-300">
                        <CheckCircle2 className="h-4.5 w-4.5 text-indigo-500 shrink-0 mt-0.5" />
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
                <h4 className="text-xs font-bold text-primary">Looking for industry-specific risk expertise?</h4>
                <p className="text-[10px] text-muted-foreground">Connect with our sector practice leader for a detailed coverage review.</p>
              </div>
              <Button onClick={() => router.push("/contact")} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-10 px-5 text-xs shadow shrink-0 border-0">
                Request Sector Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
