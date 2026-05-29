"use client";

import React, { useState, useEffect } from "react";
import { TwoPanelLayout, SidebarGroup } from "@/components/layout/TwoPanelLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Laptop, Factory, Zap, Landmark, Building, Truck, Tractor, Stethoscope, 
  ArrowRight, Shield, Activity, Target, LayoutGrid, CheckCircle2, ChevronRight
} from "lucide-react";
import { industriesData } from "@/data/siteContent";
import { cn } from "@/lib/utils";
import Link from "next/link";

const groups: SidebarGroup[] = [
  {
    label: "INDUSTRY VERTICALS",
    items: [
      { id: "technology-saas", label: "Technology & SaaS", icon: Laptop },
      { id: "manufacturing", label: "Manufacturing & Engineering", icon: Factory },
      { id: "energy", label: "Energy & Renewables", icon: Zap },
      { id: "fintech", label: "Financial Services & Fintech", icon: Landmark },
      { id: "infrastructure", label: "Infrastructure & Real Estate", icon: Building },
      { id: "logistics", label: "Trade, Logistics & Supply Chain", icon: Truck },
      { id: "agriculture", label: "Agriculture & Food Processing", icon: Tractor },
      { id: "healthcare", label: "Healthcare & Pharma", icon: Stethoscope }
    ]
  }
];

export default function Industries() {
  const [selectedSlug, setSelectedSlug] = useState("technology-saas");

  const currentIndustryData = industriesData[selectedSlug];

  const getIcon = (id: string) => {
    switch (id) {
      case "technology-saas": return Laptop;
      case "manufacturing": return Factory;
      case "energy": return Zap;
      case "fintech": return Landmark;
      case "infrastructure": return Building;
      case "logistics": return Truck;
      case "agriculture": return Tractor;
      case "healthcare": return Stethoscope;
      default: return Shield;
    }
  };

  return (
    <TwoPanelLayout
      groups={groups}
      activeId={selectedSlug}
      onItemSelect={(id) => setSelectedSlug(id)}
      heroTitle="Sector-Specific Risk Architecture"
      heroSubtitle="Bespoke insurance programs engineered for the precise regulatory, capital, and operational dynamics of your industry. Click any sector to view comprehensive risk stacks."
      heroBadges={["8 Core Sectors", "India & Global Markets", "Tailored Risk Placement"]}
    >
      
      {/* 1. Category Summary Header */}
      <div className="mb-6 pb-3 border-b flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary font-serif">
            Practice Verticals
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Click any card to load detailed features and core exposures
          </p>
        </div>
      </div>

      {/* 2. SUMMARY CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups[0].items.map((item) => {
          const isSelected = selectedSlug === item.id;
          const data = industriesData[item.id];
          const Icon = item.icon || Shield;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedSlug(item.id)}
              className={cn(
                "p-4 bg-white rounded-lg border border-slate-200 transition-all cursor-pointer shadow-sm hover:shadow-md select-none flex flex-col justify-between border-l-[3px] border-l-[#2E7D32] min-h-[160px]",
                isSelected ? "ring-2 ring-blue-600 ring-offset-1 shadow-md scale-[1.01]" : "hover:-translate-y-[2px]"
              )}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon className={cn("h-5 w-5 shrink-0", isSelected ? "text-blue-600" : "text-green-600")} />
                  <h3 className="text-xs font-bold text-primary truncate leading-tight">
                    {item.label}
                  </h3>
                </div>
                <p className="text-[11px] text-muted-foreground line-clamp-3 leading-relaxed">
                  {data?.description || "Specialized underwriting and corporate coverage structures designed for key business operational continuity."}
                </p>
              </div>

              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100">
                <span className="text-[10px] font-semibold text-blue-600 flex items-center gap-0.5">
                  {isSelected ? "Expanded" : "Details"} →
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  Practice vertical
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. DYNAMIC EXPANDED DETAIL CARD */}
      {currentIndustryData && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header Banner */}
          <div className="p-6 text-white bg-primary relative border-b border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
            <div className="relative z-10 space-y-2 max-w-4xl">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-green-700/50 text-green-200 px-2 py-0.5 rounded border border-green-600/20">
                INDUSTRY PRACTICE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif leading-tight">
                {currentIndustryData.title}
              </h2>
              <p className="text-sm text-gray-300">
                {currentIndustryData.subtitle}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            
            {/* Overview / Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b">
                <LayoutGrid className="h-5 w-5 text-blue-600" />
                <h3 className="text-base font-bold text-primary font-serif">Sector Overview & Operational Risks</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                {currentIndustryData.description}
              </p>
            </div>

            {/* Key Features & Coverage Components */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <h3 className="text-base font-bold text-primary font-serif">Key Program Features & Coverage Stack</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentIndustryData.features.map((feature, i) => (
                  <div key={i} className="bg-slate-50/50 p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
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
              <h4 className="text-base font-bold text-primary font-serif">Review your current industry-specific placement</h4>
              <p className="text-xs text-muted-foreground">Get a free 30-minute consultation with our specialized sector risk underwriters.</p>
            </div>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm w-full h-12 px-6 flex items-center justify-center gap-2">
                Book Your Sector Diagnostic <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>
      )}

    </TwoPanelLayout>
  );
}
