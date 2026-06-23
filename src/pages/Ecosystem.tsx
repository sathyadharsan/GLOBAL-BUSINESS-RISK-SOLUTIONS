import { HeroSlider } from "@/components/sections/HeroSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Database, Cloud, LineChart, Globe, Zap } from "lucide-react";

export default function Ecosystem() {
  const categories = [
    {
      title: "Insurance & Reinsurance",
      description: "Global insurance and reinsurance ecosystem supporting enterprise risk transfer, underwriting intelligence, catastrophe modelling, and resilience programs.",
      icon: ShieldCheck,
      partners: ["Allianz", "AIG", "AXA", "Zurich", "Munich Re", "Swiss Re"]
    },
    {
      title: "Risk & Compliance",
      description: "Integrated governance, risk, compliance, and operational resilience ecosystem.",
      icon: LineChart,
      partners: ["MetricStream", "RSA Archer", "IBM OpenPages", "ServiceNow"]
    },
    {
      title: "Cyber & Digital Trust",
      description: "Cyber risk monitoring, threat intelligence, incident response, and digital resilience capabilities.",
      icon: Globe,
      partners: ["Palo Alto", "CrowdStrike", "Fortinet", "Microsoft Security"]
    },
    {
      title: "Climate & ESG",
      description: "Climate intelligence, ESG benchmarking, sustainability assessment, and disclosure frameworks.",
      icon: Zap,
      partners: ["MSCI ESG", "Sustainalytics", "EcoVadis", "CDP"]
    },
    {
      title: "AI & Risk Intelligence",
      description: "AI-native intelligence, predictive analytics, enterprise data platforms, and risk decision support.",
      icon: Database,
      partners: ["OpenAI", "NVIDIA", "Databricks", "Snowflake", "Palantir"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure supporting risk analytics, resilience platforms, and enterprise-grade security.",
      icon: Cloud,
      partners: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud"]
    }
  ];

  return (
    <div className="flex flex-col">
      <HeroSlider
        slides={[
          {
            title: "Trusted Global Ecosystem",
            subtitle: "Building resilience through strategic partnerships across insurance, risk intelligence, cyber security, climate risk, AI, and cloud infrastructure.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
          }
        ]}
      />

      {/* Ecosystem Categories */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ecosystem Categories</h2>
            <p className="text-lg text-slate-600">
              We collaborate with industry leaders to deliver comprehensive risk intelligence and resilience solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="h-full border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-slate-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {category.partners.map((partner, pIndex) => (
                        <span key={pIndex} className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-slate-100 text-slate-700">
                          {partner}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Strategic Alliance Statement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Partnering to Build the Future of Risk Intelligence</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
              TRUSTFLOW collaborates with leading global technology, insurance, cyber security, ESG, and cloud providers to deliver next-generation risk intelligence and resilience solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/solutions">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 border-slate-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
