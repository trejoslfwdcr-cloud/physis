import React, { useState, useEffect, useRef } from "react";
import bgImage from "../Img/web.png";

function AsideNews() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);

    const onScroll = () => {
      const y = window.scrollY;
      if (y > 20 && !isShown) setIsShown(true);
      setScrollY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [isShown]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!email || !email.includes("@")) {
      setMessage("Por favor ingresa un correo válido.");
      return;
    }

    // Aquí puedes conectar tu API
    console.log("Correo registrado:", email);

    setMessage("¡Te has suscrito correctamente!");
    setEmail("");
  };

  const scrollOffset = Math.min(36, Math.max(0, scrollY * 0.1));

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl shadow-xl shadow-gray-200/50 border border-white/60 p-8 flex flex-col items-center text-center group"
      style={{
        position: "sticky",
        top: "18vh",
        opacity: isShown ? 1 : 0,
        transform: isShown
          ? `translateY(${scrollOffset}px)`
          : "translateY(30px)",
        transition: "opacity 0.5s ease, transform 0.3s ease",
      }}
    >
      {/* Capa de la Imagen de Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Capa de Glassmorphism (Smooth & Translucent Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-[#faacd4]/10 backdrop-blur-[4px]" />

      {/* Contenido Principal */}
      <div className="relative z-10 w-full space-y-5">
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-gray-800 tracking-tight">
            Newsletter
          </h3>
          <p className="text-sm text-gray-600 font-medium leading-relaxed">
            Suscríbete para recibir las últimas noticias.
          </p>
        </div>

        <form className="space-y-3 w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-2xl bg-white/60 border border-white/50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#faacd4]/50 focus:bg-white/90 transition-all shadow-sm"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#faacd4] text-white font-bold rounded-2xl shadow-lg shadow-[#faacd4]/30 hover:bg-[#f992c3] hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            Suscribirse
          </button>
        </form>

        {message && (
          <p className="text-sm font-semibold text-[#faacd4] mt-2">{message}</p>
        )}
      </div>
    </div>
  );
}

export default AsideNews;
