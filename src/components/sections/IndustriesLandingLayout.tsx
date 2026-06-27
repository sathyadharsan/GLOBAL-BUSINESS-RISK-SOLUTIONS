

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnterprisePageHero } from "@/components/sections/EnterprisePageHero";
import { Shield, Laptop, Factory, Landmark, Zap, Building, Truck, Tractor, Stethoscope, Users, BookOpen, Rocket, TrendingUp, CheckCircle2, ChevronRight, Download, BarChart3 } from "lucide-react";

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "technology-digital": Laptop,
  "financial-services": Landmark,
  "healthcare-life-sciences": Stethoscope,
  "manufacturing-industrial": Factory,
  "energy-utilities": Zap,
  "infrastructure-real-estate": Building,
  "transportation-logistics": Truck,
  "retail-hospitality": TrendingUp,
  "agriculture-environment": Tractor,
  "government-public-sector": Users,
  "education-nonprofit": BookOpen,
  "emerging-industries": Rocket,
};

const INDUSTRY_STATS = [
  { value: "12", label: "Industry Practices" },
  { value: "150+", label: "Countries Covered" },
  { value: "78+", label: "Risk Solutions" },
  { value: "45+", label: "Platforms" },
];

const INDUSTRY_CATEGORIES = [
  { id: "all", label: "All Industries" },
  { id: "traditional", label: "Traditional Industries" },
  { id: "emerging", label: "Emerging Industries" },
];

