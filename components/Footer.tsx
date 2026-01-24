
import React from 'react';
import { GraduationCap, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-32 pb-12 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <img
                  src="/Edexo Icon.png"
                  alt="Edexo Icon"
                  className="w-12 h-12 object-contain transition-transform duration-500 group-hover:rotate-12"
                />
                <div className="absolute -inset-2 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-[0.8]">Edexo</span>
                <span className="text-[10px] font-extrabold text-orange-500 tracking-[0.3em] uppercase -mt-0.5">ERP</span>
              </div>
            </div>
            <p className="text-base leading-relaxed font-medium">
              Transforming the backbone of modern academies and enterprises through intelligent cloud automation.
            </p>
            <div className="flex space-x-4">
              {[
                { i: <Facebook className="w-5 h-5" />, c: 'hover:text-blue-600' },
                { i: <Instagram className="w-5 h-5" />, c: 'hover:text-pink-600' },
                { i: <Twitter className="w-5 h-5" />, c: 'hover:text-sky-400' },
                { i: <Linkedin className="w-5 h-5" />, c: 'hover:text-blue-500' },
                { i: <Youtube className="w-5 h-5" />, c: 'hover:text-red-600' }
              ].map((s, idx) => (
                <a key={idx} href="#" className={`w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center transition-all ${s.c} hover:bg-white/10`}>
                  {s.i}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Core Platforms</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Edu-LMS Pro</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Hostel & Mess Mgmt</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Smart Fee Treasury</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Growth CRM</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Human Capital HRMS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Resources</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Help Documentation</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">API References</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Customer Success Stories</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Security & Trust</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Direct Support</h4>
            <div className="space-y-6 text-sm font-bold">
              <a href="mailto:hello@edexoerp.com" className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <span>hello@edexoerp.com</span>
              </a>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <span>1800-EDEXO-01</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <span className="font-medium">Knowledge Park III, <br />Greater Noida, UP - India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase">
          <p>© {new Date().getFullYear()} Edexo ERP Systems. Engineered for Elite Performance.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
