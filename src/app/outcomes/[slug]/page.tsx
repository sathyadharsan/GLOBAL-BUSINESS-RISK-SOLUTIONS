import { notFound } from "next/navigation";
import { outcomesData, ALL_OUTCOME_SLUGS } from "@/data/outcomesData";
import { EnterpriseOutcomesLayout } from "@/components/sections/EnterpriseOutcomesLayout";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = outcomesData[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.title} | TRUSTFLOW`,
    description: data.overview.description,
  };
}

export function generateStaticParams() {
  return ALL_OUTCOME_SLUGS.map((slug) => ({ slug }));
}

export default async function OutcomePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = outcomesData[slug];
  if (!data) notFound();
  return <EnterpriseOutcomesLayout slug={slug} />;
}
