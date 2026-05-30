"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, FileText, CheckCircle2, ChevronRight, AlertCircle, Cpu, Network } from "lucide-react";

const tools = [
  {
    title: "AI Risk Diagnostic",
    href: "/tools/risk-diagnostic",
    desc: "A comprehensive 20-question diagnostic wizard evaluating exposures across 5 corporate dimensions. Yields immediate score and gap overview.",
    icon: Sparkles,
    badge: "Most Popular",
    colorClass: "text-accent-500 bg-accent-500/10 border-accent-500/20 hover:border-accent-500/40"
  },
  {
    title: "Policy Gap Analyzer",
    href: "/tools/policy-gap-analyzer",
    desc: "Secure upload sandbox analyzing your current corporate policy documentation to detect sub-limit loopholes, silent exclusions, and coverages.",
    icon: FileText,
    badge: "Deep Audit",
    colorClass: "text-cyber-500 bg-cyber-500/10 border-cyber-500/20 hover:border-cyber-500/40"
  },
  {
    title: "Cyber Risk Assessment",
    href: "/tools/cyber-risk-assessment",
    desc: "12-question operational maturity calculator assessing system defenses, ransomware exposure, and compliance against peer global benchmarks.",
    icon: Cpu,
    badge: "Security Standard",
    colorClass: "text-red-400 bg-red-400/10 border-red-400/20 hover:border-red-400/40"
  },
  {
    title: "Compliance Checker",
    href: "/tools/compliance-checker",
    desc: "Multi-country regulatory database mapping mandatory insurance requirements, active governing commissions, and recommended compliance programs.",
    icon: Network,
    badge: "Global Mandate",
    colorClass: "text-purple-400 bg-purple-400/10 border-purple-400/20 hover:border-purple-400/40"
  }
];

export default function ToolsHub() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200">
      {/* Hero Banner */}
      <div className="w-full bg-neutral-900 border-b border-neutral-800 relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,212,170,0.06),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center space-y-4">
          <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest bg-accent-500/10 border border-accent-500/25 px-2.5 py-1 rounded-full">
            Analytical Engines
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight font-sans text-white">
            Risk Architecture Tools
          </h1>
          <p className="text-sm md:text-base text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Data-driven diagnostic calculators engineered to expose silent coverage gaps, evaluate technical asset maturity, and benchmark regulatory operational risk.
          </p>
        </div>
      </div>

      {/* Grid Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div 
                key={idx}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-neutral-700 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${t.colorClass.split(" ")[0]} ${t.colorClass.split(" ")[1]} ${t.colorClass.split(" ")[2]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase bg-neutral-950 text-neutral-400 border border-neutral-850 px-2 py-0.5 rounded">
                      {t.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-sans text-white group-hover:text-accent-400 transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-serif">
                    {t.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-800 mt-6 flex justify-between items-center">
                  <Link href={t.href} className="w-full">
                    <Button className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white font-sans text-xs py-5">
                      Launch Dynamic Tool <ChevronRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security / Privacy Banner */}
        <div className="mt-16 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 flex items-start gap-4 max-w-4xl mx-auto shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Shield className="w-32 h-32 text-accent-500" />
          </div>
          <div className="w-10 h-10 rounded-lg bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 flex items-center justify-center shrink-0 mt-0.5">
            <Shield className="w-5 h-5" />
          </div>
          <div className="space-y-2 relative z-10">
            <h4 className="text-sm font-bold text-white font-sans">
              Secure, Encrypted Assessment Sandbox
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-serif">
              All uploads and data parameters submitted inside the TRUSTFLOW sandbox are processed locally and fully encrypted. We adhere strictly to DPDP, GDPR, and ISO/IEC 27001 data processing compliance rules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
