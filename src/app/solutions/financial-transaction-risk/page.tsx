import { notFound } from "next/navigation";
import { solutionsCategories } from "@/data/siteContent";
import { EnterpriseSolutionsLayout } from "@/components/sections/EnterpriseSolutionsLayout";
import { offeringsData } from "@/data/offeringsData";

export async function generateMetadata() {
  return {
    title: "Financial & Transaction Risk Solutions | TRUSTFLOW",
    description: "Coverage for accounts receivable, contractual guarantees, transaction risk, and political uncertainty in emerging markets.",
  };
}

export default function FinancialTransactionRiskPage() {
  const category = solutionsCategories["financial-transaction-risk"];
  if (!category) notFound();

  const relatedOfferings = category.solutions
    .map(slug => offeringsData[slug])
    .filter(Boolean);

  return <EnterpriseSolutionsLayout category={category} relatedOfferings={relatedOfferings} />;
}