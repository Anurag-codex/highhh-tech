import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { products } from './CatalogPage';

interface FeaturedItemsProps {
  onExplore: (filter?: string) => void;
}

const FeaturedItems: React.FC<FeaturedItemsProps> = ({ onExplore }) => {
  // Select a few items to feature
  const featured = products.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#4CAF50]" />
              <span className="text-[#4CAF50] text-[10px] font-black uppercase tracking-[0.4em]">Curated Selection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none uppercase mb-6">
              FEATURED <span className="text-[#4CAF50]">ITEMS</span>
            </h2>
            <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-widest leading-relaxed">
              Discover our latest arrivals and most sought-after designs. Each piece is a testament to our commitment to quality and innovation.
            </p>
          </div>
          
          <button 
            onClick={() => onExplore('All')}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-black hover:text-[#4CAF50] transition-colors"
          >
            Explore Full Collection
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#4CAF50] group-hover:bg-[#4CAF50] group-hover:text-white transition-all">
              <ArrowRight size={18} />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => onExplore('All')}
            >
              <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden mb-6 border border-gray-100">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                {/* New Arrival Tag */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black text-white text-[8px] font-black uppercase tracking-widest px-3 py-1.5 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#4CAF50] animate-pulse" />
                    New Arrival
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-white font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                    View Details <ChevronRight size={12} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-black text-black uppercase tracking-tight group-hover:text-[#4CAF50] transition-colors">
                  {item.title}
                </h3>
                <span className="text-[#4CAF50] font-black text-xs">{item.price}</span>
              </div>
              <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">{item.category}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual Accent */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-1 border-t border-gray-100 pt-1">
          <div className="bg-gray-50 p-12 flex flex-col justify-center">
            <span className="text-[40px] font-black text-black/5 leading-none mb-4">01</span>
            <h4 className="text-xs font-black text-black uppercase tracking-[0.3em] mb-4">Premium Materials</h4>
            <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest leading-relaxed">
              Sourced from the finest sustainable forests and high-grade metal foundries.
            </p>
          </div>
          <div className="bg-black p-12 flex flex-col justify-center text-white">
            <span className="text-[40px] font-white text-white leading-none mb-4">02</span>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-4">Expert Craftsmanship</h4>
            <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest leading-relaxed">
              Every joint and finish is inspected by our master artisans for absolute perfection.
            </p>
          </div>
          <div className="bg-gray-50 p-12 flex flex-col justify-center">
            <span className="text-[40px] font-black text-black/5 leading-none mb-4">03</span>
            <h4 className="text-xs font-black text-black uppercase tracking-[0.3em] mb-4">Modern Ergonomics</h4>
            <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest leading-relaxed">
              Designed with human physiology in mind to provide comfort that lasts a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
