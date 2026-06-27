import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CtaConfig {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface EnterprisePageHeroProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  primaryCta?: CtaConfig;
  secondaryCta?: CtaConfig;
  accentColor?: string;
  capabilityTags?: string[];
  stats?: { value: string; label: string }[];
}

function HeroCta({ cta, kind, accentColor }: { cta: CtaConfig; kind: "primary" | "secondary"; accentColor: string }) {
  const className =
    kind === "primary"
      ? "font-bold text-lg h-14 px-10 text-white border-0"
      : "bg-transparent border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] font-bold text-lg h-14 px-10";
  const style = kind === "primary" ? { backgroundColor: accentColor } : undefined;

  const button = (
    <Button size="lg" variant={kind === "secondary" ? "outline" : "default"} className={className} style={style} onClick={cta.href ? undefined : cta.onClick}>
      {cta.label}
    </Button>
  );

  return cta.href ? <Link to={cta.href}>{button}</Link> : button;
}

export function EnterprisePageHero({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  accentColor = "#2563EB",
  capabilityTags = [],
  stats = [],
}: EnterprisePageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[88vh] flex items-center">
      <div className="relative container mx-auto px-6 md:px-8 py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-6"
        >
          {badge && (
            <Badge
              variant="secondary"
              className="w-fit text-sm font-bold tracking-widest uppercase border px-4 py-1.5"
              style={{ backgroundColor: `${accentColor}14`, color: accentColor, borderColor: `${accentColor}33` }}
            >
              {badge}
            </Badge>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif leading-[1.05] text-[#0F172A]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              {primaryCta && <HeroCta cta={primaryCta} kind="primary" accentColor={accentColor} />}
              {secondaryCta && <HeroCta cta={secondaryCta} kind="secondary" accentColor={accentColor} />}
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
                  <p className="text-3xl md:text-4xl font-bold font-serif" style={{ color: accentColor }}>
                    {stat.value}
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
