"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  MapPin, Phone, Mail, Shield, CheckCircle2, AlertTriangle,
  ArrowRight, Clock, Globe, Zap, ChevronRight
} from "lucide-react";

const INDUSTRIES = [
  "Technology & SaaS", "Fintech & Digital Payments", "AI & Machine Learning",
  "Data Centers & Cloud", "Cybersecurity", "Telecommunications",
  "Space & Satellite", "Banking & Finance", "Insurance & Reinsurance",
  "Private Equity & VC", "Asset Management", "Crypto & Blockchain",
  "Healthcare Providers", "Pharmaceuticals", "Biotechnology",
  "Medical Devices", "Manufacturing & Industrial", "EV & Clean Mobility",
  "Electronics & Semiconductors", "Chemicals & Materials", "Consumer Goods",
  "Oil & Gas", "Renewables & Clean Energy", "Mining & Metals",
  "Utilities & Power", "Real Estate", "Construction & Engineering",
  "Infrastructure & PPP", "Maritime & Shipping", "Aviation & Airlines",
  "Logistics & Freight", "Retail & E-commerce", "Hospitality & Tourism",
  "Food & Beverage", "Agriculture & AgriTech", "Government & Public Sector",
  "Education & EdTech", "Non-profit & NGO", "Cannabis & Hemp",
  "Autonomous Vehicles & Robotics", "Climate Tech & Carbon"
];

const RISK_CONCERNS = [
  "Property & Business Interruption", "Cyber & Digital Risk",
  "Management Liability (D&O)", "Trade Credit & Political Risk",
  "Professional Liability & E&O", "Marine, Aviation & Transport",
  "Construction & Engineering", "Environmental Liability",
  "Crime & Fidelity", "Terrorism & Political Violence",
  "Crypto & Digital Assets", "Space & Satellite Risk",
  "AI & Algorithm Liability", "Drone / UAV Operations",
  "Alternative Risk Transfer", "Contract Risk Analytics",
  "Multi-Line / Cross-Border", "Other / Not Sure"
];

