
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "JEYAVEERA PANDIAN",
    role: "",
    content: "High Tech Furniture exceeded my expectations with their exceptional support, timely delivery, and top-notch quality. Their team was incredibly helpful and responsive throughout the entire process. The furniture arrived right on schedule and in perfect condition.",
    rating: 5
  },
  {
    name: "Wesley mathew",
    role: "",
    content: "Best place to furnish your home. We bought a customised sofa and cot. They have variety of collection with different comfort. Since they are the manufacturers they explain each and everything very well about the product, like foam nd it's density nd GSM of the fabric and many.",
    rating: 5
  },
  {
    name: "Vasanthi chellisha",
    role: "",
    content: "We purchased a sofa from Hi tech and the quality of the product is amazing. Also the service was so good and they were so patient with all their customers.Especially Prince Xavier was so kind and compasionate to his work. Would definitely go back and recommend others as well...",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Header */}
          <div className="lg:col-span-4">
            <span className="text-[#4CAF50] font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">
              Voices of Trust
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter leading-none mb-8">
              WHAT OUR <br />
              <span className="text-[#4CAF50]">CLIENTS</span> SAY
            </h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed uppercase tracking-wider max-w-xs">
              Direct feedback from the industry leaders who have transformed their spaces with our precision-engineered solutions.
            </p>
          </div>

          {/* Testimonials List */}
          <div className="lg:col-span-8 space-y-20">
            {testimonials.map((t, idx) => (
              <div key={idx} className="group">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#4CAF50] text-[#4CAF50]" />
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-medium text-black tracking-tight leading-tight mb-8 group-hover:text-[#4CAF50] transition-colors duration-500">
                  "{t.content}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-[#4CAF50]" />
                  <div>
                    <h4 className="font-black text-black uppercase tracking-widest text-[10px]">{t.name}</h4>
                    <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-32 pt-12 border-t border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/user${i}/80/80`} 
                    alt="User" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
              Join 100+ satisfied partners
            </span>
          </div>
          
          <a 
            href="https://www.google.com/search?q=High+Tech+Furniture+Coimbatore+Reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4"
          >
            <span className="text-[10px] font-black text-black uppercase tracking-[0.3em] group-hover:text-[#4CAF50] transition-colors">
              Read all Google Reviews
            </span>
            <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-[#4CAF50] group-hover:bg-[#4CAF50] group-hover:text-white transition-all">
              <Star size={14} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
