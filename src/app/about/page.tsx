"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Award, Building2, CheckCircle2, ChevronRight, Scale, Sparkles, Star } from "lucide-react";

const stats = [
  { val: "150+", label: "Countries Served", desc: "Cross-border placement compliance networks" },
  { val: "A++ Rated", label: "Carrier Network", desc: "Top-tier global syndicates and capacity" },
  { val: "97%", label: "Retention Ratio", desc: "Long-term multinational enterprise trust" },
  { val: "14-Day", label: "Claim Processing", desc: "Proprietary active advocacy timelines" }
];

const values = [
  {
    title: "Balance Sheet Shielding",
    desc: "Our primary objective is to safeguard corporate assets and capital structure from catastrophic, unbudgeted volatility."
  },
  {
    title: "Capital Optimization",
    desc: "We syndicate domestic capacity and London syndicates to minimize premium spending and align deductibles with your risk appetite."
  },
  {
    title: "Operational Resilience",
    desc: "We ensure you remain operational through natural events, cyber attacks, supply-chain interruptions, and transactional transitions."
  }
];

export default function AboutOverview() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200">
      {/* Hero Banner */}
      <div className="w-full bg-neutral-900 border-b border-neutral-800 relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,212,170,0.06),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center space-y-4">
          <span className="text-[10px] font-mono text-cyber-400 uppercase tracking-widest bg-cyber-500/10 border border-cyber-500/20 px-2.5 py-1 rounded-full">
            Corporate Profile
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight font-sans text-white">
            Enterprise Risk Advisory Elite
          </h1>
          <p className="text-sm md:text-base text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            TRUSTFLOW is the definitive Business Risk Architecture platform — orchestrating capacity syndication, program structures, and active claims advocacy across 150+ countries.
          </p>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="border-b border-neutral-800 bg-neutral-900/40">
        <div className="container mx-auto px-4 py-8 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <div key={idx} className="p-4 bg-neutral-900 border border-neutral-850 rounded-xl space-y-2">
                <span className="text-2xl font-black text-accent-500 font-mono block">
                  {s.val}
                </span>
                <h4 className="text-xs font-bold text-white font-sans uppercase tracking-wider">
                  {s.label}
                </h4>
                <p className="text-[10px] text-neutral-500 leading-normal font-serif">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Narrative */}
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-5xl space-y-16">
        
        {/* Concept Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest font-bold">
              Operating Philosophy
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-sans text-white leading-snug">
              We design risk architectures. We don't just sell policies.
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-serif">
              TRUSTFLOW operates at the intersection of corporate governance, capital efficiency, and strategic risk transfer. Operating across India, the United States, and the European Union, we act as direct advisors to executive boards, risk managers, and institutional investors. Our approach transcends traditional brokerage — we build resilient systems that protect balance sheets block-by-block.
            </p>
          </div>
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold text-white font-sans uppercase tracking-wider flex items-center gap-2">
              <Scale className="w-4.5 h-4.5 text-cyber-500" />
              <span>Our Brand Imperatives</span>
            </h3>
            <ul className="space-y-3.5 text-xs text-neutral-300 font-serif">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyber-500 shrink-0 mt-0.5" />
                <span>IRDAI direct and composite capability + direct Lloyd's Coverholder network</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyber-500 shrink-0 mt-0.5" />
                <span>Parametric climate overlays securing immediate natural catastrophe liquidity</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyber-500 shrink-0 mt-0.5" />
                <span>Pre-agreed SLA claims protocols ensuring rapid payout containment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Values */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest font-bold">
              Core Values
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white">
              The Three Pillars of Architecture
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-3 hover:border-neutral-700 transition-colors duration-200">
                <div className="w-7 h-7 rounded-lg bg-neutral-950 border border-neutral-850 flex items-center justify-center text-accent-500">
                  <Star className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white font-sans">
                  {v.title}
                </h4>
                <p className="text-xs text-neutral-400 font-serif leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global footprints / A++ carrier network */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-10 space-y-6 text-center max-w-4xl mx-auto">
          <span className="text-[10px] font-mono text-cyber-400 uppercase tracking-widest font-bold">
            Carrier Infrastructure
          </span>
          <h3 className="text-xl md:text-3xl font-extrabold font-sans text-white">
            Direct Access to Global Specialty Markets
          </h3>
          <p className="text-xs md:text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed font-serif">
            We work directly with A++ rated carrier networks (including Allianz, Chubb, Zurich, Swiss Re, and Lloyd's syndicates) alongside PSU and private domestic insurers. This ensures massive capacity for high-risk assets, long-tenor infrastructure, and emerging liability sectors.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href="/about/methodology">
              <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-10 px-6 shadow flex items-center gap-1.5">
                Our Methodology <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
