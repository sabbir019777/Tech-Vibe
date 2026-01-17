"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useSession, signOut } from "next-auth/react";
import toast from "react-hot-toast";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const { data: session } = useSession();
  const [manualAuth, setManualAuth] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);


  const isUserLoggedIn = !!session || manualAuth;

 
  const getUserImage = () => {
    if (userProfile?.image) return userProfile.image;
    if (session?.user?.image) return session.user.image;
    if (manualAuth) return "https://i.ibb.co/d0y925Lt/Gemini-Generated-Image-po94y4po94y4po94.png";
    return "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const updateStats = () => {

      const token = Cookies.get("isLoggedIn");
      const isMockLoggedIn = !!token;
      
   
      setManualAuth(isMockLoggedIn);
      
      if (typeof window !== "undefined") {
        let storageSuffix = "guest";

        if (session?.user?.email) {
          storageSuffix = session.user.email;
        } else if (isMockLoggedIn) {
          storageSuffix = "mock";
        }

        try {
           const cartKey = `cart_${storageSuffix}`;
           const cartData = localStorage.getItem(cartKey);
           const cart = cartData ? JSON.parse(cartData) : [];
           setCartCount(cart.length);
        } catch (error) {
           console.error("Cart Error:", error);
           setCartCount(0);
        }

        try {
           const profileKey = `userProfile_${storageSuffix}`;
           const profileData = localStorage.getItem(profileKey);
           const storedProfile = profileData ? JSON.parse(profileData) : null;
           setUserProfile(storedProfile);
        } catch (error) {
           console.error("Profile Error:", error);
        }
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    updateStats();
    const interval = setInterval(updateStats, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      clearInterval(interval);
    };
  }, [session]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };


  const handleLogout = async () => {
   
    Cookies.remove("isLoggedIn", { path: '/' });
    
    
    setManualAuth(false);
    setUserProfile(null);
    setCartCount(0);
    setIsDropdownOpen(false);
    setIsOpen(false);

    await signOut({ redirect: false });


    toast.success("Logged out successfully");
    

    router.replace("/login");
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collections", href: "/items" },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-[#0a0a0a] py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
    
        <Link href="/" onClick={handleLinkClick} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-all">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">
            Tech<span className="text-cyan-400">Vibe</span>
          </span>
        </Link>


        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/5">
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              onClick={handleLinkClick} 
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${pathname === item.href ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.3)]" : "text-gray-500 hover:text-white"}`}
            >
              {item.name}
            </Link>
          ))}

          {isUserLoggedIn && (
            <Link href="/add-item" onClick={handleLinkClick} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${pathname === "/add-item" ? "bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.3)]" : "text-cyan-500/80 hover:text-cyan-400"}`}>
              Add-Item
            </Link>
          )}
        </div>

        {/* ডান পাশের অপশন */}
        <div className="hidden md:flex items-center gap-5">
          
          <ThemeToggle />

          <Link href="/cart" onClick={handleLinkClick} className="relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all group">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-[9px] font-black text-black shadow-[0_0_8px_rgba(6,182,212,0.6)] border border-[#0a0a0a]">
                {cartCount}
              </span>
            )}
          </Link>

          {isUserLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                className="flex items-center gap-2 focus:outline-none transition-transform active:scale-95"
              >
                <div className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${isDropdownOpen ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'border-cyan-500/50'}`}>
                   <img src={getUserImage()} alt="User" className="object-cover w-full h-full" />
                </div>
              </button>

              <div className={`absolute right-0 top-14 w-56 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 backdrop-blur-3xl transform transition-all duration-300 origin-top-right ${isDropdownOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-2 pointer-events-none'}`}>
                
                <div className="px-4 py-3 border-b border-white/5 mb-1">
                   <p className="text-xs text-gray-400 uppercase tracking-wider">Signed In</p>
                </div>

                {menuItems.map((item) => (
                   <Link 
                     key={item.name}
                     href={item.href} 
                     onClick={handleLinkClick}
                     className="px-4 py-2.5 rounded-xl text-sm font-bold text-gray-300 hover:bg-white/10 hover:text-cyan-400 transition-all flex items-center gap-3"
                   >
                     <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>
                     {item.name}
                   </Link>
                ))}

                <Link 
                  href="/profile" 
                  onClick={handleLinkClick}
                  className="px-4 py-2.5 rounded-xl text-sm font-bold text-gray-300 hover:bg-white/10 hover:text-cyan-400 transition-all flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>
                  Profile
                </Link>

                <button 
                  onClick={handleLogout} 
                  className="mt-1 px-4 py-2.5 rounded-xl text-sm font-bold text-red-500 hover:bg-red-500/10 transition-all text-left flex items-center gap-3 w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50"></span>
                  Logout
                </button>
              </div>
            </div>
          ) : (
         
            <Link href="/login" onClick={handleLinkClick} className="relative px-8 py-2.5 rounded-xl bg-gray-500 text-black text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95 group overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 font-black uppercase">Login</span>
            </Link>
          )}
        </div>


        <div className="md:hidden flex items-center gap-4">
           <ThemeToggle />

           {isUserLoggedIn && (
             <button onClick={() => setIsOpen(!isOpen)} className="w-8 h-8 rounded-full overflow-hidden border border-cyan-500">
                <img src={getUserImage()} alt="User" className="object-cover w-full h-full" />
             </button>
           )}

          <Link href="/cart" onClick={handleLinkClick} className="relative p-2 text-gray-400">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
             </svg>
             {cartCount > 0 && (
               <span className="absolute top-0 right-0 h-4 w-4 bg-cyan-500 text-black text-[8px] font-black rounded-full flex items-center justify-center border border-[#0a0a0a]">
                 {cartCount}
               </span>
             )}
          </Link>
          
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 p-2">
            <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-current transition-all ${isOpen ? 'w-6 translate-y-2 -rotate-45' : 'w-6'}`}></span>
                <span className={`h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`h-0.5 bg-current transition-all ${isOpen ? 'w-6 -translate-y-2 rotate-45' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </div>


      <div className={`md:hidden absolute w-full bg-[#0a0a0a] border-b border-white/10 transition-all duration-500 ${isOpen ? "max-h-screen py-10 opacity-100 shadow-2xl" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="flex flex-col items-center space-y-6">
          
          {menuItems.map((item) => (
             <Link key={item.name} href={item.href} onClick={handleLinkClick} className="text-xs font-black uppercase tracking-widest text-white hover:text-cyan-400 transition-colors">
               {item.name}
             </Link>
          ))}

          {isUserLoggedIn && (
            <>
              <Link href="/profile" onClick={handleLinkClick} className="text-xs font-black uppercase tracking-widest text-white hover:text-cyan-400">Profile</Link>
              <Link href="/add-item" onClick={handleLinkClick} className="text-xs font-black uppercase tracking-widest text-cyan-400">Add Item +</Link>
            </>
          )}

          <div className="pt-4 border-t border-white/5 w-20 text-center">
            {isUserLoggedIn ? (
              <button onClick={handleLogout} className="text-red-500 text-xs font-black uppercase tracking-widest hover:text-red-400">Logout</button>
            ) : (
             
              <Link href="/login" onClick={handleLinkClick} className="text-cyan-400 text-xs font-black uppercase tracking-widest">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;