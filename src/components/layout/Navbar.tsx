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
import { Menu, Shield, Cpu, Zap, Activity, Users, FileText, ChevronRight, Globe, Layers, AlertCircle, FileSpreadsheet } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-950/70">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-cyber-500 shadow-[0_0_15px_rgba(232,163,23,0.2)] group-hover:scale-105 transition-transform duration-300">
              <Shield className="h-5 w-5 text-neutral-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white font-sans uppercase">
                TRUST<span className="text-accent-500">FLOW</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-cyber-400 uppercase">
                Risk Architecture
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              
              {/* 1. RISK SOLUTIONS MEGA MENU */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-neutral-300 hover:text-white data-[state=open]:text-white">
                  Risk Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[950px] grid-cols-4 gap-6 p-6 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl">
                    
                    {/* General Business */}
                    <div>
                      <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-accent-500 flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-accent-500" /> General Business
                      </h4>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link href="/risk-solutions/property-business-interruption" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Property & BI
                          </Link>
                        </li>
                        <li>
                          <Link href="/risk-solutions/cyber-digital-risk" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Cyber & Digital Risk
                          </Link>
                        </li>
                        <li>
                          <Link href="/risk-solutions/management-liability" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Management Liability
                          </Link>
                        </li>
                        <li>
                          <Link href="/risk-solutions/trade-credit-political-risk" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Trade Credit & Political
                          </Link>
                        </li>
                        <li>
                          <Link href="/risk-solutions/professional-liability-eo" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Professional Liability (E&O)
                          </Link>
                        </li>
                        <li>
                          <Link href="/risk-solutions/marine-aviation-transportation" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Marine, Aviation & Transport
                          </Link>
                        </li>
                        <li>
                          <Link href="/risk-solutions/construction-engineering" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Construction & Engineering
                          </Link>
                        </li>
                        <li>
                          <Link href="/risk-solutions/environmental-liability" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Environmental Liability
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Emerging & Frontier */}
                    <div>
                      <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-cyber-400 flex items-center gap-1.5">
                        <Cpu className="h-3.5 w-3.5 text-cyber-400" /> Emerging & Frontier
                      </h4>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link href="/risk-solutions/crypto-digital-assets" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Crypto & Digital Assets
                          </Link>
                        </li>
                        <li>
                          <Link href="/risk-solutions/quantum-computing" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Quantum Computing
                          </Link>
                        </li>
                        <li>
                          <Link href="/risk-solutions/drone-uav-operations" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Drone & UAV Fleets
                          </Link>
                        </li>
                        <li>
                          <Link href="/risk-solutions/space-satellite" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            Space & Satellite
                          </Link>
                        </li>
                        <li>
                          <Link href="/risk-solutions/ai-algorithm-liability" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                            AI & Algorithm Liability
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Alternative Risk & Warranty */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-purple-400 flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5 text-purple-400" /> Alternative Risk
                        </h4>
                        <ul className="space-y-2 text-xs">
                          <li>
                            <Link href="/risk-solutions/captive-insurance" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                              Captives & ART
                            </Link>
                          </li>
                          <li>
                            <Link href="/risk-solutions/parametric-insurance" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                              Parametric Insurance
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                          <Shield className="h-3.5 w-3.5 text-emerald-400" /> Warranty & Bonds
                        </h4>
                        <ul className="space-y-2 text-xs">
                          <li>
                            <Link href="/risk-solutions/product-warranties" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                              Product Warranties
                            </Link>
                          </li>
                          <li>
                            <Link href="/risk-solutions/surety-bonds" className="text-neutral-400 hover:text-white transition-colors block py-0.5 font-sans">
                              Surety & Performance
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Promo Column */}
                    <div className="bg-neutral-950 p-5 rounded-lg border border-neutral-800 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[9px] font-mono text-cyber-400 uppercase tracking-widest">
                          Architecture Hub
                        </span>
                        <h5 className="text-xs font-bold text-white font-sans leading-snug">
                          The 12-Card Dynamic Risk Universe
                        </h5>
                        <p className="text-[10px] text-neutral-400 leading-normal font-sans">
                          Explore our full solution matrix built to insulate balance sheets from catastrophic event disruptions.
                        </p>
                      </div>
                      <Link href="/risk-solutions" className="mt-4 inline-flex items-center text-[10px] font-bold text-accent-500 hover:text-accent-400 uppercase tracking-wider font-sans group">
                        Solution Universe <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 2. INDUSTRIES practice lines */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-neutral-300 hover:text-white data-[state=open]:text-white">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-3 gap-6 p-6 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl">
                    <div className="col-span-3 border-b border-neutral-800 pb-3 mb-2 flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Practice Verticals</h4>
                        <p className="text-[10px] text-neutral-400 mt-0.5 font-sans">Tailored, non-generic frameworks for enterprise operations.</p>
                      </div>
                      <Link href="/industries" className="text-[10px] font-bold text-cyber-400 hover:text-cyber-300 uppercase tracking-widest font-sans flex items-center">
                        View All 41 Sectors <ChevronRight className="h-3 w-3 ml-0.5" />
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <Link href="/industries/technology-saas" className="block group/item">
                        <div className="text-xs font-bold text-neutral-200 group-hover/item:text-accent-500 transition-colors font-sans">Technology &amp; SaaS</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Cyber breach, Tech E&O, algorithm liability, DPDP.</p>
                      </Link>
                      <Link href="/industries/financial-services" className="block group/item">
                        <div className="text-xs font-bold text-neutral-200 group-hover/item:text-accent-500 transition-colors font-sans">Financial Services</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">BBB, professional liability, PE/VC exit, regulatory.</p>
                      </Link>
                      <Link href="/industries/healthcare" className="block group/item">
                        <div className="text-xs font-bold text-neutral-200 group-hover/item:text-accent-500 transition-colors font-sans">Healthcare &amp; Life Sciences</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Clinical trials, product recall, malpractice, USFDA.</p>
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <Link href="/industries/manufacturing" className="block group/item">
                        <div className="text-xs font-bold text-neutral-200 group-hover/item:text-accent-500 transition-colors font-sans">Advanced Manufacturing</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">All-Risks SFSP, CBI, supply chain continuity, recall.</p>
                      </Link>
                      <Link href="/industries/energy" className="block group/item">
                        <div className="text-xs font-bold text-neutral-200 group-hover/item:text-accent-500 transition-colors font-sans">Energy &amp; Renewables</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Parametric wind/solar, project commissioning, CAR/EAR.</p>
                      </Link>
                      <Link href="/industries/real-estate-construction" className="block group/item">
                        <div className="text-xs font-bold text-neutral-200 group-hover/item:text-accent-500 transition-colors font-sans">Real Estate &amp; Built Env.</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">CAR/EAR, defect liability, delay-in-start-up structures.</p>
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <Link href="/industries/crypto-blockchain" className="block group/item">
                        <div className="text-xs font-bold text-neutral-200 group-hover/item:text-accent-500 transition-colors font-sans">Crypto &amp; Blockchain</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Exchange custody, hot-wallet, DeFi smart-contract.</p>
                      </Link>
                      <Link href="/industries/space-satellite" className="block group/item">
                        <div className="text-xs font-bold text-neutral-200 group-hover/item:text-accent-500 transition-colors font-sans">Space &amp; Satellite Operators</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Launch, in-orbit operations, telemetry, payload.</p>
                      </Link>
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <Link href="/industries/ai-machine-learning" className="text-[10px] font-bold text-cyber-400 hover:text-cyber-300 font-sans">
                          AI &amp; ML →
                        </Link>
                        <Link href="/industries/autonomous-vehicles" className="text-[10px] font-bold text-cyber-400 hover:text-cyber-300 font-sans">
                          AV Fleets →
                        </Link>
                      </div>
                    </div>

                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 3. TOOLS & INTELLIGENCE */}
              <NavigationMenuItem>
                <Link href="/tools" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-neutral-300 hover:text-white hover:bg-neutral-900 focus:bg-neutral-900")}>
                    Tools & Intelligence
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* 4. ECOSYSTEM PARTNERS */}
              <NavigationMenuItem>
                <Link href="/ecosystem-partners" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-neutral-300 hover:text-white hover:bg-neutral-900 focus:bg-neutral-900")}>
                    Ecosystem Partners
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* 5. INSIGHTS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-neutral-300 hover:text-white data-[state=open]:text-white">
                  Insights
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[450px] grid-cols-2 gap-4 p-5 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl">
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent-500 font-sans">Knowledge</h4>
                      <Link href="/insights" className="block group/item">
                        <div className="text-xs font-semibold text-neutral-200 group-hover/item:text-accent-500 font-sans">Insights Hub</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Research papers, regulatory briefings, updates.</p>
                      </Link>
                      <Link href="/insights?tab=glossary" className="block group/item">
                        <div className="text-xs font-semibold text-neutral-200 group-hover/item:text-accent-500 font-sans">Risk Glossary</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Essential terms and definitions for risk managers.</p>
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-cyber-400 font-sans">Network</h4>
                      <Link href="/ecosystem-partners" className="block group/item">
                        <div className="text-xs font-semibold text-neutral-200 group-hover/item:text-accent-500 font-sans">Ecosystem Partners</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">A++ syndicates, carrier ratings, strategic validators.</p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 5. ABOUT */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-neutral-300 hover:text-white data-[state=open]:text-white">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[450px] grid-cols-2 gap-4 p-5 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl">
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent-500 font-sans">Architecture</h4>
                      <Link href="/about" className="block group/item">
                        <div className="text-xs font-semibold text-neutral-200 group-hover/item:text-accent-500 font-sans">Company Overview</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Global footprint and carrier infrastructure.</p>
                      </Link>
                      <Link href="/about/methodology" className="block group/item">
                        <div className="text-xs font-semibold text-neutral-200 group-hover/item:text-accent-500 font-sans">7-Phase Methodology</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Block-by-block structural audits.</p>
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-cyber-400 font-sans">Organization</h4>
                      <Link href="/about/leadership" className="block group/item">
                        <div className="text-xs font-semibold text-neutral-200 group-hover/item:text-accent-500 font-sans">Leadership & Team</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Practice group leaders and underwriters.</p>
                      </Link>
                      <Link href="/about/careers" className="block group/item">
                        <div className="text-xs font-semibold text-neutral-200 group-hover/item:text-accent-500 font-sans">Careers</div>
                        <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Actuarial and broker placements.</p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/tools/risk-diagnostic">
            <Button className="bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs shadow-[0_0_15px_rgba(232,163,23,0.15)]">
              Start Your Risk Assessment (Free)
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-cyber-500 text-cyber-400 hover:bg-cyber-500/10 font-sans text-xs">
              Book a Risk Review
            </Button>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-white transition-all outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] bg-neutral-950 border-neutral-800 text-neutral-200 overflow-y-auto p-6">
              <div className="flex flex-col gap-6 pt-8">
                
                {/* Logo */}
                <div className="flex items-center gap-2 pb-4 border-b border-neutral-800">
                  <div className="h-8 w-8 rounded bg-gradient-to-br from-accent-500 to-cyber-500 flex items-center justify-center">
                    <Shield className="h-4.5 w-4.5 text-neutral-950 stroke-[2.5]" />
                  </div>
                  <span className="text-lg font-extrabold tracking-wider text-white font-sans uppercase">
                    TRUST<span className="text-accent-500">FLOW</span>
                  </span>
                </div>

                {/* Navigation Links list */}
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-[10px] font-bold text-accent-500 uppercase tracking-widest mb-2 font-sans">Solutions</h4>
                    <ul className="pl-3 border-l border-neutral-800 space-y-2 text-sm text-neutral-400 font-sans">
                      <li><Link href="/risk-solutions" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Solutions Hub</Link></li>
                      <li><Link href="/risk-solutions/property-business-interruption" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Property &amp; BI</Link></li>
                      <li><Link href="/risk-solutions/cyber-digital-risk" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Cyber &amp; Digital</Link></li>
                      <li><Link href="/risk-solutions/management-liability" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Management Liability</Link></li>
                      <li><Link href="/risk-solutions/trade-credit-political-risk" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Trade Credit &amp; Political</Link></li>
                      <li><Link href="/risk-solutions/professional-liability-eo" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Professional Liability</Link></li>
                      <li><Link href="/risk-solutions/crypto-digital-assets" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Crypto &amp; Digital Assets</Link></li>
                      <li><Link href="/risk-solutions/space-satellite" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Space &amp; Satellite</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-cyber-400 uppercase tracking-widest mb-2 font-sans">Industries</h4>
                    <ul className="pl-3 border-l border-neutral-800 space-y-2 text-sm text-neutral-400 font-sans">
                      <li><Link href="/industries" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Industries Hub</Link></li>
                      <li><Link href="/industries/technology-saas" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Technology &amp; SaaS</Link></li>
                      <li><Link href="/industries/financial-services" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Financial Services</Link></li>
                      <li><Link href="/industries/healthcare" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Healthcare &amp; Pharma</Link></li>
                      <li><Link href="/industries/manufacturing" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Manufacturing</Link></li>
                      <li><Link href="/industries/energy" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Energy &amp; Renewables</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-cyber-400 uppercase tracking-widest mb-2 font-sans">Resources &amp; Architecture</h4>
                    <ul className="pl-3 border-l border-neutral-800 space-y-2 text-sm text-neutral-400 font-sans">
                      <li><Link href="/tools" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Risk Diagnostics</Link></li>
                      <li><Link href="/insights" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Insights &amp; Publications</Link></li>
                      <li><Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Company Profile</Link></li>
                      <li><Link href="/about/methodology" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">7-Phase Methodology</Link></li>
                      <li><Link href="/about/leadership" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Leadership &amp; Underwriting Team</Link></li>
                      <li><Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-white block py-0.5">Book a Risk Review</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-6 border-t border-neutral-800">
                  <Link href="/tools/risk-diagnostic" onClick={() => setIsOpen(false)}>
                    <Button className="w-full justify-center bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold font-sans text-xs">
                      Start Your Risk Assessment (Free)
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full justify-center border-cyber-500 text-cyber-400 hover:bg-cyber-500/10 font-sans text-xs">
                      Book a Risk Review
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
