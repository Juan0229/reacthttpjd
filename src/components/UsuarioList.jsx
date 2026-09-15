import { useEffect, useState } from "react";
import { obtenerUsuarios, eliminarUsuario } from "../services/api";

function UsuarioList({ onEditar }) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const res = await obtenerUsuarios();
    setUsuarios(res.data);
  };

  const borrar = async (id) => {
    await eliminarUsuario(id);
    cargarUsuarios();
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {usuarios.map(user => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => onEditar(user)}>Editar</button>
          <button onClick={() => borrar(user.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default UsuarioList;
