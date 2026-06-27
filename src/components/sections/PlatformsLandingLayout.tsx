

import React from "react";
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { EnterprisePageHero } from "@/components/sections/EnterprisePageHero";
import {
  CheckCircle2, ChevronRight, Shield, Database, Zap, Users, Briefcase,
  BarChart3, Download, Target, Globe, AlertTriangle, Layers, Activity, Landmark
} from "lucide-react";
import { platformData } from "@/data/platformData";
import { risksData } from "@/data/risksData";
import { offeringsData } from "@/data/offeringsData";
import { solutionsData } from "@/data/siteContent";

const PLATFORM_STATS = [
  { value: "16", label: "Core Platforms" },
  { value: "200+", label: "Data Ingest Feeds" },
  { value: "41", label: "Industries Mapped" },
  { value: "150+", label: "Jurisdictions" },
];

const PLATFORM_CATEGORIES = [
  { id: "all", label: "All Platforms" },
  { id: "discovery", label: "Discovery & Diagnostic" },
  { id: "due-diligence", label: "Due Diligence" },
  { id: "monitoring", label: "Monitoring" },
  { id: "planning", label: "Planning & Scenario" },
  { id: "experience", label: "Client Experience" },
  { id: "data-analytics", label: "Data & Analytics" },
];

const LANDING_CAPABILITIES = [
  {
    title: "Continuous Automated Ingestion",
    desc: "Ingests structured company questionnaires and unstructured regulatory, legal, and threat filings globally.",
    icon: Database
  },
  {
    title: "Predictive Exposure Scoring",
    desc: "Calculates real-time risk scores across 20+ risk domains to pinpoint critical underinsurance.",
    icon: Target
  },
  {
    title: "Accelerated Transaction Audits",
    desc: "Facilitates rapid due diligence for M&A, evaluating cyber debt, contract exposures, and liability towers.",
    icon: Briefcase
  },
  {
    title: "Unified Executive Reporting",
    desc: "Generates board-ready summaries, heat maps, and regulatory templates under standard frameworks.",
    icon: BarChart3
  }
];

const INDUSTRY_OUTCOME_MAPPING = [
  {
    industry: "Technology",
    challenge: "Rapid expansion of digital attack surface, software supply chain backdoors, and evolving AI governance models.",
    platforms: ["Cyber Intelligence", "Contract Intelligence", "Regulatory Intelligence"],
    icon: Zap
  },
  {
    industry: "Financial Services",
    challenge: "Complex AML and KYC regulations, systemic cyber exposures, transaction liabilities, and sovereign political shifts.",
    platforms: ["Counterparty Assessment", "M&A Due Diligence", "Political Monitor"],
    icon: Landmark
  },
  {
    industry: "Manufacturing",
    challenge: "Just-in-time component bottlenecks, tier-N supplier insolvencies, and equipment breakdowns.",
    platforms: ["Supply Chain Monitor", "Risk DNA Mapper", "Climate Scenario"],
    icon: Layers
  },
  {
    industry: "Healthcare",
    challenge: "HIPAA compliance vulnerabilities, PHI data breaches, clinical trial liability, and medical device recalls.",
    platforms: ["Regulatory Intelligence", "Cyber Due Diligence", "Contract Intelligence"],
    icon: Activity
  }
];

const TOP_RISKS = [
  { slug: "ransomware", label: "Ransomware Attack", description: "System encryption demanding payment." },
  { slug: "supply-chain-cyber", label: "Supply Chain Cyber Attack", description: "Trusted vendor compromise." },
  { slug: "natural-catastrophe", label: "Natural Catastrophe", description: "Extreme physical asset damage." },
  { slug: "regulatory-compliance-failure", label: "Regulatory Compliance Failure", description: "Breach of local or global laws." }
];

const TOP_SOLUTIONS = [
  { slug: "property-sfsp", title: "Property All-Risks", description: "Physical asset and rebuild protection." },
  { slug: "business-interruption", title: "Business Interruption", description: "Revenue continuity protection." },
  { slug: "cyber-first-party", title: "Cyber First-Party", description: "Ransomware and recovery coverage." },
  { slug: "d-o", title: "Directors & Officers", description: "Board personal asset protection." }
];

