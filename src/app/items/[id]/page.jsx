"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useSession } from "next-auth/react";

export default function ItemDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session } = useSession(); 
  const [item, setItem] = useState(null);

  useEffect(() => {
  fetch('/api/items')
      .then((res) => res.json())
      .then((data) => {
        const foundItem = data.find((x) => x.id === parseInt(id) || x._id === id);
        setItem(foundItem);
      })
      .catch(err => console.error("Error fetching item:", err));
  }, [id]);

  const handleAddToCart = () => {
    if (!item) return;

    const manualToken = Cookies.get("isLoggedIn");
    

    if (!session && !manualToken) {
      toast.error("Access Denied: Please Login to Sync Cart", {
        style: { background: '#0a0a0a', color: '#ff4b4b', border: '1px solid #ff4b4b/20', fontSize: '12px', fontWeight: 'bold' }
      });
      router.push("/login");
      return;
    }

    try {
  
      let cartKey = "";
      if (session?.user?.email) {
         cartKey = `cart_${session.user.email}`; 
      } else {
         cartKey = "cart_mock"; 
      }

      
      const storedCart = localStorage.getItem(cartKey);
      const existingCart = storedCart ? JSON.parse(storedCart) : [];

   
      const isExist = existingCart.find((cartItem) => cartItem.id === item.id);
      if (isExist) {
        toast.error("Node Conflict: Item Already in Matrix!", {
           style: { background: '#0a0a0a', color: '#facc15', border: '1px solid #facc15/20', fontSize: '12px', fontWeight: 'bold' }
        });
        return;
      }

      
      const updatedCart = [item, ...existingCart]; 
      localStorage.setItem(cartKey, JSON.stringify(updatedCart));
      
    
      window.dispatchEvent(new Event("storage"));

      toast.success("Node Synchronized: Redirecting to Matrix...", {
        style: { background: '#0a0a0a', color: '#22d3ee', border: '1px solid #22d3ee/20', fontSize: '12px', fontWeight: 'bold' }
      });
      
      setTimeout(() => {
        router.push("/cart");
      }, 1000);

    } catch (error) {
      toast.error("Transmission Error!");
    }
  };

  if (!item) return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#050505] text-cyan-400">
      <div className="w-12 h-12 border-2 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mb-4"></div>
      <p className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Decrypting Data Matrix...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 relative overflow-hidden pb-24 pt-32">
      <Toaster position="bottom-right" />
      
      {/* Background Cyber-Grid Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <button 
          onClick={() => router.back()} 
          className="mb-16 flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-cyan-400 transition-all group"
        >
          <span className="mr-3 group-hover:-translate-x-2 transition-transform duration-300">←</span> Back to Inventory
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-[40px] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-[40px] overflow-hidden bg-[#0a0a0a] border border-white/5 p-10 lg:p-16">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-auto object-contain mix-blend-lighten transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-10 left-10 w-6 h-6 border-t border-l border-cyan-400/30"></div>
              <div className="absolute bottom-10 right-10 w-6 h-6 border-b border-r border-cyan-400/30"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col pt-4">
            <div className="relative mb-12">
              <div className="absolute -top-14 -left-4 text-[100px] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter hidden lg:block">
                TECH_INV
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-10 bg-cyan-500"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">Node Asset Verified</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.85] uppercase mb-8">
                  {item.name.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 italic">
                    {item.name.split(' ').pop()}
                  </span>
                </h1>
                
                <div className="flex items-center gap-3">
                   <div className="h-1 w-16 bg-cyan-500 rounded-full"></div>
                   <div className="h-1 w-2 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-10 mb-12">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Market Valuation</span>
                <span className="text-5xl font-black text-white tracking-tighter">${item.price}</span>
              </div>
              <div className="h-10 w-[1px] bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-emerald-500/60 uppercase tracking-widest mb-1">Node Status</span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                   Transmission Ready
                </span>
              </div>
            </div>

            <div className="relative mb-14 pl-8 border-l border-white/10">
              <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Core Specifications</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-medium italic opacity-90">
                {item.long_description || item.description}
              </p>
            </div>

            <div className="space-y-6">
              <button 
                onClick={handleAddToCart}
                className="group relative w-full bg-white text-black py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 hover:bg-cyan-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] active:scale-[0.97] overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:tracking-[0.4em] transition-all duration-500">
                Add Cart
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
              
              <div className="flex justify-between items-center px-2 text-[9px] font-black text-gray-700 uppercase tracking-[0.2em]">
                <span>Safe Protocol Checkout</span>
                <span>ID: {item.id} // SECURE_NODE</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}