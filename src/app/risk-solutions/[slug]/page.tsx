import { notFound } from "next/navigation";
import { offeringsData } from "@/data/offeringsData";
import { OfferingsDashboard } from "@/components/sections/OfferingsDashboard";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = offeringsData[slug];
  if (!data) return { title: "Not Found | TRUSTFLOW" };
  return {
    title: `${data.title} | TRUSTFLOW`,
    description: data.valueText.substring(0, 160) + "...",
  };
}

export function generateStaticParams() {
  return Object.keys(offeringsData).map((slug) => ({ slug }));
}

export default async function OfferingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = offeringsData[slug];
  if (!data) notFound();
  return <OfferingsDashboard activeSlug={slug} />;
}
