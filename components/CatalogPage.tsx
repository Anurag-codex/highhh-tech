import React, { useState, useMemo, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info, MoveLeft, Search, ShoppingBag, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductSkeleton } from './Loading';

export interface Product {
  id: number;
  category: string;
  title: string;
  price: string;
  desc: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    category: "Office",
    title: "Apex Workstation Chair",
    price: "₹12,499",
    desc: "Specifically designed for long workstation hours. Features synchronized tilt, high-density mesh, and multi-functional 3D armrests for peak ergonomic support.",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1200",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200"
    ]
  },
  {
    id: 2,
    category: "Office",
    title: "Director High-Back",
    price: "₹24,500",
    desc: "Premium executive seating with genuine leather finish and knee-tilt mechanism. Provides ultimate lumbar protection for decision-makers.",
    images: [
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?q=80&w=1200",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200"
    ]
  },
  {
    id: 3,
    category: "Office",
    title: "ErgoFlow Task Chair",
    price: "₹9,200",
    desc: "Lightweight and breathable. Perfect for home offices and collaborative workstations. Features an auto-balance tension system.",
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200"
    ]
  },
  {
    id: 4,
    category: "Office",
    title: "Matrix Gaming Chair",
    price: "₹18,999",
    desc: "High-performance ergonomic chair with 180-degree recline and premium cold-cure foam padding. Built for intensive digital sessions.",
    images: [
      "https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=1200",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200"
    ]
  },
  {
    id: 5,
    category: "Office",
    title: "Aura Executive Desk",
    price: "₹45,999",
    desc: "A masterpiece of modern office design. Features premium walnut finish, integrated cable management, and a spacious work surface.",
    images: [
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1200",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
    ]
  },
  {
    id: 6,
    category: "Office",
    title: "Zenith Stand-Up Desk",
    price: "₹38,000",
    desc: "Electric height-adjustable desk with memory presets and ultra-quiet dual motors. Transition from sitting to standing in seconds.",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
    ]
  },
  {
    id: 7,
    category: "Living Room",
    title: "Velvet Accent Chair",
    price: "₹15,800",
    desc: "A luxurious statement piece for any living area. Upholstered in premium royal velvet with gold-finished stainless steel legs.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200"
    ]
  },
  {
    id: 8,
    category: "Living Room",
    title: "Nordic Velvet Sofa",
    price: "₹82,000",
    desc: "Luxurious 3-seater sofa upholstered in spill-resistant premium velvet. Hand-crafted wooden base and high-density foam.",
    images: [
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1200",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200"
    ]
  },
  {
    id: 9,
    category: "Living Room",
    title: "Cloud Modular Sofa",
    price: "₹1,45,000",
    desc: "Infinitely configurable modular sofa system. Feather-soft cushions and heavy-duty linen fabric for the ultimate lounge experience.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200"
    ]
  },
  {
    id: 10,
    category: "Living Room",
    title: "Serenity Recliner",
    price: "₹28,500",
    desc: "Push-back manual recliner with built-in lumbar support. Top-grain leather finish in a rich mahogany tone.",
    images: [
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?q=80&w=1200",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200"
    ]
  },
  {
    id: 11,
    category: "Dining",
    title: "Symmetry Oak Table",
    price: "₹54,000",
    desc: "Modern minimalist dining table made from sustainably sourced solid white oak. Comfortably seats 6 adults.",
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e16747d52c?q=80&w=1200",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1200"
    ]
  },
  {
    id: 12,
    category: "Dining",
    title: "Bistro Counter Stool",
    price: "₹7,200",
    desc: "Industrial-chic bar stool with a distressed wood seat and matte black metal frame. Perfect for kitchen islands.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200"
    ]
  },
  {
    id: 13,
    category: "Dining",
    title: "Marble Arch Dining",
    price: "₹95,000",
    desc: "Stunning Carrara marble top dining table with a unique geometric pedestal base in brushed gold.",
    images: [
      "https://images.unsplash.com/photo-1530018607912-eff2df114f11?q=80&w=1200",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1200"
    ]
  },
  {
    id: 14,
    category: "Bedroom",
    title: "Elysian King Bed",
    price: "₹1,25,000",
    desc: "A royal experience. Features an upholstered headboard, hidden hydraulic storage, and reinforced teak frame.",
    images: [
      "https://images.unsplash.com/photo-1531835597964-b49e077a701d?q=80&w=1200",
      "https://images.unsplash.com/photo-1505693419173-42b9258a6347?q=80&w=1200"
    ]
  },
  {
    id: 15,
    category: "Bedroom",
    title: "Monarch Canopy Bed",
    price: "₹1,80,000",
    desc: "Traditional four-poster canopy bed with modern clean lines. Hand-carved solid mahogany with silk-blend headboard.",
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200",
      "https://images.unsplash.com/photo-1505693357370-58c3fbc36a5a?q=80&w=1200"
    ]
  },
  {
    id: 16,
    category: "Kitchen",
    title: "Linear Modular Unit",
    price: "₹2,10,000",
    desc: "Full-scale modular kitchen solution. Glossy anti-scratch finishes, soft-close hardware, and heat-resistant countertops.",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200",
      "https://images.unsplash.com/photo-1556909114-4c36e03d1b3f?q=80&w=1200"
    ]
  },
  {
    id: 17,
    category: "Decoration",
    title: "Halo Floor Lamp",
    price: "₹8,900",
    desc: "Modern arc lamp with a marble base and adjustable gold-finished arm. Perfect for reading nooks.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1200"
    ]
  },
  {
    id: 18,
    category: "Decoration",
    title: "Urban Bookshelf",
    price: "₹14,500",
    desc: "Open-concept industrial bookshelf with solid wood tiers and architectural steel supports.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200"
    ]
  },
  {
    id: 19,
    category: "Office",
    title: "Neo Workspace Pod",
    price: "₹85,000",
    desc: "All-in-one private acoustic workspace pod. Soundproof glass walls and integrated ventilation/lighting.",
    images: [
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1200",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
    ]
  },
  {
    id: 20,
    category: "Living Room",
    title: "Plush Ottoman Set",
    price: "₹11,000",
    desc: "Set of two velvet ottomans with hidden storage. Can be used as extra seating or a chic footrest.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200"
    ]
  },
  {
    id: 21,
    category: "Dining",
    title: "Horizon Sideboard",
    price: "₹42,000",
    desc: "Sleek low-profile sideboard featuring fluted glass doors and a solid teak frame. Ample storage for fine china.",
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e16747d52c?q=80&w=1200",
      "https://images.unsplash.com/photo-1530018607912-eff2df114f11?q=80&w=1200"
    ]
  },
  {
    id: 22,
    category: "Office",
    title: "Nova Task Pro",
    price: "₹15,400",
    desc: "The next generation of task seating. Responsive flex-back technology and cooling mesh for all-day comfort.",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1200",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200"
    ]
  },
  {
    id: 23,
    category: "Bedroom",
    title: "Slate Nightstand",
    price: "₹6,800",
    desc: "Minimalist two-drawer nightstand with wireless charging pad integrated into the top surface.",
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200",
      "https://images.unsplash.com/photo-1531835597964-b49e077a701d?q=80&w=1200"
    ]
  },
  {
    id: 24,
    category: "Decoration",
    title: "Crystal Pendant",
    price: "₹12,999",
    desc: "Luxury light fixture featuring hand-cut lead crystals and a polished chrome housing. A centerpiece for any room.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200",
      "https://images.unsplash.com/photo-1519219788371-567ad3ff24d0?q=80&w=1200"
    ]
  },
  {
    id: 25,
    category: "Office",
    title: "Draft Station Desk",
    price: "₹32,000",
    desc: "Professional drafting table with tilt-top adjustment and dedicated side storage for architectural tools.",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
    ]
  },
  {
    id: 26,
    category: "Living Room",
    title: "Prism Coffee Table",
    price: "₹12,500",
    desc: "Geometric glass top with a brushed steel frame. A statement piece that adds transparency and light.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1200"
    ]
  },
  {
    id: 27,
    category: "Office",
    title: "Stealth Gaming Desk",
    price: "₹21,500",
    desc: "Z-shaped heavy-duty gaming desk with RGB lighting, headphone hook, and cable management tray.",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
    ]
  },
  {
    id: 28,
    category: "Dining",
    title: "Velvet Dining Chairs",
    price: "₹18,000",
    desc: "Set of two ergonomic dining chairs upholstered in emerald velvet with slender black tapered legs.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200"
    ]
  },
  {
    id: 29,
    category: "Office",
    title: "Elite Boardroom Table",
    price: "₹1,10,000",
    desc: "Expansive solid mahogany table for high-stakes meetings. Integrated connectivity ports and leather-wrapped edge.",
    images: [
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1200",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
    ]
  },
  {
    id: 30,
    category: "Bedroom",
    title: "Ivory Dresser",
    price: "₹24,000",
    desc: "Six-drawer dresser with soft-close mechanisms and custom brass handles. Finished in a premium high-gloss lacquer.",
    images: [
      "https://images.unsplash.com/photo-1531835597964-b49e077a701d?q=80&w=1200",
      "https://images.unsplash.com/photo-1505693419173-42b9258a6347?q=80&w=1200"
    ]
  },
  {
    id: 31,
    category: "Living Room",
    title: "Onyx Media Unit",
    price: "₹36,500",
    desc: "Floating media console with integrated LED lighting and acoustic fabric paneling for high-fidelity audio.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200"
    ]
  },
  {
    id: 32,
    category: "Kitchen",
    title: "Granite Prep Island",
    price: "₹1,15,000",
    desc: "Professional-grade kitchen island with solid granite top, wine storage, and industrial rolling casters.",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200",
      "https://images.unsplash.com/photo-1556909114-4c36e03d1b3f?q=80&w=1200"
    ]
  },
  {
    id: 33,
    category: "Decoration",
    title: "Abstract Wire Sculpt",
    price: "₹5,200",
    desc: "Hand-bent iron wire sculpture. A minimalist accent for modern shelving units and workstations.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200",
      "https://images.unsplash.com/photo-1519219788371-567ad3ff24d0?q=80&w=1200"
    ]
  },
  {
    id: 34,
    category: "Office",
    title: "Cortex Privacy Screen",
    price: "₹4,800",
    desc: "Acoustic felt desk divider that reduces noise and enhances focus in open-plan office environments.",
    images: [
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1200",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
    ]
  },
  {
    id: 35,
    category: "Dining",
    title: "Quartz Bar Table",
    price: "₹22,000",
    desc: "Tall bistro table with white quartz top and gold-finished tripod base. Ideal for luxury lounge areas.",
    images: [
      "https://images.unsplash.com/photo-1530018607912-eff2df114f11?q=80&w=1200",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1200"
    ]
  }
];

