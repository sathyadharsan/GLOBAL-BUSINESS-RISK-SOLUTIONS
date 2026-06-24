

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OfferingData } from "@/data/offeringsData";
import { EnterprisePageHero } from "@/components/sections/EnterprisePageHero";
import { ChevronRight, Shield, Target, Lightbulb, CheckCircle2, Globe, Building2, AlertTriangle, Layers } from "lucide-react";

interface CategoryData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  solutions: string[];
}

interface EnterpriseSolutionsLayoutProps {
  category: CategoryData;
  relatedOfferings: OfferingData[];
}

const CATEGORY_KPIS = [
  { value: "150+", label: "Countries Covered" },
  { value: "99%", label: "Claim Settlement Ratio" },
  { value: "45+", label: "A++ Rated Carriers" },
  { value: "24/7", label: "Claims Advocacy" },
];

export function EnterpriseSolutionsLayout({ category, relatedOfferings }: EnterpriseSolutionsLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <EnterprisePageHero
        badge="Enterprise Risk Solutions"
        title={category.title}
        subtitle={category.subtitle}
        description={category.description}
        primaryCta={{ label: "Request Consultation", onClick: () => (window.location.href = "/contact") }}
        secondaryCta={{ label: "Download Framework", onClick: () => (window.location.href = "/contact") }}
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
              Enterprise-grade capabilities designed for complex risk landscapes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {CATEGORY_KPIS.map((kpi, i) => (
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
                desc: "Structured assessment of enterprise exposures across all asset classes and operations.",
                bullets: ["Asset valuation", "Operational vulnerability", "Supply chain mapping", "Regulatory gap analysis"],
              },
              {
                title: "Financial Protection",
                desc: "Optimized retention, transfer, and financing to preserve balance sheet integrity.",
                bullets: ["Limit optimization", "Deductible strategy", "Captive integration", "Carrier selection"],
              },
              {
                title: "Claims Preparedness",
                desc: "Pre-agreed insurer SLAs and claims advocacy to maximize recovery speed and quantum.",
                bullets: ["SLA templates", "Adjuster management", "Dispute escalation", "Subrogation recovery"],
              },
              {
                title: "Regulatory Alignment",
                desc: "Multi-jurisdictional compliance assurance with audit-ready documentation.",
                bullets: ["150+ jurisdictions", "Statutory compliance", "Filing coordination", "Penalty avoidance"],
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

      {/* SECTION 3: SOLUTION ARCHITECTURE FRAMEWORK */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-primary font-serif tracking-tight">
              Solution Architecture Framework
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto leading-snug">
              Systematic approach to designing and implementing enterprise risk solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {["Exposure", "Assessment", "Risk Financing", "Implementation"].map((step, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{i + 1}</span>
                </div>
                <h3 className="font-semibold text-slate-900">{step}</h3>
                <p className="text-sm text-slate-500">
                  {i === 0 && "Quantify and qualify business risks across operations"}
                  {i === 1 && "Evaluate exposure magnitude and frequency"}
                  {i === 2 && "Structure optimal insurance and retention strategy"}
                  {i === 3 && "Execute placement with continuous monitoring"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SOLUTION LIBRARY - Featured Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-primary font-serif tracking-tight">
              Featured Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Risk transfer architectures designed to protect enterprise value and enable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedOfferings.map((offering) => (
              <Card key={offering.slug} className="group transition-all hover:shadow-lg hover:-translate-y-1 border-slate-200 bg-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {offering.title}
                  </CardTitle>
                  <p className="text-base text-slate-500">{offering.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base text-slate-600 line-clamp-3 leading-relaxed">
                    {offering.shortDescription || offering.valueText}
                  </p>
                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <Link
                      to={`/offerings/${offering.slug}`}
                      className="text-base font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      Learn More
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRY APPLICABILITY */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-slate-900 font-serif tracking-tight">
              Industry Applicability
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Solutions tailored for specific industry risk profiles and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from(new Set(relatedOfferings.flatMap(o => o.industryApplicability || []))).slice(0, 8).map((industry) => (
              <div key={industry} className="bg-white p-4 rounded-lg border border-slate-200 text-center hover:shadow-md transition-shadow">
                <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <span className="text-base font-medium text-slate-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">
              Ready to Architect Your Enterprise Risk Strategy?
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Connect with our senior risk architects to design a customized program aligned to your organization's unique exposures and strategic objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                size="lg"
                className="bg-[#1E5EFF] hover:bg-[#1E5EFF]/90 text-white font-semibold text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                Book Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                Schedule Risk Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}