import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DetallePersonaje() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => setPersonaje(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!personaje) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{personaje.name}</h2>
      <img src={personaje.image} alt={personaje.name} width="200" />
      <p><strong>Estado:</strong> {personaje.status}</p>
      <p><strong>Especie:</strong> {personaje.species}</p>
      <p><strong>Género:</strong> {personaje.gender}</p>
      <p><strong>Origen:</strong> {personaje.origin.name}</p>
      <p><strong>Ubicación:</strong> {personaje.location.name}</p>
      <Link to="/personajes">Volver a la lista</Link>
    </div>
  );
}

export default DetallePersonaje;
