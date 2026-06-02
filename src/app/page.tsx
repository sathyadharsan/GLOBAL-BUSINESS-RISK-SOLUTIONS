"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Leaf, Shield, Building2, Anchor, Briefcase, Activity, CheckCircle2, ChevronRight, Cpu, Factory, Zap, TrendingUp, Users, Check, Award, AlertTriangle, ChevronLeft, BarChart3, HeartPulse, Wheat, Rocket, Search, RefreshCw, Radar, Lock, Clock, FileText, Target, AlertCircle, Database, Share2, Truck, BookOpen } from "lucide-react";
import Link from "next/link";
import { HeroSlider, HeroSlide } from "@/components/sections/HeroSlider";

export default function Home() {
  const slides: HeroSlide[] = [
    {
      title: (
        <>
          Enterprise Risk Architecture<br />
          <span className="text-blue-400">for a Complex World</span>
        </>
      ),
      subtitle: "TRUSTFLOW helps organizations identify, assess, mitigate, transfer, and monitor risks across cyber, operational, financial, regulatory, ESG, supply chain, and emerging risk domains.",
      image: "https://images.unsplash.com/photo-1486406146906-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      badge: "Enterprise Risk",
      buttons: [
        { label: "Book Risk Assessment", className: "bg-blue-600 hover:bg-blue-700 border-0", href: "/contact" },
        { label: "Explore Solutions", variant: "outline", className: "border-white text-white hover:bg-white/10", href: "/offerings/property-sfsp" }
      ]
    },
    {
      title: (
        <>
          AI-Powered Risk Intelligence<br />
          <span className="text-blue-400">at Enterprise Scale</span>
        </>
      ),
      subtitle: "Proprietary algorithms and data models for predictive risk quantification across 150+ markets and regulatory environments.",
      image: "https://images.unsplash.com/photo-1518103241174-ebb0c2b2e1e5?q=80&w=2070&auto=format&fit=crop",
      badge: "AI Intelligence",
      buttons: [
        { label: "See Our Platforms", className: "bg-blue-600 hover:bg-blue-700 border-0", href: "/platform" },
        { label: "View Risk Categories", variant: "outline", className: "border-white text-white hover:bg-white/10", href: "/risks" }
      ]
    },
    {
      title: (
        <>
          Global Insurance & Risk Transfer<br />
          <span className="text-blue-400">With A++ Carrier Access</span>
        </>
      ),
      subtitle: "Secure institutional capacity for high-risk assets across property, casualty, cyber, D&O, and specialty lines with direct Lloyd's and global carrier access.",
      image: "https://images.unsplash.com/photo-1563986768609-322375bd5411?q=80&w=2070&auto=format&fit=crop",
      badge: "Insurance Solutions",
      buttons: [
        { label: "Explore Offerings", className: "bg-blue-600 hover:bg-blue-700 border-0", href: "/offerings" },
        { label: "Get TCOR Audit", variant: "outline", className: "border-white text-white hover:bg-white/10", href: "/contact" }
      ]
    },
    {
      title: (
        <>
          Supply Chain & Operational Resilience<br />
          <span className="text-blue-400">For Modern Enterprises</span>
        </>
      ),
      subtitle: "CBS coverage, supplier risk management, and business interruption protection designed for today's interconnected supply networks.",
      image: "https://images.unsplash.com/photo-1586528125628-5c6a9e3b2d3c?q=80&w=2070&auto=format&fit=crop",
      badge: "Operational Risk",
      buttons: [
        { label: "View Use Cases", className: "bg-blue-600 hover:bg-blue-700 border-0", href: "/use-cases" },
        { label: "Supply Chain Coverage", variant: "outline", className: "border-white text-white hover:bg-white/10", href: "/offerings/marine-cargo" }
      ]
    },
    {
      title: (
        <>
          Cyber, ESG & Emerging Risk Solutions<br />
          <span className="text-blue-400">Future-Ready Protection</span>
        </>
      ),
      subtitle: "Ransomware response, DPDP compliance, climate transition planning, and emerging risk frameworks for tomorrow's challenges.",
      image: "https://images.unsplash.com/photo-1497442923101-fd6d7e3a2c2a?q=80&w=2070&auto=format&fit=crop",
      badge: "Emerging Risk",
      buttons: [
        { label: "Cyber Solutions", className: "bg-blue-600 hover:bg-blue-700 border-0", href: "/offerings/cyber" },
        { label: "ESG Framework", variant: "outline", className: "border-white text-white hover:bg-white/10", href: "/solutions/esg-governance" }
      ]
    }
  ];

  const metrics = [
    { val: "200+", label: "Risk Categories", desc: "Cyber, operational, financial, regulatory, ESG", icon: Shield },
    { val: "41", label: "Industry Verticals", desc: "Specialized risk architectures", icon: Building2 },
    { val: "78", label: "Insurance & Risk Offerings", desc: "Comprehensive coverage solutions", icon: Briefcase },
    { val: "35", label: "AI-Powered Platforms", desc: "Risk intelligence tools", icon: Cpu }
  ];

  const featuredOfferings = [
    { title: "Property Insurance", icon: Shield, desc: "Buildings, Stock, Plant, Flood, EQ, Terrorism cover structured for enterprise scale.", href: "/offerings/property-sfsp", tag: "Assets" },
    { title: "Cyber Insurance", icon: Shield, desc: "Ransomware, breach response, DPDP compliance, and cloud business interruption coverage.", href: "/offerings/cyber", tag: "Technology" },
    { title: "D&O Insurance", icon: Users, desc: "Directors & Officers liability for IPOs, regulatory defence, and corporate governance.", href: "/offerings/do-liability", tag: "Governance" },
    { title: "Business Interruption", icon: BarChart3, desc: "Revenue protection during operational disruptions and restoration periods.", href: "/offerings/business-interruption", tag: "Continuity" },
    { title: "Professional Liability", icon: Briefcase, desc: "E&O coverage for consultants, architects, and professional services firms.", href: "/offerings/professional-indemnity", tag: "Advisory" },
    { title: "Crime Insurance", icon: AlertCircle, desc: "Fidelity guarantee and crime coverage for financial and cyber fraud.", href: "/offerings/fidelity", tag: "Security" },
    { title: "EPLI", icon: HeartPulse, desc: "Employment Practices Liability for workplace-related legal claims.", href: "/offerings/epl", tag: "HR" },
    { title: "Product Recall", icon: Shield, desc: "Brand protection and recall logistics for manufacturing and retail.", href: "/offerings/product-liability", tag: "Consumer" },
    { title: "Supply Chain Coverage", icon: Truck, desc: "Cargo, marine, and contingent business interruption protection.", href: "/offerings/marine-cargo", tag: "Logistics" },
    { title: "Political Risk", icon: Globe, desc: "Expropriation, currency inconvertibility, and cross-border protection.", href: "/offerings/political-risk", tag: "International" },
    { title: "Warranty Programs", icon: CheckCircle2, desc: "M&A transactional risk insurance and extended warranty coverage.", href: "/offerings/ma-insurance", tag: "M&A" },
    { title: "Contract Risk Advisory", icon: FileText, desc: "Contractual risk identification and insurance structuring.", href: "/solutions/global-program-architecture", tag: "Legal" },
    { title: "Claims Advisory", icon: BarChart3, desc: "Fierce representation during major loss events and dispute resolution.", href: "/solutions/claims-advocacy", tag: "Recovery" },
    { title: "Risk Architecture Consulting", icon: Target, desc: "Custom-designed insurance and risk transfer structures.", href: "/solutions/risk-engineering", tag: "Strategy" }
  ];

  const industries = [
    { name: "Technology & Digital", slug: "technology-digital", icon: Cpu, desc: "Software, SaaS, IT services, and digital platform risk architecture." },
    { name: "Financial Services", slug: "financial-services", icon: TrendingUp, desc: "Banking, fintech, insurance, and financial institution risk solutions." },
    { name: "Healthcare & Life Sciences", slug: "healthcare-life-sciences", icon: HeartPulse, desc: "Pharmaceutical, medical device, and healthcare provider coverage." },
    { name: "Manufacturing & Industrial", slug: "manufacturing-industrial", icon: Factory, desc: "Heavy industry, automotive, and advanced manufacturing risk transfer." },
    { name: "Energy & Utilities", slug: "energy-utilities", icon: Zap, desc: "Oil & gas, renewables, power generation, and utility infrastructure." },
    { name: "Infrastructure & Real Estate", slug: "infrastructure-real-estate", icon: Building2, desc: "Construction, transportation, and commercial property protection." },
    { name: "Transportation & Logistics", slug: "transportation-logistics", icon: Truck, desc: "Maritime, aviation, fleet, and cargo risk management." },
    { name: "Retail & Hospitality", slug: "retail-hospitality", icon: TrendingUp, desc: "Consumer retail, hospitality, and e-commerce enterprise risk." },
    { name: "Agriculture & Environment", slug: "agriculture-environment", icon: Wheat, desc: "Farming, food processing, and environmental liability coverage." },
    { name: "Government & Public Sector", slug: "government-public-sector", icon: Users, desc: "Public infrastructure, municipalities, and government entity risk." },
    { name: "Education & Non-Profit", slug: "education-nonprofit", icon: BookOpen, desc: "Universities, schools, and non-profit organization protection." },
    { name: "Emerging & Niche Industries", slug: "emerging-industries", icon: Rocket, desc: "AI, space, drone, climate tech, and cryptocurrency risk solutions." }
  ];

  const solutions = [
    { id: "identification", label: "Risk Identification", icon: Search, desc: "Discovery and mapping of enterprise risk exposures." },
    { id: "assessment", label: "Risk Assessment", icon: BarChart3, desc: "Quantification and prioritization of risk scenarios." },
    { id: "transfer", label: "Risk Transfer", icon: Shield, desc: "Insurance placement and alternative risk financing." },
    { id: "monitoring", label: "Risk Monitoring", icon: RefreshCw, desc: "Continuous tracking and alerting on risk metrics." },
    { id: "intelligence", label: "Risk Intelligence", icon: Radar, desc: "Data-driven insights and predictive analytics." },
    { id: "claims-management", label: "Claims Management", icon: Activity, desc: "End-to-end claims advocacy and recovery optimization." },
    { id: "compliance", label: "Compliance Management", icon: CheckCircle2, desc: "Regulatory adherence and reporting frameworks." },
    { id: "esg-governance", label: "ESG Governance", icon: Leaf, desc: "Environmental, social, and governance risk frameworks." },
    { id: "cyber-resilience", label: "Cyber Resilience", icon: Lock, desc: "Comprehensive cybersecurity and response planning." },
    { id: "supply-chain-resilience", label: "Supply Chain Resilience", icon: Truck, desc: "Supplier risk management and continuity planning." },
    { id: "business-continuity", label: "Business Continuity", icon: Clock, desc: "Disaster recovery and operational resilience planning." },
    { id: "contract-intelligence", label: "Contract Intelligence", icon: FileText, desc: "Automated contract analysis and risk extraction." }
  ];

  const methodologySteps = [
    { step: 1, title: "Discover", desc: "Identify and map all enterprise risk exposures across operations, assets, and liabilities." },
    { step: 2, title: "Analyze", desc: "Quantify risks using proprietary models, historical data, and peer benchmarking." },
    { step: 3, title: "Architect", desc: "Design optimal risk transfer structures matching business objectives and budget." },
    { step: 4, title: "Implement", desc: "Place insurance programs, negotiate terms, and execute risk transfer mechanisms." },
    { step: 5, title: "Monitor", desc: "Continuous surveillance of emerging risks and claims performance optimization." }
  ];

  const whyTrustflow = [
    { title: "AI-Driven Risk Intelligence", desc: "Proprietary algorithms and data models for predictive risk quantification.", icon: Cpu },
    { title: "Global Risk Architecture Framework", desc: "Integrated framework spanning 150+ markets and regulatory environments.", icon: Globe },
    { title: "Industry-Specific Expertise", desc: "Sector leaders with deep domain knowledge in technology, healthcare, energy, and more.", icon: Award },
    { title: "Technology-Enabled Advisory", desc: "Digital-first consulting with real-time analytics and monitoring.", icon: Zap },
    { title: "Integrated Insurance Solutions", desc: "End-to-end risk transfer including captives, ART, and traditional insurance.", icon: Shield },
    { title: "Continuous Monitoring", desc: "Ongoing risk surveillance and adaptive solution evolution.", icon: RefreshCw }
  ];

  const insights = [
    { type: "Regulatory Alert", title: "Navigating the New SEC Cyber Disclosure Rules &amp; DPDP Mandates", date: "Oct 2024", read: "5 min read" },
    { type: "Market Update", title: "Hardening Capacity and Pricing Trends in the Global D&amp;O Market", date: "Aug 2024", read: "8 min read" },
    { type: "Whitepaper", title: "Parametric Risk Transfer in Agri-Tech Infrastructure Projects", date: "Jun 2024", read: "12 min read" },
    { type: "Underwriting Brief", title: "Supply Chain CBI Triggers &amp; Contingent Exposure Mitigation", date: "May 2024", read: "6 min read" },
    { type: "Risk Advisory", title: "Structured ART Solutions and Captive Insurance Formations in GIFT City", date: "Mar 2024", read: "10 min read" }
  ];

  // Fix methodology to not use step.icon since methodologySteps don't have icon
  const methodologyStepsFixed = methodologySteps.map(s => ({...s, icon: Target}));

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

      {/* 3. EXPLORE RISKS - Premium card layout */}
      <section id="explore-risks" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Risk Library</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">Explore Risk Categories</h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                Navigate through 200+ risk categories across cyber, operational, financial, regulatory, ESG, supply chain, and emerging risk domains.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "cyber", label: "Cyber Risks", icon: Shield, count: "56 risks" },
              { id: "ransomware", label: "Ransomware", icon: AlertCircle, count: "12 risks" },
              { id: "data-breach", label: "Data Breach", icon: Database, count: "8 risks" },
              { id: "deepfake-fraud", label: "Deepfake Fraud", icon: Zap, count: "5 risks" },
              { id: "supply-chain", label: "Supply Chain Risks", icon: Truck, count: "34 risks" },
              { id: "climate", label: "Climate Risks", icon: Leaf, count: "28 risks" },
              { id: "esg", label: "ESG Risks", icon: Leaf, count: "22 risks" },
              { id: "regulatory", label: "Regulatory Risks", icon: BookOpen, count: "19 risks" },
              { id: "directors-officers", label: "Directors & Officers Liability", icon: Users, count: "15 risks" },
              { id: "third-party", label: "Third-Party Risks", icon: Share2, count: "23 risks" },
            ].map((risk) => {
              const Icon = risk.icon;
              return (
                <div key={risk.id}>
                  <Link href={`/risks/${risk.id}`} className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-white hover:border-blue-300 transition-all duration-300 block">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <Icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-1 rounded-full">
                        {risk.count}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary group-hover:text-blue-600 transition-colors">
                      {risk.label}
                    </h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OFFERINGS - Categorized offerings grid */}
      <section id="offerings" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Enterprise Protection</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">Featured Risk Offerings</h2>
              <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                78 specialized risk transfer products engineered to protect enterprise balance sheets across every asset class, liability exposure, and emerging risk frontier.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredOfferings.map((offering, i) => (
              <Link key={i} href={offering.href} className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="flex-1">
                  <offering.icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-base font-bold text-primary mb-2 font-serif">
                    {offering.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {offering.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 flex items-center">
                    Explore <ChevronRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY TIMELINE - Five-step framework */}
      <section id="methodology" className="py-24 bg-white border-y">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Advisory Framework</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">
              Five-Step Risk Architecture Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {methodologyStepsFixed.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.step} className="relative">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-primary font-serif">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {idx < methodologyStepsFixed.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200">
                      <ChevronRight className="absolute top-1/2 -translate-y-1/2 right-0 w-5 h-5 text-blue-600" />
                    </div>
                  )}
                </div>
              );
            })}
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

      {/* 5. SOLUTIONS GRID */}
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Business Outcomes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">
              Risk Management Solutions
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
              Group by business outcomes to achieve measurable risk reduction and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div key={solution.id}>
                  <Link href={`/solutions/${solution.id}`} className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 block">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 font-serif group-hover:text-blue-600 transition-colors">
                      {solution.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.desc}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. WHY TRUSTFLOW - Differentiators */}
      <section id="why-trustflow" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Differentiators</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">
              Why TRUSTFLOW
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyTrustflow.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-primary font-serif">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
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
                  &ldquo;TRUSTFLOW re-architected our entire global D&amp;O and Cyber program ahead of our IPO, securing capacity that our previous broker deemed impossible while significantly reducing our total cost of risk.&rdquo;
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
                  We don&apos;t just negotiate prices. TRUSTFLOW manages claims from notification to payout, leveraging pre-agreed insurer SLA templates to reduce delays.
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

      {/* 8. CONTACT CTA */}
      <section id="contact" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Ready to Architect Your Risk Strategy?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute diagnostic session with our senior risk architects.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Request Free Risk Assessment <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
