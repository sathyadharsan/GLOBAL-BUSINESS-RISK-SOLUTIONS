"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { outcomesData } from "@/data/outcomesData";
import {
  Zap, ShieldAlert, BadgeDollarSign, Building2,
  Shield, Target, Activity, TrendingUp, CheckCircle2, ArrowRight
} from "lucide-react";

const CATEGORY_CONFIG = {
  property: {
    label: "Property & Operational",
    color: "#2E6DA4",
    bgClass: "bg-blue-50",
    textClass: "text-blue-700",
    borderClass: "border-blue-200",
    icon: Zap,
  },
  liability: {
    label: "Liability & Governance",
    color: "#C84B20",
    bgClass: "bg-orange-50",
    textClass: "text-orange-700",
    borderClass: "border-orange-200",
    icon: ShieldAlert,
  },
  financial: {
    label: "Financial & M&A Lines",
    color: "#6A1B9A",
    bgClass: "bg-purple-50",
    textClass: "text-purple-700",
    borderClass: "border-purple-200",
    icon: BadgeDollarSign,
  },
  industry: {
    label: "Industry & Sector Specific",
    color: "#B8860B",
    bgClass: "bg-amber-50",
    textClass: "text-amber-700",
    borderClass: "border-amber-200",
    icon: Building2,
  },
  cyber: {
    label: "Cyber & Technology",
    color: "#1E5EFF",
    bgClass: "bg-indigo-50",
    textClass: "text-indigo-700",
    borderClass: "border-indigo-200",
    icon: Activity,
  },
};

const LANDING_KPIS = [
  { value: "30+", label: "Outcome Scenarios", icon: Target },
  { value: "$2B+", label: "Claims Resolved", icon: BadgeDollarSign },
  { value: "150+", label: "Countries Covered", icon: Shield },
  { value: "100%", label: "Client Retention", icon: TrendingUp },
];

const LANDING_CAPABILITIES = [
  {
    title: "Property & Casualty Recovery",
    description:
      "Full-spectrum property damage recovery, including BI indemnity, temporary relocation, and rebuild financing.",
    icon: Zap,
  },
  {
    title: "Liability & Governance Defense",
    description:
      "Protecting directors, officers, and the enterprise from regulatory, securities, and professional liability claims.",
    icon: ShieldAlert,
  },
  {
    title: "Financial Lines Structuring",
    description:
      "Complex M&A warranty & indemnity, surety, credit, and trade credit risk solutions for transaction certainty.",
    icon: BadgeDollarSign,
  },
  {
    title: "Sector-Specific Programs",
    description:
      "Tailored programs for renewable energy, infrastructure, agri-tech, and financial services sectors.",
    icon: Building2,
  },
];

