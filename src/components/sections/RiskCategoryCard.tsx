import Link from "next/link";
import { cn } from "@/lib/utils";
import { riskCategories, risksData } from "@/data/risksData";

interface RiskCategoryCardProps {
  category: {
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    risks: {
      id: string;
      label: string;
      description: string;
    }[];
  };
}

export default function RiskCategoryCard({ category }: RiskCategoryCardProps) {
  const CatIcon = category.icon;

  return (
    <div className="border rounded-xl border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-primary text-white px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            {CatIcon && <CatIcon className="h-5 w-5" />}
          </div>
          <h3 className="text-lg font-bold text-white">{category.label}</h3>
        </div>
      </div>
      <div className="px-6 py-4 space-y-3">
        {category.risks.slice(0, 3).map((risk) => {
          const riskDetail = risksData[risk.id];
          const RiskIcon = riskDetail?.icon;
          return (
            <Link
              key={risk.id}
              href={`/risks/${risk.id}`}
              className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 hover:border-slate-200 transition-all duration-200"
            >
              <div className="flex-shrink-0">
                {RiskIcon ? (
                  <RiskIcon className="h-4 w-4 text-slate-400" />
                ) : (
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                )}
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-medium text-primary">{risk.label}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {risk.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-xs">→</span>
              </div>
            </Link>
          );
        })}
        {category.risks.length > 3 && (
          <Link
            href={`/risks/${category.id}`}
            className="block text-center text-sm font-medium text-primary hover:text-primary/80"
          >
            View all {category.risks.length} risks in this category →
          </Link>
        )}
      </div>
    </div>
  );
}
