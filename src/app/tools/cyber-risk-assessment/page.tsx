"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, ChevronLeft, CheckCircle2, AlertTriangle, ArrowRight, BarChart } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: { label: string; value: number }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What protocol is enforced for Multi-Factor Authentication (MFA)?",
    options: [
      { label: "MFA strictly enforced across all internal, SaaS, and remote access systems", value: 10 },
      { label: "Enforced for remote access/VPNs only", value: 6 },
      { label: "MFA not systematically enforced", value: 2 }
    ]
  },
  {
    id: 2,
    text: "How are enterprise backups isolated from the active network?",
    options: [
      { label: "Immutable, air-gapped, or encrypted offline backups with multi-hour RTO verification", value: 10 },
      { label: "Cloud-hosted warm backups connected to standard active domains", value: 6 },
      { label: "Rely solely on local drive copies or network-attached storage (NAS)", value: 2 }
    ]
  },
  {
    id: 3,
    text: "What endpoint detection and response (EDR) system is deployed?",
    options: [
      { label: "Active 24/7 EDR with continuous automated threat hunting and SOC containment", value: 10 },
      { label: "Standard signature-based anti-virus without telemetry tracing", value: 5 },
      { label: "No centralized endpoint control", value: 1 }
    ]
  },
  {
    id: 4,
    text: "How is access structured for administrative credentials?",
    options: [
      { label: "Just-In-Time (JIT) access via standard Privileged Access Management (PAM)", value: 10 },
      { label: "Static admin accounts with quarterly password rotations", value: 6 },
      { label: "Shared root credentials or manual domain controls", value: 2 }
    ]
  },
  {
    id: 5,
    text: "What is your average patch validation timeline for zero-day vulnerabilities?",
    options: [
      { label: "Automated validation and deployment within 24–72 hours", value: 10 },
      { label: "Validated and deployed within 14–30 days", value: 6 },
      { label: "Ad-hoc or whenever system schedules permit", value: 2 }
    ]
  },
  {
    id: 6,
    text: "How is employee security phishing awareness monitored?",
    options: [
      { label: "Monthly simulated campaigns with automated remediation courses", value: 10 },
      { label: "Annual or bi-annual mandatory slides during induction", value: 5 },
      { label: "No regular simulation program placed", value: 1 }
    ]
  },
  {
    id: 7,
    text: "Does your supply chain program audit the security posture of tier-1 SaaS providers?",
    options: [
      { label: "Yes, automated security questionnaires and SOC 2 audits required", value: 10 },
      { label: "Reviewed during procurement only, no continuous checking", value: 6 },
      { label: "No external vendor auditing", value: 1 }
    ]
  },
  {
    id: 8,
    text: "What incident response mechanisms are contractually locked with external counsel?",
    options: [
      { label: "Pre-agreed breach coaches, PR firms, and digital forensic retainers in place", value: 10 },
      { label: "Generic coverage under insurance policy without named retainers", value: 6 },
      { label: "No pre-agreed retainer partners structured", value: 1 }
    ]
  },
  {
    id: 9,
    text: "How is cloud environment logging and telemetry preserved?",
    options: [
      { label: "Centralized SIEM with immutable logging preserved for 365+ days", value: 10 },
      { label: "Standard console logging preserved for 30–90 days", value: 5 },
      { label: "No centralized log aggregation", value: 1 }
    ]
  },
  {
    id: 10,
    text: "Does your firm operate dynamic vulnerability scans and external pentesting?",
    options: [
      { label: "Quarterly external and internal pentests by certified third-party teams", value: 10 },
      { label: "Annual compliance pentesting only", value: 6 },
      { label: "No formal pentesting structured", value: 1 }
    ]
  },
  {
    id: 11,
    text: "How is systemic business interruption managed for critical API integrations?",
    options: [
      { label: "Affirmative multi-path redundancies and failovers placed", value: 10 },
      { label: "Single-path failovers with moderate transition delays", value: 6 },
      { label: "No technical failovers placed", value: 1 }
    ]
  },
  {
    id: 12,
    text: "Is data privacy regulated under DPDP, GDPR, and statutory standards?",
    options: [
      { label: "Yes, fully mapped data flows with active DPO oversight", value: 10 },
      { label: "Under structural transition to comply with local guidelines", value: 6 },
      { label: "No formal data map positioned", value: 1 }
    ]
  }
];

