import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
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
    height: "90px", // 1/4 de un footer alto estándar (360px estimado)
    backgroundColor: "rgba(220, 170, 245, 0.25)",
    color: "#2b0b44",
    borderTop: "1px solid rgba(255,255,255,0.35)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    boxShadow: "0 -6px 24px rgba(107, 33, 140, 0.24)",
    padding: "12px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    minWidth: "150px",
  },
  title: {
    marginBottom: "10px",
    fontSize: "16px",
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    marginBottom: "8px",
    fontSize: "14px",
  },
  bottom: {
    borderTop: "1px solid #333",
    marginTop: "20px",
    paddingTop: "10px",
    textAlign: "center",
    fontSize: "13px",
    color: "#aaa",
  },
};

export default Footer;
