import { notFound } from "next/navigation";
import { CATEGORY_GROUPS, getOfferingsByCategory } from "@/data/offeringsData";
import { CategoryClient } from "./client";

const CATEGORY_ALIASES: Record<string, string> = {
  "emerging-frontier-risk": "emerging-risks",
};

export function generateStaticParams() {
  const params: { category: string }[] = [];
  for (const key of Object.keys(CATEGORY_GROUPS)) {
    params.push({ category: key });
  }
  // Add aliased slugs
  for (const alias of Object.keys(CATEGORY_ALIASES)) {
    params.push({ category: alias });
  }
  return params;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const resolvedCategory = CATEGORY_ALIASES[category] || category;
  const categoryInfo = CATEGORY_GROUPS[resolvedCategory as keyof typeof CATEGORY_GROUPS];
  const offerings = getOfferingsByCategory(resolvedCategory);

  if (!categoryInfo) {
    notFound();
  }

  return <CategoryClient category={resolvedCategory} categoryInfo={categoryInfo} offerings={offerings} />;
}