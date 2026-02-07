
import React, { useState, useEffect } from 'react';
import { GraduationCap, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram, Youtube, ExternalLink, Map, Navigation, Clock, Building2, Globe, ShieldCheck, Zap, Users } from 'lucide-react';

interface FooterProps {
  onBookDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookDemo }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: 'Facebook',
      color: 'hover:text-blue-600',
      hoverColor: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: 'Instagram',
      color: 'hover:text-pink-600',
      hoverColor: 'from-pink-400 to-pink-600'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: 'Twitter',
      color: 'hover:text-sky-400',
      hoverColor: 'from-sky-400 to-sky-600'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      color: 'hover:text-blue-500',
      hoverColor: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: 'YouTube',
      color: 'hover:text-red-600',
      hoverColor: 'from-red-400 to-red-600'
    }
  ];

  const quickLinks = [
    {
      title: 'Core Platforms', links: [
        { name: 'Edu-LMS Pro', id: 'academic-features' },
        { name: 'Hostel & Mess Mgmt', id: 'modules' },
        { name: 'Smart Fee Treasury', id: 'modules' },
        { name: 'Growth CRM', id: 'modules' },
        { name: 'Human Capital HRMS', id: 'modules' }
      ]
    },
    {
      title: 'Resources', links: [
        { name: 'Help Documentation', action: onBookDemo },
        { name: 'API References', action: onBookDemo },
        { name: 'Customer Success Stories', id: 'solutions' },
        { name: 'Security & Trust', id: 'features' },
        { name: 'Pricing Plans', action: onBookDemo }
      ]
    },
    {
      title: 'Support', links: [
        { name: '24/7 Support', action: onBookDemo },
        { name: 'Training Programs', action: onBookDemo },
        { name: 'Implementation', action: onBookDemo },
        { name: 'Consultation', action: onBookDemo },
        { name: 'Community Forum', action: onBookDemo }
      ]
    }
  ];

  return (
     <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-400 pt-12 sm:pt-16 pb-10 sm:pb-12 overflow-hidden relative">
       <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 sm:mb-12">
           {/* Brand Section */}
           <div className="space-y-4 sm:space-y-6">
             <div className="flex items-center space-x-3 group">
               <img src="/Edexo Icon.png" alt="Edexo Icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
               <div className="flex flex-col">
                 <span className="text-xl sm:text-2xl font-black text-white">Edexo</span>
                 <span className="text-[8px] sm:text-[10px] font-extrabold text-orange-400 tracking-[0.3em] uppercase">ERP</span>
               </div>
             </div>
             <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
               Intelligent cloud automation for modern academies.
             </p>
             <div className="flex space-x-2 sm:space-x-3">
               {socialLinks.slice(0, 4).map((social, idx) => (
                 <a key={idx} href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
                   {social.icon}
                 </a>
               ))}
             </div>
           </div>

           {/* Quick Links */}
           {quickLinks.map((section, idx) => (
             <div key={idx} className="space-y-3 sm:space-y-4">
               <h4 className="text-white font-bold text-sm sm:text-base border-b border-slate-800 pb-2">{section.title}</h4>
               <ul className="space-y-2">
                 {section.links.map((link: any, lIdx) => (
                   <li key={lIdx}>
                     <button 
                       onClick={() => {
                         if (link.id) {
                           document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                         } else if (link.action) {
                           link.action();
                         }
                       }}
                       className="text-xs sm:text-sm hover:text-orange-400 transition-colors text-left"
                     >
                       {link.name}
                     </button>
                   </li>
                 ))}
               </ul>
             </div>
           ))}

           {/* Contact */}
           <div className="space-y-3 sm:space-y-4">
             <h4 className="text-white font-bold text-sm sm:text-base border-b border-slate-800 pb-2">Contact</h4>
             <div className="space-y-2 sm:space-y-3">
               <a href="mailto:hello@edexoerp.com" className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm hover:text-white transition-colors">
                 <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" /> hello@edexoerp.com
               </a>
               <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                 <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" /> 1800-EDEXO-01
               </div>
               <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                 <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mt-0.5" />
                 <span className="leading-tight">Kaitharath Arcade, Pettah,<br />Ernakulam, Kerala</span>
               </div>
             </div>
           </div>
         </div>

         {/* Footer Bottom */}
         <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] font-bold tracking-widest text-slate-500 uppercase">
           <p>© {new Date().getFullYear()} Edexo ERP Systems</p>
           <div className="flex gap-2 sm:gap-4">
             {['Privacy', 'Terms', 'Security'].map((item, idx) => (
               <a key={idx} href="#" className="hover:text-slate-300 transition-colors">{item}</a>
             ))}
           </div>
         </div>
       </div>
       {/* Decorative Elements */}
       <div className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-xl animate-pulse"></div>
       <div className="absolute bottom-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
     </footer>
   );
};
