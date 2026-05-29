import { HeroSlider } from "@/components/sections/HeroSlider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Target, Lightbulb, MapPin, Grid, CheckCircle2, Info } from "lucide-react";

export interface OfferingLayoutProps {
  title: string;
  subtitle: string;
  images: string[];
  valueText: string;
  challenges: string[];
  architecture: { term: string; desc: string }[];
  expertCommentary: string;
  indiaContext: string[];
  matrix: {
    scale: string; // e.g. "🟢🔵🟠🔴⚫ All Scales"
    scope: string; // e.g. "🏠 In-Country | 🌐 Cross-Border | 🌍 Global"
    duration: string; // e.g. "📅 Annual | 📆 Multi-Year"
  };
}

export function OfferingLayout({
  title,
  subtitle,
  images,
  valueText,
  challenges,
  architecture,
  expertCommentary,
  indiaContext,
  matrix
}: OfferingLayoutProps) {
  return (
    <div className="flex flex-col">
      <HeroSlider
        slides={images.map((img) => ({
          title,
          subtitle,
          image: img
        }))}
      />

      {/* 2. Value Positioning */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-primary">Enterprise Value</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {valueText}
          </p>
        </div>
      </section>

      {/* 3. Challenges & Exposures */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h2 className="text-3xl font-bold text-primary">Challenges & Exposures</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {challenges.map((challenge, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <span className="text-muted-foreground">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Coverage Architecture */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-center gap-3 mb-10">
            <Grid className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-primary">Coverage Architecture</h2>
          </div>
          <div className="overflow-hidden rounded-xl border shadow-sm">
            <table className="w-full text-left text-sm text-muted-foreground">
              <thead className="bg-blue-50/50 text-primary font-semibold border-b">
                <tr>
                  <th className="px-6 py-4 w-1/3">Term / Category</th>
                  <th className="px-6 py-4">Description / Details</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {architecture.map((item, i) => (
                  <tr key={i} className="bg-white hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary align-top">{item.term}</td>
                    <td className="px-6 py-4 align-top">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Expert Commentary */}
      <section className="py-20 bg-primary text-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <Lightbulb className="h-12 w-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-blue-400">Expert Commentary</h2>
          <blockquote className="text-xl md:text-2xl italic font-medium leading-relaxed">
            "{expertCommentary}"
          </blockquote>
        </div>
      </section>

      {/* 6. India Context */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-primary">India Context & Regulatory</h2>
          </div>
          <div className="grid gap-4">
            {indiaContext.map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-blue-50/30 border border-blue-100">
                <CheckCircle2 className="h-6 w-6 text-blue-500 shrink-0" />
                <span className="text-primary text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Four-Dimensional Matrix */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-center justify-between mb-8 pb-4 border-b">
            <h2 className="text-2xl font-bold text-primary">Four-Dimensional Matrix Applicability</h2>
            <Info className="h-6 w-6 text-muted-foreground" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border shadow-none bg-white">
              <CardHeader className="pb-3 border-b bg-gray-50/50">
                <div className="text-sm font-bold uppercase text-muted-foreground tracking-wider mb-1">Dimension 1</div>
                <CardTitle className="text-xl text-primary">Enterprise Scale</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-lg font-medium text-primary">{matrix.scale}</div>
              </CardContent>
            </Card>

            <Card className="border shadow-none bg-white">
              <CardHeader className="pb-3 border-b bg-gray-50/50">
                <div className="text-sm font-bold uppercase text-muted-foreground tracking-wider mb-1">Dimension 2</div>
                <CardTitle className="text-xl text-primary">Operational Scope</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-lg font-medium text-primary">{matrix.scope}</div>
              </CardContent>
            </Card>

            <Card className="border shadow-none bg-white">
              <CardHeader className="pb-3 border-b bg-gray-50/50">
                <div className="text-sm font-bold uppercase text-muted-foreground tracking-wider mb-1">Dimension 3</div>
                <CardTitle className="text-xl text-primary">Duration</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-lg font-medium text-primary">{matrix.duration}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
