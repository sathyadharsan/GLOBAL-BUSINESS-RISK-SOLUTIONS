

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlide {
  title: React.ReactNode;
  subtitle: string;
  image: string;
  badge?: string;
  buttons?: {
    label: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "hero";
    className?: string;
    href?: string;
  }[];
}

export interface HeroSliderProps {
  slides: HeroSlide[];
  autoRotateInterval?: number;
}

export function HeroSlider({ slides: propSlides, autoRotateInterval = 6000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  // Handle dynamic padding up to 4 slides
  const slides = [...propSlides];
  const path = location.pathname.toLowerCase();
  const searchStr = `${path} ${slides.map(s => typeof s.title === "string" ? s.title.toLowerCase() : "").join(" ")}`;

  let imagePool = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", // Skyline
    "https://images.unsplash.com/photo-1521791136364-7286853f535b?auto=format&fit=crop&q=80&w=1200", // Global Map
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200", // Team
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"  // Office lobby
  ];

  if (searchStr.includes("ecosystem") || searchStr.includes("partner") || searchStr.includes("network")) {
    imagePool = [
      slides[0]?.image || "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1521791136364-7286853f535b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
    ];
  } else if (searchStr.includes("insight") || searchStr.includes("article") || searchStr.includes("regulatory") || searchStr.includes("publication")) {
    imagePool = [
      slides[0]?.image || "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200"
    ];
  }

  const extraSlides = [
    {
      badge: "Enterprise Intelligence",
      title: "AI-Powered Diagnostics & Insights",
      subtitle: "Leverage advanced analytics engines and diagnostic scoring models to audit exposures.",
      image: imagePool[1]
    },
    {
      badge: "Global Placement",
      title: "Multinational Placement & Program Structuring",
      subtitle: "Access global insurance markets and alternative risk financing structures across 150+ countries.",
      image: imagePool[2]
    },
    {
      badge: "Claims Advocacy",
      title: "Technical Advocacy & Swift Recovery Desk",
      subtitle: "Secure rapid settlements and operational loss recovery managed by senior advisory specialists.",
      image: imagePool[3]
    }
  ];

  while (slides.length < 4) {
    const extra = extraSlides[slides.length - 1];
    slides.push({
      badge: extra.badge,
      title: extra.title,
      subtitle: extra.subtitle,
      image: extra.image,
      buttons: propSlides[0]?.buttons || [
        { label: "Book Consultation", href: "/contact" }
      ]
    });
  }

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [slides.length, autoRotateInterval]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) return null;

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
            style={{ backgroundImage: `url(${activeSlide.image || imagePool[0]})` }}
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
                className="w-fit bg-blue-600/10 text-blue-600 border border-blue-600/20 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
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

          {activeSlide.buttons && activeSlide.buttons.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-start pt-2">
              {activeSlide.buttons.map((btn, i) => {
                const buttonClass = cn(
                  btn.variant === "outline"
                    ? "bg-white/70 backdrop-blur-sm border-slate-200 text-slate-800 hover:bg-slate-50 font-bold text-lg h-14 px-10 rounded-full transition-all"
                    : "bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg h-14 px-10 rounded-full shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/25 transition-all"
                );
                if (btn.href) {
                  return (
                    <Link key={i} to={btn.href} className="inline-flex">
                      <Button size="lg" variant={btn.variant === "outline" ? "outline" : "default"} className={buttonClass}>
                        {btn.label}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button key={i} size="lg" variant={btn.variant === "outline" ? "outline" : "default"} className={buttonClass}>
                    {btn.label}
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Left/Right Controls */}
      {slides.length > 1 && (
        <>
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
        </>
      )}
    </section>
  );
}
