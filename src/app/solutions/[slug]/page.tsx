import { notFound } from "next/navigation";
import { solutionsData } from "@/data/siteContent";
import { SolutionsDashboard } from "@/components/sections/SolutionsDashboard";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = solutionsData[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.title} | Global Business Risk Solutions`,
    description: data.description,
  };
}

export function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({ slug }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = solutionsData[slug];
  if (!data) notFound();
  return <SolutionsDashboard activeSlug={slug} />;
}
