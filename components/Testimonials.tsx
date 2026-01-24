
import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Amit Patel',
      role: 'Founder & CEO',
      org: 'Edexo ERP',
      content: 'We\'re building the future of education management in India. Our vision is to make quality ERP solutions accessible to every growing institution.',
      image: 'https://picsum.photos/seed/founder/100/100'
    },
    {
      name: 'Early Beta Partner',
      role: 'Pilot Institution',
      org: 'Growing Academy',
      content: 'Joining Edexo\'s beta program gives us access to cutting-edge features while helping shape a solution designed for Indian institutions.',
      image: 'https://picsum.photos/seed/beta1/100/100'
    },
    {
      name: 'Education Technology Expert',
      role: 'Industry Advisor',
      org: 'EdTech India',
      content: 'The focus on affordability and local customization makes Edexo a promising solution for the Indian education sector.',
      image: 'https://picsum.photos/seed/expert/100/100'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-20">Building the Future Together</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl relative shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="absolute -top-6 left-8 bg-orange-500 text-white p-3 rounded-2xl shadow-lg shadow-orange-500/30">
                <Quote className="w-6 h-6 fill-white" />
              </div>
              
              <p className="text-slate-600 italic mb-8 leading-relaxed mt-4">"{t.content}"</p>
              
              <div className="flex items-center space-x-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-slate-200" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.role}, {t.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
