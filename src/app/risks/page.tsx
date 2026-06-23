import { EnterpriseRiskLayout } from "@/components/sections/EnterpriseRiskLayout";
import { riskCategories, risksData } from "@/data/risksData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ChevronRight, Shield, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function RisksLanding() {
  const totalRisks = Object.values(riskCategories).reduce(
    (sum, cat) => sum + cat.risks.length,
    0
  );

  const categoryStats = Object.entries(riskCategories).map(([id, cat]) => ({
    id,
    label: cat.label,
    count: cat.risks.length,
    icon: cat.icon,
    color: cat.color,
    description: id === "cross-industry"
      ? "Enterprise risks that affect every organization regardless of sector"
      : id === "cross-functional"
      ? "Risks that span multiple business functions simultaneously"
      : id === "industry-specific"
      ? "Risks unique to or predominantly affecting specific industries"
      : "Next-generation risks accelerating across emerging domains",
  }));

  const featuredRisks = [
    "ransomware",
    "data-breach",
    "business-interruption",
    "regulatory-investigation",
    "class-action-lawsuit",
    "ai-governance-failure",
    "climate-physical",
    "supply-chain-cyber",
    "crypto-exchange-hack",
    "autonomous-vehicle-accident",
    "quantum-encryption-breach",
    "critical-infrastructure-cyber",
  ].map(slug => risksData[slug]).filter(Boolean);

  return (
    <EnterpriseRiskLayout
      categoryId=""
      categoryLabel="Enterprise Risk Intelligence"
      categoryDescription={`${totalRisks} enterprise risks across enterprise, operational, cyber, regulatory, climate, financial, technology, and emerging domains — quantified, mapped, and actionable.`}
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2072&auto=format&fit=crop"
      categoryBadge="Risk Intelligence Platform"
      heroHeadline="Enterprise Risk Intelligence"
      heroSubtitle={`${totalRisks} enterprise risks, ${Object.keys(riskCategories).length} categories, one unified risk architecture.`}
      kpis={[
        { value: `${totalRisks}+`, label: "Enterprise Risks" },
        { value: "150+", label: "Countries Covered" },
        { value: "99%", label: "Risk Intelligence Accuracy" },
        { value: "24/7", label: "Expert Advisory" },
      ]}
    >
      {/* RISK CATEGORIES OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {categoryStats.map((cat) => {
          const CatIcon = cat.icon;
          return (
            <Link key={cat.id} href={`/risks/${cat.id}`} className="group block">
              <Card className="border-slate-300 bg-white shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${cat.color}15` }}
                    >
                      <CatIcon className="h-5 w-5" style={{ color: cat.color }} />
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {cat.label}
                      </CardTitle>
                      <Badge variant="secondary" className="text-sm mt-1">
                        {cat.count} Risks
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-600 leading-snug mb-3">{cat.description}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-sm font-semibold text-blue-600 flex items-center gap-1">
                      Explore Category <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* FEATURED RISKS */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 font-serif mb-6">Featured Enterprise Risks</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredRisks.map((risk) => {
          if (!risk) return null;
          const RiskIcon = risk.icon;
          return (
            <Link key={risk.slug} href={`/risks/${risk.slug}`} className="group block">
              <Card className="border-slate-300 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${risk.color}15` }}
                    >
                      <RiskIcon className="h-5 w-5" style={{ color: risk.color }} />
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mt-3">
                    {risk.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-600 leading-relaxed mb-4">{risk.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide w-24 shrink-0">Cost of Risk</span>
                      <span className="text-base text-slate-700 leading-snug">{risk.costOfRisk.split("per")[0].trim()}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide w-24 shrink-0">Likelihood</span>
                      <span
                        className="text-sm font-bold px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${risk.likelihood === "Almost Certain" ? "#DC2626" : risk.likelihood === "Very Likely" ? "#EA580C" : risk.likelihood === "Likely" ? "#F97316" : risk.likelihood === "Possible" ? "#F59E0B" : "#6B7280"}20`,
                          color: risk.likelihood === "Almost Certain" ? "#DC2626" : risk.likelihood === "Very Likely" ? "#EA580C" : risk.likelihood === "Likely" ? "#F97316" : risk.likelihood === "Possible" ? "#F59E0B" : "#6B7280",
                        }}
                      >
                        {risk.likelihood}
                      </span>
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100">
                    <span className="text-sm font-semibold text-blue-600 flex items-center gap-1">
                      View Full Analysis <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* RISK INTELLIGENCE CENTER CTA */}
      <div className="mt-16 bg-slate-900 rounded-xl p-8 md:p-12 text-center text-white">
        <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold font-serif mb-3">
          Risk Advisory Insurance & Resilience Solutions
        </h3>
        <p className="text-slate-300 max-w-2xl mx-auto mb-6">
          Our risk architects design intelligent protection strategies tailored to your organization&apos;s unique risk profile. AI-powered diagnostics, real-time threat intelligence, and board-level advisory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/platform/risk-diagnostic-engine"
            className="px-6 py-3 bg-[#1E5EFF] hover:bg-[#1E5EFF]/90 text-white font-semibold text-base uppercase tracking-wide rounded-lg transition-colors"
          >
            Book Free Risk Diagnostic
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white/10 text-white font-semibold text-base uppercase tracking-wide rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
          >
            Speak With Advisor
          </Link>
        </div>
      </div>
    </EnterpriseRiskLayout>
  );
}
