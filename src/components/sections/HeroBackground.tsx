

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  stats?: { val: string; label: string }[];
}

export function HeroBackground({ 
  title, 
  subtitle, 
  image, 
  badges = [], 
  buttons = [],
  breadcrumbs = [],
  stats = [],
}: HeroBackgroundProps) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-white border-b border-[#E2E8F0] py-16 flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-[-10%] w-[480px] h-[480px] rounded-full bg-[#2563EB] opacity-[0.06] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Breadcrumb Navigation */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-[#0F172A] font-serif">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 mb-8">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="text-sm font-semibold px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-full border border-[#2563EB]/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {buttons.map((btn, i) => {
                if (btn.href) {
                  return (
                    <a key={i} href={btn.href} className="inline-flex">
                      <Button
                        size="lg"
                        variant={btn.variant || "default"}
                        className={`text-base h-12 px-8 ${btn.className || ""}`}
                      >
                        {btn.label}
                      </Button>
                    </a>
                  );
                }
                return (
                  <Button
                    key={i}
                    size="lg"
                    variant={btn.variant || "default"}
                    className={`text-base h-12 px-8 ${btn.className || ""}`}
                  >
                    {btn.label}
                  </Button>
                );
              })}
            </div>
          )}

          {/* Enterprise Statistics Strip */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#E2E8F0]">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-[#2563EB] font-serif mb-1">
                    {stat.val}
                  </p>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}