"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  

  const [isLoading, setIsLoading] = useState(true);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image: "",
    bio: ""
  });

  useEffect(() => {
  
    if (status === "loading") return;

    const manualToken = Cookies.get("isLoggedIn");


    if (!session && !manualToken) {
      router.push("/login");
      return;
    }


    let currentKey = "";
    let defaultData = {};

    if (session?.user) {
  
      currentKey = `userProfile_${session.user.email}`;
      

      defaultData = {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png", 
        bio: "TechVibe User (Verified)"
      };

    } else {
      
      currentKey = `userProfile_mock`;
      

      defaultData = {
        name: "Guest User",
        email: "admin@gmail.com",
        image: "https://i.ibb.co/d0y925Lt/Gemini-Generated-Image-po94y4po94y4po94.png", 
        bio: "Authorized Personnel"
      };
    }

  
    const storedUser = JSON.parse(localStorage.getItem(currentKey));

    if (storedUser) {
      setUserData(storedUser);
    } else {
    
      setUserData(defaultData);
    }

    setIsLoading(false); 

  }, [session, status, router]);

  const handleUpdate = (e) => {
    e.preventDefault();
    

    const dataToSave = {
        ...userData,
        image: userData.image.trim() === "" 
               ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" 
               : userData.image
    };


    let saveKey = "";
    if (session?.user?.email) {
        saveKey = `userProfile_${session.user.email}`;
    } else {
        saveKey = `userProfile_mock`;
    }

    localStorage.setItem(saveKey, JSON.stringify(dataToSave));

    window.dispatchEvent(new Event("storage"));
    
    toast.success("Profile Updated Successfully!");
  };


  if (isLoading) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-cyan-400">Loading Profile...</div>;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-10 px-6 flex justify-center">
      <Toaster />
      
      <div className="w-full max-w-2xl bg-[#16161a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>

        <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-center">
          Update <span className="text-cyan-400">Profile</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          
   
          <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full border-2 border-cyan-500/50 p-1 overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)] bg-black">
            
              <img 
                src={userData.image} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"} 
              />
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest text-center">Preview Avatars</p>
          </div>

       
          <form onSubmit={handleUpdate} className="w-full md:w-2/3 space-y-5">
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
              <input 
                type="text" 
                value={userData.name}
                onChange={(e) => setUserData({...userData, name: e.target.value})}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-3 focus:border-cyan-500/50 focus:outline-none text-sm font-bold text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Image URL</label>
              <input 
                type="text" 
                value={userData.image}
                onChange={(e) => setUserData({...userData, image: e.target.value})}
                placeholder="Paste valid image link..."
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-3 focus:border-cyan-500/50 focus:outline-none text-sm text-cyan-400 font-mono"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bio / Designation</label>
              <textarea 
                value={userData.bio}
                onChange={(e) => setUserData({...userData, bio: e.target.value})}
                rows="3"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-3 focus:border-cyan-500/50 focus:outline-none text-sm text-gray-300 resize-none"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] mt-4 active:scale-95"
            >
              Save Changes
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;