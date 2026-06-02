"use client";

import React, { useState } from "react";
import { TwoPanelLayout, SidebarGroup } from "@/components/layout/TwoPanelLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, Users, Award, Building2, Leaf, Activity, FileText, 
  ArrowRight, Shield, Target, LayoutGrid, CheckCircle2, ChevronRight, Scale, Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const groups: SidebarGroup[] = [
  {
    label: "ABOUT GBRS",
    items: [
      { id: "our-story", label: "Our Story & Mission", icon: Globe },
      { id: "leadership", label: "Leadership & Team", icon: Users },
      { id: "credentials", label: "Credentials & Regulatory", icon: Award },
      { id: "markets", label: "Markets & Carriers", icon: Building2 },
      { id: "esg", label: "ESG & Sustainability", icon: Leaf }
    ]
  },
  {
    label: "ENGAGEMENT",
    items: [
      { id: "roadmap", label: "Implementation Roadmap", icon: Activity }
    ]
  },
  {
    label: "REGULATORY EXPERTISE",
    items: [
      { id: "compliance-map", label: "Regulatory Compliance Map", icon: Scale }
    ]
  }
];

// About details data structure
const aboutDetails = {
  "our-story": {
    title: "Our Story & Operating Philosophy",
    subtitle: "Protect the Balance Sheet. Enable the Business Plan.",
    description: "Global Business Risk Solutions operates at the intersection of corporate governance, capital efficiency, and strategic risk transfer. We act as trusted advisors to executive boards, risk managers, and institutional investors across 150+ countries. Our approach transcends traditional brokerage—we build resilient architectures that withstand the complexities of the modern global economy.",
    features: [
      { title: "Enterprise Value Preserved", description: "Securing physical assets, intellectual property, brand equity, and stakeholder trust against tail risks." },
      { title: "Earnings Volatility Reduced", description: "Stabilizing cash flow, safeguarding debt covenants, and ensuring investor confidence during disruptions." },
      { title: "Strategic Optionality Maintained", description: "Enabling aggressive expansion, cross-border M&A, and R&D pipelines with robust insurance backing." }
    ]
  },
  "leadership": {
    title: "Leadership & Enterprise Team",
    subtitle: "Specialist Risk Underwriters and Claims Advocates",
    description: "Our leadership is comprised of seasoned risk architects, ex-loss adjusters, legal counsel, and sector practice leaders. Rather than generalist brokers, we deploy dedicated experts who speak the language of your industry and run proprietary benchmarking models.",
    features: [
      { title: "Risk Architects", description: "Technical underwriters designing complex multi-layered placements and quota-share structures." },
      { title: "Practice Leaders", description: "Domain specialists heading technology, manufacturing, energy, and infrastructure verticals." },
      { title: "Claims Advocates", description: "A dedicated team focused on maximizing recovery speed, managing loss adjusters, and resolving disputes." }
    ]
  },
  "credentials": {
    title: "Credentials & Regulatory Registrations",
    subtitle: "Fully Licensed to Access Global Insurance Capacity",
    description: "GBRS holds licenses in major international financial hubs, ensuring regulatory compliance and direct placement access into leading global syndicates.",
    features: [
      { title: "IRDAI (India)", description: "Licensed Direct & Composite Broker with direct access to all PSU and private domestic carriers." },
      { title: "Lloyd's of London", description: "Registered Coverholder enabling direct placement into the London specialty market." },
      { title: "GIFT City IFSCA", description: "Registered intermediary leveraging India's premier international financial services centre for captives." }
    ]
  },
  "markets": {
    title: "Markets & Carrier Relationships",
    subtitle: "A++ Rated Security for Large Corporates",
    description: "We negotiate directly with global reinsurers and A++ rated carriers, securing competitive treaty pricing and massive capacity for high-value properties and complex liabilities.",
    features: [
      { title: "A++ Global Carriers", description: "Direct agreements with Zurich, AIG, Chubb, Allianz, and AXA." },
      { title: "Indian Insurers", description: "Co-insurance arrangements with New India Assurance, ICICI Lombard, TATA AIG, HDFC ERGO." },
      { title: "Specialist Syndicates", description: "Facultative support from Munich Re, Swiss Re, and Lloyd's syndicates." }
    ]
  },
  "esg": {
    title: "ESG & Sustainability Integration",
    subtitle: "Aligning Risk Transfer with Climate Transition Plans",
    description: "We integrate environmental, social, and governance (ESG) metrics into corporate risk profiling to help clean-energy and ESG-disciplined organizations secure better market pricing.",
    features: [
      { title: "Green Premium Discounts", description: "Rate reductions negotiated on the back of strong ESG and safety scores." },
      { title: "Climate Risk Advisory", description: "Physical climate asset modeling and BRSR/TCFD reporting alignment." },
      { title: "Transition Coverages", description: "Specialized insurance backing carbon credit delivery and battery energy storage." }
    ]
  }
};

