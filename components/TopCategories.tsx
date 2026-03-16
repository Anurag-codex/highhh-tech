import React from 'react';
import { Armchair, Sofa, Lamp, Tablet, Monitor } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { id: 'Living Room', name: 'Chair', icon: <Armchair size={28} /> },
  { id: 'Living Room', name: 'Sofa-Set', icon: <Sofa size={28} /> },
  { id: 'Decoration', name: 'Decoration', icon: <Lamp size={28} /> },
  { id: 'Dining', name: 'Table & Tools', icon: <Tablet size={28} /> },
  { id: 'Office', name: 'Work Desk', icon: <Monitor size={28} /> }
];

interface TopCategoriesProps {
  onCategoryClick: (category: string) => void;
}

const TopCategories: React.FC<TopCategoriesProps> = ({ onCategoryClick }) => {
  // Triple the items to ensure the marquee has enough content to loop seamlessly
  const marqueeItems = [...categories, ...categories, ...categories];

  return (
    <section className="py-16 bg-white border-b border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 px-6">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-10 bg-gray-200" />
            <span className="text-[#4CAF50] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em]">Best Items</span>
            <div className="h-px w-10 bg-gray-200" />
          </div>
          <h2 className="text-xl md:text-3xl font-black text-black uppercase tracking-widest">
            TOP CATEGORY
          </h2>
        </div>

        {/* Mobile View: Infinite Smooth Marquee */}
        <div className="md:hidden relative w-full overflow-hidden">
          <div className="flex animate-marquee-mobile whitespace-nowrap py-4">
            {marqueeItems.map((cat, idx) => (
              <div 
                key={`${cat.id}-${idx}`}
                onClick={() => onCategoryClick(cat.id)}
                className="inline-flex flex-col items-center mx-4 cursor-pointer"
              >
                <div className="w-28 h-28 border border-gray-100 flex items-center justify-center relative transition-all duration-300 active:border-[#4CAF50] bg-white shrink-0">
                  <div className="absolute inset-1.5 border border-transparent active:border-[#4CAF50]/10 transition-all" />
                  <div className="text-[#4CAF50]">
                    {cat.icon}
                  </div>
                </div>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-3 whitespace-nowrap">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View: Stable Centered Layout */}
        <div className="hidden md:flex flex-wrap justify-center gap-8 px-6 pb-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              onClick={() => onCategoryClick(cat.id)}
              className="flex-none flex flex-col items-center group cursor-pointer"
            >
              <div className="w-40 h-40 border border-gray-100 flex items-center justify-center relative transition-all duration-300 group-hover:border-[#4CAF50] mb-3 bg-white">
                <div className="absolute inset-1.5 border border-transparent group-hover:border-[#4CAF50]/10 transition-all" />
                <div className="text-[#4CAF50] transition-transform duration-500 group-hover:scale-110">
                  {cat.icon}
                </div>
              </div>
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest group-hover:text-black transition-colors whitespace-nowrap">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33%)); }
        }
        .animate-marquee-mobile {
          animation: marquee-mobile 30s linear infinite;
          width: fit-content;
        }
        .animate-marquee-mobile:active {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TopCategories;