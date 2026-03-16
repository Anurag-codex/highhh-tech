
import React, { useState } from 'react';
import { ArrowLeft, Send, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

interface InquiryPageProps {
  onBack: () => void;
}

const InquiryPage: React.FC<InquiryPageProps> = ({ onBack }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 5000);
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              GET IN <br />
              <span className="text-[#4CAF50]">TOUCH</span>
            </h1>
            <p className="text-lg text-black/60 max-w-md leading-relaxed mb-12">
              Have a specific project in mind or need more information about our collections? Our team is here to assist you.
            </p>

            <div className="space-y-10">
              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4CAF50] shadow-sm border border-black/5 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-1">Visit Us</h4>
                  <p className="font-bold text-sm md:text-base break-words">14, South, near Ambal Nagar, Ganapathy Housing Unit, VG Rao Nagar, Coimbatore, Tamil Nadu 641006</p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4CAF50] shadow-sm border border-black/5 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-1">Call Us</h4>
                  <p className="font-bold text-sm md:text-base">+91 95006 44413</p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4CAF50] shadow-sm border border-black/5 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-1">Email Us</h4>
                  <p className="font-bold text-sm md:text-base break-all">hightechindustriess@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-black/5">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-[#4CAF50]/10 rounded-full flex items-center justify-center text-[#4CAF50] mb-8">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-black tracking-tight mb-4">MESSAGE SENT!</h3>
                <p className="text-black/50 max-w-xs">
                  Thank you for reaching out. A design consultant will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 ml-4">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Anu rag"
                      className="w-full bg-[#F8F9FA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#4CAF50] transition-all outline-none font-medium"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 ml-4">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="anurag@example.com"
                      className="w-full bg-[#F8F9FA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#4CAF50] transition-all outline-none font-medium"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 ml-4">Subject</label>
                  <select 
                    className="w-full bg-[#F8F9FA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#4CAF50] transition-all outline-none font-medium appearance-none"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  >
                    <option>General Inquiry</option>
                    <option>Custom Project</option>
                    <option>Wholesale/B2B</option>
                    <option>Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 ml-4">Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#F8F9FA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#4CAF50] transition-all outline-none font-medium resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-[#4CAF50] transition-all duration-500 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;