export function PlatformsLandingLayout() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const platformEntries = Object.entries(platformData);

  const filteredEntries = platformEntries.filter(([, data]) => {
    if (activeCategory === "all") return true;
    const cat = PLATFORM_CATEGORIES.find(c => c.id === activeCategory);
    if (!cat) return true;
    
    const normCategory = data.category.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normLabel = cat.label.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return normCategory.includes(normLabel) || normLabel.includes(normCategory);
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <EnterprisePageHero
        badge="Platform Suite"
        title="AI-Powered Risk Intelligence Platforms"
        subtitle="Enterprise-grade tools for risk discovery, diagnostic mapping, transaction due diligence, and continuous threat monitoring."
        capabilityTags={["AI Intelligence", "Risk Analytics", "Cyber Security", "Compliance", "Enterprise Risk"]}
        stats={[
          { value: "8", label: "AI Engines" },
          { value: "250+", label: "Risk Rules" },
          { value: "99.9%", label: "Availability" },
          { value: "24x7", label: "Monitoring" },
        ]}
        primaryCta={{ label: "Book Assessment", onClick: () => (window.location.href = "/contact") }}
        secondaryCta={{ label: "Download Platform Guide", onClick: () => (window.location.href = "/contact") }}
      />

      {/* SECTION 2: EXECUTIVE OVERVIEW PROSE */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-sm font-semibold tracking-widest uppercase mb-4">
                Executive Overview
              </Badge>
              <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-4">
                Next-Gen AI Risk Intelligence & Assessment
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                TRUSTFLOW platforms represent the state of the art in automated enterprise risk discovery, diagnostic mapping, continuous monitoring, and transaction due diligence. By combining structured data ingestion, proprietary ML scoring, and natural language processing, we provide a single source of truth for modern risk architects, CFOs, and board members.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Centralized dashboard for all platform modules, claims, and policies",
                "Dynamic multi-jurisdictional risk scoring and peer benchmarking",
                "Real-time threat feed alerts with compound risk correlation",
                "Automated document intelligence and contract gap analysis"
              ].map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-base">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SCALE & CAPABILITIES */}
      <section className="w-full bg-slate-50 py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-sm font-semibold tracking-widest uppercase mb-4">
              Measurable Scale
            </Badge>
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">
              Enterprise Risk Technology Built for Scale
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Dedicated platform practices serving enterprise risk teams globally.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {PLATFORM_STATS.map((stat, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4">
                <CardContent className="space-y-3 pt-0">
                  <Shield className="h-10 w-10 text-blue-600 mx-auto" />
                  <div className="text-[42px] font-bold text-slate-900 font-serif leading-none">
                    {stat.value}
                  </div>
                  <div className="text-base font-semibold text-slate-700">
                    {stat.label}
                  </div>
                  <p className="text-sm text-slate-500 leading-snug px-2">
                    Verified benchmark
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Capability Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANDING_CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded bg-[#EAF2FF] flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-[#1E5EFF]" />
                    </div>
                    <CardTitle className="text-base font-bold text-slate-900 leading-snug">
                      {cap.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-base text-slate-600 leading-snug">{cap.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: PLATFORM DIRECTORY MARKETPLACE */}
      <section id="directory-section" className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Platform Directory
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Select a platform to explore specialized risk technology and architecture.
            </p>
          </div>

          {/* Category Tabs Filter */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-8">
            <TabsList className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg h-auto justify-start md:justify-center border border-slate-200">
              {PLATFORM_CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="px-3 py-2 text-sm font-semibold rounded-md data-[state=active]:bg-[#1E5EFF] data-[state=active]:text-white hover:bg-slate-200/50 hover:text-[#0B1F3A] transition-colors"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEntries.map(([slug, data]) => {
              const Icon = data.icon;
              return (
                <Link key={slug} to={`/platform/${slug}`}>
                  <Card className="group border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col h-full cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {data.category}
                        </span>
                      </div>
                      <CardTitle className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {data.title.replace('TRUSTFLOW ', '')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <p className="text-base text-slate-600 leading-snug mb-3">
                        {data.description.split('.')[0]}.
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-auto">
                        <span className="text-sm font-semibold text-blue-600 flex items-center gap-1">
                          View Details <ChevronRight className="h-3 w-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED PLATFORMS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Featured Platforms
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Deep domain expertise in our highest-demand risk technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["risk-diagnostic-engine", "risk-dna-mapper", "cyber-intelligence"].map((slug) => {
              const data = platformData[slug];
              if (!data) return null;
              const Icon = data.icon;
              return (
                <Link key={slug} to={`/platform/${slug}`}>
                  <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <CardTitle className="text-base font-bold text-slate-900">
                          {data.title.replace('TRUSTFLOW ', '')}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <p className="text-base text-slate-600 leading-snug mb-3">
                        {data.description.split('.')[0]}.
                      </p>
                      <ul className="space-y-2 mt-2">
                        {data.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-base text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: PLATFORM CATEGORIES */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Platform Categories
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Browse platforms by risk lifecycle and intelligence domain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "discovery", label: "Risk Discovery", icon: Target, color: "from-blue-600 to-indigo-600", count: platformEntries.filter(([,d]) => d.category.includes("Discovery")).length },
              { id: "due-diligence", label: "Due Diligence", icon: Briefcase, color: "from-emerald-600 to-teal-600", count: platformEntries.filter(([,d]) => d.category.includes("Due Diligence")).length },
              { id: "monitoring", label: "Risk Monitoring", icon: Globe, color: "from-red-600 to-rose-600", count: platformEntries.filter(([,d]) => d.category.includes("Monitoring")).length },
              { id: "planning", label: "Planning & Scenarios", icon: Zap, color: "from-yellow-600 to-orange-600", count: platformEntries.filter(([,d]) => d.category.includes("Planning")).length },
              { id: "experience", label: "Client Experience", icon: Users, color: "from-violet-600 to-purple-600", count: platformEntries.filter(([,d]) => d.category.includes("Experience")).length },
              { id: "data-analytics", label: "Data & Analytics", icon: Database, color: "from-purple-600 to-violet-600", count: platformEntries.filter(([,d]) => d.category.includes("Data")).length },
            ].map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Card
                  key={i}
                  className="border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all cursor-pointer text-center p-6 hover:-translate-y-1 hover:border-blue-300"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    document.getElementById("directory-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{cat.label}</h3>
                  <p className="text-sm text-slate-500 mb-3">{cat.count} platforms</p>
                  <div className="text-sm font-semibold text-blue-600 flex items-center justify-center gap-0.5">
                    Explore Platforms <ChevronRight className="h-3 w-3" />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: ARCHITECTURE FRAMEWORK */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-sm font-semibold tracking-widest uppercase mb-4">
              Architecture Framework
            </Badge>
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">Technical Architecture Layers</h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">Enterprise-grade foundation built to aggregate, process, and present multi-domain risk data.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-slate-300 bg-white shadow-sm">
              <CardContent className="p-6">
                <Database className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-[#0B1F3A] mb-2 text-lg">Data Layer</h4>
                <p className="text-base text-slate-600 mb-4">Ingestion from public filings, unstructured news, and corporate metrics.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-base text-slate-700"><CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>OAuth Integrations</span></li>
                  <li className="flex items-start gap-2 text-base text-slate-700"><CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Blockchain Document Vault</span></li>
                  <li className="flex items-start gap-2 text-base text-slate-700"><CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Real-Time Sync API</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-slate-300 bg-white shadow-sm">
              <CardContent className="p-6">
                <Activity className="h-8 w-8 text-purple-600 mb-4" />
                <h4 className="font-bold text-[#0B1F3A] mb-2 text-lg">Processing Layer</h4>
                <p className="text-base text-slate-600 mb-4">AI engines parsing contract terms and modeling exposure paths.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-base text-slate-700"><CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" /><span>ML Risk Scoring (0-100)</span></li>
                  <li className="flex items-start gap-2 text-base text-slate-700"><CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" /><span>NLP Clause Extraction</span></li>
                  <li className="flex items-start gap-2 text-base text-slate-700"><CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" /><span>Geopolitical Signal Overlay</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-slate-300 bg-white shadow-sm">
              <CardContent className="p-6">
                <BarChart3 className="h-8 w-8 text-emerald-600 mb-4" />
                <h4 className="font-bold text-[#0B1F3A] mb-2 text-lg">Output Layer</h4>
                <p className="text-base text-slate-600 mb-4">Board-level heat maps, policy gap alerts, and broker portals.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-base text-slate-700"><CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /><span>Executive Dashboards</span></li>
                  <li className="flex items-start gap-2 text-base text-slate-700"><CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /><span>Exportable PDF Briefings</span></li>
                  <li className="flex items-start gap-2 text-base text-slate-700"><CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /><span>Incident Playbook Access</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 8: INDUSTRY APPLICATIONS (Vertical Tabs) */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-sm font-semibold tracking-widest uppercase mb-4">
              Industry Outcome Mapping
            </Badge>
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Vertical Industry Applications
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              How different sectors leverage the TRUSTFLOW technology suite to solve specific exposures.
            </p>
          </div>

          <Tabs defaultValue={INDUSTRY_OUTCOME_MAPPING[0].industry} orientation="vertical" className="w-full">
            <div className="flex flex-col md:flex-row gap-6">
              <TabsList variant="line" className="w-full md:w-64 flex flex-col items-start gap-1 bg-transparent">
                {INDUSTRY_OUTCOME_MAPPING.map((tab) => (
                  <TabsTrigger
                    key={tab.industry}
                    value={tab.industry}
                    className="w-full justify-start px-4 py-2.5 text-base font-semibold data-[selected]:text-[#0B1F3A] data-[selected]:border-l-[3px] data-[selected]:border-[#1E5EFF] rounded-none bg-transparent after:hidden"
                  >
                    {tab.industry}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="flex-1">
                {INDUSTRY_OUTCOME_MAPPING.map((tab) => {
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
                            <p className="text-base text-slate-700 leading-relaxed">{tab.challenge}</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                              <Globe className="h-4 w-4 text-purple-600" />
                              Primary Platforms
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {tab.platforms.map((pName, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-base font-medium border border-purple-200">
                                  {pName}
                                </span>
                              ))}
                            </div>
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

      {/* SECTION 9: RELATED RISKS & SOLUTIONS CROSS-LINKS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Column 1: Top Risks */}
            <div>
              <h3 className="text-[22px] font-bold text-slate-900 font-serif mb-6 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Interconnected Risk Domains
              </h3>
              <div className="space-y-4">
                {TOP_RISKS.map((risk, i) => (
                  <Link to={`/risks/${risk.slug}`} key={i} className="block group">
                    <Card className="border border-slate-200 bg-white hover:border-red-500 transition-all p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">{risk.label}</h4>
                          <p className="text-sm text-slate-500">{risk.description}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Top Solutions */}
            <div>
              <h3 className="text-[22px] font-bold text-slate-900 font-serif mb-6 flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Strategic Risk Solutions
              </h3>
              <div className="space-y-4">
                {TOP_SOLUTIONS.map((sol, i) => (
                  <Link to={`/solutions/${sol.slug}`} key={i} className="block group">
                    <Card className="border border-slate-200 bg-white hover:border-blue-500 transition-all p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{sol.title}</h4>
                          <p className="text-sm text-slate-500">{sol.description}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: PLATFORM ARCHITECTURE CTA */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Platform Architecture Assessment
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Evaluate your enterprise integration roadmap and stack readiness with our architects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Platform Readiness Assessment", description: "Evaluate current technology stack against TRUSTFLOW platform requirements." },
              { title: "Integration Architecture Planning", description: "Design API connectivity and data flow for enterprise deployment." },
            ].map((diag, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0">
                    <BarChart3 className="h-4 w-4 text-[#1E5EFF]" />
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
              Ready to Deploy TRUSTFLOW Platforms?
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Connect with our platform architects to design a customized technology suite aligned to your enterprise risk strategy.
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
                Platform Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}