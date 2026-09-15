import { useState, useEffect } from "react";
import axios from "axios";

function CategoriasChistes() {
  const [categorias, setCategorias] = useState([]);
  const [chiste, setChiste] = useState(null);

  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/categories")
      .then(res => setCategorias(res.data))
      .catch(err => console.log(err));
  }, []);

  const chistePorCategoria = async (cat) => {
    const res = await axios.get(`https://api.chucknorris.io/jokes/random?category=${cat}`);
    setChiste(res.data);
  };

  return (
    <div>
      <h2>Categorías de Chistes</h2>
      <div>
        {categorias.map(cat => (
          <button key={cat} onClick={() => chistePorCategoria(cat)}>
            {cat}
          </button>
        ))}
      </div>
      {chiste && (
        <div>
          <img src={chiste.icon_url} alt="Chuck Norris" width="80" />
          <p><strong>Categoría:</strong> {chiste.categories[0]}</p>
          <p>{chiste.value}</p>
        </div>
      )}
    </div>
  );
}

export default CategoriasChistes;
