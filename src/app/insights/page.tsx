"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock, Calendar, ChevronRight, X, Shield, Sparkles, FileText, CheckCircle2 } from "lucide-react";

interface Article {
  id: string;
  type: string;
  title: string;
  date: string;
  read: string;
  desc: string;
  content: string;
}

const ARTICLES: Article[] = [
  {
    id: "sec-cyber-disclosure",
    type: "Regulatory Alert",
    title: "Navigating the New SEC Cyber Disclosure Rules & DPDP Mandates",
    date: "Oct 2024",
    read: "5 min read",
    desc: "A comprehensive guide for corporate boards on compliance, liability, and risk transfer strategies under new data privacy and security frameworks.",
    content: "The regulatory landscape for digital assets and personal data has undergone a massive shift with the enforcement of the new SEC Cyber Disclosure Rules in the US and the Digital Personal Data Protection (DPDP) Act in India. Under these regimes, enterprises must disclose material cyber incidents within tight hours-long timelines (6 hours for CERT-In, 4 days for SEC). Non-compliance triggers severe board-level liability and fines up to ₹250 crore. Our advisory desks recommend restructuring your cyber program to include active incident response retainers and dedicated regulatory defense limits to shield corporate balances."
  },
  {
    id: "global-do-market-trends",
    type: "Market Update",
    title: "Hardening Capacity and Pricing Trends in the Global D&O Market",
    date: "Aug 2024",
    read: "8 min read",
    desc: "How executive boards can secure A++ rated management liability towers in a highly constrained global underwriting market.",
    content: "The global Directors & Officers (D&O) liability market continues to experience significant hardening, driven by social inflation, rising securities class actions, and macro-economic volatility. Insurers are auditing balance sheets with unprecedented rigor, imposing co-insurance clauses and reducing capacity. To protect your independent directors ahead of IPOs or mergers, we recommend syndicating multi-layered towers with dedicated Side A DIC (Difference in Conditions) policies, isolating personal assets from corporate insolvencies."
  },
  {
    id: "parametric-agri-tech",
    type: "Whitepaper",
    title: "Parametric Risk Transfer in Agri-Tech Infrastructure Projects",
    date: "Jun 2024",
    read: "12 min read",
    desc: "Bridging the protection gap for natural catastrophes and weather events using index-based triggers for immediate liquidity.",
    content: "Traditional crop and agri-infrastructure policies take months—often years—to settle losses due to lengthy on-site adjustments. Parametric insurance bypasses this friction by using local index triggers (such as rainfall accumulation or wind speed) sourced from certified satellite networks. Once the threshold is breached, payouts are released within 72 hours, providing immediate working capital to preserve operations and protect debt service limits."
  },
  {
    id: "supply-chain-cbi",
    type: "Underwriting Brief",
    title: "Supply Chain CBI Triggers & Contingent Exposure Mitigation",
    date: "May 2024",
    read: "6 min read",
    desc: "Analyzing how unnamed critical suppliers impact corporate earnings, and configuring proper contingent business interruption shields.",
    content: "Contingent Business Interruption (CBI) is the most critical risk gap in modern global supply chains. A fire or flood at an unnamed tier-1 supplier's warehouse can halt your manufacturing line, trigger contract frustration penalties, and erase gross profits. Standard property policies exclude these losses without affirmative CBI endorsements. We design multi-layered CBI programs that name key supplier nodes, verify their lead times, and align indemnity periods to match realistic component recovery."
  },
  {
    id: "gift-city-captives",
    type: "Risk Advisory",
    title: "Structured ART Solutions and Captive Insurance Formations in GIFT City",
    date: "Mar 2024",
    read: "10 min read",
    desc: "Exploring the regulatory benefits of India's premier international financial services centre for self-insuring predictable risks.",
    content: "GIFT City's IFSCA framework has opened a new frontier for Alternative Risk Transfer (ART) in India. Large enterprises with annual premiums exceeding ₹50 crore can now set up wholly owned single-parent or protected cell captives locally, achieving the tax and capital efficiencies historically sought in Bermuda or Singapore. Captives allow corporations to pool predictable risk, capture underwriting profits, and secure direct reinsurance market capacity."
  },
  {
    id: "q-day-readiness",
    type: "Technology Alert",
    title: "Q-Day Readiness: Quantum Computing and the Transition to Post-Quantum Cryptography",
    date: "Feb 2024",
    read: "7 min read",
    desc: "Evaluating the cryptographic risk timeline and how parametric solutions can bridge the mathematical encryption gap.",
    content: "The arrival of Q-Day—the point at which quantum computers can easily break standard public-key cryptography—poses a systemic threat to all corporate data security. Forward-looking boards must transition to Post-Quantum Cryptography (PQC). TRUSTFLOW structures bespoke parametric transition insurance programs to fund emergency system remediation, data breach forensics, and algorithmic overrides when mathematical breaches occur."
  },
  {
    id: "gen-ai-liability",
    type: "AI Underwriting",
    title: "Emerging Liability Frontiers in Generative AI and Algorithmic Audits",
    date: "Jan 2024",
    read: "9 min read",
    desc: "Understanding algorithmic bias, training data copyright disputes, and dynamic Tech E&O coverage extensions.",
    content: "Generative AI is shifting technology risk from operational downtime to intellectual property and algorithmic performance failure. Claims alleging copyright infringement from model training or algorithmic bias in financial decisions are rising. Standard anti-virus or Tech E&O policies do not respond to AI decision-making. We write affirmative AI and Algorithm Liability endorsements protecting against hallucination damages and regulatory defense costs."
  },
  {
    id: "autonomous-fleet-drone",
    type: "Mobility Brief",
    title: "Autonomous Fleet Liability: Insuring Drone & AV Operations at Scale",
    date: "Dec 2023",
    read: "8 min read",
    desc: "Bespoke third-party liability and physical hull structures for commercial UAV fleets under DGCA and FAA guidelines.",
    content: "Commercial drone fleets and autonomous transport vehicles create complex multi-party liability risks during navigation errors or signal anomalies. Standard commercial motor or property policies exclude autonomous actions. Our specialist mobility practices structure comprehensive fleet liability coverages that map to FAA, EASA, and DGCA guidelines, combining hardware hull protection with third-party liability."
  },
  {
    id: "space-satellite-insurance",
    type: "Frontier Risk",
    title: "Space Risks: Pre-launch, Launch, and In-orbit Satellite Program Insurance",
    date: "Nov 2023",
    read: "11 min read",
    desc: "Protecting private space investments through the full launch cycle for NewSpace LEO constellations.",
    content: "With the rapid commercialization of Low Earth Orbit (LEO) constellations, space insurance has transitioned from government monopolies to a de-facto commercial mandate. Pre-launch logistics, rocket ignition, launch staging, and in-orbit solar panel deployment all carry high-risk failure parameters. We syndicate dedicated space capacity from top-tier London and European markets to insure your constellation across all flight phases."
  },
  {
    id: "environmental-ngt-clean-up",
    type: "Compliance Brief",
    title: "Environmental Remediation: Navigating Punitive NGT & CPCB Clean-up Mandates",
    date: "Oct 2023",
    read: "8 min read",
    desc: "How gradual pollution liability and natural resource damage overlays prevent legacy contamination liabilities.",
    content: "India's National Green Tribunal (NGT) and Central Pollution Control Board (CPCB) are aggressively enforcing 'polluter pays' principles. Generic CGL policies exclude environmental pollution. To protect industrial operations from severe cleanup and natural resource damage claims, we recommend structuring dedicated gradual and sudden pollution liability programs."
  },
  {
    id: "transactional-wi-escrows",
    type: "M&A Intelligence",
    title: "Transactional Certainty: Eliminating Escrows in PE Exits Using W&I Coverages",
    date: "Sep 2023",
    read: "9 min read",
    desc: "Using buy-side Warranty & Indemnity insurance to eliminate cash retention escrows and facilitate nil-recourse transactions.",
    content: "Private Equity exits in India often face transaction friction due to escrow lockups and indemnity disputes. Buy-side Warranty & Indemnity (W&I) insurance eliminates this block by transferring seller reps and warranties directly to the insurance market. This enables sellers to distribute 100% of proceeds on day one and provides buyers with robust, secure recourse, unlocking deal flow."
  }
];

