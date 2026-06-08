import { notFound } from "next/navigation";
import { offeringsData, CATEGORY_GROUPS } from "@/data/offeringsData";
import { solutionsData } from "@/data/siteContent";
import { EnterpriseOfferingLayout } from "@/components/sections/EnterpriseOfferingLayout";
import { DynamicLayout } from "@/components/layout/DynamicLayout";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Check offeringsData first
  const offeringData = offeringsData[slug];
  if (offeringData) {
    const category = CATEGORY_GROUPS[offeringData.category as keyof typeof CATEGORY_GROUPS];
    return {
      title: `${offeringData.title} | Global Business Risk Solutions`,
      description: offeringData.shortDescription || offeringData.executiveOverview,
    };
  }
  
  // Check solutionsData
  const solutionData = solutionsData[slug];
  if (solutionData) {
    return {
      title: `${solutionData.title} | Global Business Risk Solutions`,
      description: solutionData.description,
    };
  }
  
  return { title: "Not Found" };
}

export function generateStaticParams() {
  // Generate params for solution-related offerings
  const solutionSlugs = [
    "property-sfsp",
    "business-interruption",
    "contingent-bi",
    "equipment-breakdown",
    "cyber-first-party",
    "cyber-third-party",
    "cyber-regulatory-defense",
    "cyber-ransomware",
    "cyber-data-breach-response",
    "cyber-threat-intelligence",
    "cyber-vendor-risk",
    "d-o",
    "epli",
    "professional-indemnity-2",
    "tech-e-o",
    "product-liability-2",
    "product-recall",
    "trade-credit-2",
    "political-risk-2",
    "parametric-insurance",
    "captive-insurance",
    "ils-cat-bonds",
  ];
  
  // Also include solutionsData slugs
  const legacySlugs = Object.keys(solutionsData);
  
  // Merge and deduplicate
  const allSlugs = [...new Set([...solutionSlugs, ...legacySlugs])];
  
  return allSlugs.map((slug) => ({ slug }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Check offeringsData first (for enterprise solutions)
  const offeringData = offeringsData[slug];
  if (offeringData) {
    return <EnterpriseOfferingLayout offering={offeringData} />;
  }
  
  // Check solutionsData (for legacy solution pages)
  const solutionData = solutionsData[slug];
  if (solutionData) {
    return <DynamicLayout data={solutionData} />;
  }
  
  notFound();
}