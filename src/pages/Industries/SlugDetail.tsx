import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { industriesData } from "@/data/siteContent";
import { INDUSTRIES_DATA_ENHANCED } from "@/data/industryData";
import { EnterpriseIndustryLayout } from "@/components/sections/EnterpriseIndustryLayout";

export default function IndustryPage() {
  const { slug } = useParams();
  
  if (!slug) return <Navigate to="/404" replace />;
  
  const industry = industriesData[slug];
  
  if (!industry) return <Navigate to="/404" replace />;

  const industrySpecificData = INDUSTRIES_DATA_ENHANCED[slug];

  return <EnterpriseIndustryLayout 
    industry={industrySpecificData || { slug, risks: [], solutions: [], caseStudies: [] }} 
    industryTitle={industry.title}
    industrySubtitle={industry.description}
  />;
}