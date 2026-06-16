import { notFound } from "next/navigation";
import { solutionsCategories } from "@/data/siteContent";
import { EnterpriseSolutionsLayout } from "@/components/sections/EnterpriseSolutionsLayout";
import { offeringsData } from "@/data/offeringsData";

export async function generateMetadata() {
  return {
    title: "Property & Asset Protection Solutions | TRUSTFLOW",
    description: "Comprehensive protection for buildings, machinery, inventory, and revenue streams against fire, natural disasters, theft, and operational perils.",
  };
}

export default function PropertyAssetProtectionPage() {
  const category = solutionsCategories["property-asset-protection"];
  if (!category) notFound();

  const relatedOfferings = category.solutions
    .map(slug => offeringsData[slug])
    .filter(Boolean);

  return <EnterpriseSolutionsLayout category={category} relatedOfferings={relatedOfferings} />;
}