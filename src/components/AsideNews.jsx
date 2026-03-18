import React, { useState, useEffect, useRef } from "react";

function AsideNews() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isShown, setIsShown] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsShown(true);
          // No obtener más notificaciones si ya se mostró.
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

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

  return (
    <div
      ref={containerRef}
      style={{
        ...styles.container,
        position: "sticky",
        top: "18vh",
        opacity: isShown ? 1 : 0,
        transform: isShown ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <h3 style={styles.title}>Newsletter</h3>
      <p style={styles.text}>Suscríbete para recibir las últimas noticias.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Suscribirse
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    width: "280px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    fontSize: "13px",
  },
};

export default AsideNews;
