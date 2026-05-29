"use client";

import React, { useState, Suspense } from "react";
import { TwoPanelLayout, SidebarGroup } from "@/components/layout/TwoPanelLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { 
  FileText, ShieldAlert, Globe, Phone, MapPin, 
  ArrowRight, Shield, Target, LayoutGrid, CheckCircle2, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const groups: SidebarGroup[] = [
  {
    label: "CONTACT",
    items: [
      { id: "diagnostic-form", label: "Risk Diagnostic Form", icon: FileText },
      { id: "hotline", label: "Direct Contact", icon: Phone },
      { id: "locations", label: "Office Locations", icon: Globe }
    ]
  }
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const isSubmitted = searchParams.get("submitted") === "true";

  return (
    <div className="space-y-6">
      {isSubmitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-medium text-xs">
          ✓ Your consultation request has been received. A senior risk architect will contact you within 24 hours.
        </div>
      )}

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="_next" value="/contact?submitted=true" />
        <input type="hidden" name="_subject" value="New Risk Consultation Request — GBRS" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-primary">First Name</label>
            <input name="firstName" type="text" required className="w-full p-2.5 text-xs border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-primary">Last Name</label>
            <input name="lastName" type="text" required className="w-full p-2.5 text-xs border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-primary">Corporate Email</label>
            <input name="email" type="email" required className="w-full p-2.5 text-xs border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-primary">Company / Organization</label>
            <input name="company" type="text" required className="w-full p-2.5 text-xs border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-primary">Annual Revenue</label>
            <select name="revenue" className="w-full p-2.5 text-xs border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
              <option>&lt;₹10Cr</option>
              <option>₹10–200Cr</option>
              <option>₹200–2,000Cr</option>
              <option>₹2,000Cr+</option>
              <option>Listed/MNC</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-primary">Primary Risk Concern</label>
            <select name="riskConcern" className="w-full p-2.5 text-xs border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
              <option>Property &amp; BI</option>
              <option>Liability Suite</option>
              <option>Cyber Incident</option>
              <option>D&amp;O &amp; Governance</option>
              <option>Trade &amp; Political Risk</option>
              <option>Environmental</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-primary">Message / Inquiry Details</label>
          <textarea name="message" rows={4} className="w-full p-2.5 text-xs border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"></textarea>
        </div>
        
        <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 h-11 text-xs font-semibold">
          Request Free Risk Assessment
        </Button>
      </form>
    </div>
  );
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState("diagnostic-form");

  const isForm = activeTab === "diagnostic-form";
  const isHotline = activeTab === "hotline";
  const isLocations = activeTab === "locations";

  return (
    <TwoPanelLayout
      groups={groups}
      activeId={activeTab}
      onItemSelect={(id) => setActiveTab(id)}
      heroTitle="Connect with our Risk Architects"
      heroSubtitle="Get a free 30-minute diagnostic session to evaluate your current coverage structure, audit regulatory alignment, and quantify your Total Cost of Risk."
      heroBadges={["24/7 Claims Response", "Global Advisers", "Candour & Efficacy"]}
    >
      
      {/* 1. Header */}
      <div className="mb-6 pb-3 border-b flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary font-serif">
            {isForm && "Risk Diagnostic"}
            {isHotline && "Claims & Direct Hotline"}
            {isLocations && "Global Operations Network"}
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Click any section in the sidebar to switch contacts
          </p>
        </div>
      </div>

      {/* 2. SUMMARY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {groups[0].items.map((item) => {
          const isSelected = activeTab === item.id;
          const Icon = item.icon || Phone;
          return (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "p-4 bg-white rounded-lg border border-slate-200 transition-all cursor-pointer shadow-sm hover:shadow-md select-none flex flex-col justify-between border-l-[3px] border-l-blue-600 min-h-[100px]",
                isSelected ? "ring-2 ring-blue-600 ring-offset-1 shadow-md scale-[1.01]" : "hover:-translate-y-[2px]"
              )}
            >
              <div className="flex items-center gap-2">
                <Icon className={cn("h-5 w-5 shrink-0", isSelected ? "text-blue-600" : "text-slate-500")} />
                <h3 className="text-xs font-bold text-primary truncate leading-tight">
                  {item.label}
                </h3>
              </div>
              <div className="text-[10px] font-semibold text-blue-600 flex items-center gap-0.5 mt-2 pt-1.5 border-t border-slate-100">
                {isSelected ? "Expanded" : "Select View"} →
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. DETAIL EXPANSION CARD */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
        
        {/* Banner */}
        <div className="p-6 text-white bg-primary relative border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
          <div className="relative z-10 space-y-2 max-w-4xl">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-600/50 px-2 py-0.5 rounded border border-blue-500/20">
              {isForm && "Diagnostics"}
              {isHotline && "Specialist Advocacy"}
              {isLocations && "Office Locations"}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif leading-tight">
              {isForm && "Quantify Your Total Cost of Risk (TCOR)"}
              {isHotline && "24/7 Emergency Claims Hotline"}
              {isLocations && "Our International Offices"}
            </h2>
            <p className="text-sm text-gray-300">
              {isForm && "Submit corporate details for a candidate audit assessment."}
              {isHotline && "Immediate technical response for complex, high-severity claims."}
              {isLocations && "Serving clients across India, Singapore, UK, and US."}
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          
          {/* A. Diagnostic Form */}
          {isForm && (
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <Suspense fallback={<div>Loading form...</div>}>
                  <ContactFormInner />
                </Suspense>
              </div>
              <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2 border-b pb-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  What is included in the Diagnostic?
                </h4>
                <ul className="space-y-3.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>Gap Analysis:</strong> Forensic audit of current policy wordings to uncover hidden exclusions and underinsurance.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>TCOR Assessment:</strong> Calculating premiums, self-insured retentions, and uninsured losses.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>Placement Guidance:</strong> Sector benchmarking against peer limits and rate parameters.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* B. Hotline Information */}
          {isHotline && (
            <div className="max-w-4xl space-y-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                When a major property fire, marine cargo loss, or cyber ransomware incident occurs, the first 48 hours are critical. GBRS provides direct access to senior claims adjusters and legal advocates.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border shadow-none bg-red-50/50 border-red-100 p-6">
                  <div className="flex items-center gap-2 text-red-700 font-bold mb-3">
                    <ShieldAlert className="w-5 h-5" />
                    <h4>Claims Advocacy Hotline</h4>
                  </div>
                  <p className="text-xs text-red-900/80 leading-relaxed mb-4">
                    For immediate dispatch of risk engineers, adjusters, and technical lawyers.
                  </p>
                  <div className="text-lg font-bold text-red-700 font-mono">+1 (800) 555-LOSS</div>
                </Card>

                <Card className="border shadow-none bg-blue-50/50 border-blue-100 p-6">
                  <div className="flex items-center gap-2 text-blue-700 font-bold mb-3">
                    <Phone className="w-5 h-5" />
                    <h4>General Enquiries</h4>
                  </div>
                  <p className="text-xs text-blue-900/80 leading-relaxed mb-4">
                    For client onboarding, broker registration, and billing questions.
                  </p>
                  <div className="text-lg font-bold text-blue-700 font-mono">solutions@gbrs.com</div>
                </Card>
              </div>
            </div>
          )}

          {/* C. Office Locations */}
          {isLocations && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
                <h4 className="font-bold text-primary text-sm flex items-center gap-2 border-b pb-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  New York (HQ)
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  100 Wall Street, Suite 2500<br />
                  New York, NY 10005<br />
                  United States
                </p>
                <div className="text-xs font-semibold text-primary pt-2">+1 (212) 555-0198</div>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
                <h4 className="font-bold text-primary text-sm flex items-center gap-2 border-b pb-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  London
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  12 Leadenhall Street<br />
                  London EC3V 1LP<br />
                  United Kingdom
                </p>
                <div className="text-xs font-semibold text-primary pt-2">+44 20 7946 0958</div>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
                <h4 className="font-bold text-primary text-sm flex items-center gap-2 border-b pb-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  Singapore
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  MBFC Tower 3, #18-02<br />
                  8 Marina Boulevard<br />
                  Singapore 018981
                </p>
                <div className="text-xs font-semibold text-primary pt-2">+65 6702 1890</div>
              </div>
            </div>
          )}

        </div>

      </div>

    </TwoPanelLayout>
  );
}
