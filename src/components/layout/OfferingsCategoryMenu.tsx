

import { Link } from 'react-router-dom';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CATEGORY_GROUPS } from "@/data/offeringsData";
import { ChevronRight } from "lucide-react";

export function OfferingsCategoryMenu() {
  const categories = Object.keys(CATEGORY_GROUPS) as (keyof typeof CATEGORY_GROUPS)[];
  
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Offerings</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[900px] p-6 bg-white">
          <div className="grid grid-cols-4 gap-x-8 gap-y-3 mb-5">
            {categories.map((key) => {
              const category = CATEGORY_GROUPS[key];
              return (
                <Link
                  key={key}
                  to={`/offerings/category/${key}`}
                  className="flex items-start gap-2.5 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all group"
                >
                  <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {category.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="pt-4 border-t border-slate-200">
            <Link to="/offerings" className="text-base font-semibold text-blue-600 hover:text-blue-800 transition-colors">
              View All Offerings →
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}