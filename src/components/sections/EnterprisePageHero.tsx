import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";

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
      ? "font-bold text-lg h-14 px-10 text-white border-0 rounded-full shadow-md transition-all"
      : "bg-white/70 backdrop-blur-sm border-slate-200 text-slate-800 hover:bg-slate-50 font-bold text-lg h-14 px-10 rounded-full transition-all";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  const path = location.pathname.toLowerCase();
  const titleText = typeof title === "string" ? title.toLowerCase() : "";
  const badgeText = badge ? badge.toLowerCase() : "";
  const searchStr = `${path} ${titleText} ${badgeText}`;

  let imagePool = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", // Skyline
    "https://images.unsplash.com/photo-1521791136364-7286853f535b?auto=format&fit=crop&q=80&w=1200", // Global Map
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200", // Team
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"  // Office lobby
  ];

  if (
    searchStr.includes("cyber") ||
    searchStr.includes("digital") ||
    searchStr.includes("tech") ||
    searchStr.includes("intel") ||
    searchStr.includes("security") ||
    searchStr.includes("breach") ||
    searchStr.includes("platform") ||
    searchStr.includes("software")
  ) {
    imagePool = [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200", // Server rack
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200", // Net
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200", // Cybersecurity
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"  // Tech
    ];
  } else if (
    searchStr.includes("financial") ||
    searchStr.includes("transaction") ||
    searchStr.includes("directors") ||
    searchStr.includes("liability") ||
    searchStr.includes("governance") ||
    searchStr.includes("ma-risk") ||
    searchStr.includes("crime") ||
    searchStr.includes("credit") ||
    searchStr.includes("legal") ||
    searchStr.includes("officers") ||
    searchStr.includes("d-o")
  ) {
    imagePool = [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200", // Boardroom
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200", // Financial
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200", // Work
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200"  // Global corporate
    ];
  } else if (
    searchStr.includes("property") ||
    searchStr.includes("energy") ||
    searchStr.includes("manufacturing") ||
    searchStr.includes("industrial") ||
    searchStr.includes("cargo") ||
    searchStr.includes("marine") ||
    searchStr.includes("recall") ||
    searchStr.includes("utilities") ||
    searchStr.includes("construction") ||
    searchStr.includes("transport") ||
    searchStr.includes("logistics") ||
    searchStr.includes("infrastructure") ||
    searchStr.includes("asset") ||
    searchStr.includes("protection")
  ) {
    imagePool = [
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200", // Solar energy
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200", // Cargo
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200", // Robotics
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"  // Logistics
    ];
  }

  const slides = [
    {
      badge: badge,
      title: title,
      subtitle: subtitle || description || "",
      image: imagePool[0]
    },
    {
      badge: badge || "Enterprise Intelligence",
      title: (
        <>
          AI-Powered Diagnostics<br />
          <span style={{ color: accentColor }}>& Predictive Analytics</span>
        </>
      ),
      subtitle: "Leverage proprietary machine learning models and historical databases to identify exposures early.",
      image: imagePool[1]
    },
    {
      badge: badge || "Global Placement",
      title: (
        <>
          Multinational Placement<br />
          <span style={{ color: accentColor }}>& Structured Capacities</span>
        </>
      ),
      subtitle: "Access global insurance markets and alternative risk financing structures across 150+ countries.",
      image: imagePool[2]
    },
    {
      badge: badge || "Claims Advocacy",
      title: (
        <>
          Dedicated Claims Desk<br />
          <span style={{ color: accentColor }}>& Rapid Loss Recovery</span>
        </>
      ),
      subtitle: "End-to-end representation from notification to final payout to minimize operational interruptions.",
      image: imagePool[3]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentIndex];

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[85vh] flex items-center">
      {/* Background Image Slide with Fade Mask */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-right lg:bg-right-top"
            style={{ backgroundImage: `url(${activeSlide.image})` }}
          />
        </AnimatePresence>
        {/* Gradient Mask to fade into white */}
        <div
          className="absolute inset-0 bg-white"
          style={{
            background: "linear-gradient(90deg, #ffffff 30%, rgba(255, 255, 255, 0.85) 55%, rgba(255, 255, 255, 0.15) 100%)",
          }}
        />
        {/* Ambient Blur Bubbles overlay */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-30">
          <div className="absolute top-12 left-[10%] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute bottom-16 right-[15%] h-96 w-96 rounded-full bg-violet-400/20 blur-3xl" />
        </div>
      </div>

      <div className="relative container mx-auto px-6 md:px-8 py-16 max-w-[1400px] z-10">
        <div className="flex flex-col items-start text-left space-y-8 max-w-3xl">
          {activeSlide.badge && (
            <div key={`badge-${currentIndex}`}>
              <Badge
                variant="secondary"
                className="w-fit text-xs font-bold tracking-widest uppercase border px-4 py-1.5 rounded-full"
                style={{ backgroundColor: `${accentColor}14`, color: accentColor, borderColor: `${accentColor}33` }}
              >
                {activeSlide.badge}
              </Badge>
            </div>
          )}

          <div key={`title-${currentIndex}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7.5xl font-extrabold tracking-tight font-serif leading-[1.08] text-[#0F172A]">
              {activeSlide.title}
            </h1>
          </div>

          <div key={`subtitle-${currentIndex}`} className="max-w-2xl">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              {activeSlide.subtitle}
            </p>
          </div>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 justify-start pt-2">
              {primaryCta && <HeroCta cta={primaryCta} kind="primary" accentColor={accentColor} />}
              {secondaryCta && <HeroCta cta={secondaryCta} kind="secondary" accentColor={accentColor} />}
            </div>
          )}

          {capabilityTags.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-start pt-8 border-t border-slate-100 mt-4 w-full max-w-3xl">
              {capabilityTags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-slate-50 text-slate-600 border border-slate-100 hover:border-blue-500/30 hover:bg-blue-50/50 hover:text-blue-600 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {stats.length > 0 && (
            <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full max-w-3xl", capabilityTags.length > 0 ? "pt-6" : "pt-8 mt-4 border-t border-slate-100")}>
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold font-serif" style={{ color: accentColor }}>
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Left/Right Controls */}
      <button
        onClick={goToPrev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all z-20 border border-slate-100 hover:scale-105 active:scale-95 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all z-20 border border-slate-100 hover:scale-105 active:scale-95 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors" />
      </button>

      {/* Bottom Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-10 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
