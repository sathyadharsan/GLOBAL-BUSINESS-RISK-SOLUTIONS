import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroBackgroundProps {
  title: string;
  subtitle?: string;
  image: string;
  badges?: string[];
  buttons?: {
    label: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link";
    className?: string;
    href?: string;
  }[];
  breadcrumbs?: BreadcrumbItem[];
  capabilityTags?: string[];
  stats?: { val: string; label: string }[];
}

export function HeroBackground({
  title,
  subtitle,
  image,
  badges = [],
  buttons = [],
  breadcrumbs = [],
  capabilityTags = [],
  stats = [],
}: HeroBackgroundProps) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-white flex items-center">
      <div className="relative container mx-auto px-6 md:px-8 py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-6"
        >
          {/* Breadcrumb Navigation */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center justify-center gap-2 text-sm text-slate-500 font-medium">
              <Home className="h-3 w-3" />
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <ChevronRight className="h-3 w-3" />}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-[#2563EB] transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-[#0F172A]">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="text-sm font-bold tracking-widest uppercase px-4 py-1.5 bg-[#2563EB]/10 text-[#2563EB] rounded-full border border-[#2563EB]/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif leading-[1.05] text-[#0F172A]">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-medium">
              {subtitle}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              {buttons.map((btn, i) => {
                const className = `font-bold text-lg h-14 px-10 ${btn.className || ""}`;
                if (btn.href) {
                  return (
                    <a key={i} href={btn.href} className="inline-flex">
                      <Button size="lg" variant={btn.variant || "default"} className={className}>
                        {btn.label}
                      </Button>
                    </a>
                  );
                }
                return (
                  <Button key={i} size="lg" variant={btn.variant || "default"} className={className}>
                    {btn.label}
                  </Button>
                );
              })}
            </div>
          )}

          {capabilityTags.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center pt-8 mt-4 border-t border-[#E2E8F0] w-full max-w-3xl">
              {capabilityTags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-full bg-[#F8FAFC] text-slate-700 border border-[#E2E8F0]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {stats.length > 0 && (
            <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full max-w-3xl", capabilityTags.length > 0 ? "pt-6" : "pt-8 mt-4 border-t border-[#E2E8F0]")}>
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold font-serif text-[#2563EB]">
                    {stat.val}
                  </p>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