export default function InsightsHub() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const tags = Array.from(new Set(ARTICLES.map((a) => a.type)));

  const filteredArticles = selectedTag
    ? ARTICLES.filter((a) => a.type === selectedTag)
    : ARTICLES;

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200">
      {/* Hero Banner */}
      <div className="w-full bg-neutral-900 border-b border-neutral-800 relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,212,170,0.06),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center space-y-4">
          <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest bg-accent-500/10 border border-accent-500/25 px-2.5 py-1 rounded-full">
            Knowledge Platform
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight font-sans text-white">
            TRUSTFLOW Insights
          </h1>
          <p className="text-sm md:text-base text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Market intelligence, specialized whitepapers, and regulatory updates curated by our senior risk underwriters and legal counsel.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-6xl space-y-10">
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-neutral-850">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-sans transition-all border ${
              selectedTag === null
                ? "bg-accent-500 border-accent-500 text-neutral-950 shadow-md"
                : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            All Publications
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-sans transition-all border ${
                selectedTag === tag
                  ? "bg-accent-500 border-accent-500 text-neutral-950 shadow-md"
                  : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((post) => (
            <div 
              key={post.id}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between h-[230px] hover:border-neutral-750 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-wider uppercase">
                  <span className="text-cyber-400">{post.type}</span>
                  <span className="text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.read}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-accent-400 transition-colors leading-snug font-sans line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed font-serif">
                  {post.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-850 flex justify-between items-center text-[10px] text-neutral-500 font-sans mt-auto">
                <span className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <button
                  onClick={() => setActiveArticle(post)}
                  className="flex items-center gap-1 font-bold text-accent-500 hover:text-accent-400 uppercase tracking-wider group-hover:translate-x-0.5 transition-transform duration-200"
                >
                  Read Article →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Article view */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm p-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 md:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <button 
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-white bg-neutral-950 rounded-lg p-1.5 border border-neutral-800"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2 border-b border-neutral-850 pb-4 pr-6">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-wider uppercase">
                  <span className="text-cyber-400">{activeArticle.type}</span>
                  <span className="text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {activeArticle.read} · <Calendar className="w-3 h-3" /> {activeArticle.date}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold font-sans text-white leading-snug">
                  {activeArticle.title}
                </h2>
              </div>

              <p className="text-xs md:text-sm text-neutral-350 leading-relaxed font-serif">
                {activeArticle.desc}
              </p>

              <div className="p-5 bg-neutral-950 border border-neutral-850 rounded-xl text-xs md:text-sm leading-relaxed text-neutral-200 font-serif whitespace-pre-line border-l-4 border-l-accent-500">
                {activeArticle.content}
              </div>

              {/* Newsletter / Contact in modal */}
              <div className="bg-neutral-950/40 p-5 border border-neutral-850 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 flex items-center justify-center shrink-0">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white font-sans">
                    Insulate Your Operations Against This Threat
                  </h4>
                  <p className="text-[10px] text-neutral-500 leading-normal font-serif">
                    TRUSTFLOW risk practice groups design programmatic and transactional architectures that actively mitigate these systemic exposures. Reach out to our underwriting desk for a consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
