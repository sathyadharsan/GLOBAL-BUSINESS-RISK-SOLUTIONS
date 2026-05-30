"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, FileText, CheckCircle2, ChevronRight, AlertCircle, Cpu, Network, ArrowRight } from "lucide-react";

const PHASES = [
  {
    step: "01",
    title: "Discover & Audit",
    subtitle: "Block-by-block exclusion audits",
    desc: "We perform a forensic, line-by-line audit of your historical policies to expose hidden sub-limits, silent exclusions, and underinsured asset values. We baseline your current Total Cost of Risk (TCOR).",
    checklist: ["Forensic policy schedule review", "Sum insured value verification", "TCOR mapping"]
  },
  {
    step: "02",
    title: "Architect",
    subtitle: "Custom policy manuscript design",
    desc: "We write bespoke manuscript wordings that explicitly expand coverage definitions and overwrite default carrier exclusions, tailoring limits to your sector's operational exposures.",
    checklist: ["Manuscript wording creation", "Exclusion override definitions", "Custom deductible structures"]
  },
  {
    step: "03",
    title: "Protect",
    subtitle: "A++ carrier capacity syndication",
    desc: "We syndicate your risks across our network of top-tier global reinsurers and A++ carriers, matching Lloyds syndicates and domestic capacity to prune premium margins.",
    checklist: ["Carrier syndication matching", "Premium pricing negotiation", "Multi-layered quota share"]
  },
  {
    step: "04",
    title: "Evolve",
    subtitle: "Dynamic continuous alignment",
    desc: "Risk is not static. We continuously audit corporate exposures against geopolitical changes, M&A operations, system integrations, and supply-chain movements.",
    checklist: ["Quarterly operational auditing", "M&A target risk clearance", "Geopolitical advisory"]
  },
  {
    step: "05",
    title: "Optimize",
    subtitle: "Loss prevention engineering",
    desc: "We deploy specialist risk engineers to perform physical facility surveys and telematics checks. Integrating safety credits secures rate discounts on premium renewals.",
    checklist: ["Asset replacement validation", "Fire suppression and safety credits", "IoT telemetry mapping"]
  },
  {
    step: "06",
    title: "Transfer",
    subtitle: "Alternative risk structures",
    desc: "For mature capital pools, we structure single-parent captives, protected cells, cat bonds, and parametric index triggers to bypass standard treaty insurance limits.",
    checklist: ["GIFT City captive design", "Parametric CAT indices", "Insurance Linked Securities (ILS)"]
  },
  {
    step: "07",
    title: "Monitor",
    subtitle: "Active claims advocacy tracking",
    desc: "We manage claims from immediate notification to maximum recovery payout, utilizing pre-agreed SLA triggers to bypass carrier adjusting delays.",
    checklist: ["24/7 catastrophe triage", "Loss adjuster intervention", "Subrogation recovery tracking"]
  }
];

export default function Methodology() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200">
      {/* Hero Banner */}
      <div className="w-full bg-neutral-900 border-b border-neutral-800 relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(232,163,23,0.06),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center space-y-4">
          <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest bg-accent-500/10 border border-accent-500/25 px-2.5 py-1 rounded-full">
            7-Phase Framework
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight font-sans text-white">
            Business Risk Architecture
          </h1>
          <p className="text-sm md:text-base text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Most brokers copy-paste last year's policies. We audit, engineer, and orchestrate custom structural protections block-by-block.
          </p>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-6xl space-y-16">
        
        {/* The 7 Phases Timeline Layout */}
        <div className="relative border-l-2 border-neutral-800 pl-6 md:pl-10 space-y-12 ml-4">
          {PHASES.map((p, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full border-2 border-accent-500 bg-neutral-950 flex items-center justify-center shadow-[0_0_10px_rgba(232,163,23,0.2)]">
                <span className="text-[8px] font-mono font-bold text-accent-500">{p.step}</span>
              </div>

              {/* Content box */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-neutral-750 shadow-xl space-y-4 transition-all duration-300">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-cyber-400 uppercase tracking-widest font-bold">
                    {p.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-sans text-white group-hover:text-accent-400 transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-serif">
                  {p.desc}
                </p>

                {/* Checklist */}
                <div className="pt-4 border-t border-neutral-850 flex flex-wrap gap-4 text-[10px] font-mono text-neutral-300">
                  {p.checklist.map((c, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-neutral-950 border border-neutral-850 px-2.5 py-1 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyber-500" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Shield className="w-32 h-32 text-accent-500" />
          </div>
          <div className="space-y-2 relative z-10">
            <h3 className="text-xl font-bold text-white font-sans">
              Experience the Block-by-Block Audit
            </h3>
            <p className="text-xs text-neutral-400 font-serif max-w-xl leading-relaxed">
              Let our specialized legal underwriters and actuaries review your active policy schedules. We will deliver a comprehensive TCOR gap baseline within 14 business days.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 relative z-10 w-full md:w-auto">
            <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-12 px-6 shadow w-full md:w-auto flex items-center justify-center">
              Request Forensic Audit <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
