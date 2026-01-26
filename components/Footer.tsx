
import React, { useState, useEffect } from 'react';
import { GraduationCap, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram, Youtube, ExternalLink, Map, Navigation, Clock, Building2, Globe, ShieldCheck, Zap, Users } from 'lucide-react';

export const Footer: React.FC = () => {
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
        { name: 'Edu-LMS Pro', desc: 'Learning Management System' },
        { name: 'Hostel & Mess Mgmt', desc: 'Residential Management' },
        { name: 'Smart Fee Treasury', desc: 'Financial Operations' },
        { name: 'Growth CRM', desc: 'Customer Relationship' },
        { name: 'Human Capital HRMS', desc: 'Human Resources' }
      ]
    },
    {
      title: 'Resources', links: [
        { name: 'Help Documentation', desc: 'User Guides & Tutorials' },
        { name: 'API References', desc: 'Developer Documentation' },
        { name: 'Customer Success Stories', desc: 'Real World Examples' },
        { name: 'Security & Trust', desc: 'Compliance & Security' },
        { name: 'Pricing Plans', desc: 'Flexible Options' }
      ]
    },
    {
      title: 'Support', links: [
        { name: '24/7 Support', desc: 'Round the clock assistance' },
        { name: 'Training Programs', desc: 'Staff development' },
        { name: 'Implementation', desc: 'Seamless setup' },
        { name: 'Consultation', desc: 'Expert guidance' },
        { name: 'Community Forum', desc: 'Peer support' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-400 pt-24 pb-12 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gradient-to-r from-blue-400/5 to-orange-400/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Footer Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 opacity-60 shadow-lg shadow-blue-900/30"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">

          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-6 group">
              <div className="relative group-hover:scale-110 transition-transform duration-500">
                <img
                  src="/Edexo Icon.png"
                  alt="Edexo Icon"
                  className="w-14 h-14 object-contain filter drop-shadow-lg"
                />
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tight text-white leading-[0.9]">Edexo</span>
                <span className="text-[12px] font-extrabold text-orange-400 tracking-[0.4em] uppercase -mt-1">ERP</span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed font-medium text-base">
              Transforming the backbone of modern academies and enterprises through intelligent cloud automation. Built for growth, designed for excellence.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`group w-12 h-12 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-gradient-to-br hover:from-white/20 hover:to-white/40 hover:shadow-lg hover:shadow-orange-500/20`}
                  title={social.name}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.hoverColor} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
                  <div className="relative z-10">{social.icon}</div>
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-full px-3 py-1.5">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span className="text-xs text-green-300 font-bold">Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-full px-3 py-1.5">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-blue-300 font-bold">Fast</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-full px-3 py-1.5">
                <Users className="w-4 h-4 text-orange-400" />
                <span className="text-xs text-orange-300 font-bold">Trusted</span>
              </div>
            </div>
          </div>

          {/* Quick Links Sections */}
          {quickLinks.map((section, sectionIdx) => (
            <div key={sectionIdx} className="space-y-6">
              <h4 className="text-white font-bold text-lg mb-6 tracking-tight border-b border-slate-700 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="group">
                    <a
                      href="#"
                      className="flex items-start gap-3 group-hover:text-orange-400 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {link.name}
                        </span>
                        <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300 transition-colors">
                          {link.desc}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Location Section */}
          <div className="space-y-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-8 tracking-tight border-b border-slate-700 pb-2">Get in Touch</h4>

              {/* Contact Methods */}
              <div className="space-y-4">
                <a href="mailto:hello@edexoerp.com" className="flex items-center space-x-4 group p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-orange-500/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500/40 group-hover:to-blue-600/40 transition-colors">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <span className="font-bold text-white">hello@edexoerp.com</span>
                    <p className="text-xs text-slate-400">General Inquiries</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 group p-3 rounded-xl hover:bg-gradient-to-r hover:from-green-500/10 hover:to-green-600/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-green-500/40 group-hover:to-green-600/40 transition-colors">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <span className="font-bold text-white">1800-EDEXO-01</span>
                    <p className="text-xs text-slate-400">Toll Free Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Address Section */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg mb-4 tracking-tight border-b border-slate-700 pb-2">Our Location</h4>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <span className="font-semibold text-white block text-lg">Corporate Headquarters</span>
                  <span className="font-medium text-slate-300 leading-relaxed text-sm">
                    Kaitharath Arcade, Pettah, <br />
                    Poonithura, Ernakulam, <br />
                    Kerala 682038
                  </span>
                </div>
              </div>

              {/* Interactive Map Preview */}
              <div
                className="group cursor-pointer"
                onClick={() => window.open('https://maps.google.com/?q=Kaitharath+Arcade+Pettah+Poonithura+Ernakulam+Kerala+682038', '_blank')}
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 group-hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Map className="w-5 h-5 text-orange-400" />
                        <span className="text-sm font-semibold text-slate-300">View on Map</span>
                      </div>
                      <ExternalLink className="w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs text-slate-400">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-orange-400" />
                        <span>Mon-Sat: 9AM-6PM</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Navigation className="w-4 h-4 text-orange-400" />
                        <span>Get Directions</span>
                      </div>
                    </div>
                  </div>

                  {/* Map Preview Image */}
                  <div className="absolute bottom-0 right-0 w-24 h-16 bg-gradient-to-t from-slate-700 to-transparent rounded-tl-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
          <div className="flex items-center gap-6">
            <p>© {new Date().getFullYear()} Edexo ERP Systems</p>
            <div className="flex gap-1">
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Engineered for Elite Performance</span>
            </div>
          </div>

          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Cookies', 'Security'].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-slate-300 transition-colors group relative"
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 bg-gradient-to-r from-blue-400 to-orange-400 h-0.5 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Live Time Display */}
          <div className="hidden md:flex items-center gap-2 text-slate-400 font-mono text-sm">
            <Clock className="w-4 h-4 text-orange-400" />
            <span>{time.toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
};
