import { notFound } from "next/navigation";
import { platformData, PlatformData } from "@/data/platformData";
import Link from "next/link";
import {
  Target, Shield, Database, FileText, Briefcase, Truck, Bell, Users, Zap,
  Cpu, TrendingUp, Gauge, Activity, CheckCircle2, ChevronRight
} from "lucide-react";

const PLATFORM_CATEGORIES: Record<string, string> = {
  "risk-diagnostic-engine": "Risk Discovery & Diagnostic",
  "risk-dna-mapper": "Risk Discovery & Diagnostic",
  "cyber-intelligence": "Risk Discovery & Diagnostic",
  "contract-intelligence": "Due Diligence",
  "ma-due-diligence": "Due Diligence",
  "counterparty-assessment": "Due Diligence",
  "cyber-due-diligence": "Due Diligence",
  "supply-chain-monitor": "Risk Monitoring",
  "political-monitor": "Risk Monitoring",
  "regulatory-intelligence": "Risk Monitoring",
  "climate-scenario": "Planning & Scenario",
  "client-portal": "Client Experience",
  "risk-feed": "Risk Monitoring",
  "risk-intelligence-feed": "Client Experience",
  "executive-dashboards": "Client Experience",
  "api-integrations": "Client Experience",
};

const PLATFORM_IMAGES: Record<string, string> = {
  "risk-diagnostic-engine": "https://images.unsplash.com/photo-1551434677-e02a060f7554?q=80&w=2069&auto=format&fit=crop",
  "risk-dna-mapper": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
  "cyber-intelligence": "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
  "default": "https://images.unsplash.com/photo-1518103241174-ebb0c2b2e1e5?q=80&w=2070&auto=format&fit=crop"
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = platformData[slug];
  if (!data) return { title: "Platform Not Found" };
  return {
    title: `${data.title} | TRUSTFLOW Platform Suite`,
    description: data.description.substring(0, 160) + "...",
  };
}

export function generateStaticParams() {
  return Object.keys(platformData).map((slug) => ({ slug }));
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = platformData[slug];
  if (!data) notFound();

  const IconComponent = data.icon;
  const category = PLATFORM_CATEGORIES[slug] || "Platform";
  const heroImage = PLATFORM_IMAGES[slug] || PLATFORM_IMAGES["default"];

  const relatedModules = data.relatedModules || [];
  const relatedPlatformLinks = relatedModules
    .map((relatedSlug) => platformData[relatedSlug])
    .filter((p): p is PlatformData => !!p);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 h-full flex flex-col justify-center max-w-6xl">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-blue-600" />
              </div>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                {category} Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-serif leading-tight text-white">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {data.subtitle}
            </p>
            <p className="text-base text-gray-400 max-w-3xl leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-primary mb-2">Platform Overview</h2>
          <div className="w-16 h-1 bg-blue-600 mb-8" />
          <p className="text-lg text-slate-600 leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-bold text-primary">Key Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {(data.capabilities || data.features).map((cap, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-bold text-primary">Business Benefits</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {data.businessBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-blue-50/30 border border-blue-100">
                <CheckCircle2 className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-primary font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedPlatformLinks.length > 0 && (
        <section className="py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <Activity className="h-7 w-7 text-blue-600" />
              <h2 className="text-2xl font-bold text-primary">Related Modules</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedPlatformLinks.map((related) => {
                const RelatedIcon = related.icon;
                return (
                  <Link
                    key={related.slug}
                    href={`/platform/${related.slug}`}
                    className="block group bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <RelatedIcon className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-sm font-bold text-primary group-hover:text-blue-600 transition-colors">
                        {related.title.replace("TRUSTFLOW ", "")}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {related.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {data.useCases && data.useCases.length > 0 && (
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="h-7 w-7 text-blue-600" />
              <h2 className="text-2xl font-bold text-primary">Use Cases</h2>
            </div>
            <div className="space-y-4">
              {data.useCases.map((uc, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-lg border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">{i + 1}</span>
                  </div>
                  <span className="text-slate-600">{uc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <Gauge className="h-12 w-12 text-blue-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 font-serif">
            Leverage {data.title.split(" ").pop()} for Your Enterprise
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Deploy this platform to transform your risk management with AI-powered insights and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors">
                Request Demo <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="/platform">
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors">
                View All Platforms
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}