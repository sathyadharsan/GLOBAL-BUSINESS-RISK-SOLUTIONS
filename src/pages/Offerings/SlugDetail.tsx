import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { offeringsData } from "@/data/offeringsData";
import { PremiumOfferingDetail } from "@/components/sections/PremiumOfferingDetail";
import { EnterpriseOfferingLayout } from "@/components/sections/EnterpriseOfferingLayout";

export default function OfferingPage() {
  const { slug } = useParams();
  if (!slug) return <Navigate to="/404" replace />;
  const data = offeringsData[slug];
  if (!data) return <Navigate to="/404" replace />;

  const isEnterprise = ["insurance-solutions", "cyber-digital-risk", "warranty-guarantee", "alternative-risk-transfer", "industry-programs", "advisory-consulting", "technology-platforms", "emerging-risks", "ai-contract-analytics"].includes(data.category);

  if (isEnterprise) {
    return <EnterpriseOfferingLayout offering={data} />;
  }

  return <PremiumOfferingDetail offering={data} />;
}