import React, { useState, useEffect } from "react";
import { User, Lock, LogIn, ShieldCheck } from "lucide-react";
import NavInicio from "../components/NavInicio";
import fetch from "../services/fetch";

function LoginUser() {
  const [correoUsuario, setCorreoUsuario] = useState("");
  const [claveUsuario, setClaveUsuario] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function traerUsuarios() {
      const lista = await fetch.getDatos("usuarios");
      setUsuarios(lista);
    }
    traerUsuarios();
  }, []);

  const handleLogin = () => {
    const usuarioExiste = usuarios.find(
      (u) =>
        (u.rol === "user" && u.nombreUsuario === correoUsuario) ||
        (u.correoUsuario === correoUsuario && u.claveUsuario === claveUsuario),
    );

    const adminExiste = usuarios.find(
      (u) =>
        (u.rol === "admin" && u.nombreUsuario === correoUsuario) ||
        (u.correoUsuario === correoUsuario && u.claveUsuario === claveUsuario),
    );

    if (usuarioExiste) {
      alert("Usuario autenticado");
    } else {
      alert("Usuario no encontrado");
    }

    if (adminExiste) {
      alert("Admin autenticado");
    } else {
      alert("Admin no encontrado");
    }
  };

  return (

    // 

    // <input
    //   type="text"
    // placeholder="Nombre usuario"
    // onChange={(e) => setNombreUsuario(e.target.value)}
    // />
    //<input
    // type="text"
    // placeholder="Correo usuario"
    // onChange={(e) => setCorreoUsuario(e.target.value)}
    ///>
    //<input
    //type="text"
    //placeholder="Clave usuario"
    //onChange={(e) => setClaveUsuario(e.target.value)}
    //>

    // <button onClick={LoginUser}>Inicio Sesion</button>
    // </>

    
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#fce7f3] rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-blue-100 rounded-full blur-[120px] opacity-60" />

      <NavInicio />

      <main className="z-10 w-full max-w-md px-6 mt-20">
        <div className="bg-white/40 backdrop-blur-2xl border border-white/40 p-10 rounded-[3rem] shadow-2xl">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-black text-gray-800 tracking-tighter mb-2">Iniciar Sesión</h1>
            <p className="text-gray-500 font-medium">Bienvenido de nuevo. Ingresa tus datos para continuar.</p>
          </header>

          <form className="w-full space-y-5" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="relative group">
              <User className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-[#faacd4]" size={20} />
              <input
                type="text"
                placeholder="Usuario o correo"
                value={correoUsuario}
                onChange={(e) => setCorreoUsuario(e.target.value)}
                className="w-full bg-white/60 border border-white/20 rounded-2xl py-3.5 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#faacd4]/30 transition-all"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-[#faacd4]" size={20} />
              <input
                type="password"
                placeholder="Contraseña"
                value={claveUsuario}
                onChange={(e) => setClaveUsuario(e.target.value)}
                className="w-full bg-white/60 border border-white/20 rounded-2xl py-3.5 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#faacd4]/30 transition-all"
              />
            </div>

            <div className="flex items-center gap-2 px-2 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
              <ShieldCheck size={14} />
              <span>Manten tu cuenta segura, no compartas tu password.</span>
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-[#faacd4] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#faacd4]/20 hover:bg-[#f992c3] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
            >
              <LogIn size={20} />
              Inicio Sesion
            </button>
          </form>

          <footer className="mt-8 text-center text-sm text-gray-500">
            ¿Aún no tienes cuenta? <span className="text-[#faacd4] cursor-pointer hover:underline font-bold">Regístrate</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default LoginUser;
