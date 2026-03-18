import { useState } from "react";
import fetch from "../services/fetch";

function RegistroUser() {
  const [nombre, setNombre] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [apellidoUsuario, setApellidoUsuario] = useState("");
  const [correoUsuario, setCorreoUsuario] = useState("");
  const [claveUsuario, setClaveUsuario] = useState("");
  const [rol] = useState("usuario")

  async function crearUsuario() {
    /*
      TODO: REGEX
    */

    const objUsuario = {
      nombre: nombre,
      nombreUsuario: nombreUsuario,
      apellidoUsuario: apellidoUsuario,
      correoUsuario: correoUsuario,
      claveUsuario: claveUsuario,
      rol: rol
    };
    await fetch.postDatos(objUsuario, "usuarios");
  }

  return (
    <>

    <h1>Registrate</h1>
      <input
        type="text"
        placeholder="Nombre"
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nombre usuario"
        onChange={(e) => setNombreUsuario(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellido usuario"
        onChange={(e) => setApellidoUsuario(e.target.value)}
      />
      <input
        type="text"
        placeholder="Correo usuario"
        onChange={(e) => setCorreoUsuario(e.target.value)}
      />
      <input
        type="text"
        placeholder="Clave usuario"
        onChange={(e) => setClaveUsuario(e.target.value)}
      />

      <button onClick={crearUsuario}>Crear cuenta</button>
    </>
  );
}
export default RegistroUser;
