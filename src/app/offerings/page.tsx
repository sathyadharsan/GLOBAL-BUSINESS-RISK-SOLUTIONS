"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Shield, Cpu, BadgeDollarSign, TrendingUp, Grid, Globe, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react";
import { offeringsData, CATEGORY_GROUPS } from "@/data/offeringsData";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Cpu,
  BadgeDollarSign,
  TrendingUp,
  Grid,
  Globe,
  Briefcase,
};

export default function OfferingsMarketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const category = params.get("category");
      if (category) {
        setSelectedCategory(category);
      }
    }
  }, []);

  const allOfferings = useMemo(() => Object.values(offeringsData), []);
  const allIndustries = useMemo(() => {
    const industries = new Set<string>();
    allOfferings.forEach(o => o.industryApplicability?.forEach(i => industries.add(i)));
    return Array.from(industries).sort();
  }, [allOfferings]);

  const filteredOfferings = useMemo(() => {
    return allOfferings.filter(offering => {
      const matchesSearch = !searchQuery || 
        offering.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offering.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offering.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || offering.category === selectedCategory;
      const matchesIndustry = selectedIndustry === "all" || 
        offering.industryApplicability?.includes(selectedIndustry);
      
      return matchesSearch && matchesCategory && matchesIndustry;
    });
  }, [allOfferings, searchQuery, selectedCategory, selectedIndustry]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allOfferings.length };
    Object.entries(CATEGORY_GROUPS).forEach(([key]) => {
      counts[key] = allOfferings.filter(o => o.category === key).length;
    });
    return counts;
  }, [allOfferings]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <HeroBackground
        title="Enterprise Risk & Insurance Solutions Marketplace"
        subtitle="Enterprise-grade risk transfer, insurance, warranty, guarantee, contract intelligence, and risk analytics solutions designed for modern organizations."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        badges={["Marketplace"]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Offerings" }
        ]}
      />

      {/* 2. ENTERPRISE METRICS & CAPABILITIES - SINGLE SECTION */}
      <section className="w-full bg-white py-14 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-sm font-semibold tracking-widest uppercase mb-4">
              Enterprise Overview
            </Badge>
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">
              Measurable Risk Solutions at Scale
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Enterprise-grade capabilities across our risk solutions portfolio.
            </p>
          </div>

          {/* Executive KPI Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: "78+", label: "Offerings", desc: "Risk transfer and insurance solutions.", icon: Shield },
              { value: "45+", label: "Platforms", desc: "Technology platforms supporting risk operations.", icon: Cpu },
              { value: "150+", label: "Countries", desc: "Global footprint across markets.", icon: Globe },
              { value: "30+", label: "Industries", desc: "Cross-sector risk expertise.", icon: Briefcase },
            ].map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4">
                  <CardContent className="space-y-3 pt-0">
                    <Icon className="h-10 w-10 text-blue-600 mx-auto" />
                    <div className="text-[42px] font-bold text-slate-900 font-serif leading-none">
                      {kpi.value}
                    </div>
                    <div className="text-base font-semibold text-slate-700">
                      {kpi.label}
                    </div>
                    <p className="text-sm text-slate-500 leading-snug px-2">
                      {kpi.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Capability Cards Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Risk Transfer",
                desc: "Comprehensive risk mitigation through insurance and guarantees.",
                bullets: ["Insurance Placement", "Guarantee Structuring", "Warranty Solutions"],
              },
              {
                title: "Contract Intelligence",
                desc: "Automated analysis and risk scoring of contractual obligations.",
                bullets: ["Clause Extraction", "Risk Scoring", "Obligation Tracking"],
              },
              {
                title: "Analytics Engine",
                desc: "Data-driven insights for risk assessment and optimization.",
                bullets: ["Risk Modeling", "Portfolio Analysis", "Scenario Planning"],
              },
              {
                title: "Due Diligence",
                desc: "Rapid risk assessment for M&A and transactions.",
                bullets: ["Document Review", "Risk Gap Detection", "Compliance Audit"],
              },
            ].map((cap, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="w-11 h-11 rounded bg-[#EAF2FF] flex items-center justify-center mb-3">
                    <Shield className="h-5 w-5 text-[#1E5EFF]" />
                  </div>
                  <CardTitle className="text-base font-bold text-slate-900 leading-snug">
                    {cap.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-base text-slate-600 leading-snug">{cap.desc}</p>
                  <ul className="space-y-2">
                    {cap.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-base text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEARCH & FILTERS */}
      <div className="w-full bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4 md:px-8 py-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search offerings by name, category, or industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-900 placeholder:text-slate-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 font-medium min-w-[200px]"
              >
                <option value="all">All Categories ({categoryCounts.all})</option>
                {Object.entries(CATEGORY_GROUPS).map(([key, cat]) => (
                  <option key={key} value={key}>
                    {cat.label} ({categoryCounts[key] || 0})
                  </option>
                ))}
              </select>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 font-medium min-w-[200px]"
              >
                <option value="all">All Industries ({allIndustries.length})</option>
                {allIndustries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CATEGORY FILTER TABS */}
      <div className="w-full bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 py-4 max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {Object.entries(CATEGORY_GROUPS).map(([key, cat]) => {
              const Icon = ICONS[cat.icon] || Shield;
              const isActive = selectedCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg text-base font-semibold transition-all border",
                    isActive
                      ? "bg-white text-primary shadow-md border-slate-200 ring-2 ring-blue-500/20"
                      : "bg-white/60 text-slate-500 border-slate-100 hover:bg-white hover:text-primary hover:shadow-sm"
                  )}
                >
                  <span style={{ color: cat.color }}><Icon className="w-4 h-4" /></span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. OFFERINGS GRID */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 max-w-6xl">
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 font-serif">
            {selectedCategory === "all" ? "All Offerings" : CATEGORY_GROUPS[selectedCategory as keyof typeof CATEGORY_GROUPS]?.label}
          </h2>
          <p className="text-slate-600">
            Showing {filteredOfferings.length} of {allOfferings.length} offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOfferings.map((offering) => {
            const category = CATEGORY_GROUPS[offering.category as keyof typeof CATEGORY_GROUPS];
            const Icon = ICONS[category?.icon as string] || Shield;
            return (
              <Card key={offering.slug} className="group transition-all hover:shadow-lg hover:-translate-y-1 border-slate-200 bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div style={{ color: category?.color || "#2E6DA4" }} className="shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {offering.title}
                      </CardTitle>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {offering.matrix?.scale?.split(" ").pop() || "All Scales"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base text-slate-600 line-clamp-3 leading-relaxed">
                    {offering.shortDescription || offering.valueText}
                  </p>
                  
                  <div className="pt-2">
                    <div className="text-sm font-semibold text-blue-600 mb-2">Industry Applicability:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {offering.industryApplicability?.slice(0, 3).map((industry, i) => (
                        <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-sm font-medium">
                          {industry}
                        </span>
                      ))}
                      {offering.industryApplicability && offering.industryApplicability.length > 3 && (
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-sm font-medium">
                          +{offering.industryApplicability.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <Link
                      href={`/offerings/${offering.slug}`}
                      className="text-base font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
                    >
                      Learn More
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredOfferings.length === 0 && (
          <div className="text-center py-20">
            <div className="text-slate-500 text-lg">No offerings match your search criteria.</div>
            <Button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("all"); setSelectedIndustry("all"); }}
              className="mt-4"
              variant="outline"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* 6. CTA SECTION */}
      <div className="w-full bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-serif">
              Architect Your Risk Strategy Today
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Book a consultation with our senior risk architects to design a customized risk transfer program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => window.location.href = "/contact"}>
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-90">Offering</div>
                  <div className="text-base font-bold">Readiness Assessment</div>
                </div>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => window.location.href = "/contact"}>
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-90">Call Us For</div>
                  <div className="text-base font-bold">Free Consultation</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}