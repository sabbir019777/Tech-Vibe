"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

export default function AddItemPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "", 
    long_description: "",
    image: ""
  });

  useEffect(() => {
    const checkAuth = () => {
      if (status === "loading") return;

      const manualToken = Cookies.get("isLoggedIn");

      if (!session && !manualToken) {
        router.push("/login");
      } else {
        setIsAuthChecking(false);
      }
    };

    checkAuth();
  }, [session, status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Encrypting Data & Uploading...");

    try {
      const newItem = {
        ...formData,
        price: parseFloat(formData.price),
        id: Date.now(), 
        category: "Custom Node"
      };

      const existingData = JSON.parse(localStorage.getItem('my_custom_items') || '[]');
      const updatedData = [newItem, ...existingData];
      
      localStorage.setItem('my_custom_items', JSON.stringify(updatedData));

      setTimeout(() => {
        toast.dismiss(loadingToast);
   
        toast.success("Node Initialized: Asset Uploaded Successfully!", {
          style: { background: '#111', color: '#22d3ee', border: '1px solid #333' },
          duration: 4000 
        });

        setTimeout(() => {
            router.push("/items");
        }, 2000);
        
      }, 1000);

    } catch (error) {
      console.error(error);
      toast.dismiss(loadingToast);
      toast.error("Transmission Failed: Local Storage Error");
    } finally {
   
    }
  };

  if (isAuthChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d0d0f]">
         <div className="text-cyan-500 font-bold tracking-widest animate-pulse">VERIFYING CREDENTIALS...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0f] p-6 relative overflow-hidden pt-28 pb-12">
      
      
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0c] via-[#111114] to-[#0a0a0c]"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-2xl bg-[#16161a]/60 backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4">
             <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/80">Asset Registry</span>
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight uppercase">
            New <span className="text-gray-400 font-light">Inventory Node</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Asset Name</label>
              <input type="text" required placeholder="e.g. Neural Link v2" 
                className="w-full bg-[#1c1c21] text-white border border-white/5 rounded-xl p-4 focus:border-cyan-500/40 focus:bg-[#222228] outline-none transition-all placeholder:text-gray-600"
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Valuation ($)</label>
              <input type="number" required placeholder="0.00" 
                className="w-full bg-[#1c1c21] text-white border border-white/5 rounded-xl p-4 focus:border-cyan-500/40 focus:bg-[#222228] outline-none transition-all placeholder:text-gray-600"
                onChange={(e) => setFormData({...formData, price: e.target.value})} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Summary</label>
            <input type="text" required placeholder="Brief asset overview..." 
              className="w-full bg-[#1c1c21] text-white border border-white/5 rounded-xl p-4 focus:border-cyan-500/40 focus:bg-[#222228] outline-none transition-all placeholder:text-gray-600"
              onChange={(e) => setFormData({...formData, description: e.target.value})} 
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Detailed Specifications</label>
            <textarea required placeholder="Technical data and parameters..." 
              className="w-full bg-[#1c1c21] text-white border border-white/5 rounded-xl p-4 h-32 focus:border-cyan-500/40 focus:bg-[#222228] outline-none transition-all placeholder:text-gray-600 resize-none"
              onChange={(e) => setFormData({...formData, long_description: e.target.value})} 
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Asset Image URL</label>
            <input type="text" required placeholder="https://..." 
              className="w-full bg-[#1c1c21] text-white border border-white/5 rounded-xl p-4 focus:border-cyan-500/40 focus:bg-[#222228] outline-none transition-all placeholder:text-gray-600"
              onChange={(e) => setFormData({...formData, image: e.target.value})} 
            />
          </div>

          <div className="pt-6">
            <button type="submit" disabled={loading} 
              className={`w-full py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.3em] transition-all duration-300
              ${loading ? 'bg-gray-800 text-gray-600' : 'bg-gray-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] active:scale-[0.98]'}`}>
              {loading ? "Establishing Uplink..." : "Commit to Database"}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
            <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">TechVibe Protocol // Authorized Personnel Only</p>
        </div>
      </div>
    </div>
  );
}