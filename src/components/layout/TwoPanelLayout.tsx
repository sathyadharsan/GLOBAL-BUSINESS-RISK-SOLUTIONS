"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export interface SidebarGroup {
  label: string;
  items: SidebarItem[];
}

interface TwoPanelLayoutProps {
  groups: SidebarGroup[];
  activeId: string;
  onItemSelect?: (id: string) => void;
  heroTitle: string;
  heroSubtitle: string;
  heroBadges?: string[];
  children: React.ReactNode;
}

export function TwoPanelLayout({
  groups,
  activeId,
  onItemSelect,
  heroTitle,
  heroSubtitle,
  heroBadges = [],
  children
}: TwoPanelLayoutProps) {
  const [active, setActive] = useState(activeId);
  const mobileTabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActive(activeId);
  }, [activeId]);

  const handleSelect = (id: string) => {
    setActive(id);
    if (onItemSelect) {
      onItemSelect(id);
    }

    // Scroll mobile tabs into view when selected
    const activeEl = document.getElementById(`mobile-tab-${id}`);
    if (activeEl && mobileTabRef.current) {
      const container = mobileTabRef.current;
      const scrollLeft = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-slate-50">
      
      {/* Mobile Pinned Tabs Strip */}
      <div 
        ref={mobileTabRef}
        className="md:hidden sticky top-20 z-30 flex overflow-x-auto gap-2 py-3 px-4 bg-white border-b shadow-sm scrollbar-none"
      >
        {groups.flatMap(g => g.items).map((item) => {
          const Icon = item.icon;
          const isSelected = active === item.id;
          return (
            <button
              key={item.id}
              id={`mobile-tab-${item.id}`}
              onClick={() => handleSelect(item.id)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all border shrink-0",
                isSelected
                  ? "bg-blue-50 border-blue-200 text-blue-600 shadow-sm"
                  : "bg-gray-50 border-gray-100 text-muted-foreground hover:bg-gray-100"
              )}
            >
              {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Core Layout: Sidebar + Right Content */}
      <div className="flex w-full flex-1">
        
        {/* LEFT SIDEBAR (Sticky, Fixed width) */}
        <aside className="hidden md:block w-[280px] flex-shrink-0 bg-white border-r border-slate-200 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto p-5 select-none">
          <div className="space-y-6">
            {groups.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {group.label}
                </h4>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isSelected = active === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.id)}
                        className={cn(
                          "w-full flex items-center justify-between text-left text-[13px] px-3.5 py-2.5 rounded-md font-medium transition-all group/item",
                          isSelected
                            ? "bg-blue-50 text-blue-700 border-l-[3px] border-blue-600 pl-2.5 font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-[3px] border-transparent"
                        )}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {Icon && (
                            <Icon 
                              className={cn(
                                "w-4 h-4 shrink-0 transition-colors",
                                isSelected ? "text-blue-600" : "text-slate-400 group-hover/item:text-slate-600"
                              )} 
                            />
                          )}
                          <span className="truncate">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {item.badge && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                              {item.badge}
                            </span>
                          )}
                          <ChevronRight className={cn(
                            "w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-all",
                            isSelected ? "opacity-100 text-blue-600" : "text-slate-400"
                          )} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* RIGHT CONTENT PANEL (Scrollable, fills remaining width) */}
        <main className="flex-1 min-w-0 overflow-y-auto px-4 py-8 md:px-10 bg-slate-50">
          
          {/* Page Hero Strip */}
          <div className="mb-10 p-8 bg-primary rounded-2xl text-white relative overflow-hidden shadow-sm border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
            <div className="relative z-10 max-w-4xl space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-serif leading-tight">
                {heroTitle}
              </h1>
              <p className="text-base text-gray-300 max-w-3xl leading-relaxed">
                {heroSubtitle}
              </p>
              {heroBadges.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {heroBadges.map((badge, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold px-3 py-1 bg-white/10 hover:bg-white/15 rounded-full border border-white/10 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Children: content and cards */}
          <div className="space-y-8">
            {children}
          </div>

        </main>

      </div>
    </div>
  );
}
