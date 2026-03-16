
import React, { useState } from 'react';
import { MoveLeft, Target, Eye, Store, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface StoryPageProps {
  onBack: () => void;
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className={`text-[11px] md:text-sm font-black uppercase tracking-widest transition-colors ${isOpen ? 'text-[#4CAF50]' : 'text-black group-hover:text-[#4CAF50]'}`}>
          {question}
        </span>
        {isOpen ? <ChevronUp size={18} className="text-[#4CAF50]" /> : <ChevronDown size={18} className="text-gray-300" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
};

const StoryPage: React.FC<StoryPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#4CAF50] hover:text-black transition-all mb-16 group"
        >
          <MoveLeft size={16} className="group-hover:-translate-x-1.5 transition-transform" />
          Back to Home
        </button>

        {/* Hero Section */}
        <div className="mb-24">
          <div className="inline-block mb-4 bg-[#F1F8F1] px-4 py-1.5 border border-[#4CAF50]/10">
            <span className="text-[#4CAF50] font-black tracking-[0.3em] uppercase text-[8px] md:text-[9px]">Our Journey</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-8 leading-none uppercase">
            LEGACY OF <br />
            <span className="text-[#4CAF50]">EXCELLENCE</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#4CAF50]" />
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-black">About High Tech Furniture</h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
              High Tech Furniture is a prominent player in the interior decoration industry with an experience of more than 2.3 decades. We can cogitate to fabricate unique designs to suit any kind of living spaces - both commercial & domestic villas. 
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
              We can enliven your interiors with superior quality durable materials and sterling techniques. Our proficiency in the field along with the skillful crew can conduct streamlined site visits, client discussions and conceive a plan to suit your requirements not exceeding your budgets.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://content.jdmagicbox.com/comp/coimbatore/q8/0422px422.x422.141127133404.a5q8/catalogue/high-tech-furniture-ganapathy-coimbatore-office-furniture-dealers-4228ox6wi9.jpg" 
              alt="Design Process" 
              className="w-full aspect-[4/3] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4CAF50] -z-10" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-gray-50 p-12 border border-gray-100 group hover:border-[#4CAF50]/30 transition-all">
            <div className="w-14 h-14 bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#4CAF50] group-hover:text-white transition-all">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-widest mb-4">Our Mission</h3>
            <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wide leading-relaxed">
              With our multidisciplinary Interior Designing skills we intend to bring a new dimension to the Interior Designing.
            </p>
          </div>
          <div className="bg-gray-50 p-12 border border-gray-100 group hover:border-[#4CAF50]/30 transition-all">
            <div className="w-14 h-14 bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#4CAF50] group-hover:text-white transition-all">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-widest mb-4">Our Vision</h3>
            <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wide leading-relaxed">
              Our vision is to grow into and create a chain of Interior Designer Stores across India.
            </p>
          </div>
        </div>

        {/* Showroom Section */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <div className="flex items-center gap-4 mb-8">
                 <Store size={24} className="text-[#4CAF50]" />
                 <h2 className="text-2xl font-black uppercase tracking-widest">Our Showroom</h2>
               </div>
               <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium mb-6">
                 With Interior Designing as our main outset, we cater to a multitude of Services, designing interiors with utmost style, comfort and expectations. Our Showroom at Coimbatore is set up at a space of 7,500sq.ft. with a huge display exhibiting the important requisites of Offices & Homes.
               </p>
               <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                 Our products are manufactured exclusively by us at our own manufacturing facility to ensure quality and durability. We can offer world class interior designing solutions that can transform your living spaces - offices or homes - into attractive and comfort driven areas comprising style & design efficiency.
               </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative p-4 border-2 border-black">
                 <img 
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Showroom" 
                  className="w-full object-cover aspect-video"
                 />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white/95 backdrop-blur-md p-8 border border-black/5 shadow-2xl text-center">
                      <div className="text-4xl font-black text-[#4CAF50] mb-1">7,500</div>
                      <div className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">Square Feet</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle size={32} className="mx-auto text-[#4CAF50] mb-4" />
            <h2 className="text-3xl font-black uppercase tracking-tighter">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-2">
            <FAQItem 
              question="Do you provide installation?" 
              answer="Our installers are trained to the very highest standards. They are equipped with the latest resources and are fully aware of health and safety guidelines. In conjunction with the design/space planning process and the furniture specification and costing process, we will provide you with delivery & installation." 
            />
            <FAQItem 
              question="What is your Warranty and Inspection?" 
              answer="We know that cooperation with the customer does not end with the delivery of the ordered products. Our long-term warranty, technical inspections and service - support are an important part of our offer. We believe that only long term support, including after-sales assistance, guarantees our company a true success on the market." 
            />
            <FAQItem 
              question="What are your delivery options?" 
              answer="We understand the importance of the smooth running of every project from conception to completion. Our factory trained team will ensure that you are supported consistently and with easy communication channels. Our service is designed to offer our clients, complete peace of mind. We frequently operate within a working office environment with minimal disruption to the client." 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default StoryPage;
