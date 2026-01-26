
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ModuleGrid } from './components/ModuleGrid';
import { IndustryFocus } from './components/IndustryFocus';
import { AcademicFeatures } from './components/AcademicFeatures';
import { Features } from './components/Features';
import { AIInsights } from './components/AIInsights';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';
import { Zap, MessageSquare, ArrowRight, ShieldCheck, Heart, Sparkles, Star, TrendingUp, Users, Globe } from 'lucide-react';

const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Enhanced CTA Button Component
  const EnhancedCTA = ({
    onClick,
    children,
    variant = 'primary',
    size = 'lg',
    icon = null
  }: {
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
  }) => {
    const baseClasses = "relative overflow-hidden transition-all duration-500 font-bold rounded-2xl shadow-xl flex items-center justify-center gap-3 group";

    const sizeClasses = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-7 py-3.5 text-base",
      lg: "px-10 py-5 text-lg"
    };

    const variantClasses = {
      primary: "bg-blue-900 text-white shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-1 active:translate-y-0 active:scale-95",
      secondary: "bg-orange-500 text-white shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 active:translate-y-0 active:scale-95",
      ghost: "bg-white/10 backdrop-blur-md border border-white/20 text-blue-950 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1"
    };

    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <span className="relative flex items-center justify-center gap-2">
          {icon && <span className="relative transition-transform duration-500 group-hover:scale-110">{icon}</span>}
          <span>{children}</span>
        </span>
      </button>
    );
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-100 selection:text-orange-900">
      {/* Global Mouse Follower */}
      <div
        className="fixed top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-orange-400/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out z-50"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          opacity: scrollY < 100 ? 0.4 : 0
        }}
      />

      <Navbar onBookDemo={() => setIsDemoModalOpen(true)} />

      <main className="flex-grow">
        <Hero onBookDemo={() => setIsDemoModalOpen(true)} />
        <Stats />

        {/* Industry Focus - Education & Enterprise */}
        <IndustryFocus />

        {/* Academic Features Showcase */}
        <AcademicFeatures />

        {/* Core Modules Grid */}
        <ModuleGrid />

        {/* AI Capabilities */}
        <AIInsights />

        {/* Enhanced Mission Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-xl border border-slate-100 mb-8 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative">
                <Heart className="w-6 h-6 text-red-500 fill-red-500 animate-pulse" />
                <div className="absolute -inset-2 bg-red-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-bold text-slate-700 uppercase tracking-widest bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
                Our Mission
              </span>
              <Sparkles className="w-5 h-5 text-orange-500 animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-8 leading-tight">
              Making Quality <br />
              <span className="text-gradient bg-gradient-to-r from-blue-900 via-blue-600 to-orange-500 bg-clip-text text-transparent">
                Technology Accessible
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-4xl mx-auto">
              We believe every growing institution deserves access to powerful management tools. Edexo ERP is designed for Indian schools, coaching centers, and startups who need smart solutions without enterprise complexity or pricing.
            </p>

            {/* Enhanced Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Integrated Platform',
                  desc: 'No more data silos. Student data flows into accounting, and HR connects with operations.',
                  icon: <ShieldCheck className="w-8 h-8" />,
                  color: 'from-blue-400 to-blue-600',
                  stat: '100% Data Sync'
                },
                {
                  title: 'Startup-Friendly',
                  desc: 'Affordable pricing that grows with your institution. No long-term contracts or hidden fees.',
                  icon: <Zap className="w-8 h-8" />,
                  color: 'from-orange-400 to-orange-600',
                  stat: 'Zero Setup Cost'
                },
                {
                  title: 'Local Support',
                  desc: 'Indian team that understands your needs and responds when you need us.',
                  icon: <MessageSquare className="w-8 h-8" />,
                  color: 'from-green-400 to-green-600',
                  stat: '24/7 Support'
                }
              ].map((feature, i) => (
                <div key={i} className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden relative">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color.split(' ')[1]}/5 to-${feature.color.split(' ')[3]}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed font-medium mb-6">{feature.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className={`font-bold text-${feature.color.split(' ')[1]} text-lg`}>{feature.stat}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 text-orange-400 fill-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: `${idx * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Deep Messaging Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-2xl group">
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '0.5s' }}></div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-500">
                    <MessageSquare className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                    WhatsApp API <br />
                    <span className="text-orange-400">Communication Hub</span>
                  </h2>
                  <p className="text-lg md:text-xl text-blue-100/80 font-medium leading-relaxed">
                    Reach parents and students where they actually are. Automated notifications for every stage of the academic journey.
                  </p>

                  {/* Enhanced Feature List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { item: 'Fee Payment Reminders', icon: <Users className="w-4 h-4" /> },
                      { item: 'Exam Schedules & Results', icon: <TrendingUp className="w-4 h-4" /> },
                      { item: 'Attendance Alerts', icon: <ShieldCheck className="w-4 h-4" /> },
                      { item: 'Important Circulars', icon: <Globe className="w-4 h-4" /> },
                      { item: 'Event Notifications', icon: <Sparkles className="w-4 h-4" /> },
                      { item: 'Direct Parent Messaging', icon: <MessageSquare className="w-4 h-4" /> }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300 hover:border-orange-400/50">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                          <Zap className="w-4 h-4 text-white fill-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold text-sm">{feature.item}</span>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative group">
                  <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[3rem] p-4 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800"
                      className="rounded-[2rem] w-full h-auto object-cover opacity-95 group-hover:scale-[1.03] transition-transform duration-1000"
                      alt="WhatsApp Integration"
                    />
                  </div>
                  {/* Floating Stats */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-bold">95% Response Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />

        <Testimonials />

        {/* Enhanced Final CTA */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto glass rounded-[3rem] p-10 md:p-20 text-center relative z-10 shadow-2xl border border-white/20">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-blue-950 leading-tight tracking-tight">
                Ready to redefine <br /><span className="text-gradient bg-gradient-to-r from-blue-900 via-blue-600 to-orange-500 bg-clip-text text-transparent">efficiency?</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Smart solutions for growing institutions. Simple setup, powerful results, Indian pricing. Join 500+ institutions transforming their operations today.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <EnhancedCTA
                onClick={() => setIsDemoModalOpen(true)}
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-6 h-6" />}
              >
                Book a Demo
              </EnhancedCTA>

              <EnhancedCTA
                onClick={() => setIsDemoModalOpen(true)}
                variant="ghost"
                size="lg"
                icon={<Zap className="w-6 h-6" />}
              >
                Contact Sales
              </EnhancedCTA>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Trusted by 500+ Institutions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span>24/7 Indian Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Zero Setup Cost</span>
              </div>
            </div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-[150px] -z-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-orange-600/20 blur-[150px] -z-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </section>
      </main>

      <Footer />

      {isDemoModalOpen && (
        <BookDemoModal onClose={() => setIsDemoModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
