

import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Target, Zap, Users, TrendingUp, Shield, Eye, BarChart3, Clock, Network, ArrowRight } from "lucide-react";
import { officeLocations, leadershipTeam, newLeadershipTeam } from "@/data/siteContent";

const offices = officeLocations.map(office => ({
  title: office.name,
  address: office.address,
  email: office.email,
  phone: office.phone
}));

const teamMembers = leadershipTeam.flatMap((dept) =>
  dept.members.map((m) => ({ ...m, dept: dept.name, initials: m.name.split(' ').map(n => n[0]).join('') }))
);

const trustflowCapabilities = [
  "Enterprise Risk Management (ERM)",
  "Governance, Risk & Compliance (GRC)",
  "Cyber Risk & Digital Resilience",
  "Insurance Risk & Claims Intelligence",
  "Climate, ESG & Sustainability Risk",
  "Crisis & Disaster Risk Management",
  "Business Continuity & Resilience Planning",
  "Risk Intelligence & Predictive Analytics",
  "AI Risk & Responsible AI Governance",
];

const whyRiskStats = [
  {
    stat: "70%+",
    label: "of enterprise value driven by intangible assets",
    detail: "Making organizations more vulnerable to cyber, reputational, and operational risks.",
  },
  {
    stat: "$15T+",
    label: "Projected cybercrime damages annually by 2029",
    detail: "Making cyber resilience a board-level priority.",
  },
  {
    stat: "80%+",
    label: "of business disruptions originate outside traditional enterprise boundaries",
    detail: "Including suppliers, ecosystems, regulations, and geopolitical events.",
  },
  {
    stat: "3×",
    label: "Faster recovery for mature risk & resilience programs",
    detail: "Organizations with mature programs recover up to 3× faster from major disruptions.",
  },
  {
    stat: "Minutes",
    label: "AI-driven risk intelligence response time vs. days",
    detail: "Enabling proactive decision-making and faster recovery.",
  },
];

const byTheNumbers = [
  { value: "500M+", label: "Risk, threat & behavioral signals monitored annually", icon: BarChart3 },
  { value: "100+", label: "Risk categories across cyber, operational, financial, ESG, climate, regulatory & emerging tech", icon: Shield },
  { value: "24×7", label: "Continuous intelligence monitoring", icon: Clock },
  { value: "360°", label: "Integrated enterprise risk visibility", icon: Eye },
];

