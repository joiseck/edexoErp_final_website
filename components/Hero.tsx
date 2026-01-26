
import React, { useState, useEffect } from 'react';
import { Play, ShieldCheck, Zap, MessageCircle, Star, GraduationCap, Briefcase, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }}
    />
  ));

  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Enhanced Background with Interactive Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-blue-100/50 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Interactive Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            opacity: isLoaded ? 0.3 : 0
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          {/* Enhanced Badge with Micro-Animation */}
          <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-gradient-to-r from-white to-slate-50 rounded-full shadow-xl border border-slate-100/50 mb-4 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="relative">
              <img src="/Edexo Icon.png" alt="Edexo Icon" className="w-5 h-5 object-contain filter drop-shadow-sm" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            </div>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
              Born for Education, Built for Business
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced Main Headline with Layered Typography */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-blue-950 leading-[0.95] tracking-tighter mb-4 relative z-10">
              <span className="block">From Classroom</span>
              <span className="block text-gradient bg-gradient-to-r from-blue-900 via-blue-600 to-orange-500 bg-clip-text text-transparent">
                to Boardroom
              </span>
            </h1>

            {/* Subtle Underline Animation */}
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>

          {/* Enhanced Subtitle with Typewriter Effect */}
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium tracking-wide">
            Transform your institution or enterprise with Edexo ERP. A purpose-built ecosystem for Academies, Coaching Centers, and Businesses seeking elite-grade automation.
          </p>

          {/* Enhanced CTA Buttons with Better Hierarchy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 group">
            <button
              onClick={onBookDemo}
              className="group/btn w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white rounded-3xl font-extrabold text-base shadow-2xl shadow-blue-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl hover:shadow-blue-900/60 active:translate-y-0 active:scale-95 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-4">
                <span>Request a Demo</span>
                <div className="relative">
                  <Zap className="w-5 h-5 fill-white animate-pulse" />
                  <div className="absolute -inset-1 bg-white/40 rounded-full blur-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </div>
              </span>
            </button>

            <button className="group/btn w-full sm:w-auto px-10 py-5 bg-white hover:bg-gradient-to-r hover:from-slate-50 hover:to-white text-slate-800 border-2 border-slate-200 rounded-3xl font-extrabold text-base transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-300 hover:shadow-orange-400/20 active:translate-y-0 active:scale-95 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/50 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-4">
                <span>Explore Features</span>
                <div className="relative">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <div className="absolute -inset-1 bg-blue-400/20 rounded-full blur-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </div>
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Trusted by 500+ Institutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>99.9% Uptime Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span>24/7 Indian Support</span>
            </div>
          </div>
        </div>

        {/* Enhanced Dashboard Preview */}
        <div className="relative mt-16 group">
          <div className="relative z-10 mx-auto max-w-4xl rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 p-3 shadow-[0_80px_150px_-40px_rgba(30,58,138,0.4)] border-4 border-white/20 group-hover:border-white/40 transition-all duration-700 hover:-translate-y-4">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/50">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                alt="Edexo Dashboard"
                className="w-full h-auto opacity-95 group-hover:scale-[1.03] transition-transform duration-1500 ease-out"
              />
            </div>

            {/* Enhanced Floating UI Elements */}
            <div className="absolute -left-16 top-1/4 glass bg-gradient-to-br from-white/90 to-white/70 p-6 rounded-2xl shadow-2xl hidden lg:block animate-float" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-lg shadow-green-400/50"></div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Academic Operations</span>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-black text-blue-950">94%</p>
                <span className="text-sm text-green-600 font-bold mb-1">Attendance Rate</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-2">Real-time Biometric Sync</p>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-24 animate-pulse"></div>
              </div>
            </div>

            <div className="absolute -right-16 bottom-1/4 glass bg-gradient-to-br from-white/90 to-white/70 p-6 rounded-2xl shadow-2xl hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-3 rounded-xl shadow-lg">
                  <MessageCircle className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">WhatsApp Integration</span>
              </div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Exam Schedule Sent to <br />
                <strong className="text-blue-950 font-black text-lg">850+ Students & Parents</strong>
              </p>
              <div className="flex gap-2 mt-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>

            {/* Interactive Hotspots */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Enhanced Accent Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-gradient-to-r from-blue-400/30 via-orange-400/30 to-blue-400/30 blur-[150px] -z-10 animate-pulse"></div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
            <button className="group flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider">Discover More</span>
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-500" />
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
