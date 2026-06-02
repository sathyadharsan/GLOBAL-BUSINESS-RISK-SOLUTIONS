"use client";

import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CATEGORY_GROUPS } from "@/data/offeringsData";
import { ChevronRight } from "lucide-react";

export function OfferingsCategoryMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Offerings</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[900px] p-6 bg-white">
          <div className="grid grid-cols-4 gap-x-12 gap-y-2 mb-5">
            {/* Distribute categories evenly across 4 columns */}
            {Object.entries(CATEGORY_GROUPS).map(([key, category], index) => {
              const col = Math.floor(index / 3); // 3 items per column (9 items / 3 = 3 columns, but we want 4 columns)
              const colIndex = index % 4; // Distribute across 4 columns
              
              // We'll render all items, letting CSS grid handle the layout
              return (
                <Link
                  key={key}
                  href={`/offerings/category/${key}`}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group"
                >
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                    {category.label}
                  </span>
                </Link>
              );
            })}
            
            <Link href="/offerings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group">
              <ChevronRight className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">View All Offerings →</span>
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}