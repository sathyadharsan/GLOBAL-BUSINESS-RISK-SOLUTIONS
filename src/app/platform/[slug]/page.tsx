import { notFound } from "next/navigation";
import { platformData } from "@/data/platformData";
import { PlatformDetailLayout } from "@/components/sections/PlatformDetailLayout";

const SLUG_ALIASES: Record<string, string> = {
  "executive-dashboard": "risk-intelligence-aggregator",
  "claims-velocity": "risk-intelligence-aggregator",
  "policy-intelligence": "risk-intelligence-aggregator",
  "climate-analytics": "climate-scenario",
  "supply-chain-risk": "supply-chain-monitor",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolved = SLUG_ALIASES[slug] || slug;
  const data = platformData[resolved];
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
  const resolved = SLUG_ALIASES[slug] || slug;
  const platform = platformData[resolved];
  if (!platform) notFound();

  return (
    <PlatformDetailLayout slug={resolved} />
  );
}