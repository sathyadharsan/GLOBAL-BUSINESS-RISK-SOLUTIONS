import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { offeringsData } from "@/data/offeringsData";
import { solutionsData } from "@/data/siteContent";
import { EnterpriseOfferingLayout } from "@/components/sections/EnterpriseOfferingLayout";
import { EnterpriseSolutionDetailLayout } from "@/components/sections/EnterpriseSolutionDetailLayout";
import { StandardSolutionLayout } from "@/components/sections/StandardSolutionLayout";

const ENTERPRISE_SOLUTION_SLUGS = [
  "global-program-architecture",
  "risk-engineering",
  "long-tenor-infrastructure",
  "tcor-analytics",
];

export default function SolutionPage() {
  const { slug } = useParams();
  
  if (!slug) return <Navigate to="/404" replace />;
  
  const offeringData = offeringsData[slug];
  if (offeringData) {
    return <EnterpriseOfferingLayout offering={offeringData} />;
  }
  
  if (ENTERPRISE_SOLUTION_SLUGS.includes(slug)) {
    const solutionData = solutionsData[slug];
    if (solutionData) {
      return <EnterpriseSolutionDetailLayout slug={slug} />;
    }
  }
  
  const solutionData = solutionsData[slug];
  if (solutionData) {
    return <StandardSolutionLayout data={solutionData} />;
  }
  
  return <Navigate to="/404" replace />;
}