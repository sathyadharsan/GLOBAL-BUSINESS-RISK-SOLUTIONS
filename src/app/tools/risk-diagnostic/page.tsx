"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, ChevronLeft, Sparkles, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

interface Question {
  id: number;
  dimension: "property" | "liability" | "cyber" | "ma" | "regulatory";
  text: string;
  options: { label: string; score: number }[];
}

const QUESTIONS: Question[] = [
  // 1. Property
  {
    id: 1,
    dimension: "property",
    text: "When was your enterprise's fixed-asset reinstatement valuation last audited?",
    options: [
      { label: "Within the last 12 months by a certified surveyor", score: 20 },
      { label: "1–3 years ago based on indexation multipliers", score: 12 },
      { label: "Over 3 years ago or using historical book value", score: 5 }
    ]
  },
  {
    id: 2,
    dimension: "property",
    text: "How is Contingent Business Interruption (CBI) structured for your unnamed critical suppliers?",
    options: [
      { label: "Affirmatively structured with named sub-limits matching supplier lead times", score: 20 },
      { label: "Subject to generic unnamed supplier treaty limits", score: 10 },
      { label: "No coverage active or unknown", score: 0 }
    ]
  },
  {
    id: 3,
    dimension: "property",
    text: "What is the selected indemnity period for your Business Interruption policy?",
    options: [
      { label: "24 to 36 months, accounting for municipal permissions & overseas machinery lead times", score: 20 },
      { label: "12 to 18 months", score: 10 },
      { label: "12 months or less", score: 5 }
    ]
  },
  {
    id: 4,
    dimension: "property",
    text: "Does your property program integrate parametric triggers for CAT exposures?",
    options: [
      { label: "Yes, parametric index overlays secure rapid 72-hour liquidity", score: 20 },
      { label: "Under review or partially placed for agricultural segments", score: 10 },
      { label: "No, purely traditional indemnity based", score: 0 }
    ]
  },
  // 2. Liability
  {
    id: 5,
    dimension: "liability",
    text: "Is your Commercial General Liability (CGL) program structured as primary & non-contributory for key clients?",
    options: [
      { label: "Yes, contractually aligned with additional insured endorsements", score: 20 },
      { label: "Partially, depending on specific joint-venture requirements", score: 10 },
      { label: "No or generic wording used", score: 0 }
    ]
  },
  {
    id: 6,
    dimension: "liability",
    text: "Does your product liability policy include affirmative first-party product recall logistics cover?",
    options: [
      { label: "Yes, including disposal, media crisis management, and PR expenses", score: 20 },
      { label: "Third-party bodily injury only, excludes recall operations", score: 10 },
      { label: "No coverage active", score: 0 }
    ]
  },
  {
    id: 7,
    dimension: "liability",
    text: "How is your Directors & Officers (D&O) Side A structured?",
    options: [
      { label: "Dedicated Side A DIC (Difference in Conditions) tower to shield personal assets", score: 20 },
      { label: "Standard Side A/B/C co-mingled limits", score: 12 },
      { label: "Co-mingled without dedicated Side A protection", score: 5 }
    ]
  },
  {
    id: 8,
    dimension: "liability",
    text: "Are independent directors protected under a dedicated run-off coverage schedule?",
    options: [
      { label: "Yes, locked in for 6–7 years post-retirement", score: 20 },
      { label: "Subject to generic active policy renewals only", score: 10 },
      { label: "No cover structured", score: 0 }
    ]
  },
  // 3. Cyber
  {
    id: 9,
    dimension: "cyber",
    text: "Does your cyber policy explicitly cover systemic cloud service provider outages (CBI)?",
    options: [
      { label: "Yes, affirmative coverage triggered by systemic non-physical disruption", score: 20 },
      { label: "Subject to a lengthy 24-hour waiting period deductible", score: 10 },
      { label: "Systemic outage is fully excluded or unknown", score: 0 }
    ]
  },
  {
    id: 10,
    dimension: "cyber",
    text: "How are cyber ransomware negotiation, extortion, and digital forensics fees funded?",
    options: [
      { label: "Fully sub-limited with 24/7 dedicated breach coach access", score: 20 },
      { label: "Indemnity reimbursement only, requires upfront corporate payment", score: 10 },
      { label: "Not covered", score: 0 }
    ]
  },
  {
    id: 11,
    dimension: "cyber",
    text: "Does your digital risk infrastructure cover DPDP (India) and GDPR regulatory defense fines?",
    options: [
      { label: "Yes, maximum allowable statutory limits with regulatory defense counsel", score: 20 },
      { label: "Defense costs are covered, but statutory fines are excluded", score: 12 },
      { label: "Fines and defense fully excluded", score: 0 }
    ]
  },
  {
    id: 12,
    dimension: "cyber",
    text: "How often is ransomware simulation and offline backup integrity audited?",
    options: [
      { label: "Quarterly automated validation with offline immutable backups", score: 20 },
      { label: "Annually or ad-hoc", score: 10 },
      { label: "No regular testing structured", score: 0 }
    ]
  },
  // 4. M&A
  {
    id: 13,
    dimension: "ma",
    text: "Does your corporate transaction architecture utilize representations & warranties (W&I) insurance?",
    options: [
      { label: "Standardized buy-side W&I is used to eliminate escrows and free up capital", score: 20 },
      { label: "Used occasionally for major cross-border exits", score: 12 },
      { label: "Traditional indemnity/escrow models are strictly used", score: 5 }
    ]
  },
  {
    id: 14,
    dimension: "ma",
    text: "Are known contingent tax risks insured during deal negotiations?",
    options: [
      { label: "Yes, specific tax liability policies ring-fence identified exposures", score: 20 },
      { label: "We rely on SPA price reduction or indemnity offsets", score: 8 },
      { label: "No tax insurance structured", score: 0 }
    ]
  },
  {
    id: 15,
    dimension: "ma",
    text: "Is run-off insurance locked-in during entity integration or PE exit?",
    options: [
      { label: "Yes, 6-year D&O and E&O run-off mandated in all transactions", score: 20 },
      { label: "Only if contractually demanded by the buying counterparty", score: 10 },
      { label: "Ad-hoc or not managed", score: 0 }
    ]
  },
  {
    id: 16,
    dimension: "ma",
    text: "How is successor liability managed for pre-acquisition operational errors?",
    options: [
      { label: "Affirmative retro-date coverage mapped to historical placements", score: 20 },
      { label: "Generic claims-made triggers used", score: 10 },
      { label: "Left to legal indemnity clauses only", score: 0 }
    ]
  },
  // 5. Regulatory
  {
    id: 17,
    dimension: "regulatory",
    text: "Are global local compliance policies structured via Controlled Master Policies (DIC/DIL)?",
    options: [
      { label: "Yes, standardized master policy overlays all local admitted setups", score: 20 },
      { label: "Ad-hoc local admitted placements without master policy integration", score: 10 },
      { label: "Non-admitted programs are used directly (creates regulatory risk)", score: 0 }
    ]
  },
  {
    id: 18,
    dimension: "regulatory",
    text: "How does your corporate team trace SEBI LODR or MCA governance updates?",
    options: [
      { label: "Integrated compliance dashboard managed by active legal underwriters", score: 20 },
      { label: "Rely on external counsel or annual board audits", score: 10 },
      { label: "Rely on last year's standard compliance manuals", score: 0 }
    ]
  },
  {
    id: 19,
    dimension: "regulatory",
    text: "What level of liability cover is structured for employer-employee disputes (EPL)?",
    options: [
      { label: "Comprehensive EPL including affirmative POSH Act investigation defense", score: 20 },
      { label: "Standard employer's liability without custom harassment/POSH extensions", score: 10 },
      { label: "No EPL policy placed", score: 0 }
    ]
  },
  {
    id: 20,
    dimension: "regulatory",
    text: "Are environmental remediation mandates from organizations like the NGT covered?",
    options: [
      { label: "Yes, affirmative gradual and sudden pollution remediation cover", score: 20 },
      { label: "Sudden and accidental pollution only (generic CGL wording)", score: 10 },
      { label: "Excluded", score: 0 }
    ]
  }
];

