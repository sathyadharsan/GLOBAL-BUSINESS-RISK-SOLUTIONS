import { notFound } from "next/navigation";
import { industriesData } from "@/data/siteContent";
import { industriesExtendedData } from "@/data/industriesExtended";
import { IndustriesDashboard } from "@/components/sections/IndustriesDashboard";
import type { Metadata } from "next";

const allIndustriesData = { ...industriesData, ...industriesExtendedData };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = allIndustriesData[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.title} | TRUSTFLOW`,
    description: data.description,
  };
}

export function generateStaticParams() {
  return Object.keys(allIndustriesData).map((slug) => ({ slug }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = allIndustriesData[slug];
  if (!data) notFound();
  return <IndustriesDashboard activeSlug={slug} />;
}
