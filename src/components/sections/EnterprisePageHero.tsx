import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
  stats?: { value: string; label: string }[];
}

function HeroCta({ cta, kind, accentColor }: { cta: CtaConfig; kind: "primary" | "secondary"; accentColor: string }) {
  const className =
    kind === "primary"
      ? "font-semibold text-base uppercase tracking-wide text-white border-0"
      : "bg-transparent border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] text-base uppercase tracking-wide";
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
  stats = [],
}: EnterprisePageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white border-b border-[#E2E8F0] min-h-[88vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 right-[-10%] w-[480px] h-[480px] rounded-full opacity-[0.06] blur-3xl"
          style={{ backgroundColor: accentColor }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#E2E8F0_1px,transparent_0)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="relative container mx-auto px-6 md:px-8 py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          {badge && (
            <Badge
              variant="secondary"
              className="w-fit text-sm font-semibold tracking-widest uppercase border"
              style={{ backgroundColor: `${accentColor}14`, color: accentColor, borderColor: `${accentColor}33` }}
            >
              {badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight font-serif leading-[1.1] text-[#0F172A]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-snug">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 pt-2">
              {primaryCta && <HeroCta cta={primaryCta} kind="primary" accentColor={accentColor} />}
              {secondaryCta && <HeroCta cta={secondaryCta} kind="secondary" accentColor={accentColor} />}
            </div>
          )}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-4 border-t border-[#E2E8F0]">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-bold font-serif" style={{ color: accentColor }}>
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
