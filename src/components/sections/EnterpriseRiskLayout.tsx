

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, AlertTriangle, CheckCircle2, ChevronRight, Download, FileText, Globe, TrendingUp, BarChart3 } from "lucide-react";
import { riskCategories, risksData } from "@/data/risksData";
import { cn } from "@/lib/utils";
import { EnterprisePageHero } from "@/components/sections/EnterprisePageHero";

interface EnterpriseRiskLayoutProps {
  categoryId: string;
  categoryLabel: string;
  categoryDescription: string;
  heroImage?: string;
  categoryBadge?: string;
  heroHeadline?: string;
  heroSubtitle?: string;
  kpis?: { value: string; label: string }[];
  capabilities?: {
    title: string;
    desc: string;
    bullets: string[];
  }[];
  categoryTabs?: {
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
  children?: React.ReactNode;
}

const DEFAULT_RISK_KPIS = [
  { value: "72+", label: "Enterprise Risks" },
  { value: "150+", label: "Countries Covered" },
  { value: "99%", label: "Risk Intelligence Accuracy" },
  { value: "24/7", label: "Expert Advisory" },
];

const DEFAULT_RISK_CAPABILITIES = [
  {
    title: "Risk Identification",
    desc: "Comprehensive identification of enterprise risks across all domains, industries, and geographies.",
    bullets: ["Risk Taxonomy", "Exposure Mapping", "Threat Intelligence", "Scenario Analysis"],
  },
  {
    title: "Risk Quantification",
    desc: "Financial modeling and probabilistic analysis to quantify potential losses and likelihood.",
    bullets: ["PML Modeling", "VaR Analysis", "Loss Distribution", "Tail Risk Assessment"],
  },
  {
    title: "Coverage Mapping",
    desc: "Insurance gap analysis and coverage optimization across all risk categories and policies.",
    bullets: ["Policy Review", "Gap Analysis", "Limit Optimization", "Sublimit Management"],
  },
  {
    title: "Claims Preparedness",
    desc: "Incident response planning and claims advocacy to maximize recovery when events occur.",
    bullets: ["Response Planning", "Forensic Support", "Claims Advocacy", "Recovery Optimization"],
  },
];

const DEFAULT_RISK_TABS = [
  {
    label: "Overview",
    content: {
      industryChallenges: [
        "Escalating frequency and severity of cyber threats",
        "Regulatory enforcement intensifying globally",
        "Supply chain complexity increasing systemic risk",
        "Climate change driving physical and transition risk",
      ],
      industryRiskExposure: [
        "Ransomware, data breach, and supply chain attacks",
        "Regulatory fines under GDPR, HIPAA, CCPA, and emerging frameworks",
        "Business interruption from cyber and physical events",
        "Directors and officers personal liability exposure",
      ],
      recommendedOfferings: [
        "Cyber Insurance — First-Party",
        "Cyber Insurance — Third-Party Liability",
        "Directors & Officers Liability Insurance",
        "Business Interruption Insurance",
      ],
      relatedRisks: [
        "Ransomware Attack",
        "Data Breach",
        "Regulatory Investigation",
        "Business Interruption",
      ],
      relatedPlatforms: [
        "Cyber Risk Maturity Assessment",
        "Real-Time Risk Intelligence Feed",
        "Supply Chain Risk Visualizer",
        "AI-Powered Contract Risk Analytics",
      ],
      industryBenefits: [
        "Comprehensive risk visibility",
        "Optimized insurance program",
        "Rapid incident response",
        "Board-level confidence",
      ],
    },
  },
  {
    label: "Financial Impact",
    content: {
      industryChallenges: [
        "Ransom demands and recovery costs escalating",
        "Regulatory fines reaching billions for enterprises",
        "Class action settlements exceeding $500M",
        "Business interruption costing millions per hour",
      ],
      industryRiskExposure: [
        "Cyber incident costs averaging $4.45M per breach",
        "Regulatory defense costs beginning immediately",
        "Directors and officers defense costs: $5M-$40M",
        "Business interruption: $5,600-$9,000+ per minute",
      ],
      recommendedOfferings: [
        "Cyber Insurance — First-Party",
        "Directors & Officers Liability Insurance",
        "Business Interruption Insurance",
        "Crime & Fidelity Insurance",
      ],
      relatedRisks: [
        "Ransomware Attack",
        "Data Breach",
        "Business Email Compromise",
        "Regulatory Investigation",
      ],
      relatedPlatforms: [
        "Risk Diagnostic Engine",
        "Executive Dashboard",
        "Policy Intelligence Platform",
        "Real-Time Risk Intelligence Feed",
      ],
      industryBenefits: [
        "Financial loss mitigation",
        "Rapid liquidity access",
        "Balance sheet protection",
        "Shareholder value preservation",
      ],
    },
  },
  {
    label: "Operational Impact",
    content: {
      industryChallenges: [
        "Production systems encrypted and rendered inoperable",
        "Supply chain disruption affecting all downstream customers",
        "Workforce disruption from strikes or mass resignation",
        "Technology obsolescence eroding competitive advantage",
      ],
      industryRiskExposure: [
        "Complete operational shutdown from ransomware",
        "Supply chain cascading failures",
        "Single-source supplier dependency",
        "Geographic concentration amplifying events",
      ],
      recommendedOfferings: [
        "Business Interruption Insurance",
        "Contingent Business Interruption Insurance",
        "Supply Chain Risk Solutions",
        "Parametric Insurance Solutions",
      ],
      relatedRisks: [
        "Ransomware Attack",
        "Supply Chain Cyber Attack",
        "Single-Source Supplier Failure",
        "Workforce Disruption",
      ],
      relatedPlatforms: [
        "Supply Chain Risk Visualizer",
        "Climate Scenario Analysis",
        "Risk Intelligence Feed",
        "Executive Dashboard",
      ],
      industryBenefits: [
        "Operational continuity",
        "Rapid recovery capability",
        "Supply chain resilience",
        "Business continuity assurance",
      ],
    },
  },
  {
    label: "Legal Exposure",
    content: {
      industryChallenges: [
        "Class action lawsuits multiplying damages across affected populations",
        "Employment practices claims increasing in frequency and severity",
        "Product liability claims requiring massive defense resources",
        "Contract disputes creating unlimited liability exposure",
      ],
      industryRiskExposure: [
        "Class action settlements: $5M-$500M+",
        "Employment practices claims: $10M-$60M+ class actions",
        "Directors and officers personal liability",
        "Intellectual property infringement: $5M-$100M+",
      ],
      recommendedOfferings: [
        "Directors & Officers Liability Insurance",
        "Employment Practices Liability Insurance",
        "Product Liability Insurance",
        "Professional Indemnity Insurance",
      ],
      relatedRisks: [
        "Class Action Lawsuit",
        "Employment Practices Liability",
        "Directors & Officers Personal Liability",
        "Product Liability",
      ],
      relatedPlatforms: [
        "Contract Intelligence Platform",
        "M&A Due Diligence Suite",
        "Policy Intelligence Platform",
        "Risk Diagnostic Engine",
      ],
      industryBenefits: [
        "Legal defense funding",
        "Settlement capacity",
        "Reputation protection",
        "Board member confidence",
      ],
    },
  },
  {
    label: "Regulatory Exposure",
    content: {
      industryChallenges: [
        "GDPR, HIPAA, CCPA, DPDP enforcement intensifying globally",
        "Multi-jurisdictional compliance requirements conflicting",
        "Antitrust and anti-bribery fines reaching billions",
        "Emerging AI and climate regulations creating new obligations",
      ],
      industryRiskExposure: [
        "GDPR fines: up to 4% of global revenue",
        "Antitrust fines: up to 10% of global revenue",
        "FCPA violations: $1M-$2B+",
        "EU AI Act fines: up to €35M or 7% of global revenue",
      ],
      recommendedOfferings: [
        "Directors & Officers Liability Insurance",
        "Cyber Insurance — Regulatory Defense",
        "Professional Indemnity Insurance",
        "Political Risk Insurance",
      ],
      relatedRisks: [
        "Regulatory Investigation & Fines",
        "Data Privacy & Protection",
        "AI Governance Failure",
        "ESG Risk",
      ],
      relatedPlatforms: [
        "Regulatory Intelligence Platform",
        "Cross-Border Insurance Compliance Checker",
        "Contract Intelligence Platform",
        "Risk Diagnostic Engine",
      ],
      industryBenefits: [
        "Multi-jurisdictional compliance",
        "Defense cost coverage",
        "Regulatory navigation support",
        "Consent decree management",
      ],
    },
  },
  {
    label: "Insurance Solutions",
    content: {
      industryChallenges: [
        "Coverage gaps in traditional insurance programs",
        "Cyber exclusions leaving critical exposures uninsured",
        "Policy limits inadequate for catastrophic scenarios",
        "Claims disputes delaying recovery after incidents",
      ],
      industryRiskExposure: [
        "Silent cyber exclusions in property and liability policies",
        "Regulatory defense sublimits insufficient for investigations",
        "Business interruption indemnity periods too short",
        "D&O Side A gaps leaving directors personally exposed",
      ],
      recommendedOfferings: [
        "Cyber Insurance — First-Party",
        "Cyber Insurance — Third-Party Liability",
        "Cyber Insurance — Regulatory Defense",
        "Directors & Officers Liability Insurance",
      ],
      relatedRisks: [
        "Ransomware Attack",
        "Data Breach",
        "Regulatory Investigation",
        "Directors & Officers Personal Liability",
      ],
      relatedPlatforms: [
        "Policy Intelligence Platform",
        "Contract Intelligence Platform",
        "Risk Diagnostic Engine",
        "Executive Dashboard",
      ],
      industryBenefits: [
        "Comprehensive coverage architecture",
        "Limit adequacy validation",
        "Claims advocacy",
        "Market access across 150+ jurisdictions",
      ],
    },
  },
  {
    label: "Risk Mitigation Strategy",
    content: {
      industryChallenges: [
        "Inability to prioritize risks objectively across the enterprise",
        "Fragmented risk management across business units",
        "Insufficient board-level risk reporting",
        "Risk controls not aligned to actual threat landscape",
      ],
      industryRiskExposure: [
        "Cascading failures from interconnected risks",
        "Reputational damage from social media amplification",
        "Climate physical and transition risks accelerating",
        "Emerging technology risks outpacing controls",
      ],
      recommendedOfferings: [
        "Enterprise Risk Management Consulting",
        "Climate Risk & Resilience Advisory",
        "Cyber Risk Advisory",
        "Supply Chain Risk Advisory",
      ],
      relatedRisks: [
        "AI Governance Failure",
        "Climate Change — Physical Risk",
        "Climate Change — Transition Risk",
        "Reputational Damage",
      ],
      relatedPlatforms: [
        "Risk Diagnostic Engine",
        "Executive Dashboard",
        "Real-Time Risk Intelligence Feed",
        "Climate Analytics Platform",
      ],
      industryBenefits: [
        "Holistic risk visibility",
        "Prioritized mitigation roadmap",
        "Board-level reporting",
        "Executive confidence",
      ],
    },
  },
  {
    label: "TRUSTFLOW Advisory",
    content: {
      industryChallenges: [
        "Complex risk landscape requiring specialized expertise",
        "Global regulatory complexity requiring advisory support",
        "Board and C-suite needing actionable risk intelligence",
        "Rapidly evolving threat landscape requiring ongoing counsel",
      ],
      industryRiskExposure: [
        "Inadequate risk governance frameworks",
        "Misaligned insurance programs",
        "Unidentified coverage gaps",
        "Slow incident response capability",
      ],
      recommendedOfferings: [
        "Enterprise Risk Management Consulting",
        "Regulatory & Compliance Advisory",
        "Climate Risk & Resilience Advisory",
        "M&A Transaction Risk Advisory",
      ],
      relatedRisks: [
        "Regulatory Compliance Failure",
        "M&A — Transaction Risk",
        "ESG Risk",
        "Contract Risk Exposure",
      ],
      relatedPlatforms: [
        "Risk Diagnostic Engine",
        "Contract Intelligence Platform",
        "Executive Dashboard",
        "Real-Time Risk Intelligence Feed",
      ],
      industryBenefits: [
        "Senior advisory access",
        "Customized risk strategy",
        "Ongoing counsel and support",
        "Board-level confidence",
      ],
    },
  },
];

export function EnterpriseRiskLayout({
  categoryId,
  categoryLabel,
  categoryDescription,
  heroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  categoryBadge = "Enterprise Risk Architecture",
  heroHeadline,
  heroSubtitle,
  kpis = DEFAULT_RISK_KPIS,
  capabilities = DEFAULT_RISK_CAPABILITIES,
  categoryTabs = DEFAULT_RISK_TABS,
  children,
}: EnterpriseRiskLayoutProps) {
  const category =
    categoryLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const risksInCategory = risksData;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <EnterprisePageHero
        badge={categoryBadge}
        title={heroHeadline || `${categoryLabel} Risk Architecture`}
        subtitle={heroSubtitle || categoryDescription}
        capabilityTags={["Enterprise Risk", "Cyber Security", "Risk Analytics", "Compliance", "Business Continuity"]}
        stats={[
          { value: "78+", label: "Risk Domains" },
          { value: "24/7", label: "Monitoring" },
          { value: "AI", label: "Powered" },
          { value: "Enterprise", label: "Scale" },
        ]}
        primaryCta={{ label: "Book Consultation", onClick: () => (window.location.href = "/contact") }}
        secondaryCta={{ label: "Run Risk Diagnostic", onClick: () => (window.location.href = "/contact") }}
      />

      {/* SECTION 2: EXECUTIVE OVERVIEW */}
      <section className="w-full bg-white py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Executive Overview
            </Badge>
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">
              Enterprise Risk Intelligence Framework
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              {categoryDescription}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: BUSINESS IMPACT METRICS */}
      <section className="w-full bg-slate-50 py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kpis.map((kpi, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4"
              >
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
        </div>
      </section>

