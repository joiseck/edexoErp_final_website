
import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, Zap, Target, Search } from 'lucide-react';

interface AIInsightsProps {
  onBookDemo: () => void;
}

export const AIInsights: React.FC<AIInsightsProps> = ({ onBookDemo }) => {
  const [activeExample, setActiveExample] = useState(0);

  const examples = [
    {
      q: "Which students are at risk of missing the upcoming DGCA exam based on current progress?",
      a: <>I've identified <span className="text-orange-400 font-bold">14 students</span> whose average score is below 65%. I recommend sending automated WhatsApp refresher material to them by tomorrow.</>
    },
    {
      q: "What is the projected revenue for next month based on current enrollments?",
      a: <>Projected revenue is <span className="text-orange-400 font-bold">₹24.5 Lakhs</span>. This is a 12% increase from last month, driven by 45 new enrollments in the Advanced Physics course.</>
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExample((prev) => (prev + 1) % examples.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

   return (
     <section className="py-16 sm:py-20 md:py-24 bg-slate-950 relative overflow-hidden" id="ai">
       {/* Dynamic background lights */}
       <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 blur-[80px] sm:blur-[100px] lg:blur-[120px]"></div>
       <div className="absolute bottom-1/4 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 blur-[80px] sm:blur-[100px] lg:blur-[120px]"></div>

       <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
           <div className="space-y-6 sm:space-y-8">
             <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white/5 rounded-full border border-white/10">
               <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
               <span className="text-[10px] sm:text-sm font-bold text-white uppercase tracking-widest text-gradient">AI-Powered Intelligence</span>
             </div>

             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
               Talk to your data in <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Plain English.</span>
             </h2>

             <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-medium">
               No complex SQL or technical expertise required. Our conversational AI assistant uncovering trends and patterns automatically. Ask questions naturally, get instant answers.
             </p>

             <div className="space-y-3 sm:space-y-4 pt-4">
               {[
                 'Uncover trends and patterns automatically',
                 'Generate insights without technical skills',
                 'Explore scenarios and predictions',
                 'Make data-driven decisions faster'
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-slate-300">
                   <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                   {item}
                 </div>
               ))}
             </div>
           </div>

           <div className="relative group">
             {/* The Chat Mockup */}
             <div className="relative z-10 bg-[#0f172a] border-4 sm:border-8 border-slate-900 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-4 sm:p-6 lg:p-8 overflow-hidden">
               <div className="flex items-center justify-between mb-6 sm:mb-10 border-b border-white/5 pb-4 sm:pb-6">
                 <div className="flex items-center gap-2 sm:gap-3">
                   <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                     <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                   </div>
                   <div>
                     <p className="font-bold text-white text-sm sm:text-base">Edexo AI Assistant</p>
                     <p className="text-[8px] sm:text-[10px] text-green-500 font-bold uppercase tracking-widest">Always Learning</p>
                   </div>
                 </div>
               </div>

               <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[320px]">
                 {examples.map((ex, i) => (
                   <div
                     key={i}
                     className={`transition-all duration-700 absolute inset-x-0 top-0 ${i === activeExample ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                       }`}
                   >
                     <div className="flex justify-end mb-4 sm:mb-6">
                       <div className="bg-blue-600/20 text-blue-100 p-3 sm:p-5 rounded-2xl sm:rounded-3xl rounded-tr-none text-xs sm:text-sm font-medium border border-blue-500/20 max-w-[85%] shadow-lg shadow-blue-900/20">
                         "{ex.q}"
                       </div>
                     </div>

                     <div className="flex justify-start gap-3 sm:gap-4">
                       <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-lg sm:rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                         <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                       </div>
                       <div className="bg-white/5 text-slate-300 p-3 sm:p-5 rounded-2xl sm:rounded-3xl rounded-tl-none text-xs sm:text-sm border border-white/10 max-w-[85%] leading-relaxed shadow-lg">
                         {ex.a}
                       </div>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="pt-4 sm:pt-10 flex gap-2 sm:gap-3">
                 <div className="flex-grow bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 px-3 sm:px-5 py-2 sm:py-3 text-slate-500 text-xs sm:text-sm italic flex items-center gap-2">
                   <Search className="w-3 h-3 sm:w-4 sm:h-4" /> Ask a business question...
                 </div>
                 <button
                   onClick={onBookDemo}
                   className="bg-orange-500 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg shadow-orange-500/20"
                 >
                   <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                 </button>
               </div>
             </div>

             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/20 blur-[80px] sm:blur-[100px] -z-10 animate-pulse"></div>
           </div>
         </div>
       </div>
     </section>
   );
};
