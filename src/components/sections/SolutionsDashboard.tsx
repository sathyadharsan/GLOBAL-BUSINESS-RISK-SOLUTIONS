

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OfferingData, offeringsData, CATEGORY_GROUPS } from "@/data/offeringsData";
import { buildEnterpriseContent } from "@/lib/enterpriseContentMapper";
import { cn } from "@/lib/utils";
import { Shield, AlertTriangle, Layers, CheckCircle2, ChevronRight, Download, FileText, Globe, TrendingUp, Briefcase, Cpu } from "lucide-react";

interface SolutionsDashboardProps {
  activeSlug: string;
}

const SOLUTION_DATA_BY_SLUG: Record<string, OfferingData> = {};

// Map offerings to solution slugs
const solutionOfferings = [
  "property-sfsp",
  "business-interruption",
  "contingent-bi",
  "equipment-breakdown",
  "cyber-first-party",
  "cyber-third-party",
  "cyber-regulatory-defense",
  "cyber-ransomware",
  "cyber-data-breach-response",
  "cyber-threat-intelligence",
  "cyber-vendor-risk",
  "d-o",
  "epli",
  "professional-indemnity-2",
  "tech-e-o",
  "product-liability-2",
  "product-recall",
  "trade-credit-2",
  "political-risk-2",
  "marine-cargo-2",
  "captive-insurance",
  "parametric-insurance",
  "ils-cat-bonds",
  "ma-risk-due-diligence",
];

solutionOfferings.forEach((slug) => {
  const offering = offeringsData[slug];
  if (offering) {
    SOLUTION_DATA_BY_SLUG[slug] = offering;
  }
});

function getIconForCategory(category: string) {
  const cat = CATEGORY_GROUPS[category as keyof typeof CATEGORY_GROUPS];
  if (cat) {
    const iconName = cat.icon;
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
      Shield,
      Cpu,
      BadgeDollarSign: Shield,
      TrendingUp,
      Grid: Layers,
      Globe,
      Briefcase: Briefcase,
    };
    return icons[iconName] || Shield;
  }
  return Shield;
}

export function SolutionsDashboard({ activeSlug }: SolutionsDashboardProps) {
  const offering = SOLUTION_DATA_BY_SLUG[activeSlug];
  const content = offering ? buildEnterpriseContent(offering) : null;

  if (!offering || !content) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <h1 className="text-3xl font-bold">Solution Not Found</h1>
          <p className="mt-4">The requested solution is not available.</p>
        </div>
      </div>
    );
  }

  const category = offering.category?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) || "Enterprise Solution";
  const Icon = getIconForCategory(offering.category);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[460px] w-full overflow-hidden bg-[#0B1F3A]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-transparent" />
        <div className="relative container mx-auto px-6 md:px-8 h-full flex flex-col justify-center max-w-6xl">
          <div className="max-w-4xl space-y-6">
            <span className="text-sm font-bold uppercase tracking-widest bg-[#1E5EFF]/20 text-[#60A5FA] px-2 py-0.5 rounded">
              {category}
            </span>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-tight font-serif leading-[1.1] text-white">
              {offering.title}
            </h1>
            <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
              {offering.shortDescription || offering.valueText}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl space-y-12">
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {content.kpis.map((kpi, i) => (
            <Card key={i} className="border-slate-300 bg-white shadow-sm text-center py-8 px-4">
              <CardContent className="space-y-3 pt-0">
                <Icon className="h-10 w-10 text-blue-600 mx-auto" />
                <div className="text-[42px] font-bold text-slate-900 font-serif leading-none">
                  {kpi.value}
                </div>
                <div className="text-base font-semibold text-slate-700">{kpi.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => (window.location.href = "/contact")}>
            Request Consultation
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = "/contact")}>
            Download Solution Sheet
          </Button>
        </div>
      </div>
    </div>
  );
}