      {/* SECTION 4: CAPABILITY ARCHITECTURE */}
      <section className="w-full bg-white py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">
              Capability Architecture
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Enterprise-grade risk management capabilities spanning identification, quantification, transfer, and mitigation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
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

      {/* SECTION 5: VERTICAL TAB FRAMEWORK */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Risk Intelligence by Domain
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Deep domain expertise across financial, operational, legal, regulatory, and strategic risk categories.
            </p>
          </div>

          <Tabs defaultValue={categoryTabs[0]?.label} orientation="vertical" className="w-full">
            <TabsList
              variant="line"
              className="w-full flex flex-col items-start gap-1 mb-6 bg-transparent"
            >
              {categoryTabs.map((tab) => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className="w-full justify-start px-4 py-2.5 text-base font-semibold data-[selected]:text-[#0B1F3A] data-[selected]:border-l-[3px] data-[selected]:border-[#1E5EFF] rounded-none bg-transparent"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categoryTabs.map((tab) => (
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
                          <Link
                            key={i}
                            to={`/risks/${Object.keys(risksData).find(key => risksData[key].label === item) || ""}`}
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
                        Business Benefits
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

      {/* SECTION 6: RISK LIBRARY */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Risk Library
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Comprehensive risk intelligence across enterprise, operational, cyber, regulatory, and emerging domains.
            </p>
          </div>
          {children}
        </div>
      </section>

      {/* SECTION 7: RELATED SOLUTIONS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Related Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Integrated offerings designed to address the full spectrum of enterprise risk.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Enterprise Program Design", description: "Integrated multi-line risk program aligned to strategy and risk appetite." },
              { title: "Risk Diagnostic Engine", description: "AI-powered assessment across 20 domains and 200+ risk categories." },
              { title: "Contract Intelligence", description: "Automated contract risk scoring, indemnification analysis, and insurance gap detection." },
              { title: "Regulatory Intelligence", description: "Real-time monitoring of 150+ jurisdictions with compliance alerts and filing support." },
            ].map((solution, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="w-9 h-9 rounded bg-[#EAF2FF] flex items-center justify-center mb-2">
                    <BarChart3 className="h-4 w-4 text-[#1E5EFF]" />
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

      {/* SECTION 8: INDUSTRY IMPACT MAPPING */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Impact Mapping
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Every industry is exposed to enterprise risk. The severity varies, but no sector is immune.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Technology",
              "Financial Services",
              "Healthcare",
              "Manufacturing",
              "Energy",
              "Infrastructure",
              "Retail",
              "Transportation",
              "Agriculture",
              "Construction",
              "Logistics",
              "Aviation",
              "Space",
              "Legal",
              "Insurance",
              "Government",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <Globe className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="text-base font-semibold text-slate-800">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: RISK DIAGNOSTIC */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Risk Diagnostic
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Enterprise assessments to understand your current risk posture and prioritize actions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Risk Exposure Review", description: "Comprehensive identification and quantification of enterprise risk exposures across all domains." },
              { title: "Coverage Gap Analysis", description: "Detailed review of existing insurance programs against actual risk exposures and emerging threats." },
              { title: "Insurance Program Assessment", description: "Evaluation of policy terms, limits, deductibles, and carrier performance across your program." },
              { title: "Scenario Modeling", description: "Probabilistic modeling of catastrophic scenarios to validate insurance adequacy and resilience planning." },
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

      {/* SECTION 10: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">
              Ready to Architect Your Enterprise Risk Strategy?
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Connect with our senior risk architects to design a customized program aligned to your organization&apos;s unique exposures and strategic objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                size="lg"
                className="bg-[#1E5EFF] hover:bg-[#1E5EFF]/90 text-white font-semibold text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                Speak With Specialist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                <Download className="h-4 w-4 mr-2" />
                Request Coverage Review
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
