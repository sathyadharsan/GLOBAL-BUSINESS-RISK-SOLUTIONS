

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { IndustryData } from "@/data/industryData";
import { EnterprisePageHero } from "@/components/sections/EnterprisePageHero";
import {
  Shield,
  Target,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Globe,
  TrendingUp,
  BarChart3,
} from "lucide-react";

interface EnterpriseIndustryLayoutProps {
  industry: IndustryData;
  industryTitle: string;
  industrySubtitle?: string;
}

const DEFAULT_KPIS = [
  { value: "150+", label: "Countries Covered" },
  { value: "99%", label: "Client Retention" },
  { value: "45+", label: "Platforms" },
  { value: "24/7", label: "Expert Support" },
];

const DEFAULT_CAPABILITIES = [
  {
    title: "Risk Assessment",
    desc: "Comprehensive risk identification and quantification across industry domains.",
    bullets: ["Exposure Mapping", "Risk Prioritization", "Benchmark Analysis", "Gap Identification"],
  },
  {
    title: "Coverage Design",
    desc: "Tailored insurance architecture aligned to industry-specific exposures.",
    bullets: [
      "Program Structuring",
      "Limit Optimization",
      "Carrier Selection",
      "Policy Governance",
    ],
  },
  {
    title: "Claims Advocacy",
    desc: "Dedicated claims handling with industry expertise and recovery focus.",
    bullets: [
      "Incident Response",
      "Forensic Coordination",
      "Dispute Resolution",
      "Recovery Optimization",
    ],
  },
  {
    title: "Regulatory Alignment",
    desc: "Industry-specific compliance assurance across multiple jurisdictions.",
    bullets: [
      "Multi-Jurisdictional Compliance",
      "Regulatory Reporting",
      "Audit Support",
      "Penalty Avoidance",
    ],
  },
];

const DEFAULT_INDUSTRY_TABS = [
  {
    label: "Technology",
    content: {
      industryChallenges: [
        "Rapid innovation outpacing risk controls",
        "AI and autonomous system liability",
        "Cloud concentration and systemic failure",
      ],
      industryRiskExposure: [
        "Cyber attack and ransomware",
        "Professional liability from outages",
        "Regulatory investigation and defense",
      ],
    },
  },
  {
    label: "Healthcare",
    content: {
      industryChallenges: [
        "Patient data privacy and security",
        "Clinical trial liability",
        "Medical device and pharmaceutical recall",
      ],
      industryRiskExposure: [
        "Medical malpractice",
        "Data breach notification",
        "Regulatory investigation",
      ],
    },
  },
  {
    label: "Manufacturing",
    content: {
      industryChallenges: [
        "Global supply chain vulnerability",
        "Equipment breakdown and downtime",
        "Product liability and recall",
      ],
      industryRiskExposure: [
        "Property damage and BI",
        "Supply chain disruption",
        "Product defect claims",
      ],
    },
  },
  {
    label: "Financial Services",
    content: {
      industryChallenges: [
        "Regulatory penalty severity",
        "Systemic cyber risk",
        "Professional liability from advice",
      ],
      industryRiskExposure: [
        "Regulatory investigation",
        "Data breach of customer records",
        "Investment advice liability",
      ],
    },
  },
  {
    label: "Energy",
    content: {
      industryChallenges: [
        "Construction delay and cost escalation",
        "Production shortfall from weather",
        "Grid cyber security",
      ],
      industryRiskExposure: [
        "Construction risk",
        "Production guarantee trigger",
        "Natural catastrophe damage",
      ],
    },
  },
];

