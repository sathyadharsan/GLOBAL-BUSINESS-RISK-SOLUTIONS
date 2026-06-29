import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  const path = location.pathname.toLowerCase();
  const searchStr = `${path} ${title.toLowerCase()} ${badges.join(" ").toLowerCase()}`;

  let imagePool = [
    image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", // Skyline
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
      image || "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
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
    searchStr.includes("marketplace") ||
    searchStr.includes("offering")
  ) {
    imagePool = [
      image || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200"
    ];
  }

  const slides = [
    {
      badges: badges,
      title: title,
      subtitle: subtitle || "",
      image: imagePool[0]
    },
    {
      badges: badges.length > 0 ? badges : ["Diagnostics"],
      title: "AI-Powered Risk Analysis & Analytics Tools",
      subtitle: "Leverage advanced machine learning engines and diagnostic scoring models to identify balance sheet exposures.",
      image: imagePool[1]
    },
    {
      badges: badges.length > 0 ? badges : ["Placement"],
      title: "Multinational Brokerage & Program Structuring",
      subtitle: "Optimize your corporate risk transfer through captive insurance integration and direct global capacity backing.",
      image: imagePool[2]
    },
    {
      badges: badges.length > 0 ? badges : ["Advocacy"],
      title: "Fierce Claims Advocacy & Technical Representation",
      subtitle: "Secure rapid settlements and operational loss recovery managed directly by senior advisory specialists.",
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
          {/* Breadcrumb Navigation */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <Home className="h-3 w-3" />
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <ChevronRight className="h-3 w-3" />}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-blue-600 transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-slate-800">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {activeSlide.badges.length > 0 && (
            <div key={`badges-${currentIndex}`} className="flex flex-wrap gap-2">
              {activeSlide.badges.map((badge, i) => (
                <span
                  key={i}
                  className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full border border-blue-600/20"
                >
                  {badge}
                </span>
              ))}
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

          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-start pt-2">
              {buttons.map((btn, i) => {
                const buttonClass = cn(
                  btn.variant === "outline"
                    ? "bg-white/70 backdrop-blur-sm border-slate-200 text-slate-800 hover:bg-slate-50 font-bold text-lg h-14 px-10 rounded-full transition-all"
                    : "bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg h-14 px-10 rounded-full shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/25 transition-all"
                );
                if (btn.href) {
                  return (
                    <a key={i} href={btn.href} className="inline-flex">
                      <Button size="lg" variant={btn.variant || "default"} className={buttonClass}>
                        {btn.label}
                      </Button>
                    </a>
                  );
                }
                return (
                  <Button key={i} size="lg" variant={btn.variant || "default"} className={buttonClass}>
                    {btn.label}
                  </Button>
                );
              })}
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
                  <p className="text-3xl md:text-4xl font-bold font-serif text-blue-600">
                    <AnimatedCounter value={stat.val} />
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
