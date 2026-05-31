"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Cpu, Database, Globe, BarChart3, LineChart, Zap, BookOpen, Target, Activity, AlertCircle, CheckCircle2, Users, Briefcase, Truck, Leaf, Rocket, Share2, TrendingUp, Award, Gauge, PieChart, Radar, Search, FileText, Bell, Lock, Unlock, RefreshCw, Clock, MapPin, Grid3X3 } from "lucide-react";
import Link from "next/link";

const PLATFORMS = [
  {
    id: "risk-diagnostic-engine",
    title: "TrustFlow Risk Diagnostic Engine",
    category: "Risk Intelligence",
    icon: Target,
    color: "#0052CC",
    description: "AI-driven risk assessment and gap analysis across all enterprise exposures.",
    features: ["Automated risk scoring", "Coverage gap detection", "Benchmarking against peers"],
  },
  {
    id: "risk-dna-mapper",
    title: "Enterprise Risk DNA Mapper",
    category: "Risk Architecture",
    icon: Database,
    color: "#2563EB",
    description: "Comprehensive risk profiling and architecture mapping for enterprises.",
    features: ["Risk heat maps", "Dependency visualization", "Scenario modeling"],
  },
  {
    id: "cyber-intelligence",
    title: "Cyber Threat Intelligence Platform",
    category: "Security",
    icon: Shield,
    color: "#DC2626",
    description: "Real-time threat monitoring and cyber risk quantification.",
    features: ["Threat feeds", "Vulnerability scoring", "Incident response orchestration"],
  },
  {
    id: "contract-intelligence",
    title: "AI Contract Intelligence Engine",
    category: "Legal Tech",
    icon: FileText,
    color: "#7C3AED",
    description: "Automated extraction and analysis of risk clauses from contracts.",
    features: ["Clause identification", "Risk scoring", "Compliance monitoring"],
  },
  {
    id: "ma-due-diligence",
    title: "M&A Due Diligence Suite",
    category: "Transaction Risk",
    icon: Briefcase,
    color: "#059669",
    description: "Transaction risk assessment and insurance structuring for deals.",
    features: ["Risk quantification", "Coverage gap analysis", "Insurance placement"],
  },
  {
    id: "supply-chain-visualizer",
    title: "Supply Chain Risk Visualizer",
    category: "Supply Chain",
    icon: Truck,
    color: "#F59E0B",
    description: "Mapping dependencies and vulnerability points across supply chains.",
    features: ["Supplier mapping", "Risk propagation", "Alternative routing"],
  },
  {
    id: "risk-feed",
    title: "Risk Intelligence Feed",
    category: "Monitoring",
    icon: Bell,
    color: "#0D9488",
    description: "Continuous monitoring and alerts for emerging risks.",
    features: ["Real-time alerts", "Regulatory updates", "Market intelligence"],
  },
  {
    id: "client-portal",
    title: "Client Risk Portal",
    category: "Client Access",
    icon: Users,
    color: "#7C3AED",
    description: "Dashboard access to all risk metrics, claims, and documentation.",
    features: ["Claim tracking", "Document repository", "Risk scorecards"],
  },
  {
    id: "parametric-modeling",
    title: "Parametric Risk Modeling",
    category: "Analytics",
    icon: Zap,
    color: "#F59E0B",
    description: "Index-based risk quantification and trigger modeling.",
    features: ["Weather indices", "Catastrophe modeling", "Payout optimization"],
  },
  {
    id: "esg-scoring",
    title: "ESG Risk Scoring",
    category: "ESG",
    icon: Leaf,
    color: "#059669",
    description: "Environmental, social, and governance risk quantification.",
    features: ["Carbon liability", "Sustainability scoring", "Greenwashing detection"],
  },
  {
    id: "claims-analyzer",
    title: "Claims Pattern Analyzer",
    category: "Claims",
    icon: BarChart3,
    color: "#DB2777",
    description: "Historical claims analysis for risk optimization.",
    features: ["Pattern detection", "Cost prediction", "Recovery optimization"],
  },
  {
    id: "regulatory-tracker",
    title: "Regulatory Compliance Tracker",
    category: "Compliance",
    icon: BookOpen,
    color: "#7C3AED",
    description: "Global regulatory change monitoring and compliance alerts.",
    features: ["SEBI/RBI updates", "GDPR tracking", "Cross-border compliance"],
  },
  {
    id: "captive-modeling",
    title: "Captive Feasibility Modeler",
    category: "Insurance",
    icon: Lock,
    color: "#0052CC",
    description: "ART and captive insurance structuring optimization.",
    features: ["Capital modeling", "Tax optimization", "Jurisdiction selection"],
  },
  {
    id: "tcor-dashboard",
    title: "TCOR Analytics Dashboard",
    category: "Analytics",
    icon: Gauge,
    color: "#2563EB",
    description: "Total cost of risk monitoring and optimization.",
    features: ["Cost tracking", "Retention modeling", "Benchmark comparison"],
  },
  {
    id: "premium-calculator",
    title: "Premium Optimization Engine",
    category: "Pricing",
    icon: PieChart,
    color: "#059669",
    description: "Dynamic premium pricing and optimization.",
    features: ["Rate benchmarking", "Structure optimization", "Carrier matching"],
  },
];

const PLATFORM_CATEGORIES = [
  "Risk Intelligence",
  "Security",
  "Legal Tech",
  "Transaction Risk",
  "Supply Chain",
  "Monitoring",
  "Analytics",
  "Compliance",
  "Insurance"
];

export default function PlatformPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 py-20 max-w-6xl">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Platform Suite</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-serif leading-tight">
              35 AI-Powered Risk Intelligence Platforms
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
              Enterprise-grade tools for risk assessment, monitoring, compliance, and insurance optimization. Built for Fortune 500 risk teams.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["AI-Powered", "Real-Time Monitoring", "Enterprise Scale", "API Access"].map((badge, i) => (
                <span key={i} className="text-xs font-semibold px-4 py-1.5 bg-white/10 rounded-full border border-white/10">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {PLATFORM_CATEGORIES.map((cat, i) => (
              <Button
                key={cat}
                variant={i === 0 ? "default" : "outline"}
                size="sm"
                className={i === 0 ? "bg-primary hover:bg-primary/90" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLATFORMS.map((platform) => {
              const Icon = platform.icon;
              return (
                <Card key={platform.id} className="group border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Icon className="h-6 w-6" style={{ color: platform.color }} />
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

          {/* More Platforms Coming */}
          <div className="mt-16 text-center p-12 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-primary mb-4">23 More Platforms Available</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our complete suite includes specialized tools for industry-specific risk modeling, carrier optimization, claims prediction, and regulatory compliance across global markets.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Schedule Platform Demo
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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