export default function OutcomesPage() {
  const allOutcomes = Object.values(outcomesData);

  const grouped = allOutcomes.reduce(
    (acc, o) => {
      const cat = o.category as keyof typeof CATEGORY_CONFIG;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(o);
      return acc;
    },
    {} as Record<string, typeof allOutcomes>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden bg-[#0B1F3A] mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-6 md:px-8 h-full flex flex-col justify-center max-w-6xl">
          <div className="max-w-4xl space-y-6">
            <Badge
              variant="secondary"
              className="w-fit bg-[#1E5EFF]/20 text-[#60A5FA] border-[#1E5EFF]/40 text-sm font-semibold tracking-widest uppercase"
            >
              Enterprise Outcomes
            </Badge>
            <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold tracking-tight font-serif leading-[1.1] text-white">
              30 Enterprise Client
              <br />
              <span className="text-blue-400">Outcome Case Studies</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-snug">
              Real-world risk scenarios demonstrating how integrated risk
              transfer architectures protect corporate cash flow and governance
              globally.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="font-semibold text-base uppercase tracking-wide bg-[#1E5EFF] hover:bg-[#1E5EFF]/90 text-white"
                onClick={() => (window.location.href = "/contact")}
              >
                Book Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-base uppercase tracking-wide"
                onClick={() => (window.location.href = "/contact")}
              >
                Download Overview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXECUTIVE OVERVIEW */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge
                variant="secondary"
                className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-sm font-semibold tracking-widest uppercase mb-4"
              >
                Executive Overview
              </Badge>
              <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-4">
                Proven Risk Transfer at Enterprise Scale
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Every outcome in this library represents a real enterprise risk
                scenario — from factory fires and ransomware to PE fund exits
                and green energy construction. Each case demonstrates the
                breadth of our integrated risk transfer architecture and how
                we&apos;ve protected clients across industries and geographies.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Cross-category coverage spanning property, liability, financial, and industry-specific lines",
                "Detailed program structures with coverage limits, trigger mechanisms, and indemnity periods",
                "Named perils and unnamed contingent business interruption solutions",
                "Regulatory, M&A, and governance risk outcomes for listed and private entities",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KPI METRICS GRID */}
      <section className="w-full bg-slate-50 py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">
              Outcomes at Scale
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Quantified impact across our enterprise client portfolio.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {LANDING_KPIS.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <Card
                  key={i}
                  className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4"
                >
                  <CardContent className="space-y-3 pt-0">
                    <Icon className="h-10 w-10 text-blue-600 mx-auto" />
                    <div className="text-[42px] font-bold text-slate-900 font-serif leading-none">
                      {kpi.value}
                    </div>
                    <div className="text-base font-semibold text-slate-700">
                      {kpi.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUTCOME CAPABILITY CARDS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Outcome Capability Framework
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Four pillars of enterprise risk outcome delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANDING_CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Card
                  key={i}
                  className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded bg-[#EAF2FF] flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-[#1E5EFF]" />
                    </div>
                    <CardTitle className="text-base font-bold text-slate-900 leading-snug">
                      {cap.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-base text-slate-600 leading-snug">
                      {cap.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6: OUTCOME CASE STUDY DIRECTORY (grouped by category) */}
      {Object.entries(grouped).map(([cat, outcomes]) => {
        const config =
          CATEGORY_CONFIG[cat as keyof typeof CATEGORY_CONFIG] ||
          CATEGORY_CONFIG.property;
        const Icon = config.icon;
        return (
          <section key={cat} className="py-14 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-6 md:px-8 max-w-6xl">
              <div className="flex items-center gap-4 mb-10">
                <div
                  className={`w-11 h-11 rounded flex items-center justify-center ${config.bgClass}`}
                >
                  <Icon className={`h-5 w-5 ${config.textClass}`} />
                </div>
                <div>
                  <Badge
                    variant="secondary"
                    className={`w-fit text-sm font-semibold tracking-widest uppercase mb-1 ${config.bgClass} ${config.textClass} ${config.borderClass}`}
                  >
                    {config.label}
                  </Badge>
                  <h2 className="text-[22px] font-bold text-[#0B1F3A] font-serif tracking-tight">
                    {config.label} Outcomes
                  </h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {outcomes.map((outcome) => (
                  <Link
                    key={outcome.slug}
                    href={`/outcomes/${outcome.slug}`}
                    className="group"
                  >
                    <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 h-full">
                      <CardContent className="p-5 flex flex-col h-full">
                        <div className="flex-1 space-y-2">
                          <div
                            className={`text-[10px] font-bold uppercase tracking-widest ${config.textClass} mb-1`}
                          >
                            {config.label}
                          </div>
                          <h3 className="text-base font-bold text-[#0B1F3A] leading-tight">
                            {outcome.title}
                          </h3>
                          <p className="text-sm text-slate-500 leading-snug">
                            {outcome.subtitle}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                          <span className="text-sm font-semibold text-blue-600 group-hover:underline">
                            View Case Study
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* SECTION 7: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">
              Facing a Similar Risk Scenario?
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Connect with our enterprise risk architects to design a tailored
              risk transfer strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                size="lg"
                className="text-white font-semibold text-sm uppercase tracking-widest bg-[#1E5EFF] hover:bg-[#1E5EFF]/90"
                onClick={() => (window.location.href = "/contact")}
              >
                Book Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                Request Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
