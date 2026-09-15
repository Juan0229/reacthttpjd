import { useState, useEffect } from "react";
import { crearUsuario, actualizarUsuario } from "../services/api";

function UsuarioForm({ usuarioEditar, recargar }) {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    if (usuarioEditar) {
      setNombre(usuarioEditar.name);
    }
  }, [usuarioEditar]);

  const guardar = async () => {
    if (usuarioEditar) {
      await actualizarUsuario(usuarioEditar.id, { name: nombre });
    } else {
      await crearUsuario({ name: nombre });
    }
    setNombre("");
    recargar();
  };

  return (
    <div>
      <h2>Formulario Usuario</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={guardar}>Guardar</button>
    </div>
  );
}

export default UsuarioForm;
