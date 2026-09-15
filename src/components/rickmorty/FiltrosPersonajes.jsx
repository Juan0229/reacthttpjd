import { useState } from "react";
import axios from "axios";

function FiltrosPersonajes() {
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [personajes, setPersonajes] = useState([]);

  const estados = ["alive", "dead", "unknown"];
  const generos = ["male", "female", "genderless", "unknown"];

  const buscar = async () => {
    let url = "https://rickandmortyapi.com/api/character/?";
    if (status) url += `status=${status}&`;
    if (gender) url += `gender=${gender}`;
    const res = await axios.get(url);
    setPersonajes(res.data.results || []);
  };

  return (
    <div>
      <h2>Filtros de Personajes</h2>
      <div>
        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="">Estado</option>
          {estados.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select onChange={(e) => setGender(e.target.value)} value={gender}>
          <option value="">Género</option>
          {generos.map(g => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        <button onClick={buscar}>Filtrar</button>
      </div>
      <div>
        {personajes.map(p => (
          <div key={p.id}>
            <h4>{p.name}</h4>
            <img src={p.image} alt={p.name} width="100" />
            <p>Estado: {p.status} | Género: {p.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiltrosPersonajes;
