"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  stats?: { val: string; label: string }[];
}

export function HeroBackground({ 
  title, 
  subtitle, 
  image, 
  badges = [], 
  buttons = [],
  breadcrumbs = [],
  stats = [],
}: HeroBackgroundProps) {
  return (
    <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-primary">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Breadcrumb Navigation */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-xs text-blue-300 mb-6 font-medium">
              <Home className="h-3 w-3" />
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <ChevronRight className="h-3 w-3" />}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white font-serif">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 mb-8">
              {badges.map((badge, i) => (
                <span 
                  key={i} 
                  className="text-xs font-semibold px-4 py-2 bg-white/10 rounded-full border border-white/10"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {buttons.map((btn, i) => {
                if (btn.href) {
                  return (
                    <a key={i} href={btn.href} className="inline-flex">
                      <Button
                        size="lg"
                        variant={btn.variant || "default"}
                        className={`text-base h-12 px-8 ${btn.className || ""}`}
                      >
                        {btn.label}
                      </Button>
                    </a>
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

          {/* Enterprise Statistics Strip */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-blue-400 font-serif mb-1">
                    {stat.val}
                  </p>
                  <p className="text-xs text-gray-300 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}