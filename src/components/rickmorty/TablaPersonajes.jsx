import { useState, useEffect } from "react";
import axios from "axios";

function TablaPersonajes() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => setPersonajes(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Personajes en Tabla</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Origen</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
          {personajes.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.species}</td>
              <td>{p.origin.name}</td>
              <td>{p.location.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPersonajes;
