import { notFound } from "next/navigation";
import { platformData } from "@/data/platformData";
import { PlatformDetailLayout } from "@/components/sections/PlatformDetailLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = platformData[slug];
  if (!data) return { title: "Platform Not Found" };
  return {
    title: `${data.title} | TRUSTFLOW Platform Suite`,
    description: data.description.substring(0, 160) + "...",
  };
}

export function generateStaticParams() {
  return Object.keys(platformData).map((slug) => ({ slug }));
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = platformData[slug];
  if (!platform) notFound();

  return (
    <PlatformDetailLayout
      title={platform.title}
      subtitle={platform.subtitle}
      category={platform.category}
      color={platform.color}
      description={platform.description}
      features={platform.features}
      capabilities={platform.capabilities}
      businessBenefits={platform.businessBenefits}
      relatedModules={platform.relatedModules}
      useCases={platform.useCases}
    />
  );
}