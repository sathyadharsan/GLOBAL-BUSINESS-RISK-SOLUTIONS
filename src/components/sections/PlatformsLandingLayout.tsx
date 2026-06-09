"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ChevronRight, Shield, Database, Zap, Users, Briefcase, BarChart3, Download, Target, Globe } from "lucide-react";
import { platformData } from "@/data/platformData";

const PLATFORM_STATS = [
  { value: "45+", label: "AI Platforms" },
  { value: "78+", label: "Risk Solutions" },
  { value: "41", label: "Industries" },
  { value: "150+", label: "Jurisdictions" },
];

const PLATFORM_CATEGORIES = [
  { id: "all", label: "All Platforms" },
  { id: "discovery", label: "Discovery & Diagnostic" },
  { id: "due-diligence", label: "Due Diligence" },
  { id: "monitoring", label: "Monitoring" },
  { id: "planning", label: "Planning & Scenario" },
  { id: "experience", label: "Client Experience" },
];

export function PlatformsLandingLayout() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const platformEntries = Object.entries(platformData);

  const filteredEntries = platformEntries.filter(([, data]) => {
    if (activeCategory === "all") return true;
    const cat = PLATFORM_CATEGORIES.find(c => c.id === activeCategory);
    // Use fallback matching just in case
    return cat ? data.category.includes(cat.label) || data.category.includes(cat.label.split(" ")[0]) : true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: FULL WIDTH HERO */}
      <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden bg-[#0B1F3A] mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518103241174-ebb0c2b2e1e5?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-6 md:px-8 h-full flex flex-col justify-center max-w-6xl">
          <div className="max-w-4xl space-y-6">
            <Badge
              variant="secondary"
              className="w-fit bg-[#1E5EFF]/20 text-[#60A5FA] border-[#1E5EFF]/40 backdrop-blur-sm text-xs font-semibold tracking-widest uppercase"
            >
              Platform Suite
            </Badge>
            <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold tracking-tight font-serif leading-[1.1] text-white">
              45 AI-Powered Risk Intelligence Platforms
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-snug">
              Enterprise-grade tools for risk assessment, monitoring, compliance, and insurance optimization. Built for Fortune 500 risk teams.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-[#1E5EFF] hover:bg-[#1E5EFF]/90 text-white font-semibold text-sm uppercase tracking-wide"
                onClick={() => (window.location.href = "/contact")}
              >
                Book Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-wide"
                onClick={() => (window.location.href = "/contact")}
              >
                Download Platform Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PLATFORM STATISTICS */}
      <section className="w-full bg-white py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Enterprise Overview
            </Badge>
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">
              Measurable Risk Solutions at Scale
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Dedicated platform practices serving enterprises globally.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PLATFORM_STATS.map((stat, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4">
                <CardContent className="space-y-3 pt-0">
                  <Shield className="h-10 w-10 text-blue-600 mx-auto" />
                  <div className="text-[42px] font-bold text-slate-900 font-serif leading-none">
                    {stat.value}
                  </div>
                  <div className="text-base font-semibold text-slate-700">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-500 leading-snug px-2">
                    Enterprise capability
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PLATFORM MARKETPLACE GRID */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Platform Directory
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Select a platform to explore specialized risk technology and architecture.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {PLATFORM_CATEGORIES.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? "bg-[#1E5EFF] text-white hover:bg-[#1E5EFF]/90 border-transparent" : "border-slate-300 text-slate-700 hover:bg-slate-100"}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEntries.map(([slug, data]) => {
              const Icon = data.icon;
              return (
                <Link key={slug} href={`/platform/${slug}`}>
                  <Card className="group border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col h-full cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                          {data.category}
                        </span>
                      </div>
                      <CardTitle className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {data.title.replace('TRUSTFLOW ', '')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 leading-snug mb-3">
                        {data.description.split('.')[0]}.
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                        <span className="text-xs font-semibold text-blue-600 flex items-center gap-1">
                          View Details <ChevronRight className="h-3 w-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PLATFORMS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Featured Platforms
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Deep domain expertise in our highest-demand risk technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["risk-diagnostic-engine", "risk-dna-mapper", "cyber-intelligence"].map((slug) => {
              const data = platformData[slug as keyof typeof platformData];
              if (!data) return null;
              const Icon = data.icon;
              return (
                <Link key={slug} href={`/platform/${slug}`}>
                  <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-8 w-8 text-blue-600" />
                        <CardTitle className="text-lg font-bold text-slate-900">
                          {data.title.replace('TRUSTFLOW ', '')}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 leading-snug mb-3">
                        {data.description.split('.')[0]}.
                      </p>
                      <ul className="space-y-2">
                        {data.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: PLATFORM CATEGORIES */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Platform Categories
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Browse platforms by risk lifecycle and intelligence domain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Risk Discovery", icon: Target, color: "from-blue-600 to-indigo-600", count: platformEntries.filter(([,d]) => d.category.includes("Discovery")).length },
              { label: "Due Diligence", icon: Briefcase, color: "from-emerald-600 to-teal-600", count: platformEntries.filter(([,d]) => d.category.includes("Due Diligence")).length },
              { label: "Risk Monitoring", icon: Globe, color: "from-red-600 to-rose-600", count: platformEntries.filter(([,d]) => d.category.includes("Monitoring")).length },
              { label: "Planning & Scenarios", icon: Zap, color: "from-yellow-600 to-orange-600", count: platformEntries.filter(([,d]) => d.category.includes("Planning")).length },
              { label: "Client Experience", icon: Users, color: "from-violet-600 to-purple-600", count: platformEntries.filter(([,d]) => d.category.includes("Experience")).length },
              { label: "Data & Analytics", icon: Database, color: "from-purple-600 to-violet-600", count: 0 },
            ].map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{cat.label}</h3>
                  <p className="text-xs text-slate-500 mb-3">{cat.count} platforms</p>
                  <div className="text-xs font-semibold text-blue-600">Explore Platforms</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: PLATFORM ARCHITECTURE CTA */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Platform Architecture Assessment
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Get a comprehensive assessment of your platform requirements and integration roadmap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Platform Readiness Assessment", description: "Evaluate current technology stack against TRUSTFLOW platform requirements." },
              { title: "Integration Architecture Planning", description: "Design API connectivity and data flow for enterprise deployment." },
            ].map((diag, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0">
                    <BarChart3 className="h-4 w-4 text-[#1E5EFF]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A] mb-1">{diag.title}</h3>
                    <p className="text-sm text-slate-600 leading-snug">{diag.description}</p>
                    <Button
                      variant="link"
                      className="px-0 mt-2 text-[#1E5EFF] hover:text-[#0B1F3A] text-xs font-semibold uppercase tracking-wide"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Start Assessment <ChevronRight className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">
              Ready to Deploy TRUSTFLOW Platforms?
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Connect with our platform architects to design a customized technology suite aligned to your enterprise risk strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                size="lg"
                className="bg-[#1E5EFF] hover:bg-[#1E5EFF]/90 text-white font-semibold text-xs uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                Book Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-xs uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                Request Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-xs uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                <Download className="h-4 w-4 mr-2" />
                Platform Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}