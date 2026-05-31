"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertCircle, TrendingUp, BarChart3, FileText, Users, ArrowRight } from "lucide-react";

interface RiskScore {
  risk: string;
  category: string;
  likelihood: number;
  impact: number;
  score: number;
  trend: "up" | "down" | "stable";
  color: string;
}

const riskScores: RiskScore[] = [
  { risk: "Ransomware Attack", category: "Cross-Industry", likelihood: 5, impact: 5, score: 92, trend: "up", color: "#DC2626" },
  { risk: "Data Breach (PII)", category: "Cross-Industry", likelihood: 4, impact: 4, score: 85, trend: "up", color: "#6366F1" },
  { risk: "Business Interruption", category: "Cross-Industry", likelihood: 4, impact: 5, score: 88, trend: "stable", color: "#0F766E" },
  { risk: "Regulatory Investigation", category: "Cross-Industry", likelihood: 4, impact: 4, score: 82, trend: "up", color: "#10B981" },
  { risk: "Supply Chain Disruption", category: "Cross-Functional", likelihood: 3, impact: 5, score: 78, trend: "up", color: "#F97316" },
  { risk: "Climate Physical Risk", category: "Cross-Industry", likelihood: 4, impact: 5, score: 86, trend: "up", color: "#059669" },
  { risk: "D&O Liability", category: "Cross-Industry", likelihood: 4, impact: 4, score: 75, trend: "up", color: "#1E40AF" },
  { risk: "ESG Risk", category: "Cross-Functional", likelihood: 3, impact: 4, score: 70, trend: "up", color: "#059669" },
  { risk: "AI Governance Failure", category: "Emerging", likelihood: 3, impact: 4, score: 65, trend: "up", color: "#7C3AED" },
  { risk: "Currency Fluctuation", category: "Cross-Functional", likelihood: 5, impact: 2, score: 60, trend: "stable", color: "#6B7280" },
];

export default function RiskDiagnostic() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,82,204,0.08),transparent_55%)]" />
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Board-Level Risk Dashboard
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              Executive view of top organizational risks with financial exposure, coverage gaps, risk scores, and trends.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Top 10 Risks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskScores.map((r, i) => (
              <RiskScoreCard key={i} score={r} rank={i + 1} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Financial Exposure Summary</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExposureCard 
              title="Total Potential Exposure" 
              value="$150M-$500M" 
              description="Across identified top 10 risks" 
              icon={AlertCircle}
            />
            <ExposureCard 
              title="Current Coverage" 
              value="$80M-$120M" 
              description="Insurance limits in place" 
              icon={Shield}
            />
            <ExposureCard 
              title="Coverage Gap" 
              value="$70M-$380M" 
              description="Uninsured or underinsured exposure" 
              icon={TrendingUp}
            />
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Risk Score Matrix</h2>
          </div>
          <RiskScoreMatrix scores={riskScores} />
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Board Exposure Assessment</h2>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Key Findings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Critical coverage gap in cyber incident response ($50M+ uninsured)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Board liability exposure from regulatory changes not quantified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Climate transition risk requires scenario modeling</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Recommendations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Implement Side-A D&O coverage for personal asset protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Enhance cyber limits with regulatory defense layer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Establish parametric trigger for business interruption</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 rounded-xl p-8 border border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4 font-serif">
            Get Your Comprehensive Risk Assessment
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our risk architects will provide a detailed analysis of your organization's risk profile and coverage gaps.
          </p>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Book Free Risk Diagnostic <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}

function RiskScoreCard({ score, rank }: { score: RiskScore; rank: number }) {
  return (
    <Card className="border border-slate-200 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs" style={{ color: score.color, borderColor: score.color }}>
            #{rank}
          </Badge>
          <span className="text-xs font-medium" style={{ color: score.color }}>
            {score.trend === "up" ? "↑ Rising" : score.trend === "down" ? "↓ Declining" : "→ Stable"}
          </span>
        </div>
        <h3 className="font-bold text-primary mb-1">{score.risk}</h3>
        <p className="text-xs text-slate-500 mb-4">{score.category}</p>
        <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
          <div
            className="h-2 rounded-full transition-all"
            style={{ width: `${score.score}%`, backgroundColor: score.color }}
          />
        </div>
        <p className="text-xs text-slate-400">Risk Score: {score.score}/100</p>
      </CardContent>
    </Card>
  );
}

function ExposureCard({ title, value, description, icon: Icon }: { title: string; value: string; description: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
      <p className="text-2xl font-bold text-slate-800 mb-1">{value}</p>
      <p className="text-xs text-slate-500">{description}</p>
    </div>
  );
}

function RiskScoreMatrix({ scores }: { scores: RiskScore[] }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 text-xs font-semibold text-slate-600 uppercase">Risk</th>
            <th className="text-center py-3 text-xs font-semibold text-slate-600 uppercase">Category</th>
            <th className="text-center py-3 text-xs font-semibold text-slate-600 uppercase">Likelihood</th>
            <th className="text-center py-3 text-xs font-semibold text-slate-600 uppercase">Impact</th>
            <th className="text-center py-3 text-xs font-semibold text-slate-600 uppercase">Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((s, i) => (
            <tr key={i} className="border-b border-slate-100 last:border-0">
              <td className="py-3 text-sm font-medium text-primary">{s.risk}</td>
              <td className="py-3 text-center text-xs text-slate-500">{s.category}</td>
              <td className="py-3 text-center">
                <span className="text-xs font-medium" style={{ color: s.color }}>
                  {["", "Low", "Medium", "High", "Very High", "Extreme"][s.likelihood]}
                </span>
              </td>
              <td className="py-3 text-center">
                <span className="text-xs font-medium" style={{ color: s.color }}>
                  {["", "Minimal", "Low", "Medium", "High", "Critical"][s.impact]}
                </span>
              </td>
              <td className="py-3 text-center">
                <span className="text-sm font-bold" style={{ color: s.color }}>{s.score}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}