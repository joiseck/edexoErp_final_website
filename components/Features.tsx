
import React, { useState, useEffect } from 'react';
import { Smartphone, ShieldCheck, Zap, Globe, MessageCircle, CreditCard, Users, Calendar, TrendingUp, Settings, Database, BarChart3 } from 'lucide-react';

export const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('[data-features-section]');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 'whatsapp-integration',
      title: 'WhatsApp Integrated',
      desc: 'Auto-notifications for fees, attendance, and exam results directly to parent phones.',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'from-green-400 to-green-600',
      gradient: 'bg-gradient-to-br from-green-50 to-green-50/50',
      border: 'border-green-200',
      stats: [
        { label: 'Messages Sent', value: '10M+', icon: <Users className="w-4 h-4" /> },
        { label: 'Response Rate', value: '95%', icon: <TrendingUp className="w-4 h-4" /> }
      ]
    },
    {
      id: 'essential-integrations',
      title: 'Essential Integrations',
      desc: 'Key platforms work together seamlessly to streamline your operations.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-400 to-blue-600',
      gradient: 'bg-gradient-to-br from-blue-50 to-blue-50/50',
      border: 'border-blue-200',
      stats: [
        { label: 'Platforms Connected', value: '15+', icon: <Settings className="w-4 h-4" /> },
        { label: 'Data Sync Speed', value: 'Real-time', icon: <Zap className="w-4 h-4" /> }
      ]
    },
    {
      id: 'payment-ready',
      title: 'Payment Ready',
      desc: 'Multiple payment gateways (UPI, Bank, Online) pre-integrated for instant use.',
      icon: <CreditCard className="w-8 h-8" />,
      color: 'from-orange-400 to-orange-600',
      gradient: 'bg-gradient-to-br from-orange-50 to-orange-50/50',
      border: 'border-orange-200',
      stats: [
        { label: 'Payment Methods', value: '10+', icon: <Database className="w-4 h-4" /> },
        { label: 'Transaction Success', value: '99.9%', icon: <ShieldCheck className="w-4 h-4" /> }
      ]
    },
    {
      id: 'responsive-design',
      title: 'Responsive Design',
      desc: 'Seamless management from any device—Desktop, Tablet, or Mobile.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-purple-400 to-purple-600',
      gradient: 'bg-gradient-to-br from-purple-50 to-purple-50/50',
      border: 'border-purple-200',
      stats: [
        { label: 'Device Compatibility', value: '100%', icon: <Globe className="w-4 h-4" /> },
        { label: 'User Experience', value: '5-Star', icon: <BarChart3 className="w-4 h-4" /> }
      ]
    },
    {
      id: 'secure-by-design',
      title: 'Secure by Design',
      desc: 'Built-in security features to protect your institution\'s sensitive information.',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'from-red-400 to-red-600',
      gradient: 'bg-gradient-to-br from-red-50 to-red-50/50',
      border: 'border-red-200',
      stats: [
        { label: 'Data Encryption', value: 'AES-256', icon: <ShieldCheck className="w-4 h-4" /> },
        { label: 'Uptime Guarantee', value: '99.9%', icon: <TrendingUp className="w-4 h-4" /> }
      ]
    },
    {
      id: 'scalable-architecture',
      title: 'Scalable Architecture',
      desc: 'Grows with your institution from small startup to established organization.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-indigo-400 to-indigo-600',
      gradient: 'bg-gradient-to-br from-indigo-50 to-indigo-50/50',
      border: 'border-indigo-200',
      stats: [
        { label: 'Institution Size', value: '1-10000+', icon: <Users className="w-4 h-4" /> },
        { label: 'Performance', value: 'Lightning Fast', icon: <Zap className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden" data-features-section>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg border border-slate-100 mb-6 group hover:shadow-xl transition-all">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
              Core Capabilities
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 leading-tight">
            Built for Growing <span className="text-gradient">Institutions</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Essential features designed for Indian institutions, with room to grow as you scale. Every feature is crafted to solve real challenges faced by educational leaders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden relative ${isVisible ? 'animate-in slide-in-from-bottom-4 duration-1000' : ''}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Feature Header */}
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{feature.title}</h3>

                <p className="text-slate-600 leading-relaxed font-medium text-base mb-6">
                  {feature.desc}
                </p>

                {/* Feature Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {feature.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 group-hover:border-orange-200 transition-colors">
                      <div className={`text-${feature.color.split('-')[1]}-${feature.color.split('-')[2]} flex-shrink-0`}>
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Elements */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>

                  <button className="group/btn flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-orange-500 transition-colors">
                    Learn More
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full flex items-center justify-center text-white text-xs group-hover/btn:scale-110 transition-transform duration-300">
                      →
                    </div>
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-100 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-12 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-black">Time-Saving Automation</h4>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Reduce administrative workload by 60% with automated workflows for attendance, fee collection, and communication.
            </p>
            <div className="mt-6 flex gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold">Smart Scheduling</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold">Auto-Reminders</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold">Report Generation</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-black">Growth Analytics</h4>
            </div>
            <p className="text-orange-100 leading-relaxed">
              Make data-driven decisions with comprehensive analytics and real-time insights into your institution's performance.
            </p>
            <div className="mt-6 flex gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold">Performance Metrics</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold">Trend Analysis</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold">Custom Reports</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
