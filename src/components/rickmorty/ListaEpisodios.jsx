import { useState, useEffect } from "react";
import axios from "axios";

function ListaEpisodios() {
  const [episodios, setEpisodios] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const [episodioSeleccionado, setEpisodioSeleccionado] = useState(null);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode")
      .then(res => setEpisodios(res.data.results))
      .catch(err => console.log(err));
  }, []);

  const verPersonajes = async (episodio) => {
    setEpisodioSeleccionado(episodio);
    const personajesPromises = episodio.characters.map(url => axios.get(url));
    const resultados = await Promise.all(personajesPromises);
    setPersonajes(resultados.map(r => r.data));
  };

  return (
    <div>
      <h2>Episodios</h2>
      <div>
        {episodios.map(ep => (
          <div key={ep.id}>
            <h4>{ep.name} - {ep.episode}</h4>
            <button onClick={() => verPersonajes(ep)}>Ver personajes</button>
          </div>
        ))}
      </div>
      {episodioSeleccionado && (
        <div>
          <h3>Personajes en: {episodioSeleccionado.name}</h3>
          {personajes.map(p => (
            <div key={p.id}>
              <img src={p.image} alt={p.name} width="50" />
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaEpisodios;
