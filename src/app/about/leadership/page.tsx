"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Award, ChevronRight, Star, Briefcase, Scale, Cpu, Zap, Activity } from "lucide-react";

interface Leader {
  name: string;
  title: string;
  practice: string;
  bio: string;
  credentials: string[];
  icon: React.ElementType;
  color: string;
}

const EXECUTIVE_TEAM: Leader[] = [
  {
    name: "Arjun Mehta",
    title: "Founder & Chief Risk Architect",
    practice: "Global Strategy",
    bio: "Former Lloyd's Coverholder underwriter with 22 years structuring high-value property and catastrophe programs across Asia-Pacific, MENA, and European markets. Pioneered India's first institutional parametric agriculture risk syndication.",
    credentials: ["Lloyd's Coverholder (Class of 2002)", "IRDA-A Certified Broker", "FINRA Series 79 (Investment Banking)", "LLB (Risk & Insurance Law)"],
    icon: Shield,
    color: "#e8a317"
  },
  {
    name: "Priya Nair",
    title: "Managing Director — Liability & Governance",
    practice: "Liability & D&O",
    bio: "20 years specializing in Directors & Officers, Management Liability, and Professional Indemnity programs for SEBI-regulated entities and PE-backed portfolio companies across APAC and GCC.",
    credentials: ["CERA (Chartered Enterprise Risk Actuary)", "SEBI Compliance Lead", "AICPCU CPCU Holder", "Masters in Actuarial Science, LSE"],
    icon: Briefcase,
    color: "#00d4aa"
  },
  {
    name: "Daniel Osei",
    title: "Managing Director — Cyber & Emerging Risk",
    practice: "Cyber & Technology",
    bio: "Former head of Cyber Underwriting at a Tier-1 London market syndicate. Built proprietary Cyber portfolio models covering ransomware systemic accumulation, DPDP/GDPR regulatory defense, and cloud business interruption.",
    credentials: ["CISSP (Cybersecurity)", "CFC Underwriting Specialist Cert.", "MSc Information Systems Risk (Strathclyde)", "ISACA CISA Certified"],
    icon: Cpu,
    color: "#e8a317"
  }
];

const PRACTICE_LEADS: Leader[] = [
  {
    name: "Vikram Sood",
    title: "Practice Lead — Property & Engineering",
    practice: "Property & CAR/EAR",
    bio: "15 years structuring SFSP all-risks, machinery breakdown, CAR/EAR, and long-tenor infrastructure programs for PSU and private greenfield projects.",
    credentials: ["AIIl (Assoc. Insurance India)", "CPCU Certificate", "IRM Cert. Risk Management"],
    icon: Activity,
    color: "#00d4aa"
  },
  {
    name: "Amara Diallo",
    title: "Practice Lead — Marine & Aviation",
    practice: "Marine / Aviation / Space",
    bio: "Syndicated placement specialist across Marine Hull, Aviation Liability, and Space & Satellite risk for NewSpace constellation operators and multinational cargo shippers.",
    credentials: ["Chartered Insurance Practitioner (CIP)", "IIMS Marine Surveyor Cert.", "LST Member (Lloyd's)"],
    icon: Globe,
    color: "#e8a317"
  },
  {
    name: "Dr. Anika Kohli",
    title: "Practice Lead — Financial Lines & M&A",
    practice: "Trade Credit / W&I / Political Risk",
    bio: "Structured complex buy-side W&I insurance, political risk and trade credit programs for PE exits across 28 jurisdictions, eliminating escrow requirements for deal closures exceeding $2.4Bn.",
    credentials: ["PhD Corporate Finance (IIM-A)", "CFA Charterholder", "CGMA (Chartered Global Management Accountant)"],
    icon: Scale,
    color: "#00d4aa"
  },
  {
    name: "Rayan Al-Hassan",
    title: "Practice Lead — Energy & Renewables",
    practice: "Energy / Parametric / ESG",
    bio: "15+ years underwriting offshore energy platforms, onshore process plants, BESS battery storage facilities, and parametric wind/solar index programs across GCC, India, and the EU.",
    credentials: ["CFEI (Certified Fire & Explosion Investigator)", "IRM ERMA Certificate", "IRB Reinsurance Technical Analyst"],
    icon: Zap,
    color: "#e8a317"
  }
];

