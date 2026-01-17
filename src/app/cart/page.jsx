"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react"; // ✅ ১. সেশন ইমপোর্ট

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true); // লোডিং স্টেট
  const [cartKey, setCartKey] = useState(null); // সঠিক চাবি রাখার জন্য

  const { data: session, status } = useSession(); // ✅ সেশন হুক

  useEffect(() => {
    // সেশন লোডিং অবস্থায় থাকলে অপেক্ষা করো
    if (status === "loading") return;

    const manualToken = Cookies.get("isLoggedIn");
    let currentKey = "cart_guest"; // ডিফল্ট

    // ✅ ২. সঠিক বাক্স (Key) নির্ধারণ করা (Navbar এর মতো একই লজিক)
    if (session?.user?.email) {
       currentKey = `cart_${session.user.email}`; // Google User
    } else if (manualToken) {
       currentKey = "cart_mock"; // Mock User
    }

    setCartKey(currentKey); // চাবি সেট করলাম যাতে ডিলিট করার সময় লাগে

    // ৩. সেই নির্দিষ্ট বাক্স থেকে ডাটা আনা
    const storedCart = localStorage.getItem(currentKey);
    
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      // প্রাইস অনুযায়ী সর্ট (কম থেকে বেশি)
      const sortedCart = parsedCart.sort((a, b) => Number(a.price) - Number(b.price));
      setCartItems(sortedCart);
    } else {
      setCartItems([]);
    }
    
    setLoading(false);

  }, [session, status]); // সেশন পাল্টালে আবার চেক করবে

  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    
    // ✅ ডিলিট করার সময়ও সঠিক বাক্স ব্যবহার করা
    if (cartKey) {
        localStorage.setItem(cartKey, JSON.stringify(updatedCart));
        
        // Navbar আপডেট করা
        window.dispatchEvent(new Event("storage"));
    }

    toast.success("Node removed from synchronization", {
      style: { background: '#0a0a0a', color: '#ff4b4b', border: '1px solid #ff4b4b/20' }
    });
  };

  const clearCart = () => {
    setCartItems([]);
    if (cartKey) {
        localStorage.removeItem(cartKey); // ✅ সঠিক বাক্স ডিলিট
        window.dispatchEvent(new Event("storage")); // Navbar আপডেট
    }
    toast.success("Matrix cleared");
  };

  const totalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);

  const handleCheckout = () => {
    const manualToken = Cookies.get("isLoggedIn");
    // চেকআউট লজিক (লগিন চেক)
    if (!session && !manualToken) {
      toast.error("Identity verification required. Redirecting...", {
        style: { background: '#0a0a0a', color: '#cyan', border: '1px solid #22d3ee/20' }
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } else {
      toast.success("Order Placed: Inventory sync complete!");
      clearCart();
    }
  };

  if (loading) return <div className="min-h-screen bg-[#050505] pt-40 text-center text-cyan-400">Syncing Matrix Data...</div>;

  return (
    <div className="min-h-screen bg-[#050505] text-gray-400 pt-32 pb-20 px-6 relative overflow-hidden">
      <Toaster position="bottom-right" />
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Navigation Link */}
        <div className="mb-12">
          <Link href="/items" className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-cyan-400 transition-all gap-3 group">
            <span className="text-lg group-hover:-translate-x-2 transition-transform">←</span> 
            <span>Return to Matrix</span>
          </Link>
        </div>

        {/* Title Section */}
        <div className="flex items-end gap-6 mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
            Your <span className="text-cyan-400 italic">Cart</span>
          </h1>
          <div className="mb-2 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-black">
            {cartItems.length} UNITS
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty State */
          <div className="bg-white/[0.02] border border-white/5 p-20 rounded-[3rem] text-center backdrop-blur-xl">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
               <svg className="w-10 h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Empty Repository</h2>
            <p className="text-gray-500 mb-10 max-w-xs mx-auto">No assets detected in current session. Initialize shopping to sync data.</p>
            <Link href="/items">
              <button className="bg-white text-black px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all shadow-xl">
                Browse Items
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, index) => (
                <div key={index} className="group relative bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] flex items-center gap-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                  <div className="w-28 h-28 bg-[#0a0a0a] rounded-2xl p-4 border border-white/5">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-lighten" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white tracking-tight">{item.name}</h3>
                    <p className="text-cyan-400 font-black text-2xl mt-1 tracking-tighter">${item.price}</p>
                    <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span> Node Synchronized
                    </p>
                  </div>
                  <button 
                    onClick={() => removeItem(index)}
                    className="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center group/del"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
              
              <button onClick={clearCart} className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 hover:text-red-500 transition-colors ml-4">
                Purge All Nodes [Clear Matrix]
              </button>
            </div>

            <div className="lg:sticky lg:top-32 h-fit">
               <div className="bg-white/[0.03] backdrop-blur-3xl p-10 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                 
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>

                 <h2 className="text-xs font-black text-gray-500 uppercase tracking-[0.4em] mb-10">Order Protocol</h2>
                 
                 <div className="space-y-6 mb-10 border-b border-white/5 pb-10">
                   <div className="flex justify-between text-sm">
                     <span className="font-medium text-gray-500">Subtotal Assets</span>
                     <span className="font-black text-white">${totalPrice}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="font-medium text-gray-500">Transmission Fee</span>
                     <span className="text-emerald-400 font-black uppercase tracking-widest text-xs">Zero Cost</span>
                   </div>
                 </div>
                 
                 <div className="flex justify-between items-end mb-12">
                   <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Total Value</span>
                   <span className="text-5xl font-black text-white tracking-tighter">${totalPrice}</span>
                 </div>
                 
                 <button 
                   onClick={handleCheckout}
                   className="w-full bg-white text-black py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95 group/btn overflow-hidden relative"
                 >
                   <span className="relative z-10">Initialize Checkout</span>
                   <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                 </button>

                 <Link href="/items" className="block text-center mt-8 text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-white transition-colors">
                   ← Back to Matrix
                 </Link>
               </div>
               
               <div className="mt-8 p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest leading-relaxed">
                    Secure Node SSL Active // End-to-end Encryption verified by TechVibe Matrix.
                  </p>
               </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}