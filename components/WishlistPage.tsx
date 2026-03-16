
import React from 'react';
import { MoveLeft, Heart, ShoppingBag, ChevronRight } from 'lucide-react';
import { Product, products } from './CatalogPage';
import { motion, AnimatePresence } from 'framer-motion';

interface WishlistPageProps {
  onBack: () => void;
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  onProductClick: (filter: string) => void;
}

const WishlistPage: React.FC<WishlistPageProps> = ({ onBack, wishlist, onToggleWishlist, onProductClick }) => {
  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="pt-24 md:pt-36 pb-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-16">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#4CAF50] hover:text-black transition-all mb-6 group"
          >
            <MoveLeft size={16} className="group-hover:-translate-x-1.5 transition-transform" />
            Back to Home
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-4 leading-none">
                MY <span className="text-[#4CAF50]">WISHLIST</span>
              </h1>
              <p className="text-gray-400 text-[11px] md:text-sm max-w-lg font-medium leading-relaxed uppercase tracking-wider">
                Your curated selection of premium furniture. Ready to transform your space.
              </p>
            </div>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {wishlistedProducts.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
            >
              {wishlistedProducts.map((product) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  key={product.id} 
                  className="group flex flex-col h-full"
                >
                  <div className="relative mb-6 overflow-hidden aspect-[4/5] bg-gray-50 border border-gray-50">
                    <img 
                      src={product.images[0]} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    <button 
                      onClick={() => onToggleWishlist(product.id)}
                      className="absolute top-4 right-4 p-3 bg-white/95 backdrop-blur-md text-[#4CAF50] shadow-sm border border-black/5 hover:bg-[#4CAF50] hover:text-white transition-all"
                    >
                      <Heart size={16} fill="currentColor" />
                    </button>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-md text-black font-black text-[8px] uppercase tracking-widest px-3 py-1.5 shadow-sm border border-black/5">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto px-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-black text-black leading-tight uppercase tracking-tight">
                        {product.title}
                      </h3>
                      <div className="text-[#4CAF50] font-black text-xs ml-4">
                        {product.price}
                      </div>
                    </div>
                    <p className="text-gray-400 text-[9px] font-bold uppercase tracking-wide line-clamp-2 leading-relaxed mb-4">
                      {product.desc}
                    </p>
                    <button 
                      onClick={() => onProductClick('All')}
                      className="flex items-center gap-2 text-[8px] font-black text-black/20 hover:text-black transition-colors uppercase tracking-[0.3em]"
                    >
                      View in Catalog <ChevronRight size={10} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <ShoppingBag className="mx-auto mb-6 text-gray-100" size={64} />
              <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px]">Your wishlist is empty.</p>
              <button 
                onClick={() => onProductClick('All')}
                className="mt-6 text-[#4CAF50] font-black text-[10px] uppercase tracking-widest border-b border-[#4CAF50]/20 pb-1"
              >
                Explore Catalog
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WishlistPage;
