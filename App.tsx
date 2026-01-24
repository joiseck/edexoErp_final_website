
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ModuleGrid } from './components/ModuleGrid';
import { IndustryFocus } from './components/IndustryFocus';
import { Features } from './components/Features';
import { AIInsights } from './components/AIInsights';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';
import { Zap, MessageSquare, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-200 selection:text-orange-900">
      <Navbar onBookDemo={() => setIsDemoModalOpen(true)} />
      
      <main className="flex-grow">
        <Hero onBookDemo={() => setIsDemoModalOpen(true)} />
        <Stats />
        
        {/* Industry Focus - Education & Enterprise */}
        <IndustryFocus />
        
        {/* Core Modules Grid */}
        <ModuleGrid />
        
        {/* AI Capabilities */}
        <AIInsights />

        {/* Mission Section */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 mb-8">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-8 leading-tight">
              Making Quality <br />
              <span className="text-gradient">Technology Accessible.</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
              We believe every growing institution deserves access to powerful management tools. Edexo ERP is designed for Indian schools, coaching centers, and startups who need smart solutions without enterprise complexity or pricing.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                 <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 mx-auto">
                   <ShieldCheck className="w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-blue-950 mb-2">Integrated Platform</h4>
                 <p className="text-xs text-slate-500 font-medium">No more data silos. Student data flows into accounting, and HR connects with operations.</p>
               </div>
               <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                 <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-4 mx-auto">
                   <Zap className="w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-blue-950 mb-2">Startup-Friendly</h4>
                 <p className="text-xs text-slate-500 font-medium">Affordable pricing that grows with your institution. No long-term contracts or hidden fees.</p>
               </div>
               <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                 <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-4 mx-auto">
                   <MessageSquare className="w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-blue-950 mb-2">Local Support</h4>
                 <p className="text-xs text-slate-500 font-medium">Indian team that understands your needs and responds when you need us.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Deep Messaging Section */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-[4rem] p-10 md:p-20 overflow-hidden relative shadow-2xl">
               <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] -z-10"></div>
               
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                   <div className="w-16 h-16 bg-orange-500 rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-orange-500/20">
                     <MessageSquare className="w-8 h-8 text-white" />
                   </div>
                   <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                     WhatsApp API <br />
                     <span className="text-orange-400">Communication Hub.</span>
                   </h2>
                   <p className="text-xl text-blue-100/70 font-medium leading-relaxed">
                     Reach parents and students where they actually are. Automated notifications for every stage of the academic journey.
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {[
                       'Fee Payment Reminders',
                       'Exam Schedules & Results',
                       'Attendance Alerts',
                       'Important Circulars',
                       'Event Notifications',
                       'Direct Parent Messaging'
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-white font-bold text-sm">
                         <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center p-1">
                           <Zap className="w-3 h-3 text-white fill-white" />
                         </div>
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 <div className="relative group">
                   <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[3rem] p-4 shadow-2xl">
                     <img 
                       src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800" 
                       className="rounded-[2rem] w-full h-auto object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-700"
                       alt="WhatsApp Integration" 
                     />
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>
        
        <Features />
        
        <Testimonials />
        
        {/* Modern Final CTA */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto glass rounded-[4rem] p-12 md:p-24 text-center relative z-10 shadow-2xl">
            <h2 className="text-4xl md:text-7xl font-black text-blue-950 mb-8 leading-tight tracking-tight">
              Ready to redefine <br /><span className="text-gradient">efficiency?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Smart solutions for growing institutions. Simple setup, powerful results, Indian pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto px-12 py-6 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-xl shadow-2xl shadow-orange-500/30 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3"
              >
                Book a Demo
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="w-full sm:w-auto px-12 py-6 bg-blue-900 hover:bg-blue-950 text-white rounded-2xl font-black text-xl shadow-2xl shadow-blue-900/30 transition-all hover:-translate-y-1 active:scale-95">
                Contact Sales
              </button>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/20 blur-[150px] -z-10 rounded-full"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-orange-400/20 blur-[150px] -z-10 rounded-full"></div>
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
