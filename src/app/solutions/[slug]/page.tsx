import { notFound } from "next/navigation";
import { offeringsData } from "@/data/offeringsData";
import { solutionsData } from "@/data/siteContent";
import { EnterpriseOfferingLayout } from "@/components/sections/EnterpriseOfferingLayout";
import { EnterpriseSolutionDetailLayout } from "@/components/sections/EnterpriseSolutionDetailLayout";
import { StandardSolutionLayout } from "@/components/sections/StandardSolutionLayout";
import type { Metadata } from "next";

const ENTERPRISE_SOLUTION_SLUGS = [
  "global-program-architecture",
  "risk-engineering",
  "long-tenor-infrastructure",
  "tcor-analytics",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Check offeringsData first
  const offeringData = offeringsData[slug];
  if (offeringData) {
    return {
      title: `${offeringData.title} | TRUSTFLOW`,
      description: offeringData.shortDescription || offeringData.executiveOverview,
    };
  }
  
  // Check enterprise solution slugs
  if (ENTERPRISE_SOLUTION_SLUGS.includes(slug)) {
    const solutionData = solutionsData[slug];
    if (solutionData) {
      return {
        title: `${solutionData.title} | TRUSTFLOW`,
        description: solutionData.description,
      };
    }
  }
  
  // Check solutionsData
  const solutionData = solutionsData[slug];
  if (solutionData) {
    return {
      title: `${solutionData.title} | TRUSTFLOW`,
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
  
  // Check enterprise solution slugs (target 4 pages)
  if (ENTERPRISE_SOLUTION_SLUGS.includes(slug)) {
    return <EnterpriseSolutionDetailLayout slug={slug} />;
  }
  
  // Check solutionsData (for standard solution pages)
  const solutionData = solutionsData[slug];
  if (solutionData) {
    return <StandardSolutionLayout data={solutionData} />;
  }
  
  notFound();
}