interface CatalogPageProps {
  onBack: () => void;
  initialFilter?: string;
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  setView: (view: string) => void;
}

const CatalogPage: React.FC<CatalogPageProps> = ({ onBack, initialFilter = 'All', wishlist, onToggleWishlist, setView }) => {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const categories = ['All', 'Office', 'Living Room', 'Dining', 'Bedroom', 'Kitchen', 'Decoration'];

  useEffect(() => {
    setIsLocalLoading(true);
    setActiveFilter(initialFilter);
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => setIsLocalLoading(false), 500);
    return () => clearTimeout(timer);
  }, [initialFilter]);

  const handleFilterChange = (cat: string) => {
    setIsLocalLoading(true);
    setActiveFilter(cat);
    const timer = setTimeout(() => setIsLocalLoading(false), 400);
    return () => clearTimeout(timer);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = activeFilter === 'All' || p.category === activeFilter;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProduct) {
      setActiveImgIdx((prev) => (prev + 1) % selectedProduct.images.length);
    }
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProduct) {
      setActiveImgIdx((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
    }
  };

  return (
    <div className="pt-24 md:pt-36 pb-32 min-h-screen bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb & Navigation */}
        <div className="mb-10 md:mb-16">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#4CAF50] hover:text-black transition-all mb-6 group"
          >
            <MoveLeft size={16} className="group-hover:-translate-x-1.5 transition-transform" />
            Return to Showcase
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-4 leading-none">
                OUR <span className="text-[#4CAF50]">CATALOG</span>
              </h1>
              <p className="text-gray-400 text-[11px] md:text-sm max-w-lg font-medium leading-relaxed uppercase tracking-wider">
                Precision-engineered solutions for the modern era. Filter by category or search for specific models.
              </p>
            </div>

            {/* Dynamic Search Bar */}
            <div className="relative w-full lg:max-w-md">
              <input 
                type="text"
                placeholder="SEARCH FOR PRODUCTS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 px-12 py-5 text-[10px] font-black uppercase tracking-widest focus:ring-4 focus:ring-[#4CAF50]/10 focus:border-[#4CAF50]/30 transition-all outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-4 md:px-6 py-2.5 md:py-3 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${
                activeFilter === cat 
                  ? 'bg-black text-white border-black shadow-xl shadow-black/10' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-black hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Product Grid */}
        <AnimatePresence mode="popLayout">
          {isLocalLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {[...Array(8)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
            >
              {filteredProducts.map((product) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  key={product.id} 
                  className="group cursor-pointer flex flex-col h-full"
                  onClick={() => {
                    setSelectedProduct(product);
                    setActiveImgIdx(0);
                    document.body.style.overflow = 'hidden';
                  }}
                >
                  <div className="relative mb-6 overflow-hidden aspect-[4/5] bg-gray-50 border border-gray-50">
                    <img 
                      src={product.images[0]} 
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-md text-black font-black text-[8px] uppercase tracking-widest px-3 py-1.5 shadow-sm border border-black/5">
                        {product.category}
                      </span>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
                      className={`absolute top-4 right-4 p-3 backdrop-blur-md shadow-sm border border-black/5 transition-all z-10 ${
                        wishlist.includes(product.id) 
                          ? 'bg-[#4CAF50] text-white border-[#4CAF50]' 
                          : 'bg-white/95 text-gray-400 hover:text-[#4CAF50]'
                      }`}
                    >
                      <Heart size={16} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                    </button>
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                       <span className="bg-[#4CAF50] text-white font-black text-[8px] uppercase tracking-widest px-6 py-3 shadow-2xl">
                         VIEW INFO
                       </span>
                    </div>
                  </div>

                  <div className="mt-auto px-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-black text-black leading-tight uppercase tracking-tight group-hover:text-[#4CAF50] transition-colors">
                        {product.title}
                      </h3>
                      <div className="text-[#4CAF50] font-black text-xs ml-4">
                        {product.price}
                      </div>
                    </div>
                    <p className="text-gray-400 text-[9px] font-bold uppercase tracking-wide line-clamp-2 leading-relaxed mb-4">
                      {product.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[8px] font-black text-black/20 group-hover:text-black transition-colors uppercase tracking-[0.3em]">
                      Details <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                    </div>
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
              <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px]">No matches found.</p>
              <button 
                onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                className="mt-6 text-[#4CAF50] font-black text-[10px] uppercase tracking-widest border-b border-[#4CAF50]/20 pb-1"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-0 md:p-6 lg:p-12 overflow-hidden">
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-500" 
              onClick={() => { setSelectedProduct(null); document.body.style.overflow = 'unset'; }} 
            />
            
            <div className="relative w-full h-full max-w-7xl bg-white overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5 animate-in slide-in-from-bottom-8 duration-500">
              <button 
                onClick={() => { setSelectedProduct(null); document.body.style.overflow = 'unset'; }}
                className="fixed top-4 right-4 md:absolute md:top-8 md:right-8 z-[1100] p-4 bg-white/10 hover:bg-[#4CAF50] backdrop-blur-md text-white transition-all rounded-full"
              >
                <X size={24} />
              </button>

              <div className="w-full lg:w-[65%] h-[50svh] lg:h-full bg-gray-50 relative group/slider">
                <img 
                  src={selectedProduct.images[activeImgIdx]} 
                  alt={selectedProduct.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                
                <button 
                  onClick={prevImg}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white text-black opacity-0 group-hover/slider:opacity-100 transition-all shadow-2xl"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImg}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white text-black opacity-0 group-hover/slider:opacity-100 transition-all shadow-2xl"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                  {selectedProduct.images.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={(e) => { e.stopPropagation(); setActiveImgIdx(i); }}
                      className={`h-1.5 transition-all duration-300 ${activeImgIdx === i ? 'w-10 bg-[#4CAF50]' : 'w-4 bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-[35%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#F1F8F1] text-[#4CAF50] text-[8px] font-black uppercase tracking-[0.3em] px-4 py-1.5 border border-[#4CAF50]/10">
                      {selectedProduct.category}
                    </span>
                    <div className="h-px w-8 bg-gray-100" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter mb-4 leading-none uppercase">
                    {selectedProduct.title}
                  </h2>
                  <div className="text-2xl font-black text-[#4CAF50]">
                    {selectedProduct.price}
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium">
                  {selectedProduct.desc}
                </p>

                <div className="space-y-6 mb-12">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-50 flex items-center justify-center">
                         <Info size={16} className="text-[#4CAF50]" />
                      </div>
                      <div className="text-[9px] font-black text-black uppercase tracking-widest">5-YEAR STRUCTURAL WARRANTY</div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-50 flex items-center justify-center">
                         <ChevronRight size={16} className="text-[#4CAF50]" />
                      </div>
                      <div className="text-[9px] font-black text-black uppercase tracking-widest">CUSTOM FINISHES AVAILABLE</div>
                   </div>
                </div>

                <button 
                  onClick={() => onToggleWishlist(selectedProduct.id)}
                  className={`w-full mb-4 py-5 font-black text-[10px] uppercase tracking-[0.4em] transition-all border flex items-center justify-center gap-3 ${
                    wishlist.includes(selectedProduct.id)
                      ? 'bg-[#4CAF50] text-white border-[#4CAF50]'
                      : 'bg-white text-black border-black hover:bg-gray-50'
                  }`}
                >
                  <Heart size={16} fill={wishlist.includes(selectedProduct.id) ? "currentColor" : "none"} />
                  {wishlist.includes(selectedProduct.id) ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'}
                </button>

                <button onClick={() => setView('inquiry')} className="w-full bg-black text-white py-5 font-black text-[10px] uppercase tracking-[0.4em] transition-all hover:bg-[#4CAF50] active:scale-[0.98] shadow-2xl mb-8">
                  REQUEST QUOTATION
                </button>
              </div>
            </div>
          </div>
        )}
      </div>


      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-in { animation-fill-mode: forwards; }
        .fade-in { animation-name: fade-in; }
        .slide-in-from-bottom-8 { animation-name: slide-up; }
      `}</style>
    </div>
  );
};

export default CatalogPage;