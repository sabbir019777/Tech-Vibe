"use client";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      q: "Is this platform free to use?", 
      a: "We offer a neural free tier for individual innovators. For high-performance teams, our premium protocols unlock quantum-level features and unlimited asset scaling." 
    },
    { 
      q: "Can I export my digital assets?", 
      a: "Absolutely. Our system allows seamless data extraction in PDF, CSV, or Excel formats. Your data matrix remains portable and under your total control 24/7." 
    },
    { 
      q: "How secure is my inventory data?", 
      a: "We deploy military-grade AES-256 encryption layers. Your assets are protected by a zero-trust architecture, ensuring your data remains invisible to unauthorized nodes." 
    },
    { 
      q: "Do you support real-time sync?", 
      a: "Yes, every update is broadcasted across our network in real-time. No delays, no lag—just pure synchronized data flow for your entire organization." 
    },
  ];

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Support Protocol</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">Questions</span>
          </h2>
        </div>

        {/* FAQ Items with Hover Logic */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                onMouseEnter={() => setOpenIndex(index)} 
                onMouseLeave={() => setOpenIndex(null)}
                className={`group relative rounded-2xl transition-all duration-500 border ${
                  isOpen ? "border-cyan-500/50 bg-white/[0.03] shadow-[0_0_30px_rgba(6,182,212,0.1)]" : "border-white/5 bg-white/[0.01] hover:border-white/10"
                }`}
              >
                <div className="w-full flex justify-between items-center p-6 text-left cursor-pointer">
                  <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? "text-cyan-400" : "text-gray-300 group-hover:text-cyan-400"}`}>
                    {faq.q}
                  </span>
                  
                  {/* Futuristic Toggle Icon (Auto transforms on Hover) */}
                  <div className={`relative w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                    isOpen ? "border-cyan-400 bg-cyan-400 rotate-180 scale-110" : "border-white/20"
                  }`}>
                    {/* Horizontal Line */}
                    <div className={`absolute w-4 h-0.5 transition-colors duration-500 ${isOpen ? "bg-black" : "bg-gray-500 group-hover:bg-black"}`}></div>
                    
                    {/* Vertical Line (Scaling to 0 makes it a Minus) */}
                    <div className={`absolute h-4 w-0.5 transition-all duration-500 ${
                      isOpen ? "scale-0 bg-black" : "bg-gray-500 group-hover:scale-0 group-hover:bg-black"
                    }`}></div>
                  </div>
                </div>

                {/* Description Area */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed font-medium border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;