"use client";

import React, { useState, useEffect } from "react";
import { TwoPanelLayout, SidebarGroup } from "@/components/layout/TwoPanelLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, Layers, Zap, BarChart, ShieldAlert, Search, 
  ArrowRight, Shield, Target, LayoutGrid, CheckCircle2, ChevronRight
} from "lucide-react";
import { solutionsData } from "@/data/siteContent";
import { cn } from "@/lib/utils";
import Link from "next/link";

const groups: SidebarGroup[] = [
  {
    label: "PROGRAM STRUCTURES",
    items: [
      { id: "global-program-architecture", label: "Global Program Architecture", icon: Globe },
      { id: "captive-insurance", label: "Captive Insurance & ART", icon: Layers },
      { id: "long-tenor-infrastructure", label: "Long-Tenor Infrastructure", icon: Zap },
      { id: "tcor-analytics", label: "TCOR Analytics & Benchmarking", icon: BarChart },
      { id: "claims-advocacy", label: "Claims Advocacy", icon: ShieldAlert },
      { id: "risk-engineering", label: "Risk Engineering & Loss Prevention", icon: Search }
    ]
  }
];

export default function Solutions() {
  const [selectedSlug, setSelectedSlug] = useState("global-program-architecture");

  const currentSolutionData = solutionsData[selectedSlug];

  const getIcon = (id: string) => {
    switch (id) {
      case "global-program-architecture": return Globe;
      case "captive-insurance": return Layers;
      case "long-tenor-infrastructure": return Zap;
      case "tcor-analytics": return BarChart;
      case "claims-advocacy": return ShieldAlert;
      case "risk-engineering": return Search;
      default: return Shield;
    }
  };

  const Icon = getIcon(selectedSlug);

  return (
    <TwoPanelLayout
      groups={groups}
      activeId={selectedSlug}
      onItemSelect={(id) => setSelectedSlug(id)}
      heroTitle="Enterprise Risk Architecture & Structures"
      heroSubtitle="Strategic risk transfer mechanisms transcending product lines, designed to optimize your capital efficiency and secure business longevity. Click any structure below."
      heroBadges={["Strategic Services"]}
      heroImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
      heroStats={[
        { val: "6", label: "Program Structures" },
        { val: "150+", label: "Countries" },
        { val: "A++", label: "Carriers" },
        { val: "30+", label: "Years Experience" }
      ]}
    >
      
      {/* 1. Category Summary Header */}
      <div className="mb-6 pb-3 border-b flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary font-serif">
            Program Architecture
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Select a card to examine corporate mechanics, solutions, and benefits
          </p>
        </div>
      </div>

      {/* 2. SUMMARY CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups[0].items.map((item) => {
          const isSelected = selectedSlug === item.id;
          const data = solutionsData[item.id];
          const CardIcon = item.icon || Shield;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedSlug(item.id)}
              className={cn(
                "p-4 bg-white rounded-lg border border-slate-200 transition-all cursor-pointer shadow-sm hover:shadow-md select-none flex flex-col justify-between border-l-[3px] border-l-[#6A1B9A] min-h-[160px]",
                isSelected ? "ring-2 ring-blue-600 ring-offset-1 shadow-md scale-[1.01]" : "hover:-translate-y-[2px]"
              )}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CardIcon className={cn("h-5 w-5 shrink-0", isSelected ? "text-blue-600" : "text-purple-600")} />
                  <h3 className="text-xs font-bold text-primary truncate leading-tight">
                    {item.label}
                  </h3>
                </div>
                <p className="text-[11px] text-muted-foreground line-clamp-3 leading-relaxed">
                  {data?.description || "Strategic advisory and program structuring configurations designed to build capital resilience."}
                </p>
              </div>

              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100">
                <span className="text-[10px] font-semibold text-blue-600 flex items-center gap-0.5">
                  {isSelected ? "Expanded" : "Details"} →
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  Solution Architecture
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. DYNAMIC EXPANDED DETAIL CARD */}
      {currentSolutionData && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header Banner */}
          <div className="p-6 text-white bg-primary relative border-b border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
            <div className="relative z-10 space-y-2 max-w-4xl">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-purple-700/50 text-purple-200 px-2 py-0.5 rounded border border-purple-600/20">
                PROGRAM STRUCTURE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif leading-tight">
                {currentSolutionData.title}
              </h2>
              <p className="text-sm text-gray-300">
                {currentSolutionData.subtitle}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            
            {/* Overview / Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b">
                <LayoutGrid className="h-5 w-5 text-blue-600" />
                <h3 className="text-base font-bold text-primary font-serif">Structural Overview</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                {currentSolutionData.description}
              </p>
            </div>

            {/* Key Features & Coverage Components */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <h3 className="text-base font-bold text-primary font-serif">Solutions & Benefits</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentSolutionData.features.map((feature, i) => (
                  <div key={i} className="bg-slate-50/50 p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between animate-in fade-in duration-300">
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
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
              <h4 className="text-base font-bold text-primary font-serif">Optimize your enterprise-wide risk retention levels</h4>
              <p className="text-xs text-muted-foreground">Request a comprehensive 30-minute TCOR audit from our specialized risk engineers.</p>
            </div>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm w-full h-12 px-6 flex items-center justify-center gap-2">
                Get TCOR Risk Audit <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>
      )}

    </TwoPanelLayout>
  );
}
