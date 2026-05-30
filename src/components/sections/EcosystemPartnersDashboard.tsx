"use client";

import React, { useState } from "react";
import { Building2, Globe, Shield, Award, BadgeCheck, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { ecosystemPartners, categoryLabels } from "@/data/ecosystemPartners";
import type { EcosystemPartner } from "@/data/ecosystemPartners";

export function EcosystemPartnersDashboard() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ["carrier", "insurtech", "warranty", "technology", "legal", "reinsurance", "emerging"] as const;
  
  const filteredPartners = activeCategory 
    ? ecosystemPartners.filter(p => p.category === activeCategory)
    : ecosystemPartners;

  const featuredPartners = ecosystemPartners.filter(p => p.featured);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200 font-sans">
      
      {/* Hero Banner */}
      <div className="w-full bg-neutral-900 border-b border-neutral-800 relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,212,170,0.06),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center space-y-4">
          <span className="text-[10px] font-mono text-accent-500 uppercase tracking-widest bg-accent-500/10 border border-accent-500/25 px-2.5 py-1 rounded-full">
            Solution Ecosystem
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-white">
            Ecosystem Partners
          </h1>
          <p className="text-sm md:text-base text-neutral-400 max-w-3xl mx-auto leading-relaxed font-serif">
            Connecting 80+ carrier, technology, and warranty partners into a unified risk architecture
          </p>
        </div>
      </div>

      {/* Featured Partners Strip */}
      <section className="py-12 bg-neutral-950 border-b border-neutral-850">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-accent-500" />
            <h2 className="text-lg font-bold text-white">Featured Partners</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-neutral-900 border border-neutral-850 rounded-xl p-4 hover:border-accent-500/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-accent-500" />
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-accent-500 transition-colors">
                    {partner.name}
                  </span>
                </div>
                <p className="text-[10px] text-neutral-450 line-clamp-2 font-serif">
                  {partner.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-neutral-850">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all border ${
                activeCategory === null 
                  ? "bg-accent-500 text-neutral-950 border-accent-500" 
                  : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              All Partners
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all border ${
                  activeCategory === cat 
                    ? "bg-accent-500 text-neutral-950 border-accent-500" 
                    : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white"
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner) => (
              <div key={partner.name} className="group bg-neutral-900 border border-neutral-850 rounded-xl p-5 hover:border-accent-500/30 transition-all duration-200 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-accent-500" />
                    </div>
                    <span className="text-sm font-bold text-white">{partner.name}</span>
                  </div>
                  <BadgeCheck className="w-4 h-4 text-cyber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[10px] text-neutral-500 mb-2">{partner.headquarters}</p>
                <p className="text-xs text-neutral-400 leading-relaxed font-serif flex-1">
                  {partner.description}
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-850">
                  <span className="text-[9px] font-semibold text-accent-500 uppercase tracking-wider">
                    {categoryLabels[partner.category]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-900 border-t border-neutral-850">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Become a TRUSTFLOW Ecosystem Partner
          </h2>
          <p className="text-sm text-neutral-400 font-serif max-w-2xl mx-auto">
            We continuously audit and onboard top-tier global reinsurers, domestic underwriters, and IoT technology providers to enrich our safety compliance frameworks.
          </p>
          <Link href="/contact">
            <button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs h-12 px-6 shadow inline-flex items-center">
              Apply as Partner <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}