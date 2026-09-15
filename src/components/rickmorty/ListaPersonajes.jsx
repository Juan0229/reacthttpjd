import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListaPersonajes() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => setPersonajes(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Lista de Personajes</h2>
      <div>
        {personajes.map(p => (
          <div key={p.id}>
            <Link to={`/personaje/${p.id}`}>
              <h4>{p.name}</h4>
              <img src={p.image} alt={p.name} width="150" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaPersonajes;
