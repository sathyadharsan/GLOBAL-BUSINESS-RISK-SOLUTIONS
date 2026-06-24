

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import type { DynamicPageContent } from "@/data/siteContent";
import { EnterprisePageHero } from "@/components/sections/EnterprisePageHero";
import {
  ShieldIcon as ShieldIconIcon,
  Target,
  AlertTriangle,
  CheckCircle2,
  Download,
  Globe,
  TrendingUp,
  BarChart3Icon as BarChart3IconIcon,
  Building2,
  Activity,
  ShieldIcon,
  BarChart3Icon,
} from "lucide-react";

interface StandardSolutionLayoutProps {
  data: DynamicPageContent;
  relatedRisks?: { title: string; description: string; href?: string }[];
  relatedOfferings?: { title: string; description: string; href?: string }[];
  relatedPlatforms?: { title: string; description: string; href?: string }[];
  industryTabs?: {
    label: string;
    content: {
      industryChallenges: string[];
      industryRiskExposure: string[];
      recommendedOfferings: string[];
      relatedRisks: string[];
      relatedPlatforms: string[];
      industryBenefits: string[];
    };
  }[];
}

const DEFAULT_KPIS = [
  { value: "150+", label: "Countries Covered", description: "Global reach and expertise" },
  { value: "99%", label: "Client Retention", description: "Long-term trusted partnerships" },
  { value: "45+", label: "Platforms", description: "AI-powered risk tools" },
  { value: "24/7", label: "Expert Support", description: "Round-the-clock advisory" },
];

const DEFAULT_CAPABILITIES = [
  {
    title: "Coverage Architecture",
    desc: "Multi-layered protection designed for enterprise scale and complexity.",
    bullets: ["Global Protection", "Industry Alignment", "Risk Transfer", "Compliance Support"],
    icon: ShieldIconIcon,
  },
  {
    title: "Program Structuring",
    desc: "Optimized limits, deductibles, and retention aligned to risk appetite.",
    bullets: ["Limit Optimization", "Deductible Strategy", "Captive Integration", "Carrier Selection"],
    icon: Target,
  },
  {
    title: "Risk Analytics",
    desc: "Data-driven insights for underwriting, claims, and portfolio management.",
    bullets: ["Predictive Modeling", "Loss Analytics", "Benchmarking", "Exposure Mapping"],
    icon: BarChart3IconIcon,
  },
  {
    title: "Governance & Compliance",
    desc: "Regulatory alignment across jurisdictions with audit-ready documentation.",
    bullets: ["Multi-Jurisdictional Compliance", "Regulatory Reporting", "Audit Trails", "Policy Governance"],
    icon: Globe,
  },
];

const DEFAULT_INDUSTRY_TABS = [
  {
    label: "Technology",
    content: {
      industryChallenges: ["Rapid innovation outpacing risk controls", "AI and autonomous system liability", "Cloud concentration and systemic failure"],
      industryRiskExposure: ["Cyber attack and ransomware", "Professional liability from outages", "Regulatory investigation and defense"],
      recommendedOfferings: ["Cyber Insurance - First Party", "Technology Errors & Omissions", "AI & Algorithm Liability Insurance"],
      relatedRisks: ["Cyber Risk", "Tech E&O", "AI Risk"],
      relatedPlatforms: ["Cyber Risk Maturity Assessment", "Real-Time Risk Intelligence Feed", "AI Contract Risk Analytics"],
      industryBenefits: ["Innovation confidence", "Investor-grade protection", "Global scaling assurance"],
    },
  },
  {
    label: "Healthcare",
    content: {
      industryChallenges: ["Patient data privacy and security", "Clinical trial liability", "Medical device and pharmaceutical recall"],
      industryRiskExposure: ["Medical malpractice", "Data breach notification", "Regulatory investigation"],
      recommendedOfferings: ["Healthcare Industry Risk Program", "Cyber Insurance - Regulatory Defense", "Product Liability Insurance"],
      relatedRisks: ["Medical Malpractice", "Data Breach", "Product Liability"],
      relatedPlatforms: ["Risk Diagnostic Engine", "Policy Gap Analyzer", "Cyber Due Diligence"],
      industryBenefits: ["Patient safety assurance", "Regulatory compliance", "Product launch protection"],
    },
  },
  {
    label: "Manufacturing",
    content: {
      industryChallenges: ["Global supply chain vulnerability", "Equipment breakdown and downtime", "Product liability and recall"],
      industryRiskExposure: ["Property damage and BI", "Supply chain disruption", "Product defect claims"],
      recommendedOfferings: ["Manufacturing Industry Risk Program", "Property All-Risks Insurance", "Product Recall Insurance"],
      relatedRisks: ["Property Damage", "Supply Chain", "Product Liability"],
      relatedPlatforms: ["Supply Chain Risk Visualizer", "Risk Diagnostic Engine", "Claims Velocity Dashboard"],
      industryBenefits: ["Operational continuity", "Supply chain resilience", "Product quality confidence"],
    },
  },
];

