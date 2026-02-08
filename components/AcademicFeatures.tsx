import React from 'react';
import { GraduationCap, Users, BookOpen, Calendar, MessageSquare, Shield, BarChart3, Settings, Zap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AcademicFeaturesProps {
  onBookDemo: () => void;
}

export const AcademicFeatures: React.FC<AcademicFeaturesProps> = ({ onBookDemo }) => {
  const features = [
    {
      icon: GraduationCap,
      title: "Student Lifecycle Management",
      description: "Complete student journey from inquiry to alumni. Centralized database with smart enrollment workflows and automated onboarding.",
      details: ["Smart Admission Forms", "Batch & Section Management", "Student Portal Access", "Alumni Tracking"]
    },
    {
      icon: Users,
      title: "Teacher & Staff Management",
      description: "Comprehensive HR solution for educational institutions. From recruitment to performance reviews.",
      details: ["Faculty Database", "Class Assignments", "Performance Analytics", "Professional Development"]
    },
    {
      icon: BookOpen,
      title: "Learning Management System",
      description: "Modern LMS with interactive content delivery, assignment management, and collaborative learning spaces.",
      details: ["Digital Content Library", "Assignment Submission", "Interactive Quizzes", "Progress Tracking"]
    },
    {
      icon: Calendar,
      title: "Academic Calendar & Scheduling",
      description: "Intelligent scheduling system that optimizes timetables and manages academic events seamlessly.",
      details: ["Smart Timetable Generation", "Exam Scheduling", "Holiday Management", "Event Coordination"]
    },
    {
      icon: MessageSquare,
      title: "Parent Communication Hub",
      description: "Seamless communication between institution and parents through multiple channels including WhatsApp integration.",
      details: ["Real-time Updates", "Fee Payment Reminders", "Attendance Alerts", "Direct Messaging"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with data protection and compliance with educational standards.",
      details: ["Data Encryption", "Role-based Access", "Audit Trails", "GDPR Compliance"]
    }
  ];



  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden" id="academic-features">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm border border-slate-100 mb-4 sm:mb-6">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-widest">Academic Excellence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-blue-950 mb-4 sm:mb-6 leading-tight">
            Complete <span className="text-gradient">Academic Ecosystem</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto px-2">
            Everything your institution needs to thrive in the digital age. From smart classrooms to administrative efficiency, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {features.map((feature, index) => (
            <ScrollReveal key={index} variant="fade-up" delay={index * 0.1} width="100%" className="h-full">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-blue-950 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-slate-600 mb-4 sm:mb-6 font-medium leading-relaxed text-sm sm:text-base">{feature.description}</p>
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* LMS Showcase */}
        <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl sm:rounded-[3rem] md:rounded-[4rem] p-8 sm:p-12 md:p-16 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 blur-[80px] sm:blur-[100px] -z-10"></div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-full border border-white/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Next-Gen LMS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Intelligent <span className="text-orange-400">Learning</span> Management
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-blue-100/80 font-medium leading-relaxed">
                Transform your teaching experience with our AI-powered learning management system.
                Create engaging content, track progress in real-time, and foster collaborative learning environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Interactive Content Creation",
                  "Real-time Progress Analytics",
                  "Collaborative Learning Spaces",
                  "Automated Assessment Tools",
                  "Mobile Learning Support",
                  "Integration with External Tools"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-blue-100/70">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={onBookDemo}
                  className="px-6 sm:px-8 py-2.5 sm:py-4 bg-white text-blue-950 rounded-lg sm:rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95 text-sm sm:text-base"
                >
                  Schedule LMS Demo
                </button>
                <a
                  href="#features"
                  className="px-6 sm:px-8 py-2.5 sm:py-4 bg-transparent border-2 border-white/30 text-white rounded-lg sm:rounded-xl font-bold hover:bg-white hover:text-blue-950 transition-all flex items-center text-sm sm:text-base"
                >
                  View Features
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-3 sm:p-4 shadow-xl sm:shadow-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Analytics Dashboard</h4>
                    <p className="text-xs sm:text-sm text-blue-100/70">Real-time insights into student performance and engagement metrics.</p>
                  </div>
                  <div className="bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Content Management</h4>
                    <p className="text-xs sm:text-sm text-blue-100/70">Easy upload and organization of learning materials and resources.</p>
                  </div>
                  <div className="bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Communication Hub</h4>
                    <p className="text-xs sm:text-sm text-blue-100/70">Seamless interaction between teachers, students, and parents.</p>
                  </div>
                  <div className="bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Smart Automation</h4>
                    <p className="text-xs sm:text-sm text-blue-100/70">Automated workflows for assignments, grading, and notifications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-24">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-blue-950 mb-6 sm:mb-8">
            Ready to <span className="text-gradient">Transform</span> Your Institution?
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Experience the next generation of educational management tools built for your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              onClick={onBookDemo}
              className="px-8 sm:px-12 py-3 sm:py-5 bg-blue-900 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-blue-900/30 hover:bg-blue-950 transition-all hover:-translate-y-1 active:scale-95"
            >
              Get Started Today
            </button>
            <button
              onClick={onBookDemo}
              className="px-8 sm:px-12 py-3 sm:py-5 bg-transparent border-2 border-blue-900 text-blue-900 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-blue-900 hover:text-white transition-all"
            >
              Request Custom Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
