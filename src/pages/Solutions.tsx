

import React from "react";
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, CheckCircle2, ChevronRight, Download, Globe, Briefcase, BarChart3, Cpu } from "lucide-react";
import { solutionsCategories } from "@/data/siteContent";
import { EnterprisePageHero } from "@/components/sections/EnterprisePageHero";

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <EnterprisePageHero
        badge="Enterprise Risk Solutions"
        title="Engineered Risk Transfer Solutions"
        subtitle="Enterprise risk transfer architectures that protect balance sheets, preserve enterprise value, reduce earnings volatility, and enable strategic growth."
        capabilityTags={["Enterprise Risk", "Insurance Solutions", "Governance", "Financial Risk", "Business Continuity"]}
        stats={[
          { value: "100+", label: "Enterprise Programs" },
          { value: "40+", label: "Specialists" },
          { value: "95%", label: "Success" },
          { value: "24x7", label: "Support" },
        ]}
        primaryCta={{ label: "Request Consultation", onClick: () => (window.location.href = "/contact") }}
        secondaryCta={{ label: "Speak With Specialist", onClick: () => (window.location.href = "/contact") }}
      />

      {/* SECTION 2: ENTERPRISE METRICS & CAPABILITIES */}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: "$50B+", label: "Protected Enterprise Value" },
              { value: "500+", label: "Risk Programs Designed" },
              { value: "150+", label: "Industries Covered" },
              { value: "24/7", label: "Advisory Support" },
            ].map((kpi, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4">
                <CardContent className="space-y-3 pt-0">
                  <Shield className="h-10 w-10 text-blue-600 mx-auto" />
                  <div className="text-[42px] font-bold text-slate-900 font-serif leading-none">
                    {kpi.value}
                  </div>
                  <div className="text-base font-semibold text-slate-700">
                    {kpi.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Risk Identification",
                desc: "Structured assessment across all business units, geographies, and counterparty relationships.",
                bullets: ["Asset valuation", "Operational vulnerability", "Supply chain mapping", "Regulatory gap analysis"],
              },
              {
                title: "Exposure Mapping",
                desc: "Deep analysis of risk concentrations and interdependencies affecting enterprise value.",
                bullets: ["Risk quantification", "Scenario modeling", "Impact assessment", "Mitigation planning"],
              },
              {
                title: "Financial Protection",
                desc: "Optimized retention, transfer, and financing to preserve balance sheet integrity.",
                bullets: ["Limit optimization", "Deductible strategy", "Captive integration", "Carrier selection"],
              },
              {
                title: "Business Continuity",
                desc: "Claims preparedness and recovery planning to maintain operational resilience.",
                bullets: ["SLA templates", "Crisis protocols", "Recovery funding", "Stakeholder communication"],
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

      {/* SECTION 3: SOLUTION CATEGORIES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-primary font-serif tracking-tight">
              Solution Categories
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Five core pillars of enterprise risk transfer architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(solutionsCategories).map(([key, category]) => (
              <Link key={key} to={`/solutions/${key}`}>
                <Card className="group transition-all hover:shadow-lg hover:-translate-y-1 border-slate-200 bg-white h-full flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#EAF2FF] flex items-center justify-center shrink-0">
                        <Shield className="h-6 w-6 text-[#1E5EFF]" />
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-base text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <span className="text-base font-semibold text-blue-600 flex items-center gap-1 group-hover:text-blue-800">
                        Explore Solutions
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: RELATED RISKS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-slate-900 font-serif tracking-tight">
              Related Risks
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Cross-industry and cross-functional risk domains requiring specialized coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: "Cyber Risk", icon: Cpu },
              { title: "Supply Chain Disruption", icon: Briefcase },
              { title: "Regulatory Investigation", icon: Shield },
              { title: "Climate Events", icon: Globe },
              { title: "Operational Risk", icon: BarChart3 },
            ].map((risk, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                <risk.icon className="h-8 w-8 text-blue-600" />
                <span className="text-base font-medium text-slate-700">{risk.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: GLOBAL PROGRAM STRUCTURE */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-slate-900 font-serif tracking-tight">
              Global Program Structure Options
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              From local compliance to global coordination, we design programs at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Local Program",
                desc: "Single jurisdiction with admitted carrier placement and statutory compliance.",
                features: ["Admitted insurer", "Local regulatory", "Standard terms"],
              },
              {
                title: "Regional Program",
                desc: "Multi-country coordination with consistent coverage and centralized governance.",
                features: ["Cross-border", "DIC/DIL", "Unified limits"],
              },
              {
                title: "Global Program",
                desc: "Controlled master policy with fronting network and captive integration.",
                features: ["Master policy", "Fronting", "Captive reinsurance"],
              },
            ].map((program, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-slate-900">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-600 mb-3">{program.desc}</p>
                  <ul className="space-y-1">
                    {program.features.map((f, j) => (
                      <li key={j} className="text-sm text-slate-500 flex items-center gap-1">
                        <span className="w-1 h-1 bg-blue-600 rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">
              Architect Your Enterprise Risk Strategy
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Book a consultation with our senior risk architects to design a customized risk transfer program.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button size="lg" className="bg-[#1E5EFF] hover:bg-[#1E5EFF]/90 text-white font-semibold text-sm uppercase tracking-widest" onClick={() => (window.location.href = "/contact")}>
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest" onClick={() => (window.location.href = "/contact")}>
                Request Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}