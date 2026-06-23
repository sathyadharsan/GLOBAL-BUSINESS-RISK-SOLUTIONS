"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { TwoPanelLayout, SidebarGroup } from "@/components/layout/TwoPanelLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import {
  FileText, ShieldAlert, Globe, Phone, MapPin,
  ArrowRight, Shield, Target, LayoutGrid, CheckCircle2, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { officeLocations } from "@/data/siteContent";

// Build office lookup from centralized data
const offices = Object.fromEntries(
  officeLocations.map(office => [
    office.id,
    { name: office.name, address: office.address, email: office.email || "connect@trustflow.in", phone: office.phone }
  ])
);

const groups: SidebarGroup[] = [
  {
    label: "CONNECT WITH US",
    items: [
      { id: "diagnostic-form", label: "Risk Diagnostic Form", icon: FileText },
      { id: "hotline", label: "Direct Contact", icon: Phone },
      { id: "locations", label: "Office Locations", icon: Globe }
    ]
  },
  {
    label: "GLOBAL PRESENCE",
    items: officeLocations.map(office => ({
      id: office.id,
      label: office.name,
      icon: MapPin
    }))
  }
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const isSubmitted = searchParams.get("submitted") === "true";

  return (
    <div className="space-y-6">
      {isSubmitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-medium text-sm">
          ✓ Your consultation request has been received. A senior risk architect will contact you within 24 hours.
        </div>
      )}

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="_next" value="/contact?submitted=true" />
        <input type="hidden" name="_subject" value="New Risk Consultation Request — TRUSTFLOW" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-primary">First Name</label>
            <input name="firstName" type="text" required className="w-full p-2.5 text-sm border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-primary">Last Name</label>
            <input name="lastName" type="text" required className="w-full p-2.5 text-sm border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-primary">Corporate Email</label>
            <input name="email" type="email" required className="w-full p-2.5 text-sm border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-primary">Company / Organization</label>
            <input name="company" type="text" required className="w-full p-2.5 text-sm border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-primary">Annual Revenue</label>
            <select defaultValue="" name="revenue" className="w-full p-2.5 text-sm border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
              <option value="" disabled>Select Revenue</option>
              <option value="Under 10Cr">Under ₹10Cr</option>
              <option value="10-200Cr">₹10–200Cr</option>
              <option value="200-2000Cr">₹200–2,000Cr</option>
              <option value="2000Cr+">₹2,000Cr+</option>
              <option value="Listed">Listed/MNC</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-primary">Primary Risk Concern</label>
            <select
              defaultValue=""
              name="riskConcern"
              className="w-full p-2.5 text-sm border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="" disabled>
                Select Risk Concern
              </option>
              <option value="Property & BI">Property &amp; BI</option>
              <option value="Liability Suite">Liability Suite</option>
              <option value="Cyber Incident">Cyber Incident</option>
              <option value="D&O & Governance">D&amp;O &amp; Governance</option>
              <option value="Trade & Political Risk">Trade &amp; Political Risk</option>
              <option value="Environmental">Environmental</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-primary">Message / Inquiry Details</label>
          <textarea name="message" rows={4} className="w-full p-2.5 text-sm border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"></textarea>
        </div>

        <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 h-11 text-sm font-semibold">
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
  const isOffice = officeLocations.some(o => o.id === activeTab);

  return (
    <TwoPanelLayout
      groups={groups}
      activeId={activeTab}
      onItemSelect={(id) => setActiveTab(id)}
      heroTitle="Risk Advisory Contact"
      heroSubtitle="Speak with our risk, insurance, cyber, ESG, resilience, and governance specialists to discuss your business priorities, emerging risks, and strategic resilience objectives."
      heroBadges={["Enterprise Risk Advisory", "Cyber & Digital Resilience", "Insurance & Risk Intelligence"]}
    >

      {/* 1. Header */}
      <div className="mb-6 pb-3 border-b flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary font-serif">
            {isForm && "Risk Diagnostic"}
            {isHotline && "Risk Advisory Contact"}
            {isLocations && "Global Operations Network"}
            {isOffice && offices[activeTab as keyof typeof offices]?.name}
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
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
                <h3 className="text-sm font-bold text-primary truncate leading-tight">
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
              {isHotline && "Enterprise Advisory"}
              {isLocations && "Office Locations"}
              {isOffice && "Office Details"}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif leading-tight">
              {isForm && "Quantify Your Total Cost of Risk (TCOR)"}
              {isHotline && "Risk Advisory Contact"}
              {isLocations && "Our International Offices"}
              {isOffice && offices[activeTab as keyof typeof offices]?.name}
            </h2>
            <p className="text-base text-gray-300">
              {isForm && "Submit corporate details for a candidate audit assessment."}
              {isHotline && "Strategic guidance for Enterprise Risk Management, Governance, and Operational Resilience."}
              {isLocations && "Serving clients across India, Singapore, and US."}
              {isOffice && "Contact details for direct office communication."}
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
                <h4 className="text-base font-bold text-primary flex items-center gap-2 border-b pb-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  What is included in the Diagnostic?
                </h4>
                <ul className="space-y-3.5 text-sm text-muted-foreground">
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
              <p className="text-base text-slate-600 leading-relaxed">
                When navigating complex regulatory landscapes, cyber threats, or systemic vulnerabilities, expert guidance is critical. TRUSTFLOW provides direct access to senior risk architects, ESG specialists, and business continuity advisors.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border shadow-none bg-red-50/50 border-red-100 p-6">
                  <div className="flex items-center gap-2 text-red-700 font-bold mb-3">
                    <ShieldAlert className="w-5 h-5" />
                    <h4>Risk Advisory Desk</h4>
                  </div>
                  <p className="text-sm text-red-900/80 leading-relaxed mb-4">
                    For immediate consultation on Insurance Advisory, Cyber Risk mitigation, and Business Continuity planning.
                  </p>
                  <div className="text-lg font-bold text-red-700 font-mono">+1 (800) 555-LOSS</div>
                </Card>

                <Card className="border shadow-none bg-blue-50/50 border-blue-100 p-6">
                  <div className="flex items-center gap-2 text-blue-700 font-bold mb-3">
                    <Phone className="w-5 h-5" />
                    <h4>Business Advisory Enquiries</h4>
                  </div>
                  <p className="text-sm text-blue-900/80 leading-relaxed mb-4">
                    For Governance, Risk & Compliance (GRC) assessments, enterprise partnerships, and general consulting inquiries.
                  </p>
                  <div className="text-lg font-bold text-blue-700 font-mono">connect@trustflow.in</div>
                </Card>
              </div>
            </div>
          )}

          {/* C. Office Locations - All Offices */}
          {isLocations && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(offices).map(([id, office]) => (
                <div key={id} className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-3 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveTab(id)}>
                  <h4 className="font-bold text-primary text-base flex items-center gap-2 border-b pb-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    {office.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {office.address}
                  </p>
                  <div className="text-sm space-y-1 pt-2">
                    <p className="font-medium">{office.email}</p>
                    <p className="font-semibold text-blue-600">{office.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* D. Individual Office Detail */}
          {isOffice && offices[activeTab as keyof typeof offices] && (
            <div className="max-w-2xl space-y-6">
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-4">
                <h4 className="font-bold text-primary text-base flex items-center gap-2 border-b pb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {offices[activeTab as keyof typeof offices].name}
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {offices[activeTab as keyof typeof offices].address}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase">Email</p>
                    <p className="text-base font-medium text-blue-600">{offices[activeTab as keyof typeof offices].email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase">Phone</p>
                    <p className="text-base font-medium text-blue-600">{offices[activeTab as keyof typeof offices].phone}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setActiveTab("locations")} className="text-sm">
                  View All Offices
                </Button>
                <Link href="/contact#diagnostic-form" className="w-full sm:w-auto">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm w-full" onClick={() => setActiveTab("diagnostic-form")}>
                    Request Consultation
                  </Button>
                </Link>
              </div>
            </div>
          )}

        </div>

      </div>

    </TwoPanelLayout>
  );
}
