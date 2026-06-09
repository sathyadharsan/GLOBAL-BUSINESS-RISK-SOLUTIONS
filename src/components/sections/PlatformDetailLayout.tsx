"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Shield, Target, AlertTriangle, Layers, CheckCircle2, ChevronRight, Download,
  BarChart3, Globe, Zap, Database, Activity
} from "lucide-react";
import { PlatformKPI, PlatformCapabilityCard, PlatformIndustryTab, platformData } from "@/data/platformData";
import { risksData } from "@/data/risksData";
import { offeringsData } from "@/data/offeringsData";
import { solutionsData } from "@/data/siteContent";

interface PlatformDetailLayoutProps {
  slug: string;
}

export function PlatformDetailLayout({ slug }: PlatformDetailLayoutProps) {
  const platform = platformData[slug];
  if (!platform) return null;

  const {
    title,
    subtitle,
    category,
    color,
    heroImage,
    description,
    features,
    capabilities,
    businessBenefits,
    kpiMetrics,
    capabilityCards,
    industryTabs,
    relatedModules,
    relatedRiskSlugs,
    relatedSolutionSlugs,
    useCases
  } = platform;
  const platformColor = color || "#1E5EFF";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: FULL WIDTH HERO */}
      <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden bg-[#0B1F3A] mb-16">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" style={{ backgroundImage: `url('${heroImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-6 md:px-8 h-full flex flex-col justify-center max-w-6xl">
          <div className="max-w-4xl space-y-6">
            <Badge variant="secondary" className="w-fit" style={{ backgroundColor: `${platformColor}20`, color: platformColor, borderColor: `${platformColor}40` }}>Platform Suite</Badge>
            {category && (
              <Badge variant="secondary" className="w-fit bg-white/10 text-white border-white/20 text-xs font-semibold tracking-widest uppercase">
                {category}
              </Badge>
            )}
            <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold tracking-tight font-serif leading-[1.1] text-white">{title}</h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-snug">{subtitle}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="font-semibold text-sm uppercase tracking-wide" style={{ backgroundColor: platformColor, color: "white" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${platformColor}90`)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = platformColor)}>Book Assessment</Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-wide" onClick={() => (window.location.href = "/contact")}>Download Platform Guide</Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PLATFORM OVERVIEW */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-xs font-semibold tracking-widest uppercase mb-4">Platform Overview</Badge>
              <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-4">Core Capabilities & Description</h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">{description}</p>
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-slate-900 font-serif tracking-tight mb-4">Key Business Benefits</h3>
              <ul className="space-y-3">
                {businessBenefits?.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: ENTERPRISE OVERVIEW (KPIS & CAPABILITY CARDS) */}
      <section className="w-full bg-slate-50 py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">Measurable Risk Solutions at Scale</h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">Enterprise-grade capabilities designed for complex risk landscapes.</p>
          </div>
          
          {/* KPI Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {kpiMetrics?.map((kpi, i) => {
              const Icon = kpi.icon || Shield;
              return (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4">
                  <CardContent className="space-y-3 pt-0">
                    <Icon className="h-10 w-10 text-blue-600 mx-auto" />
                    <div className="text-[42px] font-bold text-slate-900 font-serif leading-none">{kpi.value}</div>
                    <div className="text-base font-semibold text-slate-700">{kpi.label}</div>
                    <p className="text-xs text-slate-500 leading-snug px-2">Enterprise capability</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Platform Capability Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilityCards?.map((cap, i) => {
              const Icon = cap.icon || Shield;
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
                    <ul className="space-y-2">
                      {cap.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRY VERTICAL TABS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Vertical Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Deep domain expertise across technology, healthcare, manufacturing, and financial services.
            </p>
          </div>

          <Tabs defaultValue={industryTabs?.[0]?.label} orientation="vertical" className="w-full">
            <div className="flex flex-col md:flex-row gap-6">
              <TabsList
                variant="line"
                className="w-full md:w-64 flex flex-col items-start gap-1 bg-transparent"
              >
                {industryTabs?.map((tab) => (
                  <TabsTrigger
                    key={tab.label}
                    value={tab.label}
                    className="w-full justify-start px-4 py-2.5 text-sm font-semibold data-[selected]:text-[#0B1F3A] data-[selected]:border-l-[3px] data-[selected]:border-[#1E5EFF] rounded-none bg-transparent after:hidden"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="flex-1">
                {industryTabs?.map((tab) => (
                  <TabsContent
                    key={tab.label}
                    value={tab.label}
                    className="bg-white rounded-lg border border-slate-300 p-6 m-0"
                  >
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                            Industry Challenges
                          </h3>
                          <ul className="space-y-2">
                            {tab.challenges.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                            <Shield className="h-4 w-4 text-amber-600" />
                            Risk Exposures
                          </h3>
                          <ul className="space-y-2">
                            {tab.riskExposure.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                            <Globe className="h-4 w-4 text-purple-600" />
                            Related Platforms
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {tab.relatedPlatforms.map((item, i) => (
                              <span key={i} className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      {/* SECTION 6: PLATFORM MODULES GRID */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Platform Modules</h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">Comprehensive tools and capabilities integrated into the platform.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities?.map((cap, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0">
                    <Layers className="h-4 w-4 text-[#1E5EFF]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A] mb-1">{cap}</h3>
                    <p className="text-xs text-slate-600 leading-snug">Integrated module capability</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: ARCHITECTURE FRAMEWORK */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Architecture Framework</h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">Enterprise-grade technical foundation built for scale and security.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-slate-300 bg-slate-50 shadow-sm">
              <CardContent className="p-6">
                <Database className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-[#0B1F3A] mb-2 text-lg">Data Layer</h4>
                <p className="text-sm text-slate-600 mb-4">Multi-source ingestion from 200+ sources</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>API Integrations</span></li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Secure Vault</span></li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Real-time Sync</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-slate-300 bg-slate-50 shadow-sm">
              <CardContent className="p-6">
                <Activity className="h-8 w-8 text-purple-600 mb-4" />
                <h4 className="font-bold text-[#0B1F3A] mb-2 text-lg">Processing Layer</h4>
                <p className="text-sm text-slate-600 mb-4">Real-time analytics and ML models</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" /><span>Risk Scoring Engine</span></li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" /><span>Pattern Recognition</span></li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" /><span>Automated Workflows</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-slate-300 bg-slate-50 shadow-sm">
              <CardContent className="p-6">
                <BarChart3 className="h-8 w-8 text-emerald-600 mb-4" />
                <h4 className="font-bold text-[#0B1F3A] mb-2 text-lg">Output Layer</h4>
                <p className="text-sm text-slate-600 mb-4">API endpoints, dashboards, reports</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /><span>Executive Dashboards</span></li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /><span>Exportable Reports</span></li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /><span>Alert Notifications</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 8: USE CASES */}
      {useCases && useCases.length > 0 && (
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Platform Use Cases</h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">Practical applications of the platform across different scenarios.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map((useCase, i) => (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                      <Zap className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0B1F3A] mb-1">{useCase}</h3>
                      <p className="text-xs text-slate-600 leading-snug">Strategic implementation scenario</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 9: RELATED RISKS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Related Risks</h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">Comprehensive risk coverage addressing interconnected exposures.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedRiskSlugs?.map((riskSlug, i) => {
              const risk = risksData[riskSlug];
              if (!risk) return null;
              const Icon = risk.icon || AlertTriangle;
              return (
                <Link href={`/risks/${riskSlug}`} key={i} className="block group">
                  <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md group-hover:border-red-500 transition-all h-full">
                    <CardHeader className="pb-3">
                      <div className="w-9 h-9 rounded bg-red-50 flex items-center justify-center mb-2 group-hover:bg-red-100 transition-colors">
                        <Icon className="h-4 w-4 text-red-600" />
                      </div>
                      <CardTitle className="text-sm font-bold text-[#0B1F3A] group-hover:text-red-600 transition-colors">{risk.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 leading-snug">{risk.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: RELATED SOLUTIONS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Related Solutions</h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">Specialized insurance and risk transfer products.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedSolutionSlugs?.map((solSlug, i) => {
              const offering = offeringsData[solSlug];
              const solution = solutionsData[solSlug];
              const title = offering?.title || solution?.title || solSlug.replace(/-/g, ' ');
              const description = offering?.shortDescription || solution?.description || "Specialized risk transfer program";
              return (
                <Link href={`/solutions/${solSlug}`} key={i} className="block group">
                  <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md group-hover:border-blue-500 transition-all h-full">
                    <CardHeader className="pb-3">
                      <div className="w-9 h-9 rounded bg-[#EAF2FF] flex items-center justify-center mb-2 group-hover:bg-blue-100 transition-colors">
                        <Shield className="h-4 w-4 text-[#1E5EFF]" />
                      </div>
                      <CardTitle className="text-sm font-bold text-[#0B1F3A] group-hover:text-blue-600 transition-colors">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 leading-snug">{description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: RELATED PLATFORMS */}
      {relatedModules && relatedModules.length > 0 && (
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Related Platforms</h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">AI-powered tools for risk assessment, monitoring, and compliance.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedModules.map((moduleSlug, i) => {
                const plat = platformData[moduleSlug];
                if (!plat) return null;
                const Icon = plat.icon || Target;
                return (
                  <Link href={`/platform/${moduleSlug}`} key={i} className="block group">
                    <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md group-hover:border-blue-500 transition-all h-full">
                      <CardContent className="p-5 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                          <Icon className="h-4 w-4 text-[#1E5EFF]" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#0B1F3A] mb-1 group-hover:text-blue-600 transition-colors">{plat.title}</h3>
                          <p className="text-xs text-slate-600 leading-snug">{plat.subtitle}</p>
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

      {/* SECTION 12: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">Ready to Deploy {title}?</h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">Connect with our platform architects to design a customized technology suite.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button size="lg" className="text-white font-semibold text-xs uppercase tracking-widest" style={{ backgroundColor: platformColor }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${platformColor}90`)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = platformColor)}>Book Consultation</Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-xs uppercase tracking-widest" onClick={() => (window.location.href = "/contact")}>Request Assessment</Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-xs uppercase tracking-widest" onClick={() => (window.location.href = "/contact")}><Download className="h-4 w-4 mr-2" />Download Brief</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}