const ADVISORY: { name: string; affil: string; expertise: string }[] = [
  { name: "Justice R.V. Krishnan (Retd.)", affil: "Supreme Court of India", expertise: "Insurance law arbitration & regulatory disputes" },
  { name: "Prof. Sandra Bryce", affil: "London School of Economics", expertise: "Systemic financial risk & catastrophe modeling" },
  { name: "Hiroshi Nakamura", affil: "Former Tokio Marine Group", expertise: "Specialty underwriting capacity & Japanese market" },
  { name: "Sarah Okonkwo", affil: "Former Aon Hewitt EMEA", expertise: "HR liability, workforce risk, and EMEA placement strategy" }
];

function LeaderCard({ leader, featured = false }: { leader: Leader; featured?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 group ${featured ? "lg:col-span-1" : ""}`}
    >
      {/* Color accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: leader.color }} />

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl border flex items-center justify-center shrink-0"
              style={{ borderColor: leader.color + "40", backgroundColor: leader.color + "15" }}
            >
              <leader.icon className="w-5 h-5" style={{ color: leader.color }} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-sans leading-tight">{leader.name}</h3>
              <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: leader.color }}>{leader.practice}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold text-neutral-300 font-sans">{leader.title}</p>
          <p className={`text-[11px] text-neutral-400 font-serif leading-relaxed mt-2 ${expanded ? "" : "line-clamp-3"}`}>
            {leader.bio}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[10px] font-bold mt-1.5 transition-colors"
            style={{ color: leader.color }}
          >
            {expanded ? "Show less" : "Read more →"}
          </button>
        </div>

        {expanded && (
          <div className="pt-3 border-t border-neutral-850 space-y-1.5 animate-in fade-in duration-200">
            <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-bold">Credentials & Certifications</p>
            <ul className="space-y-1">
              {leader.credentials.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5 text-[10px] text-neutral-300 font-serif">
                  <Award className="w-3 h-3 shrink-0" style={{ color: leader.color }} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200">
      {/* Hero */}
      <div className="w-full bg-neutral-900 border-b border-neutral-800 relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,163,23,0.06),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center space-y-4">
          <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest bg-accent-500/10 border border-accent-500/25 px-2.5 py-1 rounded-full">
            The Architects
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight font-sans text-white">
            Leadership & Practice Teams
          </h1>
          <p className="text-sm md:text-base text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Former Lloyd's underwriters, actuaries, and senior legal counsel — our team brings institutional-grade depth to every risk engagement.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 max-w-6xl space-y-20">

        {/* Executive Leadership */}
        <section className="space-y-8">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest font-bold">Executive Leadership</span>
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white">Founding Architects</h2>
            <p className="text-xs text-neutral-400 font-serif max-w-2xl">
              Senior principals with direct Lloyd's market access, actuarial expertise, and global underwriting authority.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXECUTIVE_TEAM.map((leader, i) => (
              <LeaderCard key={i} leader={leader} featured />
            ))}
          </div>
        </section>

        {/* Practice Group Leads */}
        <section className="space-y-8">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyber-400 uppercase tracking-widest font-bold">Practice Specialists</span>
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white">Domain Practice Leads</h2>
            <p className="text-xs text-neutral-400 font-serif max-w-2xl">
              Sector-dedicated specialists who design the exact product architectures matching your operational risk parameters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRACTICE_LEADS.map((leader, i) => (
              <LeaderCard key={i} leader={leader} />
            ))}
          </div>
        </section>

        {/* Advisory Board */}
        <section className="space-y-8">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">Independent Advisors</span>
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white">Strategic Advisory Board</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ADVISORY.map((a, i) => (
              <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex items-start gap-4 hover:border-neutral-700 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-purple-400" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-xs font-bold text-white font-sans">{a.name}</p>
                  <p className="text-[10px] font-mono text-purple-400 truncate">{a.affil}</p>
                  <p className="text-[10px] text-neutral-500 font-serif leading-normal">{a.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(232,163,23,0.04),transparent_60%)]" />
          <div className="space-y-2 relative z-10">
            <h3 className="text-xl font-bold text-white font-sans">Work with our senior risk architects</h3>
            <p className="text-xs text-neutral-400 font-serif max-w-xl leading-relaxed">
              Engage directly with practice group leads for forensic policy audits, capacity placement, and regulatory compliance programs.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 relative z-10 w-full md:w-auto">
            <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-12 px-6 shadow w-full md:w-auto flex items-center justify-center gap-1.5">
              Schedule Consultation <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
