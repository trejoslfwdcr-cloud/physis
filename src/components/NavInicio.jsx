import React, { useState, useEffect } from 'react';
import { Search, Sun, Moon, Palette } from 'lucide-react';
import { useNavigate } from "react-router-dom"

function NavInicio() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
   const navigate = useNavigate();

  useEffect(() => {
    const controlNavbar = () => {
      // Si scrolleamos hacia abajo más de 100px, ocultamos. Si subimos, mostramos.
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out 
      ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} 
      bg-[#fce7f3]/40 backdrop-blur-2xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)]`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Aumenté un poco el alto para más elegancia */}
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black text-gray-800 tracking-widest">PHYSIS</span>
          </div>

          {/* Search Bar - Ultra Glass Style */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-md group">
              <input 
                type="text" 
                placeholder="Search for inspiration..." 
                className="w-full bg-white/30 border border-white/30 rounded-full py-2 pl-12 pr-4 text-gray-700 placeholder-gray-500 focus:bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#faacd4]/40 transition-all backdrop-blur-md"
              />
              <Search className="absolute left-4 top-2.5 text-gray-500 group-focus-within:text-[#faacd4] transition-colors" size={20} />
            </div>
          </div>

          {/* Actions & Theme Toggles */}
          <div className="flex items-center gap-6">
            <div className="flex bg-white/20 backdrop-blur-md p-1.5 rounded-full border border-white/30">
              <button className="p-2 hover:bg-white/40 rounded-full text-gray-700 transition-all"><Sun size={18} /></button>
              <button className="p-2 hover:bg-white/40 rounded-full text-gray-700 transition-all"><Moon size={18} /></button>
              <button className="p-2 hover:bg-white/40 rounded-full text-gray-700 transition-all"><Palette size={18} /></button>
            </div>
            
            <button onClick={() => navigate("/login")} className="bg-[#faacd4] text-white px-7 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-[#faacd4]/30 hover:bg-[#f992c3] hover:scale-105 active:scale-95 transition-all">
              
              Join
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavInicio;