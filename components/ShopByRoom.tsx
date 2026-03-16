
import React from 'react';

interface Room {
  id: string;
  name: string;
  image: string;
}

const rooms: Room[] = [
  { id: 'Living Room', name: 'Living room', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop' },
  { id: 'Bedroom', name: 'Bedroom', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop' },
  { id: 'Dining', name: 'Dining & Kitchen Furniture', image: 'https://images.unsplash.com/photo-1617806118233-18e16747d52c?q=80&w=800&auto=format&fit=crop' },
  { id: 'Dining', name: 'Dining room', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop' },
  { id: 'Kitchen', name: 'Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop' },
  { id: 'Office', name: 'Home Office', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop' }
];

interface ShopByRoomProps {
  onRoomClick: (category: string) => void;
}

const ShopByRoom: React.FC<ShopByRoomProps> = ({ onRoomClick }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase mb-4">
            Shop by room
          </h2>
          <div className="w-12 h-1 bg-[#4CAF50] mx-auto" />
        </div>

        {/* Single Row Layout with Horizontal Scroll on Mobile */}
        <div className="flex flex-nowrap lg:grid lg:grid-cols-6 gap-6 md:gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x">
          {rooms.map((room, idx) => (
            <div 
              key={idx} 
              className="flex-none w-[260px] lg:w-full group cursor-pointer snap-center"
              onClick={() => onRoomClick(room.id)}
            >
              <div className="relative mb-6">
                {/* Offset Decorative Border - Creative take on the red border in ref image */}
                <div className="absolute -inset-1 border border-[#4CAF50]/20 rounded-t-[140px] -z-10 translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
                
                <div className="aspect-[3/4] w-full overflow-hidden rounded-t-[140px] border border-gray-100">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover grayscale-[0.3] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-[11px] md:text-[12px] font-black text-black uppercase tracking-widest group-hover:text-[#4CAF50] transition-colors">
                  {room.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ShopByRoom;
