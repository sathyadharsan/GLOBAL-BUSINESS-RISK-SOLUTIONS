"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Cpu, Database, Globe, BarChart3, Zap, BookOpen, Target, Activity, CheckCircle2, Users, Briefcase, Truck, TrendingUp, Award, FileText, Bell } from "lucide-react";
import { platformData } from "@/data/platformData";
import { HeroBackground } from "@/components/sections/HeroBackground";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "risk-diagnostic-engine": Target,
  "risk-dna-mapper": Database,
  "cyber-intelligence": Shield,
  "contract-intelligence": FileAssume you are a Senior Enterprise Risk Consultant, Digital Strategy Architect, UX Expert, and Website Optimization Specialist.

Analyze the complete website:

https://global-business-risk-solutions.vercel.app/

Focus primarily on:

1. Industries (Verticals)
2. Industry-Specific Use Cases
3. Industry Risk Architecture
4. Cross-Linking Between Risks, Platforms, Offerings, Solutions, and Use Cases

--------------------------------------------------

OBJECTIVE

Evaluate whether the website positions TRUSTFLOW as a world-class Enterprise Business Risk Architecture Platform comparable to:

• Marsh
• Aon
• Deloitte
• Accenture
• PwC
• ISI Security

--------------------------------------------------

VERTICAL ANALYSIS

Review every industry vertical currently available.

Examples:

• Financial Services
• Banking
• Insurance
• Fintech
• Healthcare
• Pharmaceuticals
• Manufacturing
• Energy
• Utilities
• Oil & Gas
• Construction
• Real Estate
• Transportation
• Logistics
• Retail
• E-Commerce
• Technology
• Telecom
• Government
• Education
• Agriculture

For each vertical provide:

1. Current Strengths
2. Missing Content
3. Missing Risk Scenarios
4. Missing Offerings
5. Missing Platforms
6. Missing Industry KPIs
7. Missing Industry Statistics
8. Missing Enterprise Use Cases
9. Missing Case Studies
10. Missing Cross-Linking Opportunities

--------------------------------------------------

USE CASE ANALYSIS

For every industry generate:

Minimum 10 enterprise use cases.

Example:

Financial Services

• Third Party Risk Management
• Regulatory Compliance Automation
• Cyber Risk Quantification
• AI Governance
• Vendor Risk Monitoring
• Climate Risk Assessment
• Operational Resilience
• M&A Due Diligence
• Fraud Risk Intelligence
• Insurance Program Optimization

Healthcare

• Medical Device Risk
• HIPAA Compliance
• Clinical Trial Risk
• Supply Chain Monitoring
• Vendor Due Diligence
• Cyber Risk Monitoring
• Business Continuity
• ESG Reporting
• Regulatory Intelligence
• Risk Governance

Repeat for every industry.

--------------------------------------------------

CONTENT GAP ANALYSIS

Identify:

• Missing industries
• Missing sub-industries
• Missing use cases
• Missing solutions
• Missing offerings
• Missing risk categories
• Missing platform capabilities

--------------------------------------------------

WEBSITE STRUCTURE IMPROVEMENTS

Recommend:

1. New Industries
2. New Use Cases
3. New Solutions
4. New Risk Categories
5. New Platform Modules
6. New Landing Pages
7. New Cross-Linking Architecture

--------------------------------------------------

SEO IMPROVEMENTS

Generate:

• Industry-specific SEO pages
• Long-tail keywords
• Enterprise search opportunities
• GEO/AI Search optimization opportunities

--------------------------------------------------

FINAL OUTPUT

Provide:

1. Executive Summary
2. Industry Improvement Matrix
3. Missing Industry Opportunities
4. Vertical-Specific Use Cases Matrix
5. Content Gap Report
6. Enterprise Architecture Recommendations
7. Priority Roadmap

Prioritize recommendations into:

• Critical
• High Priority
• Medium Priority
• Nice to Have

