import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      badge: badge,
      title: title,
      subtitle: subtitle,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
    },
    {
      badge: "Cyber Security & Resilience",
      title: (
        <>
          Advanced Cyber Risk<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Architecture & Intelligence</span>
        </>
      ),
      subtitle: "Secure your digital footprint, intellectual property, and cloud operations with threat-informed advisory and transfer frameworks.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      badge: "Alternative Risk Transfer",
      title: (
        <>
          Innovative Structured Capital<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">& Captive Solutions</span>
        </>
      ),
      subtitle: "Optimize your Total Cost of Risk through parametric structures, captives, and risk-sharing frameworks.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200"
    },
    {
      badge: "Industrial & Supply Chain",
      title: (
        <>
          Resilient Logistics &<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Asset Protection Networks</span>
        </>
      ),
      subtitle: "Protect your physical assets, heavy machinery, cargo, and global supply lines from unforeseen interruptions.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
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
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-40">
          <div className="absolute top-12 left-[10%] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute bottom-16 right-[15%] h-96 w-96 rounded-full bg-violet-400/20 blur-3xl" />
        </div>
      </div>

      <div className="relative container mx-auto px-6 md:px-8 py-16 max-w-[1400px] z-10">
        <div className="flex flex-col items-start text-left space-y-8 max-w-3xl">
          <div key={`badge-${currentIndex}`}>
            <Badge
              variant="secondary"
              className="w-fit bg-blue-600/10 text-blue-600 border border-blue-600/20 text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
            >
              {activeSlide.badge}
            </Badge>
          </div>

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

          <div className="flex flex-wrap gap-4 justify-start pt-2">
            <Link to={primaryCta.href}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg h-14 px-10 rounded-full shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/25 transition-all">
                {primaryCta.label}
              </Button>
            </Link>
            <Link to={secondaryCta.href}>
              <Button size="lg" variant="outline" className="border-slate-200 text-slate-800 hover:bg-slate-50 bg-white/70 backdrop-blur-sm font-bold text-lg h-14 px-10 rounded-full transition-all">
                {secondaryCta.label}
              </Button>
            </Link>
          </div>

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
