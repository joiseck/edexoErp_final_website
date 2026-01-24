
import React from 'react';
import { Smartphone, ShieldCheck, Zap, Globe, MessageCircle, CreditCard } from 'lucide-react';

export const Features: React.FC = () => {
  const highlights = [
    {
      title: 'WhatsApp Integrated',
      desc: 'Auto-notifications for fees, attendance, and exam results directly to parent phones.',
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: 'Essential Integrations',
      desc: 'Key platforms work together seamlessly to streamline your operations.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Payment Ready',
      desc: 'Multiple payment gateways (UPI, Bank, Online) pre-integrated for instant use.',
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      title: 'Responsive Design',
      desc: 'Seamless management from any device—Desktop, Tablet, or Mobile.',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: 'Secure by Design',
      desc: 'Built-in security features to protect your institution\'s sensitive information.',
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: 'Scalable Architecture',
      desc: 'Grows with your institution from small startup to established organization.',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Built for Growing Institutions.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Essential features designed for Indian institutions, with room to grow as you scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {highlights.map((f, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
