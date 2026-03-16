
import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerMarquee from './components/PartnerMarquee';
import ExcellenceDetail from './components/ExcellenceDetail';
import TopCategories from './components/TopCategories';
import CollectionsGrid from './components/CollectionsGrid';
import CommitmentSection from './components/CommitmentSection';
import Footer from './components/Footer';
import CatalogPage from './components/CatalogPage';
import StoryPage from './components/StoryPage';
import ServicesPage from './components/ServicesPage';
import InquiryPage from './components/InquiryPage';
import WishlistPage from './components/WishlistPage';
import BackToTop from './components/BackToTop';
import Testimonials from './components/Testimonials';
import FeaturedItems from './components/FeaturedItems';
import Loading from './components/Loading';

export type ViewState = 'home' | 'catalog' | 'story' | 'services' | 'inquiry' | 'wishlist';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [initialCatalogFilter, setInitialCatalogFilter] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>(() => {
    const saved = localStorage.getItem('furniture_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist wishlist
  useEffect(() => {
    localStorage.setItem('furniture_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  // Smooth scroll to top and handle transition state
  useEffect(() => {
    setIsTransitioning(true);
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [view]);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const navigateToCatalog = (filter: string = 'All') => {
    setInitialCatalogFilter(filter);
    setView('catalog');
  };

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    switch (view) {
      case 'catalog':
        return (
          <CatalogPage 
            onBack={() => setView('home')} 
            initialFilter={initialCatalogFilter} 
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            setView={setView}
          />
        );
      case 'wishlist':
        return (
          <WishlistPage 
            onBack={() => setView('home')} 
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onProductClick={navigateToCatalog}
          />
        );
      case 'story':
        return <StoryPage onBack={() => setView('home')} />;
      case 'services':
        return <ServicesPage onBack={() => setView('home')} onInquiryClick={() => setView('inquiry')} />;
      case 'inquiry':
        return <InquiryPage onBack={() => setView('home')} />;
      case 'home':
      default:
        return (
          <>
            <Hero onStoryClick={() => setView('story')} onShopClick={() => navigateToCatalog('All')} />
            <PartnerMarquee />
            <FeaturedItems onExplore={navigateToCatalog} />
            <ExcellenceDetail />
            <TopCategories onCategoryClick={navigateToCatalog} />
            <CollectionsGrid onExplore={() => navigateToCatalog('All')} />
            <CommitmentSection onServicesClick={() => setView('services')} />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#4CAF50] selection:text-white">
      <Navbar 
        setView={(v) => { setInitialCatalogFilter('All'); setView(v); }} 
        currentView={view} 
        wishlistCount={wishlist.length}
      />
      
      <main className={`transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderContent()}
      </main>
      
      <Footer setView={setView} />
      <BackToTop />
    </div>
  );
};

export default App;
