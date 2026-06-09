"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Shield, Target, AlertTriangle, CheckCircle2,
  Globe, Zap, Activity, Building2, TrendingUp, Download
} from "lucide-react";
import { OutcomeData } from "@/data/outcomesData";

interface EnterpriseOutcomesLayoutProps {
  outcome: OutcomeData;
}

export function EnterpriseOutcomesLayout({ outcome }: EnterpriseOutcomesLayoutProps) {
  const brandColor = "#1E5EFF";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: FULL WIDTH HERO */}
      <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden bg-[#0B1F3A] mb-16">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" style={{ backgroundImage: `url('${outcome.heroImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-6 md:px-8 h-full flex flex-col justify-center max-w-6xl">
          <div className="max-w-4xl space-y-6">
            <Badge variant="secondary" className="w-fit" style={{ backgroundColor: `${brandColor}20`, color: brandColor, borderColor: `${brandColor}40` }}>Enterprise Outcome</Badge>
            {outcome.category && (
              <Badge variant="secondary" className="w-fit bg-white/10 text-white border-white/20 text-xs font-semibold tracking-widest uppercase">
                {outcome.category}
              </Badge>
            )}
            <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold tracking-tight font-serif leading-[1.1] text-white">{outcome.title}</h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-snug">{outcome.subtitle}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="font-semibold text-sm uppercase tracking-wide" style={{ backgroundColor: brandColor, color: "white" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${brandColor}90`)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = brandColor)}>Book Consultation</Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-wide" onClick={() => (window.location.href = "/contact")}>Download Case Study</Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXECUTIVE OVERVIEW */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-xs font-semibold tracking-widest uppercase mb-4">Executive Overview</Badge>
              <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-4">Strategic Description</h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">{outcome.overview.description}</p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  The Challenge
                </h3>
                <p className="text-sm text-slate-700 leading-snug">{outcome.overview.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-600" />
                  The Solution
                </h3>
                <p className="text-sm text-slate-700 leading-snug">{outcome.overview.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: KPI METRICS & CAPABILITIES */}
      <section className="w-full bg-slate-50 py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">Measurable Impact</h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">Quantifiable results delivered through strategic risk management.</p>
          </div>
          
          {/* Section 3: KPI Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {outcome.kpiMetrics.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4">
                  <CardContent className="space-y-3 pt-0">
                    <Icon className="h-10 w-10 text-blue-600 mx-auto" />
                    <div className="text-[42px] font-bold text-slate-900 font-serif leading-none">{kpi.value}</div>
                    <div className="text-base font-semibold text-slate-700">{kpi.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Section 4: Outcome Capability Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcome.capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded bg-[#EAF2FF] flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-[#1E5EFF]" />
                    </div>
                    <CardTitle className="text-base font-bold text-slate-900 leading-snug">{cap.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <p className="text-sm text-slate-600 leading-snug">{cap.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: VERTICAL TABS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Vertical Cross-Applicability
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              How this outcome translates across distinct industry challenges.
            </p>
          </div>

          <Tabs defaultValue={outcome.verticals[0]?.industry} orientation="vertical" className="w-full">
            <div className="flex flex-col md:flex-row gap-6">
              <TabsList
                variant="line"
                className="w-full md:w-64 flex flex-col items-start gap-1 bg-transparent"
              >
                {outcome.verticals.map((tab) => (
                  <TabsTrigger
                    key={tab.industry}
                    value={tab.industry}
                    className="w-full justify-start px-4 py-2.5 text-sm font-semibold data-[selected]:text-[#0B1F3A] data-[selected]:border-l-[3px] data-[selected]:border-[#1E5EFF] rounded-none bg-transparent after:hidden"
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
                      className="bg-white rounded-lg border border-slate-300 p-6 m-0"
                    >
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-red-600" />
                              Vertical Challenge
                            </h3>
                            <p className="text-sm text-slate-700">{tab.challenge}</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                              <Globe className="h-4 w-4 text-purple-600" />
                              Core Platform
                            </h3>
                            <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
                              {tab.platform}
                            </span>
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

      {/* SECTION 6: BUSINESS IMPACT FRAMEWORK */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Business Impact Framework</h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">Phased impact across the enterprise lifecycle.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {outcome.businessImpact.map((impact, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm">
                <CardContent className="p-6">
                  <Activity className="h-8 w-8 text-blue-600 mb-4" />
                  <h4 className="font-bold text-[#0B1F3A] mb-2 text-lg">{impact.phase}</h4>
                  <p className="text-sm text-slate-600 mb-4">{impact.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: INDUSTRY OUTCOME MAPPING */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Industry Outcome Mapping</h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">Granular outcome delivery by sector.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {outcome.industryMapping.map((map, i) => (
              <Card key={i} className="border-slate-300 bg-slate-50 shadow-sm">
                <CardContent className="p-6">
                  <Building2 className="h-6 w-6 text-emerald-600 mb-3" />
                  <h4 className="font-bold text-[#0B1F3A] mb-2 text-md">{map.sector}</h4>
                  <p className="text-sm text-slate-700">{map.outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: SUCCESS METRICS LIBRARY */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Success Metrics Library</h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">Qualitative benchmarks achieved.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-lg border border-slate-300 p-8 shadow-sm">
            <ul className="space-y-4">
              {outcome.successMetrics.map((metric, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-800 font-medium text-lg">{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 9: RELATED SOLUTIONS */}
      {outcome.relatedSolutions && outcome.relatedSolutions.length > 0 && (
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Related Solutions</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {outcome.relatedSolutions.map((sol, i) => (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-9 h-9 rounded bg-[#EAF2FF] flex items-center justify-center mb-2">
                      <Shield className="h-4 w-4 text-[#1E5EFF]" />
                    </div>
                    <CardTitle className="text-sm font-bold text-[#0B1F3A] capitalize">{sol.replace(/-/g, ' ')}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 10: RELATED PLATFORMS */}
      {outcome.relatedPlatforms && outcome.relatedPlatforms.length > 0 && (
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Related Platforms</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {outcome.relatedPlatforms.map((plat, i) => (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-9 h-9 rounded bg-[#EAF2FF] flex items-center justify-center mb-2">
                      <Target className="h-4 w-4 text-[#1E5EFF]" />
                    </div>
                    <CardTitle className="text-sm font-bold text-[#0B1F3A] capitalize">{plat.replace(/-/g, ' ')}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 11: RELATED RISKS */}
      {outcome.relatedRisks && outcome.relatedRisks.length > 0 && (
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Related Risks</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {outcome.relatedRisks.map((risk, i) => (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-9 h-9 rounded bg-red-50 flex items-center justify-center mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                    </div>
                    <CardTitle className="text-sm font-bold text-[#0B1F3A] capitalize">{risk.replace(/-/g, ' ')}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 12: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">Ready to Achieve Similar Outcomes?</h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">Connect with our enterprise risk consultants to design a tailored strategy.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button size="lg" className="text-white font-semibold text-xs uppercase tracking-widest" style={{ backgroundColor: brandColor }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${brandColor}90`)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = brandColor)}>Book Consultation</Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-xs uppercase tracking-widest" onClick={() => (window.location.href = "/contact")}>Request Assessment</Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-xs uppercase tracking-widest" onClick={() => (window.location.href = "/contact")}><Download className="h-4 w-4 mr-2" />Download Overview</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
