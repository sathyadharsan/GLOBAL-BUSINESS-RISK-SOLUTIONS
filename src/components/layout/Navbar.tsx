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
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-primary leading-tight">
              Global Business<br />Risk Solutions
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
                  <div className="grid w-[650px] grid-cols-2 gap-4 p-5">
                    <div className="col-span-2 border-b pb-2 mb-2">
                      <h4 className="text-sm font-bold text-primary">Homepage Directory</h4>
                      <p className="text-xs text-muted-foreground">Directly access different sections of our corporate homepage.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <Link href="/#hero" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Hero / Value Proposition</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Protect the Balance Sheet. Enable the Business Plan.</div>
                      </Link>
                      
                      <Link href="/#metrics" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Key Metrics Strip</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">150+ countries · A++ carriers · 97% claim satisfaction</div>
                      </Link>
                      
                      <Link href="/#offerings" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Featured Offerings Grid</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Top 6 products; card with icon, name, CTA</div>
                      </Link>
                      
                      <Link href="/#trust" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Trust & Social Proof</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Client logos, testimonials, awards, ratings</div>
                      </Link>
                    </div>
                    
                    <div className="space-y-4">
                      <Link href="/#industries" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Industry Quick Links</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Tech · Manufacturing · Energy · Fintech · Infra</div>
                      </Link>
                      
                      <Link href="/#diagnostic" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Risk Diagnostic CTA</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Free 30-min risk assessment entry point</div>
                      </Link>
                      
                      <Link href="/#insights" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Insights / News Strip</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Latest 3 blog posts, regulatory alerts, market updates</div>
                      </Link>
                      
                      <Link href="/#footer" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Footer Information</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Nav links, regulatory disclaimers, IRDAI/FCA notices, contact</div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Offerings</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[850px] grid-cols-4 gap-6 p-6">
                    <div>
                      <h4 className="mb-3 text-xs font-bold uppercase text-blue-600 tracking-widest">Property & Asset</h4>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/offerings/property-sfsp" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Property / SFSP</Link></li>
                        <li><Link href="/offerings/business-interruption" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Business Interruption</Link></li>
                        <li><Link href="/offerings/car-ear" className="text-muted-foreground hover:text-primary hover:underline transition-colors">CAR / EAR</Link></li>
                        <li><Link href="/offerings/machinery-breakdown" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Machinery Breakdown</Link></li>
                        <li><Link href="/offerings/marine-cargo" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Marine Cargo / STP</Link></li>
                        <li><Link href="/offerings/marine-hull" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Marine Hull & Aviation</Link></li>
                        <li><Link href="/offerings/parametric" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Parametric Risk</Link></li>
                        <li><Link href="/offerings/fleet" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Commercial Fleet</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-xs font-bold uppercase text-blue-600 tracking-widest">Liability & Governance</h4>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/offerings/cgl" className="text-muted-foreground hover:text-primary hover:underline transition-colors">CGL / Public Liability</Link></li>
                        <li><Link href="/offerings/product-liability" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Product Liability & Recall</Link></li>
                        <li><Link href="/offerings/do-liability" className="text-muted-foreground hover:text-primary hover:underline transition-colors">D&O Liability</Link></li>
                        <li><Link href="/offerings/professional-indemnity" className="text-muted-foreground hover:text-primary hover:underline transition-colors">PI / E&O</Link></li>
                        <li><Link href="/offerings/cyber" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Cyber Liability</Link></li>
                        <li><Link href="/offerings/epl" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Employment Practices</Link></li>
                        <li><Link href="/offerings/environmental" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Environmental</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-xs font-bold uppercase text-blue-600 tracking-widest">Financial & M&A</h4>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/offerings/trade-credit" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Trade Credit</Link></li>
                        <li><Link href="/offerings/surety" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Surety Bonds</Link></li>
                        <li><Link href="/offerings/ma-insurance" className="text-muted-foreground hover:text-primary hover:underline transition-colors">M&A Insurance (W&I / Tax / Title)</Link></li>
                        <li><Link href="/offerings/political-risk" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Political Risk</Link></li>
                        <li><Link href="/offerings/fidelity" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Fidelity Guarantee</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-xs font-bold uppercase text-blue-600 tracking-widest">Emerging Risks</h4>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/offerings/ai-liability" className="text-muted-foreground hover:text-primary hover:underline transition-colors">AI Liability</Link></li>
                        <li><Link href="/offerings/space" className="text-muted-foreground hover:text-primary hover:underline transition-colors">Space Insurance</Link></li>
                        <li><Link href="/offerings/climate-esg" className="text-muted-foreground hover:text-primary hover:underline transition-colors">ESG Liability</Link></li>
                      </ul>
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <Link href="/offerings" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                          View All Offerings →
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[650px] grid-cols-2 gap-4 p-5">
                    <div className="col-span-2 border-b pb-2 mb-2">
                      <h4 className="text-sm font-bold text-primary">Industry Practices</h4>
                      <p className="text-xs text-muted-foreground">Sector-specific risk architecture and tailored insurance structures.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <Link href="/industries/technology-saas" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Technology &amp; SaaS</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Cyber · Tech E&O · D&O · AI liability · DPDP</div>
                      </Link>
                      
                      <Link href="/industries/manufacturing" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Manufacturing &amp; Engineering</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Property · BI · Product recall · PLI schemes · CBI</div>
                      </Link>
                      
                      <Link href="/industries/energy" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Energy &amp; Renewables</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">CAR · Production guarantee · Parametric · BESS</div>
                      </Link>
                      
                      <Link href="/industries/fintech" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Financial Services &amp; Fintech</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">BBB · PI · Cyber · D&O · RBI / SEBI compliance</div>
                      </Link>
                    </div>
                    
                    <div className="space-y-4">
                      <Link href="/industries/infrastructure" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Infrastructure &amp; Real Estate</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">15-year programs · DSU · Surety · NMP projects</div>
                      </Link>
                      
                      <Link href="/industries/logistics" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Trade, Logistics &amp; Supply Chain</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Marine · Fleet · Warehouse · Freight forwarder</div>
                      </Link>
                      
                      <Link href="/industries/agriculture" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Agriculture &amp; Food Processing</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">PMFBY · Parametric · Recall · Cold chain</div>
                      </Link>
                      
                      <Link href="/industries/healthcare" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Healthcare &amp; Pharma</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Clinical trials · Product recall · PI · USFDA recall</div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[650px] grid-cols-2 gap-4 p-5">
                    <div className="col-span-2 border-b pb-2 mb-2">
                      <h4 className="text-sm font-bold text-primary">Cross-Cutting Solutions</h4>
                      <p className="text-xs text-muted-foreground">Strategic risk architecture transcending individual product lines.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <Link href="/solutions/global-program-architecture" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Global Program Architecture</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Controlled Master Policy · Fronting · DIC/DIL · Captive Reinsurance</div>
                      </Link>
                      
                      <Link href="/solutions/captive-insurance" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Captive Insurance & ART</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Single-parent captive · Protected cell · Cat bond · ILW</div>
                      </Link>
                      
                      <Link href="/solutions/long-tenor-infrastructure" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Long-Tenor Infrastructure</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">10–15 year programs · CPI escalation caps · PPP aligned</div>
                      </Link>
                    </div>
                    
                    <div className="space-y-4">
                      <Link href="/solutions/tcor-analytics" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">TCOR Analytics & Benchmarking</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">TCOR model · Sector benchmarks · Retention curve</div>
                      </Link>
                      
                      <Link href="/solutions/claims-advocacy" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Claims Advocacy</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Major loss response · Coverage dispute · Subrogation</div>
                      </Link>
                      
                      <Link href="/solutions/risk-engineering" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Risk Engineering & Loss Prevention</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Reinstatement valuation · Telematics · Fire suppression audit</div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[650px] grid-cols-2 gap-4 p-5">
                    <div className="col-span-2 border-b pb-2 mb-2">
                      <h4 className="text-sm font-bold text-primary">Client Use Cases</h4>
                      <p className="text-xs text-muted-foreground">Real-world applications of our risk transfer and advisory capabilities.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <Link href="/use-cases/unicorn-ipo" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Unicorn IPO — D&O Structuring</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Pre-IPO allocation · Securities defense · EPL</div>
                      </Link>
                      
                      <Link href="/use-cases/pe-fund-exit" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">PE Fund Exit — W&I Insurance</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">R&W policy · Escrow eliminated · Tax cover</div>
                      </Link>
                      
                      <Link href="/use-cases/it-ransomware" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">IT Firm Ransomware Attack</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Forensics · Ransom · DPDP notification · BI</div>
                      </Link>
                      
                      <Link href="/use-cases/factory-fire" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Factory Fire — BI + Rebuild</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">SFSP + BI · 36-month indemnity · Temp relocation</div>
                      </Link>
                    </div>
                    
                    <div className="space-y-4">
                      <Link href="/use-cases/solar-park" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">500 MW Solar Park</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">CAR + EAR + Production guarantee + Parametric</div>
                      </Link>
                      
                      <Link href="/use-cases/nhai-highway" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">NHAI 15-Year Highway Concession</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Long-tenor property + BI + Surety + Parametric</div>
                      </Link>
                      
                      <Link href="/use-cases/supplier-flood" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Supplier Flood — CBI Activation</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Unnamed CBI · Supply chain BI · Fast payout</div>
                      </Link>
                      
                      <Link href="/use-cases/sebi-adviser" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">SEBI-Registered Adviser PI</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Mandatory PI · Suitability claim · SEBI defense</div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[650px] grid-cols-2 gap-4 p-5">
                    <div className="col-span-2 border-b pb-2 mb-2">
                      <h4 className="text-sm font-bold text-primary">About GBRS</h4>
                      <p className="text-xs text-muted-foreground">Protect the Balance Sheet. Enable the Business Plan.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <Link href="/about-us/our-story" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Our Story & Mission</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Founded · Philosophy · 150+ countries</div>
                      </Link>
                      
                      <Link href="/about-us/leadership" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Leadership & Team</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Risk architects · Sector leaders · Claims team</div>
                      </Link>
                      
                      <Link href="/about-us/credentials" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Credentials & Regulatory</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">IRDAI broker licence · Lloyd's coverholder · FCA</div>
                      </Link>
                      
                      <Link href="/about-us/markets" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Markets & Carrier Relationships</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">A++ carriers · Lloyd's syndicates · Reinsurers</div>
                      </Link>
                    </div>
                    
                    <div className="space-y-4">
                      <Link href="/about-us/esg" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">ESG & Sustainability</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Green premium discounts · Climate advisory · BRSR</div>
                      </Link>
                      
                      <Link href="/insights" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Insights & Thought Leadership</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Blog · Regulatory alerts · White papers</div>
                      </Link>
                      
                      <Link href="/about-us/careers" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Careers</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Risk brokers · Claims advocates · Actuaries</div>
                      </Link>
                      
                      <Link href="/contact" className="block group/item">
                        <div className="text-sm font-semibold text-primary group-hover/item:text-blue-600 transition-colors">Contact & Consultation</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-normal">Risk diagnostic · 30-min booking · 24/7 hotline</div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
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
                  <Link href="/" className="text-lg font-semibold text-primary">Home</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/#hero" className="hover:text-primary transition-colors">Hero / Value Proposition</Link>
                    <Link href="/#metrics" className="hover:text-primary transition-colors">Key Metrics Strip</Link>
                    <Link href="/#offerings" className="hover:text-primary transition-colors">Featured Offerings Grid</Link>
                    <Link href="/#trust" className="hover:text-primary transition-colors">Trust & Social Proof</Link>
                    <Link href="/#industries" className="hover:text-primary transition-colors">Industry Quick Links</Link>
                    <Link href="/#diagnostic" className="hover:text-primary transition-colors">Risk Diagnostic CTA</Link>
                    <Link href="/#insights" className="hover:text-primary transition-colors">Insights / News Strip</Link>
                    <Link href="/#footer" className="hover:text-primary transition-colors">Footer</Link>
                  </div>
                </div>
                <Link href="/offerings" className="text-lg font-medium">Offerings</Link>
                <div>
                  <Link href="/industries" className="text-lg font-semibold text-primary">Industries</Link>
                  <div className="mt-2 pl-4 border-l border-gray-200 flex flex-col gap-2.5 text-sm text-muted-foreground">
                    <Link href="/industries/technology-saas" className="hover:text-primary transition-colors">Technology &amp; SaaS</Link>
                    <Link href="/industries/manufacturing" className="hover:text-primary transition-colors">Manufacturing &amp; Engineering</Link>
                    <Link href="/industries/energy" className="hover:text-primary transition-colors">Energy &amp; Renewables</Link>
                    <Link href="/industries/fintech" className="hover:text-primary transition-colors">Financial Services &amp; Fintech</Link>
                    <Link href="/industries/infrastructure" className="hover:text-primary transition-colors">Infrastructure &amp; Real Estate</Link>
                    <Link href="/industries/logistics" className="hover:text-primary transition-colors">Trade, Logistics &amp; Supply Chain</Link>
                    <Link href="/industries/agriculture" className="hover:text-primary transition-colors">Agriculture &amp; Food Processing</Link>
                    <Link href="/industries/healthcare" className="hover:text-primary transition-colors">Healthcare &amp; Pharma</Link>
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