export default function RiskDiagnostic() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectOption = (score: number) => {
    setAnswers({ ...answers, [QUESTIONS[currentIdx].id]: score });
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const getScore = () => {
    const total = Object.values(answers).reduce((sum, s) => sum + s, 0);
    return Math.round((total / (QUESTIONS.length * 20)) * 100);
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  const progress = Math.round(((currentIdx + 1) / QUESTIONS.length) * 100);
  const score = getScore();

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200">
      <div className="container mx-auto px-4 py-16 max-w-3xl flex-1 flex flex-col justify-center">
        
        {!isCompleted ? (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl space-y-8 transition-all duration-300">
            {/* Progress and Dimension */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-accent-500 uppercase tracking-widest font-bold">
                  Dimension: {QUESTIONS[currentIdx].dimension}
                </span>
                <span className="text-neutral-500">
                  Question {currentIdx + 1} of {QUESTIONS.length}
                </span>
              </div>
              <div className="w-full bg-neutral-950 h-2 rounded-full overflow-hidden border border-neutral-850">
                <div 
                  className="bg-gradient-to-r from-accent-500 to-cyber-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold font-sans text-white leading-snug">
                {QUESTIONS[currentIdx].text}
              </h2>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-3.5">
              {QUESTIONS[currentIdx].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption(opt.score)}
                  className="w-full p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900 hover:border-accent-500/50 text-left text-xs md:text-sm text-neutral-300 hover:text-white transition-all font-serif duration-200"
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-between pt-4 border-t border-neutral-850">
              <Button
                onClick={handlePrev}
                disabled={currentIdx === 0}
                variant="outline"
                className="border-neutral-800 text-neutral-400 hover:text-white disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              <span className="text-[10px] font-mono text-neutral-600 self-center">
                TRUSTFLOW Sandbox Engine
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full border-4 border-accent-500/20 border-t-accent-500 flex items-center justify-center mx-auto text-glow">
                <span className="text-2xl font-extrabold text-white font-mono">{score}%</span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-accent-500 uppercase font-bold">
                  Diagnostic Profile Complete
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-sans text-white">
                  Risk Architecture Score
                </h2>
              </div>
            </div>

            {/* Score interpretation */}
            <div className="p-5 bg-neutral-950 border border-neutral-850 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white font-sans">
                {score >= 80 ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-cyber-500" />
                    <span>Strong Capital Resilience</span>
                  </>
                ) : score >= 50 ? (
                  <>
                    <AlertTriangle className="w-5 h-5 text-accent-500" />
                    <span>Moderate Exposure Vulnerabilities</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5 text-risk-500 animate-pulse" />
                    <span>Critical Coverage Gaps Found</span>
                  </>
                )}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-serif">
                {score >= 80 
                  ? "Your corporate program demonstrates high defensive readiness with robust Side A structures and proactive CBI structures. Only minor optimization recommended."
                  : score >= 50
                  ? "Significant silent exclusions detected in D&O and cyber sectors. Outdated property valuations likely present underinsurance pro-rata exposure risk."
                  : "Critical programmatic liabilities found. Outdated asset survey timelines, absent parametric liquidity structures, and co-mingled Side A towers create serious balance sheet vulnerability."}
              </p>
            </div>

            {/* Lead capture form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmitEmail} className="space-y-4 pt-4 border-t border-neutral-850">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white font-sans">
                    Get Your Complete Technical PDF Report
                  </h4>
                  <p className="text-xs text-neutral-400 font-serif">
                    We will generate a block-by-block exclusion audit, program architecture recommendations, and peer sector TCOR benchmarks.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter corporate email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 text-xs md:text-sm text-white focus:border-accent-500 focus:outline-none"
                  />
                  <Button type="submit" className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-10 px-5 shadow">
                    Export Full PDF <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </form>
            ) : (
              <div className="p-4 bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 rounded-xl flex items-center gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-xs font-sans font-semibold">
                  Report generated successfully. Check your inbox ({email}) for your customized Business Risk Architecture PDF analysis.
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
