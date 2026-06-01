"use client";

import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CATEGORY_GROUPS } from "@/data/offeringsData";
import { ChevronRight } from "lucide-react";

const DISPLAY_CATEGORIES = [
  { key: "insurance-solutions", label: "Insurance Solutions" },
  { key: "cyber-digital-risk", label: "Cyber & Digital Risk" },
  { key: "warranty-guarantee", label: "Warranty & Guarantee" },
  { key: "alternative-risk-transfer", label: "Alternative Risk Transfer" },
  { key: "ai-contract-analytics", label: "AI Contract Analytics" },
  { key: "industry-programs", label: "Industry Programs" },
  { key: "advisory-consulting", label: "Advisory & Consulting" },
  { key: "technology-platforms", label: "Technology Platforms" },
  { key: "emerging-risks", label: "Emerging Risks" }
];

export function OfferingsCategoryMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Offerings</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[900px] p-6 bg-white">
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 mb-5">
            {DISPLAY_CATEGORIES.map((item) => {
              const category = CATEGORY_GROUPS[item.key as keyof typeof CATEGORY_GROUPS];
               
              return (
                <Link
                  key={item.key}
                  href={`/offerings/category/${item.key}`}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group"
                >
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                    {category?.label || item.label}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 ml-auto opacity-0 group-hover:opacity-100 text-blue-600 transition-opacity" />
                </Link>
              );
            })}
          </div>
          
          <div className="pt-4 border-t border-slate-200">
            <Link
              href="/offerings"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              View Full Offerings Marketplace →
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}