Output in detailed consulting report format.Text,
  "ma-due-diligence": Briefcase,
  "supply-chain-monitor": Truck,
  "political-monitor": Globe,
  "regulatory-intelligence": BookOpen,
  "climate-scenario": Zap,
  "client-portal": Users,
  "risk-feed": Bell,
  "risk-intelligence-feed": Activity,
  "executive-dashboards": TrendingUp,
  "api-integrations": Cpu,
};

const PLATFORM_CATEGORIES = [
  "Risk Discovery & Diagnostic",
  "Due Diligence",
  "Risk Monitoring",
  "Planning & Scenario",
  "Client Experience",
];

export default function PlatformPage() {
  const [activeCategory, setActiveCategory] = useState<string>(PLATFORM_CATEGORIES[0]);

  const platforms = Object.entries(platformData).map(([slug, data]) => {
        let category = "Client Experience";
    if (["risk-diagnostic-engine", "risk-dna-mapper", "cyber-intelligence"].includes(slug)) {
      category = "Risk Discovery & Diagnostic";
    } else if (["contract-intelligence", "ma-due-diligence", "counterparty-assessment", "cyber-due-diligence"].includes(slug)) {
      category = "Due Diligence";
    } else if (["supply-chain-monitor", "political-monitor", "regulatory-intelligence", "risk-intelligence-aggregator"].includes(slug)) {
      category = "Risk Monitoring";
    } else if (["climate-scenario"].includes(slug)) {
      category = "Planning & Scenario";
    }
    // risk-feed and other client experience platforms default to "Client Experience" above
    return {
      id: slug,
      title: data.title,
      category,
      icon: ICON_MAP[slug] || Target,
      color: data.color,
      description: data.description,
      features: data.features.slice(0, 3),
    };
  });

  // Filter platforms by active category
  const filteredPlatforms = platforms.filter(platform => platform.category === activeCategory);

  // Count platforms by category for statistics
  const categoryCounts = PLATFORM_CATEGORIES.reduce((acc, category) => {
    acc[category] = platforms.filter(p => p.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroBackground
        title="35 AI-Powered Risk Intelligence Platforms"
        subtitle="Enterprise-grade tools for risk assessment, monitoring, compliance, and insurance optimization. Built for Fortune 500 risk teams."
        image="https://images.unsplash.com/photo-1518103241174-ebb0c2b2e1e5?q=80&w=2070&auto=format&fit=crop"
        badges={["Platform Suite"]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Platforms" }
        ]}
        stats={[
          { val: "35", label: "AI Platforms" },
          { val: "23", label: "More Available" },
          { val: "150+", label: "Countries" },
          { val: "A++", label: "Carrier Access" }
        ]}
      />

      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {PLATFORM_CATEGORIES.map((cat, i) => (
              <Button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                className={activeCategory === cat ? "bg-primary hover:bg-primary/90" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="transition-all duration-500 ease-in-out">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlatforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <Card key={platform.id} className="group border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                          {platform.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-bold text-primary group-hover:text-blue-600 transition-colors">
                        {platform.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {platform.description}
                      </p>
                      <ul className="space-y-2 mb-6 flex-1">
                        {platform.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-slate-100">
                        <Link
                          href={`/platform/${platform.id}`}
                          className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          Explore Platform <ChevronRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredPlatforms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500">No platforms found in this category.</p>
              </div>
            )}

            <div className="mt-16 text-center p-12 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-primary mb-4">
                {categoryCounts[activeCategory]} Platforms Available
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our complete suite includes specialized tools for industry-specific risk modeling, carrier optimization, claims prediction, and regulatory compliance across global markets.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Schedule Platform Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <Award className="h-12 w-12 text-blue-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 font-serif">
            Transform Your Risk Management Operations
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Deploy TRUSTFLOW's AI-powered platform suite to automate risk assessment, improve accuracy, and accelerate decision-making.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Request Enterprise Access <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}