const OFFICES = [
  {
    city: "London",
    label: "EMEA HQ",
    address: "12 Leadenhall Street\nLondon EC3V 1LP\nUnited Kingdom",
    phone: "+44 20 7946 0958",
    email: "london@trustflow.io"
  },
  {
    city: "Mumbai",
    label: "India & APAC",
    address: "Nariman Point Tower, Floor 24\nMumbai 400 021\nIndia",
    phone: "+91 22 6900 4400",
    email: "india@trustflow.io"
  },
  {
    city: "Singapore",
    label: "South East Asia",
    address: "MBFC Tower 3, #18-02\n8 Marina Boulevard\nSingapore 018981",
    phone: "+65 6702 1890",
    email: "singapore@trustflow.io"
  },
  {
    city: "New York",
    label: "Americas",
    address: "100 Wall Street, Suite 2500\nNew York, NY 10005\nUnited States",
    phone: "+1 (212) 555-0198",
    email: "americas@trustflow.io"
  }
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "hotline" | "offices">("form");

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200">

      {/* Hero */}
      <div className="w-full bg-neutral-900 border-b border-neutral-800 relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,163,23,0.06),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest bg-accent-500/10 border border-accent-500/25 px-2.5 py-1 rounded-full">
                Connect
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold font-sans text-white leading-tight">
                Speak with a<br />
                <span className="text-accent-500">Risk Architect</span>
              </h1>
              <p className="text-sm text-neutral-400 max-w-lg leading-relaxed font-serif">
                Get a free 30-minute diagnostic session with a senior underwriter to evaluate your current coverage, identify critical gaps, and quantify your Total Cost of Risk.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "24hr", label: "Response SLA", icon: Clock },
                { val: "150+", label: "Countries Covered", icon: Globe },
                { val: "A++", label: "Carrier Network", icon: Shield },
                { val: "Free", label: "Initial Diagnostic", icon: Zap }
              ].map((s, i) => (
                <div key={i} className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-center space-y-1">
                  <s.icon className="w-4 h-4 text-accent-500 mx-auto" />
                  <div className="text-xl font-bold text-white font-mono">{s.val}</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider font-sans">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="border-b border-neutral-800 bg-neutral-900/50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex gap-0">
            {([
              { id: "form", label: "Risk Assessment Form" },
              { id: "hotline", label: "Emergency Hotline" },
              { id: "offices", label: "Global Offices" }
            ] as const).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-4 text-xs font-bold font-sans uppercase tracking-wider transition-all border-b-2 ${
                  activeTab === tab.id
                    ? "text-accent-500 border-accent-500"
                    : "text-neutral-500 border-transparent hover:text-neutral-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl space-y-0">

        {/* TAB 1: Form */}
        {activeTab === "form" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-neutral-800">
                  <h2 className="text-base font-bold text-white font-sans">Risk Architecture Consultation Request</h2>
                  <p className="text-[11px] text-neutral-400 mt-1 font-serif">Fill in your details and a dedicated Risk Architect will reach out within 24 hours.</p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-cyber-500/10 border border-cyber-500/20 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7 text-cyber-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-sans">Request Received</h3>
                    <p className="text-xs text-neutral-400 max-w-sm mx-auto font-serif leading-relaxed">
                      A senior TRUSTFLOW Risk Architect will contact you within 24 hours to schedule your diagnostic session.
                    </p>
                    <Link href="/tools/risk-diagnostic">
                      <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-10 px-6 mt-2">
                        Take AI Risk Assessment Now <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="p-6 space-y-5"
                  >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { name: "firstName", label: "First Name", type: "text", required: true },
                        { name: "lastName", label: "Last Name", type: "text", required: true }
                      ].map((f) => (
                        <div key={f.name} className="space-y-1.5">
                          <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-sans">{f.label} *</label>
                          <input
                            name={f.name}
                            type={f.type}
                            required={f.required}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-accent-500 focus:outline-none transition-colors font-sans"
                            placeholder={f.label}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-sans">Corporate Email *</label>
                        <input
                          name="email" type="email" required
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-accent-500 focus:outline-none transition-colors font-sans"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-sans">Company Name *</label>
                        <input
                          name="company" type="text" required
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-accent-500 focus:outline-none transition-colors font-sans"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-sans">Industry *</label>
                        <select
                          name="industry" required
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white focus:border-accent-500 focus:outline-none transition-colors font-sans"
                        >
                          <option value="">Select industry…</option>
                          {INDUSTRIES.map((ind) => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-sans">Annual Revenue</label>
                        <select
                          name="revenue"
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white focus:border-accent-500 focus:outline-none transition-colors font-sans"
                        >
                          <option value="">Select range…</option>
                          <option>Under $10M</option>
                          <option>$10M – $50M</option>
                          <option>$50M – $250M</option>
                          <option>$250M – $1B</option>
                          <option>$1B – $5B</option>
                          <option>Over $5B</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-sans">Primary Risk Concern</label>
                        <select
                          name="riskConcern"
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white focus:border-accent-500 focus:outline-none transition-colors font-sans"
                        >
                          <option value="">Select concern…</option>
                          {RISK_CONCERNS.map((r) => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-sans">Countries of Operation</label>
                        <select
                          name="countries"
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white focus:border-accent-500 focus:outline-none transition-colors font-sans"
                        >
                          <option>1 country</option>
                          <option>2 – 5 countries</option>
                          <option>6 – 15 countries</option>
                          <option>15 – 50 countries</option>
                          <option>50+ countries</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-sans">How Can We Help?</label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-accent-500 focus:outline-none transition-colors font-sans resize-none"
                        placeholder="Describe your current risk challenges, coverage gaps, or what you'd like us to review…"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-12 shadow-lg flex items-center justify-center gap-2"
                    >
                      Request Free Risk Architecture Session
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <p className="text-[10px] text-neutral-600 text-center font-sans">
                      No obligation. Your data is handled with strict confidentiality. We will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-5">
              {/* What happens next */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-bold text-white font-sans">What happens next?</h3>
                <div className="space-y-4">
                  {[
                    { step: "01", label: "24hr Response", desc: "Your dedicated Risk Architect calls within one business day." },
                    { step: "02", label: "Diagnostic Call", desc: "30-minute forensic review of your current coverage structure." },
                    { step: "03", label: "Gap Report", desc: "Receive a written TCOR gap analysis within 5 business days." },
                    { step: "04", label: "Architecture Plan", desc: "Bespoke risk program designed for your exact exposures." }
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-accent-500/10 border border-accent-500/25 text-accent-500 text-[9px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">{s.step}</span>
                      <div>
                        <p className="text-xs font-bold text-white font-sans">{s.label}</p>
                        <p className="text-[11px] text-neutral-400 font-serif leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick tool */}
              <div className="bg-gradient-to-br from-accent-500/10 to-transparent border border-accent-500/20 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent-500" />
                  <span className="text-xs font-bold text-white font-sans">Can't wait? Try our free tool</span>
                </div>
                <p className="text-[11px] text-neutral-400 font-serif leading-relaxed">
                  Get your instant AI risk score in under 5 minutes — no registration required.
                </p>
                <Link href="/tools/risk-diagnostic">
                  <Button className="w-full bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-10 flex items-center justify-center gap-1.5">
                    AI Risk Diagnostic <ChevronRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Hotline */}
        {activeTab === "hotline" && (
          <div className="max-w-4xl space-y-6">
            <div className="bg-risk-500/5 border border-risk-500/20 rounded-2xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-risk-500/10 border border-risk-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-risk-500" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white font-sans">Emergency Claims Hotline</h2>
                  <p className="text-[11px] text-neutral-400 font-sans">For immediate dispatch of risk engineers, loss adjusters, and legal advocates</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-risk-400 font-mono tracking-wider">+44 20 7946 LOSS</div>
              <p className="text-xs text-neutral-400 font-serif leading-relaxed max-w-xl">
                Available 24/7/365. When a major property fire, ransomware attack, cargo total loss, or catastrophic event occurs, the first 48 hours are critical to recovery. Our senior claims team is dispatched immediately.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Property Fire & Flood", "Cyber Ransomware", "Marine Cargo Loss", "D&O Crisis", "Environmental Spill"].map((t) => (
                  <span key={t} className="text-[10px] font-mono font-bold text-risk-400 bg-risk-500/10 border border-risk-500/15 px-2.5 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyber-400" />
                  <h3 className="text-sm font-bold text-white font-sans">General Enquiries</h3>
                </div>
                <p className="text-[11px] text-neutral-400 font-serif">For new client onboarding, broker partnerships, and billing.</p>
                <a href="mailto:solutions@trustflow.io" className="text-sm font-bold text-cyber-400 font-mono hover:text-cyber-300 transition-colors">
                  solutions@trustflow.io
                </a>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-500" />
                  <h3 className="text-sm font-bold text-white font-sans">Partnership Desk</h3>
                </div>
                <p className="text-[11px] text-neutral-400 font-serif">For carrier, insurtech, and ecosystem partnership inquiries.</p>
                <a href="mailto:partners@trustflow.io" className="text-sm font-bold text-accent-500 font-mono hover:text-accent-400 transition-colors">
                  partners@trustflow.io
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Offices */}
        {activeTab === "offices" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {OFFICES.map((o, i) => (
                <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4 hover:border-neutral-700 transition-colors group">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white font-sans">{o.city}</h3>
                      <span className="text-[10px] font-mono text-accent-500 uppercase tracking-wider">{o.label}</span>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5 text-accent-500" />
                    </div>
                  </div>
                  <p className="text-[11px] text-neutral-400 font-serif leading-relaxed whitespace-pre-line">{o.address}</p>
                  <div className="pt-3 border-t border-neutral-850 space-y-1">
                    <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 text-[11px] text-neutral-300 hover:text-white font-sans transition-colors">
                      <Phone className="w-3 h-3" /> {o.phone}
                    </a>
                    <a href={`mailto:${o.email}`} className="flex items-center gap-1.5 text-[11px] text-cyber-400 hover:text-cyber-300 font-mono transition-colors">
                      <Mail className="w-3 h-3" /> {o.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center space-y-4">
              <Globe className="w-10 h-10 text-accent-500 mx-auto" />
              <h3 className="text-lg font-bold text-white font-sans">150+ Countries Covered</h3>
              <p className="text-xs text-neutral-400 font-serif max-w-xl mx-auto leading-relaxed">
                While our primary offices are in London, Mumbai, Singapore, and New York, TRUSTFLOW places and manages risk programs in over 150 jurisdictions via our global carrier network.
              </p>
              <Link href="/risk-solutions/multi-line-cross-border">
                <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-10 px-6">
                  View Cross-Border Programs <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
