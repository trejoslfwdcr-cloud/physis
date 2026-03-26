// Footer.styles.js
export const styles = {
  footer: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    zIndex: 50,
    backgroundColor: "rgba(220, 170, 245, 0.25)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    borderTop: "1px solid rgba(255,255,255,0.35)",
    boxShadow: "0 -6px 24px rgba(107, 33, 140, 0.24)",
    padding: "20px 40px",
    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Grid responsivo automático
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  title: {
    color: "#2b0b44",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    transition: "opacity 0.2s",
    cursor: "pointer",
  },
  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: "15px",
    textAlign: "center",
    fontSize: "12px",
    color: "#dbd4e5",
  }
};