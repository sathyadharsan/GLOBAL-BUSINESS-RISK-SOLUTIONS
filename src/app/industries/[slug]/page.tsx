import { notFound } from "next/navigation";
import { industriesData } from "@/data/siteContent";
import { IndustriesDashboard } from "@/components/sections/IndustriesDashboard";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = industriesData[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.title} | Global Business Risk Solutions`,
    description: data.description,
  };
}

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = industriesData[slug];
  if (!data) notFound();
  return <IndustriesDashboard activeSlug={slug} />;
}
