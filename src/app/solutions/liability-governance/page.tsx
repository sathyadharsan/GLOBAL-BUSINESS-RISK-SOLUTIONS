import { notFound } from "next/navigation";
import { solutionsCategories } from "@/data/siteContent";
import { EnterpriseSolutionsLayout } from "@/components/sections/EnterpriseSolutionsLayout";
import { offeringsData } from "@/data/offeringsData";

export async function generateMetadata() {
  return {
    title: "Liability & Governance Shield Solutions | TRUSTFLOW",
    description: "Protection against third-party claims, product liability, professional errors, board decisions, and evolving AI and cyber liabilities.",
  };
}

export default function LiabilityGovernancePage() {
  const category = solutionsCategories["liability-governance"];
  if (!category) notFound();

  const relatedOfferings = category.solutions
    .map(slug => offeringsData[slug])
    .filter(Boolean);

  return <EnterpriseSolutionsLayout category={category} relatedOfferings={relatedOfferings} />;
}