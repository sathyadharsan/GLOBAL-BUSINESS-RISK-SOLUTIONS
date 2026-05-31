"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, AlertCircle, TrendingUp, BarChart3, FileText, Activity, Leaf, Database, Globe } from "lucide-react";

interface RiskMetric {
  rank: number;
  label: string;
  category: string;
  score: number;
  trend: "up" | "down" | "stable";
  color: string;
}

interface RiskHeatmapItem {
  risk: string;
  likelihood: number;
  impact: number;
  color: string;
}

const topEnterpriseRisks: RiskMetric[] = [
  { rank: 1, label: "Business Interruption", category: "Operational", score: 95, trend: "up", color: "#DC2626" },
  { rank: 2, label: "Cyber Attack", category: "Technology", score: 88, trend: "up", color: "#6366F1" },
  { rank: 3, label: "Regulatory Investigation", category: "Compliance", score: 82, trend: "up", color: "#10B981" },
  { rank: 4, label: "Supply Chain Disruption", category: "Operational", score: 78, trend: "down", color: "#F97316" },
  { rank: 5, label: "Climate Physical Risk", category: "ESG", score: 75, trend: "up", color: "#059669" },
];

const topCyberRisks: RiskMetric[] = [
  { rank: 1, label: "Ransomware Attack", category: "Cross-Industry", score: 92, trend: "up", color: "#DC2626" },
  { rank: 2, label: "Data Breach (PII)", category: "Cross-Industry", score: 87, trend: "up", color: "#6366F1" },
  { rank: 3, label: "Deepfake Fraud", category: "Cross-Industry", score: 71, trend: "up", color: "#7C3AED" },
  { rank: 4, label: "Supply Chain Cyber", category: "Cross-Industry", score: 68, trend: "up", color: "#F97316" },
  { rank: 5, label: "Cloud Outage", category: "Technology", score: 65, trend: "down", color: "#0D9488" },
];

const topRegulatoryRisks: RiskMetric[] = [
  { rank: 1, label: "GDPR/Privacy Violations", category: "Compliance", score: 89, trend: "up", color: "#10B981" },
  { rank: 2, label: "ESG Litigation", category: "ESG", score: 84, trend: "up", color: "#059669" },
  { rank: 3, label: "AML Violations", category: "Financial Services", score: 76, trend: "up", color: "#0F766E" },
  { rank: 4, label: "Product Safety", category: "Regulatory", score: 72, trend: "stable", color: "#F59E0B" },
  { rank: 5, label: "Securities Litigation", category: "Financial", score: 68, trend: "down", color: "#1E40AF" },
];

const topClimateRisks: RiskMetric[] = [
  { rank: 1, label: "Physical Weather Events", category: "ES", score: 91, trend: "up", color: "#059669" },
  { rank: 2, label: "Transition Risk", category: "ESG", score: 86, trend: "up", color: "#0D9488" },
  { rank: 3, label: "Supply Chain Climate", category: "Operational", score: 74, trend: "up", color: "#F97316" },
  { rank: 4, label: "Insurance Availability", category: "Financial", score: 69, trend: "up", color: "#6B7280" },
  { rank: 5, label: "Regulatory Compliance", category: "ESG", score: 65, trend: "up", color: "#059669" },
];

const emergingAIRisks: RiskMetric[] = [
  { rank: 1, label: "AI Governance Failure", category: "Technology", score: 83, trend: "up", color: "#7C3AED" },
  { rank: 2, label: "AI Product Liability", category: "Technology", score: 77, trend: "up", color: "#6366F1" },
  { rank: 3, label: "Algorithmic Bias", category: "Employment", score: 62, trend: "up", color: "#EC4899" },
  { rank: 4, label: "Model Drift", category: "Operational", score: 58, trend: "stable", color: "#0D9488" },
  { rank: 5, label: "AI IP Infringement", category: "Legal", score: 54, trend: "up", color: "#B45309" },
];

const supplyChainThreats: RiskMetric[] = [
  { rank: 1, label: "Single Source Supplier", category: "Cross-Functional", score: 85, trend: "up", color: "#0D9488" },
  { rank: 2, label: "Geographic Concentration", category: "Cross-Functional", score: 72, trend: "up", color: "#7C3AED" },
  { rank: 3, label: "Rare Earth Disruption", category: "Industry", score: 68, trend: "up", color: "#059669" },
  { rank: 4, label: "Counterparty Default", category: "Cross-Functional", score: 64, trend: "up", color: "#1E40AF" },
  { rank: 5, label: "Maritime Casualty", category: "Industry", score: 59, trend: "stable", color: "#0F766E" },
];