export function EnterpriseIndustryLayout({ 
  industry, 
  industryTitle,
  industrySubtitle 
}: EnterpriseIndustryLayoutProps) {
  const kpis = DEFAULT_KPIS;
  const capabilities = DEFAULT_CAPABILITIES;
  const industryTabs = DEFAULT_INDUSTRY_TABS;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <EnterprisePageHero
        badge="Industry Practice"
        title={`${industryTitle} Risk Architecture`}
        subtitle={industrySubtitle || "Enterprise-grade risk solutions for industry-specific exposures"}
        primaryCta={{ label: "Book Assessment", onClick: () => (window.location.href = "/contact") }}
        secondaryCta={{ label: "Request Industry Brief", onClick: () => (window.location.href = "/contact") }}
      />

      {/* SECTION 2: ENTERPRISE METRICS & CAPABILITIES */}
      <section className="w-full bg-white py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-sm font-semibold tracking-widest uppercase mb-4">
              Enterprise Overview
            </Badge>
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">
              Measurable Risk Solutions at Scale
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Enterprise-grade capabilities designed for complex industry risk landscapes.
            </p>
          </div>

          {/* Executive KPI Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {kpis.map((kpi, i) => (
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
            {capabilities.map((cap, i) => (
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
              Deep domain expertise across technology, healthcare, manufacturing,
              energy, and financial services.
            </p>
          </div>

          <Tabs defaultValue={industryTabs[0]?.label} orientation="vertical" className="w-full">
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
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        Related Risks
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {["Cyber Risk", "Supply Chain Risk", "Climate Risk", "Operational Risk"].map((item, i) => (
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
                        {["Risk Diagnostic Engine", "Contract Intelligence", "Regulatory Intelligence", "Climate Analytics"].map((item, i) => (
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
                        {["Risk reduction", "Operational continuity", "Regulatory alignment", "Financial protection"].map((item, i) => (
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

      {/* SECTION 4: INDUSTRY CHALLENGES */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Challenges
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Critical risk categories demanding structured, multi-layered protection
              strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.risks?.map((risk, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle className="text-base font-bold text-[#0B1F3A]">
                    {risk.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-600 leading-snug">
                    {risk.description}
                  </p>
                </CardContent>
              </Card>
            )) || []}
          </div>
        </div>
      </section>

      {/* SECTION 5: RISK EXPOSURE */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Risk Exposure
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Primary exposure types requiring industry-specific risk transfer solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.risks?.map((risk, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center mb-2">
                    <Target className="h-4 w-4 text-blue-600" />
                  </div>
                  <CardTitle className="text-base font-bold text-[#0B1F3A]">
                    {risk.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-600 leading-snug">
                    {risk.description}
                  </p>
                </CardContent>
              </Card>
            )) || []}
          </div>
        </div>
      </section>

      {/* SECTION 6: RELATED RISKS */}
      <section className="py-14 bg-white border-b border-slate-200">
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
            {[
              { title: "Cyber Risk", description: "First and third-party cyber coverage with incident response." },
              { title: "Supply Chain Risk", description: "Contingent BI and dependency mapping across tiers." },
              { title: "Climate Risk", description: "Physical and transition risk with parametric coverage." },
              { title: "Operational Risk", description: "Business interruption, equipment breakdown, and resilience." },
            ].map((risk, i) => (
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

      {/* SECTION 7: RELATED OFFERINGS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Related Offerings
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Specialized insurance and risk transfer products for {industryTitle.toLowerCase()}.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Industry Risk Program", description: "Integrated multi-line risk program aligned to industry requirements." },
              { title: "Cyber Insurance", description: "First and third-party coverage with incident response." },
              { title: "Executive Protection", description: "D&O, EPL, and fiduciary liability coverage." },
              { title: "Parametric Solutions", description: "Trigger-based risk transfer for rapid liquidity." },
            ].map((offering, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="w-9 h-9 rounded bg-[#EAF2FF] flex items-center justify-center mb-2">
                    <Shield className="h-4 w-4 text-[#1E5EFF]" />
                  </div>
                  <CardTitle className="text-base font-bold text-[#0B1F3A]">
                    {offering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-600 leading-snug">
                    {offering.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: RELATED PLATFORMS */}
      <section className="py-14 bg-white border-b border-slate-200">
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
            {[
              { title: "Risk Diagnostic Engine", description: "AI-powered assessment across 20 domains and 200+ risk categories." },
              { title: "Contract Intelligence", description: "Automated contract risk scoring and insurance gap detection." },
              { title: "Regulatory Intelligence", description: "Real-time monitoring of 150+ jurisdictions with compliance alerts." },
              { title: "Climate Analytics", description: "TCFD-aligned scenario analysis with asset-level physical risk modeling." },
            ].map((platform, i) => (
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

      {/* SECTION 9: INDUSTRY USE CASES */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Use Cases
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Real-world implementations of risk architecture for {industryTitle.toLowerCase()} organizations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {industry.solutions?.map((solution, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-bold text-[#0B1F3A]">
                    {solution.risk}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 flex flex-col">
                  <ul className="space-y-2">
                    {solution.mitigation.slice(0, 3).map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-base text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-base font-semibold text-emerald-700">
                      Outcome: {solution.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )) || []}
          </div>
        </div>
      </section>

      {/* SECTION 10: INDUSTRY DIAGNOSTIC */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Diagnostic
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Contextual assessments to understand your current risk posture and prioritize actions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Industry Risk Assessment", description: "Evaluate sector-specific exposures and coverage gaps." },
              { title: "Compliance Gap Analysis", description: "Review regulatory requirements and penalty exposure." },
              { title: "Claims Readiness Review", description: "Assess incident response and recovery preparedness." },
              { title: "Program Optimization Review", description: "Analyze current coverage for limit and cost efficiency." },
            ].map((diag, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0">
                    <FileText className="h-4 w-4 text-[#1E5EFF]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1F3A] mb-1">{diag.title}</h3>
                    <p className="text-base text-slate-600 leading-snug">{diag.description}</p>
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

      {/* SECTION 11: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">
              Ready to Architect Your {industryTitle} Risk Strategy?
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Connect with our industry practice leaders to design a customized
              program aligned to your organization&apos;s unique exposures and
              strategic objectives.
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
                Download Industry Brief
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