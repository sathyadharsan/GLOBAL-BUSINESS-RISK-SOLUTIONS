export interface EnterpriseOfferingData {
  kpis?: Array<{ value: string; label: string }>;
  capabilities?: Array<{ title: string; desc: string; bullets: string[] }>;
  challengeCards?: Array<{ title: string; description: string; icon: string }>;
  coverageLayers?: Array<{ title: string; items: string[] }>;
  benefitCards?: Array<{ title: string; description: string }>;
  riskCards?: Array<{ title: string; description: string }>;
  platformCards?: Array<{ title: string; description: string }>;
  solutionCards?: Array<{ title: string; description: string }>;
  caseStudies?: Array<{ title: string; clientProfile: string; challenge: string; solution: string; outcome: string }>;
  diagnostics?: Array<{ title: string; description: string }>;
  industryVerticalTabs?: Array<{
    label: string;
    content: {
      industryChallenges: string[];
      industryRiskExposure: string[];
      recommendedOfferings: string[];
      relatedRisks: string[];
      relatedPlatforms: string[];
      industryBenefits: string[];
    };
  }>;
}
