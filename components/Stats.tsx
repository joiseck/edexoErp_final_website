
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Stats: React.FC = () => {
  const stats = [
    { label: 'Modern UI/UX', value: '100%', sub: 'Intuitive Design' },
    { label: 'Platform Uptime', value: '99.9%', sub: 'Cloud Hosted' },
    { label: 'Data Security', value: 'AES-256', sub: 'Enterprise Grade' },
    { label: 'Support', value: '24/7', sub: 'Indian Team' },
  ];

  return (
    <section className="relative z-20 -mt-8 px-4">
      <div className="max-w-6xl mx-auto glass rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.1} className="text-center group" width="100%">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-950 mb-1 sm:mb-2 tracking-tight group-hover:text-orange-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-800 uppercase tracking-widest mb-1">
                {stat.label}
              </div>
              <div className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                {stat.sub}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
