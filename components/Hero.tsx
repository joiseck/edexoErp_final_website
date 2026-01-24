
import React from 'react';
import { Play, ShieldCheck, Zap, MessageCircle, Star, GraduationCap, Briefcase } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-36 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <img src="/Edexo Icon.png" alt="Edexo Icon" className="w-5 h-5 object-contain" />
            <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">Born for Education, Built for Business</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-blue-950 leading-[1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            From Classroom <br />
            <span className="text-gradient">to Boardroom.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 font-medium">
            Transform your institution or enterprise with Edexo ERP. A purpose-built ecosystem for Academies, Coaching Centers, and Businesses seeking elite-grade automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <button
              onClick={onBookDemo}
              className="w-full sm:w-auto px-10 py-5 bg-blue-900 hover:bg-blue-950 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-900/30 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              Request a Demo
              <Zap className="w-5 h-5 fill-white" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-100 rounded-2xl font-bold text-lg transition-all hover:shadow-xl flex items-center justify-center gap-3">
              Explore Features
              <ShieldCheck className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mt-20 animate-in zoom-in-95 duration-1000 delay-500">
          <div className="relative z-10 mx-auto max-w-5xl rounded-[2.5rem] bg-slate-900 p-3 shadow-[0_50px_100px_-20px_rgba(30,58,138,0.25)] border-8 border-white group">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                alt="Edexo Dashboard"
                className="w-full h-auto opacity-95 group-hover:scale-[1.02] transition-transform duration-1000"
              />
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -left-12 top-1/4 glass p-5 rounded-2xl shadow-2xl hidden lg:block animate-float">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-bold text-slate-400 uppercase">Academic Ops</span>
              </div>
              <p className="text-2xl font-black text-blue-950">94% Attendance</p>
              <p className="text-xs font-bold text-green-600">Real-time Biometric Sync</p>
            </div>

            <div className="absolute -right-12 bottom-1/4 glass p-5 rounded-2xl shadow-2xl hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-xs font-bold text-slate-800">WhatsApp Alert</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Exam Schedule Sent to <br /><strong>850+ Students & Parents</strong></p>
            </div>
          </div>

          {/* Accent Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-400/20 blur-[120px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};
