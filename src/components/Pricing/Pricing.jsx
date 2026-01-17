"use client";

import React from "react";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Starter Protocol",
      price: "0",
      period: "forever",
      desc: "Perfect for independent innovators and tech hobbyists.",
      features: ["Up to 50 Items", "Neural Search", "Basic Reporting", "Public Nodes"],
      button: "Initialize Free",
      isPopular: false,
    },
    {
      id: 2,
      name: "Professional Core",
      price: "29",
      period: "per month",
      desc: "Optimized for high-performance asset management.",
      features: ["Unlimited Assets", "5 Team Slots", "Predictive AI", "Advanced API", "24/7 Link"],
      button: "Unlock Core",
      isPopular: true,
    },
    {
      id: 3,
      name: "Enterprise Matrix",
      price: "Custom",
      period: "scale",
      desc: "Total infrastructure for global organizations.",
      features: ["Unlimited Units", "Full SSO Matrix", "Dedicated Node", "Quantum Security", "On-site Ops"],
      button: "Contact Command",
      isPopular: false,
    },
  ];

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Subscription Matrix</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
            Scalable <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic leading-tight">Investment</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">
            Choose the synchronization tier that aligns with your organization's digital evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 group ${
                plan.isPopular
                  ? "bg-white/[0.03] border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.15)] scale-105 z-10"
                  : "bg-white/[0.01] border-white/5 hover:border-white/10"
              }`}
            >
              {/* Popular Glow Aura */}
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[10px] font-black px-6 py-1 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                  Most Active
                </div>
              )}

              <div className="mb-10">
                <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-6 ${plan.isPopular ? "text-cyan-400" : "text-gray-500"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-6xl font-black tracking-tighter">
                    {plan.price !== "Custom" && "$"}
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">
                    {plan.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium">
                {plan.desc}
              </p>

              {/* Feature List Protocol */}
              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${plan.isPopular ? "border-cyan-500 bg-cyan-500/10" : "border-white/10 bg-white/5"}`}>
                      <svg className={`w-3 h-3 ${plan.isPopular ? "text-cyan-400" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-gray-400 group-hover/item:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Futuristic Interactive Button */}
              <button
                className={`relative w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-300 overflow-hidden group/btn ${
                  plan.isPopular
                    ? "bg-cyan-500 text-black shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/60"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black"
                }`}
              >
                <span className="relative z-10">{plan.button}</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
              </button>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20">
                <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-white"></div>
                <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-white"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;