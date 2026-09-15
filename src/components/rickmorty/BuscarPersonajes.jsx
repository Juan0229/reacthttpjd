import { useState } from "react";
import axios from "axios";

function BuscarPersonajes() {
  const [nombre, setNombre] = useState("");
  const [personajes, setPersonajes] = useState([]);

  const buscar = async () => {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
    setPersonajes(res.data.results || []);
  };

  return (
    <div>
      <h2>Buscar Personajes</h2>
      <input
        type="text"
        placeholder="Nombre del personaje"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>
      <div>
        {personajes.map(p => (
          <div key={p.id}>
            <h4>{p.name}</h4>
            <img src={p.image} alt={p.name} width="100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuscarPersonajes;
