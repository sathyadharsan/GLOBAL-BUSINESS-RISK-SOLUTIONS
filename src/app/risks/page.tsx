"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Building2, TrendingUp, Globe, Leaf, AlertCircle, Cpu, Truck, BookOpen, Target, BarChart3, Users, LineChart, Zap, HeartPulse, Wheat, Rocket, Share2, Database, Briefcase } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const RISK_CATEGORIES = [
  {
    id: "cyber",
    label: "Cyber Risks",
    icon: Shield,
    color: "#0052CC",
    risks: [
      { id: "ransomware", label: "Ransomware", desc: "Malware encryption attacks demanding payment", icon: AlertCircle },
      { id: "data-breach", label: "Data Breach", desc: "Unauthorized access to sensitive information", icon: Database },
      { id: "deepfake-fraud", label: "Deepfake Fraud", desc: "AI-generated impersonation and fraud", icon: Zap },
    ]
  },
  {
    id: "operational",
    label: "Operational Risks",
    icon: Building2,
    color: "#C84B20",
    risks: [
      { id: "property-damage", label: "Property Damage", desc: "Fire, flood, earthquake, equipment failure", icon: Building2 },
      { id: "business-interruption", label: "Business Interruption", desc: "Revenue loss from operational disruption", icon: BarChart3 },
      { id: "supply-chain", label: "Supply Chain", desc: "Vendor failure and logistics disruption", icon: Truck },
    ]
  },
  {
    id: "financial",
    label: "Financial Risks",
    icon: TrendingUp,
    color: "#6A1B9A",
    risks: [
      { id: "trade-credit", label: "Trade Credit", desc: "Customer insolvency and payment defaults", icon: TrendingUp },
      { id: "political-risk", label: "Political Risk", desc: "War, expropriation, currency inconvertibility", icon: Globe },
      { id: "surety", label: "Surety Bonds", desc: "Contract performance and bid guarantees", icon: Briefcase },
    ]
  },
  {
    id: "supply-chain",
    label: "Supply Chain Risks",
    icon: Truck,
    color: "#1A7A8A",
    risks: [
      { id: "marine-cargo", label: "Marine Cargo", desc: "Goods in transit and shipping risks", icon: Truck },
      { id: "cbic", label: "CBI Coverage", desc: "Contingent business interruption from suppliers", icon: Share2 },
      { id: "cold-chain", label: "Cold Chain", desc: "Temperature-sensitive logistics failures", icon: Database },
    ]
  },
  {
    id: "esg",
    label: "ESG Risks",
    icon: Leaf,
    color: "#059669",
    risks: [
      { id: "climate-esg", label: "Climate Risk", desc: "Physical and transition climate impacts", icon: Leaf },
      { id: "greenwashing", label: "Greenwashing", desc: "Misleading sustainability claims liability", icon: AlertCircle },
      { id: "brsr", label: "BRSR Compliance", desc: "Business responsibility reporting mandates", icon: BookOpen },
    ]
  },
  {
    id: "regulatory",
    label: "Regulatory Risks",
    icon: AlertCircle,
    color: "#B8860B",
    risks: [
      { id: "sebi-defense", label: "SEBI Defense", desc: "Securities regulator investigations", icon: AlertCircle },
      { id: "rbi-compliance", label: "RBI Compliance", desc: "Banking and financial services rules", icon: Database },
      { id: "dpdp", label: "DPDP Act", desc: "Data privacy regulation penalties", icon: Shield },
    ]
  },
  {
    id: "directors-officers",
    label: "Directors & Officers Liability",
    icon: Users,
    color: "#7C3AED",
    risks: [
      { id: "corporate-governance", label: "Corporate Governance", desc: "Board decision liability and oversight", icon: Users },
      { id: "securities-laws", label: "Securities Laws", desc: "Shareholder and IPO-related claims", icon: TrendingUp },
      { id: "epl", label: "Employment Practices", desc: "Workforce-related legal exposures", icon: HeartPulse },
    ]
  },
  {
    id: "technology",
    label: "Technology Risks",
    icon: Cpu,
    color: "#2563EB",
    risks: [
      { id: "ai-liability", label: "AI Liability", desc: "Algorithmic bias and autonomous decisions", icon: Cpu },
      { id: "software-failure", label: "Software Failure", desc: "Tech E&O and implementation errors", icon: Zap },
      { id: "cloud-outage", label: "Cloud Outage", desc: "Systemic service provider failures", icon: Database },
    ]
  },
  {
    id: "third-party",
    label: "Third-Party Risks",
    icon: Share2,
    color: "#0D9488",
    risks: [
      { id: "vendor-liability", label: "Vendor Liability", desc: "Contractor and partner exposures", icon: Share2 },
      { id: "service-provider", label: "Service Provider", desc: "Outsourced function failures", icon: Database },
      { id: "distribution-risk", label: "Distribution Risk", desc: "Channel partner liabilities", icon: Truck },
    ]
  },
  {
    id: "emerging",
    label: "Emerging Risks",
    icon: Rocket,
    color: "#7C3AED",
    risks: [
      { id: "space-insurance", label: "Space Insurance", desc: "Satellite and launch coverage", icon: Rocket },
      { id: "drone-liability", label: "Drone Liability", desc: "UAV operations and compliance", icon: Cpu },
      { id: "climate-tech", label: "Climate Tech", desc: "Renewable energy and carbon markets", icon: Leaf },
      { id: "agri-tech", label: "Agri-Tech", desc: "Precision agriculture and parametric", icon: Wheat },
    ]
  }
];

export default function RisksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 py-20 max-w-6xl">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Risk Library</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-serif leading-tight">
              Explore 200+ Risk Categories Across Global Markets
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
              TRUSTFLOW provides comprehensive risk identification and architecture for cyber, operational, financial, regulatory, ESG, supply chain, technology, and emerging risk domains.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["200+ Risk Categories", "41 Industry Verticals", "Global Coverage", "AI-Powered Analysis"].map((badge, i) => (
                <span key={i} className="text-xs font-semibold px-4 py-1.5 bg-white/10 rounded-full border border-white/10">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Categories Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-16">
          {RISK_CATEGORIES.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b">
                  <Icon className="h-8 w-8" style={{ color: category.color }} />
                  <h2 className="text-2xl font-bold text-primary font-serif">
                    {category.label}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.risks.map((risk) => {
                    const RiskIcon = risk.icon;
                    return (
                      <Card key={risk.id} className="group border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <RiskIcon className="h-6 w-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardTitle className="text-lg font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                            {risk.label}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {risk.desc}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 font-serif">
            Need a Comprehensive Risk Assessment?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our risk architects will identify gaps in your current coverage and design optimal protection strategies.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
            Book Free Risk Diagnostic <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}