const roadmapPhases = [
  {
    phase: "Phase 1: Discovery & Risk Architecture (Weeks 1–4)",
    desc: "Enterprise risk assessment, forensic policy audits, identification of underinsurance gaps, TCOR baselining, and risk appetite calibration."
  },
  {
    phase: "Phase 2: Solution Design & Modeling (Weeks 5–8)",
    desc: "Coverage architecture recommendation, market sounding, solicitation of competitive quotes from 3+ carriers per line, and scenario modeling."
  },
  {
    phase: "Phase 3: Placement & Documentation (Weeks 9–12)",
    desc: "Policy wording negotiation (custom slips), manuscript endorsement binding, documentation verification, and claims procedure manual setup."
  },
  {
    phase: "Phase 4: Strategic Management (Ongoing)",
    desc: "Quarterly board-level risk updates, claims monitoring/advocacy, mid-term risk reviews for M&A, and captive feasibility studies at ₹50Cr+ premium."
  }
];

const complianceMap = [
  { act: "Motor Vehicles Act 1988", mandate: "Third-party liability for all registered vehicles", implication: "Mandatory unlimited bodily injury/death coverage" },
  { act: "Workmen's Compensation Act 1923", mandate: "Employer liability for injuries at specified works", implication: "Mandatory EC Policy based on wage declarations" },
  { act: "Public Liability Insurance Act 1991", mandate: "Mandatory coverage for hazardous substance handlers", implication: "Statutory public liability policy (min ₹5 crore)" },
  { act: "Indian Boilers Act 1923", mandate: "Annual third-party inspection for pressure vessels", implication: "Boiler explosion cover + inspection compliance" },
  { act: "DPDP Act 2023", mandate: "Personal data breach reporting & protection standards", implication: "Cyber liability; penalties up to ₹250 crore per breach" },
  { act: "CERT-In Directions 2022", mandate: "6-hour cyber incident reporting to government", implication: "Cyber incident response/breach coach activation" },
  { act: "POSH Act 2013", mandate: "Mandatory harassment internal committee and defense", implication: "EPL policy covering POSH defense & settlements" },
  { act: "Consumer Protection Act 2019", mandate: "Manufacturer liability for defective products", implication: "Product liability & recall policies (strict liability)" },
  { act: "SEBI LODR Regulations", mandate: "Officer accountability and listing rules", implication: "Mandatory D&O board reviews; independent director shield" },
  { act: "Environment Protection Act 1986", mandate: "Polluter pays principles for contamination", implication: "Environmental liability covering CPCB / NGT clean-up costs" }
];

