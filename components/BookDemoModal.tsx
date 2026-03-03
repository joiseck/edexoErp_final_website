
import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface BookDemoModalProps {
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ onClose }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-white rounded-2xl sm:rounded-3xl w-full max-w-xl max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 p-6 sm:p-8 md:p-12">
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="overflow-y-auto max-h-[80vh]">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-2">Thank You!</h2>
            <p className="text-sm text-slate-500 font-medium">We've received your request. Our team will contact you soon to schedule your demo.</p>
            <button 
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl sm:rounded-3xl w-full max-w-xl max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-600 z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-6 sm:p-8 md:p-12 overflow-y-auto max-h-[90vh]">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-2">Book Your Free Demo</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">See how Edexo can transform your operations in 30 minutes.</p>
          </div>
          
          <form action="https://formspree.io/f/mreanbay" method="POST" className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-slate-700">Full Name</label>
                <input type="text" name="fullName" className="w-full p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm sm:text-base" placeholder="John Doe" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-slate-700">Work Email</label>
                <input type="email" name="email" className="w-full p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm sm:text-base" placeholder="john@academy.com" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-bold text-slate-700">Phone Number <span className="text-slate-400 font-normal">(Optional)</span></label>
              <input type="tel" name="phone" className="w-full p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm sm:text-base" placeholder="+91 98765 43210" />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-bold text-slate-700">Institution / Business Name</label>
              <input type="text" name="institution" className="w-full p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm sm:text-base" placeholder="Apex Academy Inc." required />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-bold text-slate-700">Primary Module Interest</label>
              <select name="module" className="w-full p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer text-sm sm:text-base">
                <option>All-in-One ERP</option>
                <option>Education LMS & Mgmt</option>
                <option>HRMS & Payroll</option>
                <option>CRM & Marketing Sync</option>
                <option>AI Analytics</option>
              </select>
            </div>
            
            <div className="pt-3 sm:pt-4">
              <button 
                disabled={status === 'submitting'}
                className="w-full py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? 'Submitting...' : 'Request Demo Session'}
                {status !== 'submitting' && <Send className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </form>
          
          {status === 'error' && (
            <p className="mt-4 text-center text-sm text-red-500">Something went wrong. Please try again.</p>
          )}
          
          <p className="mt-6 sm:mt-8 text-center text-[10px] sm:text-xs text-slate-400 font-medium">
            By submitting this form, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