const DEFAULT_FRAMEWORK = {
  title: "Risk Architecture Framework",
  subtitle: "A proven methodology for designing, implementing, and optimizing enterprise risk programs.",
  steps: [
    { title: "Discover", description: "Identify and map all enterprise risk exposures across operations, assets, and liabilities." },
    { title: "Analyze", description: "Quantify risks using proprietary models, historical data, and peer benchmarking." },
    { title: "Architect", description: "Design optimal risk transfer structures matching business objectives and budget." },
    { title: "Implement", description: "Place insurance programs, negotiate terms, and execute risk transfer mechanisms." },
    { title: "Monitor", description: "Continuous surveillance of emerging risks and claims performance optimization." },
  ],
};

const DEFAULT_BUSINESS_IMPACT = [
  { title: "Risk Reduction", description: "Structured identification, quantification, and mitigation of enterprise-wide exposures.", icon: AlertTriangle },
  { title: "Operational Continuity", description: "Rapid liquidity, crisis response, and business continuity funding when incidents occur.", icon: Activity },
  { title: "Regulatory Alignment", description: "Multi-jurisdictional compliance assurance with audit-ready documentation and reporting.", icon: Globe },
  { title: "Financial Protection", description: "Optimized retention, transfer, and financing to preserve balance sheet integrity.", icon: TrendingUp },
];

export function StandardSolutionLayout({
  data,
  relatedRisks = [],
  relatedOfferings = [],
  relatedPlatforms = [],
  industryTabs = DEFAULT_INDUSTRY_TABS,
}: StandardSolutionLayoutProps) {
  const framework = DEFAULT_FRAMEWORK;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <EnterprisePageHero
        badge="Risk Solution"
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        primaryCta={{ label: "Book Consultation", onClick: () => (window.location.href = "/contact") }}
        secondaryCta={{ label: "Request Assessment", onClick: () => (window.location.href = "/contact") }}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {DEFAULT_KPIS.map((kpi, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4">
                <CardContent className="space-y-3 pt-0">
                  <ShieldIconIcon className="h-10 w-10 text-blue-600 mx-auto" />
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
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEFAULT_CAPABILITIES.map((cap, i) => {
              const CapIcon = cap.icon;
              return (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded bg-[#EAF2FF] flex items-center justify-center mb-3">
                      <CapIcon className="h-5 w-5 text-[#1E5EFF]" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY FEATURES */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-3">Key Features & Components</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, i) => (
              <Card key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-primary">{feature.title}</h3>
                </div>
                <p className="text-base text-muted-foreground ml-8">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: INDUSTRY VERTICAL TABS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Vertical Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Deep domain expertise across technology, healthcare, manufacturing, energy, and financial services.
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
                          <li key={i} className="flex items-start gap-3 text-base text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                        <ShieldIcon className="h-4 w-4 text-[#1E5EFF]" />
                        Industry Risk Exposure
                      </h3>
                      <ul className="space-y-2">
                        {tab.content.industryRiskExposure.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-base text-slate-700">
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
                          <li key={i} className="flex items-start gap-3 text-base text-slate-700">
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
                          <span key={i} className="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-base font-medium border border-red-200">
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
                          <span key={i} className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-base font-medium border border-purple-200">
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
                          <li key={i} className="flex items-start gap-3 text-base text-slate-700">
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

      {/* SECTION 5: SOLUTION ARCHITECTURE FRAMEWORK */}
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
          <div className="grid md:grid-cols-5 gap-4 text-center">
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

      {/* SECTION 6: BUSINESS IMPACT */}
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
            {DEFAULT_BUSINESS_IMPACT.map((impact, i) => {
              const ImpactIcon = impact.icon;
              return (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center">
                  <CardContent className="p-6">
                    <ImpactIcon className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
                    <h4 className="font-bold text-[#0B1F3A] mb-2 text-lg">{impact.title}</h4>
                    <p className="text-base text-slate-600 leading-snug">{impact.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: RELATED RISKS */}
      {relatedRisks.length > 0 && (
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Related Risks</h2>
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
                      <p className="text-base text-slate-600 leading-snug">{risk.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 8: RELATED OFFERINGS */}
      {relatedOfferings.length > 0 && (
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Related Offerings</h2>
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
                        <ShieldIcon className="h-4 w-4 text-[#1E5EFF]" />
                      </div>
                      <CardTitle className="text-base font-bold text-[#0B1F3A] group-hover:text-blue-600 transition-colors">
                        {offering.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-slate-600 leading-snug">{offering.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 9: RELATED PLATFORMS */}
      {relatedPlatforms.length > 0 && (
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Related Platforms</h2>
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
                        <BarChart3Icon className="h-4 w-4 text-purple-600" />
                      </div>
                      <CardTitle className="text-base font-bold text-[#0B1F3A] group-hover:text-blue-600 transition-colors">
                        {platform.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-slate-600 leading-snug">{platform.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 10: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">
              Ready to Architect Your {data.title} Strategy?
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Connect with our senior risk architects for a comprehensive assessment and customized risk transfer architecture.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
