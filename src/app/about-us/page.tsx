"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Target, Zap, BarChart, TrendingUp, RefreshCw, Cpu, Users } from "lucide-react";
import { cn } from "@/lib/utils";

// Data from TrustGrid screenshots

const teamMembers = [
  { name: "Balaji Venkatraman", role: "Director Growth", initials: "BV" },
  { name: "Lavanya Seshadri", role: "Engineering Head", initials: "LS" },
  { name: "Vignesh KS", role: "Product Lead", initials: "VK" },
  { name: "Dinesh Kumar", role: "Lead AI Engineer", initials: "DK" },
  { name: "Hemalata", role: "AI Engineer & Tech Lead", initials: "H" },
  { name: "Prithivin L", role: "Project Lead - EscrowChain", initials: "PL" },
  { name: "Nirmal Ullas", role: "Project Leader - Full Stack...", initials: "NU" },
  { name: "Shiva Kumar", role: "Senior Product Architect", initials: "SK" },
  { name: "Natarajan", role: "Sr Blockchain Architect", initials: "N" },
  { name: "Ritin", role: "Senior AI Architect", initials: "R" },
  { name: "Viswanath", role: "Sr DevOps Engineer", initials: "V" },
  { name: "Subashini Kaushik", role: "AI Engineer - LLM / RAG", initials: "SK" },
  { name: "Shwetha B", role: "Full Stack AI Engineer", initials: "SB" },
  { name: "Sharyas Yagna", role: "AI Engineer", initials: "SY" },
  { name: "Pranav Kapoor", role: "AI Engineer", initials: "PK" },
  { name: "Sonu Priyadarshini", role: "RPA Engineer", initials: "SP" },
  { name: "Neha Hebber", role: "FinTech Platform Engineer...", initials: "NH" },
  { name: "Swathi Iyer", role: "IIT Madras - BTech", initials: "SI" },
  { name: "Aishwarya L Bhatt", role: "AI Performance Marketing...", initials: "AL" },
  { name: "Chintiya Liu", role: "Industry Consultant", initials: "CL" },
  { name: "Kallol Pal", role: "Technology Advisor", initials: "KP" },
  { name: "Soumya S", role: "Company Secretary & Ad...", initials: "SS" },
  { name: "Annapoorani", role: "Automation Engineering...", initials: "A" },
  { name: "Poojasri", role: "AI Engineering (Intern)", initials: "P" },
  { name: "HariKrishnan K", role: "AI Engineering (Intern)", initials: "HK" },
  { name: "Praveen Kumar R", role: "AI Engineering (Intern)", initials: "PK" },
  { name: "Santhosh S", role: "AI Engineering (Intern)", initials: "SS" }
];

const offices = [
  {
    title: "US Office",
    address: "501 E Kennedy Blvd Suite 1400\nTampa, FL 33602, United States",
    email: "connect@trustgrid.ai",
    phone: "+1 5512288612"
  },
  {
    title: "Singapore Office",
    address: "5 Temasek Boulevard, 17th Floor\nSingapore 038985",
    email: "connect@trustgrid.ai",
    phone: "+65 6050 5235"
  },
  {
    title: "India Office",
    address: "TRUSTGRID AI INNOVATION PVT LTD\nSuite : 22, 215, BINNAMANGALA,\n2nd Floor, 11th Cross Road,\nIndira Nagar 2nd Stage, Hoysala Nagar,\nBengaluru - 560038, India",
    email: "",
    phone: ""
  },
  {
    title: "Mumbai Office",
    address: "WeWork, Raheja Platinum,\nRoad, off Andheri - Kurla Road,\nSag Baug, Marol, Andheri East,\nMumbai, Maharashtra 400059",
    email: "connect@trustgrid.ai",
    phone: "+91 9513288612"
  },
  {
    title: "Bangalore Office",
    address: "WeWork, 13th floor, Tin Factory,\nSalarpuria Magnificia, 78, Old Madras Rd,\nnext to KR Puram, Mahadevapura,\nBengaluru, Karnataka 560016",
    email: "connect@trustgrid.ai",
    phone: "+91 9513288612"
  }
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* 1. ABOUT US SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              ABOUT US
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Pioneering the Science of <span className="text-blue-600">Revenue Engineering</span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                At TrustGrid AI, we believe that revenue growth shouldn't be a guessing game. It's an engineering problem solvable with data, intelligence, and precision.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Born from a convergence of enterprise sales expertise and advanced machine learning, we've built the world's most comprehensive Revenue Intelligence Platform. We don't just provide data; we provide the <strong>flow</strong>—the seamless connection between market signals, sales execution, and predictable revenue outcomes.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We partner with forward-thinking enterprises to dismantle silos, automate complex revenue workflows, and empower teams to achieve what was previously impossible: <strong>Growth on Autopilot</strong>.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50" />
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    To help enterprises build <span className="text-blue-600 font-semibold">predictable</span>, <span className="text-blue-600 font-semibold">scalable</span>, and <span className="text-purple-600 font-semibold border-b-2 border-purple-200">compounding</span> revenue engines powered by AI.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-slate-100 shadow-md">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Zap className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">What We Do</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-slate-700 font-medium">AI-powered demand generation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-slate-700 font-medium">Sales intelligence & automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-slate-700 font-medium">Revenue operations optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-slate-700 font-medium">ARR acceleration & retention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-slate-700 font-medium">Predictive revenue forecasting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP & CULTURE SECTION */}
      <section id="leadership" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200">
              <Users className="w-4 h-4" /> WORLD-CLASS TALENT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Leadership & <span className="text-blue-600">Teams</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              A powerhouse of AI architects, blockchain experts, and industry consultants building the future of autonomous revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden group">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors text-sm">
                    {member.initials}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR OFFICES SECTION */}
      <section id="offices" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-slate-900/80" />
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Our Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="border-slate-800 bg-slate-800/50 backdrop-blur text-white shadow-xl hover:border-slate-700 transition-colors">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700/50 text-blue-400 mx-auto flex items-center justify-center mb-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">{office.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line min-h-[80px]">
                    {office.address}
                  </p>
                  <div className="pt-4 border-t border-slate-700/50 space-y-1">
                    {office.email && (
                      <p className="text-xs text-slate-300 hover:text-white transition-colors cursor-pointer">{office.email}</p>
                    )}
                    {office.phone && (
                      <p className="text-xs font-medium text-slate-300">{office.phone}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Bar */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 max-w-2xl mx-auto">
            <div className="flex-1 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-6 flex flex-col items-center justify-center gap-2 text-center hover:bg-slate-800 transition-colors cursor-pointer">
              <Mail className="w-6 h-6 text-green-400" />
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Us</p>
              <p className="text-sm font-medium">connect@trustgrid.ai</p>
            </div>
            <div className="flex-1 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-6 flex flex-col items-center justify-center gap-2 text-center hover:bg-slate-800 transition-colors cursor-pointer">
              <Phone className="w-6 h-6 text-purple-400" />
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Us</p>
              <p className="text-sm font-medium">+91 9513288612<br/>+65 6050 5235</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
