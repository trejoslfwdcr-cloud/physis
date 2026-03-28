import fetch from "../services/fetch";
import { useState } from "react"


function ContactForm() {

  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarReporte = async () => {

    const objReporte = {
      correo: correo,
      mensaje: mensaje
    }
    const reportes = await fetch.postDatos(objReporte, "reportes");
    console.log(reportes);
  }
  
    return (
    <div>
      <h1>Contáctanos</h1>
      <p>Si tienes alguna consulta o quieres reportar algún error no dudes en contactarnos:D.</p>
      <label htmlFor="">Correo</label>
      <input type="text" value={correo} placeholder="Escriba su correo" 
      onChange={(e) => setCorreo(e.target.value)}/>
      <label htmlFor="">Mensaje</label>
      <input type="text" value={mensaje} placeholder="Escriba su reporte;)" 
      onChange={(e) => setMensaje(e.target.value)}/>
      <button onClick={enviarReporte}>Enviar</button>
    </div>
  )
}

export default ContactForm