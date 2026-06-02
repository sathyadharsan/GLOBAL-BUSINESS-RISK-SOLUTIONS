import { notFound } from "next/navigation";
import { industriesData } from "@/data/siteContent";
import { offeringsData } from "@/data/offeringsData";
import { platformData } from "@/data/platformData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Shield, Target, Users, Building2, Leaf, Activity, Zap, Globe, Briefcase, Truck, Wheat, Landmark, Stethoscope, Cpu, Rocket, BarChart3, Lock, FileText, CheckCircle2, AlertTriangle, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeroSlider, HeroSlide } from "@/components/sections/HeroSlider";
import { INDUSTRIES_DATA_ENHANCED } from "@/data/industryData";

const INDUSTRY_SLIDER_IMAGES: Record<string, string[]> = {
  "technology-digital": [
    "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434677-e02a060f7554?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518103241174-ebb0c2b2e1e5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  ],
  "financial-services": [
    "https://images.unsplash.com/photo-1563986768609-322375bd5411?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  ],
  "healthcare-life-sciences": [
    "https://images.unsplash.com/photo-1576091160399-1e6e23e5a1ae?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586528125628-5c6a9e3b2d3c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508022162029-7ae2dc31a5b9?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
  ],
  "manufacturing-industrial": [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533612608997-212b06408e28?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434677-e02a060f7554?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518103241174-ebb0c2b2e1e5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
  ],
  "energy-utilities": [
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508022162029-7ae2dc31a5b9?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  ],
  "infrastructure-real-estate": [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  ],
  "transportation-logistics": [
    "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a63?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-1e6e23e5a1ae?q=80&w=2070&auto=format&fit=crop"
  ],
  "retail-hospitality": [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-1e6e23e5a1ae?q=80&w=2070&auto=format&fit=crop"
  ],
  "agriculture-environment": [
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-1e6e23e5a1ae?q=80&w=2070&auto=format&fit=crop"
  ],
  "government-public-sector": [
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-1e6e23e5a1ae?q=80&w=2070&auto=format&fit=crop"
  ],
  "education-nonprofit": [
    "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-1e6e23e5a1ae?q=80&w=2070&auto=format&fit=crop"
  ],
  "emerging-industries": [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-65536f8590a2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-1e6e23e5a1ae?q=80&w=2070&auto=format&fit=crop"
  ],
};

const INDUSTRY_OVERVIEW: Record<string, { importance: string; outlook: string; challenges: string[]; regulatory: string }> = {
  "technology-digital": {
    importance: "The technology sector drives global innovation with $5T+ market value and unprecedented digital transformation.",
    outlook: "AI, quantum computing, and cybersecurity demands will reshape risk profiles through 2030.",
    challenges: ["Cyber attacks", "Data privacy", "Regulatory compliance", "Third-party risk"],
    regulatory: "GDPR, DPDP Act, SEC cybersecurity rules, and emerging AI liability frameworks."
  },
  "financial-services": {
    importance: "Financial services underpin economic stability with $120T+ in assets requiring robust risk management.",
    outlook: "Digital finance, crypto regulation, and sanctions compliance are driving insurance evolution.",
    challenges: ["Regulatory scrutiny", "Cyber threats", "Liquidity risk", "Fraud prevention"],
    regulatory: "Basel III, MiFID II, SEC rules, and anti-money laundering requirements."
  },
  "healthcare-life-sciences": {
    importance: "Healthcare is mission-critical with $11T+ market size protecting patient lives and scientific innovation.",
    outlook: "Gene therapy, AI diagnostics, and personalized medicine create new liability landscapes.",
    challenges: ["Medical malpractice", "Product liability", "Data privacy", "Supply chain"],
    regulatory: "FDA, HIPAA, MAUDE, and international pharmacovigilance standards."
  },
  "manufacturing-industrial": {
    importance: "Manufacturing accounts for 16% of global GDP with complex multi-tier supply chains.",
    outlook: "Industry 4.0, sustainability mandates, and geopolitical risks are reshaping operations.",
    challenges: ["Property damage", "Business interruption", "Supply chain", "Environmental compliance"],
    regulatory: "OSHA, EPA, ISO standards, and environmental liability frameworks."
  },
  "energy-utilities": {
    importance: "$9T global energy market transitioning to renewables with massive infrastructure investment.",
    outlook: "Climate risk, carbon pricing, and political volatility drive new insurance categories.",
    challenges: ["Physical damage", "Climate impact", "Pollution liability", "Political risk"],
    regulatory: "EPA, IEA, carbon markets, and renewable energy incentives."
  },
  "infrastructure-real-estate": {
    importance: "$20T real estate and infrastructure market requiring long-term risk solutions.",
    outlook: "Climate adaptation, smart buildings, and ESG requirements transform coverage needs.",
    challenges: ["Natural catastrophe", "Construction delays", "Tenant risk", "Environmental"],
    regulatory: "Building codes, zoning laws, and long-tenor financing requirements."
  },
  "transportation-logistics": {
    importance: "$8T transportation market moving 80% of global trade volume.",
    outlook: "Autonomous fleets, supply chain digitization, and geopolitical routes create new exposures.",
    challenges: ["Cargo loss", "Liability claims", "Supply chain", "Currency risk"],
    regulatory: "Maritime law, aviation regulations, and cross-border compliance."
  },
  "retail-hospitality": {
    importance: "$25T retail and hospitality sector serving billions of consumers daily.",
    outlook: "E-commerce growth, experience economy, and ESG transparency reshape risk profiles.",
    challenges: ["Consumer claims", "Data breaches", "Business interruption", "Employment risk"],
    regulatory: "Consumer protection, labor laws, and data privacy regulations."
  },
  "agriculture-environment": {
    importance: "$10T agriculture market feeding 8B people with climate-dependent yields.",
    outlook: "Climate tech, precision farming, and sustainability reporting transform risk models.",
    challenges: ["Weather volatility", "Supply chain", "Environmental liability", "Water scarcity"],
    regulatory: "USDA, EPA, sustainability reporting, and climate disclosure rules."
  },
  "government-public-sector": {
    importance: "Public sector governs infrastructure for 7B citizens with fiduciary responsibilities.",
    outlook: "Digital governance, climate resilience, and social equity drive policy evolution.",
    challenges: ["Public liability", "Cyber security", "Political risk", "Compliance"],
    regulatory: "Public trust requirements, FOIA, and intergovernmental agreements."
  },
  "education-nonprofit": {
    importance: "$6T education and nonprofit sector managing sensitive data and research.",
    outlook: "Hybrid learning, research liability, and donor expectations evolve risk profiles.",
    challenges: ["Data privacy", "D&O liability", "Research risk", "Employment"],
    regulatory: "FERPA, accreditation standards, and charitable organization rules."
  },
  "emerging-industries": {
    importance: "Emerging sectors represent the future economy with untested risk landscapes.",
    outlook: "Space, AI, and quantum industries will require entirely new insurance frameworks.",
    challenges: ["Technology failure", "Regulatory gaps", "Liability uncertainty"],
    regulatory: "Evolving frameworks, safety certifications, and international standards."
  },
};

const INDUSTRY_BADGE_COLORS: Record<string, string> = {
  "technology-digital": "from-blue-600 to-indigo-600",
  "financial-services": "from-emerald-600 to-teal-600",
  "healthcare-life-sciences": "from-red-600 to-rose-600",
  "manufacturing-industrial": "from-orange-600 to-amber-600",
  "energy-utilities": "from-yellow-600 to-orange-600",
  "infrastructure-real-estate": "from-purple-600 to-violet-600",
  "transportation-logistics": "from-cyan-600 to-blue-600",
  "retail-hospitality": "from-pink-600 to-rose-600",
  "agriculture-environment": "from-green-600 to-emerald-600",
  "government-public-sector": "from-slate-600 to-gray-600",
  "education-nonprofit": "from-indigo-600 to-blue-600",
  "emerging-industries": "from-fuchsia-600 to-purple-600",
};

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.title} | TRUSTFLOW Industry Risk Architecture`,
    description: industry.description,
  };
}

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industriesData[slug];
  
  if (!industry) notFound();

  const industrySpecificData = INDUSTRIES_DATA_ENHANCED[slug];
  const overview = INDUSTRY_OVERVIEW[slug];
  const sliderImages = INDUSTRY_SLIDER_IMAGES[slug] || INDUSTRY_SLIDER_IMAGES["emerging-industries"];

  const slides: HeroSlide[] = sliderImages.map((image, i) => ({
    title: (
      <>
        {industry.title} Risk Intelligence<br />
        <span className="text-blue-400">Enterprise Assessment</span>
      </>
    ),
    subtitle: overview?.importance || industry.description,
    image,
    badge: "Industry Practice",
    buttons: [
      { label: "Book Assessment", className: "bg-blue-600 hover:bg-blue-700 border-0", href: "/contact" },
      { label: "View Offerings", variant: "outline", className: "border-white text-white hover:bg-white/10", href: "/offerings" }
    ]
  }));

  const relatedOfferings = Object.entries(offeringsData)
    .filter(([_, offering]) => offering.industryApplicability?.some(ind => 
      industry.title.toLowerCase().includes(ind.toLowerCase().split(' ')[0]) || 
      ind.toLowerCase().includes(industry.title.toLowerCase().split(' ')[0])
    ))
    .slice(0, 6);

  const relatedPlatforms = Object.entries(platformData)
    .slice(0, 5);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. ENTERPRISE HERO SLIDER */}
      <HeroSlider slides={slides} autoRotateInterval={5000} />

      {/* 2. EXECUTIVE INDUSTRY OVERVIEW */}
      {overview && (
        <section className="py-20 bg-white border-b">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="space-y-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Industry Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
                {industry.title} Market Intelligence
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" /> Industry Importance
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{overview.importance}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" /> Market Outlook
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{overview.outlook}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {overview.challenges?.map((challenge, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="text-sm font-bold text-primary mb-1">{challenge}</h4>
                    <p className="text-xs text-muted-foreground">Key business challenge</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
                <h4 className="text-sm font-bold text-blue-800 mb-2">Regulatory Environment</h4>
                <p className="text-sm text-slate-600">{overview.regulatory}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. KEY CHALLENGES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Key Challenges</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
              {industry.title} Risk Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Activity, label: "Operational", desc: "Process failures, equipment breakdown, supply chain" },
              { icon: Cpu, label: "Technology", desc: "AI, cyber, digital transformation risks" },
              { icon: FileText, label: "Regulatory", desc: "Compliance, legal, governance requirements" },
              { icon: Lock, label: "Cyber", desc: "Data breach, ransomware, third-party exposure" },
              { icon: BarChart3, label: "Financial", desc: "Market volatility, currency, credit risks" },
              { icon: Truck, label: "Supply Chain", desc: "Logistics, vendor, distribution risks" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                  <Icon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-2">{item.label}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY RISK LANDSCAPE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Risk Landscape</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
              Top Industry-Specific Risk Exposures
            </h2>
            <p className="text-slate-600 max-w-3xl">
              Critical risk categories requiring specialized mitigation strategies for {industry.title.toLowerCase()}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySpecificData?.risks?.map((risk, i) => (
              <Card key={i} className="border border-slate-200 hover:shadow-lg transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-primary">{risk.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">{risk.description}</p>
                </CardContent>
              </Card>
            )) || []}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY RISK SOLUTIONS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Risk Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
              Enterprise Mitigation Architecture
            </h2>
            <p className="text-slate-600 max-w-3xl">
              Structured solutions addressing {industry.title.toLowerCase()} risk exposures with measurable business outcomes.
            </p>
          </div>

          <div className="space-y-8">
            {industrySpecificData?.solutions?.map((solution, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">{solution.risk}</h3>
                    </div>
                  </div>
                  <div className="lg:col-span-8 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {solution.mitigation.map((item, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-sm font-semibold text-blue-600">
                        Outcome: {solution.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )) || []}
          </div>
        </div>
      </section>

      {/* 6. STATISTICS DASHBOARD */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Statistics</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
              Industry Risk Metrics & Benchmarks
            </h2>
            <p className="text-slate-600 max-w-3xl">
              Data-driven insights on risk frequency, severity, and insurance trends for {industry.title.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Risk Events", value: "1,247", change: "+12%" },
              { label: "Avg. Claim Size", value: "$2.4M", change: "+8%" },
              { label: "Coverage Cost", value: "4.2%", change: "-3%" },
              { label: "Recovery Rate", value: "87%", change: "+5%" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-xs text-slate-500 mb-2">{stat.label}</p>
                <p className={`text-xs font-semibold ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-blue-600'}`}>{stat.change} YoY</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RELATED OFFERINGS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Coverage Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
              Related Risk Offerings
            </h2>
            <p className="text-slate-600 max-w-3xl">
              Specialized insurance and risk transfer products for {industry.title.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedOfferings.map(([slug, offering]) => (
              <Link key={slug} href={`/offerings/${slug}`} className="group">
                <Card className="h-full border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-primary group-hover:text-blue-600 transition-colors">
                      {offering.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {offering.shortDescription || offering.valueText}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {offering.category.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RELATED PLATFORMS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Technology Suite</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
              Related Risk Platforms
            </h2>
            <p className="text-slate-600 max-w-3xl">
              AI-powered tools for {industry.title.toLowerCase()} risk assessment and management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(platformData).slice(0, 6).map(([slug, platform]) => {
              const Icon = platform.icon;
              return (
                <Link key={slug} href={`/platform/${slug}`} className="group">
                  <Card className="h-full border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <CardTitle className="text-base font-bold text-primary group-hover:text-blue-600 transition-colors">
                          {platform.title.replace("TRUSTFLOW ", "")}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {platform.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRY CASE STUDIES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
              Enterprise Risk Transformations
            </h2>
            <p className="text-slate-600 max-w-3xl">
              Real-world implementations of risk architecture for {industry.title.toLowerCase()} organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industrySpecificData?.caseStudies?.map((cs, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{cs.challenge}</h3>
                    <p className="text-sm text-slate-600">{cs.approach}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm font-semibold text-blue-600">Outcome: {cs.outcome}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
                  <p className="text-sm font-medium">{cs.impact}</p>
                </div>
              </div>
            )) || []}
          </div>
        </div>
      </section>

{/* 10. EXECUTIVE ADVISORY SECTION */}
       <section className="py-20 bg-slate-900 text-white">
         <div className="container mx-auto px-4 md:px-8 max-w-6xl">
           <div className="space-y-4 mb-12">
             <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Executive Advisory</span>
             <h2 className="text-3xl md:text-4xl font-bold font-serif">
               How TRUSTFLOW Helps {industry.title} Organizations
             </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {["Governance", "Compliance", "Risk Transfer", "Operational Resilience", "Digital Risk", "ESG"].map((service, i) => (
               <div key={i} className="space-y-3">
                 <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                   <Shield className="h-6 w-6 text-blue-400" />
                 </div>
                 <h3 className="text-lg font-bold text-white">{service}</h3>
                 <p className="text-sm text-slate-300">
                   Specialized advisory services for {service.toLowerCase()} challenges in {industry.title.toLowerCase()}.
                 </p>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* 11. INDUSTRY ECOSYSTEM MAP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
              Industry Risk Architecture Map
            </h2>
            <p className="text-slate-600 max-w-3xl">
              Integrated relationships between risks, offerings, platforms, and business outcomes for {industry.title.toLowerCase()}.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="font-bold text-primary">Risks</p>
                <p className="text-xs text-slate-500 mt-1">Industry-specific exposures</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                <Briefcase className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <p className="font-bold text-primary">Offerings</p>
                <p className="text-xs text-slate-500 mt-1">Specialized coverage</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                <Cpu className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="font-bold text-primary">Platforms</p>
                <p className="text-xs text-slate-500 mt-1">AI-powered tools</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                <FileText className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <p className="font-bold text-primary">Compliance</p>
                <p className="text-xs text-slate-500 mt-1">Regulatory alignment</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                <BarChart3 className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <p className="font-bold text-primary">Outcomes</p>
                <p className="text-xs text-slate-500 mt-1">Measurable results</p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. EXECUTIVE CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <Award className="h-12 w-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Build a Resilient {industry.title} Risk Architecture
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Connect with our industry practice leaders for a comprehensive risk assessment and customized architecture design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Book Consultation <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold">
                Request Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}