export default function CyberRiskAssessment() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (val: number) => {
    setAnswers({ ...answers, [QUESTIONS[currentIdx].id]: val });
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
    const total = Object.values(answers).reduce((sum, v) => sum + v, 0);
    return Math.round((total / (QUESTIONS.length * 10)) * 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  const score = getScore();
  const progress = Math.round(((currentIdx + 1) / QUESTIONS.length) * 100);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200">
      <div className="container mx-auto px-4 py-16 max-w-3xl flex-1 flex flex-col justify-center">
        
        {!isCompleted ? (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-red-400 uppercase tracking-widest font-bold">
                  Cyber Maturity Assessment
                </span>
                <span className="text-neutral-500">
                  Step {currentIdx + 1} of {QUESTIONS.length}
                </span>
              </div>
              <div className="w-full bg-neutral-950 h-2 rounded-full overflow-hidden border border-neutral-850">
                <div 
                  className="bg-gradient-to-r from-red-500 to-risk-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold font-sans text-white leading-snug">
                {QUESTIONS[currentIdx].text}
              </h2>
            </div>

            <div className="flex flex-col gap-3.5">
              {QUESTIONS[currentIdx].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(opt.value)}
                  className="w-full p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900 hover:border-red-500/50 text-left text-xs md:text-sm text-neutral-300 hover:text-white transition-all font-serif duration-200"
                >
                  {opt.label}
                </button>
              ))}
            </div>

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
                Cyber Vault Engine
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full border-4 border-red-500/20 border-t-red-500 flex items-center justify-center mx-auto text-glow">
                <span className="text-2xl font-extrabold text-white font-mono">{score}%</span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-red-400 uppercase font-bold">
                  Cyber Profile Synced
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-sans text-white">
                  Maturity & Benchmark Report
                </h2>
              </div>
            </div>

            {/* Score interpretation */}
            <div className="p-5 bg-neutral-950 border border-neutral-850 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white font-sans">
                <BarChart className="w-5 h-5 text-red-400" />
                <span>Maturity Benchmark Rating</span>
              </div>
              <div className="grid grid-cols-2 gap-4 pb-2 border-b border-neutral-850 text-xs font-sans">
                <div>
                  <span className="text-neutral-500 block">Your Score</span>
                  <span className="text-white font-bold">{score}% (Grade: {score >= 80 ? "Optimized" : score >= 60 ? "Ad-hoc" : "Deficient"})</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Global Peer Benchmark</span>
                  <span className="text-cyber-400 font-bold">78% (Finance/Tech Average)</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-serif pt-1">
                {score >= 80 
                  ? "Your systems display robust compliance, multi-factor integrity, and strong EDR coverage. You qualify for high cyber premium discounts and lower deductibles."
                  : score >= 60
                  ? "Your cyber system exhibits structural gaps. A lack of regular air-gapped backup testing or administrative PAM controls is a serious risk for ransomware incidents."
                  : "Critical security vulnerabilities found. Outdated patch timelines, absent multi-factor constraints, and limited console log retention disqualify you from A++ carrier networks."}
              </p>
            </div>

            {/* Lead capture form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-neutral-850">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white font-sans">
                    Request Underwriting Peer Analysis Report
                  </h4>
                  <p className="text-xs text-neutral-400 font-serif">
                    We will compile full structural policy recommendations, EDR validation certificates, and target rate comparisons from premium syndicates.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter corporate email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 text-xs md:text-sm text-white focus:border-red-500 focus:outline-none"
                  />
                  <Button type="submit" className="bg-red-500 hover:bg-red-400 text-neutral-950 font-bold font-sans text-xs h-10 px-5 shadow">
                    Export Analysis <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </form>
            ) : (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-center gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-xs font-sans font-semibold">
                  Maturity report compiled. Check your corporate inbox ({email}) to review carrier placement discount credits.
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
