import { notFound } from "next/navigation";
import { solutionsCategories } from "@/data/siteContent";
import { EnterpriseSolutionsLayout } from "@/components/sections/EnterpriseSolutionsLayout";
import { offeringsData } from "@/data/offeringsData";

export async function generateMetadata() {
  return {
    title: "Emerging Risk Solutions | TRUSTFLOW",
    description: "Parametric triggers, AI liability, space insurance, climate risk, and cyber-physical convergence addressing novel enterprise exposures.",
  };
}

export default function EmergingRiskSolutionsPage() {
  const category = solutionsCategories["emerging-risk-solutions"];
  if (!category) notFound();

  const relatedOfferings = category.solutions
    .map(slug => offeringsData[slug])
    .filter(Boolean);

  return <EnterpriseSolutionsLayout category={category} relatedOfferings={relatedOfferings} />;
}