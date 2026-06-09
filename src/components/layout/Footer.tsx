import Link from "next/link";
import { MapPin, Mail, Phone, Cloud, Database, Server, Box, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { officeLocations } from "@/data/siteContent";

export function Footer() {
  const offices = officeLocations;

  return (
    <footer id="footer" className="bg-[#f8f9fa] text-slate-600 py-16 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Mega Menu Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-4">
          <div className="md:col-span-3 lg:col-span-2 space-y-4 pr-8">
            <Link href="/" className="inline-block text-xl font-bold tracking-tight text-slate-900">
              TRUSTFLOW
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed pr-4">
              Architecting enterprise-grade non-life insurance and risk transfer solutions across industries, infrastructure, governance, and global operations.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">
                <Mail className="w-3.5 h-3.5" />
                <span className="text-[10px]">connect@trustgrid.ai</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">
                <Phone className="w-3.5 h-3.5" />
                <span className="text-[10px]">+1 5512288612</span>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Link href="#" className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-blue-600 transition-all">
                <span className="text-[10px] font-bold">in</span>
              </Link>
              <Link href="#" className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-blue-400 transition-all">
                <span className="text-[10px] font-bold">tw</span>
              </Link>
              <Link href="#" className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-blue-800 transition-all">
                <span className="text-[10px] font-bold">fb</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Platform</h4>
            <ul className="space-y-2.5">
              <li><Link href="/platform/risk-diagnostic-engine" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Risk Diagnostic Engine</Link></li>
              <li><Link href="/platform/risk-dna-mapper" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Risk DNA Mapper</Link></li>
              <li><Link href="/platform/cyber-intelligence" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Cyber Intelligence</Link></li>
              <li><Link href="/platform/counterparty-assessment" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Counterparty Analytics</Link></li>
              <li><Link href="/platform/contract-intelligence" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Contract Intelligence</Link></li>
              <li><Link href="/platform/regulatory-intelligence" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Regulatory Intelligence</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Solutions</h4>
            <ul className="space-y-2.5">
              <li><Link href="/solutions/global-program-architecture" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Global Program Architecture</Link></li>
              <li><Link href="/solutions/captive-insurance" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Captive Insurance & ART</Link></li>
              <li><Link href="/solutions/risk-engineering" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Risk Engineering</Link></li>
              <li><Link href="/solutions/long-tenor-infrastructure" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Long-Tenor Infrastructure</Link></li>
              <li><Link href="/solutions/tcor-analytics" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">TCOR Analytics</Link></li>
              <li><Link href="/solutions/claims-advocacy" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Claims Advocacy</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Offerings</h4>
            <ul className="space-y-2.5">
              <li><Link href="/offerings/category/insurance-solutions" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Insurance Solutions</Link></li>
              <li><Link href="/offerings/category/cyber-digital-risk" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Cyber & Digital Risk</Link></li>
              <li><Link href="/offerings/category/warranty-guarantee" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Warranty & Guarantee</Link></li>
              <li><Link href="/offerings/category/alternative-risk-transfer" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Alternative Risk Transfer</Link></li>
              <li><Link href="/offerings/category/ai-contract-analytics" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">AI Contract & Analytics</Link></li>
              <li><Link href="/offerings/category/industry-programs" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Industry Programs</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Industries</h4>
            <ul className="space-y-2.5">
              <li><Link href="/industries/technology-digital" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Technology</Link></li>
              <li><Link href="/industries/financial-services" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Financial Services</Link></li>
              <li><Link href="/industries/healthcare-life-sciences" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/manufacturing-industrial" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/energy-utilities" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Energy</Link></li>
              <li><Link href="/industries/infrastructure-real-estate" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Real Estate</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about-us#about" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/about-us#leadership" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Leadership & Culture</Link></li>
              <li><Link href="/about-us#offices" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Our Offices</Link></li>
              <li><Link href="/about-us/careers" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider with Global Presence Pill */}
        <div className="relative border-t border-slate-200 mt-12 mb-16 -mx-4 md:-mx-8">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 bg-[#f8f9fa] px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
              GLOBAL PRESENCE
            </span>
          </div>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mb-20">
          {offices.map((office, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5" />
                <h3 className="text-xs font-bold text-slate-800 tracking-wider">{office.name}</h3>
              </div>
              <p className="text-xs leading-relaxed text-slate-500 whitespace-pre-line ml-6">
                {office.address}
              </p>
              <div className="space-y-2 ml-6 pt-2">
                <div className="flex items-center gap-2 text-slate-500">
                  <Mail className="w-3.5 h-3.5" />
                  <a href={`mailto:${office.email}`} className="text-xs hover:text-blue-600 transition-colors">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Phone className="w-3.5 h-3.5" />
                  <a href={`tel:${office.phone}`} className="text-xs hover:text-blue-600 transition-colors">
                    {office.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TRUSTED ECOSYSTEM */}
        <div className="flex justify-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200">
            TRUSTED ECOSYSTEM
          </span>
        </div>

        {/* Ecosystem Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-16 text-slate-400 grayscale opacity-70">
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5" />
            <span className="font-semibold text-sm">Salesforce</span>
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            <span className="font-semibold text-sm">HubSpot</span>
          </div>
          <div className="flex items-center gap-2">
            <Box className="w-5 h-5" />
            <span className="font-semibold text-sm">Microsoft</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5" />
            <span className="font-semibold text-sm">AWS</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span className="font-semibold text-sm">Google Cloud</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 text-[10px] text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} TrustGrid AI. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">Security</Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">Copyright</Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
