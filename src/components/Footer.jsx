import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const atBottom = scrollTop + windowHeight >= documentHeight - 12;
      setVisible(atBottom);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer
      style={{
        ...styles.footer,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div style={styles.container}>
        {/* Navegación */}
        <div style={styles.section}>
          <h4 style={styles.title}>Explorar</h4>
          <Link to="/about" style={styles.link}>
            Our Mission
          </Link>
          <Link to="/terms" style={styles.link}>
            Terms & Conditions
          </Link>
          <Link to="/Inicio" style={styles.link}>
            Inicio
          </Link>
        </div>

        {/* Usuario */}
        <div style={styles.section}>
          <h4 style={styles.title}>Cuenta</h4>
          <Link to="/login" style={styles.link}>
            Login
          </Link>
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </div>

        {/* Redes sociales */}
        <div style={styles.section}>
          <h4 style={styles.title}>Síguenos</h4>

          {/* Enlaces externos → usar <a> */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Instagram
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            X (Twitter)
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            YouTube
          </a>
        </div>
      </div>

      {/* Footer inferior */}
      <div style={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Mi Proyecto. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    zIndex: 50,
    minHeight: "90px",
    maxHeight: "180px",
    backgroundColor: "rgba(220, 170, 245, 0.25)",
    color: "#2b0b44",
    borderTop: "1px solid rgba(255,255,255,0.35)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    boxShadow: "0 -6px 24px rgba(107, 33, 140, 0.24)",
    padding: "8px 12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
    maxWidth: "1000px",
    margin: "0 auto",
    alignItems: "flex-start",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "8px",
    minWidth: "120px",
    flex: "1 1 32%",
  },
  title: {
    marginBottom: "6px",
    fontSize: "14px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginBottom: "4px",
    fontSize: "12px",
    lineHeight: "1.2",
  },
  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.25)",
    marginTop: "8px",
    paddingTop: "6px",
    textAlign: "center",
    fontSize: "11px",
    color: "#dbd4e5",
  },
};

export default Footer;
