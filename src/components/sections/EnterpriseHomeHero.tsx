import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CtaConfig {
  label: string;
  href: string;
}

interface EnterpriseHomeHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  primaryCta: CtaConfig;
  secondaryCta: CtaConfig;
  capabilityTags: string[];
}

export function EnterpriseHomeHero({ badge, title, subtitle, primaryCta, secondaryCta, capabilityTags }: EnterpriseHomeHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[88vh] flex items-center">
      <div className="relative container mx-auto px-6 md:px-8 py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <Badge
            variant="secondary"
            className="w-fit bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 text-sm font-bold tracking-widest uppercase px-4 py-1.5"
          >
            {badge}
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif leading-[1.05] text-[#0F172A]">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-medium">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link to={primaryCta.href}>
              <Button size="lg" className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-bold text-lg h-14 px-10">
                {primaryCta.label}
              </Button>
            </Link>
            <Link to={secondaryCta.href}>
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] font-bold text-lg h-14 px-10">
                {secondaryCta.label}
              </Button>
            </Link>
          </div>

          {capabilityTags.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center pt-8 border-t border-[#E2E8F0] mt-4 w-full max-w-3xl">
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
        </motion.div>
      </div>
    </section>
  );
}
