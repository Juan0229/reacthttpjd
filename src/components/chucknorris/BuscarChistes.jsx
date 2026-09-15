import { useState } from "react";
import axios from "axios";

function BuscarChistes() {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);

  const buscar = async () => {
    const res = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
    setResultados(res.data.result);
  };

  return (
    <div>
      <h2>Buscar Chistes</h2>
      <input
        type="text"
        placeholder="Buscar chiste..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>
      <ul>
        {resultados.map(chiste => (
          <li key={chiste.id}>
            <img src={chiste.icon_url} alt="icon" width="40" />
            <p>{chiste.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuscarChistes;
