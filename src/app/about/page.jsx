"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function AboutPage() {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies.jpg", 
    "https://img.pikbest.com/illustration/20250408/future-forward-tech-vibes-21-this-setup-is-seriously-next-level_11653076.jpg!w700wp", 
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", 
    "https://www.techvibeinnovations.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsoftware.9c7fb6e4.jpg&w=3840&q=75", 
    "https://img.freepik.com/free-photo/woman-wearing-vr-glasses-gaming_23-2151138309.jpg?semt=ais_hybrid&w=740&q=80", 
    "https://thumbs.dreamstime.com/b/holographic-interface-floating-over-deep-black-background-sci-fi-tech-vibe-soft-digital-glows-387403068.jpg", 
    "https://media.istockphoto.com/id/2197955227/photo/humans-are-using-laptops-and-computers-to-interact-with-ai-helping-them-create-code-train-ai.jpg?s=612x612&w=0&k=20&c=LQF82XJxK0LeBcUUWD2SGOt_5r9PCo35Lx6wWtK8HnY=", 
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop", 
  ];

  
  const missionImages = [
    "https://media.istockphoto.com/id/1202870693/photo/future-artificial-intelligence-robot-and-cyborg.jpg?s=612x612&w=0&k=20&c=Y1e8NLCRVg-_AM2JBv0NLQjJZo5gGfaO4mVsojNywFE=",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    "https://thumbs.dreamstime.com/b/digital-technology-background-illustration-51700896.jpg",
    "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MDctMTA1LmpwZw.jpg",
    "https://media.istockphoto.com/id/2185337504/photo/automation-of-business-or-robotic-process-rpa-technology-transfer-of-data-between-application.jpg?s=612x612&w=0&k=20&c=gGa1uTejk86eZUZlMcMsXs-UFfU6u5CJIFpON96yK-c=", // Gaming
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1uW4bSv_SXJE9XOAchn_XfOJ3iLJzLbkEQ&s", 
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1000&auto=format&fit=crop", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GG7mniLjxUR5qbTTuyzGU6UUgzhMgw3d2w&s", 
    "https://c4.wallpaperflare.com/wallpaper/804/438/350/mass-effect-mass-effect-2-mass-effect-3-mass-effect-legendary-edition-video-games-hd-wallpaper-preview.jpg",
  ];

  const footerImages = [
    "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop",
    "https://w0.peakpx.com/wallpaper/475/753/HD-wallpaper-hi-tech-technology.jpg", 
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", 
    "https://wallpapers.com/images/hd/4k-tech-po05gnx1carkl1vw.jpg",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", 
    "https://wallpaper-house.com/data/out/6/wallpaper2you_122110.png", 
  ];

 
  useEffect(() => {
    const interval = setInterval(() => {
    
      setCurrentImageIndex((prevIndex) => prevIndex + 1); 
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">The Next Gen Store</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              We Don't Just Sell <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Technology.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-cyan-500/50 pl-6">
              TechVibe was born from a simple idea: The future shouldn't be boring. We curate gadgets that look like they fell out of a time machine from the year 3000.
            </p>

            <div className="flex gap-4">
              <Link href="/items">
                <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                  Explore Gear
                </button>
              </Link>
            </div>
          </div>

          {/* --- Right Image Slideshow --- */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900 h-[400px] w-full">
  
              <img 
                src={heroImages[currentImageIndex % 10]} 
                alt="Tech Slide" 
                className="w-full h-full object-cover transform hover:scale-110 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-mono text-sm">/// SYSTEM.IMG_0{(currentImageIndex % 10) + 1}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---  Our Mission --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Left Image Slideshow --- */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-24 h-24 border-t-2 border-l-2 border-cyan-500/30"></div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 border-b-2 border-r-2 border-purple-500/30"></div>
            
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-purple-500/20 h-[400px] w-full">
           
              <img 
                src={missionImages[currentImageIndex % 10]} 
                alt="Mission Slide" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-1000 ease-in-out"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Connecting You to <br />
              <span className="text-purple-400">The Matrix</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We believe in a world where technology feels natural. From AI-driven home assistants to hyper-realistic VR consoles, every item in our inventory is handpicked to upgrade your lifestyle.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-2xl font-bold text-cyan-400">100%</h3>
                <p className="text-gray-500 text-sm">Secure Payment</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-2xl font-bold text-purple-400">Fast</h3>
                <p className="text-gray-500 text-sm">Global Delivery</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---Join the Tribe  --- */}
      <section className="py-32 relative text-center px-6 overflow-hidden">

        <div className="absolute inset-0">
    
          <img 
            src={footerImages[currentImageIndex % 6]} 
            className="w-full h-full object-cover opacity-20 transition-all duration-1000 ease-in-out"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto mt-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 blur-[100px] rounded-full animate-pulse"></div>

          <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 p-12 md:p-16 rounded-[50px] text-center overflow-hidden hover:border-cyan-500/30 transition-colors duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70"></div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Upgrade?</span>
            </h2>
            
            <p className="text-gray-300 mb-12 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
              Join the elite league of tech enthusiasts who trust <span className="text-white font-bold">TechVibe</span> for their daily drivers.
            </p>

            <Link href="/items">
              <button className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] active:scale-95">
                <span className="relative z-10 flex items-center gap-3">
                  START SHOPPING NOW
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}