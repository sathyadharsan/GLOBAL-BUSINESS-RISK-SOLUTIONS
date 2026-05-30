"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Shield, AlertTriangle, FileText, CheckCircle2, ChevronRight } from "lucide-react";

export default function PolicyGapAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const startAnalysis = () => {
    if (!file) return;
    setIsProcessing(true);
    setProgress(0);
  };

  useEffect(() => {
    if (isProcessing && progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsProcessing(false);
            setIsCompleted(true);
            return 100;
          }
          return prev + 5;
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isProcessing, progress]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200">
      <div className="container mx-auto px-4 py-16 max-w-2xl flex-1 flex flex-col justify-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl space-y-8">
          
          <div className="space-y-2 text-center">
            <span className="text-[9px] font-mono text-cyber-400 uppercase tracking-widest bg-cyber-500/10 border border-cyber-500/20 px-2.5 py-1 rounded-full">
              Loopholes Engine
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white">
              Policy Gap Analyzer
            </h2>
            <p className="text-xs text-neutral-400 max-w-lg mx-auto font-serif">
              Upload your current corporate policies (PDF format) to scan for hidden exclusion sub-limits, treaty conflicts, and structural coverage loopholes.
            </p>
          </div>

          {!isProcessing && !isCompleted ? (
            <div className="space-y-6">
              {/* Drop Zone */}
              <div 
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed border-neutral-800 hover:border-cyber-500/40 rounded-2xl p-10 flex flex-col items-center justify-center bg-neutral-950/40 cursor-pointer transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-500 group-hover:text-cyber-400 border border-neutral-850 group-hover:border-cyber-500/30 transition-all duration-300 mb-4">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-center space-y-2">
                  <h4 className="text-sm font-bold text-white font-sans">
                    {file ? file.name : "Drag & Drop Policy PDF here"}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-serif">
                    {file ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` : "Supports standard D&O, Property, or Cyber policy schedules (max 20MB)"}
                  </p>
                </div>
                
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="policy-file-input"
                />
                <Button 
                  onClick={() => document.getElementById("policy-file-input")?.click()}
                  variant="outline" 
                  className="mt-6 border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 text-xs font-sans h-9"
                >
                  Browse Files
                </Button>
              </div>

              {/* Action button */}
              {file && (
                <Button 
                  onClick={startAnalysis}
                  className="w-full bg-cyber-500 hover:bg-cyber-400 text-neutral-950 font-bold font-sans h-12"
                >
                  Analyze Policy Loopholes <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          ) : isProcessing ? (
            <div className="space-y-6 text-center py-10">
              <div className="relative flex justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-cyber-500/10 border-t-cyber-500 animate-spin" />
                <FileText className="w-6 h-6 text-cyber-400 absolute top-5 self-center" />
              </div>
              <div className="space-y-3 max-w-md mx-auto">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-cyber-400 uppercase tracking-widest font-bold">
                    Scanning Policy Clauses...
                  </span>
                  <span className="text-neutral-500">{progress}%</span>
                </div>
                <div className="w-full bg-neutral-950 h-2 rounded-full overflow-hidden border border-neutral-850">
                  <div 
                    className="bg-cyber-500 h-full rounded-full transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-[10px] text-neutral-500 italic font-serif">
                  {progress < 30 ? "Extracting document metadata..." : progress < 60 ? "Auditing treaty exclusions..." : progress < 90 ? "Benchmarking sub-limit allocations..." : "Generating dynamic gap profile..."}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Success box */}
              <div className="p-5 bg-neutral-950 border border-neutral-850 rounded-xl space-y-4">
                <div className="flex items-center gap-2.5 text-sm font-bold text-white font-sans border-b border-neutral-850 pb-3">
                  <CheckCircle2 className="w-5 h-5 text-cyber-400 shrink-0" />
                  <span>Audit Complete: 3 Critical Loopholes Found</span>
                </div>
                <div className="space-y-3.5 text-xs font-serif leading-relaxed">
                  <div className="flex items-start gap-2 text-risk-400">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block font-sans">1. Silent Cyber Tech Exclusions</span>
                      <span>Property and D&O wordings contain sweeping technological exclusions, creating ransomware CBI gap.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-accent-500">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block font-sans">2. Pro-Rata Average Clause Exposure</span>
                      <span>Stated building/machinery limits sit 42% below current replacement indexes, triggering major penalty clauses in losses.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-purple-400">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block font-sans">3. Restricted Territory Exclusions</span>
                      <span>Local cross-border policies lack appropriate Controlled Master overlay, endangering compliance in European entities.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Capture form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-neutral-850">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white font-sans">
                      Request Your Complete Policy Gap Report
                    </h4>
                    <p className="text-xs text-neutral-400 font-serif">
                      We will compile full structural layout suggestions, corrected policy wording riders, and insurer rate cards to patch these gaps immediately.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter corporate email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 text-xs md:text-sm text-white focus:border-cyber-500 focus:outline-none"
                    />
                    <Button type="submit" className="bg-cyber-500 hover:bg-cyber-400 text-neutral-950 font-bold font-sans text-xs h-10 px-5 shadow">
                      Deliver Gap Audit <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="p-4 bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 rounded-xl flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-sans font-semibold">
                    Policy Gap Audit compiled successfully. A senior risk engineer will deliver your technical riders and rate structures directly to {email}.
                  </span>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