export function IndustriesLandingLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <EnterprisePageHero
        badge="Industry Practices"
        title="Enterprise Risk Architecture by Industry"
        subtitle="Sector-specific risk consulting practices with dedicated expertise across 12 verticals."
        capabilityTags={["Enterprise Risk", "Compliance", "Governance", "Supply Chain", "ESG"]}
        stats={[
          { value: "12+", label: "Industry Practices" },
          { value: "150+", label: "Enterprise Clients" },
          { value: "30+", label: "Countries" },
          { value: "99%", label: "Compliance" },
        ]}
        primaryCta={{ label: "Book Assessment", onClick: () => (window.location.href = "/contact") }}
        secondaryCta={{ label: "Download Industry Guide", onClick: () => (window.location.href = "/contact") }}
      />

      {/* SECTION 2: INDUSTRY STATISTICS */}
      <section className="w-full bg-white py-14 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="w-fit bg-[#EAF2FF] text-[#0B1F3A] border-slate-200 text-sm font-semibold tracking-widest uppercase mb-4">
              Enterprise Overview
            </Badge>
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 font-serif tracking-tight mb-3">
              Measurable Risk Solutions at Scale
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Dedicated industry practices serving enterprises globally.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INDUSTRY_STATS.map((stat, i) => (
              <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center py-8 px-4">
                <CardContent className="space-y-3 pt-0">
                  <Shield className="h-10 w-10 text-blue-600 mx-auto" />
                  <div className="text-[42px] font-bold text-slate-900 font-serif leading-none">
                    {stat.value}
                  </div>
                  <div className="text-base font-semibold text-slate-700">
                    {stat.label}
                  </div>
                  <p className="text-sm text-slate-500 leading-snug px-2">
                    Enterprise capability
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRY MARKETPLACE GRID */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Marketplace
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Select an industry to explore specialized risk solutions and architecture.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {INDUSTRY_CATEGORIES.map((cat) => (
              <Button
                key={cat.id}
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-100"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "technology-digital", label: "Technology & Digital", slug: "technology-digital" },
              { id: "financial-services", label: "Financial Services", slug: "financial-services" },
              { id: "healthcare-life-sciences", label: "Healthcare & Life Sciences", slug: "healthcare-life-sciences" },
              { id: "manufacturing-industrial", label: "Manufacturing & Industrial", slug: "manufacturing-industrial" },
              { id: "energy-utilities", label: "Energy & Utilities", slug: "energy-utilities" },
              { id: "infrastructure-real-estate", label: "Infrastructure & Real Estate", slug: "infrastructure-real-estate" },
              { id: "transportation-logistics", label: "Transportation & Logistics", slug: "transportation-logistics" },
              { id: "retail-hospitality", label: "Retail & Hospitality", slug: "retail-hospitality" },
              { id: "agriculture-environment", label: "Agriculture & Environment", slug: "agriculture-environment" },
              { id: "government-public-sector", label: "Government & Public Sector", slug: "government-public-sector" },
              { id: "education-nonprofit", label: "Education & Non-Profit", slug: "education-nonprofit" },
              { id: "emerging-industries", label: "Emerging & Niche Industries", slug: "emerging-industries" },
            ].map((industry) => {
              const Icon = INDUSTRY_ICONS[industry.slug] || Shield;
              return (
                <Link key={industry.slug} to={`/industries/${industry.slug}`}>
                  <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow h-full cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-[#EAF2FF] flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[#1E5EFF]" />
                        </div>
                        <CardTitle className="text-base font-bold text-slate-900 leading-snug">
                          {industry.label}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-slate-600 leading-snug mb-3">
                        Specialized risk architecture and insurance solutions for {industry.label.toLowerCase()}.
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                        <span className="text-sm font-semibold text-blue-600 flex items-center gap-1">
                          View Details <ChevronRight className="h-3 w-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED INDUSTRIES */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Featured Industries
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Deep domain expertise in our highest-demand sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["technology-digital", "financial-services", "healthcare-life-sciences"].map((slug) => {
              const Icon = INDUSTRY_ICONS[slug] || Shield;
              const labels: Record<string, string> = {
                "technology-digital": "Technology & Digital",
                "financial-services": "Financial Services",
                "healthcare-life-sciences": "Healthcare & Life Sciences",
              };
              return (
                <Link key={slug} to={`/industries/${slug}`}>
                  <Card className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-8 w-8 text-blue-600" />
                        <CardTitle className="text-lg font-bold text-slate-900">
                          {labels[slug]}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-slate-600 leading-snug mb-3">
                        Comprehensive risk solutions with specialized coverage architecture.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-base text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Cyber & Technology Risk</span>
                        </li>
                        <li className="flex items-start gap-2 text-base text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>D&O & Professional Liability</span>
                        </li>
                        <li className="flex items-start gap-2 text-base text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Business Interruption</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRY CATEGORIES */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Categories
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Browse industries by operational domain and risk profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Technology & Digital", icon: Laptop, color: "from-blue-600 to-indigo-600" },
              { label: "Financial Services", icon: Landmark, color: "from-emerald-600 to-teal-600" },
              { label: "Healthcare", icon: Stethoscope, color: "from-red-600 to-rose-600" },
              { label: "Manufacturing", icon: Factory, color: "from-orange-600 to-amber-600" },
              { label: "Energy", icon: Zap, color: "from-yellow-600 to-orange-600" },
              { label: "Infrastructure", icon: Building, color: "from-purple-600 to-violet-600" },
            ].map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Card key={i} className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow text-center p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{cat.label}</h3>
                  <p className="text-sm text-slate-500 mb-3">Specialized risk solutions</p>
                  <div className="text-sm font-semibold text-blue-600">Explore Practice</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRY DIAGNOSTIC CTA */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0B1F3A] font-serif tracking-tight">
              Industry Risk Diagnostic
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-snug">
              Get a comprehensive assessment of your industry-specific risk profile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Industry Risk Assessment", description: "Evaluate sector-specific exposures across your operations." },
              { title: "Coverage Gap Analysis", description: "Identify gaps between current coverage and actual risks." },
            ].map((diag, i) => (
              <Card
                key={i}
                className="border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0">
                    <BarChart3 className="h-4 w-4 text-[#1E5EFF]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1F3A] mb-1">{diag.title}</h3>
                    <p className="text-base text-slate-600 leading-snug">{diag.description}</p>
                    <Button
                      variant="link"
                      className="px-0 mt-2 text-[#1E5EFF] hover:text-[#0B1F3A] text-sm font-semibold uppercase tracking-wide"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Start Assessment <ChevronRight className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: EXECUTIVE CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0D2B4D] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold font-serif tracking-tight">
              Ready to Architect Your Industry Risk Strategy?
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-snug">
              Connect with our industry practice leaders to design a customized
              program aligned to your sector&apos;s unique exposures and strategic objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                size="lg"
                className="bg-[#1E5EFF] hover:bg-[#1E5EFF]/90 text-white font-semibold text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                Book Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                Request Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 text-sm uppercase tracking-widest"
                onClick={() => (window.location.href = "/contact")}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Industry Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}