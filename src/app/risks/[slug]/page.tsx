import { notFound } from "next/navigation";
import { risksData, riskCategories } from "@/data/risksData";
import { RiskDetail } from "@/components/sections/RiskDetail";
import RiskIntelligenceCenter from "@/components/sections/RiskIntelligenceCenter";
import RiskDiagnostic from "@/components/sections/RiskDiagnostic";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  if (slug === "risk-intelligence-center") {
    return {
      title: "Risk Intelligence Center | Global Business Risk Solutions",
      description: "Premium dashboard for monitoring top enterprise, cyber, regulatory and climate risks",
    };
  }
  
  if (slug === "risk-diagnostic") {
    return {
      title: "Risk Diagnostic | Global Business Risk Solutions",
      description: "Board-level risk dashboard with exposure analysis and coverage gaps",
    };
  }
  
  const isCategory = riskCategories[slug];
  if (isCategory) {
    return {
      title: `${isCategory.label} | Global Business Risk Solutions`,
      description: `Explore ${isCategory.risks.length} risks in ${isCategory.label}`,
    };
  }
  const isRisk = risksData[slug];
  if (isRisk) {
    return {
      title: `${isRisk.label} | Global Business Risk Solutions`,
      description: isRisk.description,
    };
  }
  return { title: "Not Found" };
}

export function generateStaticParams() {
  const params: { slug: string }[] = [
    { slug: "risk-intelligence-center" },
    { slug: "risk-diagnostic" },
  ];
  for (const slug of Object.keys(riskCategories)) {
    params.push({ slug });
  }
  for (const slug of Object.keys(risksData)) {
    params.push({ slug });
  }
  return params;
}

export default async function RiskPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "risk-intelligence-center") {
    return <RiskIntelligenceCenter />;
  }

  if (slug === "risk-diagnostic") {
    return <RiskDiagnostic />;
  }

  const isCategory = riskCategories[slug];

  if (!isCategory && !risksData[slug]) {
    notFound();
  }

  return <RiskDetail slug={slug} />;
}
