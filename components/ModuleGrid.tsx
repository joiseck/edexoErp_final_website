
import React from 'react';
import { ScrollReveal } from './ScrollReveal';
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
    <section className="py-12 sm:py-16 bg-slate-900 text-white overflow-hidden relative" id="modules">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 sm:mb-8 lg:mb-10 gap-4 sm:gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-orange-400 font-bold text-[8px] sm:text-[10px] uppercase tracking-widest mb-2">
              <div className="w-4 h-[1px] sm:w-6 sm:h-[1.5px] bg-orange-500"></div>
              A Complete Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3 text-white">Integrated Modules</h2>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
              Every module is engineered to solve a specific challenge. Edexo adapts to your scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {modules.map((m, idx) => (
            <ScrollReveal key={m.id} variant="fade-up" delay={idx * 0.1} width="100%" className="h-full">
              <div className="group relative bg-white/[0.03] border border-white/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl hover:bg-white/[0.05] hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className={`${m.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  {m.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-2 text-white group-hover:text-blue-400 transition-colors">{m.title}</h3>
                <p className="text-slate-400 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">{m.description}</p>

                <div className="grid grid-cols-1 gap-2">
                  {m.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
