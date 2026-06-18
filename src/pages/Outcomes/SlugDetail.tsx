import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { outcomesData, ALL_OUTCOME_SLUGS } from "@/data/outcomesData";
import { EnterpriseOutcomesLayout } from "@/components/sections/EnterpriseOutcomesLayout";

export default function OutcomePage() {
  const { slug } = useParams();
  if (!slug) return <Navigate to="/404" replace />;
  const data = outcomesData[slug];
  if (!data) return <Navigate to="/404" replace />;
  return <EnterpriseOutcomesLayout slug={slug} />;
}