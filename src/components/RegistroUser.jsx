import React, { useState } from 'react';
import { User, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import NavInicio from '../components/NavInicio';

function Register() {
  // Regex para: Mínimo 8 caracteres, una mayúscula, un número y un carácter especial
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8f9fa] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#fce7f3] rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-blue-100 rounded-full blur-[120px] opacity-60" />

      <NavInicio />

      <main className="z-10 w-full max-w-md px-6 mt-20">
        <div className="bg-white/40 backdrop-blur-2xl border border-white/40 p-10 rounded-[3rem] shadow-2xl">
          
          <header className="text-center mb-8">
            <h1 className="text-4xl font-black text-gray-800 tracking-tighter mb-2">Create Account</h1>
            <p className="text-gray-500 font-medium">Join the Physis community today.</p>
          </header>

          <form className="w-full space-y-5">
            {/* Full Name */}
            <div className="relative group">
              <User className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-[#faacd4]" size={20} />
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full bg-white/60 border border-white/20 rounded-2xl py-3.5 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#faacd4]/30 transition-all"
              />
            </div>

            {/* Email Address */}
            <div className="relative group">
              <Mail className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-[#faacd4]" size={20} />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-white/60 border border-white/20 rounded-2xl py-3.5 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#faacd4]/30 transition-all"
              />
            </div>

            {/* Secure Password (TYPE="PASSWORD" para que sea secreta) */}
            <div className="relative group">
              <Lock className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-[#faacd4]" size={20} />
              <input 
                type="password" 
                placeholder="Password"
                title="Must contain at least 8 characters, one uppercase, one number and one special character"
                className="w-full bg-white/60 border border-white/20 rounded-2xl py-3.5 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#faacd4]/30 transition-all"
              />
            </div>

            {/* Pequeña nota de seguridad para el usuario */}
            <div className="flex items-center gap-2 px-2 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
              <ShieldCheck size={14} />
              <span>Use 8+ characters with symbols & numbers</span>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#faacd4] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#faacd4]/20 hover:bg-[#f992c3] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
            >
              Get Started
              <ArrowRight size={20} />
            </button>
          </form>

          <footer className="mt-8 text-center text-sm text-gray-500">
            Already a member? <span className="text-[#faacd4] cursor-pointer hover:underline font-bold">Log In</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Register;