import { HeroSlider } from "@/components/sections/HeroSlider";
import { CheckCircle2, ChevronRight, LayoutGrid } from "lucide-react";
import Link from "next/link";
import type { DynamicPageContent } from "@/data/siteContent";

export function DynamicLayout({ data }: { data: DynamicPageContent }) {
  return (
    <div className="flex flex-col">
      <HeroSlider
        slides={[{
          title: data.title,
          subtitle: data.subtitle,
          image: data.heroImage
        }]}
      />

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <LayoutGrid className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-primary">Overview</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Key Features & Components</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-primary">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-8">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Need tailored expertise for your organization?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a 30-minute diagnostic session with our specialized risk architects.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold transition-all"
          >
            Book Your Diagnostic <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
