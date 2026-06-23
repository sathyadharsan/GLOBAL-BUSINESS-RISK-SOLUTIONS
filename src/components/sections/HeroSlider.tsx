

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
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

export function HeroSlider({ slides, autoRotateInterval = 5000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const interval = setInterval(() => {
      handleSlideChange((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [slides?.length, autoRotateInterval]);

  const handleSlideChange = (getNext: (prev: number) => number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(getNext);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToPrev = () => {
    handleSlideChange((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    handleSlideChange((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    handleSlideChange(() => index);
  };

  if (!slides || slides.length === 0) return null;

  const activeSlide = slides[currentIndex];

  return (
    <section id="hero" className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-slate-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-primary/80 to-slate-900/70" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <div
          key={`content-${currentIndex}`}
          className="max-w-4xl transition-all duration-500 ease-out"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? "translateY(10px)" : "translateY(0)",
          }}
        >
          {activeSlide.badge && (
            <span className="inline-block text-sm font-bold text-blue-300 uppercase tracking-widest bg-blue-600/20 px-4 py-1.5 rounded-full border border-blue-400/30 mb-6">
              {activeSlide.badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white font-serif">
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
                    <Link key={i} to={btn.href} className="inline-flex">
                      <Button
                        size="lg"
                        variant={btn.variant || "default"}
                        className={`text-base font-semibold h-12 px-8 shadow-lg ${btn.variant === "outline" ? "bg-transparent " : ""}${btn.className || ""}`}
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
                    className={`text-base font-semibold h-12 px-8 shadow-lg ${btn.variant === "outline" ? "bg-transparent " : ""}${btn.className || ""}`}
                  >
                    {btn.label}
                  </Button>
                );
              })}
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all z-30 border border-white/10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all z-30 border border-white/10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-10 bg-blue-400" : "w-2.5 bg-white/40 hover:bg-white/70"
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
