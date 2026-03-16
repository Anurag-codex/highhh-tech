
import React from 'react';

const ExcellenceDetail: React.FC = () => {
  const details = [
    {
      title: "Signature Craftsmanship",
      desc: "Every piece is a blend of traditional artistry and modern precision, ensuring lasting elegance."
    },
    {
      title: "Ergonomic Comfort",
      desc: "Scientifically designed contours that support your posture, whether in a boardroom or living room."
    },
    {
      title: "Premium Materials",
      desc: "We use high-grade sustainable woods and industrial-strength fabrics for ultimate durability."
    },
    {
      title: "Direct Transparency",
      desc: "Factory-direct pricing without middleman markups, bringing luxury within your reach."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Badge */}
          <div className="relative">
            <div className="relative z-0">
              <img 
                src="https://images.woodenstreet.de/image/data/store%20page/udaipur/Urban%20Square/2.jpg"
                alt="Luxury Interior" 
                className="shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 z-10 hidden sm:block">
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold text-[#4CAF50] tracking-tighter">2003</span>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-1">Established Excellence</p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F1F8F1] rounded-full -z-10 blur-3xl" />
          </div>

          {/* Right: Text Content */}
          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12 tracking-tight">
              Excellence in every <br />
              <span className="text-[#4CAF50]">detail</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10">
              {details.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="h-1 w-8 bg-[#4CAF50] mb-5 group-hover:w-16 transition-all duration-500 rounded-none"></div>
                  <h3 className="font-bold text-lg mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceDetail;
