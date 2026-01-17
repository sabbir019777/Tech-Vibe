"use client";

import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Transmission Received: Node Synchronized.", {
      duration: 4000,
      style: {
        border: "1px solid #22d3ee",
        padding: "16px",
        color: "#22d3ee",
        background: "#050505",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "bold",
      },
      iconTheme: {
        primary: "#22d3ee",
        secondary: "#050505",
      },
    });
    e.target.reset();
  };

  const socialLinks = [
    { name: "FB", link: "https://facebook.com", hoverClass: "hover:text-[#1877F2] hover:shadow-[0_0_20px_#1877F2]", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { name: "X", link: "https://x.com", hoverClass: "hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]", icon: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
    { name: "IG", link: "https://instagram.com", hoverClass: "hover:text-[#E4405F] hover:shadow-[0_0_20px_#E4405F]", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 003 7.5v9A4.5 4.5 0 007.5 21z" },
    { name: "IN", link: "https://linkedin.com", hoverClass: "hover:text-[#0A66C2] hover:shadow-[0_0_20px_#0A66C2]", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" }
  ];

  return (
    <footer className="relative bg-[#020202] text-gray-500 pt-32 pb-12 overflow-hidden border-t border-white/5">
      <Toaster position="bottom-right" />
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          

          <div className="space-y-10">

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-cyan-500 rounded-xl rotate-45 opacity-20 group-hover:rotate-90 transition-transform duration-500"></div>
                <div className="absolute inset-1 border-2 border-cyan-400 rounded-lg rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                <svg className="w-6 h-6 text-cyan-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-black text-white tracking-tighter">
                Tech<span className="text-cyan-400 italic">Vibe</span>
              </h2>
            </div>

            <p className="text-sm leading-relaxed font-medium text-gray-600">
              The neural ecosystem for elite asset synchronization. Built for the pioneers of the digital matrix.
            </p>
            
            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.link} 
                  target="_blank"
                  className={`w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center transition-all duration-500 group ${social.hoverClass} hover:border-transparent shadow-lg`}
                >
                  <svg className="w-5 h-5 fill-current transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Node Ecosystem */}
          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-10 opacity-50 italic">Node Ecosystem</h3>
            <ul className="space-y-5 text-sm font-bold">
              <li><Link href="/items" className="hover:text-cyan-400 transition-all flex items-center gap-2 group"><span className="w-0 h-[1px] bg-cyan-400 group-hover:w-4 transition-all"></span>Global Inventory</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-all flex items-center gap-2 group"><span className="w-0 h-[1px] bg-cyan-400 group-hover:w-4 transition-all"></span>Neural Sync</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-all flex items-center gap-2 group"><span className="w-0 h-[1px] bg-cyan-400 group-hover:w-4 transition-all"></span>Quantum Matrix</Link></li>
            </ul>
          </div>

          {/* Command Center */}
          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-10 opacity-50 italic">Central Command</h3>
            <ul className="space-y-5 text-sm font-bold">
              <li><Link href="#" className="hover:text-cyan-400 transition-all">Operational Log</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-all">Neural Careers</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-all">Establish Link</Link></li>
            </ul>
          </div>

          {/* Transmission */}
          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-10 opacity-50 italic">Transmission</h3>
            <form onSubmit={handleSubscribe} className="space-y-6">
              <div className="relative group">
                <input 
                  required
                  type="email" 
                  placeholder="Secure Node ID" 
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-5 py-4 text-xs outline-none focus:border-cyan-400/50 transition-all text-white placeholder:text-gray-700 shadow-inner"
                />
                <button type="submit" className="absolute right-2 top-2 px-4 py-2 bg-cyan-400 text-black text-[10px] font-black rounded-xl hover:bg-white hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
                  SYNC
                </button>
              </div>
            </form>
            <div className="mt-10 p-4 border border-white/5 bg-white/[0.01] rounded-xl">
               <p className="text-[9px] font-black text-gray-700 uppercase tracking-widest leading-loose">
                 &copy; {new Date().getFullYear()} TECHVIBE MATRIX. <br />
                 All Protocols Reserved.
               </p>
            </div>
          </div>
        </div>
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 px-5 py-2 rounded-full bg-white/[0.02] border border-white/5 shadow-xl">
             <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400/70">System: Operational</p>
          </div>
          <div className="flex gap-12">
             <Link href="#" className="text-[9px] font-black uppercase tracking-widest text-gray-700 hover:text-white transition-colors">Privacy Matrix</Link>
             <Link href="#" className="text-[9px] font-black uppercase tracking-widest text-gray-700 hover:text-white transition-colors">Service Protocol</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;