
import React from 'react';
import { Truck, Settings, HeartHandshake, ShieldCheck } from 'lucide-react';

interface CommitmentSectionProps {
  onServicesClick?: () => void;
}

const CommitmentSection: React.FC<CommitmentSectionProps> = ({ onServicesClick }) => {
  const features = [
    {
      icon: <Truck className="text-[#4CAF50]" size={28} />,
      title: "Express Delivery",
      desc: "Fast, reliable logistics within ergonomic innovation and beyond to ensure your space is ready when you are."
    },
    {
      icon: <Settings className="text-[#4CAF50]" size={28} />,
      title: "Free Installation",
      desc: "Our skilled technicians handle the assembly and placement, leaving you with a ready-to-use space."
    },
    {
      icon: <HeartHandshake className="text-[#4CAF50]" size={28} />,
      title: "Lifetime Support",
      desc: "A commitment to quality means we're always here for maintenance, adjustments, or future upgrades."
    },
    {
      icon: <ShieldCheck className="text-[#4CAF50]" size={28} />,
      title: "5-Year Warranty",
      desc: "Peace of mind guaranteed with a comprehensive warranty covering all structural and material defects."
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F1F8F1]">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-16">
          <p className="text-[#4CAF50] font-bold text-[10px] uppercase tracking-widest mb-4">Service Excellence</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our commitment to <span className="text-[#4CAF50]">seamless</span> <br />
            <span className="text-[#4CAF50]">service</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From the first consultation to final installation, we ensure every step of your journey is handled with professional care and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-10 rounded-xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="bg-[#F1F8F1] w-16 h-16 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#4CAF50]/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onServicesClick}
            className="bg-black text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#4CAF50] transition-all duration-500 shadow-xl shadow-black/10"
          >
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
