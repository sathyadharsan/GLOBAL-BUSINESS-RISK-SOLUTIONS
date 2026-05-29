import { notFound } from "next/navigation";
import { useCasesData } from "@/data/siteContent";
import { UseCasesDashboard } from "@/components/sections/UseCasesDashboard";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = useCasesData[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.title} | Global Business Risk Solutions`,
    description: data.description,
  };
}

export function generateStaticParams() {
  return Object.keys(useCasesData).map((slug) => ({ slug }));
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = useCasesData[slug];
  if (!data) notFound();
  return <UseCasesDashboard activeSlug={slug} />;
}
