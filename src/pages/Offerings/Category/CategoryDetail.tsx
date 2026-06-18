import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CATEGORY_GROUPS, getOfferingsByCategory } from "@/data/offeringsData";
import { CategoryClient } from "./client";

const CATEGORY_ALIASES: Record<string, string> = {
  "emerging-frontier-risk": "emerging-risks",
};

export default function CategoryPage() {
  const { category } = useParams();
  if (!category) return <Navigate to="/404" replace />;
  const resolvedCategory = CATEGORY_ALIASES[category] || category;
  const categoryInfo = CATEGORY_GROUPS[resolvedCategory as keyof typeof CATEGORY_GROUPS];
  const offerings = getOfferingsByCategory(resolvedCategory);

  if (!categoryInfo) {
    return <Navigate to="/404" replace />;
  }

  return <CategoryClient category={resolvedCategory} categoryInfo={categoryInfo} offerings={offerings} />;
}