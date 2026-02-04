
import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    { label: 'Modern UI/UX', value: '100%', sub: 'Intuitive Design' },
    { label: 'Platform Uptime', value: '99.9%', sub: 'Cloud Hosted' },
    { label: 'Data Security', value: 'AES-256', sub: 'Enterprise Grade' },
    { label: 'Support', value: '24/7', sub: 'Indian Team' },
  ];

  return (
    <section className="relative z-20 -mt-8 px-4">
      <div className="max-w-6xl mx-auto glass rounded-[2.5rem] shadow-2xl p-8 md:p-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-blue-950 mb-2 tracking-tight group-hover:text-orange-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
