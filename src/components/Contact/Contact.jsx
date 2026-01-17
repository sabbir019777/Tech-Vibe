"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message Transmitted Successfully!", {
      style: {
        border: "1px solid #22d3ee",
        padding: "16px",
        color: "#22d3ee",
        background: "#050505",
      },
      iconTheme: {
        primary: "#22d3ee",
        secondary: "#050505",
      },
    });
    e.target.reset(); 
  };

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden" id="contact">
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* --- Left Side: Tech Info --- */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Communication Link</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              Establish <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">Connection</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-md font-medium">
              Ready to optimize your asset matrix? Reach out to our neural support team for a custom-tailored inventory solution.
            </p>

            <div className="space-y-6">
              {/* Contact Cards */}
              {[
                { label: "Neural Mail", val: "support@techvibe.io", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { label: "Base Station", val: "Silicon Tower, DH-1212", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }
              ].map((item, i) => (
                <div key={i} className="group flex items-center p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{item.label}</p>
                    <p className="text-white font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Side: Glassmorphism Form --- */}
          <div className="relative group">
        
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Identity</label>
                    <input required type="text" placeholder="First Name" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-700" />
                  </div>
                  <div className="space-y-2 pt-6 md:pt-0">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 opacity-0 md:opacity-100">Surname</label>
                    <input required type="text" placeholder="Last Name" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-700" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Digital Mail</label>
                  <input required type="email" placeholder="email@address.com" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-700" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Message Matrix</label>
                  <textarea required rows="4" placeholder="Your inquiry..." className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-500/50 transition-all resize-none placeholder:text-gray-700"></textarea>
                </div>

                <button type="submit" className="relative w-full py-5 group overflow-hidden rounded-xl bg-cyan-500 text-black font-black uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-[0.98]">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Initialize Transmission
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;