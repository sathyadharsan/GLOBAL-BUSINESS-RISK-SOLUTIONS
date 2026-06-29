import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Cloud, Database, Server, Box, Globe } from "lucide-react";
import { officeLocations } from "@/data/siteContent";

export function Footer() {
  const offices = officeLocations;

  return (
    <footer id="footer" className="bg-[#F5F5F7] text-slate-600 py-20 border-t border-slate-200 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-[1400px]">
        
        {/* Mega Menu Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-16">
          <div className="md:col-span-3 lg:col-span-2 space-y-5 pr-8">
            <Link to="/" className="inline-block text-2xl font-bold tracking-tight text-slate-900 font-serif">
              TRUSTFLOW
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed pr-4">
              Architecting enterprise-grade non-life insurance and risk transfer solutions across industries, infrastructure, governance, and global operations.
            </p>
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer w-fit">
                <Mail className="w-3.5 h-3.5 text-blue-600/80" />
                <span className="text-[11px] font-medium text-slate-600 font-sans">connect@trustflow.in</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer w-fit">
                <Phone className="w-3.5 h-3.5 text-blue-600/80" />
                <span className="text-[11px] font-medium text-slate-600 font-sans">+91 9513288612</span>
              </div>
            </div>
            <div className="flex gap-3 pt-3">
              <Link to="#" className="w-7 h-7 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-blue-600 transition-all">
                <span className="text-xs font-bold font-serif">in</span>
              </Link>
              <Link to="#" className="w-7 h-7 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-blue-400 transition-all">
                <span className="text-xs font-bold font-serif">tw</span>
              </Link>
              <Link to="#" className="w-7 h-7 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-blue-800 transition-all">
                <span className="text-xs font-bold font-serif">fb</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Platform</h4>
            <ul className="space-y-2.5">
              <li><Link to="/platform/risk-diagnostic-engine" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Risk Diagnostic Engine</Link></li>
              <li><Link to="/platform/risk-dna-mapper" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Risk DNA Mapper</Link></li>
              <li><Link to="/platform/cyber-intelligence" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Cyber Intelligence</Link></li>
              <li><Link to="/platform/counterparty-assessment" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Counterparty Analytics</Link></li>
              <li><Link to="/platform/contract-intelligence" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Contract Intelligence</Link></li>
              <li><Link to="/platform/regulatory-intelligence" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Regulatory Intelligence</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Solutions</h4>
            <ul className="space-y-2.5">
              <li><Link to="/solutions/global-program-architecture" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Global Program Architecture</Link></li>
              <li><Link to="/solutions/captive-insurance" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Captive Insurance & ART</Link></li>
              <li><Link to="/solutions/risk-engineering" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Risk Engineering</Link></li>
              <li><Link to="/solutions/long-tenor-infrastructure" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Long-Tenor Infrastructure</Link></li>
              <li><Link to="/solutions/tcor-analytics" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">TCOR Analytics</Link></li>
              <li><Link to="/solutions/claims-advocacy" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Claims Advocacy</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Offerings</h4>
            <ul className="space-y-2.5">
              <li><Link to="/offerings/category/insurance-solutions" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Insurance Solutions</Link></li>
              <li><Link to="/offerings/category/cyber-digital-risk" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Cyber & Digital Risk</Link></li>
              <li><Link to="/offerings/category/warranty-guarantee" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Warranty & Guarantee</Link></li>
              <li><Link to="/offerings/category/alternative-risk-transfer" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Alternative Risk Transfer</Link></li>
              <li><Link to="/offerings/category/ai-contract-analytics" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">AI Contract & Analytics</Link></li>
              <li><Link to="/offerings/category/industry-programs" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Industry Programs</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Industries</h4>
            <ul className="space-y-2.5">
              <li><Link to="/industries/technology-digital" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Technology</Link></li>
              <li><Link to="/industries/financial-services" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Financial Services</Link></li>
              <li><Link to="/industries/healthcare-life-sciences" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Healthcare</Link></li>
              <li><Link to="/industries/manufacturing-industrial" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Manufacturing</Link></li>
              <li><Link to="/industries/energy-utilities" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Energy</Link></li>
              <li><Link to="/industries/infrastructure-real-estate" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Real Estate</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about-us#about" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">About Us</Link></li>
              <li><Link to="/about-us#leadership" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Leadership & Culture</Link></li>
              <li><Link to="/about-us#offices" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Our Offices</Link></li>
              <li><Link to="/about-us/careers" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Careers</Link></li>
              <li><Link to="/contact" className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-sans">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider with Global Presence Pill */}
        <div className="relative border-t border-slate-200 mt-16 mb-20 -mx-6 md:-mx-8">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4">
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-800 bg-[#F5F5F7] px-5 py-2 rounded-full border border-slate-200 shadow-sm font-sans">
              GLOBAL PRESENCE
            </span>
          </div>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {offices.map((office, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-500 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.015)]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                <h3 className="text-sm font-bold text-slate-800 tracking-wider font-serif">{office.name}</h3>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-500 whitespace-pre-line ml-6 font-medium font-sans">
                {office.address}
              </p>
              <div className="space-y-2.5 ml-6 pt-2 border-t border-slate-100">
                {office.email && (
                  <div className="flex items-center gap-2 text-slate-500">
                    <Mail className="w-3.5 h-3.5 text-blue-600/80" />
                    <a href={`mailto:${office.email}`} className="text-[11px] hover:text-blue-600 transition-colors font-medium font-sans">
                      {office.email}
                    </a>
                  </div>
                )}
                {office.phone && (
                  <div className="flex items-center gap-2 text-slate-500">
                    <Phone className="w-3.5 h-3.5 text-blue-600/80" />
                    <a href={`tel:${office.phone}`} className="text-[11px] hover:text-blue-600 transition-colors font-medium font-sans">
                      {office.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* TRUSTED ECOSYSTEM */}
        <div className="flex justify-center mb-10">
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 bg-slate-200/40 px-5 py-2 rounded-full border border-slate-300 font-sans">
            TRUSTED ECOSYSTEM
          </span>
        </div>

        {/* Ecosystem Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-20 text-slate-400 opacity-80">
          <div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
            <Cloud className="w-5 h-5 text-blue-500/40" />
            <span className="font-semibold text-sm font-sans">Salesforce</span>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
            <Database className="w-5 h-5 text-blue-500/40" />
            <span className="font-semibold text-sm font-sans">HubSpot</span>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
            <Box className="w-5 h-5 text-blue-500/40" />
            <span className="font-semibold text-sm font-sans">Microsoft</span>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
            <Server className="w-5 h-5 text-blue-500/40" />
            <span className="font-semibold text-sm font-sans">AWS</span>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
            <Globe className="w-5 h-5 text-blue-500/40" />
            <span className="font-semibold text-sm font-sans">Google Cloud</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 text-[10px] text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} TRUSTFLOW. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="#" className="hover:text-slate-800 transition-colors font-sans">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-800 transition-colors font-sans">Terms of Service</Link>
            <Link to="#" className="hover:text-slate-800 transition-colors font-sans">Security</Link>
            <Link to="#" className="hover:text-slate-800 transition-colors font-sans">Copyright</Link>
            <Link to="#" className="hover:text-slate-800 transition-colors font-sans">Cookies</Link>
            <Link to="#" className="hover:text-slate-800 transition-colors font-sans">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
