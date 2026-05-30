"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Globe, Shield, Building2, Briefcase, Activity, CheckCircle2, ChevronRight, 
  Cpu, Factory, Zap, TrendingUp, Award, AlertTriangle, ChevronLeft, Star, Clock,
  Scale, Rocket, Leaf, FileSpreadsheet, FileText, Layers
} from "lucide-react";
import Link from "next/link";
import { HeroSlider, HeroSlide } from "@/components/sections/HeroSlider";

export default function Home() {
  const slides: HeroSlide[] = [
    {
      title: (
        <>
          We design risk architectures.<br />
          <span className="text-accent-500">We don't just sell policies.</span>
        </>
      ),
      subtitle: "TRUSTFLOW is the Master Solution Provider for Business Risk — orchestrating a unified ecosystem of 80+ carrier, technology, and warranty partners to protect enterprise capital across every risk domain, every industry, and every jurisdiction on earth.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      buttons: [
        { label: "Discover Your Risk Architecture →", className: "bg-accent-500 hover:bg-accent-400 text-neutral-950 border-0 font-sans font-bold", href: "/tools/risk-diagnostic" },
        { label: "See How We Work →", variant: "outline", className: "border-neutral-700 text-white hover:bg-white/10 font-sans", href: "/about/methodology" }
      ]
    }
  ];

  const metrics = [
    { val: "150+", label: "Countries Served", desc: "Cross-border placement capabilities across every major and emerging market", icon: Globe },
    { val: "A++ Rated", label: "Carrier Network", desc: "Top-tier syndicates, global markets, and specialist capacity providers", icon: Shield },
    { val: "97%", label: "Client Retention", desc: "Because we solve problems other brokers don't even see", icon: CheckCircle2 },
    { val: "40% Faster", label: "Claims Speed", desc: "Proprietary resolution protocols — average claim processed in 14 days", icon: Zap },
    { val: "99.2%", label: "Claim Approval", desc: "Pre-agreed insurer SLA templates ensure near-perfect approval ratio", icon: Award },
    { val: "80+", label: "Ecosystem Partners", desc: "Carriers, insurtechs, warranty platforms, and technology providers orchestrated as one", icon: Building2 },
    { val: "20", label: "Risk Domains Covered", desc: "From property and cyber to quantum computing and space satellites", icon: Activity },
    { val: "24+", label: "Insurance Lines", desc: "Every general business line — excluding health and life — plus frontier emerging risks", icon: Globe }
  ];

  // 12-card solution universe (3x4 grid)
  const solutionUniverse = [
    { title: "Property & Business Interruption", icon: Building2, desc: "All-risks property, natural catastrophe, business interruption, contingent BI, equipment breakdown.", href: "/risk-solutions/property-business-interruption", tag: "Property" },
    { title: "Cyber & Digital Risk", icon: Shield, desc: "Multi-carrier layered cyber architecture — prevention, first-party, third-party, regulatory defense.", href: "/risk-solutions/cyber-digital-risk", tag: "Cyber" },
    { title: "Management Liability", icon: Briefcase, desc: "D&O, EPLI, fiduciary, crime, Side A/B/C towers.", href: "/risk-solutions/management-liability", tag: "Liability" },
    { title: "Trade Credit & Political Risk", icon: TrendingUp, desc: "Customer default, sovereign risk, currency inconvertibility, political violence.", href: "/risk-solutions/trade-credit-political-risk", tag: "Credit" },
    { title: "Professional Liability & E&O", icon: Scale, desc: "Tech E&O, medical malpractice, architects & engineers, investment manager E&O.", href: "/risk-solutions/professional-liability-eo", tag: "Professional" },
    { title: "Marine, Aviation & Transportation", icon: Globe, desc: "Cargo, hull, aviation liability, satellite, drone fleet, last-mile.", href: "/risk-solutions/marine-aviation-transportation", tag: "Transport" },
    { title: "Construction & Engineering", icon: Activity, desc: "CAR, DSU, performance bonds, contractor default, professional indemnity.", href: "/risk-solutions/construction-engineering", tag: "Construction" },
    { title: "Emerging & Frontier", icon: Cpu, desc: "Crypto, quantum computing, drones, space, AI liability, autonomous systems.", href: "/risk-solutions/ai-algorithm-liability", tag: "Frontier" },
    { title: "Warranty & Guarantees", icon: FileSpreadsheet, desc: "Product warranties, extended warranties, surety bonds, performance guarantees, embedded warranty API.", href: "/risk-solutions/product-warranties", tag: "Warranty" },
    { title: "Alternative Risk Transfer", icon: Layers, desc: "Captives, parametric, ILS, risk retention groups, self-insurance.", href: "/risk-solutions/captive-insurance", tag: "ART" },
    { title: "Contract Risk Analytics", icon: FileText, desc: "AI-powered contract analysis — liability exposure, indemnification gaps, insurance compliance.", href: "/risk-solutions/contract-risk-analytics", tag: "Analytics" },
    { title: "Multi-Line & Cross-Border Programs", icon: Globe, desc: "Global master programs, local admitted policies, multinational pooling.", href: "/risk-solutions/multi-line-cross-border", tag: "Global" }
  ];

  // 12-dimension interactive risk exposure health state
  const [dimensions, setDimensions] = useState<Record<string, number>>({
    "Property Coverages": 92,
    "Liability Shield": 54,
    "Cyber Resilience": 38,
    "Business Interruption": 72,
    "Management Liability": 65,
    "Trade Credit": 45,
    "Professional Liability": 81,
    "Political Risk": 30,
    "Environmental": 55,
    "Contract Risk": 42,
    "Warranty & Guarantee": 60,
    "Emerging Risk": 15
  });

  const handleSliderChange = (dim: string, val: number) => {
    setDimensions({ ...dimensions, [dim]: val });
  };

  const getOverallScore = () => {
    const vals = Object.values(dimensions);
    return Math.round(vals.reduce((sum, v) => sum + v, 0) / vals.length);
  };

  // 8 Pillars
  const pillars = [
    {
      title: "Exclusion Auditing",
      desc: "Most enterprise policies contain dozens of exclusions buried in endorsements, sub-limits, and definitions that brokers never surface. TRUSTFLOW audits every policy block-by-block, identifies silent exclusions that would deny claims in a crisis, and negotiates custom extensions to close each gap.",
      quote: "We discovered 14 silent exclusions in a Fortune 500 manufacturer's property program that would have denied $47M in claims during a business interruption event."
    },
    {
      title: "Capacity Syndication",
      desc: "Single-carrier programs create concentration risk. TRUSTFLOW syndicates capacity across Lloyd's syndicates, Bermuda markets, domestic carriers, and alternative capital to optimize pricing, terms, and counterparty diversification.",
      quote: "For a $2B infrastructure fund, we syndicated $800M in capacity across 7 carriers — reducing counterparty risk by 60% and securing a 14% premium reduction."
    },
    {
      title: "Active Claims Advocacy",
      desc: "TRUSTFLOW manages claims from notification to payout. We activate pre-agreed insurer SLA templates, coordinate forensic evidence, negotiate with adjusters, and escalate disputes — so you receive what you're owed, fast.",
      quote: "Average Claim Processing: 14 Days | Claim Approval Ratio: 99.2% | Industry Average: 45-60 Days"
    },
    {
      title: "Global Compliance",
      desc: "Every country has unique insurance requirements. TRUSTFLOW structures local policies that comply with each jurisdiction's requirements while coordinating them into a seamless global master program.",
      quote: "We structured a compliant insurance program for a tech company expanding to 12 countries in 8 weeks — navigating India's IRDAI, Singapore's MAS, Brazil's SUSEP, and 9 other regulatory regimes."
    },
    {
      title: "Ecosystem Orchestration",
      desc: "TRUSTFLOW is not a broker. We are the orchestration layer connecting carriers, insurtechs, warranty partners, and specialist advisory firms into a unified risk architecture. Each partner is selected for your specific risk profile, industry, and geography.",
      quote: "For a crypto exchange, we orchestrated Coincover, Coalition, Lloyd's crypto syndicates, Chainalysis, and Fireblocks — all managed through a single TRUSTFLOW dashboard."
    },
    {
      title: "AI-Powered Intelligence",
      desc: "TRUSTFLOW deploys AI at every stage: risk diagnostic scoring, contract analytics, claims prediction, renewal optimization, and real-time risk monitoring.",
      quote: "Our AI contract analytics engine analyzed 2,000 contracts for a PE acquisition in 72 hours — identifying $45M in previously invisible indemnification exposure."
    },
    {
      title: "Contract Risk Analytics",
      desc: "Every contract contains risk: uncapped indemnification, insurance requirements you don't meet, force majeure gaps, and counterparty vulnerabilities. TRUSTFLOW's AI engine scans your portfolio, scores each contract, and generates actionable recommendations.",
      quote: "For a SaaS company with 2,000 enterprise contracts, we identified 23 contracts with uncapped liability and 156 contracts requiring insurance the company didn't carry. Total invisible exposure: $45M."
    },
    {
      title: "Emerging Risk Frontier",
      desc: "While the market debates when tomorrow's risks arrive, TRUSTFLOW is already architecting coverage for AI, space, quantum transition, and crypto custody.",
      quote: "We designed the first-ever constellation-level satellite insurance program — 300 satellites, 15 launches, $3.2B total insured value — 18% less expensive than individual satellite policies."
    }
  ];

  // Featured Industries
  const featuredIndustries = [
    { name: "Technology & SaaS", slug: "technology-saas", icon: Cpu, desc: "Cyber, AI liability, Tech E&O, D&O, IP. " },
    { name: "Financial Services & Fintech", slug: "financial-services", icon: TrendingUp, desc: "D&O, crime, cyber, regulatory defense, trade credit." },
    { name: "Healthcare & Life Sciences", slug: "healthcare", icon: Activity, desc: "Medical malpractice, cyber, product liability, regulatory." },
    { name: "Manufacturing & Industrial", slug: "manufacturing", icon: Factory, desc: "Product recall, property, BI, supply chain, environmental." },
    { name: "Energy & Renewables", slug: "energy", icon: Zap, desc: "Property, political risk, environmental, construction, BI." },
    { name: "Real Estate & Construction", slug: "real-estate-construction", icon: Building2, desc: "Title insurance, CAR, performance bonds, property, liability." },
    { name: "Crypto & Digital Assets", slug: "crypto-blockchain", icon: Cpu, desc: "Custody, smart contract, crime, D&O, regulatory defense." },
    { name: "Space & Satellite", slug: "space-satellite", icon: Rocket, desc: "Launch, in-orbit, third-party liability, cyber, BI." }
  ];

  // Testimonials (6 total)
  const testimonials = [
    {
      role: "Chief Financial Officer",
      company: "Global SaaS Enterprise (Listed)",
      text: "GBRS re-architected our entire global D&O and Cyber program ahead of our IPO, securing capacity that our previous broker deemed impossible while significantly reducing our total cost of risk.",
      initial: "CFO"
    },
    {
      role: "Chief Risk Officer",
      company: "Tier 1 Crypto Exchange ($8B AUM)",
      text: "No one in the traditional insurance market understood our risk profile. TRUSTFLOW didn't just place a crypto custody policy — they architected a 10-layer protection program that integrated cyber monitoring, blockchain analytics, and specialist Lloyd's capacity. Our institutional clients now have confidence that their assets are protected.",
      initial: "CRO"
    },
    {
      role: "VP Risk Management",
      company: "Fortune 500 Automotive Manufacturer",
      text: "After a product recall cost us $180M, TRUSTFLOW restructured our entire product liability, recall, and warranty program. When the next recall happened 18 months later, insurance recovered $112M of $180M in costs. The difference between having TRUSTFLOW and not having them is the difference between surviving a crisis and being destroyed by it.",
      initial: "VP"
    },
    {
      role: "General Counsel",
      company: "Global Technology Company",
      text: "We expanded from 3 countries to 22 in 18 months. TRUSTFLOW structured a compliant insurance program across every jurisdiction — IRDAI in India, MAS in Singapore, SUSEP in Brazil, and 19 others — all coordinated through a single master policy with local admitted placements. One dashboard. One renewal. Zero compliance gaps.",
      initial: "GC"
    },
    {
      role: "CFO",
      company: "LEO Satellite Operator",
      text: "Launching a 300-satellite constellation requires insurance that doesn't exist in any standard market. TRUSTFLOW designed the first-ever portfolio-level constellation program — launch, in-orbit, third-party liability, cyber, ground segment, and component warranties — across Lloyd's, Allianz, and Swiss Re. 18% less than what we budgeted for individual policies.",
      initial: "CFO"
    },
    {
      role: "Managing Director",
      company: "Mid-Market Private Equity Firm",
      text: "TRUSTFLOW's AI contract analytics analyzed our 2,000 enterprise contracts in 72 hours and found $45M in hidden indemnification exposure that our legal team hadn't flagged. This changed our entire M&A due diligence process. We now run every acquisition through TRUSTFLOW's contract engine before closing.",
      initial: "MD"
    }
  ];

  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Insights (6 articles feed)
  const homeInsights = [
    { id: "sec-cyber-disclosure", type: "Regulatory Alert", title: "Navigating the New SEC Cyber Disclosure Rules & DPDP Mandates", date: "Oct 2024", read: "5 min read" },
    { id: "global-do-market-trends", type: "Market Update", title: "Hardening Capacity and Pricing Trends in the Global D&O Market", date: "Aug 2024", read: "8 min read" },
    { id: "parametric-agri-tech", type: "Whitepaper", title: "Parametric Risk Transfer in Agri-Tech Infrastructure Projects", date: "Jun 2024", read: "12 min read" },
    { id: "crypto-layered-architecture", type: "Emerging Risk", title: "Crypto Custody Insurance: A 10-Layer Architecture for Institutional Trust", date: "2026", read: "8 min read" },
    { id: "ai-liability-eu-ai-act", type: "Regulatory Alert", title: "AI Liability and the EU AI Act: What Every Board Must Know", date: "2026", read: "7 min read" },
    { id: "space-constellation-cover", type: "Whitepaper", title: "Space Insurance: How to Cover a 300-Satellite Constellation", date: "2026", read: "10 min read" }
  ];

  // Slider Refs
  const offeringsRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.8;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const overallScore = getOverallScore();

  return (
    <div className="flex flex-col bg-neutral-950 overflow-x-hidden text-neutral-200">
      
      {/* 1. HERO SLIDER */}
      <HeroSlider slides={slides} />

      {/* 2. KEY METRICS STRIP - Overlapping Hero border */}
      <section id="metrics" className="relative -mt-16 z-20 container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.slice(0, 4).map((m, i) => (
            <div key={i} className="bg-neutral-900 border border-neutral-800 backdrop-blur-md rounded-xl p-5 text-white shadow-xl hover:-translate-y-1 transition-all duration-300 group border-glow-cyber">
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl font-extrabold text-cyber-400 font-mono tracking-tight">{m.val}</span>
                <m.icon className="w-5 h-5 text-neutral-500 group-hover:text-cyber-400 transition-colors" />
              </div>
              <h4 className="text-xs font-bold text-white tracking-wide uppercase font-sans">{m.label}</h4>
              <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed font-serif">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2b. COMPREHENSIVE SECONDARY METRICS STRIP */}
      <section className="py-12 container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.slice(4, 8).map((m, i) => (
            <div key={i} className="bg-neutral-900/60 border border-neutral-850 rounded-xl p-5 text-white shadow-md hover:-translate-y-0.5 transition-all duration-300 group border-glow-accent">
              <div className="flex justify-between items-start mb-4">
                <span className="text-2xl font-bold text-accent-500 font-mono tracking-tight">{m.val}</span>
                <m.icon className="w-4.5 h-4.5 text-neutral-500 group-hover:text-accent-500 transition-colors" />
              </div>
              <h4 className="text-[11px] font-bold text-neutral-300 tracking-wide uppercase font-sans">{m.label}</h4>
              <p className="text-[10px] text-neutral-400 mt-1 leading-relaxed font-serif">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW TRUSTFLOW WORKS (4 Steps) */}
      <section id="methodology-timeline" className="py-20 bg-neutral-900/40 border-t border-b border-neutral-850">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-12">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest font-bold">How TRUSTFLOW Works</span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-sans text-white">How TRUSTFLOW Works</h2>
            <p className="text-xs md:text-sm text-neutral-400 max-w-2xl mx-auto font-serif">
              Four Steps from Risk Chaos to Risk Architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "We uncover what others miss.",
                desc: "Our AI Risk Diagnostic scans your operational profile across 20 risk domains, 150+ jurisdictions, and 200+ specific risk categories. In 60 seconds, you see your exposure score, critical gaps, and recommended next steps. No commitment. No sales call. Just clarity.",
                cta: "Take the Free Risk Assessment →",
                href: "/tools/risk-diagnostic"
              },
              {
                step: "02",
                title: "We design, not copy-paste.",
                desc: "Most brokers renew last year's policy and call it a day. TRUSTFLOW audits every clause, every exclusion, every sub-limit. We architect multi-carrier, multi-layered programs that transfer your specific risks to the right carriers at the right capacity — across every geography you operate in.",
                cta: "See the 7-Phase TRUSTFLOW Method →",
                href: "/about/methodology"
              },
              {
                step: "03",
                title: "We place and integrate.",
                desc: "Your risk architecture is only as strong as its weakest carrier, its slowest technology, and its most buried exclusion. TRUSTFLOW places your program across A++ rated carriers and integrates 3rd-party technology solutions — cyber monitoring, supply chain analytics, contract intelligence — so your protection is continuous, not annual.",
                cta: "Explore the Ecosystem →",
                href: "/ecosystem-partners"
              },
              {
                step: "04",
                title: "We don't disappear after placement.",
                desc: "97% of our clients renew because we never stop working. Quarterly risk reviews. Real-time claims advocacy. 90-day pre-renewal strategy briefs. AI-powered risk intelligence feeds. Your risk architecture evolves as your business evolves — across new products, new markets, new threats.",
                cta: "See Our Client Outcomes →",
                href: "/insights"
              }
            ].map((s, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-3 text-left relative group">
                <span className="absolute top-4 right-4 text-3xl font-black text-neutral-800 group-hover:text-accent-500/25 transition-colors font-mono select-none">
                  {s.step}
                </span>
                <h4 className="text-sm font-bold text-white font-sans">{s.title}</h4>
                <p className="text-xs text-neutral-400 font-serif leading-relaxed">{s.desc}</p>
                <Link href={s.href} className="text-[10px] font-bold text-accent-500 hover:text-accent-400 uppercase tracking-wider font-sans block mt-4">
                  {s.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RISK SOLUTION UNIVERSE (12 Cards Grid) */}
      <section id="offerings" className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-cyber-400 uppercase tracking-widest font-bold">Risk Solutions Universe</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-sans">20 Risk Domains. 41 Industries. 200+ Specific Risks. One Orchestrated Architecture.</h2>
              <p className="text-neutral-400 max-w-2xl text-xs md:text-sm font-serif">
                TRUSTFLOW does not offer generic policies. We architect risk transfer structures that match the precise operational, regulatory, and geopolitical realities of your business — then place them across a curated ecosystem of A++ rated carriers, specialist insurtechs, warranty platforms, and AI-powered technology providers.
              </p>
            </div>
            
            <Link href="/risk-solutions" className="text-accent-500 font-bold hover:text-accent-400 flex items-center text-xs tracking-wider uppercase font-sans group shrink-0">
              View All 22 Product Lines <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {solutionUniverse.map((offering, i) => (
              <Link 
                key={i} 
                href={offering.href} 
                className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-5 hover:border-accent-500/30 transition-all duration-300 flex flex-col justify-between h-[230px]"
              >
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono font-bold text-cyber-400 bg-neutral-950 border border-neutral-850 px-2 py-0.5 rounded uppercase tracking-wider">
                      {offering.tag}
                    </span>
                    <offering.icon className="h-5 w-5 text-neutral-500 group-hover:text-accent-500 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-sans leading-snug">
                    {offering.title}
                  </h3>
                  <p className="text-[11px] text-neutral-450 leading-relaxed font-serif line-clamp-3">
                    {offering.desc}
                  </p>
                </div>
                
                <div className="pt-3 border-t border-neutral-850 flex items-center justify-between text-[10px] font-bold text-accent-500 font-sans mt-auto">
                  <span>Explore Architecture →</span>
                  <span className="text-[9px] text-neutral-500 uppercase font-mono">A++ Capacity</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE RISK EXPOSURE HEALTH CHART */}
      <section className="py-20 bg-neutral-900/60 border-t border-b border-neutral-850">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest font-bold">Interactive Tool</span>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight font-sans text-white leading-tight">
                Risk Exposure Health
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-serif">
                TRUSTFLOW's 12-dimension risk health profile reveals what traditional brokers miss. Any score under 60% signals a critical gap in your enterprise risk architecture.
              </p>
              
              <div className="p-5 bg-neutral-950 border border-neutral-850 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-white font-sans uppercase">
                  <AlertTriangle className="w-4.5 h-4.5 text-risk-500 animate-pulse" />
                  <span>Real-Time Audit Diagnosis</span>
                </div>
                <p className="text-[11px] text-neutral-400 font-serif leading-relaxed">
                  {overallScore >= 80 
                    ? "Resilient alignment. Proceed to secure premium renewal discount credits."
                    : overallScore >= 50
                    ? "Warning. Silent exclusions detected. Re-valuation of assets and Side A towers recommended."
                    : "Action required. Catastrophic exposures detected. Schedule immediate risk audit consultation."}
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <Link href="/tools/risk-diagnostic">
                  <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-11 px-6 shadow">
                    Get Your Personalized Risk Score (Free) →
                  </Button>
                </Link>
                <Link href="/downloads/12-dimension-risk-assessment-framework.pdf" className="text-[10px] font-bold text-neutral-400 hover:text-white uppercase tracking-wider font-sans block">
                  Download: "The 12-Dimension Risk Assessment Framework" (PDF)
                </Link>
              </div>
            </div>

            {/* Right Sandbox Sliders Box */}
            <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-6 md:p-8 rounded-2xl shadow-2xl space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-850">
                <div>
                  <h3 className="text-sm font-bold text-white font-sans uppercase tracking-wider">Enterprise Risk Profiler</h3>
                  <p className="text-[9px] font-mono text-neutral-500">Static Parameter Sandbox Controls</p>
                </div>
                <span className="text-[9px] font-mono font-bold text-white bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                  Calculated Score: {overallScore}%
                </span>
              </div>

              {/* Sliders loop (12 dimensions) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 max-h-[300px] overflow-y-auto pr-2">
                {Object.entries(dimensions).map(([dim, val]) => (
                  <div key={dim} className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-sans">
                      <span className="text-neutral-400 truncate max-w-[70%]">{dim}</span>
                      <span className={`font-mono font-bold ${val >= 80 ? "text-cyber-400" : val >= 50 ? "text-accent-500" : "text-risk-400"}`}>
                        {val}%
                      </span>
                    </div>
                    <input 
                      type="range"
                      min="0"
                      max="100"
                      value={val}
                      onChange={(e) => handleSliderChange(dim, parseInt(e.target.value))}
                      className="w-full h-1 bg-neutral-900 rounded-lg appearance-none cursor-pointer accent-accent-500"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. 8 PILLARS OF TRUSTFLOW */}
      <section id="pillars" className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest font-bold">The Shield Principles</span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-sans text-white">8 Pillars of TRUSTFLOW</h2>
            <p className="text-xs md:text-sm text-neutral-400 font-serif">
              Our operating methodology structures program limits transcending standard products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-850 rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-800 transition-colors duration-200">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-850 flex items-center justify-center text-accent-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-sans">{p.title}</h4>
                  <p className="text-[11px] text-neutral-400 font-serif leading-relaxed">{p.desc}</p>
                </div>
                <p className="text-[10px] italic font-serif text-accent-500 border-t border-neutral-850 pt-3 mt-4">
                  &ldquo;{p.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTOR COMPETENCIES */}
      <section id="industries" className="py-24 bg-neutral-900/40 border-t border-b border-neutral-850">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-cyber-400 uppercase tracking-widest font-bold">Sector Competencies</span>
              <h2 className="text-2xl md:text-4xl font-extrabold font-sans text-white">41 Industries. Deeply Specialized Risk Architecture.</h2>
              <p className="text-xs text-neutral-400 font-serif">
                "We do not believe in generic policies. Our practice leaders structure coverages that match the precise operational realities of your sector."
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/industries" className="text-cyber-400 hover:text-cyber-300 font-bold flex items-center text-xs tracking-wider uppercase font-sans mr-4 hidden sm:flex">
                View All 41 Practice Groups <ChevronRight className="ml-1 h-3.5 w-3.5" />
              </Link>
              <button
                onClick={() => scrollCarousel(industriesRef, "left")}
                className="w-8 h-8 rounded-lg border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white transition-colors shadow"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCarousel(industriesRef, "right")}
                className="w-8 h-8 rounded-lg border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white transition-colors shadow"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={industriesRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory pb-4 pr-4"
          >
            {featuredIndustries.map((ind, i) => (
              <div key={ind.slug} className="snap-align-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(20%-16px)]">
                <Link href={`/industries/${ind.slug}`} className="group bg-neutral-900 border border-neutral-850 hover:border-accent-500/30 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer h-[230px]">
                  <div className="space-y-4">
                    <div className="w-9 h-9 rounded-xl bg-neutral-950 border border-neutral-850 flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-neutral-950 transition-all duration-200">
                      <ind.icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-xs font-bold text-white group-hover:text-accent-500 transition-colors font-sans">{ind.name}</h3>
                    <p className="text-[11px] text-neutral-450 leading-relaxed font-serif line-clamp-3">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-850 flex items-center text-[10px] font-bold text-accent-500 uppercase mt-auto font-sans">
                    Explore Sector <ChevronRight className="ml-0.5 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INSTITUTIONAL VALIDATION */}
      <section className="py-16 border-b border-neutral-850 bg-neutral-950/20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-6">
          <h3 className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold">Institutional Validation</h3>
          <h2 className="text-2xl font-bold font-sans text-white tracking-tight">Trusted across corporate segments</h2>
          <div className="flex flex-wrap justify-center gap-3 pt-4 max-w-4xl mx-auto">
            {[
              "Fortune 500 Tech", "Global Infra Funds", "Listed Manufacturers", "Private Equity Portfolios",
              "Sovereign Wealth Funds", "SEBI Regulated Advisory", "Crypto Exchanges", "Space Operators",
              "Drone Fleets", "AI Companies", "Quantum Firms", "Data Centers"
            ].map((label) => (
              <div
                key={label}
                className="px-4 py-2 border border-neutral-850 rounded-xl text-xs font-semibold text-neutral-400 bg-neutral-900 shadow-sm font-sans"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS CAROUSEL */}
      <section className="py-24 bg-neutral-900/40">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-12">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest font-bold">Case Studies</span>
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white">Multinational Client Feedback</h2>
          </div>

          <div className="relative max-w-3xl mx-auto bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-2xl shadow-xl space-y-6">
            <div className="absolute top-4 right-6 text-neutral-800 text-7xl font-serif select-none pointer-events-none opacity-20">
              &ldquo;
            </div>
            
            <div className="space-y-4 text-left">
              <div className="flex text-accent-500 gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-accent-500 stroke-0" />
                ))}
              </div>
              <blockquote className="text-xs md:text-sm text-neutral-300 font-serif italic leading-relaxed">
                &ldquo;{testimonials[activeTestimonialIdx].text}&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-neutral-850 mt-6 flex-wrap gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-500 font-bold text-xs flex items-center justify-center font-mono">
                  {testimonials[activeTestimonialIdx].initial}
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-sans">{testimonials[activeTestimonialIdx].role}</div>
                  <div className="text-[10px] text-neutral-500 font-sans">{testimonials[activeTestimonialIdx].company}</div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-8 h-8 rounded-lg border border-neutral-850 bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-8 h-8 rounded-lg border border-neutral-850 bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLAIMS ADVOCACY METRICS & PREVIEW */}
      <section className="py-24 border-t border-b border-neutral-850">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Shield className="w-40 h-40 text-accent-500" />
              </div>
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-mono text-cyber-400 uppercase tracking-widest font-bold">Structured Advocacy</span>
                <h3 className="text-xl font-bold font-sans text-glow text-white">We Don't Just Negotiate Prices. We Manage Claims to Payout.</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-serif">
                  TRUSTFLOW manages claims from notification to payout, leveraging pre-agreed insurer SLA templates to reduce delays. Our claims advocacy team includes former adjusters, forensic accountants, and coverage lawyers who understand exactly how carriers evaluate claims — and exactly how to present your claim for maximum recovery.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-850 flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-850 text-accent-500 flex items-center justify-center">
                  <Star className="w-4.5 h-4.5" />
                </div>
                <div className="text-xs font-serif text-neutral-300">
                  <span className="font-bold text-white font-sans block">Largest claim recovery: $47 Million</span>
                  <span>Property Fire & Business Interruption rebuild settlement (36-month indemnity payout)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-850 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent-500 font-sans">Structured Advocacy Stats</h3>
                <p className="text-[11px] text-neutral-400 leading-relaxed font-serif">
                  Our dedicated in-house technical claims team has achieved industry-leading payout parameters.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-850">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Average Claim Processing</span>
                  <span className="font-bold text-white font-mono">14 Days</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Claim Approval Ratio</span>
                  <span className="font-bold text-white font-mono">99.2%</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Average Recovery Rate</span>
                  <span className="font-bold text-white font-mono">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. INSIGHTS & THOUGHT LEADERSHIP (6 Cards) */}
      <section id="insights" className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-12">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest font-bold">Research Hub</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white font-sans">Latest Risk Insights</h2>
            </div>
            
            <Link href="/insights" className="text-accent-500 font-bold hover:text-accent-400 flex items-center text-xs tracking-wider uppercase font-sans group shrink-0">
              View All Publications <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeInsights.map((post) => (
              <div 
                key={post.id}
                className="bg-neutral-900 border border-neutral-850 p-6 rounded-2xl flex flex-col justify-between h-[200px] hover:border-neutral-800 transition-colors duration-200 group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between text-[9px] font-mono font-bold uppercase tracking-wider">
                    <span className="text-cyber-400">{post.type}</span>
                    <span className="text-neutral-500">{post.read}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-accent-500 transition-colors font-sans line-clamp-3">
                    {post.title}
                  </h3>
                </div>
                <div className="text-[10px] text-neutral-500 pt-3 border-t border-neutral-850 flex justify-between items-center mt-auto font-sans">
                  <span>Published {post.date}</span>
                  <Link href="/insights" className="text-accent-500 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    Read Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. DUAL CTA SECTION */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-850 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(232,163,23,0.04),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-6 relative z-10">
          <h2 className="text-2xl md:text-5xl font-extrabold font-sans text-white leading-tight">
            Ready to secure your risk architecture?
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 font-serif max-w-2xl mx-auto leading-relaxed">
            Let our senior actuarial underwriters and legal advocates examine your corporate risk program. Build resilient capital protections matching today's global boundaries.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools/risk-diagnostic">
              <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-12 px-6 shadow w-full sm:w-auto">
                Request a Forensic Risk Audit
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-neutral-800 text-neutral-350 hover:text-white hover:bg-neutral-900 font-sans text-xs h-12 px-6 w-full sm:w-auto">
                Book a Risk Review
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
