
import React, { useState } from 'react';
import { GraduationCap, Briefcase, CheckCircle2, Zap, ArrowRight, BookOpen, Users, ClipboardCheck, MessageSquare } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface IndustryFocusProps {
  onBookDemo: () => void;
}

export const IndustryFocus: React.FC<IndustryFocusProps> = ({ onBookDemo }) => {
  const [tab, setTab] = useState<'edu' | 'ent'>('edu');

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden" id="solutions">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-950 mb-4 sm:mb-6">Specialized Focus. <br />Universal Power.</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed px-2">
            Edexo began with a clear mission: revolutionize how educational institutions operate. Today, we've evolved into a unified engine that powers diverse organizations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-start">
          {/* Navigation Controls */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            <ScrollReveal variant="slide-in-left" width="100%">
              <button
                onClick={() => setTab('edu')}
                className={`p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] text-left transition-all duration-500 border-2 ${tab === 'edu'
                  ? 'bg-blue-900 text-white border-blue-900 shadow-xl sm:shadow-2xl shadow-blue-900/30 -translate-y-1'
                  : 'bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100'
                  }`}
              >
                <GraduationCap className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 ${tab === 'edu' ? 'text-orange-400' : 'text-slate-400'}`} />
                <h3 className="text-lg sm:text-xl font-black mb-1">Education Specialty</h3>
                <p className={`text-[10px] sm:text-xs font-medium ${tab === 'edu' ? 'text-blue-100' : 'text-slate-400'}`}>Purpose-built for academies, coaching centers, schools, and universities.</p>
              </button>
            </ScrollReveal>

            <ScrollReveal variant="slide-in-left" width="100%" delay={0.2}>
              <button
                onClick={() => setTab('ent')}
                className={`p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] text-left transition-all duration-500 border-2 ${tab === 'ent'
                  ? 'bg-blue-900 text-white border-blue-900 shadow-xl sm:shadow-2xl shadow-blue-900/30 -translate-y-1'
                  : 'bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100'
                  }`}
              >
                <Briefcase className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 ${tab === 'ent' ? 'text-orange-400' : 'text-slate-400'}`} />
                <h3 className="text-lg sm:text-xl font-black mb-1">Business Suite</h3>
                <p className={`text-[10px] sm:text-xs font-medium ${tab === 'ent' ? 'text-blue-100' : 'text-slate-400'}`}>Scalable CRM, HRMS, Accounting and Operations for modern firms.</p>
              </button>
            </ScrollReveal>
          </div>

          {/* Feature Display */}
          <ScrollReveal variant="fade-up" width="100%" className="w-full lg:w-2/3">
            <div className="bg-slate-50 rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-16 relative overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] h-full">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-200/20 rounded-full blur-3xl"></div>

              {/* Education Content */}
              <div className={`transition-all duration-700 ${tab === 'edu' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 absolute inset-0 pointer-events-none'}`}>
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" /> Academic Excellence
                </div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-950 mb-3 sm:mb-4 text-gradient">Complete Institutional Lifecycle</h4>
                <p className="text-slate-600 mb-4 sm:mb-8 font-medium text-sm sm:text-base">From first inquiry to final certification, manage every stakeholder interaction with precision.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {[
                    { t: 'Lifecycle Management', d: 'Smart enrollment, onboarding, and centralized student database.' },
                    { t: 'Academic Operations', d: 'Attendance tracking, course management, and grade schemes.' },
                    { t: 'Progress Intelligence', d: 'Automated report cards with detailed performance analytics.' },
                    { t: 'Teacher-Student Collab', d: 'Interactive portal for notes, assignments, and feedback.' },
                    { t: 'Parent Portal', d: 'Visibility into attendance, fees, and academic milestones.' },
                    { t: 'Specialized Facilities', d: 'Hostel, Library, and Transport management built-in.' }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl shadow-sm flex items-center justify-center text-blue-600 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">{feat.t}</h5>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{feat.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button
                    onClick={() => document.getElementById('academic-features')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-900 text-white rounded-xl sm:rounded-2xl font-bold shadow-lg sm:shadow-xl shadow-blue-900/30 hover:bg-blue-950 transition-colors flex items-center gap-2 text-sm sm:text-base"
                  >
                    Explore Academic Features <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Business Content */}
              <div className={`transition-all duration-700 ${tab === 'ent' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 absolute inset-0 pointer-events-none'}`}>
                <div className="inline-flex items-center gap-2 text-orange-600 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" /> Enterprise Engine
                </div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-950 mb-3 sm:mb-4 text-gradient">Unified Management Suite</h4>
                <p className="text-slate-600 mb-4 sm:mb-8 font-medium text-sm sm:text-base">Leverage the same high-performance platform that manages complex universities for your business needs.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {[
                    { t: 'Lead CRM', d: 'Opportunity management and sales pipeline tracking.' },
                    { t: 'HRMS Pro', d: 'Employee lifecycle, payroll, and performance management.' },
                    { t: 'Task & Tickets', d: 'Operational workflows, task assignment and team accountability.' },
                    { t: 'Modern Accounting', d: 'Bookkeeping, automated invoicing and financial compliance.' },
                    { t: 'Visual Analytics', d: 'Real-time dashboards with cross-module reporting.' },
                    { t: 'Meta Integration', d: 'Direct social media lead capture and CRM sync.' }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl shadow-sm flex items-center justify-center text-orange-600 border border-slate-100">
                        <ClipboardCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">{feat.t}</h5>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{feat.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={onBookDemo}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-xl sm:rounded-2xl font-bold shadow-lg sm:shadow-xl shadow-orange-500/30 hover:bg-orange-600 transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  Request Business Demo <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
