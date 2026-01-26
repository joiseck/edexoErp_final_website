
import React, { useState } from 'react';
import { Quote, Play, Users, Star, Award, Video, Mic, Calendar, TrendingUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<string | null>(null);

  const testimonials = [
    {
      id: 'founder',
      name: 'Amit Patel',
      role: 'Founder & CEO',
      org: 'Edexo ERP',
      content: 'We\'re building the future of education management in India. Our vision is to make quality ERP solutions accessible to every growing institution.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      type: 'text',
      stats: [
        { label: 'Institutions Served', value: '500+', icon: <Users className="w-4 h-4" /> },
        { label: 'Years in Market', value: '5+', icon: <Calendar className="w-4 h-4" /> },
        { label: 'Customer Rating', value: '4.9/5', icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: 'beta',
      name: 'Growing Academy',
      role: 'Principal',
      org: 'Pilot Institution',
      content: 'Joining Edexo\'s beta program gives us access to cutting-edge features while helping shape a solution designed for Indian institutions.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=200',
      type: 'video',
      videoPreview: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=400',
      stats: [
        { label: 'Student Growth', value: '+45%', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Efficiency Gain', value: '60%', icon: <Award className="w-4 h-4" /> },
        { label: 'Parent Satisfaction', value: '95%', icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: 'expert',
      name: 'Dr. Sarah Johnson',
      role: 'Education Technology Expert',
      org: 'EdTech India',
      content: 'The focus on affordability and local customization makes Edexo a promising solution for the Indian education sector.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      type: 'text',
      stats: [
        { label: 'Industry Recognition', value: 'Awarded', icon: <Award className="w-4 h-4" /> },
        { label: 'Implementation Success', value: '98%', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'ROI Achieved', value: '12 Months', icon: <Calendar className="w-4 h-4" /> }
      ]
    }
  ];

  const videoTestimonials = [
    {
      id: 'academy-success',
      title: 'Academic Transformation Story',
      speaker: 'Principal Mehta',
      institution: 'Bright Future Academy',
      duration: '2:15',
      preview: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400',
      quote: 'Edexo ERP has revolutionized our academic operations. Attendance tracking, fee management, and parent communication have never been easier.'
    },
    {
      id: 'business-growth',
      title: 'Scaling with Technology',
      speaker: 'Rajesh Kumar',
      institution: 'TechSkills Institute',
      duration: '1:48',
      preview: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=400',
      quote: 'The WhatsApp integration alone has saved us 15 hours per week. Our parents are happier, and our admin team is more productive.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg border border-slate-100 mb-6 group hover:shadow-xl transition-all">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
              Trusted by Educational Leaders
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 leading-tight">
            Success Stories <span className="text-gradient">That Inspire</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Hear from educational institutions and businesses that have transformed their operations with Edexo ERP
          </p>
        </div>

        {/* Video Testimonials Carousel */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {videoTestimonials.map((video, i) => (
              <div key={i} className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2">
                {/* Video Preview */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700">
                  <img
                    src={video.preview}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoPlaying(video.id)}
                      className="group/play w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-3xl"
                    >
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full blur-xl opacity-0 group-hover/play:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-white text-lg">{video.title}</h4>
                        <p className="text-white/80 text-sm">{video.speaker} • {video.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                        <Play className="w-4 h-4 text-white" />
                        <span className="text-white/90 text-sm font-medium">{video.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="p-8">
                  <blockquote className="text-slate-600 italic text-lg leading-relaxed mb-6 border-l-4 border-orange-400 pl-6">
                    "{video.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {video.speaker.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{video.speaker}</p>
                        <p className="text-sm text-slate-500">{video.institution}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl relative shadow-xl border border-slate-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2 group">
              {/* Decorative Quote Icon */}
              <div className="absolute -top-6 left-8 bg-gradient-to-r from-blue-500 to-orange-500 text-white p-4 rounded-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 fill-white" />
              </div>

              {/* Content */}
              <div className="mt-8">
                <p className="text-slate-600 italic mb-8 leading-relaxed text-lg">"{t.content}"</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {t.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 group-hover:border-orange-200 transition-colors">
                      <div className="text-orange-500 mb-2 flex justify-center">{stat.icon}</div>
                      <div className="text-2xl font-black text-blue-950">{stat.value}</div>
                      <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-3 border-slate-100 group-hover:border-orange-400 transition-colors" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{t.role}</p>
                    <p className="text-sm text-slate-400">{t.org}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-orange-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-black mb-4">Join 500+ Growing Institutions</h3>
            <p className="text-lg text-blue-100 mb-8">Trusted by educational leaders across India</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-white">500+</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider">Happy Institutions</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">4.9/5</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider">Customer Rating</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">99.9%</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">24/7</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider">Indian Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
