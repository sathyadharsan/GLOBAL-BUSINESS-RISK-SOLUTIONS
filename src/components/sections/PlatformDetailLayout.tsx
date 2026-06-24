

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
  Layers,
  CheckCircle2,
  ChevronRight,
  Download,
  BarChart3,
  Globe,
  Zap,
  Database,
  Activity,
  Building2,
  FileText,
  Users,
  Lock,
  Scale,
  TrendingUp,
  Bell,
  Cpu,
  Sun,
  Briefcase,
  Flame,
  Waves,
  BadgeDollarSign,
  Landmark,
  BookOpen,
  RefreshCw,
  Search,
  ShieldAlert,
  CloudLightning,
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
    useCases,
  } = platform;
  const platformColor = color || "#1E5EFF";

  const PHASE_FRAMEWORK = [
    {
      phase: "Assessment",
      title: "Assess",
      description:
        "Comprehensive evaluation of current risk posture, coverage gaps, and platform applicability across your enterprise.",
      outcome:
        "Complete risk picture with prioritized action items and platform deployment roadmap.",
      icon: Target,
    },
    {
      phase: "Strategy",
      title: "Strategize",
      description:
        "Design a customized platform architecture aligned to your risk profile, industry requirements, and strategic objectives.",
      outcome:
        "Tailored platform deployment plan with clear ROI metrics and success criteria.",
      icon: TrendingUp,
    },
    {
      phase: "Implementation",
      title: "Implement",
      description:
        "Deploy platform capabilities with expert guidance, integration support, and change management across your organization.",
      outcome:
        "Fully operational platform delivering measurable risk intelligence within 30 days.",
      icon: Activity,
    },
    {
      phase: "Optimization",
      title: "Optimize",
      description:
        "Continuous tuning, advanced feature adoption, and scaling to maximize platform value as your risk landscape evolves.",
      outcome:
        "Sustained risk maturity improvement with compounding ROI over time.",
      icon: Zap,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: FULL WIDTH HERO */}
      <EnterprisePageHero
        badge={category || "Platform Suite"}
        title={title}
        subtitle={subtitle}
        description={description}
        accentColor={platformColor}
        primaryCta={{ label: "Book Assessment", onClick: () => (window.location.href = "/contact") }}
        secondaryCta={{ label: "Download Platform Guide", onClick: () => (window.location.href = "/contact") }}
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
              Measurable Risk Solutions at Scale
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Enterprise-grade capabilities designed for complex risk landscapes.
            </p>
          </div>

          {/* Section 2: KPI Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {kpiMetrics?.map((kpi, i) => {
              const Icon = kpi.icon || Shield;
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

          {/* Section 3: Platform Capability Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilityCards?.map((cap, i) => {
              const Icon = cap.icon || Shield;
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
                    <p className="text-base text-slate-600 leading-snug">
                      {cap.description}
                    </p>
                    <ul className="space-y-2 mt-auto">
                      {cap.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-base text-slate-700"
                        >
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

      {/* SECTION 4: INDUSTRY VERTICAL TABS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Vertical Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Deep domain expertise across technology, healthcare, manufacturing,
              financial services, and specialized sectors.
            </p>
          </div>

          <Tabs
            defaultValue={industryTabs?.[0]?.label}
            orientation="vertical"
            className="w-full"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <TabsList
                variant="line"
                className="w-full md:w-72 flex flex-col items-start gap-1 bg-transparent"
              >
                {industryTabs?.map((tab) => (
                  <TabsTrigger
                    key={tab.label}
                    value={tab.label}
                    className="w-full justify-start px-4 py-3 text-base font-semibold data-[selected]:text-[#0B1F3A] data-[selected]:border-l-[3px] data-[selected]:border-[#1E5EFF] rounded-none bg-transparent after:hidden"
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
                    className="bg-white rounded-xl border border-slate-300 p-8 m-0"
                  >
                    <div className="grid lg:grid-cols-2 gap-10">
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                            Industry Challenges
                          </h3>
                          <ul className="space-y-3">
                            {tab.challenges.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-base text-slate-700"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-[#1E5EFF]" />
                            Risk Exposures
                          </h3>
                          <ul className="space-y-3">
                            {tab.riskExposure.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-base text-slate-700"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-purple-600" />
                            Recommended Architecture
                          </h3>
                          <ul className="space-y-3">
                            {tab.recommendedArchitecture.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-base text-slate-700"
                              >
                                <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-emerald-600" />
                            Business Benefits
                          </h3>
                          <ul className="space-y-3">
                            {tab.businessBenefits.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-base text-slate-700"
                              >
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5 text-amber-600" />
                            Use Cases
                          </h3>
                          <ul className="space-y-3">
                            {tab.useCases.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-base text-slate-700"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                            <Globe className="h-5 w-5 text-purple-600" />
                            Related Platforms
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {tab.relatedPlatforms.map((item, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-base font-medium border border-purple-200"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                            Related Risks
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {tab.relatedRisks.map((item, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-base font-medium border border-red-200"
                              >
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

      {/* SECTION 5: BUSINESS FRAMEWORK */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Business Impact Framework
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              A four-phase methodology ensuring platform success from assessment
              through continuous optimization.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {PHASE_FRAMEWORK.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <Card
                  key={i}
                  className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow h-full"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#EAF2FF] flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#1E5EFF]" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#1E5EFF] uppercase tracking-wider">
                        Phase {i + 1}
                      </span>
                      <h4 className="font-bold text-[#0B1F3A] text-lg mt-1">
                        {phase.title}
                      </h4>
                      <p className="text-base text-slate-600 mt-2 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200">
                      <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-1">
                        Business Outcome
                      </p>
                      <p className="text-base text-slate-700 leading-relaxed">
                        {phase.outcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRY MAPPING */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Platform Mapping
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Platform applicability across industry sectors with specific
              challenges, outcomes, and architecture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industryTabs?.map((tab, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow h-full"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-6 w-6 text-emerald-600 mt-0.5 shrink-0" />
                    <h4 className="font-bold text-[#0B1F3A] text-lg">
                      {tab.label}
                    </h4>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                      Primary Challenge
                    </p>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {tab.challenges[0]}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-1">
                      Business Outcome
                    </p>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {tab.businessBenefits[0]}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1E5EFF] uppercase tracking-wide mb-1">
                      Relevant Platform
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tab.relatedPlatforms.slice(0, 2).map((item, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: USE CASES */}
      {useCases && useCases.length > 0 && (
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
                Platform Use Cases
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
                Practical applications of the platform across different
                enterprise scenarios and industries.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, i) => (
                <Card
                  key={i}
                  className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                      <Zap className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0B1F3A]">
                        {useCase}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        Strategic implementation scenario
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 8: RELATED RISKS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Related Risks
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Comprehensive risk coverage addressing interconnected exposures
              relevant to this platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedRiskSlugs?.map((riskSlug, i) => {
              const risk = risksData[riskSlug];
              if (!risk) return null;
              const Icon = risk.icon || AlertTriangle;
              return (
                <Link to={`/risks/${riskSlug}`} key={i} className="block group">
                  <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md group-hover:border-red-500 transition-all h-full">
                    <CardHeader className="pb-3">
                      <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center mb-3 group-hover:bg-red-100 transition-colors">
                        <Icon className="h-5 w-5 text-red-600" />
                      </div>
                      <CardTitle className="text-base font-bold text-[#0B1F3A] group-hover:text-red-600 transition-colors leading-snug">
                        {risk.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-slate-600 leading-relaxed">
                        {risk.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 9: RELATED SOLUTIONS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Related Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Specialized insurance and risk transfer products integrated with
              this platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedSolutionSlugs?.map((solSlug, i) => {
              const offering = offeringsData[solSlug];
              const solution = solutionsData[solSlug];
              const title =
                offering?.title || solution?.title || solSlug.replace(/-/g, " ");
              const description =
                offering?.shortDescription ||
                solution?.description ||
                "Specialized risk transfer program";
              return (
                <Link to={`/solutions/${solSlug}`} key={i} className="block group">
                  <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md group-hover:border-blue-500 transition-all h-full">
                    <CardHeader className="pb-3">
                      <div className="w-11 h-11 rounded-lg bg-[#EAF2FF] flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                        <Shield className="h-5 w-5 text-[#1E5EFF]" />
                      </div>
                      <CardTitle className="text-base font-bold text-[#0B1F3A] group-hover:text-blue-600 transition-colors leading-snug">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-slate-600 leading-relaxed">
                        {description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: RELATED PLATFORMS */}
      {relatedModules && relatedModules.length > 0 && (
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
                Related Platforms
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
                Complementary TRUSTFLOW platforms that integrate with this
                solution for comprehensive risk intelligence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedModules.map((moduleSlug, i) => {
                const plat = platformData[moduleSlug];
                if (!plat) return null;
                const Icon = plat.icon || Target;
                return (
                  <Link to={`/platform/${moduleSlug}`} key={i} className="block group">
                    <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md group-hover:border-blue-500 transition-all h-full">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-11 h-11 rounded-lg bg-[#EAF2FF] flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                          <Icon className="h-5 w-5 text-[#1E5EFF]" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#0B1F3A] mb-1 group-hover:text-blue-600 transition-colors">
                            {plat.title}
                          </h3>
                          <p className="text-base text-slate-600 leading-relaxed">
                            {plat.subtitle}
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
              Ready to Deploy {title}?
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Connect with our platform architects to design a customized
              technology suite aligned to your organization&apos;s risk profile
              and strategic objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                size="lg"
                className="text-white font-semibold text-sm uppercase tracking-widest"
                style={{ backgroundColor: platformColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = `${platformColor}90`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = platformColor)
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
                Download Brief
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
