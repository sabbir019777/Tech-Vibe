"use client";

import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Initialize Identity",
      description: "Sign up in seconds. Zero credit requirements. Instant dashboard synchronization.",
      icon: "01",
      glow: "group-hover:text-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
    },
    {
      id: 2,
      title: "Data Ingestion",
      description: "Bulk upload your assets via CSV or manual entry with precision-engineered specs.",
      icon: "02",
      glow: "group-hover:text-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
    },
    {
      id: 3,
      title: "Neural Tracking",
      description: "Monitor asset usage and optimize your ecosystem with automated AI reports.",
      icon: "03",
      glow: "group-hover:text-emerald-400 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]",
    },
  ];

  return (
    <section className="relative py-32 bg-[#050505] text-white overflow-hidden">
      {/* Background Cyber Grid & Glows */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Execution Flow</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
            Master Your Matrix in <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic leading-tight">3 Steps</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">
            A high-performance workflow designed to transition your inventory management into the next digital era.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Animated Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative group flex flex-col items-center text-center">
              
              {/* Futuristic Number Circle */}
              <div className={`w-28 h-28 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center mb-10 relative z-10 transition-all duration-500 group-hover:border-cyan-500/50 group-hover:-translate-y-2 ${step.glow}`}>
                {/* Inner Glow Effect */}
                <div className="absolute inset-0 bg-white/[0.02] rounded-2xl"></div>
                
                {/* The Number */}
                <span className="text-4xl font-black tracking-tighter text-white group-hover:text-cyan-400 transition-colors duration-500">
                  {step.icon}
                </span>

                {/* Decorative Tech Corners */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 transition-colors group-hover:border-cyan-500"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 transition-colors group-hover:border-cyan-500"></div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed px-6 font-medium group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>
              </div>

              {/* Hover Aura Effect */}
              <div className="absolute -bottom-4 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;