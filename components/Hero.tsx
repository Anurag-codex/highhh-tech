import React from 'react';
interface HeroProps {
  onStoryClick: () => void;
  onShopClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStoryClick, onShopClick }) => {
  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-out hover:scale-105 pointer-events-none"
        style={{ 
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1733248818744-17b6c632684f?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      />
      
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/10 md:bg-transparent" />

      {/* Hero Content - Perfectly Centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-xl flex flex-col items-center">
          {/* Badge */}
          <div className="inline-block mb-4 md:mb-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-none border border-black/5 shadow-sm">
            <p className="text-[#4CAF50] font-black tracking-[0.3em] uppercase text-[7px] md:text-[8px]">
              Excellence since 2003
            </p>
          </div>
          
          {/* Main Title - Further Reduced Size for Elegance */}
          <h1 className="text-black font-black text-2xl md:text-4xl lg:text-4xl leading-tight mb-4 md:mb-6 tracking-tighter uppercase drop-shadow-sm max-w-lg">
            MODERN DESIGN MEETS <br />
            <span className="text-[#4CAF50]">COZY COMFORT </span>
          </h1>

          {/* Subtext - Reduced Size */}
          <p className="text-gray-900 text-[9px] md:text-[10px] font-bold leading-relaxed mb-8 md:mb-10 max-w-[200px] md:max-w-xs mx-auto uppercase tracking-wider opacity-80">
            Precision technology meets timeless design. <br className="hidden md:block" />
            We engineer spaces that inspire productivity.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <button 
              onClick={onShopClick}
              className="w-full sm:w-40 bg-[#4CAF50] text-white py-3.5 font-black text-[8px] tracking-[0.2em] uppercase transition-all shadow-xl shadow-green-500/20 active:scale-95 hover:bg-[#43a047]"
            >
              SHOP NOW
            </button>
            <button 
              onClick={onStoryClick}
              className="w-full sm:w-40 bg-black text-white py-3.5 font-black text-[8px] tracking-[0.2em] uppercase transition-all shadow-xl shadow-black/10 active:scale-95 hover:bg-gray-800"
            >
              OUR STORY
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-8 md:h-10 bg-gradient-to-b from-black/0 via-[#4CAF50] to-black/0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-dash" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-dash {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-dash {
          animation: scroll-dash 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;