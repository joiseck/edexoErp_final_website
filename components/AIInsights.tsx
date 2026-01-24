
import React from 'react';
import { Sparkles, MessageSquare, Zap, Target, Search } from 'lucide-react';

export const AIInsights: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden" id="ai">
      {/* Dynamic background lights */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/10 blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-bold text-white uppercase tracking-widest text-gradient">AI-Powered Intelligence</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Talk to your data in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Plain English.</span>
            </h2>
            
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              No complex SQL or technical expertise required. Our conversational AI assistant uncovering trends and patterns automatically. Ask questions naturally, get instant answers.
            </p>

            <div className="space-y-4 pt-4">
               {[
                 'Uncover trends and patterns automatically',
                 'Generate insights without technical skills',
                 'Explore scenarios and predictions',
                 'Make data-driven decisions faster'
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                   <Zap className="w-4 h-4 text-orange-500" />
                   {item}
                 </div>
               ))}
            </div>
          </div>

          <div className="relative group">
            {/* The Chat Mockup */}
            <div className="relative z-10 bg-[#0f172a] border-8 border-slate-900 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-8 overflow-hidden">
               <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Edexo AI Assistant</p>
                      <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Always Learning</p>
                    </div>
                  </div>
               </div>

               <div className="space-y-6">
                 <div className="flex justify-end">
                   <div className="bg-blue-600/20 text-blue-100 p-5 rounded-3xl rounded-tr-none text-sm font-medium border border-blue-500/20 max-w-[85%]">
                     "Which students are at risk of missing the upcoming DGCA exam based on current progress?"
                   </div>
                 </div>

                 <div className="flex justify-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/5 text-slate-300 p-5 rounded-3xl rounded-tl-none text-sm border border-white/10 max-w-[85%] leading-relaxed">
                      I've identified <span className="text-orange-400 font-bold">14 students</span> whose average score is below 65%. I recommend sending automated WhatsApp refresher material to them by tomorrow.
                    </div>
                 </div>

                 <div className="pt-10 flex gap-2">
                   <div className="flex-grow bg-white/5 rounded-2xl border border-white/10 px-5 py-3 text-slate-500 text-sm italic flex items-center gap-2">
                     <Search className="w-4 h-4" /> Ask a business question...
                   </div>
                   <button className="bg-orange-500 p-3 rounded-2xl shadow-lg shadow-orange-500/20">
                     <Target className="w-5 h-5 text-white" />
                   </button>
                 </div>
               </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/20 blur-[100px] -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
