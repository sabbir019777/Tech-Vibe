"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    fetch('http://localhost:5000/api/items')
      .then((res) => res.json())
      .then((data) => {
     
        let itemsArray = [];
        
        if (Array.isArray(data)) {
   
            itemsArray = data;
        } else if (data && data.items && Array.isArray(data.items)) {
           
            itemsArray = data.items;
        }

    
        const reversedData = [...itemsArray].reverse();
        
        setItems(reversedData);
        setFilteredItems(reversedData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    let result = [...items];

    // Search filter
    if (searchQuery) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

 

    
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
    
    }

    setFilteredItems(result);
  }, [searchQuery, sortBy, items]);

  if (loading) return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#050505]">
      <div className="w-10 h-10 border-2 border-white/5 border-t-cyan-400 rounded-full animate-spin"></div>
      <p className="mt-4 text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400 animate-pulse">Establishing Node Link...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden pb-32">



      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 pt-32">
        
        {/* Header and Controls Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-l-4 border-cyan-500 pl-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">Inventory Matrix</span>
            </h1>
            <p className="text-gray-500 text-sm mt-2 font-medium uppercase tracking-widest">Authorized Access Only // Node_v4.0</p>
          </div>

          {/* Search and Sort UI */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">

            <div className="relative w-full sm:w-80 group">
              <input 
                type="text" 
                placeholder="Search Asset Name..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-12 py-3.5 text-xs text-white outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Cyber Sort Dropdown */}
            <div className="relative w-full sm:w-48 group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-3.5 text-[10px] font-black uppercase tracking-widest text-gray-400 outline-none appearance-none cursor-pointer focus:border-cyan-500/50 transition-all"
              >
                <option value="newest" className="bg-[#0a0a0a]">Latest Sync</option>
                <option value="price-low" className="bg-[#0a0a0a]">Price: Low to High</option>
                <option value="price-high" className="bg-[#0a0a0a]">Price: High to Low</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative flex flex-col bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-[2rem] transition-all duration-500 hover:bg-white/[0.12] hover:border-cyan-500/50 hover:-translate-y-2 overflow-hidden"
              >
             
                <div className="relative h-56 w-full flex items-center justify-center p-8 bg-white/[0.02] group-hover:bg-cyan-500/5 transition-colors">
              
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
                  />
                  <div className="absolute top-4 left-4 bg-cyan-500/20 border border-cyan-500/30 px-2 py-0.5 rounded-md backdrop-blur-md">
                    <p className="text-[7px] font-black text-cyan-400 uppercase tracking-widest">Active Node</p>
                  </div>
                </div>


                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-base font-bold text-white tracking-tight truncate group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </h2>
                  
                  <p className="text-[11px] text-gray-400 font-medium line-clamp-2 leading-relaxed mt-3 h-8">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-end justify-between border-t border-white/5 pt-4">
                    <div>
                      <p className="text-[8px] text-gray-500 font-black uppercase tracking-widest mb-1">MSRP Value</p>
                      <span className="text-2xl font-black text-white tracking-tighter">
                        ${item.price}
                      </span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
                  </div>
                  
                  <div className="mt-6">
                    <Link href={`/items/${item.id}`}>
                      <button className="w-full py-4 rounded-lg bg-[#1a1a1a] text-gray-500 text-[11px] font-black uppercase tracking-[0.25em] border border-white/5 transition-all duration-200 hover:bg-gray-500 hover:text-black active:scale-[0.98]">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_#22d3ee]"></div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-500 font-black uppercase tracking-[0.4em]">No matching assets found in matrix.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}