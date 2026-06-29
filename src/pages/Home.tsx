

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Leaf, Shield, Building2, Anchor, Briefcase, Activity, CheckCircle2, ChevronRight, Cpu, Factory, Zap, TrendingUp, Users, Check, Award, AlertTriangle, ChevronLeft, BarChart3, HeartPulse, Wheat, Rocket, Search, RefreshCw, Radar, Lock, Clock, FileText, Target, AlertCircle, Database, Share2, Truck, BookOpen, Server, LineChart, Brain, Network } from "lucide-react";
import { Link } from 'react-router-dom';
import { EnterpriseHomeHero } from "@/components/sections/EnterpriseHomeHero";
import { motion } from "framer-motion";

function AnimatedCounter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const numMatch = value.match(/^(\d+)(.*)$/);
  const target = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = numMatch ? numMatch[2] : "";

  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const fadeContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const COLOR_MAP: Record<string, { bg: string; text: string; hoverBg: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", hoverBg: "group-hover:bg-blue-600" },
  red: { bg: "bg-red-50", text: "text-red-600", hoverBg: "group-hover:bg-red-600" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", hoverBg: "group-hover:bg-emerald-600" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", hoverBg: "group-hover:bg-purple-600" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-600", hoverBg: "group-hover:bg-cyan-600" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", hoverBg: "group-hover:bg-amber-600" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", hoverBg: "group-hover:bg-indigo-600" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", hoverBg: "group-hover:bg-teal-600" },
};

