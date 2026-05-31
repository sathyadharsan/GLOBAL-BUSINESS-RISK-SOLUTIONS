import Link from "next/link";
import { riskCategories } from "@/data/risksData";
import RiskCategoryCard from "@/components/sections/RiskCategoryCard";

export default function RisksPage() {
  const totalRisks = Object.values(riskCategories).reduce(
    (sum, cat) => sum + cat.risks.length,
    0
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="w-full bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 py-20 max-w-6xl">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Risk Intelligence Platform</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-serif leading-tight">
              Understand Every Risk Before It Becomes a Loss
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
              Explore enterprise, operational, cyber, regulatory, climate, financial, technology and emerging risks 
              across industries, functions and geographies with AI-powered risk intelligence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold">200+</p>
                <p className="text-xs text-gray-400">Risk Scenarios</p>
              </div>
              <div>
                <p className="text-3xl font-bold">150+</p>
                <p className="text-xs text-gray-400">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold">40+</p>
                <p className="text-xs text-gray-400">Insurance Solutions</p>
              </div>
              <div>
                <p className="text-3xl font-bold">20+</p>
                <p className="text-xs text-gray-400">Advisory Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-primary mb-12">Risk Categories</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(riskCategories).map((category) => (
              <RiskCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            The World's Most Comprehensive Business Risk Architecture Platform
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our risk architects design intelligent protection strategies tailored to your organization's unique risk profile.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/risks/risk-diagnostic" className="flex-1 md:flex-none px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors border border-white/20">
              Book Free Risk Diagnostic
            </Link>
            <Link href="/risks/risk-intelligence-center" className="flex-1 md:flex-none px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20">
              Access Risk Intelligence Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}