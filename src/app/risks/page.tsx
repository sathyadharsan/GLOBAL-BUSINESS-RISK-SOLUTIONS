import Link from "next/link";
import { riskCategories } from "@/data/risksData";
import RiskCategoryCard from "@/components/sections/RiskCategoryCard";
import { HeroBackground } from "@/components/sections/HeroBackground";

export default function RisksPage() {
  const totalRisks = Object.values(riskCategories).reduce(
    (sum, cat) => sum + cat.risks.length,
    0
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroBackground
        title="Understand Every Risk Before It Becomes a Loss"
        subtitle="Explore enterprise, operational, cyber, regulatory, climate, financial, technology and emerging risks across industries, functions and geographies with AI-powered risk intelligence."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2072&auto=format&fit=crop"
        badges={["Risk Intelligence Platform"]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Risk Intelligence" }
        ]}
        stats={[
          { val: "200+", label: "Risk Scenarios" },
          { val: "150+", label: "Countries" },
          { val: "40+", label: "Insurance Solutions" },
          { val: "20+", label: "Advisory Services" }
        ]}
        buttons={[
          { label: "Book Free Risk Diagnostic", className: "bg-blue-600 hover:bg-blue-700 border-0", href: "/risks/risk-diagnostic" },
          { label: "Access Risk Intelligence Center", variant: "outline", className: "border-white text-white hover:bg-white/10", href: "/risks/risk-intelligence-center" }
        ]}
      />

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