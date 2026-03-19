import fetch from "../services/fetch";
import { useState, useEffect } from "react";

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
        (u.rol == "user" && u.nombreUsuario == correoUsuario) ||
        (u.correoUsuario == correoUsuario && u.claveUsuario == claveUsuario),
    );

    const adminExiste = usuarios.find(
      (u) =>
        (u.rol == "admin" && u.nombreUsuario == correoUsuario) ||
        (u.correoUsuario == correoUsuario && u.claveUsuario == claveUsuario),
    );

    if (usuarioExiste) {
      alert("existe");
    } else {
      alert("no existe");
    }
    if (adminExiste) {
      alert("admin existe");
    } else {
      alert("admin no existe");
    }
  };

  return (
    <>
      <h1>Inicia Sesion</h1>

      <input
        value={correoUsuario}
        placeholder="Usuario"
        onChange={(e) => setCorreoUsuario(e.target.value)}
      />
      <input
        type="password"
        value={claveUsuario}
        placeholder="Contraseña"
        onChange={(e) => setClaveUsuario(e.target.value)}
      />

      <button onClick={handleLogin}>Inicio Sesion</button>
    </>
  );
}

export default LoginUser;
