import type { Metadata } from "next";
import { getOfferingsByCategory, CATEGORY_GROUPS, OfferingData } from "@/data/offeringsData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Cpu, BadgeDollarSign, TrendingUp, Grid, Globe, Briefcase, Rocket, AlertCircle, Target, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeroBackground } from "@/components/sections/HeroBackground";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Cpu,
  BadgeDollarSign,
  TrendingUp,
  Grid,
  Globe,
  Briefcase,
  Rocket,
};

const CATEGORY_IMAGES: Record<string, string> = {
  "property-sfsp": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  "cyber": "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
  "liability": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  "financial": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  "default": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
};

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = CATEGORY_GROUPS[category as keyof typeof CATEGORY_GROUPS];
  if (!categoryInfo) return { title: "Category Not Found" };
  return {
    title: `${categoryInfo.label} | TRUSTFLOW - Business Risk Architecture Platform`,
    description: categoryInfo.description,
  };
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_GROUPS).map((category) => ({ category }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = CATEGORY_GROUPS[category as keyof typeof CATEGORY_GROUPS];
  const offerings = getOfferingsByCategory(category);
  
  if (!categoryInfo) {
    return <div>Category not found</div>;
  }

  const Icon = ICONS[categoryInfo.icon] || Shield;
  const heroImage = CATEGORY_IMAGES[category] || CATEGORY_IMAGES["default"];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. ENTERPRISE HERO SECTION */}
      <HeroBackground
        title={categoryInfo.label}
        subtitle={categoryInfo.description}
        image={heroImage}
        badges={[`${offerings.length}+ Solutions`]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Offerings", href: "/offerings" },
          { label: categoryInfo.label }
        ]}
      />

      {/* 2. BUSINESS CHALLENGES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Business Challenges</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offerings.slice(0, 6).map((offering) => (
              <div key={offering.slug} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="text-base font-bold text-slate-800 mb-2">{offering.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {offering.businessProblem?.substring(0, 120)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION ARCHITECTURE */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Grid className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Solution Architecture</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.slice(0, 2).map((offering) => (
              <div key={offering.slug} className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-800 mb-3">{offering.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {offering.solutionArchitecture}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY MAPPING */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Industry Applicability</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(offerings.flatMap(o => o.industryApplicability || []))).map((industry, i) => (
              <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RELATED RISKS */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Related Risk Areas</h2>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(offerings.flatMap(o => o.relatedRisks || []))).slice(0, 15).map((risk, i) => (
              <span key={i} className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100">
                {risk}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED SOLUTIONS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Solutions in This Category</h2>
            <p className="text-slate-600">{offerings.length} enterprise-grade offerings available</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering) => (
              <Card key={offering.slug} className="border-slate-200 hover:shadow-lg transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-slate-900">
                    {offering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                    {offering.shortDescription || offering.valueText}
                  </p>
                  <a href={`/offerings/${offering.slug}`} className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                    Learn More →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EXECUTIVE CTA */}
      <section className="w-full bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Ready to Architect Your Risk Strategy?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Book a consultation with our senior risk architects to design a customized program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Book Consultation
            </a>
            <a href="/contact" className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors">
              Request Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}