import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { platformData } from "@/data/platformData";
import { PlatformDetailLayout } from "@/components/sections/PlatformDetailLayout";

const SLUG_ALIASES: Record<string, string> = {
  "executive-dashboard": "risk-intelligence-aggregator",
  "claims-velocity": "risk-intelligence-aggregator",
  "policy-intelligence": "risk-intelligence-aggregator",
  "climate-analytics": "climate-scenario",
  "supply-chain-risk": "supply-chain-monitor",
};

export default function PlatformPage() {
  const { slug } = useParams();
  if (!slug) return <Navigate to="/404" replace />;
  const resolved = SLUG_ALIASES[slug] || slug;
  const platform = platformData[resolved];
  if (!platform) return <Navigate to="/404" replace />;

  return (
    <PlatformDetailLayout slug={resolved} />
  );
}