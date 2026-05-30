"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Zap, Globe, Shield, Star, CheckCircle2,
  Users, Briefcase, Cpu, TrendingUp, ChevronRight, Heart, Coffee, BookOpen, Award
} from "lucide-react";

const OPEN_ROLES = [
  {
    title: "Senior Risk Architect — Cyber & Technology",
    type: "Full-time",
    location: "London / Singapore / Remote",
    practice: "Cyber",
    color: "#00d4aa",
    desc: "Lead structured Cyber & Technology E&O risk placement for enterprise clients across APAC and EMEA. Work directly with Lloyd's and specialist carriers.",
    requirements: ["5+ years cyber insurance underwriting or broking", "Beazley, Coalition, or AIG cyber market relationships", "DPDP, GDPR, SEC cyber disclosure knowledge", "CISSP or equivalent preferred"]
  },
  {
    title: "Risk Architect — Property & Catastrophe",
    type: "Full-time",
    location: "Mumbai / Dubai",
    practice: "Property",
    color: "#e8a317",
    desc: "Structure high-value SFSP, CAR/EAR, and Parametric programs for infrastructure and manufacturing clients across India and the GCC.",
    requirements: ["4+ years property/engineering insurance", "Experience with PSU and London catastrophe markets", "Knowledge of IRDA regulations", "AIIl or CII certification preferred"]
  },
  {
    title: "Practice Lead — Alternative Risk Transfer",
    type: "Full-time",
    location: "Singapore / Bermuda",
    practice: "ART",
    color: "#e8a317",
    desc: "Design and place captive insurance structures, ILS transactions, and parametric index programs for large corporates and sovereign funds.",
    requirements: ["7+ years captive/ART market experience", "GIFT City / Singapore MAS captive knowledge", "Parametric structuring expertise (Swiss Re, Celsius)", "CPA or Actuarial qualification preferred"]
  },
  {
    title: "Emerging Risk Specialist — Crypto & Web3",
    type: "Full-time",
    location: "London / New York / Remote",
    practice: "Frontier",
    color: "#00d4aa",
    desc: "Build and scale the TRUSTFLOW Crypto & Digital Asset practice. Structure exchange custody, DeFi, and smart contract risk programs with Lloyd's specialist syndicates.",
    requirements: ["3+ years crypto risk or insurtech", "Exchange or custodian risk background", "Chainalysis, Coincover partner knowledge", "Strong Web3 ecosystem understanding"]
  },
  {
    title: "Senior Claims Advocate",
    type: "Full-time",
    location: "London / Mumbai",
    practice: "Claims",
    color: "#e8a317",
    desc: "Manage complex, high-severity claims for enterprise clients from notification through recovery. Specialize in property, cyber, and D&O claims management.",
    requirements: ["6+ years major loss claims handling", "Property, cyber, or D&O claims experience", "Qualified Loss Adjuster (ACII, AICPCU) preferred", "Experience with SLA-based claims protocols"]
  },
  {
    title: "Risk Intelligence Analyst",
    type: "Full-time",
    location: "London / Remote",
    practice: "Analytics",
    color: "#00d4aa",
    desc: "Build and maintain the TRUSTFLOW risk intelligence platform. Source, analyze, and publish market data, regulatory alerts, and emerging risk briefings.",
    requirements: ["2+ years risk analysis or insurance research", "Strong quantitative modeling skills", "Experience with Verisk, Moody's RMS, or CyberCube", "Academic background in risk, actuarial, or data science"]
  }
];

const BENEFITS = [
  { icon: Globe, title: "Global Mobility", desc: "Work across our London, Mumbai, Singapore, and New York offices with international rotation programs." },
  { icon: BookOpen, title: "Learning Investment", desc: "Full sponsorship for professional qualifications (ACII, CII, CPCU, CISSP, CFA) and external training budgets." },
  { icon: Heart, title: "Comprehensive Health", desc: "Medical, dental, and mental health coverage for you and your family, plus wellness stipends." },
  { icon: TrendingUp, title: "Performance Equity", desc: "Competitive base salaries, performance bonuses, and long-term equity participation for senior roles." },
  { icon: Coffee, title: "Flexible Working", desc: "Hybrid-first culture with flexible hours, unlimited PTO, and remote work options for eligible roles." },
  { icon: Star, title: "Deal Flow Access", desc: "Work directly on landmark deals — satellite constellations, PE exits, crypto exchanges, sovereign risk." }
];

const CULTURE_PILLARS = [
  "We audit everything, assume nothing",
  "Architecture over products",
  "Clients before commissions",
  "Frontier risk is where expertise matters most",
  "Speed plus precision, never one without the other"
];

