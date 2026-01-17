"use client";

import React from "react";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      label: "Assets Tracked",
      value: "50k+",
      desc: "Global device matrix",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "text-cyan-400",
      bg: "group-hover:bg-cyan-500/10",
      shadow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    },
    {
      id: 2,
      label: "Active Nodes",
      value: "12k+",
      desc: "Verified professionals",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "text-blue-500",
      bg: "group-hover:bg-blue-600/10",
      shadow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    },
    {
      id: 3,
      label: "Network Value",
      value: "$12M+",
      desc: "Assets secured daily",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: "text-violet-500",
      bg: "group-hover:bg-violet-600/10",
      shadow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]",
    },
    {
      id: 4,
      label: "System Uptime",
      value: "99.9%",
      desc: "Neural stability core",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "text-emerald-400",
      bg: "group-hover:bg-emerald-500/10",
      shadow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]",
    },
  ];

  return (
    <section className="relative py-12 bg-[#050505] -mt-20 z-30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Glassmorphism Container */}
        <div className="relative group overflow-hidden bg-white/[0.02] backdrop-blur-3xl rounded-[2.5rem] border border-white/5 p-8 md:p-14 shadow-2xl">
          
          {/* Subtle Cyber Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center">
            {statsData.map((stat, index) => (
              <div 
                key={stat.id} 
                className="flex flex-col items-center text-center px-4 group/item cursor-default"
              >
                {/* Futuristic Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover/item:-translate-y-2 ${stat.bg} ${stat.shadow} ${stat.color}`}>
                  <div className="transition-transform duration-500 group-hover/item:scale-110">
                    {stat.icon}
                  </div>
                </div>

                {/* Animated Value */}
                <h3 className={`text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter transition-colors duration-300 group-hover/item:${stat.color}`}>
                  {stat.value}
                </h3>

                {/* Cyber Label */}
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-3">
                  {stat.label}
                </p>
                
                {/* Floating Status Badge */}
                <span className="text-[9px] text-gray-400 font-bold bg-white/5 border border-white/5 px-4 py-1.5 rounded-full uppercase tracking-widest transition-all group-hover/item:border-white/10 group-hover/item:bg-white/10">
                  {stat.desc}
                </span>

                {/* Vertical Divider (Desktop Only) */}
                {index !== statsData.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          {/* Decorative Corner Decals */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/30 rounded-tl-3xl group-hover:border-cyan-500 transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/30 rounded-br-3xl group-hover:border-cyan-500 transition-colors"></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;