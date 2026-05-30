"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Shield, Landmark, AlertCircle, CheckCircle2 } from "lucide-react";

interface CountryRule {
  country: string;
  authority: string;
  mandatory: string[];
  recommended: string[];
  risks: string;
}

const COUNTRY_RULES: Record<string, CountryRule> = {
  in: {
    country: "India",
    authority: "Insurance Regulatory and Development Authority of India (IRDAI)",
    mandatory: [
      "Public Liability Insurance Act (Mandatory for hazardous substances)",
      "Commercial Motor / Third-Party Fleet Liability",
      "Employees' Compensation / Workmen's Compensation Statutory"
    ],
    recommended: [
      "D&O Liability under SEBI LODR corporate governance mandates",
      "Cyber Liability under DPDP Act 2023 statutory privacy frameworks",
      "Standard Fire & Special Perils (SFSP) under banking covenants"
    ],
    risks: "Aggressive regulatory inquiries from SFIO, SEBI, and NGT pollution remediation penalties."
  },
  us: {
    country: "United States",
    authority: "State-level Insurance Commissions & NAIC guidelines",
    mandatory: [
      "Workers' Compensation (Mandatory in virtually all states)",
      "Automobile liability standard third-party fleet policies",
      "State disability insurance programs (NY, CA, NJ)"
    ],
    recommended: [
      "Securities D&O Class Action towers (Side A DIC structures)",
      "Product Liability & Recall under strict liability and FDA guidelines",
      "Tech E&O / Errors & Omissions for digital SaaS providers"
    ],
    risks: "Severe social inflation, extremely high legal defense retainers, and active class-action litigations."
  },
  gb: {
    country: "United Kingdom",
    authority: "Financial Conduct Authority (FCA) & Prudential Regulation Authority (PRA)",
    mandatory: [
      "Employers' Liability (Compulsory Act 1969 — £5M statutory minimum)",
      "Third-party commercial motor vehicle fleet coverage",
      "Professional Indemnity (PI) for lawyers, auditors, financial advisors"
    ],
    recommended: [
      "Cyber Extortion and GDPR regulatory privacy breach liability",
      "Trade Credit insurance for European supply-chain networks",
      "M&A Warranty & Indemnity (W&I) structures for corporate exits"
    ],
    risks: "Strict FCA capital adequacy regulatory enforcement and high GDPR data breach penalties."
  },
  sg: {
    country: "Singapore",
    authority: "Monetary Authority of Singapore (MAS)",
    mandatory: [
      "Work Injury Compensation Act (WICA)",
      "Compulsory third-party motor transport insurance",
      "Professional indemnity for MAS-registered asset managers"
    ],
    recommended: [
      "GIFT City and international Reinsurance captive networks",
      "Marine Hull & Cargo stock-throughput supply chain coverages",
      "Cyber Liability matching regional Personal Data Protection Act (PDPA)"
    ],
    risks: "Extremely high maritime cargo transport concentrations and active international trade regulatory checks."
  }
};

export default function ComplianceChecker() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const handleToggle = (code: string) => {
    if (selectedCountries.includes(code)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== code));
    } else {
      setSelectedCountries([...selectedCountries, code]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200">
      <div className="container mx-auto px-4 py-16 max-w-4xl flex-1 flex flex-col justify-center space-y-8">
        
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full">
            Global Database
          </span>
          <h2 className="text-2xl md:text-4xl font-bold font-sans text-white">
            Compliance & Mandates Checker
          </h2>
          <p className="text-xs text-neutral-400 font-serif">
            Select the operational jurisdictions of your enterprise to examine mandatory statutory insurances, active local authorities, and recommended structural setups.
          </p>
        </div>

        {/* Selection buttons */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl space-y-4">
          <h4 className="text-xs font-bold text-white font-sans uppercase tracking-wider">
            Select Territories
          </h4>
          <div className="flex flex-wrap gap-3">
            {Object.entries(COUNTRY_RULES).map(([code, rule]) => {
              const isSelected = selectedCountries.includes(code);
              return (
                <button
                  key={code}
                  onClick={() => handleToggle(code)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all border font-sans ${
                    isSelected
                      ? "bg-purple-500 border-purple-500 text-neutral-950 shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                      : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>{rule.country}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        {selectedCountries.length > 0 ? (
          <div className="space-y-6">
            {selectedCountries.map((code) => {
              const rule = COUNTRY_RULES[code];
              return (
                <div 
                  key={code}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl space-y-6 animate-in fade-in duration-300 border-l-4 border-l-purple-500"
                >
                  {/* Country Header */}
                  <div className="flex justify-between items-start pb-4 border-b border-neutral-850">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold font-sans text-white">
                        {rule.country} Regulatory Audit
                      </h3>
                      <p className="text-xs text-neutral-400 flex items-center gap-1.5 font-serif italic">
                        <Landmark className="w-3.5 h-3.5 text-purple-400" />
                        <span>Authority: {rule.authority}</span>
                      </p>
                    </div>
                  </div>

                  {/* Mandates list */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-white font-sans uppercase tracking-wider flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-risk-500" />
                        <span>Statutory Mandatory Insurance</span>
                      </h4>
                      <ul className="space-y-2 text-xs font-serif text-neutral-300 pl-1">
                        {rule.mandatory.map((m, idx) => (
                          <li key={idx} className="flex items-start gap-2 bg-neutral-950 p-2.5 rounded border border-neutral-850">
                            <span className="w-1.5 h-1.5 rounded-full bg-risk-500 mt-1.5 shrink-0" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-white font-sans uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyber-500" />
                        <span>Recommended TRUSTFLOW Overlays</span>
                      </h4>
                      <ul className="space-y-2 text-xs font-serif text-neutral-300 pl-1">
                        {rule.recommended.map((r, idx) => (
                          <li key={idx} className="flex items-start gap-2 bg-neutral-950 p-2.5 rounded border border-neutral-850">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-500 mt-1.5 shrink-0" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Risks */}
                  <div className="p-4 bg-neutral-950 border border-neutral-850 rounded-xl space-y-1.5">
                    <h5 className="text-xs font-bold text-white font-sans uppercase tracking-wider flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-accent-500" />
                      <span>Primary Legal & Financial Risks</span>
                    </h5>
                    <p className="text-xs text-neutral-400 font-serif leading-relaxed">
                      {rule.risks}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center text-xs text-neutral-500 border border-neutral-800 bg-neutral-900/30 rounded-2xl font-serif">
            Select one or more territories above to load local compliance rules.
          </div>
        )}

      </div>
    </div>
  );
}
