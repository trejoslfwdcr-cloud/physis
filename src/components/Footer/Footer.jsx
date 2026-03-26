import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { styles } from "./Footer.styles"; // Importamos los estilos

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    
    return () => observer.disconnect(); // Forma abreviada de limpiar
  }, []);

  const dynamicFooterStyle = {
    ...styles.footer,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(100%)",
    pointerEvents: isVisible ? "auto" : "none",
  };

  return (
    <>
      <div ref={sentinelRef} style={{ height: "1px" }} />
      
      <footer style={dynamicFooterStyle}>
        <div style={styles.container}>
          
          {/* Navegación Principal */}
          <div style={styles.section}>
            <h4 style={styles.title}>Menú</h4>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/contact" style={styles.link}>Contact Us</Link>
            <Link to="/about" style={styles.link}>Our Mission</Link>
          </div>

          {/* Autenticación */}
          <div style={styles.section}>
            <h4 style={styles.title}>Cuenta</h4>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </div>

          {/* Legal */}
          <div style={styles.section}>
            <h4 style={styles.title}>Legal</h4>
            <Link to="/terms" style={styles.link}>Terms & Conditions</Link>
            <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
          </div>

          {/* Social Media */}
          <div style={styles.section}>
            <h4 style={styles.title}>Síguenos</h4>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.link}>Instagram</a>
            <a href="https://x.com" target="_blank" rel="noreferrer" style={styles.link}>X (Twitter)</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" style={styles.link}>YouTube</a>
          </div>

        </div>

        <div style={styles.bottom}>
          <p>© {new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;