const coreOutcomes = ["Predict", "Prevent", "Protect", "Respond", "Recover"];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* 1. ABOUT US SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-4">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              ABOUT US
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Pioneering the Future of{" "}
                <span className="text-blue-600">Risk Intelligence, Resilience & Trust</span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                In today's hyper-connected world, risks emerge faster than organizations can traditionally identify, assess, and respond.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                From cyber threats and regulatory disruptions to climate events, operational failures, supply-chain vulnerabilities, and AI-driven risks, the cost of being unprepared has never been higher.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                At <strong>TRUSTFLOW</strong>, we help organizations move beyond reactive risk management to <strong>predictive, intelligence-driven resilience</strong>.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                By combining deep domain expertise, AI-powered analytics, governance frameworks, and real-time risk intelligence, we enable enterprises, governments, insurers, and critical infrastructure operators to anticipate threats, make faster decisions, and build sustainable resilience.
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
                  <p className="text-slate-700 leading-relaxed mb-3">
                    We help organizations create a{" "}
                    <span className="text-blue-600 font-semibold">360° Risk Intelligence View</span>{" "}
                    across operations, technology, finance, compliance, cyber security, climate exposure, and emerging threats.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {coreOutcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className="px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white tracking-wide"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-100 shadow-md">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Zap className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">What Makes TRUSTFLOW Different</h3>
                  </div>
                  <ul className="space-y-4">
                    {trustflowCapabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        <span className="text-slate-700 font-medium">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY RISK INTELLIGENCE MATTERS */}
      <section id="why-risk" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200">
              <TrendingUp className="w-4 h-4" /> WHY RISK INTELLIGENCE MATTERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              The Stakes Have Never Been <span className="text-blue-600">Higher</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyRiskStats.map((item, index) => (
              <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden group">
                <CardContent className="p-6 space-y-3">
                  <div className="text-3xl font-extrabold text-blue-600 group-hover:text-blue-700 transition-colors">
                    {item.stat}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">{item.label}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BY THE NUMBERS */}
      <section id="by-the-numbers" className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200">
              <BarChart3 className="w-4 h-4" /> BY THE NUMBERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              TRUSTFLOW <span className="text-blue-600">Vision in Action</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Building AI-Powered Risk Intelligence Platforms that help organizations see risks earlier, understand impacts faster, respond with confidence, recover stronger, and build long-term resilience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {byTheNumbers.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden group text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-4xl font-extrabold text-blue-600 group-hover:text-blue-700 transition-colors">
                      {item.value}
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.5 ECOSYSTEM PREVIEW */}
      <section id="ecosystem-preview" className="py-20 bg-slate-900 border-t border-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-6">
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full border border-blue-800">
                <Network className="w-4 h-4" /> GLOBAL ECOSYSTEM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Partnering to Build the Future of <span className="text-blue-400">Risk Intelligence</span>
              </h2>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                TRUSTFLOW collaborates with leading global technology, insurance, cyber security, ESG, and cloud providers to deliver next-generation risk intelligence and resilience solutions.
              </p>
              <div className="pt-4">
                <Link to="/ecosystem" className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-11 px-8 py-2">
                  Explore Our Ecosystem <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
               {["Insurance", "Cyber Security", "Risk & Compliance", "Climate & ESG", "AI Intelligence", "Cloud Infrastructure"].map((cat, i) => (
                 <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:bg-slate-800 transition-colors flex items-center justify-center min-h-[80px]">
<div className="text-base font-semibold text-slate-200 leading-tight">{cat}</div>
                  </div>
                ))}
             </div>
           </div>
         </div>
       </section>

       {/* NEW EXECUTIVE SECTIONS - BEFORE LEADERSHIP */}

       {/* SECTION 1 — VISION: THE NORTH STAR */}
       <section id="vision" className="py-20 bg-white border-t border-slate-200">
         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
             <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200">
               <Target className="w-4 h-4" /> VISION: THE NORTH STAR
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
               India's Guardian of Risk Intelligence
             </h2>
             <p className="text-base text-slate-600 leading-relaxed">
               To be India's unyielding guardian of risk intelligence, architecting a resilient nation where every enterprise thrives securely in the $55 trillion economy of 2047.
             </p>
             <p className="text-base text-slate-600 leading-relaxed">
               We envision an India where risk becomes a source of competitive advantage, uncertainty is mastered, and resilience drives exponential growth.
             </p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { value: "10%", label: "of India's GDP secured in assets" },
               { value: "40%", label: "reduction in preventable economic losses" },
               { value: "Antifragile", label: "systems built" },
               { value: "Global", label: "Risk Intelligence Powerhouse" }
             ].map((item, index) => (
               <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden group text-center">
                 <CardContent className="p-8 space-y-4">
                   <div className="text-4xl font-extrabold text-blue-600 group-hover:text-blue-700 transition-colors">
                     {item.value}
                   </div>
                   <p className="text-sm text-slate-500 leading-relaxed">{item.label}</p>
                 </CardContent>
               </Card>
             ))}
           </div>
         </div>
       </section>

       {/* SECTION 2 — MISSION */}
       <section id="mission" className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
           <div className="max-w-4xl mx-auto text-center space-y-8">
             <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200">
               <Zap className="w-4 h-4" /> MISSION
             </span>
             <blockquote className="relative">
               <div className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight italic">
                 "We do not merely manage risk — we master it."
               </div>
               <p className="text-base text-slate-600 mt-4">
                 Turning uncertainty into advantage, vulnerability into strength, and threat into triumph.
               </p>
             </blockquote>
           </div>
         </div>
       </section>

       {/* SECTION 3 — CORE VALUES */}
       <section id="core-values" className="py-20 bg-white border-t border-slate-200">
         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
             <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200">
               <Shield className="w-4 h-4" /> WHAT WE VALUE
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
               Core Values
             </h2>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { title: "Sentinel Mindset", desc: "Always vigilant, proactive, and ahead of risks.", icon: Eye },
               { title: "Intellectual Honesty", desc: "Face reality with courage and data — no illusions.", icon: BarChart3 },
               { title: "Owner's Urgency", desc: "Treat every client's risk as our own.", icon: Zap },
               { title: "Technological Audacity", desc: "Boldly push frontiers in AI, quantum, and complex systems.", icon: Network },
               { title: "Collaborative Resilience", desc: "Strengthen ecosystems and win together.", icon: Users },
               { title: "Long-Term Stewardship", desc: "Build solutions that endure for generations.", icon: Clock }
             ].map((item, index) => {
               const Icon = item.icon;
               return (
                 <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden group">
                   <CardContent className="p-6 space-y-4">
                     <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                       <Icon className="w-5 h-5" />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 text-center">{item.title}</h3>
                     <p className="text-base text-slate-600 text-center leading-relaxed">{item.desc}</p>
                   </CardContent>
                 </Card>
               );
             })}
           </div>
         </div>
       </section>

       {/* SECTION 4 — WORK CULTURE */}
       <section id="work-culture" className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
             <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200">
               <Users className="w-4 h-4" /> HOW WE OPERATE
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
               Work Culture
             </h2>
             <p className="text-base text-slate-600 leading-relaxed">
               We foster a high-trust, high-performance culture where exceptional people do extraordinary work.
             </p>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {[
               { title: "Performance with Purpose", desc: "Intense ownership and results that matter.", icon: Target },
               { title: "Intellectual Rigor & Curiosity", desc: "Deep thinking, continuous learning, and deliberate red-teaming.", icon: BarChart3 },
               { title: "Radical Candor", desc: "Direct, respectful feedback with full psychological safety.", icon: Users },
               { title: "Speed with Discipline", desc: "Move fast, but never compromise quality or safety.", icon: Zap },
               { title: "Diverse Collaboration", desc: "Multidisciplinary teams of risk experts, technologists, domain specialists, ex-military, and civil servants.", icon: Network },
               { title: "Meaningful Impact", desc: "Every role contributes directly to India's economic sovereignty.", icon: TrendingUp }
             ].map((item, index) => {
               const Icon = item.icon;
               return (
                 <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden group">
                   <CardContent className="p-6 flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                       <Icon className="w-4 h-4" />
                     </div>
                     <div>
                       <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                       <p className="text-base text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                     </div>
                   </CardContent>
                 </Card>
               );
             })}
           </div>
           <p className="text-center text-base text-slate-500 mt-8 max-w-3xl mx-auto">
             We support wellbeing through flexible work, mental health resources, and wellness programs — because resilient organizations begin with resilient people.
           </p>
         </div>
       </section>

       {/* SECTION 5 — LEADERSHIP PRINCIPLES */}
       <section id="leadership-principles" className="py-20 bg-white border-t border-slate-200">
         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
             <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200">
               <Shield className="w-4 h-4" /> LEADERSHIP PRINCIPLES
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
               Leadership Principles
             </h2>
             <p className="text-base text-slate-600 leading-relaxed">
               Our leaders are expected to embody these principles:
             </p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { title: "Lead from the Front", icon: Shield, desc: "Take ownership in crises and give credit in success." },
               { title: "Develop Future Sentinels", icon: Users, desc: "Actively coach and grow the next generation of risk leaders." },
               { title: "Think in Systems", icon: Network, desc: "Always connect decisions to long-term national and client outcomes." },
               { title: "Practice Radical Candor", icon: Zap, desc: "Be clear and kind — never politically correct." },
               { title: "Embrace Intellectual Humility", icon: BarChart3, desc: "Admit mistakes quickly and learn faster." },
               { title: "Stay Mission Obsessed", icon: Target, desc: "Keep India's resilience and clients' success as the ultimate priority." },
               { title: "Decide with Courage", icon: TrendingUp, desc: "Make bold calls backed by rigorous analysis, not consensus-seeking." }
             ].map((item, index) => {
               const Icon = item.icon;
               return (
                 <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden group">
                   <CardContent className="p-6 space-y-4">
                     <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                       <Icon className="w-4 h-4" />
                     </div>
                     <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                     <p className="text-base text-slate-600 leading-relaxed">{item.desc}</p>
                   </CardContent>
                 </Card>
               );
             })}
           </div>
         </div>
       </section>

       {/* SECTION 6 — EMPLOYEE VALUE PROPOSITION (EVP) */}
       <section id="evp" className="py-20 bg-slate-900 text-white border-t border-slate-800">
         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
             <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full border border-blue-800">
               <Users className="w-4 h-4" /> BE A SENTINEL
             </span>
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
               Employee Value Proposition
             </h2>
             <p className="text-base text-slate-300 leading-relaxed">
               "Be a Sentinel. Shape India's Future. Grow Without Limits."
             </p>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {[
               { title: "Nationally Critical Projects", desc: "Work on nationally critical and intellectually challenging problems that truly matter.", icon: Shield },
               { title: "AI & Quantum Risk Exposure", desc: "Gain unparalleled exposure to cutting-edge AI, quantum risk modeling, and large-scale resilience projects.", icon: Network },
               { title: "Equity Upside", desc: "Receive significant equity upside as we scale into a multi-billion-dollar risk intelligence leader.", icon: TrendingUp },
               { title: "TrustFlow Academy", desc: "Access continuous learning through TrustFlow Academy and mentorship from top experts.", icon: Users },
               { title: "Expert Mentorship", desc: "Join a high-caliber, mission-driven team that values excellence and integrity.", icon: Target },
               { title: "Flexible Work & Compensation", desc: "Enjoy competitive compensation, flexible work, and strong wellbeing support.", icon: Zap }
             ].map((item, index) => {
               const Icon = item.icon;
               return (
                 <Card key={index} className="border-slate-700/50 bg-slate-800/50 backdrop-blur rounded-xl overflow-hidden group">
                   <CardContent className="p-6 flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                       <Icon className="w-4 h-4" />
                     </div>
                     <div>
                       <h3 className="text-base font-bold text-white">{item.title}</h3>
                       <p className="text-base text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
                     </div>
                   </CardContent>
                 </Card>
               );
             })}
           </div>
         </div>
       </section>

       {/* SECTION 7 — STRATEGIC COMMITMENTS (2025–2047) */}
       <section id="strategic-commitments" className="py-20 bg-white border-t border-slate-200">
         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
             <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200">
               <Clock className="w-4 h-4" /> STRATEGIC COMMITMENTS
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
               2025–2047
             </h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               {
                 title: "Protect & Propel Growth",
                 items: [
                   "• Intelligent risk guardians for 100,000+ enterprises by 2030",
                   "• 35% reduction in supply chain disruptions for 5,000+ companies"
                 ],
                 icon: Shield
               },
               {
                 title: "Build the Resilient Backbone",
                 items: [
                   "• Embed resilience across India's $1.4 trillion+ infrastructure",
                   "• Train 1 million risk professionals via TrustFlow Academy by 2035"
                 ],
                 icon: Network
               },
               {
                 title: "Fuel the Economic Engine",
                 items: [
                   "• Deliver ₹7+ in economic value for every ₹1 invested in risk mitigation",
                   "• Help unlock $1 trillion in FDI by 2040"
                 ],
                 icon: TrendingUp
               },
               {
                 title: "Lead with the Future",
                 items: [
                   "• Launch India's first Quantum-Resistant Risk Engine by 2032",
                   "• Achieve 99.9% accuracy in predictive risk modeling"
                 ],
                 icon: Target
               }
             ].map((pillar, index) => {
               const Icon = pillar.icon;
               return (
                 <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden">
                   <CardContent className="p-6 space-y-4">
                     <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                       <Icon className="w-4 h-4" />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                     <ul className="space-y-2">
                       {pillar.items.map((item, i) => (
                         <li key={i} className="text-sm text-slate-600 leading-relaxed">{item}</li>
                       ))}
                     </ul>
                   </CardContent>
                 </Card>
               );
             })}
           </div>
         </div>
       </section>

       {/* SECTION 8 — INNOVATION FRAMEWORK */}
       <section id="innovation-framework" className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
             <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200">
               <Zap className="w-4 h-4" /> INNOVATION FRAMEWORK
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
               Data → Insight → Intelligence → Invincibility
             </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
             {[
               { pillar: "AI & Predictive Analytics", m2030: "90%+ accuracy in anomaly forecasting", m2047: "99.9% with Quantum-AI hybrids", icon: Network },
               { pillar: "Digital Twin Systems", m2030: "10 major industrial zones", m2047: "500+ clusters & corridors", icon: Target },
               { pillar: "Blockchain & Audit Trails", m2030: "1,000 enterprises", m2047: "10% of India's corporate data", icon: Shield },
               { pillar: "Cyber-Physical Defense", m2030: "500+ critical assets", m2047: "Autonomous national defense grid", icon: Zap },
               { pillar: "Climate Adaptive Risk", m2030: "500+ corporations", m2047: "Full national sustainable alignment", icon: TrendingUp }
             ].map((item, index) => {
               const Icon = item.icon;
               return (
                 <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden">
                   <CardContent className="p-4 space-y-3">
                     <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                       <Icon className="w-3 h-3" />
                     </div>
                     <h4 className="text-sm font-bold text-slate-900 text-center">{item.pillar}</h4>
                     <div>
                       <p className="text-[10px] font-semibold text-blue-600 text-center mb-1">2030 Milestone</p>
                       <p className="text-[10px] text-slate-600 text-center leading-tight">{item.m2030}</p>
                     </div>
                     <div>
                       <p className="text-[10px] font-semibold text-purple-600 text-center mb-1">2047 Vision</p>
                       <p className="text-[10px] text-slate-600 text-center leading-tight">{item.m2047}</p>
                     </div>
                   </CardContent>
                 </Card>
               );
             })}
           </div>
         </div>
       </section>

       {/* 4. LEADERSHIP & CULTURE SECTION */}
       <section id="leadership" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200">
              <Users className="w-4 h-4" /> WORLD-CLASS TALENT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Leadership & <span className="text-blue-600">Teams</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              A powerhouse of risk domain experts, AI architects, governance specialists, and resilience practitioners building the future of enterprise risk intelligence.
            </p>
          </div>

          {/* 1. Technical & Operational Teams (Original Team) */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">
              Technical & Operational Teams
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden group">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors text-base">
                      {member.initials}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-base font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-sm text-slate-500 truncate mt-0.5">
                        {member.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 2. Leadership Team – Risk Management, AI & Governance */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">
              Leadership Team – Risk Management, AI & Governance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {newLeadershipTeam[0].members.map((member, index) => {
                const initials = member.name === "TBD" ? "T" : member.name.split(' ').map(n => n[0]).join('');
                return (
                  <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden group">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors text-base">
                        {initials}
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="text-base font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-sm text-slate-500 truncate mt-0.5">
                          {member.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* 3. Additional Strategic Practice Leads */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">
              Additional Strategic Practice Leads
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {newLeadershipTeam[1].members.map((member, index) => {
                const initials = member.name === "TBD" ? "T" : member.name.split(' ').map(n => n[0]).join('');
                return (
                  <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden group">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors text-base">
                        {initials}
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="text-base font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-sm text-slate-500 truncate mt-0.5">
                          {member.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR OFFICES SECTION */}
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
                  <p className="text-base text-slate-400 leading-relaxed whitespace-pre-line min-h-[80px]">
                    {office.address}
                  </p>
                  <div className="pt-4 border-t border-slate-700/50 space-y-1">
                    {office.email && (
                      <p className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer">{office.email}</p>
                    )}
                    {office.phone && (
                      <p className="text-sm font-medium text-slate-300">{office.phone}</p>
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
              <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Email Us</p>
              <p className="text-base font-medium">connect@trustflow.in</p>
            </div>
            <div className="flex-1 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-6 flex flex-col items-center justify-center gap-2 text-center hover:bg-slate-800 transition-colors cursor-pointer">
              <Phone className="w-6 h-6 text-purple-400" />
              <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Call Us</p>
              <p className="text-base font-medium">+91 9513288612<br />+65 6050 5235</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CTA CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 60%, #7c3aed 100%)" }}>
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

            <div className="relative z-10 px-8 py-16 text-center text-white space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-200">TRUSTFLOW</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Transform Risk Management into Risk Intelligence
              </h2>
              <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                We are building the next generation of AI-powered platforms, advisory services, and operational frameworks that help organizations thrive in an increasingly uncertain world — turning Compliance into Confidence, and Resilience into Competitive Advantage.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
                <Link to="/contact">
                  <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-blue-700 font-bold text-base hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
                    Book for Consulting
                  </button>
                </Link>
                <a
                  href="tel:+919513288612"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-bold text-base hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur"
                >
                  <Phone className="w-4 h-4" /> Talk to a Risk Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
