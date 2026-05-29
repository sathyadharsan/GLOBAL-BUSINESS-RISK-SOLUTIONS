import { notFound } from "next/navigation";
import { aboutUsData } from "@/data/siteContent";
import { AboutUsDashboard } from "@/components/sections/AboutUsDashboard";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = aboutUsData[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.title} | Global Business Risk Solutions`,
    description: data.description,
  };
}

export function generateStaticParams() {
  return Object.keys(aboutUsData).map((slug) => ({ slug }));
}

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = aboutUsData[slug];
  if (!data) notFound();
  return <AboutUsDashboard activeSlug={slug} />;
}
