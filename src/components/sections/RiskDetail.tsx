"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ArrowRight, AlertCircle, Shield, Building2, BarChart3, Lock, FileText, HelpCircle, CheckCircle2, Activity, TrendingUp } from "lucide-react";
import { risksData, riskCategories } from "@/data/risksData";
import { cn } from "@/lib/utils";

interface RiskDetailProps {
  slug: string;
}

const likelihoodLabels: Record<string, { label: string; color: string }> = {
  "Rare": { label: "Rare", color: "#6B7280" },
  "Possible": { label: "Possible", color: "#F59E0B" },
  "Likely": { label: "Likely", color: "#F97316" },
  "Very Likely": { label: "Very Likely", color: "#EA580C" },
  "Almost Certain": { label: "Almost Certain", color: "#DC2626" },
};

export function RiskDetail({ slug }: RiskDetailProps) {
  const isCategory = riskCategories[slug];
  const risk = risksData[slug];

  if (!isCategory && !risk) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-primary">Risk Not Found</h1>
          <p className="text-muted-foreground">The requested risk category or detail page does not exist.</p>
          <Link href="/risks">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              ← Back to Risk Library
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const category = isCategory
    ? isCategory
    : risk
      ? Object.keys(riskCategories).reduce((found, catId) => {
          if (found) return found;
          return riskCategories[catId].risks.some((r) => r.id === slug) ? riskCategories[catId] : null;
        }, null as (typeof riskCategories)[string] | null) ?? null
      : null;

  if (isCategory) {
    const Icon = isCategory.icon;
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,82,204,0.08),transparent_55%)]" />
          <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${isCategory.color}20` }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-white/10 rounded-full text-white">
                  Risk Category
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-serif mb-2">
                {isCategory.label}
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Explore {isCategory.risks.length} risks in this category
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select a risk below to view detailed information including impact areas, related industries, and recommended coverage solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isCategory.risks.map((riskItem) => {
              const riskDetail = risksData[riskItem.id];
              const RiskIconComp = riskDetail?.icon || AlertCircle;
              return (
                <Link
                  key={riskItem.id}
                  href={`/risks/${riskItem.id}`}
                  className="group border rounded-xl border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${riskDetail?.color || isCategory.color}20` }}
                      >
                        <RiskIconComp className="w-5 h-5" />
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                        {riskItem.label}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {riskItem.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/risks">
              <Button variant="outline" className="border-slate-200 text-primary hover:bg-slate-50">
                ← View All Risk Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!risk) return null;

  const Icon = risk.icon;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,82,204,0.08),transparent_55%)]" />
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              {category && (
                <Link
                  href={`/risks/${category.id}`}
                  className="text-xs font-semibold px-2 py-1 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  ← {category.label}
                </Link>
              )}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${risk.color}20` }}
              >
                <Icon className="w-6 h-6" />
              </div>
              {category && (
                <span className="text-xs font-semibold px-2 py-1 bg-white/10 rounded-full text-white">
                  {category.label}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-2">
              {risk.label}
            </h1>
            <p className="text-lg text-gray-300 mb-6">{risk.description}</p>
            <p className="text-slate-300 max-w-3xl leading-relaxed">
              {risk.longDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Risk Overview</h2>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <p className="text-slate-600 leading-relaxed">{risk.longDescription}</p>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-primary font-serif">Cost of Risk</h3>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <p className="text-2xl font-bold text-slate-800">{risk.costOfRisk}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-primary font-serif">Likelihood</h3>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <span
                  className="text-lg font-bold px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: `${likelihoodLabels[risk.likelihood].color}20`,
                    color: likelihoodLabels[risk.likelihood].color,
                  }}
                >
                  {risk.likelihood}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Business Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(risk.businessImpact).map(([key, value]) => (
              <Card key={key} className="border border-slate-200">
                <CardContent className="p-4">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">
                    {key.replace(/([A-Z])/g, " $1").trim()} Impact
                  </h4>
                  <p className="text-sm text-primary">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Potential Implications</h2>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <ul className="space-y-3">
              {risk.potentialImplications.map((implication, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <span className="text-slate-600 text-sm leading-relaxed">{implication}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Industries Affected</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {risk.relatedIndustries.map((industry, i) => (
              <Link key={i} href={`/industries/${industry}`}>
                <Badge variant="outline" className="text-xs hover:bg-primary/5 cursor-pointer px-3 py-1">
                  {industry === "all" ? "All Industries" : industry.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </Badge>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Related TRUSTFLOW Offerings</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {risk.relatedOfferings.map((offering, i) => (
              <Link key={i} href={`/offerings/${offering}`}>
                <Badge variant="outline" className="text-xs hover:bg-primary/5 cursor-pointer px-3 py-1">
                  {offering.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </Badge>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Risk Mitigation Framework</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-primary mb-2">Prevent</h3>
              <p className="text-xs text-slate-500">Implement controls to reduce likelihood</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-primary mb-2">Detect</h3>
              <p className="text-xs text-slate-500">Identify risk events early</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-primary mb-2">Transfer</h3>
              <p className="text-xs text-slate-500">Insurance and risk sharing solutions</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-primary mb-2">Respond</h3>
              <p className="text-xs text-slate-500">Activate incident response protocols</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="font-bold text-primary mb-2">Recover</h3>
              <p className="text-xs text-slate-500">Restore operations and learn</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 rounded-xl p-8 border border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4 font-serif">
            Assess Your Exposure to {risk.label}
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Get a specialized risk assessment for this specific threat to your organization.
          </p>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Request Risk Assessment <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}