import { useState } from "react";
import axios from "axios";

function PersonajeAleatorio() {
  const [personaje, setPersonaje] = useState(null);

  const cargarPersonaje = async () => {
    const info = await axios.get("https://rickandmortyapi.com/api/character");
    const total = info.data.info.count;
    const id = Math.floor(Math.random() * total) + 1;
    const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    setPersonaje(res.data);
  };

  return (
    <div>
      <h2>Personaje Aleatorio</h2>
      <button onClick={cargarPersonaje}>Sorpresa</button>
      {personaje && (
        <div>
          <h3>{personaje.name}</h3>
          <img src={personaje.image} alt={personaje.name} width="200" />
          <p>Estado: {personaje.status}</p>
          <p>Especie: {personaje.species}</p>
          <p>Género: {personaje.gender}</p>
          <p>Origen: {personaje.origin.name}</p>
          <p>Ubicación: {personaje.location.name}</p>
        </div>
      )}
    </div>
  );
}

export default PersonajeAleatorio;
