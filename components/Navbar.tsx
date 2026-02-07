
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, GraduationCap, Sparkles } from 'lucide-react';

interface NavbarProps {
  onBookDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookDemo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   return (
     <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className={`transition-all duration-300 rounded-2xl ${scrolled ? 'glass shadow-lg px-4 sm:px-6 py-2' : 'px-0'}`}>
           <div className="flex justify-between items-center">
             {/* Logo */}
             <a href="#" className="flex items-center space-x-2 sm:space-x-3 group relative py-1.5 transition-transform duration-500 hover:scale-[1.02]">
               <div className="relative">
                 <img
                   src="/Edexo Icon.png"
                   alt="Edexo Icon"
                   className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               </div>
               <div className="flex flex-col">
                 <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-blue-950 leading-[0.8]">Edexo</span>
                 <span className="text-[8px] sm:text-[10px] md:text-[11px] font-extrabold text-orange-500 tracking-[0.3em] uppercase -mt-0.5">ERP</span>
               </div>
             </a>

             {/* Desktop Nav */}
             <div className="hidden md:flex items-center space-x-6 sm:space-x-8 lg:space-x-10">
               <a href="#solutions" className="text-slate-600 hover:text-blue-900 font-semibold text-sm transition-colors">Solutions</a>
               <a href="#modules" className="text-slate-600 hover:text-blue-900 font-semibold text-sm transition-colors">Modules</a>
               <a href="#ai" className="text-slate-600 hover:text-blue-950 font-bold text-sm transition-all flex items-center gap-1.5 px-3 sm:px-4 py-2 hover:bg-orange-50 rounded-full group/ai">
                 <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 group-hover/ai:animate-pulse" />
                 AI Insights
               </a>
               <button
                 onClick={onBookDemo}
                 className="px-4 sm:px-6 py-2 bg-blue-900 hover:bg-blue-950 text-white rounded-xl font-bold text-sm transition-all shadow-[0_10px_20px_-5px_rgba(30,58,138,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(30,58,138,0.4)] active:scale-95 hover:-translate-y-0.5"
               >
                 Schedule Demo
               </button>
             </div>

             {/* Mobile Toggle */}
             <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900 p-2.5" aria-label="Toggle menu">
               {isOpen ? <X /> : <Menu />}
             </button>
           </div>
         </div>
       </div>

       {/* Mobile Menu */}
       {isOpen && (
         <div className="md:hidden fixed inset-0 z-[110] bg-white p-4 sm:p-6 animate-in slide-in-from-right duration-300">
           <div className="flex justify-between items-center mb-8 sm:mb-12">
             <div className="flex items-center space-x-2 sm:space-x-3">
               <img src="/Edexo Icon.png" alt="Edexo Icon" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
               <div className="flex flex-col">
                 <span className="text-xl sm:text-2xl font-black text-blue-950 leading-[0.8]">Edexo</span>
                 <span className="text-[8px] sm:text-[10px] font-extrabold text-orange-500 tracking-[0.2em] uppercase -mt-0.5">ERP</span>
               </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="p-2.5 bg-slate-100 rounded-full" aria-label="Close menu"><X /></button>
           </div>
           <div className="flex flex-col space-y-4 sm:space-y-6">
             <a href="#solutions" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl font-bold text-slate-800">Solutions</a>
             <a href="#modules" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl font-bold text-slate-800">Modules</a>
             <a href="#ai" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl font-bold text-slate-800">AI Platform</a>
             <button
               onClick={() => { onBookDemo(); setIsOpen(false); }}
               className="w-full py-3 sm:py-5 bg-orange-500 text-white rounded-xl sm:rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/30"
             >
               Get Started
             </button>
           </div>
         </div>
       )}
     </nav>
   );
};
