import { notFound } from "next/navigation";
import { solutionsCategories } from "@/data/siteContent";
import { EnterpriseSolutionsLayout } from "@/components/sections/EnterpriseSolutionsLayout";
import { offeringsData } from "@/data/offeringsData";

export async function generateMetadata() {
  return {
    title: "Alternative Risk Transfer Solutions | TRUSTFLOW",
    description: "Insurance-linked securities, captive insurance, and self-insurance solutions for enterprises seeking control over premium volatility and risk retention.",
  };
}

export default function AlternativeRiskTransferPage() {
  const category = solutionsCategories["alternative-risk-transfer"];
  if (!category) notFound();

  const relatedOfferings = category.solutions
    .map(slug => offeringsData[slug])
    .filter(Boolean);

  return <EnterpriseSolutionsLayout category={category} relatedOfferings={relatedOfferings} />;
}