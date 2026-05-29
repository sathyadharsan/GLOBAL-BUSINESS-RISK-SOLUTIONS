import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="mb-4 inline-block text-2xl font-bold tracking-tight">
              GBRS
            </Link>
            <p className="mb-6 max-w-sm text-sm text-primary-foreground/80 leading-relaxed">
              Architecting enterprise-grade non-life insurance and risk transfer solutions across industries, infrastructure, governance, and global operations.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Offerings</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/offerings" className="hover:text-white transition-colors">Property Risk</Link></li>
              <li><Link href="/offerings" className="hover:text-white transition-colors">Liability &amp; Governance</Link></li>
              <li><Link href="/offerings" className="hover:text-white transition-colors">Financial &amp; M&amp;A</Link></li>
              <li><Link href="/offerings" className="hover:text-white transition-colors">Emerging Risks</Link></li>
              <li><Link href="/offerings" className="hover:text-white transition-colors">Parametric Risk</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Industries</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/industries" className="hover:text-white transition-colors">Technology &amp; SaaS</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Energy &amp; Renewables</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Financial Services</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Infrastructure</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Company</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Global Business Risk Solutions. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0 text-xs text-primary-foreground/60">
            <Link href="/legal" className="hover:text-white transition-colors">Legal Disclaimers</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
