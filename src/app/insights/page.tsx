import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroSlider } from "@/components/sections/HeroSlider";

export default function Insights() {
  const images = [
    "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop", // Reading/Books/Writing
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", // Professional/Suit
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"  // Data/Charts
  ];

  const insights = [
    { type: "Whitepaper", title: "Navigating the New SEC Cyber Disclosure Rules", date: "October 2024", desc: "A comprehensive guide for corporate boards on compliance, liability, and risk transfer strategies under the new SEC framework." },
    { type: "Risk Alert", title: "Supply Chain Vulnerabilities in Southeast Asia", date: "September 2024", desc: "Analyzing contingent business interruption risks and logistical bottlenecks impacting global manufacturing." },
    { type: "Market Outlook", title: "Hardening Capacity in the Global D&O Market", date: "August 2024", desc: "Strategies for securing optimal management liability coverage in a constrained macro-economic environment." },
    { type: "Regulatory Brief", title: "ESG Litigation Trends", date: "July 2024", desc: "How greenwashing claims and climate transition mandates are reshaping corporate liability." },
    { type: "Whitepaper", title: "Parametric Risk Transfer in Agriculture", date: "June 2024", desc: "Bridging the protection gap for unpredictable weather events and natural catastrophes." },
    { type: "Market Outlook", title: "AI and Algorithmic Liability", date: "May 2024", desc: "Emerging risks in automated decision-making systems and intellectual property infringement." }
  ];

  return (
    <div className="flex flex-col">
      <HeroSlider
        slides={[
          {
            title: "Strategic Insights",
            subtitle: "Expert analysis, market intelligence, and regulatory updates from our global risk advisory practice.",
            image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Market Intelligence Alerts",
            subtitle: "Up-to-date industry bulletins covering D&O market hardening and supply chain contingencies.",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
          },
          {
            title: "Deep-Dive Whitepapers",
            subtitle: "In-depth research on emerging topics, including AI algorithmic liabilities and parametric risk transfer structures.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          }
        ]}
      />
      
      <section className="py-16 bg-white flex-1">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, i) => (
              <div key={i} className="group cursor-pointer border p-6 rounded-lg hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase bg-blue-50 px-2 py-1 rounded">{insight.type}</span>
                    <span className="text-xs text-muted-foreground">{insight.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors leading-snug">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {insight.desc}
                  </p>
                </div>
                <div className="text-sm font-medium text-blue-600 inline-flex items-center mt-auto">
                  Read article <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
