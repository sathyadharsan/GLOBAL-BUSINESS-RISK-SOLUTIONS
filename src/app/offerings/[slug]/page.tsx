import { notFound } from "next/navigation";
import { offeringsData } from "@/data/offeringsData";
import { PremiumOfferingDetail } from "@/components/sections/PremiumOfferingDetail";

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
  return <PremiumOfferingDetail offering={data} />;
}