import React from 'react';
import { GraduationCap, Users, BookOpen, Calendar, MessageSquare, Shield, BarChart3, Settings, Zap } from 'lucide-react';

export const AcademicFeatures: React.FC = () => {
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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden" id="academic-features">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-100 mb-6">
            <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Academic Excellence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 leading-tight">
            Complete <span className="text-gradient">Academic Ecosystem</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Everything your institution needs to thrive in the digital age. From smart classrooms to administrative efficiency, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-blue-950 mb-4">{feature.title}</h3>
              <p className="text-slate-600 mb-6 font-medium leading-relaxed">{feature.description}</p>
              <div className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    {detail}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-orange-500 font-bold text-sm">
                Learn More <Zap className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* LMS Showcase */}
        <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] -z-10"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-950" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Next-Gen LMS</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-black leading-tight">
                Intelligent <span className="text-orange-400">Learning</span> Management
              </h3>

              <p className="text-lg text-blue-100/80 font-medium leading-relaxed">
                Transform your teaching experience with our AI-powered learning management system.
                Create engaging content, track progress in real-time, and foster collaborative learning environments.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Interactive Content Creation",
                  "Real-time Progress Analytics",
                  "Collaborative Learning Spaces",
                  "Automated Assessment Tools",
                  "Mobile Learning Support",
                  "Integration with External Tools"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-blue-100/70">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-blue-950 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95">
                  Schedule LMS Demo
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white hover:text-blue-950 transition-all">
                  View Features
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] p-4 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-xl p-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Analytics Dashboard</h4>
                    <p className="text-sm text-blue-100/70">Real-time insights into student performance and engagement metrics.</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Content Management</h4>
                    <p className="text-sm text-blue-100/70">Easy upload and organization of learning materials and resources.</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Communication Hub</h4>
                    <p className="text-sm text-blue-100/70">Seamless interaction between teachers, students, and parents.</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Smart Automation</h4>
                    <p className="text-sm text-blue-100/70">Automated workflows for assignments, grading, and notifications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <h3 className="text-3xl md:text-5xl font-black text-blue-950 mb-8">
            Ready to <span className="text-gradient">Transform</span> Your Institution?
          </h3>
          <p className="text-lg text-slate-600 font-medium mb-12 max-w-2xl mx-auto">
            Join hundreds of educational institutions that have already embraced the future of learning management.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-12 py-5 bg-blue-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/30 hover:bg-blue-950 transition-all hover:-translate-y-1 active:scale-95">
              Get Started Today
            </button>
            <button className="px-12 py-5 bg-transparent border-2 border-blue-900 text-blue-900 rounded-2xl font-bold text-lg hover:bg-blue-900 hover:text-white transition-all">
              Request Custom Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
