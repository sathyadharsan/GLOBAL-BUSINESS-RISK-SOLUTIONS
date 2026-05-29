"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Building2, Anchor, Briefcase, Activity, CheckCircle2, ChevronRight, Cpu, Factory, Zap, TrendingUp, Users, Check, Award, AlertTriangle, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { HeroSlider, HeroSlide } from "@/components/sections/HeroSlider";

export default function Home() {
  const slides: HeroSlide[] = [
    {
      title: (
        <>
          Protect the Balance Sheet.<br />
          <span className="text-blue-400">Enable the Business Plan.</span>
        </>
      ),
      subtitle: "Architecting enterprise-grade non-life insurance and risk transfer solutions across industries, infrastructure, governance, and global operations.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      buttons: [
        { label: "Explore Solutions", className: "bg-blue-600 hover:bg-blue-700 border-0", href: "/offerings/property-sfsp" },
        { label: "Schedule Consultation", variant: "outline", className: "border-white text-white hover:bg-white/10", href: "/contact" }
      ]
    },
    {
      title: (
        <>
          Architecting Resilience.<br />
          <span className="text-blue-400">Neutralizing Liabilities.</span>
        </>
      ),
      subtitle: "Mitigate operational volatility with custom-designed D&O, Cyber, and General Liability structures matching national regulatory mandates and SEBI/FCA compliance.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      buttons: [
        { label: "Liability Shield", className: "bg-blue-600 hover:bg-blue-700 border-0", href: "/offerings/cgl" },
        { label: "Consult an Advocate", variant: "outline", className: "border-white text-white hover:bg-white/10", href: "/contact" }
      ]
    },
    {
      title: (
        <>
          Global Risk Placement.<br />
          <span className="text-blue-400">A++ Carrier Capacity.</span>
        </>
      ),
      subtitle: "Secure institutional capacity for high-risk assets, Marine Hull, parametric setups, and catastrophic event protections across 150+ countries.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
      buttons: [
        { label: "Asset Coverages", className: "bg-blue-600 hover:bg-blue-700 border-0", href: "/offerings/property-sfsp" },
        { label: "Parametric Risk", variant: "outline", className: "border-white text-white hover:bg-white/10", href: "/offerings/parametric" }
      ]
    }
  ];

  const metrics = [
    { val: "150+", label: "Countries Served", desc: "Cross-border placement capabilities", icon: Globe },
    { val: "A++ Rated", label: "Carrier Network", desc: "Top-tier syndicates & market capacity", icon: Shield },
    { val: "97%", label: "Client Retention", desc: "Long-term corporate relationships", icon: CheckCircle2 },
    { val: "40% Faster", label: "Claim Settlement", desc: "Proprietary resolution protocols", icon: Zap }
  ];

  const featuredOfferings = [
    { title: "Property / SFSP All Risks", icon: Building2, desc: "Buildings, Stock, Plant, Flood, EQ, Terrorism cover structured for enterprise scale.", href: "/offerings/property-sfsp", tag: "Assets" },
    { title: "CAR / EAR / Builders Risk", icon: Activity, desc: "Construction works, ALOP, Cross-liability, and Soft costs engineering.", href: "/offerings/car-ear", tag: "Projects" },
    { title: "Marine Cargo / Stock Throughput", icon: Anchor, desc: "Global trade risk management, open cover policies, and stock-throughput solutions.", href: "/offerings/marine-cargo", tag: "Logistics" },
    { title: "D&O / Management Liability", icon: Briefcase, desc: "Tailored Side A / B / C coverages for SEBI mandates, IPO listings, and PE exits.", href: "/offerings/do-liability", tag: "Governance" },
    { title: "Cyber Liability", icon: Shield, desc: "Systemic ransomware, DPDP compliance, breach response, and cloud business interruption.", href: "/offerings/cyber", tag: "Technology" },
    { title: "M&A / Transactional Risk", icon: Globe, desc: "Representations & Warranties, tax liability, title insurance, and contingent risk transfer.", href: "/offerings/pe-fund-exit", tag: "Corporate" }
  ];

  const industries = [
    { name: "Tech & SaaS", slug: "technology-saas", icon: Cpu, desc: "Cyber breach indemnity, IPO liability, and professional coverage structuring." },
    { name: "Manufacturing", slug: "manufacturing", icon: Factory, desc: "Asset valuation, industrial all risks, business interruption, and supply chain continuity." },
    { name: "Energy & Renewables", slug: "energy", icon: Zap, desc: "Parametric wind/solar models, project commissioning risks, and environmental liability." },
    { name: "Fintech & Banking", slug: "fintech", icon: TrendingUp, desc: "Crime coverages, D&O liability, credit insurance, and regulatory compliance advisory." },
    { name: "Infrastructure & Projects", slug: "infrastructure", icon: Building2, desc: "Concessionaire protections, CAR/EAR, cargo logistics, and long-tenor liability." }
  ];

  const insights = [
    { type: "Regulatory Alert", title: "Navigating the New SEC Cyber Disclosure Rules & DPDP Mandates", date: "Oct 2024", read: "5 min read" },
    { type: "Market Update", title: "Hardening Capacity and Pricing Trends in the Global D&O Market", date: "Aug 2024", read: "8 min read" },
    { type: "Whitepaper", title: "Parametric Risk Transfer in Agri-Tech Infrastructure Projects", date: "Jun 2024", read: "12 min read" },
    { type: "Underwriting Brief", title: "Supply Chain CBI Triggers & Contingent Exposure Mitigation", date: "May 2024", read: "6 min read" },
    { type: "Risk Advisory", title: "Structured ART Solutions and Captive Insurance Formations in GIFT City", date: "Mar 2024", read: "10 min read" }
  ];

  // Carousel Refs
  const offeringsRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.8;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col bg-slate-50 overflow-x-hidden">
      {/* 1. HERO */}
      <HeroSlider slides={slides} />

      {/* 2. KEY METRICS STRIP - Overlapping Hero border */}
      <section id="metrics" className="relative -mt-16 z-20 container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="bg-slate-900/95 border border-slate-800 backdrop-blur-md rounded-xl p-5 text-white shadow-xl hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl font-extrabold text-blue-400 font-serif tracking-tight">{m.val}</span>
                <m.icon className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <h4 className="text-xs font-bold text-slate-200 tracking-wide uppercase">{m.label}</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED OFFERINGS SLIDER */}
      <section id="offerings" className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Enterprise Protection</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">Featured Risk Offerings</h2>
              <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                Comprehensive risk transfer structures designed to protect enterprise capital across global operational exposures.
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/offerings/property-sfsp" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center text-sm mr-4 hidden sm:flex">
                View all 22 product lines <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              {/* Carousel controls */}
              <button
                onClick={() => scrollCarousel(offeringsRef, "left")}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel(offeringsRef, "right")}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Slider list */}
          <div
            ref={offeringsRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory pb-4 pr-4"
          >
            {featuredOfferings.map((offering, i) => (
              <div key={i} className="snap-align-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                <Link href={offering.href} className="group relative bg-white border border-slate-200 hover:border-blue-500/30 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-[260px] overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100/60 transition-colors duration-300" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {offering.tag}
                      </span>
                      <offering.icon className="h-6 w-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-primary font-serif tracking-tight">
                      {offering.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {offering.desc}
                    </p>
                  </div>
                  
                  <div className="relative z-10 pt-4 mt-auto border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors flex items-center">
                      View coverage details <ChevronRight className="ml-1 h-3 w-3" />
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">
                      A++ Rated Capacity
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY SHOWCASE */}
      <section id="methodology" className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,94,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Advisory Process</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-serif leading-tight">
                We design risk architectures. We don&apos;t just sell policies.
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
                Most brokers copy-paste last year&apos;s policies, carrying forward critical coverage gaps. GBRS audits corporate policies block-by-block to secure custom extensions, verify operational limits, and test claim responsiveness.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wide">Exclusion Auditing</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">Finding silent exclusions hidden in treaty sub-limits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wide">Capacity Syndication</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">Pruning costs by matching Lloyds syndicates and domestic capacity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wide">Active Claims Advocacy</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">Pre-agreed SLA triggers to ensure insurers pay losses quickly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wide">Global Compliance</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">Structuring local policies mapping to international regulations.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-6 border-0 shadow-md">
                    Request Risk Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about-us/our-story">
                  <Button variant="outline" className="border-white/20 hover:border-white text-white hover:bg-white/10 h-12 px-6">
                    Our Philosophy
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Mockup */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-2xl space-y-6 backdrop-blur-sm">
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-sm font-bold text-slate-200">Risk Exposure Health</h3>
                  <p className="text-[10px] text-slate-500">Corporate Assessment Profile</p>
                </div>
                <span className="text-[10px] font-bold text-red-400 bg-red-950/40 border border-red-900/30 px-2 py-0.5 rounded">
                  Critical Gaps Found
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full border-8 border-slate-800 border-t-blue-500 border-r-blue-500 flex flex-col items-center justify-center shrink-0">
                  <span className="text-xl font-extrabold text-blue-400">68%</span>
                  <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">Score</span>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Property Coverages</span>
                    <span className="font-semibold text-slate-200">92%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Liability Shield</span>
                    <span className="font-semibold text-slate-200">54%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Cyber Resilience</span>
                    <span className="font-semibold text-slate-200">38%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-red-950/20 border border-red-900/20 rounded-lg flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[11px] font-bold text-red-200">Exclusion Gap: Cyber Ransomware</h4>
                    <p className="text-[9px] text-slate-400 mt-0.5">Current D&amp;O policy carries systemic tech exclusions. Re-architecture recommended.</p>
                  </div>
                </div>
                <div className="p-3 bg-blue-950/20 border border-blue-900/20 rounded-lg flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[11px] font-bold text-blue-200">Asset Valuation Compliance</h4>
                    <p className="text-[9px] text-slate-400 mt-0.5">Asset Reinvestment Valuation correctly matching replacement costs.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SECTOR-SPECIFIC SLIDER */}
      <section id="industries" className="py-24 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Sector Competencies</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif tracking-tight">Industry-Specialized Risk Architecture</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We do not believe in generic policies. Our practice leaders structure coverages that match the precise operational realities of your sector.
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => scrollCarousel(industriesRef, "left")}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel(industriesRef, "right")}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider track */}
          <div
            ref={industriesRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory pb-4 pr-4"
          >
            {industries.map((ind, i) => (
              <div key={ind.slug} className="snap-align-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(20%-20px)]">
                <Link href={`/industries/${ind.slug}`} className="group bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-blue-500/30 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer h-[230px]">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ind.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-primary group-hover:text-blue-600 transition-colors">{ind.name}</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center text-[10px] font-bold text-blue-600 uppercase mt-auto">
                    Explore Sector <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRUST & SOCIAL PROOF */}
      <section id="trust" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Institutional Validation</h3>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary tracking-tight">Trusted by Market Leaders</h2>
            
            <div className="flex flex-wrap justify-center gap-3 pt-6 max-w-4xl mx-auto">
              {[
                "Fortune 500 Tech",
                "Global Infra Funds",
                "Listed Manufacturers",
                "Private Equity Portfolios",
                "Sovereign Wealth Funds",
                "SEBI Regulated Advisory",
              ].map((label) => (
                <div
                  key={label}
                  className="px-4 py-2 border border-slate-200 rounded-full text-xs font-semibold text-slate-500 bg-white shadow-sm"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Testimonial card */}
            <div className="lg:col-span-7 bg-white border border-slate-200/80 p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-blue-100 text-8xl font-serif select-none pointer-events-none opacity-40">
                &ldquo;
              </div>
              <div className="space-y-6 relative z-10">
                <div className="text-blue-500 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-lg">★</span>
                  ))}
                </div>
                <blockquote className="text-base md:text-lg text-slate-700 font-medium italic leading-relaxed">
                  &ldquo;GBRS re-architected our entire global D&amp;O and Cyber program ahead of our IPO, securing capacity that our previous broker deemed impossible while significantly reducing our total cost of risk.&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3.5 pt-8 border-t border-slate-100 mt-8">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs">CFO</div>
                <div>
                  <div className="text-xs font-bold text-primary">Chief Financial Officer</div>
                  <div className="text-[10px] text-muted-foreground">Global SaaS Enterprise (Listed)</div>
                </div>
              </div>
            </div>

            {/* Stats/Highlight card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <Award className="w-8 h-8 text-blue-300" />
                <h3 className="text-lg font-bold font-serif tracking-tight">Structured Advocacy</h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  We don&apos;t just negotiate prices. GBRS manages claims from notification to payout, leveraging pre-agreed insurer SLA templates to reduce delays.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-blue-600/30">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-blue-200">Average Claim Processing</span>
                  <span className="text-sm font-extrabold text-blue-300">14 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-blue-200">Claim Approval Ratio</span>
                  <span className="text-sm font-extrabold text-blue-300">99.2%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. LATEST INSIGHTS SLIDER */}
      <section id="insights" className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Industry Updates</span>
              <h2 className="text-3xl font-bold text-primary font-serif tracking-tight">Latest Risk Insights</h2>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/insights" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center text-sm mr-4 hidden sm:flex">
                View all publications <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button
                onClick={() => scrollCarousel(insightsRef, "left")}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel(insightsRef, "right")}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Slider track */}
          <div
            ref={insightsRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory pb-4 pr-4"
          >
            {insights.map((post, i) => (
              <div key={i} className="snap-align-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                <div className="group bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[200px]">
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                      <span>{post.type}</span>
                      <span className="text-slate-400">{post.read}</span>
                    </div>
                    <h3 className="text-base font-bold text-primary group-hover:text-blue-600 transition-colors leading-snug font-serif line-clamp-3">
                      {post.title}
                    </h3>
                  </div>
                  <div className="text-[10px] text-muted-foreground pt-4 border-t border-slate-100 flex justify-between items-center mt-auto">
                    <span>Published {post.date}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 text-blue-600 font-bold">
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
