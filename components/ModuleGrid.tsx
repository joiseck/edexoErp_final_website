
import React from 'react';
import { BookOpen, Users, Target, BarChart3, Settings2, Wallet, GraduationCap, ChevronRight, Home, Library, Truck, Smartphone } from 'lucide-react';
import { Module } from '../types';

export const ModuleGrid: React.FC = () => {
  const modules: Module[] = [
    {
      id: 'lms',
      title: 'Academic LMS Pro',
      icon: <BookOpen className="w-7 h-7" />,
      color: 'bg-blue-600',
      description: 'The core of your institution. Digital courseware, proctored exams, and real-time student-teacher collaboration.',
      features: ['Progress Cards', 'Biometric Attendance', 'Assignment Sync']
    },
    {
      id: 'finance',
      title: 'Accounting & Fees',
      icon: <Wallet className="w-7 h-7" />,
      color: 'bg-green-600',
      description: 'Streamlined fee collection, recurring installments, and professional bookkeeping for total financial transparency.',
      features: ['WhatsApp Receipts', 'Payment Gateways', 'Tax Compliance']
    },
    {
      id: 'hostel',
      title: 'Hostel & Facility',
      icon: <Home className="w-7 h-7" />,
      color: 'bg-indigo-600',
      description: 'Complete residential administration. Room allocation, mess planning, visitor logs, and facility maintenance.',
      features: ['Room Mgmt', 'Meal Planning', 'Visitor Tracking']
    },
    {
      id: 'hrms',
      title: 'Human Capital',
      icon: <Users className="w-7 h-7" />,
      color: 'bg-purple-600',
      description: 'Manage faculty and staff. Automated payroll, leave tracking, and performance appraisals in one place.',
      features: ['Payroll Engine', 'Onboarding Flows', 'SLA Monitoring']
    },
    {
      id: 'logistics',
      title: 'Transport & Library',
      icon: <Library className="w-7 h-7" />,
      color: 'bg-amber-600',
      description: 'Efficient library cataloging and vehicle route planning with real-time tracking for students and staff.',
      features: ['Book Tracking', 'Route Planning', 'Vehicle Logs']
    },
    {
      id: 'crm',
      title: 'Growth CRM',
      icon: <Target className="w-7 h-7" />,
      color: 'bg-orange-500',
      description: 'Capture leads directly from Meta & WhatsApp. A visual sales pipeline designed for high-conversion enrollment.',
      features: ['Lead Automation', 'Meta Ads Sync', 'ROI Analytics']
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="modules">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-widest mb-3">
              <div className="w-8 h-[2px] bg-orange-500"></div>
              A Complete Ecosystem
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">Integrated Modules. <br />Seamless Growth.</h2>
            <p className="text-slate-400 text-base font-medium leading-relaxed">
              Every module is engineered to solve a specific challenge. Whether you're managing a coaching center or a multi-campus university, Edexo adapts to your scale.
            </p>
          </div>
          <button className="flex-shrink-0 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all flex items-center gap-2 group text-blue-400">
            View All Specialized Modules
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((m) => (
            <div key={m.id} className="group relative bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/[0.06] hover:border-blue-500/50 transition-all duration-500">
              <div className={`${m.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl shadow-current/30 group-hover:scale-110 transition-transform duration-500`}>
                {m.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors">{m.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed font-medium text-sm">{m.description}</p>

              <div className="space-y-4">
                {m.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    <span className="text-xs font-bold text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
