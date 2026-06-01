"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OfferingData } from "@/data/offeringsData";
import { Shield, Target, AlertCircle, Grid, MapPin, CheckCircle2, ChevronRight, Download, FileText } from "lucide-react";

interface PremiumOfferingDetailProps {
  offering: OfferingData;
}

export function PremiumOfferingDetail({ offering }: PremiumOfferingDetailProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-6xl">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="h-10 w-10 text-blue-400" />
              <span className="text-sm font-bold uppercase tracking-widest text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30">
                {offering.category.replace(/-/g, " ").toUpperCase()}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif leading-tight">
              {offering.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
              {offering.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {offering.industryApplicability?.slice(0, 3).map((industry, i) => (
                <span key={i} className="text-xs font-medium px-3 py-1.5 bg-white/10 backdrop-blur rounded-full border border-white/10 hover:bg-white/15 transition-colors">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE OVERVIEW */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Executive Overview</h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">{offering.executiveOverview}</p>
        </div>
      </section>

      {/* 3. BUSINESS PROBLEM */}
      <section className="py-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Business Problem</h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">{offering.businessProblem}</p>
        </div>
      </section>

      {/* 4. SOLUTION ARCHITECTURE */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <Grid className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Solution Architecture</h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">{offering.solutionArchitecture}</p>
        </div>
      </section>

      {/* 5. COVERAGE STRUCTURE */}
      <section className="py-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Coverage Structure</h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">{offering.coverageStructure}</p>
        </div>
      </section>

      {/* 6. INDUSTRY APPLICABILITY */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Industry Applicability</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {offering.industryApplicability?.map((industry, i) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RISK SCENARIOS */}
      <section className="py-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Risk Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offering.riskScenarios?.map((scenario, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-100">
                <div className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600">{scenario}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Business Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offering.businessBenefits?.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-emerald-50/30 rounded-xl border border-emerald-100">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RELATED RISKS & INDUSTRIES */}
      <section className="py-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">Related Risks</h3>
              <div className="flex flex-wrap gap-2">
                {offering.relatedRisks?.map((risk, i) => (
                  <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                    {risk}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">Related Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {offering.relatedPlatforms?.map((platform, i) => (
                  <span key={i} className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. IMPLEMENTATION APPROACH */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Implementation Approach</h2>
          <div className="p-8 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-lg text-slate-600 leading-relaxed">{offering.implementationApproach}</p>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      {offering.faq && offering.faq.length > 0 && (
        <section className="py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900 font-serif">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              {offering.faq.map((item, i) => (
                <Card key={i} className="border border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12. INDIA CONTEXT */}
      {offering.indiaContext && offering.indiaContext.length > 0 && (
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900 font-serif">India Context & Regulatory Compliance</h2>
            </div>
            <div className="grid gap-4">
              {offering.indiaContext.map((point, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-blue-50/20 border border-blue-100">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 13. CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Ready to Architect Your Risk Solution?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Book a consultation with our senior risk architects to discuss your specific requirements.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold" onClick={() => window.location.href = "/contact"}>
                  {offering.cta?.primary || "Book Consultation"}
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => window.location.href = "/contact"}>
                  {offering.cta?.secondary || "Request Assessment"}
                </Button>
                {offering.cta?.downloadSheet && (
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => window.location.href = "/contact"}>
                    <Download className="h-4 w-4 mr-2" />
                    {offering.cta.downloadSheet}
                  </Button>
                )}
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}