function RoleCard({ role }: { role: typeof OPEN_ROLES[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 group">
      <div className="h-0.5 w-full" style={{ backgroundColor: role.color }} />
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border"
                style={{ color: role.color, borderColor: role.color + "40", backgroundColor: role.color + "10" }}>
                {role.practice}
              </span>
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">{role.type}</span>
            </div>
            <h3 className="text-sm font-bold text-white font-sans leading-snug">{role.title}</h3>
            <p className="text-[10px] text-neutral-500 font-mono">{role.location}</p>
          </div>
        </div>
        <p className={`text-[11px] text-neutral-400 font-serif leading-relaxed ${open ? "" : "line-clamp-2"}`}>{role.desc}</p>

        {open && (
          <div className="pt-3 border-t border-neutral-850 space-y-2 animate-in fade-in duration-200">
            <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-bold">Requirements</p>
            <ul className="space-y-1.5">
              {role.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-[11px] text-neutral-300 font-serif">
                  <CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" style={{ color: role.color }} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-neutral-850">
          <button onClick={() => setOpen(!open)} className="text-[10px] font-bold font-sans uppercase tracking-wider transition-colors" style={{ color: role.color }}>
            {open ? "Show less" : "View role ↓"}
          </button>
          <Link href="/contact">
            <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-[10px] h-7 px-3">
              Apply <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200">

      {/* Hero */}
      <div className="w-full bg-neutral-900 border-b border-neutral-800 relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,212,170,0.06),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center space-y-5">
          <span className="text-[10px] font-mono text-cyber-400 uppercase tracking-widest bg-cyber-500/10 border border-cyber-500/20 px-2.5 py-1 rounded-full">
            Careers at TRUSTFLOW
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight font-sans text-white leading-tight">
            Work on the Hardest<br />
            <span className="text-accent-500">Risk Problems on Earth</span>
          </h1>
          <p className="text-sm md:text-base text-neutral-400 max-w-3xl mx-auto leading-relaxed font-serif">
            Join a team of former Lloyd's underwriters, actuaries, and legal specialists designing risk architectures for satellite constellations, crypto exchanges, quantum computing firms, and sovereign infrastructure funds.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a href="#open-roles">
              <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-11 px-6">
                View Open Roles <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-900 font-sans text-xs h-11 px-6">
                Speculative Applications
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 max-w-6xl space-y-20">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { val: "4", label: "Global Offices", icon: Globe },
            { val: "150+", label: "Countries We Cover", icon: Shield },
            { val: "20+", label: "Risk Domains", icon: Zap },
            { val: "100%", label: "Ownership Mindset", icon: Star }
          ].map((s, i) => (
            <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 text-center space-y-2">
              <s.icon className="w-5 h-5 text-accent-500 mx-auto" />
              <div className="text-2xl font-bold text-white font-mono">{s.val}</div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider font-sans">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Culture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest font-bold">Our Culture</span>
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white">Built by specialists, for specialists</h2>
            <p className="text-sm text-neutral-400 font-serif leading-relaxed">
              TRUSTFLOW is not a traditional insurance broker. We're a risk architecture firm — and we hire accordingly. Our people come from Lloyd's syndicates, actuarial firms, legal practices, and deep technology backgrounds. We don't sell products; we design solutions.
            </p>
            <div className="space-y-2">
              {CULTURE_PILLARS.map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-neutral-300 font-serif">
                  <CheckCircle2 className="w-4 h-4 text-cyber-500 shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {BENEFITS.slice(0, 3).map((b, i) => (
              <div key={i} className="flex items-start gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <div className="w-9 h-9 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0">
                  <b.icon className="w-4 h-4 text-accent-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white font-sans">{b.title}</p>
                  <p className="text-[11px] text-neutral-400 font-serif leading-relaxed mt-0.5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits grid */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-mono text-cyber-400 uppercase tracking-widest font-bold">Benefits</span>
            <h2 className="text-2xl font-bold font-sans text-white">Why TRUSTFLOW</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-3 hover:border-neutral-700 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                  <b.icon className="w-4 h-4 text-accent-500" />
                </div>
                <h4 className="text-sm font-bold text-white font-sans">{b.title}</h4>
                <p className="text-[11px] text-neutral-400 font-serif leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Roles */}
        <div id="open-roles" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest font-bold">Open Roles</span>
              <h2 className="text-2xl md:text-3xl font-bold font-sans text-white">Current Openings</h2>
              <p className="text-xs text-neutral-400 font-serif">All roles open to global talent. Remote-first for eligible positions.</p>
            </div>
            <span className="text-[10px] font-mono text-cyber-400 bg-cyber-500/10 border border-cyber-500/20 px-3 py-1.5 rounded-full">
              {OPEN_ROLES.length} positions open
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPEN_ROLES.map((role, i) => (
              <RoleCard key={i} role={role} />
            ))}
          </div>
        </div>

        {/* Speculative CTA */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(232,163,23,0.04),transparent_60%)]" />
          <div className="space-y-2 relative z-10">
            <h3 className="text-xl font-bold text-white font-sans">Don't see your role?</h3>
            <p className="text-xs text-neutral-400 font-serif max-w-xl leading-relaxed">
              We welcome speculative applications from experienced risk professionals, actuaries, underwriters, and legal specialists. Send your CV directly to our hiring team.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 relative z-10 w-full md:w-auto">
            <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-12 px-6 shadow w-full md:w-auto flex items-center justify-center gap-1.5">
              Send Speculative Application <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
