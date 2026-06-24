

import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { solutionsEnterpriseData } from "@/data/solutionsEnterpriseData";
import { EnterprisePageHero } from "@/components/sections/EnterprisePageHero";
import {
  Shield,
  Target,
  AlertTriangle,
  CheckCircle2,
  Download,
  Globe,
  TrendingUp,
  BarChart3,
  Building2,
  Activity,
} from "lucide-react";

interface EnterpriseSolutionDetailLayoutProps {
  slug: string;
}

export function EnterpriseSolutionDetailLayout({
  slug,
}: EnterpriseSolutionDetailLayoutProps) {
  const data = solutionsEnterpriseData[slug];
  if (!data) return null;

  const { hero, kpis, capabilities, industryTabs, framework, businessImpact, relatedRisks, relatedOfferings, relatedPlatforms, industryMatrix, globalProgramStructure, executiveCTA } = data;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <EnterprisePageHero
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        primaryCta={{ label: hero.primaryCTA, onClick: () => (window.location.href = "/contact") }}
        secondaryCta={{ label: hero.secondaryCTA, onClick: () => (window.location.href = "/contact") }}
      />

      {/* SECTION 2: ENTERPRISE METRICS & CAPABILITIES */}
      <section className="w-full bg-white py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
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

          {/* KPI METRICS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {kpis.map((kpi, i) => {
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
                      {kpi.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CAPABILITY CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => {
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
                  <CardContent className="space-y-3 pt-0">
                    <p className="text-base text-slate-600 leading-snug">
                      {cap.description}
                    </p>
                    <ul className="space-y-2">
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

      {/* SECTION 3: VERTICAL TABS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Vertical Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Deep domain expertise across technology, healthcare, manufacturing,
              energy, and financial services.
            </p>
          </div>

          <Tabs
            defaultValue={industryTabs[0]?.label}
            orientation="vertical"
            className="w-full"
          >
            <TabsList
              variant="line"
              className="w-full flex flex-col items-start gap-1 mb-6 bg-transparent"
            >
              {industryTabs.map((tab) => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className="w-full justify-start px-4 py-2.5 text-base font-semibold data-[selected]:text-[#0B1F3A] data-[selected]:border-l-[3px] data-[selected]:border-[#1E5EFF] rounded-none bg-transparent"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {industryTabs.map((tab) => (
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
                        Risk Exposure
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
                        Recommended Architecture
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
                          <Link
                            key={i}
                            to={`/risks/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                          >
                            <span className="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-base font-medium border border-red-200 cursor-pointer hover:bg-red-100 transition-colors">
                              {item}
                            </span>
                          </Link>
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
                        Sector-Specific Benefits
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

      {/* SECTION 4: SOLUTION ARCHITECTURE FRAMEWORK */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-primary font-serif tracking-tight">
              {framework.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto leading-snug">
              {framework.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {framework.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{i + 1}</span>
                </div>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-500 max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: BUSINESS IMPACT FRAMEWORK */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Business Impact Framework
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Quantifiable outcomes delivered through strategic risk architecture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessImpact.map((impact, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <CardContent className="p-6">
                  <Activity className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
                  <h4 className="font-bold text-[#0B1F3A] mb-2 text-lg">
                    {impact.title}
                  </h4>
                  <p className="text-base text-slate-600 leading-snug">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: RELATED RISKS */}
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
            {relatedRisks.map((risk, i) => (
              <Link to={risk.href || "#"} key={i} className="block group">
                <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md group-hover:border-red-500 transition-all h-full">
                  <CardHeader className="pb-3">
                    <div className="w-9 h-9 rounded bg-red-50 flex items-center justify-center mb-2 group-hover:bg-red-100 transition-colors">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                    </div>
                    <CardTitle className="text-base font-bold text-[#0B1F3A] group-hover:text-red-600 transition-colors">
                      {risk.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-slate-600 leading-snug">
                      {risk.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: RELATED OFFERINGS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Related Offerings
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Complementary insurance and risk transfer products.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedOfferings.map((offering, i) => (
              <Link to={offering.href || "#"} key={i} className="block group">
                <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md group-hover:border-blue-500 transition-all h-full">
                  <CardHeader className="pb-3">
                    <div className="w-9 h-9 rounded bg-[#EAF2FF] flex items-center justify-center mb-2 group-hover:bg-blue-100 transition-colors">
                      <Shield className="h-4 w-4 text-[#1E5EFF]" />
                    </div>
                    <CardTitle className="text-base font-bold text-[#0B1F3A] group-hover:text-blue-600 transition-colors">
                      {offering.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-slate-600 leading-snug">
                      {offering.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: RELATED PLATFORMS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Related Platforms
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              AI-powered tools for risk assessment, monitoring, and compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedPlatforms.map((platform, i) => (
              <Link to={platform.href || "#"} key={i} className="block group">
                <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md group-hover:border-blue-500 transition-all h-full">
                  <CardHeader className="pb-3">
                    <div className="w-9 h-9 rounded bg-purple-50 flex items-center justify-center mb-2 group-hover:bg-purple-100 transition-colors">
                      <BarChart3 className="h-4 w-4 text-purple-600" />
                    </div>
                    <CardTitle className="text-base font-bold text-[#0B1F3A] group-hover:text-blue-600 transition-colors">
                      {platform.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-slate-600 leading-snug">
                      {platform.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: INDUSTRY APPLICABILITY MATRIX */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Applicability Matrix
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Sector-specific risk architectures tailored to industry exposures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {industryMatrix.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#EAF2FF] flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="h-4 w-4 text-[#1E5EFF]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0B1F3A] mb-1">
                      {item.industry}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.applicability}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: GLOBAL PROGRAM STRUCTURE */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              {slug === "global-program-architecture" ? "Global Program Structure Options" : "Program Structure Options"}
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              From local compliance to global coordination, we design programs at scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalProgramStructure.map((program, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow h-full"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#1E5EFF] text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <CardTitle className="text-base font-bold text-[#0B1F3A]">
                      {program.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-slate-500 leading-snug">
                    {program.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5">
                    {program.features.map((f, j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-600 flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">
              {executiveCTA.title}
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              {executiveCTA.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                size="lg"
                className="bg-[#1E5EFF] hover:bg-[#1E5EFF]/90 text-white font-semibold text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                {executiveCTA.primaryCTA}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                {executiveCTA.secondaryCTA}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
