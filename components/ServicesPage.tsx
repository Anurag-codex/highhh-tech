
import React from 'react';
import { ArrowLeft, Shield, Truck, PenTool, Headphones, Sparkles, Clock } from 'lucide-react';

interface ServicesPageProps {
  onBack: () => void;
  onInquiryClick: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack, onInquiryClick }) => {
  const services = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Custom Design",
      description: "Bespoke furniture tailored to your specific space and aesthetic preferences. Our designers work with you to create unique pieces.",
      details: ["3D Visualization", "Material Selection", "Space Planning"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "White Glove Delivery",
      description: "Premium delivery service including professional assembly and placement in your room of choice, with all packaging removed.",
      details: ["Scheduled Delivery", "Professional Assembly", "Packaging Removal"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Lifetime Warranty",
      description: "We stand behind our craftsmanship. All High Tech Furniture pieces come with a comprehensive lifetime structural warranty.",
      details: ["Structural Integrity", "Material Defects", "Peace of Mind"]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Concierge Support",
      description: "Dedicated support team available to assist with any questions, maintenance advice, or future additions to your collection.",
      details: ["24/7 Availability", "Maintenance Guides", "Exclusive Previews"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Restoration Services",
      description: "Keep your pieces looking brand new. We offer professional cleaning, polishing, and minor repair services for all our products.",
      details: ["Deep Cleaning", "Refinishing", "Component Updates"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Express Shipping",
      description: "For our most popular collections, we offer accelerated shipping options to get your premium comfort delivered faster.",
      details: ["Priority Handling", "Real-time Tracking", "Fast Turnaround"]
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors mb-8 md:mb-12"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-end mb-16 md:mb-24">
          <div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6 md:mb-8">
              PREMIUM <br />
              <span className="text-[#4CAF50]">SERVICES</span>
            </h1>
            <p className="text-base md:text-lg text-black/60 max-w-md leading-relaxed">
              Beyond furniture, we provide a complete ecosystem of support and care to ensure your investment lasts a lifetime.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="h-[1px] w-full bg-black/10 mb-8" />
            <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
              <span>Excellence in Service</span>
              <span>Est. 2003</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-10 border border-black/5 hover:border-[#4CAF50]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4CAF50]/5 rounded-3xl"
            >
              <div className="text-[#4CAF50] mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-4 uppercase">{service.title}</h3>
              <p className="text-black/50 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-black/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 p-8 md:p-20 bg-black rounded-[2rem] md:rounded-[3rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4CAF50]/10 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-6 md:mb-8 leading-none">
              READY TO START YOUR <span className="text-[#4CAF50]">PROJECT?</span>
            </h2>
            <p className="text-white/50 mb-8 md:mb-12 text-base md:text-lg">
              Our design consultants are ready to help you transform your space with our premium collections and custom services.
            </p>
            <button 
              onClick={onInquiryClick}
              className="w-full sm:w-auto bg-[#4CAF50] text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
