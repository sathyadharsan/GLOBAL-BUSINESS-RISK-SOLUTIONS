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
                       {/* Column 1 */}
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
                       {/* Column 2 */}
                       <Link href="/#trust" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                         <ChevronRight className="h-5 w-5 text-blue-600" />
                         <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Trust & Social Proof</span>
                       </Link>
                       <Link href="/#industries" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                         <ChevronRight className="h-5 w-5 text-blue-600" />
                         <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Industry Quick Links</span>
                       </Link>
                       <Link href="/#diagnostic" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                         <ChevronRight className="h-5 w-5 text-blue-600" />
                         <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Risk Diagnostic CTA</span>
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
                  <NavigationMenuTrigger>Risks</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6 bg-white">
                      <div className="grid grid-cols-4 gap-x-12 gap-y-2 mb-5">
                        {/* Column 1 */}
                        <Link href="/risks/cross-industry" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Cross-Industry Risks</span>
                        </Link>
                        <Link href="/risks/cross-functional" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Cross-Functional Risks</span>
                        </Link>
                        
                        {/* Column 2 */}
                        <Link href="/risks/industry-specific" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Industry-Specific Risks</span>
                        </Link>
                        <Link href="/risks/emerging" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Emerging Risks</span>
                        </Link>
                        
                        {/* Column 3 */}
                        <Link href="/risks/risk-intelligence-center" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Risk Intelligence Center</span>
                        </Link>
                        <Link href="/risks/risk-diagnostic" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Risk Diagnostic</span>
                        </Link>
                        
                        {/* Column 4 */}
                        <Link href="/risks" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">View All Risks →</span>
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
                        {/* Column 1 */}
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
                        
                        {/* Column 2 */}
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
                        
                        {/* Column 3 */}
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
                        
                        {/* Column 4 */}
                        <Link href="/platform" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">View All Platforms →</span>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

               <OfferingsCategoryMenu />

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6 bg-white">
                      <div className="grid grid-cols-4 gap-x-12 gap-y-2 mb-5">
                        {/* Column 1 */}
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
                        
                        {/* Column 2 */}
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
                        
                        {/* Column 3 */}
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
                        
                        {/* Column 4 */}
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
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6 bg-white">
                      <div className="grid grid-cols-4 gap-x-12 gap-y-2 mb-5">
                        {/* Column 1 */}
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
                        
                        {/* Column 2 */}
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
                        
                        {/* Column 3 */}
                        <Link href="/solutions/featured-solutions" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Enterprise Programs</span>
                        </Link>
                        
                        {/* Column 4 */}
                        <Link href="/solutions" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">View All Solutions →</span>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6 bg-white">
                      <div className="grid grid-cols-4 gap-x-12 gap-y-2 mb-5">
                        {/* Column 1 */}
                        <Link href="/use-cases/unicorn-ipo" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Unicorn IPO — D&O</span>
                        </Link>
                        <Link href="/use-cases/pe-fund-exit" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">PE Fund Exit — W&I</span>
                        </Link>
                        
                        {/* Column 2 */}
                        <Link href="/use-cases/it-ransomware" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">IT Ransomware Attack</span>
                        </Link>
                        <Link href="/use-cases/factory-fire" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Factory Fire — BI + Rebuild</span>
                        </Link>
                        
                        {/* Column 3 */}
                        <Link href="/use-cases/solar-park" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">500 MW Solar Park</span>
                        </Link>
                        <Link href="/use-cases/nhai-highway" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">NHAI Highway Concession</span>
                        </Link>
                        
                        {/* Column 4 */}
                        <Link href="/use-cases/supplier-flood" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Supplier Flood — CBI</span>
                        </Link>
                        <Link href="/use-cases/sebi-adviser" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">SEBI Adviser PI</span>
                        </Link>
                        <Link href="/use-cases" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">View All Use Cases →</span>
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
                       {/* Column 1 */}
                       <Link href="/about-us/our-story" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                         <ChevronRight className="h-5 w-5 text-blue-600" />
                         <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Our Story & Mission</span>
                       </Link>
                       <Link href="/about-us/leadership" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                         <ChevronRight className="h-5 w-5 text-blue-600" />
                         <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Leadership & Team</span>
                       </Link>
                       <Link href="/about-us/credentials" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                         <ChevronRight className="h-5 w-5 text-blue-600" />
                         <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Credentials & Regulatory</span>
                       </Link>
                       <Link href="/about-us/markets" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                         <ChevronRight className="h-5 w-5 text-blue-600" />
                         <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Markets & Carrier Relationships</span>
                       </Link>
                       {/* Column 2 */}
                       <Link href="/about-us/esg" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                         <ChevronRight className="h-5 w-5 text-blue-600" />
                         <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">ESG & Sustainability</span>
                       </Link>
                       <Link href="/insights" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                         <ChevronRight className="h-5 w-5 text-blue-600" />
                         <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Insights & Thought Leadership</span>
                       </Link>
                       <Link href="/about-us/careers" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                         <ChevronRight className="h-5 w-5 text-blue-600" />
                         <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">Careers</span>
                       </Link>
                     </div>
                     <div className="pt-4 border-t border-slate-200">
                       <Link href="/contact" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                         Contact & Consultation →
                       </Link>
                     </div>
                   </div>
                 </NavigationMenuContent>
               </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
            Risk Diagnostic
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Book Consultation
          </Button>
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
                  <Link href="/risks" className="text-lg font-semibold text-primary">Risks</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/risks/cross-industry" className="hover:text-primary transition-colors">Cross-Industry Risks</Link>
                    <Link href="/risks/cross-functional" className="hover:text-primary transition-colors">Cross-Functional Risks</Link>
                    <Link href="/risks/industry-specific" className="hover:text-primary transition-colors">Industry-Specific Risks</Link>
                    <Link href="/risks/emerging" className="hover:text-primary transition-colors">Emerging Risks</Link>
                    <Link href="/risks/risk-intelligence-center" className="hover:text-primary transition-colors">Risk Intelligence Center</Link>
                    <Link href="/risks/risk-diagnostic" className="hover:text-primary transition-colors">Risk Diagnostic</Link>
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
                  </div>
                </div>
                <Link href="/offerings" className="text-lg font-medium">Offerings</Link>
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
                  <Link href="/use-cases" className="text-lg font-semibold text-primary">Use Cases</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/use-cases/unicorn-ipo" className="hover:text-primary transition-colors">Unicorn IPO — D&O</Link>
                    <Link href="/use-cases/pe-fund-exit" className="hover:text-primary transition-colors">PE Fund Exit — W&I</Link>
                    <Link href="/use-cases/it-ransomware" className="hover:text-primary transition-colors">IT Ransomware Attack</Link>
                    <Link href="/use-cases/factory-fire" className="hover:text-primary transition-colors">Factory Fire — BI + Rebuild</Link>
                    <Link href="/use-cases/solar-park" className="hover:text-primary transition-colors">500 MW Solar Park</Link>
                    <Link href="/use-cases/nhai-highway" className="hover:text-primary transition-colors">NHAI Highway Concession</Link>
                    <Link href="/use-cases/supplier-flood" className="hover:text-primary transition-colors">Supplier Flood — CBI</Link>
                    <Link href="/use-cases/sebi-adviser" className="hover:text-primary transition-colors">SEBI Adviser PI</Link>
                  </div>
                </div>
                <div>
                  <Link href="/about-us" className="text-lg font-semibold text-primary">About Us</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/about-us/our-story" className="hover:text-primary transition-colors">Our Story & Mission</Link>
                    <Link href="/about-us/leadership" className="hover:text-primary transition-colors">Leadership & Team</Link>
                    <Link href="/about-us/credentials" className="hover:text-primary transition-colors">Credentials & Regulatory</Link>
                    <Link href="/about-us/markets" className="hover:text-primary transition-colors">Markets & Carrier Relationships</Link>
                    <Link href="/about-us/esg" className="hover:text-primary transition-colors">ESG & Sustainability</Link>
                    <Link href="/insights" className="hover:text-primary transition-colors">Insights & Thought Leadership</Link>
                    <Link href="/about-us/careers" className="hover:text-primary transition-colors">Careers</Link>
                  </div>
                </div>
                <Link href="/contact" className="text-lg font-medium">Contact</Link>
                <div className="flex flex-col gap-3 mt-6">
                  <Button variant="outline" className="w-full justify-start">Risk Diagnostic</Button>
                  <Button className="w-full justify-start">Book Consultation</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
