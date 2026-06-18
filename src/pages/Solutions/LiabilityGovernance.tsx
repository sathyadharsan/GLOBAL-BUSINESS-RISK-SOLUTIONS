import { Navigate } from 'react-router-dom';
import { solutionsCategories } from "@/data/siteContent";
import { EnterpriseSolutionsLayout } from "@/components/sections/EnterpriseSolutionsLayout";
import { offeringsData } from "@/data/offeringsData";

export default function LiabilityGovernancePage() {
  const category = solutionsCategories["liability-governance"];
  if (!category) return <Navigate to="/404" replace />;

  const relatedOfferings = category.solutions
    .map(slug => offeringsData[slug])
    .filter(Boolean);

  return <EnterpriseSolutionsLayout category={category} relatedOfferings={relatedOfferings} />;
}