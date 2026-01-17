"use client";

import React from "react";

const Testimonials = () => {

  const reviews = [
    { 
      id: 1, 
      name: "Sarah Johnson", 
      role: "Ops Manager", 
      comment: "The neural sync technology in TechVibe has completely transformed our supply chain. We now track assets across 12 countries in real-time with zero latency.", 
      img: "https://i.pravatar.cc/150?u=1", 
      accent: "from-cyan-500 to-blue-500" 
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      role: "IT Director", 
      comment: "Security was our biggest bottleneck until we integrated this zero-trust protocol. The granular access control is exactly what a high-stakes IT firm needs.", 
      img: "https://i.pravatar.cc/150?u=2", 
      accent: "from-blue-500 to-indigo-500" 
    },
    { 
      id: 3, 
      name: "Emily Davis", 
      role: "Logistics Head", 
      comment: "Predictive reporting saved our department over 200 man-hours last quarter. The AI forecasting is spookily accurate and audit-ready at any moment.", 
      img: "https://i.pravatar.cc/150?u=3", 
      accent: "from-indigo-500 to-purple-500" 
    },
    { 
      id: 4, 
      name: "Alex Rivera", 
      role: "CTO", 
      comment: "We've tested many asset matrices, but none provide this level of digital depth. It's not just a tool; it's the nervous system of our physical infrastructure.", 
      img: "https://i.pravatar.cc/150?u=4", 
      accent: "from-purple-500 to-pink-500" 
    },
    { 
      id: 5, 
      name: "David Kim", 
      role: "Tech Lead", 
      comment: "Scalability used to be a nightmare. Now, adding 5,000 new units takes minutes, not weeks. The automation layer here is simply unparalleled in the market.", 
      img: "https://i.pravatar.cc/150?u=5", 
      accent: "from-pink-500 to-red-500" 
    },
    { 
      id: 6, 
      name: "Sofia Berg", 
      role: "Data Analyst", 
      comment: "The data visualization isn't just functional; it's futuristic art. It allows our executives to see inventory flow in a way that was previously impossible.", 
      img: "https://i.pravatar.cc/150?u=6", 
      accent: "from-red-500 to-orange-500" 
    },
    { 
      id: 7, 
      name: "James Wilson", 
      role: "Founder", 
      comment: "TechVibe didn't just organize our inventory; it evolved our entire business model. We are now a truly data-driven organization thanks to this galaxy.", 
      img: "https://i.pravatar.cc/150?u=7", 
      accent: "from-orange-500 to-yellow-500" 
    },
    { 
      id: 8, 
      name: "Anna Smith", 
      role: "Product Lead", 
      comment: "The interface feels like it's from 2030. Our team actually enjoys managing inventory now because of the fluid UI and predictive user experience.", 
      img: "https://i.pravatar.cc/150?u=8", 
      accent: "from-yellow-500 to-cyan-500" 
    },
  ];

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Global Pulse</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8">
            User <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic">Sentiments</span>
          </h2>
        </div>

        {/* 4-Column Grid with Larger Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="group relative p-[1.5px] rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3">
              {/* Neon Gradient Aura */}
              <div className={`absolute inset-0 bg-gradient-to-br ${review.accent} opacity-10 group-hover:opacity-40 rounded-[2.5rem] transition-opacity duration-700 blur-[3px]`}></div>
              
              {/* Card Surface */}
              <div className="relative h-full p-10 bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] flex flex-col items-start overflow-hidden shadow-2xl">
                
                {/* Visual Quote Icon */}
                <div className="mb-8 text-white/5 group-hover:text-cyan-500/20 transition-colors">
                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.3503 14 12.017 12.6667 12.017 11V5C12.017 3.33333 13.3503 2 15.017 2H20.017C21.6837 2 23.017 3.33333 23.017 5V11C23.017 12.3902 22.071 13.5606 20.7818 13.8966L21.017 21H14.017ZM2.01698 21L2.01698 18C2.01698 16.8954 2.91241 16 4.01698 16H7.01698V14H3.01698C1.35031 14 0.0169769 12.6667 0.0169769 11V5C0.0169769 3.33333 1.35031 2 3.01698 2H8.01698C9.68364 2 11.017 3.33333 11.017 5V11C11.017 12.3902 10.0711 13.5606 8.7818 13.8966L9.01698 21H2.01698Z" /></svg>
                </div>

                {/* Expanded Description */}
                <p className="text-gray-400 text-base leading-relaxed font-medium mb-12 italic flex-grow tracking-wide">
                  "{review.comment}"
                </p>

                {/* Identity Bar */}
                <div className="flex items-center gap-5 mt-auto">
                  <div className="relative">
                    <div className={`absolute -inset-1.5 bg-gradient-to-r ${review.accent} rounded-full blur-[4px] opacity-30 group-hover:opacity-100 transition duration-500`}></div>
                    <img 
                      src={review.img} 
                      alt={review.name} 
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-black shadow-lg" 
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-black tracking-tight text-lg group-hover:text-cyan-400 transition-colors">{review.name}</h4>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.25em]">{review.role}</p>
                  </div>
                </div>

                {/* Cyber Decal UI */}
                <div className="absolute bottom-6 right-8 flex gap-1.5 opacity-20 group-hover:opacity-100 transition-opacity">
                   <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;