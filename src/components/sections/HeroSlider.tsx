"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlide {
  title: React.ReactNode;
  subtitle: string;
  image: string;
  badge?: string;
  buttons?: {
    label: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link";
    className?: string;
    href?: string;
  }[];
}

export interface HeroSliderProps {
  slides: HeroSlide[];
  autoRotateInterval?: number;
}

export function HeroSlider({ slides, autoRotateInterval = 5000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [slides?.length, autoRotateInterval]);

  if (!slides || slides.length === 0) return null;

  const activeSlide = slides[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section id="hero" className="relative h-[65vh] min-h-[550px] w-full overflow-hidden bg-primary">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${activeSlide.image}')` }}
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {activeSlide.badge && (
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30 mb-4">
                {activeSlide.badge}
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 text-white font-serif">
              {activeSlide.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-10 leading-relaxed">
              {activeSlide.subtitle}
            </p>
            
            {activeSlide.buttons && activeSlide.buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                {activeSlide.buttons.map((btn, i) => {
                  if (btn.href) {
                    return (
                      <Link key={i} href={btn.href} className="inline-flex">
                        <Button
                          size="lg"
                          variant={btn.variant || "default"}
                          className={`text-base h-12 px-8 ${btn.className || ""}`}
                        >
                          {btn.label}
                        </Button>
                      </Link>
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
          </motion.div>
        </AnimatePresence>

        {slides.length > 1 && (
          <>
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
