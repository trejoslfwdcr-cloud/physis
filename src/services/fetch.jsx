

async function getDatos(endpoint) {

  const peticion = await fetch(`http://localhost:3001/${endpoint}`);
  const datos = await peticion.json();
  console.log(datos);
  return datos;
}

async function postDatos(obj,endpoint) {

  const peticion = await fetch(`http://localhost:3001/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const datos = await peticion.json();
  console.log(datos);
  return datos;
}

async function patchData(obj, id,endpoint) {
  
  const peticion = await fetch(`http://localhost:3001/${endpoint}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const datos = await peticion.json();
  console.log(datos);
  return datos;
}


async function deleteData(id) {

  const peticion = await fetch(`http://localhost:3001/${endpoint}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const datos = await peticion.json();
  console.log(datos);
  return datos;
}

export default { getDatos, postDatos, patchData, deleteData }