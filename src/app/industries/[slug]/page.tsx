import { notFound } from "next/navigation";
import { industriesData } from "@/data/siteContent";
import { INDUSTRIES_DATA_ENHANCED } from "@/data/industryData";
import { EnterpriseIndustryLayout } from "@/components/sections/EnterpriseIndustryLayout";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.title} | TRUSTFLOW Industry Risk Architecture`,
    description: industry.description,
  };
}

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData[slug];
  
  if (!industry) notFound();

  const industrySpecificData = INDUSTRIES_DATA_ENHANCED[slug];

  return <EnterpriseIndustryLayout 
    industry={industrySpecificData || { slug, risks: [], solutions: [], caseStudies: [] }} 
    industryTitle={industry.title}
    industrySubtitle={industry.description}
  />;
}