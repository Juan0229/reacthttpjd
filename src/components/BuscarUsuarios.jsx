import { useState } from "react";
import { obtenerUsuarios } from "../services/api";

function BuscarUsuarios() {
  const [nombre, setNombre] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const buscar = async () => {
    const response = await obtenerUsuarios({ username: nombre });
    setUsuarios(response.data);
  };

  return (
    <div>
      <h2>Buscar Usuario</h2>
      <input
        type="text"
        placeholder="Nombre usuario"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>
      <ul>
        {usuarios.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BuscarUsuarios;
