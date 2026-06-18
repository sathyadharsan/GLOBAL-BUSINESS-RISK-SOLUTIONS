import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { aboutUsData } from "@/data/siteContent";
import { AboutUsDashboard } from "@/components/sections/AboutUsDashboard";

export default function AboutUsPage() {
  const { slug } = useParams();
  if (!slug) return <Navigate to="/404" replace />;
  const data = aboutUsData[slug];
  if (!data) return <Navigate to="/404" replace />;
  return <AboutUsDashboard activeSlug={slug} />;
}