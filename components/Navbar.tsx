
import React, { useState, useEffect } from 'react';
import { ViewState } from '../App';
import { X, Heart } from 'lucide-react';

interface NavbarProps {
  setView: (view: ViewState) => void;
  currentView: ViewState;
  wishlistCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView, wishlistCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = scrolled || currentView === 'catalog' || currentView === 'story' || isMenuOpen;

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const navigate = (view: ViewState) => {
    setView(view);
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[150] flex justify-center p-4 md:p-6 pointer-events-none">
        <nav 
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-in-out w-full max-w-7xl ${
            isDark 
              ? 'bg-black/95 backdrop-blur-xl py-3 px-6 md:px-8 rounded-full border border-white/10' 
              : 'bg-white/70 backdrop-blur-md py-4 px-8 rounded-full md:rounded-none border-b border-black/5'
          }`}
        >
          <div className="flex items-center gap-2 cursor-pointer z-[160]" onClick={() => navigate('home')}>
            {/* <span className={`font-black text-[10px] md:text-base tracking-tighter transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              HIGH TECH <span className="text-[#4CAF50]">FURNITURE</span>
            </span> */}
            <img
              src="/public/hightech-logo.png"
              alt="High Tech Furniture"
              // className={`h-12 md:h-14 h-8 md:h-8 mb-[10px] ${isDark ? "brightness-0 invert" : ""}`}
              className={`h-8 md:h-14 mb-[10px] ${isDark ? "brightness-0 invert sepia hue-rotate-[90deg] saturate-[6]" : ""}`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {['home', 'catalog', 'story', 'services', 'wishlist'].map((v) => (
              <button 
                key={v}
                onClick={() => navigate(v as ViewState)}
                className={`transition-colors text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-2 ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-black/50 hover:text-black'
                } ${currentView === v ? 'text-[#4CAF50] !opacity-100' : ''}`}
              >
                {v === 'story' ? 'Our Story' : v}
                {v === 'wishlist' && wishlistCount > 0 && (
                  <span className="bg-[#4CAF50] text-white text-[8px] px-1.5 py-0.5 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('inquiry')}
              className={`hidden sm:block transition-all duration-300 font-black text-[9px] tracking-[0.3em] uppercase px-6 py-2.5 rounded-full ${
                isDark ? 'bg-[#4CAF50] text-white' : 'bg-black text-white'
              }`}
            >
              Enquiry
            </button>

            {/* Slat-Style Hamburger Toggle */}
            <button 
              onClick={() => navigate('wishlist')}
              className={`lg:hidden transition-colors ${isDark ? 'text-white' : 'text-black'} relative`}
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#4CAF50] text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button 
              onClick={toggleMenu}
              className="lg:hidden relative w-8 h-8 flex items-center justify-center z-[160] outline-none"
            >
              <img
                src="/hamburger.svg"
                alt="Menu"
                className={`w-6 h-6 transition-colors ${isDark ? 'invert' : ''}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* The Full Screen Black Box Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[200] flex flex-col transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* Top Header Section inside Menu */}
        <div className="flex items-center justify-between p-6 pt-8 w-full bg-black border-b border-white/5">
          <div className="flex items-center gap-2">
            {/* <span className="font-black text-[10px] text-white tracking-tighter uppercase">
              HIGH TECH <span className="text-[#4CAF50]">FURNITURE</span>
            </span> */}
            <img
              src="/public/hightech-logo.png"
              alt="High Tech Furniture"
              // className={`h-12 md:h-14 h-8 md:h-8 mb-[10px] ${isDark ? "brightness-0 invert" : ""}`}
              className={`h-8 md:h-14 mb-[10px] ${isDark ? "brightness-0 invert sepia hue-rotate-[90deg] saturate-[6]" : ""}`}
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">
            Menu
          </div>
          <button onClick={toggleMenu} className="text-white hover:text-[#4CAF50] transition-colors p-1">
            <X size={20} strokeWidth={2} />
          </button>
        </div>

          {/* Centered navigation items List */}
          <div className="flex-1 flex flex-col items-center justify-center gap-10">
            <button 
              onClick={() => navigate('home')}
              className={`text-[10px] font-black uppercase tracking-[0.6em] transition-colors ${currentView === 'home' ? 'text-[#4CAF50]' : 'text-white'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigate('catalog')}
              className={`text-[10px] font-black uppercase tracking-[0.6em] transition-colors ${currentView === 'catalog' ? 'text-[#4CAF50]' : 'text-white'}`}
            >
              Catalog
            </button>
            <button 
              onClick={() => navigate('story')}
              className={`text-[10px] font-black uppercase tracking-[0.6em] transition-colors ${currentView === 'story' ? 'text-[#4CAF50]' : 'text-white'}`}
            >
              Our Story
            </button>
            <button 
              onClick={() => navigate('services')}
              className={`text-[10px] font-black uppercase tracking-[0.6em] transition-colors ${currentView === 'services' ? 'text-[#4CAF50]' : 'text-white'}`}
            >
              Services
            </button>
            <button 
              onClick={() => navigate('wishlist')}
              className={`text-[10px] font-black uppercase tracking-[0.6em] transition-colors flex items-center gap-3 ${currentView === 'wishlist' ? 'text-[#4CAF50]' : 'text-white'}`}
            >
              Wishlist
              {wishlistCount > 0 && (
                <span className="bg-[#4CAF50] text-white text-[8px] px-2 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>
            
            <div className="w-10 h-[1px] bg-[#4CAF50]/40 my-2" />
            
            <button 
              onClick={() => navigate('inquiry')}
              className="bg-[#4CAF50] border border-[#4CAF50] text-white px-8 py-3 text-[9px] font-black uppercase tracking-[0.3em] 
hover:bg-[#45A029] hover:border-[#45A045] transition-all"
              >
              Enquiry Now
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
