"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Shield, Target, AlertTriangle, Layers, CheckCircle2, ChevronRight, Download,
  BarChart3, Globe, Zap, Database, Activity
} from "lucide-react";

interface PlatformDetailLayoutProps {
  title: string;
  subtitle: string;
  category: string;
  color: string;
  description: string;
  features: string[];
  capabilities: string[];
  businessBenefits: string[];
  relatedModules: string[];
  useCases: string[];
}

const DEFAULT_KPIS = [
  { value: "200+", label: "Data Sources" },
  { value: "150+", label: "Jurisdictions" },
  { value: "41", label: "Industries" },
  { value: "24/7", label: "Monitoring" },
];

const PLATFORM_MODULES_TABS = [
  { label: "Overview", value: "overview", icon: Target },
  { label: "Platform Modules", value: "modules", icon: Layers },
  { label: "Architecture Framework", value: "architecture", icon: Database },
  { label: "Industry Applications", value: "industry", icon: Globe },
  { label: "Related Risks", value: "risks", icon: AlertTriangle },
  { label: "Related Solutions", value: "solutions", icon: Shield },
  { label: "Use Cases", value: "usecases", icon: Zap },
  { label: "Related Modules", value: "related", icon: ChevronRight },
];

export function PlatformDetailLayout({ title, subtitle, category, color, description, features, capabilities, businessBenefits, relatedModules, useCases }: PlatformDetailLayoutProps) {
  const platformColor = color || "#1E5EFF";
  const kpis = DEFAULT_KPIS;
  const caps = [
    { title: "Risk Assessment", desc: `Comprehensive evaluation using ${features?.length || 6}+ risk indicators.`, bullets: features?.slice(0, 4) || ["Risk Identification", "Scoring & Benchmarking", "Gap Analysis", "Reporting"] },
    { title: "Integration Ready", desc: "Seamless connectivity with enterprise systems via RESTful APIs.", bullets: ["API Endpoints", "Webhook Support", "White-label Embed", "OAuth Security"] },
    { title: "Real-time Monitoring", desc: "Continuous surveillance with automated alerts.", bullets: ["Signal Detection", "Alert Configuration", "Predictive Modeling", "Dashboard Views"] },
    { title: "Compliance Aligned", desc: "Regulatory framework integration with audit-ready documentation.", bullets: ["Multi-jurisdictional", "Audit Trails", "TCFD Alignment", "Automated Filing"] },
  ];

  const relatedRisks = [
    { title: "Cyber Risk", description: "Technology and data security exposures." },
    { title: "Supply Chain Risk", description: "Multi-tier dependency risks." },
    { title: "Regulatory Risk", description: "Compliance and investigation coverage." },
    { title: "Operational Risk", description: "Business continuity coverage." },
  ];

  const relatedSolutions = [
    { title: "Risk Engineering", description: "Proactive mitigation strategies." },
    { title: "Claims Advocacy", description: "Technical representation and recovery." },
    { title: "TCOR Analytics", description: "Total cost optimization insights." },
    { title: "Alternative Risk Transfer", description: "Captive and parametric solutions." },
  ];

  const industryTabs = [
    { label: "Technology", content: { industryChallenges: ["AI liability", "Cloud risk", "Rapid innovation"], industryRiskExposure: ["Ransomware", "Outage liability", "Regulatory"], relatedPlatforms: ["Cyber Intelligence", "Risk DNA Mapper", "Contract Intelligence"] } },
    { label: "Financial Services", content: { industryChallenges: ["Regulatory penalty", "Systemic cyber", "Liability"], industryRiskExposure: ["Data breach", "Advice liability", "Compliance"], relatedPlatforms: ["Risk Diagnostic Engine", "M&A Due Diligence", "Counterparty Assessment"] } },
    { label: "Healthcare", content: { industryChallenges: ["Data privacy", "Trial liability", "Recall"], industryRiskExposure: ["Malpractice", "Breach notification", "Investigation"], relatedPlatforms: ["Risk Diagnostic Engine", "Contract Intelligence", "Regulatory Intelligence"] } },
    { label: "Manufacturing", content: { industryChallenges: ["Supply chain", "Equipment breakdown", "Liability"], industryRiskExposure: ["Property damage", "Supply disruption", "Product claims"], relatedPlatforms: ["Supply Chain Monitor", "Risk DNA Mapper", "Climate Scenario"] } },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden bg-[#0B1F3A] mb-16">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518103241174-ebb0c2b2e1e5?q=80&w=2070&auto=format&fit=crop')" }} />
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
            <p className="text-base text-slate-300 max-w-2xl leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="font-semibold text-sm uppercase tracking-wide" style={{ backgroundColor: platformColor, color: "white" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${platformColor}90`)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = platformColor)}>Book Assessment</Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-wide" onClick={() => (window.location.href = "/contact")}>Download Platform Guide</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-xs font-semibold tracking-widest uppercase mb-4">Enterprise Overview</Badge>
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">Measurable Risk Solutions at Scale</h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">Enterprise-grade capabilities designed for complex risk landscapes.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {kpis.map((kpi, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4">
                <CardContent className="space-y-3 pt-0">
                  <Shield className="h-10 w-10 text-blue-600 mx-auto" /><div className="text-[42px] font-bold text-slate-900 font-serif leading-none">{kpi.value}</div>
                  <div className="text-base font-semibold text-slate-700">{kpi.label}</div>
                  <p className="text-xs text-slate-500 leading-snug px-2">Enterprise capability</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caps.map((cap, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3"><div className="w-11 h-11 rounded bg-[#EAF2FF] flex items-center justify-center mb-3"><Shield className="h-5 w-5 text-[#1E5EFF]" /></div>
                  <CardTitle className="text-base font-bold text-slate-900 leading-snug">{cap.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-0"><p className="text-sm text-slate-600 leading-snug">{cap.desc}</p>
                  <ul className="space-y-2">{cap.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /><span>{bullet}</span></li>))}</ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Platform Intelligence</h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">Deep insights across risk domains, architecture, and industry applications.</p>
          </div>
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex flex-col md:flex-row gap-6">
              <TabsList variant="line" className="w-full md:w-72 flex flex-col items-start gap-1 bg-transparent">
                {PLATFORM_MODULES_TABS.map((tab) => {
                  const TabIcon = tab.icon;
                  return (<TabsTrigger key={tab.value} value={tab.value} className="w-full justify-start px-4 py-2.5 text-sm font-semibold data-[selected]:text-[#0B1F3A] data-[selected]:border-l-[3px] data-[selected]:border-[#1E5EFF] rounded-none bg-transparent">
                    <TabIcon className="h-4 w-4 mr-2" />{tab.label}</TabsTrigger>);
                })}
              </TabsList>
              <div className="flex-1">
                <TabsContent value="overview" className="bg-white rounded-lg border border-slate-300 p-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div><h3 className="text-lg font-bold text-[#0B1F3A] mb-3">Platform Description</h3><p className="text-slate-600 leading-relaxed mb-4">{description}</p></div>
                    <div><h3 className="text-lg font-bold text-[#0B1F3A] mb-3">Key Business Benefits</h3><ul className="space-y-2">{businessBenefits?.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">{benefit}</span></li>))}</ul></div>
                  </div>
                </TabsContent>
                <TabsContent value="modules" className="bg-white rounded-lg border border-slate-300 p-6">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">Platform Capabilities</h3>
                  <div className="grid md:grid-cols-2 gap-4">{capabilities?.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg"><CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">{cap}</span></div>))}</div>
                </TabsContent>
                <TabsContent value="architecture" className="bg-white rounded-lg border border-slate-300 p-6">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">Architecture Framework</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg"><Database className="h-6 w-6 text-blue-600 mb-2" /><h4 className="font-semibold text-[#0B1F3A] mb-1">Data Layer</h4><p className="text-xs text-slate-600">Multi-source ingestion from 200+ sources</p></div>
                    <div className="p-4 bg-slate-50 rounded-lg"><Activity className="h-6 w-6 text-purple-600 mb-2" /><h4 className="font-semibold text-[#0B1F3A] mb-1">Processing Layer</h4><p className="text-xs text-slate-600">Real-time analytics and ML models</p></div>
                    <div className="p-4 bg-slate-50 rounded-lg"><BarChart3 className="h-6 w-6 text-emerald-600 mb-2" /><h4 className="font-semibold text-[#0B1F3A] mb-1">Output Layer</h4><p className="text-xs text-slate-600">API endpoints, dashboards, reports</p></div>
                  </div>
                </TabsContent>
                <TabsContent value="industry" className="bg-white rounded-lg border border-slate-300 p-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {industryTabs.map((tab) => (
                      <div key={tab.label} className="space-y-4">
                        <h3 className="text-lg font-bold text-[#0B1F3A]">{tab.label}</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-semibold text-slate-700 mb-1">Industry Challenges</h4>
                            <ul className="space-y-1">
                              {tab.content.industryChallenges.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                  <span className="w-1 h-1 rounded-full bg-red-500 mt-1.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-700 mb-1">Related Platforms</h4>
                            <div className="flex flex-wrap gap-1">
                              {tab.content.relatedPlatforms.map((item, i) => (
                                <span key={i} className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">{item}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="risks" className="bg-white rounded-lg border border-slate-300 p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">{relatedRisks.map((risk, i) => (
                    <div key={i} className="p-4 bg-red-50 rounded-lg"><AlertTriangle className="h-5 w-5 text-red-600 mb-2" /><h4 className="font-semibold text-red-700 text-sm">{risk.title}</h4><p className="text-xs text-slate-600 mt-1">{risk.description}</p></div>))}</div>
                </TabsContent>
                <TabsContent value="solutions" className="bg-white rounded-lg border border-slate-300 p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">{relatedSolutions.map((solution, i) => (
                    <div key={i} className="p-4 bg-emerald-50 rounded-lg"><Shield className="h-5 w-5 text-emerald-600 mb-2" /><h4 className="font-semibold text-emerald-700 text-sm">{solution.title}</h4><p className="text-xs text-slate-600 mt-1">{solution.description}</p></div>))}</div>
                </TabsContent>
                {useCases && useCases.length > 0 && (
                  <TabsContent value="usecases" className="bg-white rounded-lg border border-slate-300 p-6">
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">Platform Use Cases</h3>
                    <div className="grid md:grid-cols-2 gap-4">{useCases.map((useCase, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                        <Zap className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{useCase}</span>
                      </div>))}</div>
                  </TabsContent>
                )}
                {relatedModules && relatedModules.length > 0 && (
                  <TabsContent value="related" className="bg-white rounded-lg border border-slate-300 p-6">
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">Related Platform Modules</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{relatedModules.map((module, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                        <ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm font-medium">{module}</span>
                      </div>))}</div>
                  </TabsContent>
                )}
              </div>
            </div>
          </Tabs>
        </div>
      </section>

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