"use client";

import React from "react";

const WhyChooseUs = () => {
  const features = [
    { 
      id: 1, 
      title: "Neural Sync", 
      desc: "Synchronize physical assets with digital twins via low-latency neural mapping protocols.", 
      icon: "M13 10V3L4 14h7v7l9-11h-7z", 
      color: "cyan" 
    },
    { 
      id: 2, 
      title: "Quantum Crypt", 
      desc: "Zero-knowledge encryption layers ensuring your data matrix remains invisible to external nodes.", 
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", 
      color: "blue" 
    },
    { 
      id: 3, 
      title: "Atmospheric Backup", 
      desc: "Sub-zero cloud redundancy systems that maintain 99.9% uptime across all geographic coordinates.", 
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", 
      color: "indigo" 
    },
    { 
      id: 4, 
      title: "Foresight Logic", 
      desc: "AI-driven predictive engines that calculate asset depreciation and stock depletion before they occur.", 
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", 
      color: "purple" 
    },
    { 
      id: 5, 
      title: "Multi-Node Access", 
      desc: "Distributed role architecture with granular permissions for seamless team synchronization.", 
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", 
      color: "pink" 
    },
    { 
      id: 6, 
      title: "Titan Support", 
      desc: "Direct-to-engineer communication channels for critical system resolutions in real-time.", 
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", 
      color: "red" 
    },
    { 
      id: 7, 
      title: "Global Mesh", 
      desc: "A worldwide network of data centers providing low-latency access to your inventory galaxy.", 
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m-9 9H3m9 9V3m0 9L21 3M3 21L12 12", 
      color: "orange" 
    },
    { 
      id: 8, 
      title: "Audit Intelligence", 
      desc: "Comprehensive immutable logs and automated valuation metrics for enterprise transparency.", 
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1", 
      color: "yellow" 
    },
  ];

  const colorVariants = {
    cyan: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    blue: "text-blue-400 border-blue-500/20 bg-blue-500/5 group-hover:bg-blue-500/20 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    indigo: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5 group-hover:bg-indigo-500/20 group-hover:border-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]",
    purple: "text-purple-400 border-purple-500/20 bg-purple-500/5 group-hover:bg-purple-500/20 group-hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    pink: "text-pink-400 border-pink-500/20 bg-pink-500/5 group-hover:bg-pink-500/20 group-hover:border-pink-400 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]",
    red: "text-red-400 border-red-500/20 bg-red-500/5 group-hover:bg-red-500/20 group-hover:border-red-400 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]",
    orange: "text-orange-400 border-orange-500/20 bg-orange-500/5 group-hover:bg-orange-500/20 group-hover:border-orange-400 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    yellow: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5 group-hover:bg-yellow-500/20 group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]",
  };

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Core Protocol</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Architecture of <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 italic">Command</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium text-lg leading-relaxed">
            Engineered for high-stakes inventory synchronization within the digital matrix.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="group relative h-[320px] rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-700 overflow-hidden"
            >
              <div className="relative h-full p-10 flex flex-col items-start justify-between">
                
                {/* Advanced Icon Container */}
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl border transition-all duration-500 ${colorVariants[feature.color]}`}>
                   <svg className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                   </svg>
                </div>

                {/* Professional Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium group-hover:text-gray-400 transition-colors">
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom Scanning Line */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;