
import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface CollectionsGridProps {
  onExplore: () => void;
}

const collections = [
  {
    category: "Office",
    title: "Executive Workstations",
    desc: "Ergonomic desks and premium surfaces designed for maximum productivity and architectural precision.",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
  },
  {
    category: "Office",
    title: "Apex Seating Pro",
    desc: "Specifically engineered workstation chairs featuring 3D support for intensive 12+ hour comfort.",
    img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    category: "Living Room",
    title: "Premium Home Sofas",
    desc: "Luxurious velvet and fabric sofas that bring elegance and deep-seat comfort to your residence.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop"
  },
  {
    category: "Dining",
    title: "Modern Dining Sets",
    desc: "Solid oak tables and minimalist chairs crafted for memorable culinary experiences.",
    img: "https://images.unsplash.com/photo-1636138388621-258a72ecb07e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category: "Bedroom",
    title: "Master Suite Collection",
    desc: "Upholstered king beds with integrated storage solutions and reinforced teak frames.",
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop"
  },
  {
    category: "Decoration",
    title: "Architectural Lighting",
    desc: "Halo floor lamps and design accents that define the ambiance of modern interior spaces.",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    category: "Office",
    title: "Director High-Back",
    desc: "Top-tier executive seating with genuine leather finishes and premium knee-tilt mechanics.",
    img: "https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category: "Kitchen",
    title: "Modular Culinary Units",
    desc: "Integrated kitchen solutions with heat-resistant surfaces and soft-close German hardware.",
    img: "https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category: "Living Room",
    title: "Cloud Modular Sofa",
    desc: "The ultimate configurable lounge experience with high-density foam and stain-proof fabrics.",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop"
  }
];

const CollectionsGrid: React.FC<CollectionsGridProps> = ({ onExplore }) => {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-2">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#4CAF50] font-bold text-[10px] uppercase tracking-[0.5em] mb-4">
            Curated Catalog
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-6">
            Signature Collections
          </h2>
          <div className="w-16 h-1 bg-[#4CAF50] rounded-full mb-8" />
          <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
            Discover our range of premium furniture designed for the modern lifestyle. Clear designs, honest materials, and expert craftsmanship.
          </p>
        </div>

        {/* Clean, Raw Image Grid - Expanded to 9 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {collections.map((item, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="relative mb-8 overflow-hidden bg-gray-50 border border-gray-100">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 backdrop-blur-md text-black text-[8px] font-black uppercase tracking-widest px-3 py-1.5 shadow-sm border border-black/5">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-black text-black mb-3 group-hover:text-[#4CAF50] transition-colors tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                  {item.desc}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                  <button 
                    onClick={onExplore}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 group-hover:text-black transition-colors flex items-center gap-2"
                  >
                    VIEW DETAILS <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <ArrowUpRight className="text-gray-100 group-hover:text-[#4CAF50] transition-colors" size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button */}
        <div className="mt-40 flex justify-center">
          <button 
            onClick={onExplore}
            className="group relative flex items-center gap-4 bg-black text-white px-12 py-5 rounded-none overflow-hidden transition-all hover:bg-[#4CAF50] shadow-2xl active:scale-95"
          >
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em]">
              Explore Full Catalog
            </span>
            <div className="relative z-10 w-8 h-8 rounded-none bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowUpRight size={14} />
            </div>
            <div className="absolute inset-0 bg-[#4CAF50] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