export default function Home() {
  console.log("Home rendered");
  const heroBadge = "Enterprise Risk";
  const heroTitle = (
    <>
      Enterprise Risk Architecture<br />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">for a Complex World</span>
    </>
  );
  const heroSubtitle = "TRUSTFLOW helps organizations identify, assess, mitigate, transfer, and monitor risks across cyber, operational, financial, regulatory, ESG, supply chain, and emerging risk domains.";
  const heroPrimaryCta = { label: "Book Risk Assessment", href: "/contact" };
  const heroSecondaryCta = { label: "Explore Solutions", href: "/offerings/property-sfsp" };
  const heroCapabilityTags = ["Enterprise Risk", "AI Intelligence", "Insurance Solutions", "Operational Risk", "Emerging Risk"];

  const metrics = [
    { val: "200+", label: "Risk Categories", desc: "Cyber, operational, financial, regulatory, ESG", icon: Shield },
    { val: "41", label: "Industry Verticals", desc: "Specialized risk architectures", icon: Building2 },
    { val: "78", label: "Insurance & Risk Offerings", desc: "Comprehensive coverage solutions", icon: Briefcase },
    { val: "35", label: "AI-Powered Platforms", desc: "Risk intelligence tools", icon: Cpu }
  ];

  const featuredOfferings = [
    { title: "Property Insurance", icon: Shield, desc: "Buildings, Stock, Plant, Flood, EQ, Terrorism cover structured for enterprise scale.", href: "/offerings/property-sfsp", tag: "Assets" },
    { title: "Cyber Insurance", icon: Shield, desc: "Ransomware, breach response, DPDP compliance, and cloud business interruption coverage.", href: "/offerings/cyber-first-party", tag: "Technology" },
    { title: "D&O Insurance", icon: Users, desc: "Directors & Officers liability for IPOs, regulatory defence, and corporate governance.", href: "/offerings/d-o", tag: "Governance" },
    { title: "Business Interruption", icon: BarChart3, desc: "Revenue protection during operational disruptions and restoration periods.", href: "/offerings/business-interruption", tag: "Continuity" },
    { title: "Professional Liability", icon: Briefcase, desc: "E&O coverage for consultants, architects, and professional services firms.", href: "/offerings/professional-indemnity-2", tag: "Advisory" },
    { title: "Crime Insurance", icon: AlertCircle, desc: "Fidelity guarantee and crime coverage for financial and cyber fraud.", href: "/offerings/crime-fidelity", tag: "Security" },
    { title: "EPLI", icon: HeartPulse, desc: "Employment Practices Liability for workplace-related legal claims.", href: "/offerings/epli", tag: "HR" },
    { title: "Product Recall", icon: Shield, desc: "Brand protection and recall logistics for manufacturing and retail.", href: "/offerings/product-liability-2", tag: "Consumer" },
    { title: "Supply Chain Coverage", icon: Truck, desc: "Cargo, marine, and contingent business interruption protection.", href: "/offerings/marine-cargo-2", tag: "Logistics" },
    { title: "Political Risk", icon: Globe, desc: "Expropriation, currency inconvertibility, and cross-border protection.", href: "/offerings/political-risk-2", tag: "International" },
    { title: "Warranty Programs", icon: CheckCircle2, desc: "M&A transactional risk insurance and extended warranty coverage.", href: "/offerings/ma-risk-due-diligence", tag: "M&A" },
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
    { id: "liability-governance", label: "ESG Governance", icon: Leaf, desc: "Environmental, social, and governance risk frameworks." },
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
      <EnterpriseHomeHero
        badge={heroBadge}
        title={heroTitle}
        subtitle={heroSubtitle}
        primaryCta={heroPrimaryCta}
        secondaryCta={heroSecondaryCta}
        capabilityTags={heroCapabilityTags}
      />

      {/* 2. ENTERPRISE STATISTICS STRIP */}
      <section className="relative z-30 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-10">
            {[
              { value: "150+", label: "Countries", sublabel: "Global reach", icon: Globe },
              { value: "78+", label: "Offerings", sublabel: "Insurance solutions", icon: Briefcase },
              { value: "45+", label: "Platforms", sublabel: "AI-powered tools", icon: Cpu },
              { value: "30+", label: "Industries", sublabel: "Sector expertise", icon: Building2 },
              { value: "200+", label: "Risk Categories", sublabel: "Comprehensive coverage", icon: Shield },
              { value: "99%", label: "Client Retention", sublabel: "Trusted partnerships", icon: Award },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 mb-4 group-hover:bg-blue-600/20 transition-colors">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-1">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-base font-semibold text-slate-300 uppercase tracking-wider">{stat.label}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.sublabel}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 8 STRATEGIC ENTERPRISE CARDS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Enterprise Risk Command Center</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">
              Comprehensive Risk Intelligence Platform
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto">
              One integrated architecture spanning industries, risk categories, insurance solutions, technology platforms, and measurable business outcomes.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Industries",
                icon: Building2,
                description: "12 industry practices with deep domain expertise and specialized risk architectures.",
                href: "/industries",
                links: ["Technology", "Financial Services", "Healthcare", "Manufacturing", "Energy", "Infrastructure"],
                color: "blue"
              },
              {
                title: "Risks",
                icon: Shield,
                description: "200+ risk categories across cyber, operational, financial, regulatory, ESG, and emerging domains.",
                href: "/risks",
                links: ["Cyber Risks", "Supply Chain", "Climate", "Regulatory", "D&O Liability", "ESG"],
                color: "red"
              },
              {
                title: "Offerings",
                icon: Briefcase,
                description: "78+ enterprise insurance and risk transfer solutions engineered for global organizations.",
                href: "/offerings",
                links: ["Property", "Cyber", "D&O", "Business Interruption", "Professional Indemnity", "Warranty"],
                color: "emerald"
              },
              {
                title: "Solutions",
                icon: Target,
                description: "Strategic advisory, risk engineering, claims advocacy, and program architecture services.",
                href: "/solutions",
                links: ["Global Programs", "Captive Insurance", "TCOR Analytics", "Claims Advocacy", "Risk Engineering"],
                color: "purple"
              },
              {
                title: "Platforms",
                icon: Cpu,
                description: "45+ AI-powered risk intelligence tools for assessment, monitoring, and compliance.",
                href: "/platform",
                links: ["Risk Diagnostic Engine", "Cyber Intelligence", "Supply Chain Monitor", "Climate Analytics", "Contract Intelligence"],
                color: "cyan"
              },
              {
                title: "Outcomes",
                icon: LineChart,
                description: "Proven business outcomes and measurable results from enterprise risk transformations.",
                href: "/outcomes",
                links: ["IPO Protection", "PE Fund Exit", "Cyber Resilience", "Supply Chain Recovery", "Infrastructure Programs"],
                color: "amber"
              },
              {
                title: "Risk Intelligence Center",
                icon: Brain,
                description: "AI-powered predictive analytics and real-time risk monitoring across global markets.",
                href: "/risks/risk-intelligence-center",
                links: ["Predictive Analytics", "Market Intelligence", "Regulatory Updates", "Peer Benchmarking", "Scenario Modeling"],
                color: "indigo"
              },
              {
                title: "Enterprise Advisory",
                icon: Users,
                description: "Senior risk architects and practice leaders delivering transformational advisory services.",
                href: "/about-us",
                links: ["Leadership Team", "Industry Experts", "Claims Desk", "Underwriting Panel", "Technical Specialists"],
                color: "teal"
              },
            ].map((card, i) => {
              const Icon = card.icon;
              const colors = COLOR_MAP[card.color] || COLOR_MAP.blue;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  <Link to={card.href} className="group block h-full">
                    <div className="h-full apple-card hover:apple-card-hover p-6 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${colors.bg} ${colors.hoverBg}`}>
                          <Icon className={`h-6 w-6 transition-colors duration-300 group-hover:text-white ${colors.text}`} />
                        </div>
                        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-3 font-serif group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {card.description}
                      </p>
                      <div className="pt-4 border-t border-slate-200">
                        <div className="flex flex-wrap gap-1.5">
                          {card.links.slice(0, 3).map((link, j) => (
                            <span key={j} className="text-[10px] font-medium px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">
                              {link}
                            </span>
                          ))}
                          {card.links.length > 3 && (
                            <span className="text-[10px] font-medium px-2 py-1 bg-blue-50 border border-blue-100 rounded text-blue-600">
                              +{card.links.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-sm font-bold text-blue-600 group-hover:text-blue-800 flex items-center">
                          Explore {card.title} <ChevronRight className="ml-1 h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. EXPLORE RISKS - Premium card layout */}
      <section id="explore-risks" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Risk Library</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">Explore Risk Categories</h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                Navigate through 200+ risk categories across cyber, operational, financial, regulatory, ESG, supply chain, and emerging risk domains.
              </p>
            </div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
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
                <motion.div key={risk.id} variants={fadeItem}>
                  <Link to={`/risks/${risk.id}`} className="group apple-card hover:apple-card-hover p-6 block">
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. OFFERINGS - Categorized offerings grid */}
      <section id="offerings" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Enterprise Protection</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">Featured Risk Offerings</h2>
              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
                78 specialized risk transfer products engineered to protect enterprise balance sheets across every asset class, liability exposure, and emerging risk frontier.
              </p>
            </div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {featuredOfferings.map((offering, i) => (
              <motion.div key={i} variants={fadeItem}>
                <Link to={offering.href} className="group apple-card hover:apple-card-hover p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <offering.icon className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-base font-bold text-primary mb-2 font-serif">
                      {offering.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {offering.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800 flex items-center">
                      Explore <ChevronRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. METHODOLOGY TIMELINE - Five-step framework */}
      <section id="methodology" className="py-24 bg-white border-y">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Advisory Framework</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">
              Five-Step Risk Architecture Process
            </h2>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8"
          >
            {methodologyStepsFixed.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={{
                    hidden: { opacity: 0, scale: 0.92, y: 20 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="relative group/methodology"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-500/20 blur-md"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                      />
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md border-4 border-white group-hover/methodology:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-primary font-serif group-hover/methodology:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {idx < methodologyStepsFixed.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200">
                      <ChevronRight className="absolute top-1/2 -translate-y-1/2 right-0 w-5 h-5 text-blue-600" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. FEATURED INDUSTRIES */}
      <section id="industries" className="py-24 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-2">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Sector Competencies</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif tracking-tight">Industry-Specialized Risk Architecture</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
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
          <motion.div
            ref={industriesRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeContainer}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory pb-4 pr-4"
          >
            {industries.map((ind, i) => (
              <motion.div key={ind.slug} variants={fadeItem} className="snap-align-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(20%-20px)]">
                <Link to={`/industries/${ind.slug}`} className="group apple-card hover:apple-card-hover p-5 flex flex-col justify-between cursor-pointer h-[230px]">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ind.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-primary group-hover:text-blue-600 transition-colors">{ind.name}</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center text-[10px] font-bold text-blue-600 uppercase mt-auto">
                    Explore Sector <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SOLUTIONS GRID */}
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Business Outcomes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">
              Risk Management Solutions
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
              Group by business outcomes to achieve measurable risk reduction and compliance.
            </p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <motion.div key={solution.id} variants={fadeItem}>
                  <Link to={`/solutions/${solution.id}`} className="group apple-card hover:apple-card-hover p-6 block">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 font-serif group-hover:text-blue-600 transition-colors">
                      {solution.label}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {solution.desc}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 6. WHY TRUSTFLOW - Differentiators */}
      <section id="why-trustflow" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Differentiators</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">
              Why TRUSTFLOW
            </h2>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyTrustflow.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={idx} variants={fadeItem} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-primary font-serif">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 6. TRUST & SOCIAL PROOF */}
      <section id="trust" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Institutional Validation</h3>
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
                  className="px-4 py-2 border border-slate-200 rounded-full text-sm font-semibold text-slate-500 bg-white shadow-sm"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto"
          >

            {/* Testimonial card */}
            <motion.div variants={fadeItem} className="lg:col-span-7 bg-white border border-slate-200/80 p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between relative overflow-hidden">
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
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">CFO</div>
                <div>
                  <div className="text-sm font-bold text-primary">Chief Financial Officer</div>
                  <div className="text-[10px] text-muted-foreground">Global SaaS Enterprise (Listed)</div>
                </div>
              </div>
            </motion.div>

            {/* Stats/Highlight card */}
            <motion.div variants={fadeItem} className="lg:col-span-5 bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <Award className="w-8 h-8 text-blue-300" />
                <h3 className="text-lg font-bold font-serif tracking-tight">Structured Advocacy</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  We don&apos;t just negotiate prices. TRUSTFLOW manages claims from notification to payout, leveraging pre-agreed insurer SLA templates to reduce delays.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-blue-600/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Average Claim Processing</span>
                  <span className="text-base font-extrabold text-blue-300">14 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Claim Approval Ratio</span>
                  <span className="text-base font-extrabold text-blue-300">99.2%</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 7. LATEST INSIGHTS SLIDER */}
      <section id="insights" className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Industry Updates</span>
              <h2 className="text-3xl font-bold text-primary font-serif tracking-tight">Latest Risk Insights</h2>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <Link to="/insights" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center text-base mr-4 hidden sm:flex">
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
          <motion.div
            ref={insightsRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeContainer}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory pb-4 pr-4"
          >
            {insights.map((post, i) => (
              <motion.div key={i} variants={fadeItem} className="snap-align-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                <div className="group apple-card hover:apple-card-hover p-6 flex flex-col justify-between h-[200px]">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. ENTERPRISE ADVISORY SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Enterprise Advisory</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">
              Senior Risk Architects & Advisory
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
              Practice leaders with deep domain expertise across technology, healthcare, energy, infrastructure, financial services, and emerging sectors.
            </p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Risk Engineering", desc: "Proactive mitigation strategies and facility safety profiles", icon: Shield },
              { title: "Claims Advocacy", desc: "Fierce representation during major loss events", icon: Award },
              { title: "Program Architecture", desc: "Complex multinational insurance program design", icon: Globe },
              { title: "TCOR Optimization", desc: "Data-driven total cost of risk analysis", icon: BarChart3 },
              { title: "Captive Solutions", desc: "Alternative risk transfer and captive formations", icon: Building2 },
              { title: "ESG Frameworks", desc: "Environmental, social, and governance risk", icon: Leaf },
              { title: "Cyber Resilience", desc: "Comprehensive cybersecurity and response planning", icon: Lock },
              { title: "Supply Chain", desc: "Supplier risk management and continuity planning", icon: Truck },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={i} variants={fadeItem} className="apple-card hover:apple-card-hover p-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2 font-serif">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 10. FEATURED PLATFORMS */}
      <section id="platforms" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Technology Suite</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight font-serif">AI-Powered Risk Platforms</h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                45+ proprietary tools for risk assessment, monitoring, compliance, and insurance optimization.
              </p>
            </div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Risk Diagnostic Engine", desc: "AI-powered risk assessment and scenario modeling", icon: Target, href: "/platform/risk-diagnostic-engine" },
              { title: "Cyber Intelligence", desc: "Real-time cyber threat monitoring and response", icon: Shield, href: "/platform/cyber-intelligence" },
              { title: "Supply Chain Monitor", desc: "End-to-end supplier risk tracking", icon: Truck, href: "/platform/supply-chain-monitor" },
              { title: "Climate Analytics", desc: "Physical and transition climate risk modeling", icon: Leaf, href: "/platform/climate-scenario" },
              { title: "Contract Intelligence", desc: "Automated contract analysis and risk extraction", icon: FileText, href: "/platform/contract-intelligence" },
              { title: "Risk Intelligence Center", desc: "Unified risk dashboard and reporting", icon: Activity, href: "/risks/risk-intelligence-center" },
            ].map((platform, i) => {
              const Icon = platform.icon;
              return (
                <motion.div key={i} variants={fadeItem}>
                  <Link to={platform.href} className="group apple-card hover:apple-card-hover p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                        <Icon className="h-5 w-5 text-blue-600 group-hover:text-white" />
                      </div>
                      <h3 className="text-base font-bold text-primary mb-2 font-serif group-hover:text-blue-600 transition-colors">
                        {platform.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {platform.desc}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100">
                      <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800 flex items-center">
                        Explore Platform <ChevronRight className="ml-1 h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/platform">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All 45+ Platforms <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. EXECUTIVE CTA */}
      <section id="contact" className="py-24 bg-white text-slate-900 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10"
        >
          <Award className="h-12 w-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif tracking-tight text-slate-900">
            Ready to Architect Your<br />Enterprise Risk Strategy?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with our senior risk architects for a comprehensive assessment and customized risk transfer architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg h-14 px-8 shadow-blue-600/15 hover:shadow-blue-600/25">
                <div className="text-left">
                  <div className="text-sm opacity-90">Call Us For</div>
                  <div className="text-base font-bold">Free Consultation</div>
                </div>
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 font-semibold h-14 px-8 shadow-none hover:shadow-none">
                <div className="text-left">
                  <div className="text-sm opacity-90">Schedule</div>
                  <div className="text-base font-bold">Executive Briefing</div>
                </div>
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
