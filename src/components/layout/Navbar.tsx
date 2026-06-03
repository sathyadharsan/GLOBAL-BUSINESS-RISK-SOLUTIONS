"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { OfferingsCategoryMenu } from "@/components/layout/OfferingsCategoryMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex flex-col items-center text-center">
            <span className="text-xl font-bold tracking-tight text-primary leading-tight">
              TRUSTFLOW
            </span>
            <span className="text-xs font-normal text-muted-foreground mt-1">
              Business Risk Architecture Platform
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6 bg-white">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-2 mb-5">
                      <Link href="/#hero" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Hero / Value Proposition</span>
                      </Link>
                      <Link href="/#metrics" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Key Metrics Strip</span>
                      </Link>
                      <Link href="/#offerings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Featured Offerings</span>
                      </Link>
                      <Link href="/#trust" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Trust & Social Proof</span>
                      </Link>
                      <Link href="/#industries" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Industry Quick Links</span>
                      </Link>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                        Go to Homepage →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6 bg-white">
                    <div className="grid grid-cols-4 gap-x-12 gap-y-2 mb-5">
                      <Link href="/industries/technology-digital" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Technology</span>
                      </Link>
                      <Link href="/industries/financial-services" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Financial Services</span>
                      </Link>
                      <Link href="/industries/healthcare-life-sciences" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Healthcare</span>
                      </Link>
                      <Link href="/industries/manufacturing-industrial" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Manufacturing</span>
                      </Link>
                      <Link href="/industries/energy-utilities" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Energy</span>
                      </Link>
                      <Link href="/industries/infrastructure-real-estate" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Real Estate</span>
                      </Link>
                      <Link href="/industries/transportation-logistics" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Transportation</span>
                      </Link>
                      <Link href="/industries/retail-hospitality" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Retail</span>
                      </Link>
                      <Link href="/industries/agriculture-environment" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Agriculture</span>
                      </Link>
                      <Link href="/industries/government-public-sector" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Government</span>
                      </Link>
                      <Link href="/industries/education-nonprofit" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Education</span>
                      </Link>
                      <Link href="/industries/emerging-industries" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Emerging Industries</span>
                      </Link>
                      <Link href="/industries" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">View All Industries →</span>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Risks</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6 bg-white">
                    <div className="grid grid-cols-4 gap-x-12 gap-y-2 mb-5">
                      <Link href="/risks/cross-industry" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Cross-Industry Risks</span>
                      </Link>
                      <Link href="/risks/cross-functional" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Cross-Functional Risks</span>
                      </Link>
                      <Link href="/risks/industry-specific" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Industry-Specific Risks</span>
                      </Link>
                      <Link href="/risks/emerging" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Emerging Risks</span>
                      </Link>
                      <Link href="/risks/risk-intelligence-center" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Risk Intelligence Center</span>
                      </Link>
                      <Link href="/risks" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">View All Risks →</span>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <OfferingsCategoryMenu />

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6 bg-white">
                    <div className="grid grid-cols-4 gap-x-12 gap-y-2 mb-5">
                      <Link href="/solutions/global-program-architecture" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Global Program Architecture</span>
                      </Link>
                      <Link href="/solutions/captive-insurance" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Captive Insurance & ART</span>
                      </Link>
                      <Link href="/solutions/risk-engineering" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Risk Engineering & Loss Prevention</span>
                      </Link>
                      <Link href="/solutions/long-tenor-infrastructure" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Long-Tenor Infrastructure</span>
                      </Link>
                      <Link href="/solutions/tcor-analytics" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">TCOR Analytics & Benchmarking</span>
                      </Link>
                      <Link href="/solutions/claims-advocacy" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Claims Advocacy</span>
                      </Link>
                      <Link href="/solutions/featured-solutions" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Enterprise Programs</span>
                      </Link>
                      <Link href="/solutions" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">View All Solutions →</span>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Outcomes</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6 bg-white">
                    <div className="grid grid-cols-4 gap-x-12 gap-y-2 mb-5">
                      <Link href="/outcomes/unicorn-ipo" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Unicorn IPO — D&O</span>
                      </Link>
                      <Link href="/outcomes/pe-fund-exit" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">PE Fund Exit — W&I</span>
                      </Link>
                      <Link href="/outcomes/it-ransomware" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">IT Ransomware Attack</span>
                      </Link>
                      <Link href="/outcomes/factory-fire" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Factory Fire — BI + Rebuild</span>
                      </Link>
                      <Link href="/outcomes/solar-park" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">500 MW Solar Park</span>
                      </Link>
                      <Link href="/outcomes/nhai-highway" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">NHAI Highway Concession</span>
                      </Link>
                      <Link href="/outcomes/supplier-flood" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Supplier Flood — CBI</span>
                      </Link>
                      <Link href="/outcomes/sebi-adviser" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">SEBI Adviser PI</span>
                      </Link>
                      <Link href="/outcomes" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">View All Outcomes →</span>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6 bg-white">
                    <div className="grid grid-cols-4 gap-x-12 gap-y-2 mb-5">
                      <Link href="/platform/risk-diagnostic-engine" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5" style={{ color: "#0052CC" }} />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Risk Diagnostic Engine</span>
                      </Link>
                      <Link href="/platform/risk-dna-mapper" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5" style={{ color: "#2563EB" }} />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Risk DNA Mapper</span>
                      </Link>
                      <Link href="/platform/cyber-intelligence" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5" style={{ color: "#DC2626" }} />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Cyber Intelligence</span>
                      </Link>
                      <Link href="/platform/counterparty-assessment" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5" style={{ color: "#059669" }} />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Counterparty Analytics</span>
                      </Link>
                      <Link href="/platform/contract-intelligence" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5" style={{ color: "#7C3AED" }} />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Contract Intelligence</span>
                      </Link>
                      <Link href="/platform/regulatory-intelligence" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5" style={{ color: "#7C3AED" }} />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Regulatory Intelligence</span>
                      </Link>
                      <Link href="/platform/risk-intelligence-aggregator" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5" style={{ color: "#059669" }} />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Risk Aggregator</span>
                      </Link>
                      <Link href="/platform/supply-chain-monitor" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5" style={{ color: "#F59E0B" }} />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Supply Chain Monitor</span>
                      </Link>
                      <Link href="/platform/climate-scenario" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5" style={{ color: "#F59E0B" }} />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Climate Analytics</span>
                      </Link>
                      <Link href="/platform/political-monitor" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5" style={{ color: "#0D9488" }} />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Political Risk Monitor</span>
                      </Link>
                      <Link href="/platform/ma-due-diligence" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5" style={{ color: "#059669" }} />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">M&A Due Diligence</span>
                      </Link>
                      <Link href="/platform" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">View All Platforms →</span>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6 bg-white">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-2 mb-5">
                      <Link href="/about-us/our-story" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Company Overview</span>
                      </Link>
                      <Link href="/about-us/leadership" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Leadership</span>
                      </Link>
                      <Link href="/contact" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                        <ChevronRight className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Contact Us</span>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Button className="bg-primary text-white hover:bg-primary/90">
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-90">Call Us For</div>
                <div className="text-xs font-bold">Free Consultation</div>
              </div>
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="flex flex-col gap-6 pt-10 pb-8">
                <div>
                  <Link href="/" className="flex flex-col items-center text-center mb-4">
                    <span className="text-xl font-bold tracking-tight text-primary leading-tight">
                      TRUSTFLOW
                    </span>
                    <span className="text-xs font-normal text-muted-foreground mt-1">
                      Business Risk Architecture Platform
                    </span>
                  </Link>
                </div>
                <div>
                  <Link href="/industries" className="text-lg font-semibold text-primary">Industries</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/industries/technology-digital" className="hover:text-primary transition-colors">Technology & Digital</Link>
                    <Link href="/industries/manufacturing-industrial" className="hover:text-primary transition-colors">Manufacturing & Industrial</Link>
                    <Link href="/industries/energy-utilities" className="hover:text-primary transition-colors">Energy & Utilities</Link>
                    <Link href="/industries/financial-services" className="hover:text-primary transition-colors">Financial Services</Link>
                    <Link href="/industries/infrastructure-real-estate" className="hover:text-primary transition-colors">Infrastructure & Real Estate</Link>
                    <Link href="/industries/transportation-logistics" className="hover:text-primary transition-colors">Transportation & Logistics</Link>
                    <Link href="/industries/agriculture-environment" className="hover:text-primary transition-colors">Agriculture & Environment</Link>
                    <Link href="/industries/healthcare-life-sciences" className="hover:text-primary transition-colors">Healthcare & Life Sciences</Link>
                    <Link href="/industries/retail-hospitality" className="hover:text-primary transition-colors">Retail & Hospitality</Link>
                    <Link href="/industries/government-public-sector" className="hover:text-primary transition-colors">Government & Public Sector</Link>
                    <Link href="/industries/education-nonprofit" className="hover:text-primary transition-colors">Education & Non-Profit</Link>
                    <Link href="/industries/emerging-industries" className="hover:text-primary transition-colors">Emerging Industries</Link>
                  </div>
                </div>
                <div>
                  <Link href="/risks" className="text-lg font-semibold text-primary">Risks</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/risks/cross-industry" className="hover:text-primary transition-colors">Cross-Industry Risks</Link>
                    <Link href="/risks/cross-functional" className="hover:text-primary transition-colors">Cross-Functional Risks</Link>
                    <Link href="/risks/industry-specific" className="hover:text-primary transition-colors">Industry-Specific Risks</Link>
                    <Link href="/risks/emerging" className="hover:text-primary transition-colors">Emerging Risks</Link>
                    <Link href="/risks/risk-intelligence-center" className="hover:text-primary transition-colors">Risk Intelligence Center</Link>
                  </div>
                </div>
                <div>
                  <Link href="/offerings" className="text-lg font-semibold text-primary">Offerings</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/offerings/category/insurance-solutions" className="hover:text-primary transition-colors">Insurance Solutions</Link>
                    <Link href="/offerings/category/cyber-digital-risk" className="hover:text-primary transition-colors">Cyber & Digital Risk</Link>
                    <Link href="/offerings/category/warranty-guarantee" className="hover:text-primary transition-colors">Warranty & Guarantee</Link>
                    <Link href="/offerings/category/alternative-risk-transfer" className="hover:text-primary transition-colors">Alternative Risk Transfer</Link>
                    <Link href="/offerings/category/ai-contract-analytics" className="hover:text-primary transition-colors">AI Contract & Analytics</Link>
                    <Link href="/offerings/category/industry-programs" className="hover:text-primary transition-colors">Industry Programs</Link>
                    <Link href="/offerings/category/advisory-consulting" className="hover:text-primary transition-colors">Advisory & Consulting</Link>
                  </div>
                </div>
                <div>
                  <Link href="/solutions" className="text-lg font-semibold text-primary">Solutions</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/solutions/global-program-architecture" className="hover:text-primary transition-colors">Global Program Architecture</Link>
                    <Link href="/solutions/captive-insurance" className="hover:text-primary transition-colors">Captive Insurance & ART</Link>
                    <Link href="/solutions/long-tenor-infrastructure" className="hover:text-primary transition-colors">Long-Tenor Infrastructure Programs</Link>
                    <Link href="/solutions/tcor-analytics" className="hover:text-primary transition-colors">TCOR Analytics & Benchmarking</Link>
                    <Link href="/solutions/claims-advocacy" className="hover:text-primary transition-colors">Claims Advocacy</Link>
                    <Link href="/solutions/risk-engineering" className="hover:text-primary transition-colors">Risk Engineering & Loss Prevention</Link>
                  </div>
                </div>
                <div>
                  <Link href="/outcomes" className="text-lg font-semibold text-primary">Outcomes</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/outcomes/unicorn-ipo" className="hover:text-primary transition-colors">Unicorn IPO — D&O</Link>
                    <Link href="/outcomes/pe-fund-exit" className="hover:text-primary transition-colors">PE Fund Exit — W&I</Link>
                    <Link href="/outcomes/it-ransomware" className="hover:text-primary transition-colors">IT Ransomware Attack</Link>
                    <Link href="/outcomes/factory-fire" className="hover:text-primary transition-colors">Factory Fire — BI + Rebuild</Link>
                    <Link href="/outcomes/solar-park" className="hover:text-primary transition-colors">500 MW Solar Park</Link>
                    <Link href="/outcomes/nhai-highway" className="hover:text-primary transition-colors">NHAI Highway Concession</Link>
                    <Link href="/outcomes/supplier-flood" className="hover:text-primary transition-colors">Supplier Flood — CBI</Link>
                    <Link href="/outcomes/sebi-adviser" className="hover:text-primary transition-colors">SEBI Adviser PI</Link>
                  </div>
                </div>
                <div>
                  <Link href="/platform" className="text-lg font-semibold text-primary">Platform</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/platform/risk-diagnostic-engine" className="hover:text-primary transition-colors">Risk Diagnostic Engine</Link>
                    <Link href="/platform/risk-dna-mapper" className="hover:text-primary transition-colors">Risk DNA Mapper</Link>
                    <Link href="/platform/cyber-intelligence" className="hover:text-primary transition-colors">Cyber Threat Intelligence</Link>
                    <Link href="/platform/contract-intelligence" className="hover:text-primary transition-colors">Contract Intelligence</Link>
                    <Link href="/platform/ma-due-diligence" className="hover:text-primary transition-colors">M&A Due Diligence Suite</Link>
                    <Link href="/platform/supply-chain-monitor" className="hover:text-primary transition-colors">Supply Chain Risk Monitor</Link>
                    <Link href="/platform/political-monitor" className="hover:text-primary transition-colors">Political Risk Monitor</Link>
                    <Link href="/platform/regulatory-intelligence" className="hover:text-primary transition-colors">Regulatory Intelligence</Link>
                    <Link href="/platform/climate-scenario" className="hover:text-primary transition-colors">Climate Scenario Analysis</Link>
                    <Link href="/platform/risk-intelligence-aggregator" className="hover:text-primary transition-colors">Risk Intelligence Aggregator</Link>
                    <Link href="/platform/api-integrations" className="hover:text-primary transition-colors">API Integrations</Link>
                  </div>
                </div>
                <div>
                  <Link href="/about-us" className="text-lg font-semibold text-primary">About Us</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/about-us/our-story" className="hover:text-primary transition-colors">Company Overview</Link>
                    <Link href="/about-us/leadership" className="hover:text-primary transition-colors">Leadership</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                  <Link href="/contact">
                    <Button className="w-full justify-start">
                      <div className="text-left leading-tight">
                        <div className="text-[10px] opacity-90">Call Us For</div>
                        <div className="text-xs font-bold">Free Consultation</div>
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
