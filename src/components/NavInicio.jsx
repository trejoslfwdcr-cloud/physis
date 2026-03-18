import React, { useState, useEffect } from 'react';
import { Search, Sun, Moon, Palette, Menu } from 'lucide-react';

function NavInicio() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
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
    <nav className={`fixed top-0 w-full z-50 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-[#fce7f3]/70 backdrop-blur-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-gray-800 tracking-tighter">PHYSIS</span>
          </div>

          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-md">
              <input 
                type="text" 
                placeholder="Search for inspiration..." 
                className="w-full bg-white/40 border-none rounded-full py-1.5 pl-10 pr-4 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#faacd4]/50"
              />
              <Search className="absolute left-3 top-2 text-gray-400" size={18} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-gray-200/30 p-1 rounded-full">
              <button className="p-1.5 hover:bg-white rounded-full text-gray-600 transition-all"><Sun size={18} /></button>
              <button className="p-1.5 hover:bg-white rounded-full text-gray-600 transition-all"><Moon size={18} /></button>
              <button className="p-1.5 hover:bg-white rounded-full text-gray-600 transition-all"><Palette size={18} /></button>
            </div>
            <button className="bg-[#faacd4] text-white px-5 py-1.5 rounded-full font-bold text-sm hover:shadow-lg transition-all">
              Join
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavInicio;