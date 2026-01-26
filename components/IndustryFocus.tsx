
import React, { useState } from 'react';
import { GraduationCap, Briefcase, CheckCircle2, Zap, ArrowRight, BookOpen, Users, ClipboardCheck, MessageSquare } from 'lucide-react';

export const IndustryFocus: React.FC = () => {
  const [tab, setTab] = useState<'edu' | 'ent'>('edu');

  return (
    <section className="py-24 bg-white overflow-hidden" id="solutions">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-6">Specialized Focus. <br />Universal Power.</h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Edexo began with a clear mission: revolutionize how educational institutions operate. Today, we've evolved into a unified engine that powers diverse organizations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Navigation Controls */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            <button
              onClick={() => setTab('edu')}
              className={`p-6 rounded-[2rem] text-left transition-all duration-500 border-2 ${tab === 'edu'
                  ? 'bg-blue-900 text-white border-blue-900 shadow-2xl shadow-blue-900/30 -translate-y-1'
                  : 'bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100'
                }`}
            >
              <GraduationCap className={`w-8 h-8 mb-3 ${tab === 'edu' ? 'text-orange-400' : 'text-slate-400'}`} />
              <h3 className="text-xl font-black mb-1">Education Specialty</h3>
              <p className={`text-xs font-medium ${tab === 'edu' ? 'text-blue-100' : 'text-slate-400'}`}>Purpose-built for academies, coaching centers, schools, and universities.</p>
            </button>

            <button
              onClick={() => setTab('ent')}
              className={`p-6 rounded-[2rem] text-left transition-all duration-500 border-2 ${tab === 'ent'
                  ? 'bg-blue-900 text-white border-blue-900 shadow-2xl shadow-blue-900/30 -translate-y-1'
                  : 'bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100'
                }`}
            >
              <Briefcase className={`w-8 h-8 mb-3 ${tab === 'ent' ? 'text-orange-400' : 'text-slate-400'}`} />
              <h3 className="text-xl font-black mb-1">Business Suite</h3>
              <p className={`text-xs font-medium ${tab === 'ent' ? 'text-blue-100' : 'text-slate-400'}`}>Scalable CRM, HRMS, Accounting and Operations for modern firms.</p>
            </button>
          </div>

          {/* Feature Display */}
          <div className="w-full lg:w-2/3 bg-slate-50 rounded-[3rem] p-8 md:p-16 relative overflow-hidden min-h-[600px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>

            {/* Education Content */}
            <div className={`transition-all duration-700 ${tab === 'edu' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 absolute inset-0'}`}>
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
                <BookOpen className="w-4 h-4" /> Academic Excellence
              </div>
              <h4 className="text-3xl font-black text-blue-950 mb-4 text-gradient">Complete Institutional Lifecycle</h4>
              <p className="text-slate-600 mb-8 font-medium">From first inquiry to final certification, manage every stakeholder interaction with precision.</p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  { t: 'Lifecycle Management', d: 'Smart enrollment, onboarding, and centralized student database.' },
                  { t: 'Academic Operations', d: 'Attendance tracking, course management, and grade schemes.' },
                  { t: 'Progress Intelligence', d: 'Automated report cards with detailed performance analytics.' },
                  { t: 'Teacher-Student Collab', d: 'Interactive portal for notes, assignments, and feedback.' },
                  { t: 'Parent Portal', d: 'Visibility into attendance, fees, and academic milestones.' },
                  { t: 'Specialized Facilities', d: 'Hostel, Library, and Transport management built-in.' }
                ].map((feat, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 border border-slate-100">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{feat.t}</h5>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{feat.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#academic-features" className="px-8 py-4 bg-blue-900 text-white rounded-2xl font-bold shadow-xl shadow-blue-900/30 hover:bg-blue-950 transition-colors flex items-center gap-2 inline-block">
                  Explore Academic Features <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Business Content */}
            <div className={`transition-all duration-700 ${tab === 'ent' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 absolute inset-0'}`}>
              <div className="inline-flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest mb-4">
                <Zap className="w-4 h-4" /> Enterprise Engine
              </div>
              <h4 className="text-3xl font-black text-blue-950 mb-4 text-gradient">Unified Management Suite</h4>
              <p className="text-slate-600 mb-8 font-medium">Leverage the same high-performance platform that manages complex universities for your business needs.</p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  { t: 'Lead CRM', d: 'Opportunity management and sales pipeline tracking.' },
                  { t: 'HRMS Pro', d: 'Employee lifecycle, payroll, and performance management.' },
                  { t: 'Task & Tickets', d: 'Operational workflows, task assignment and team accountability.' },
                  { t: 'Modern Accounting', d: 'Bookkeeping, automated invoicing and financial compliance.' },
                  { t: 'Visual Analytics', d: 'Real-time dashboards with cross-module reporting.' },
                  { t: 'Meta Integration', d: 'Direct social media lead capture and CRM sync.' }
                ].map((feat, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 border border-slate-100">
                      <ClipboardCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{feat.t}</h5>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{feat.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold shadow-xl shadow-orange-500/30 hover:bg-orange-600 transition-colors flex items-center gap-2">
                Request Business Demo <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
