import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 font-sans">
      {/* Brand Axiom Strip */}
      <div className="border-b border-neutral-800 bg-neutral-900/40">
        <div className="container mx-auto px-4 py-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-accent-500 to-cyber-500 flex items-center justify-center">
              <Shield className="h-3 w-3 text-neutral-950 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              TRUSTFLOW Brand Axiom
            </span>
          </div>
          <p className="text-sm font-serif italic text-neutral-200 text-center md:text-right font-medium">
            "TRUSTFLOW architects risk programs for global enterprise, not generic insurance products."
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-accent-500 to-cyber-500 flex items-center justify-center shadow-lg">
                <Shield className="h-4.5 w-4.5 text-neutral-950 stroke-[2.5]" />
              </div>
              <span className="text-lg font-extrabold tracking-wider text-white uppercase font-sans">
                TRUST<span className="text-accent-500">FLOW</span>
              </span>
            </div>
            <p className="max-w-sm text-xs text-neutral-400 leading-relaxed">
              TRUSTFLOW is the Master Solution Provider for Business Risk, orchestrating capacity syndication and programmatic architectures to protect global enterprise capital.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-white">Risk Solutions</h3>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="/risk-solutions/property-business-interruption" className="hover:text-white transition-colors">Property &amp; BI</Link></li>
              <li><Link href="/risk-solutions/cyber-digital-risk" className="hover:text-white transition-colors">Cyber &amp; Digital Risk</Link></li>
              <li><Link href="/risk-solutions/management-liability" className="hover:text-white transition-colors">Management Liability</Link></li>
              <li><Link href="/risk-solutions/crypto-digital-assets" className="hover:text-white transition-colors">Crypto &amp; Digital Assets</Link></li>
              <li><Link href="/risk-solutions/captive-insurance" className="hover:text-white transition-colors">Captives &amp; ART</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-white">Industries</h3>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="/industries/technology-saas" className="hover:text-white transition-colors">Technology &amp; SaaS</Link></li>
              <li><Link href="/industries/financial-services" className="hover:text-white transition-colors">Financial Services</Link></li>
              <li><Link href="/industries/healthcare" className="hover:text-white transition-colors">Healthcare &amp; Pharma</Link></li>
              <li><Link href="/industries/manufacturing" className="hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/energy" className="hover:text-white transition-colors">Energy &amp; Renewables</Link></li>
              <li><Link href="/industries/crypto-blockchain" className="hover:text-white transition-colors">Crypto &amp; Blockchain</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-white">Platform</h3>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about/methodology" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><Link href="/tools" className="hover:text-white transition-colors">Tools &amp; Intelligence</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights Hub</Link></li>
              <li><Link href="/ecosystem-partners" className="hover:text-white transition-colors">Ecosystem Partners</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between border-t border-neutral-800 pt-8 sm:flex-row text-[11px] text-neutral-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} TRUSTFLOW. All rights reserved. Registered under regulatory authorities globally.
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0 justify-center">
            <Link href="/legal" className="hover:text-white transition-colors">Regulatory Disclosures</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
