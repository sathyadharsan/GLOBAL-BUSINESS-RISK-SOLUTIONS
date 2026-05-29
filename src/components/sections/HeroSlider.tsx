"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface HeroSlide {
  title: React.ReactNode;
  subtitle: string;
  image: string;
  buttons?: {
    label: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link";
    className?: string;
    href?: string;
  }[];
}

export interface HeroSliderProps {
  slides: HeroSlide[];
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // 6 seconds auto-play for premium reading pace
    return () => clearInterval(interval);
  }, [slides?.length]);

  if (!slides || slides.length === 0) return null;

  const activeSlide = slides[currentIndex];

  return (
    <section id="hero" className="relative h-[65vh] min-h-[550px] w-full overflow-hidden bg-primary">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0, scale: 1.03 }}
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
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
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
          <div className="absolute bottom-8 left-4 md:left-8 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
