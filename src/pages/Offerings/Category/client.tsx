

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Globe,
  TrendingUp,
  Zap,
  BarChart3,
  Target,
} from "lucide-react";
import { OfferingData } from "@/data/offeringsData";
import { buildEnterpriseContent } from "@/lib/enterpriseContentMapper";
import { EnterprisePageHero } from "@/components/sections/EnterprisePageHero";

interface CategoryInfo {
  label?: string;
  description?: string;
  icon?: string;
  color?: string;
  cta?: string;
}

interface CategoryClientProps {
  category: string;
  categoryInfo: CategoryInfo;
  offerings: OfferingData[];
}

const DEFAULTS = {
  kpis: [],
  capabilities: [],
  challengeCards: [],
  coverageLayers: [],
  benefitCards: [],
  riskCards: [],
  platformCards: [],
  solutionCards: [],
  caseStudies: [],
  diagnostics: [],
  industryTabs: [],
};

export function CategoryClient({ category, categoryInfo, offerings }: CategoryClientProps) {
  const label =
    categoryInfo.label ||
    category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const firstOffering = offerings[0];
  const reference = firstOffering
    ? buildEnterpriseContent(firstOffering)
    : DEFAULTS;

  const mergedKPIs = reference.kpis.length
    ? reference.kpis
    : [
        { value: "150+", label: "Countries Covered" },
        { value: "99%", label: "Client Retention" },
        { value: "45+", label: "Platforms" },
        { value: "24/7", label: "Expert Support" },
      ];

  const mergedCapabilities = reference.capabilities.length
    ? reference.capabilities
    : [
        {
          title: "Coverage Architecture",
          desc: "Multi-layered protection designed for enterprise scale and complexity.",
          bullets: [
            "Global Protection",
            "Industry Alignment",
            "Risk Transfer",
            "Compliance Support",
          ],
        },
      ];

  const mergedChallenges = reference.challengeCards.length
    ? reference.challengeCards
    : [
        {
          title: "Enterprise Risk",
          description: "Complex risk exposures requiring structured solutions.",
        },
      ];

  const mergedCoverage = reference.coverageLayers.length
    ? reference.coverageLayers
    : [
        {
          title: "Coverage Layer 1",
          items: ["Primary risk transfer", "Core perils covered"],
        },
      ];

  const mergedBenefits = reference.benefitCards.length
    ? reference.benefitCards
    : [
        {
          title: "Risk Reduction",
          description:
            "Structured identification, quantification, and mitigation of enterprise exposures.",
        },
      ];

  const mergedRisks = reference.riskCards.length
    ? reference.riskCards.slice(0, 4)
    : [
        {
          title: "Enterprise Risk",
          description: "Integrated protection across exposures.",
        },
      ];

  const mergedPlatforms = reference.platformCards.length
    ? reference.platformCards.slice(0, 4)
    : [
        {
          title: "TRUSTFLOW Platform",
          description:
            "AI-powered risk intelligence and assessment platform.",
        },
      ];

  const mergedSolutions = reference.solutionCards.length
    ? reference.solutionCards
    : [
        {
          title: `${label} Program`,
          description:
            "Comprehensive risk transfer and advisory support.",
        },
      ];

  const mergedCaseStudies = reference.caseStudies.length
    ? reference.caseStudies.slice(0, 3)
    : [
        {
          title: "Enterprise Client",
          clientProfile: "Global enterprise",
          challenge: "Complex risk management requirements.",
          solution: "Integrated TRUSTFLOW program.",
          outcome: "Optimized coverage and resilience.",
        },
      ];

  const mergedDiagnostics = reference.diagnostics.length
    ? reference.diagnostics
    : [
        {
          title: `${label} Risk Diagnostic`,
          description:
            "Assess current risk posture and identify priorities.",
        },
      ];

  const mergedIndustryTabs = reference.industryTabs.length
    ? reference.industryTabs
    : [
        {
          label: label,
          content: {
            industryChallenges: [
              "Complex regulatory requirements",
              "Emerging risk exposures",
              "Operational resilience gaps",
            ],
            industryRiskExposure: [
              "Liability exposure",
              "Operational disruption",
              "Regulatory non-compliance",
            ],
            recommendedOfferings: firstOffering
              ? [firstOffering.title]
              : [label],
            relatedRisks: ["Enterprise Risk"],
            relatedPlatforms: ["TRUSTFLOW Risk Diagnostic Engine"],
            industryBenefits: [
              "Risk visibility",
              "Operational continuity",
              "Regulatory alignment",
            ],
          },
        },
      ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <EnterprisePageHero
        badge={label}
        title={`Enterprise ${label}`}
        subtitle={categoryInfo.description}
        description={firstOffering?.executiveOverview || firstOffering?.shortDescription || ""}
        primaryCta={{ label: "Book Consultation", onClick: () => (window.location.href = "/contact") }}
        secondaryCta={{ label: "Request Assessment", onClick: () => (window.location.href = "/contact") }}
      />

      {/* SECTION 2: ENTERPRISE METRICS & CAPABILITIES - SINGLE SECTION */}
      <section className="w-full bg-white py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-sm font-semibold tracking-widest uppercase mb-4">
              Enterprise Overview
            </Badge>
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">
              Measurable {label} Solutions at Scale
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Enterprise-grade capabilities across our {label.toLowerCase()} practice.
            </p>
          </div>

          {/* Executive KPI Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {mergedKPIs.map((kpi, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4">
                <CardContent className="space-y-3 pt-0">
                  <Shield className="h-10 w-10 text-blue-600 mx-auto" />
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
            ))}
          </div>

          {/* Capability Cards Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mergedCapabilities.map((cap, i) => (
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

      {/* SECTION 3: INDUSTRY VERTICAL TABS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Vertical Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Deep domain expertise across industries served by {label}.
            </p>
          </div>

          <Tabs defaultValue={mergedIndustryTabs[0]?.label} orientation="vertical" className="w-full">
            <TabsList
              variant="line"
              className="w-full flex flex-col items-start gap-1 mb-6 bg-transparent"
            >
              {mergedIndustryTabs.map((tab) => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className="w-full justify-start px-4 py-2.5 text-base font-semibold data-[selected]:text-[#0B1F3A] data-[selected]:border-l-[3px] data-[selected]:border-[#1E5EFF] rounded-none bg-transparent"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {mergedIndustryTabs.map((tab) => (
              <TabsContent
                key={tab.label}
                value={tab.label}
                className="bg-white rounded-lg border border-slate-300 p-6"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        Industry Challenges
                      </h3>
                      <ul className="space-y-2">
                        {tab.content.industryChallenges.map((item, i) => (
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
                      <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-[#1E5EFF]" />
                        Industry Risk Exposure
                      </h3>
                      <ul className="space-y-2">
                        {tab.content.industryRiskExposure.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-base text-slate-700"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#1E5EFF] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-emerald-600" />
                        Recommended Offerings
                      </h3>
                      <ul className="space-y-2">
                        {tab.content.recommendedOfferings.map((item, i) => (
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
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        Related Risks
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tab.content.relatedRisks.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-base font-medium border border-red-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                        <Globe className="h-4 w-4 text-purple-600" />
                        Related Platforms
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tab.content.relatedPlatforms.map((item, i) => (
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
                      <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        Industry Benefits
                      </h3>
                      <ul className="space-y-2">
                        {tab.content.industryBenefits.map((item, i) => (
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
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* SECTION 6: BUSINESS CHALLENGES */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Business Challenges
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Enterprise risks that demand structured, multi-layered protection strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mergedChallenges.map((challenge, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle className="text-base font-bold text-[#0B1F3A]">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-600 leading-snug">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: COVERAGE ARCHITECTURE */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Coverage Architecture
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Enterprise-grade layered protection spanning primary to strategic financing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {mergedCoverage.map((layer, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow h-full"
              >
                <CardHeader className="pb-3 bg-[#0B1F3A]/[0.03] border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1E5EFF] text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <CardTitle className="text-base font-bold text-[#0B1F3A]">
                      {layer.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-3">
                  <ul className="space-y-2">
                    {layer.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-base text-slate-700"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: KEY BENEFITS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Key Benefits
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Measurable outcomes that transform risk from cost center to strategic advantage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mergedBenefits.map((benefit, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-base font-bold text-[#0B1F3A]">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-600 leading-snug">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: RELATED RISKS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Related Risks
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Comprehensive risk coverage addressing interconnected exposures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {mergedRisks.map((risk, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="w-9 h-9 rounded bg-red-50 flex items-center justify-center mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                  </div>
                  <CardTitle className="text-base font-bold text-[#0B1F3A]">
                    {risk.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-600 leading-snug">
                    {risk.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: RELATED PLATFORMS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Related Platforms
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Technology-driven intelligence for risk assessment, monitoring, and compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {mergedPlatforms.map((platform, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="w-9 h-9 rounded bg-purple-50 flex items-center justify-center mb-2">
                    <BarChart3 className="h-4 w-4 text-purple-600" />
                  </div>
                  <CardTitle className="text-base font-bold text-[#0B1F3A]">
                    {platform.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-600 leading-snug">
                    {platform.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: RELATED SOLUTIONS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Related Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Complementary offerings that enhance your enterprise risk program.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mergedSolutions.map((solution, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="w-9 h-9 rounded bg-[#EAF2FF] flex items-center justify-center mb-2">
                    <Zap className="h-4 w-4 text-[#1E5EFF]" />
                  </div>
                  <CardTitle className="text-base font-bold text-[#0B1F3A]">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-600 leading-snug">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: CASE STUDIES */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Case Studies
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Proven results for enterprises across industries and geographies.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {mergedCaseStudies.map((study, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-bold text-[#0B1F3A]">
                    {study.title}
                  </CardTitle>
                  <p className="text-sm text-slate-500 mt-1">
                    {study.clientProfile}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 flex flex-col">
                  <div>
                    <h4 className="text-base font-semibold text-[#0B1F3A] mb-1">
                      Challenge
                    </h4>
                    <p className="text-base text-slate-600 leading-snug">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0B1F3A] mb-1">
                      Solution
                    </h4>
                    <p className="text-base text-slate-600 leading-snug">
                      {study.solution}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <h4 className="text-base font-semibold text-emerald-700 mb-1">
                      Outcome
                    </h4>
                    <p className="text-base text-slate-700 leading-snug">
                      {study.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: RISK DIAGNOSTIC */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Risk Diagnostic
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Contextual assessments to understand your current risk posture and prioritize actions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {mergedDiagnostics.map((diag, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0">
                    <FileText className="h-4 w-4 text-[#1E5EFF]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1F3A] mb-1">
                      {diag.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-snug">
                      {diag.description}
                    </p>
                    <Button
                      variant="link"
                      className="px-0 mt-2 text-[#1E5EFF] hover:text-[#0B1F3A] text-sm font-semibold uppercase tracking-wide"
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

      {/* SECTION 14: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">
              Ready to Architect Your Enterprise Risk Strategy?
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Connect with our senior {label} architects to design a customized program aligned to
              your organization's unique exposures and strategic objectives.
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
                Request Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Solution Brief
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                Speak With Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}