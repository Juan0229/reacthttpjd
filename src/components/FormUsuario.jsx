import { useState } from "react";
import axios from "axios";

function FormUsuario() {
  const [nombre, setNombre] = useState("");

  const guardarUsuario = async () => {
    const respuesta = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      { name: nombre }
    );
    console.log(respuesta.data);
    setNombre("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={guardarUsuario}>Guardar</button>
    </div>
  );
}

export default FormUsuario;
