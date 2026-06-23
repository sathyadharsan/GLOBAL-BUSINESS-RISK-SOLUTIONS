import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Convert slug back to title case for display
  const title = slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <Link href="/insights" className="inline-flex items-center text-base font-medium text-blue-600 mb-8 hover:text-blue-800 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
      </Link>
      
      <div className="max-w-3xl">
        <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-4 inline-block">
          Article
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Published in 2024 • 5 min read
        </p>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
          <p>
            This is a placeholder article page for <strong>{title}</strong>. 
          </p>
          <p>
            In a complete implementation, this page would fetch the full content of the insight report, whitepaper, or market outlook from a CMS (Content Management System) or local data file based on the URL slug <code>{slug}</code>.
          </p>
          <p>
            For now, the routing is working correctly and you have successfully navigated to the dedicated article page!
          </p>
        </div>
      </div>
    </div>
  );
}