const heatmapData: RiskHeatmapItem[] = [
  { risk: "Ransomware", likelihood: 4, impact: 5 },
  { risk: "Data Breach", likelihood: 4, impact: 4 },
  { risk: "Business Interruption", likelihood: 3, impact: 5 },
  { risk: "Regulatory Fines", likelihood: 4, impact: 4 },
  { risk: "Climate Physical", likelihood: 3, impact: 5 },
  { risk: "Supply Chain", likelihood: 3, impact: 4 },
  { risk: "D&O Liability", likelihood: 3, impact: 4 },
  { risk: "Deepfake Fraud", likelihood: 2, impact: 3 },
  { risk: "AI Governance", likelihood: 2, impact: 4 },
  { risk: "Currency Risk", likelihood: 4, impact: 2 },
  { risk: "Reputational", likelihood: 2, impact: 5 },
  { risk: "ESG Risk", likelihood: 3, impact: 4 },
  { risk: "Product Recall", likelihood: 2, impact: 4 },
  { risk: "Natural Catastrophe", likelihood: 2, impact: 5 },
  { risk: "Workforce Disruption", likelihood: 3, impact: 3 },
  { risk: "M&A Risk", likelihood: 2, impact: 4 },
].map((item) => ({
  ...item,
  color: item.impact >= 4 && item.likelihood >= 3 
    ? "#DC2626" 
    : item.impact >= 4 || item.likelihood >= 3 
      ? "#F59E0B" 
      : "#10B981"
}));

export default function RiskIntelligenceCenter() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,82,204,0.08),transparent_55%)]" />
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Risk Intelligence Center
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              Premium dashboard for monitoring top enterprise risks, cyber threats, regulatory exposures, 
              climate impacts, and emerging risk vectors with real-time intelligence feeds.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Top Enterprise Risks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topEnterpriseRisks.map((r) => (
              <RiskMetricCard key={r.rank} risk={r} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Top Cyber Risks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCyberRisks.map((r) => (
              <RiskMetricCard key={r.rank} risk={r} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Top Regulatory Risks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRegulatoryRisks.map((r) => (
              <RiskMetricCard key={r.rank} risk={r} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Top Climate Risks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topClimateRisks.map((r) => (
              <RiskMetricCard key={r.rank} risk={r} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Emerging AI Risks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergingAIRisks.map((r) => (
              <RiskMetricCard key={r.rank} risk={r} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Database className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Supply Chain Threats</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplyChainThreats.map((r) => (
              <RiskMetricCard key={r.rank} risk={r} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Globe className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary font-serif">Risk Heatmap</h2>
          </div>
          <RiskHeatmap data={heatmapData} />
        </section>
      </div>
    </div>
  );
}

function RiskMetricCard({ risk }: { risk: RiskMetric }) {
  return (
    <Card className="border border-slate-200 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="outline" className="text-xs" style={{ color: risk.color, borderColor: risk.color }}>
            #{risk.rank}
          </Badge>
          <TrendIndicator trend={risk.trend} />
        </div>
        <h3 className="font-bold text-primary mb-1">{risk.label}</h3>
        <p className="text-xs text-slate-500 mb-3">{risk.category}</p>
        <div className="w-full bg-slate-100 rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all"
            style={{ width: `${risk.score}%`, backgroundColor: risk.color }}
          />
        </div>
        <p className="text-xs text-slate-400 mt-2">Risk Score: {risk.score}/100</p>
      </CardContent>
    </Card>
  );
}

function TrendIndicator({ trend }: { trend: "up" | "down" | "stable" }) {
  if (trend === "up") return <span className="text-red-500 text-xs font-medium">↑ Rising</span>;
  if (trend === "down") return <span className="text-green-500 text-xs font-medium">↓ Declining</span>;
  return <span className="text-slate-500 text-xs font-medium">→ Stable</span>;
}

function RiskHeatmap({ data }: { data: RiskHeatmapItem[] }) {
  const likelihoodLabels = ["", "Low", "Medium", "High", "Very High", "Extreme"];
  const impactLabels = ["", "Minimal", "Low", "Medium", "High", "Critical"];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="grid grid-cols-6 gap-2">
        <div></div>
        {likelihoodLabels.map((label, i) => (
          i > 0 && <div key={i} className="text-xs font-semibold text-center text-slate-600">{label}</div>
        ))}
        {Array.from({ length: 5 }).map((_, rowIdx) => (
          <React.Fragment key={rowIdx}>
            <div className="text-xs font-semibold text-slate-600 flex items-center justify-end pr-2">
              {impactLabels[rowIdx + 1]}
            </div>
            {Array.from({ length: 5 }).map((_, colIdx) => {
              const item = data.find(d => d.likelihood === colIdx + 1 && d.impact === rowIdx + 1);
              return (
                <div
                  key={colIdx}
                  className="aspect-square rounded border border-slate-100 flex items-center justify-center text-xs font-medium text-white"
                  style={{ backgroundColor: item ? item.color : "#E2E8F0" }}
                >
                  {item ? item.risk : ""}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-600" />
            <span className="text-slate-600">Critical Risk</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-slate-600">Elevated Risk</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-emerald-600" />
            <span className="text-slate-600">Managed Risk</span>
          </div>
        </div>
        <p className="text-xs text-slate-500">Likelihood → | Impact ↓</p>
      </div>
    </div>
  );
}