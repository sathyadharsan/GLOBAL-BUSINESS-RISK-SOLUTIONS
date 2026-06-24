

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { EnterprisePageHero } from "@/components/sections/EnterprisePageHero";
import {
  Shield,
  Target,
  AlertTriangle,
  CheckCircle2,
  Globe,
  Zap,
  Activity,
  Building2,
  TrendingUp,
  Download,
  FileText,
  ChevronRight,
  Flame,
  Waves,
  Briefcase,
  Scale,
  Sun,
  Users,
  BadgeDollarSign,
} from "lucide-react";
import { OutcomeData, outcomesData } from "@/data/outcomesData";
import { platformData } from "@/data/platformData";
import type { PlatformData } from "@/data/platformData";

interface EnterpriseOutcomesLayoutProps {
  slug: string;
}

export function EnterpriseOutcomesLayout({ slug }: EnterpriseOutcomesLayoutProps) {
  const outcome = outcomesData[slug];
  if (!outcome) return null;
  const brandColor = "#1E5EFF";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <EnterprisePageHero
        badge={outcome.category ? `${outcome.category} · Enterprise Outcome` : "Enterprise Outcome"}
        title={outcome.title}
        subtitle={outcome.subtitle}
        description={outcome.overview.description}
        accentColor={brandColor}
        primaryCta={{ label: "Book Consultation", onClick: () => (window.location.href = "/contact") }}
        secondaryCta={{ label: "Download Case Study", onClick: () => (window.location.href = "/contact") }}
      />

      {/* SECTION 2 & 3: KPI METRICS & CAPABILITIES */}
      <section className="w-full bg-white py-16 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Enterprise Overview
            </Badge>
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">
              Measurable Impact
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Quantifiable results delivered through strategic risk management
              and expert execution.
            </p>
          </div>

          {/* Section 2: KPI Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {outcome.kpiMetrics.map((kpi, i) => {
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
                    <p className="text-sm text-slate-500 leading-snug px-2">
                      Enterprise capability
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Section 3: Outcome Capability Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcome.capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Card
                  key={i}
                  className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
                >
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded bg-[#EAF2FF] flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-[#1E5EFF]" />
                    </div>
                    <CardTitle className="text-base font-bold text-slate-900 leading-snug">
                      {cap.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0 flex-1 flex flex-col">
                    <p className="text-base text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: VERTICAL TABS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Vertical Cross-Applicability
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              How this outcome translates across distinct industry challenges,
              platforms, and risk architectures.
            </p>
          </div>

          <Tabs
            defaultValue={outcome.verticals[0]?.industry}
            orientation="vertical"
            className="w-full"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <TabsList
                variant="line"
                className="w-full md:w-72 flex flex-col items-start gap-1 bg-transparent"
              >
                {outcome.verticals.map((tab) => (
                  <TabsTrigger
                    key={tab.industry}
                    value={tab.industry}
                    className="w-full justify-start px-4 py-3 text-base font-semibold data-[selected]:text-[#0B1F3A] data-[selected]:border-l-[3px] data-[selected]:border-[#1E5EFF] rounded-none bg-transparent after:hidden"
                  >
                    {tab.industry}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="flex-1">
                {outcome.verticals.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <TabsContent
                      key={tab.industry}
                      value={tab.industry}
                      className="bg-white rounded-xl border border-slate-300 p-8 m-0"
                    >
                      <div className="grid lg:grid-cols-2 gap-10">
                        <div className="space-y-8">
                          <div>
                            <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5 text-red-600" />
                              Industry Challenges
                            </h3>
                            <p className="text-base text-slate-700 leading-relaxed">
                              {tab.challenge}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                              <Shield className="h-5 w-5 text-[#1E5EFF]" />
                              Risk Exposures
                            </h3>
                            <p className="text-base text-slate-700 leading-relaxed">
                              This outcome addresses critical exposures including{" "}
                              {tab.challenge.toLowerCase()} through comprehensive
                              risk transfer and incident response.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div>
                            <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                              <Globe className="h-5 w-5 text-purple-600" />
                              Core Platform
                            </h3>
                            <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-base font-medium border border-purple-200">
                              {tab.platform}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                              <FileText className="h-5 w-5 text-amber-600" />
                              Recommended Architecture
                            </h3>
                            <p className="text-base text-slate-700 leading-relaxed">
                              Platform-driven risk assessment combined with
                              specialized insurance program design and incident
                              response retainer for this sector.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                              <TrendingUp className="h-5 w-5 text-emerald-600" />
                              Business Benefits
                            </h3>
                            <ul className="space-y-2">
                              {[
                                "Risk reduction through comprehensive coverage",
                                "Operational continuity through rapid claims handling",
                                "Regulatory alignment and compliance assurance",
                                "Financial protection from catastrophic loss",
                              ].map((benefit, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-base text-slate-700"
                                >
                                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  );
                })}
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      {/* SECTION 5: BUSINESS FRAMEWORK */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Business Impact Framework
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Phased impact across the enterprise lifecycle from initial
              response through long-term strategic outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {outcome.businessImpact.map((impact, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow h-full"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#EAF2FF] flex items-center justify-center">
                    <Activity className="h-6 w-6 text-[#1E5EFF]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#1E5EFF] uppercase tracking-wider">
                      Phase {i + 1}
                    </span>
                    <h4 className="font-bold text-[#0B1F3A] text-lg mt-1">
                      {impact.phase}
                    </h4>
                    <p className="text-base text-slate-600 mt-2 leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200">
                    <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-1">
                      Business Outcome
                    </p>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {impact.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRY MAPPING */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Outcome Mapping
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Granular outcome delivery by sector with specific challenges,
              platforms, and measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {outcome.industryMapping.map((map, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow h-full"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-6 w-6 text-emerald-600 mt-0.5 shrink-0" />
                    <h4 className="font-bold text-[#0B1F3A] text-lg">
                      {map.sector}
                    </h4>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                      Primary Challenge
                    </p>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {map.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-1">
                      Business Outcome
                    </p>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {map.outcome}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1E5EFF] uppercase tracking-wide mb-1">
                      Relevant Platform
                    </p>
                    <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-base font-medium border border-purple-200">
                      {map.relevantPlatform}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SUCCESS METRICS LIBRARY */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Success Metrics Library
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Qualitative benchmarks achieved across comparable engagements.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-xl border border-slate-300 p-8 shadow-sm">
            <ul className="space-y-4">
              {outcome.successMetrics.map((metric, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-800 font-medium text-lg">
                    {metric}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8: RELATED RISKS */}
      {outcome.relatedRisks && outcome.relatedRisks.length > 0 && (
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
                Related Risks
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
                Comprehensive risk coverage addressing interconnected exposures
                relevant to this outcome.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outcome.relatedRisks.map((risk, i) => (
                <Card
                  key={i}
                  className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    </div>
                    <CardTitle className="text-base font-bold text-[#0B1F3A] capitalize leading-snug">
                      {risk.replace(/-/g, " ")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-slate-600 leading-relaxed">
                      Risk category addressed by this outcome through strategic
                      risk transfer and expert claims advocacy.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 9: RELATED SOLUTIONS */}
      {outcome.relatedSolutions && outcome.relatedSolutions.length > 0 && (
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
                Related Solutions
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
                Specialized insurance and risk transfer products integrated with
                this outcome.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outcome.relatedSolutions.map((sol, i) => (
                <Card
                  key={i}
                  className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-lg bg-[#EAF2FF] flex items-center justify-center mb-3">
                      <Shield className="h-5 w-5 text-[#1E5EFF]" />
                    </div>
                    <CardTitle className="text-base font-bold text-[#0B1F3A] capitalize leading-snug">
                      {sol.replace(/-/g, " ")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-slate-600 leading-relaxed">
                      Specialized risk transfer program designed to address this
                      exposure.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 10: RELATED PLATFORMS */}
      {outcome.relatedPlatforms && outcome.relatedPlatforms.length > 0 && (
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
                Related Platforms
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
                TRUSTFLOW technology platforms that support and enhance this
                outcome.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outcome.relatedPlatforms.map((plat, i) => {
                const platformDetail = platformData[plat];
                const Icon = platformDetail?.icon || Target;
                return (
                  <Link
                    to={`/platform/${plat}`}
                    key={i}
                    className="block group"
                  >
                    <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md group-hover:border-blue-500 transition-all h-full">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-11 h-11 rounded-lg bg-[#EAF2FF] flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                          <Icon className="h-5 w-5 text-[#1E5EFF]" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#0B1F3A] mb-1 group-hover:text-blue-600 transition-colors">
                            {platformDetail?.title || plat}
                          </h3>
                          <p className="text-base text-slate-600 leading-relaxed">
                            {platformDetail?.subtitle || "Supporting platform"}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 11: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">
              Ready to Achieve Similar Outcomes?
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Connect with our enterprise risk consultants to design a tailored
              strategy that delivers measurable impact across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                size="lg"
                className="text-white font-semibold text-sm uppercase tracking-widest"
                style={{ backgroundColor: brandColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = `${brandColor}90`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = brandColor)
                }
              >
                Book Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                Request Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Overview
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