export default function AboutUs() {
  const [selectedTab, setSelectedTab] = useState("our-story");

  const isStorySection = ["our-story", "leadership", "credentials", "markets", "esg"].includes(selectedTab);
  const isRoadmap = selectedTab === "roadmap";
  const isCompliance = selectedTab === "compliance-map";

  const currentData = isStorySection ? aboutDetails[selectedTab as keyof typeof aboutDetails] : null;

  return (
    <TwoPanelLayout
      groups={groups}
      activeId={selectedTab}
      onItemSelect={(id) => setSelectedTab(id)}
      heroTitle="Enterprise Risk Advisory Elite"
      heroSubtitle="Global Business Risk Solutions operates at the intersection of corporate governance, capital efficiency, and strategic risk transfer. Operating across India, US, and EU."
      heroBadges={["About Us"]}
      heroImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
      heroStats={[
        { val: "150+", label: "Countries" },
        { val: "30+", label: "Industries" },
        { val: "24/7", label: "Monitoring" },
        { val: "A++", label: "Capacity" }
      ]}
    >
      
      {/* 1. Category Header */}
      <div className="mb-6 pb-3 border-b flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary font-serif">
            {isStorySection && "Corporate Profile"}
            {isRoadmap && "Engagement Framework"}
            {isCompliance && "Regulatory Intelligence"}
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Click any section in the sidebar to review detailed profile configurations
          </p>
        </div>
      </div>

      {/* 2. SUMMARY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups.flatMap(g => g.items).map((item) => {
          const isSelected = selectedTab === item.id;
          const Icon = item.icon || Shield;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedTab(item.id)}
              className={cn(
                "p-4 bg-white rounded-lg border border-slate-200 transition-all cursor-pointer shadow-sm hover:shadow-md select-none flex flex-col justify-between border-l-[3px] border-l-blue-600 min-h-[120px]",
                isSelected ? "ring-2 ring-blue-600 ring-offset-1 shadow-md scale-[1.01]" : "hover:-translate-y-[2px]"
              )}
            >
              <div className="flex items-center gap-2">
                <Icon className={cn("h-5 w-5 shrink-0", isSelected ? "text-blue-600" : "text-slate-500")} />
                <h3 className="text-xs font-bold text-primary truncate leading-tight">
                  {item.label}
                </h3>
              </div>
              <div className="text-[10px] font-semibold text-blue-600 flex items-center gap-0.5 mt-4 pt-2 border-t border-slate-100">
                {isSelected ? "Expanded" : "View Section"} →
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. DYNAMIC DETAIL CARD CONTAINER */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
        
        {/* Banner */}
        <div className="p-6 text-white bg-primary relative border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
          <div className="relative z-10 space-y-2 max-w-4xl">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-600/50 px-2 py-0.5 rounded border border-blue-500/20">
              {isStorySection && "Corporate Strategy"}
              {isRoadmap && "Engagement Timeline"}
              {isCompliance && "Regulatory Mapping"}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif leading-tight">
              {isStorySection && currentData?.title}
              {isRoadmap && "Enterprise Engagement Roadmap"}
              {isCompliance && "India Regulatory Compliance Map"}
            </h2>
            <p className="text-sm text-gray-300">
              {isStorySection && currentData?.subtitle}
              {isRoadmap && "The structured 4-phase roadmap from diagnostic to placement"}
              {isCompliance && "Statutory mandates and enterprise non-life insurance implications in India"}
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          
          {/* A. Corporate Profile View */}
          {isStorySection && currentData && (
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-base font-bold text-primary flex items-center gap-2 pb-2 border-b">
                  <LayoutGrid className="w-5 h-5 text-blue-600" />
                  Overview
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                  {currentData.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-primary flex items-center gap-2 pb-2 border-b">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  Key Components & Pillars
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentData.features.map((feature, i) => (
                    <div key={i} className="bg-slate-50/50 p-5 rounded-xl border border-slate-100 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          {feature.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* B. Roadmap Timeline View */}
          {isRoadmap && (
            <div className="space-y-8">
              <p className="text-sm text-slate-600 leading-relaxed max-w-4xl mb-6">
                Disciplined placement takes 12 weeks from initial diagnostic to final policy bind. Our roadmap ensures no exposure goes unidentified and no insurer wording goes unnegotiated.
              </p>
              <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-8">
                {roadmapPhases.map((phase, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-base font-bold text-primary font-serif">
                        {phase.phase}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* C. Regulatory Compliance Map Table */}
          {isCompliance && (
            <div className="space-y-6">
              <p className="text-sm text-slate-600 leading-relaxed max-w-4xl mb-4">
                India's regulatory environment mandates multiple coverages under various Acts. Non-compliance results in harsh penalties, director liability, or operation shutdowns.
              </p>
              
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-left text-xs text-muted-foreground">
                  <thead className="bg-slate-50 text-primary font-bold border-b">
                    <tr>
                      <th className="px-4 py-3.5 w-1/4">Statutory Act</th>
                      <th className="px-4 py-3.5 w-1/3">Mandate</th>
                      <th className="px-4 py-3.5">Insurance Implication</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bg-white">
                    {complianceMap.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-4 py-3.5 font-bold text-primary align-top">{row.act}</td>
                        <td className="px-4 py-3.5 align-top leading-relaxed text-slate-600">{row.mandate}</td>
                        <td className="px-4 py-3.5 align-top leading-relaxed text-slate-700 font-medium">{row.implication}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* Call to action */}
        <div className="p-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-primary font-serif">Want to evaluate your compliance levels?</h4>
            <p className="text-xs text-muted-foreground">Get a free 30-minute diagnostic session with our senior compliance officers.</p>
          </div>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm w-full h-12 px-6 flex items-center justify-center gap-2">
              Start Compliance Audit <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

      </div>

    </TwoPanelLayout>
  );
}
