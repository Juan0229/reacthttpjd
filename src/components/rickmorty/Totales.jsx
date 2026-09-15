import { useState, useEffect } from "react";
import axios from "axios";

function Totales() {
  const [totales, setTotales] = useState({ personajes: 0, episodios: 0, ubicaciones: 0 });

  useEffect(() => {
    const cargarTotales = async () => {
      const [personajes, episodios, ubicaciones] = await Promise.all([
        axios.get("https://rickandmortyapi.com/api/character"),
        axios.get("https://rickandmortyapi.com/api/episode"),
        axios.get("https://rickandmortyapi.com/api/location")
      ]);
      setTotales({
        personajes: personajes.data.info.count,
        episodios: episodios.data.info.count,
        ubicaciones: ubicaciones.data.info.count
      });
    };
    cargarTotales();
  }, []);

  return (
    <div>
      <h2>Totales</h2>
      <div>
        <h3>Personajes: {totales.personajes}</h3>
        <h3>Episodios: {totales.episodios}</h3>
        <h3>Ubicaciones: {totales.ubicaciones}</h3>
      </div>
    </div>
  );
}

export default Totales;
