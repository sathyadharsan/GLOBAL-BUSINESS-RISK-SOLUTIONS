import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { risksData, riskCategories } from "@/data/risksData";
import { EnterpriseRiskLayout } from "@/components/sections/EnterpriseRiskLayout";
import { AlertTriangle, Lock, Activity, HelpCircle, Building2, BarChart3, CheckCircle2, TrendingUp, ChevronRight, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

const SLUG_ALIASES: Record<string, string> = {
  "third-party": "third-party-vendor-risk",
  "directors-officers": "d-o-personal-liability",
  "supply-chain": "single-source-supplier-failure",
  "climate": "climate-physical",
  "esg": "esg-risk",
  "regulatory": "regulatory-compliance-failure",
  "political-risk": "geographic-concentration",
  "fire-explosion": "natural-catastrophe",
  "equipment-breakdown": "technology-obsolescence",
  "premium-volatility": "business-interruption",
  "supply-chain-risk": "single-source-supplier-failure",
  "construction-risk": "construction-delay",
  "cyber": "ransomware",
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "cross-industry": "Enterprise risks that affect every organization regardless of sector — cyber, regulatory, natural catastrophe, litigation, and governance exposures that span all industries and geographies.",
  "cross-functional": "Risks that span multiple business functions simultaneously — operations, finance, legal, technology, and human capital dependencies that create cascading enterprise exposure.",
  "industry-specific": "Risks unique to or predominantly affecting specific industries — from technology and healthcare to energy, mining, construction, and emerging sectors.",
  "emerging": "Next-generation enterprise risks from quantum computing, autonomous systems, space, drone operations, AI governance, and climate technology failures that are rapidly accelerating.",
};

const CATEGORY_HERO_IMAGES: Record<string, string> = {
  "cross-industry": "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
  "cross-functional": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  "industry-specific": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "emerging": "https://images.unsplash.com/photo-1531746790098-55c31333f47a?q=80&w=2070&auto=format&fit=crop",
};

const CATEGORY_KPIS: Record<string, { value: string; label: string }[]> = {
  "cross-industry": [
    { value: "20", label: "Cross-Industry Risks" },
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Risk Intelligence Accuracy" },
    { value: "24/7", label: "Expert Advisory" },
  ],
  "cross-functional": [
    { value: "11", label: "Cross-Functional Risks" },
    { value: "150+", label: "Countries Covered" },
    { value: "99%", label: "Program Optimization" },
    { value: "24/7", label: "Advisory Access" },
  ],
  "industry-specific": [
    { value: "41", label: "Industry-Specific Risks" },
    { value: "30+", label: "Industry Verticals" },
    { value: "99%", label: "Client Retention" },
    { value: "24/7", label: "Expert Support" },
  ],
  "emerging": [
    { value: "6", label: "Emerging Risks" },
    { value: "$2B+", label: "Lloyd's Capacity" },
    { value: "Pioneer", label: "Market Position" },
    { value: "24/7", label: "Crisis Response" },
  ],
};

export default function RiskPage() {
  const { slug } = useParams();
  
  if (!slug) return <Navigate to="/404" replace />;

  const resolvedSlug = SLUG_ALIASES[slug] || slug;

  if (resolvedSlug === "risk-intelligence-center") {
    return <div>Risk Intelligence Center</div>;
  }

  if (resolvedSlug === "risk-diagnostic") {
    return <div>Risk Diagnostic</div>;
  }

  const isCategory = riskCategories[resolvedSlug];

  if (!isCategory && !risksData[resolvedSlug]) {
    return <Navigate to="/404" replace />;
  }

  if (isCategory) {
    const risksInCategory = isCategory.risks;

    return (
      <EnterpriseRiskLayout
        categoryId={resolvedSlug}
        categoryLabel={isCategory.label}
        categoryDescription={CATEGORY_DESCRIPTIONS[resolvedSlug] || isCategory.label}
        heroImage={CATEGORY_HERO_IMAGES[resolvedSlug]}
        categoryBadge={isCategory.label}
        heroHeadline={`${isCategory.label} Risk Architecture`}
        kpis={CATEGORY_KPIS[resolvedSlug]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {risksInCategory.map((riskItem) => {
            const riskDetail = risksData[riskItem.id];
            if (!riskDetail) return null;
            const RiskIcon = riskDetail.icon;
            return (
              <a
                key={riskItem.id}
                href={`/risks/${riskItem.id}`}
                className="group block"
              >
                <Card className="border-slate-300 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${riskDetail.color}15` }}
                      >
                        <RiskIcon className="h-5 w-5" style={{ color: riskDetail.color }} />
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mt-3">
                      {riskDetail.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-slate-600 leading-relaxed mb-4">
                      {riskDetail.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide w-24 shrink-0">Cost of Risk</span>
                        <span className="text-base text-slate-700 leading-snug">{riskDetail.costOfRisk}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide w-24 shrink-0">Likelihood</span>
                        <span
                          className="text-sm font-bold px-2.5 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${riskDetail.likelihood === "Almost Certain" ? "#DC2626" : riskDetail.likelihood === "Very Likely" ? "#EA580C" : riskDetail.likelihood === "Likely" ? "#F97316" : riskDetail.likelihood === "Possible" ? "#F59E0B" : "#6B7280"}20`,
                            color: riskDetail.likelihood === "Almost Certain" ? "#DC2626" : riskDetail.likelihood === "Very Likely" ? "#EA580C" : riskDetail.likelihood === "Likely" ? "#F97316" : riskDetail.likelihood === "Possible" ? "#F59E0B" : "#6B7280",
                          }}
                        >
                          {riskDetail.likelihood}
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
              </a>
            );
          })}
        </div>
      </EnterpriseRiskLayout>
    );
  }

  const risk = risksData[resolvedSlug];
  if (!risk) return <Navigate to="/404" replace />;

  return (
    <EnterpriseRiskLayout
      categoryId=""
      categoryLabel={risk.label}
      categoryDescription={risk.description}
      heroImage={`https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop`}
      categoryBadge="Risk Detail"
      heroHeadline={risk.label}
    >
      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-5 w-5 text-primary" />
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
                    backgroundColor: `${risk.likelihood === "Almost Certain" ? "#DC2626" : risk.likelihood === "Very Likely" ? "#EA580C" : risk.likelihood === "Likely" ? "#F97316" : risk.likelihood === "Possible" ? "#F59E0B" : "#6B7280"}20`,
                    color: risk.likelihood === "Almost Certain" ? "#DC2626" : risk.likelihood === "Very Likely" ? "#EA580C" : risk.likelihood === "Likely" ? "#F97316" : risk.likelihood === "Possible" ? "#F59E0B" : "#6B7280",
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
                  <h4 className="text-sm font-semibold text-slate-500 uppercase mb-2">
                    {key.replace(/([A-Z])/g, " $1").trim()} Impact
                  </h4>
                  <p className="text-base text-primary">{value}</p>
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
                  <span className="text-slate-600 text-base leading-relaxed">{implication}</span>
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
              <span
                key={i}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-base font-medium border border-slate-200 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
              >
                {industry === "all" ? "All Industries" : industry.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </span>
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
              <span
                key={i}
                className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-base font-medium border border-blue-200 cursor-pointer hover:bg-blue-100 transition-colors"
              >
                {offering.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
            ))}
            {risk.relatedSolutions.map((solution, i) => (
              <span
                key={`sol-${i}`}
                className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-base font-medium border border-purple-200"
              >
                {solution}
              </span>
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
              <p className="text-sm text-slate-500">Implement controls to reduce likelihood</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-primary mb-2">Detect</h3>
              <p className="text-sm text-slate-500">Identify risk events early</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-primary mb-2">Transfer</h3>
              <p className="text-sm text-slate-500">Insurance and risk sharing solutions</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-primary mb-2">Respond</h3>
              <p className="text-sm text-slate-500">Activate incident response protocols</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="font-bold text-primary mb-2">Recover</h3>
              <p className="text-sm text-slate-500">Restore operations and learn</p>
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
          <a href="/contact">
            <button className="bg-[#1E5EFF] hover:bg-[#1E5EFF]/90 text-white font-semibold px-6 py-3 rounded-lg text-base uppercase tracking-wide transition-colors">
              Request Risk Assessment
            </button>
          </a>
        </section>
      </div>
    </EnterpriseRiskLayout>
  );
}