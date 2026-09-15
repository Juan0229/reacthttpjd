import { useState, useEffect } from "react";
import axios from "axios";

function CoctelesCategoria() {
  const [categorias, setCategorias] = useState([]);
  const [seleccion, setSeleccion] = useState("");
  const [cocteles, setCocteles] = useState([]);

  useEffect(() => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => setCategorias(res.data.drinks))
      .catch(err => console.log(err));
  }, []);

  const cargarCocteles = async (cat) => {
    setSeleccion(cat);
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`);
    setCocteles(res.data.drinks || []);
  };

  return (
    <div>
      <h2>Cócteles por Categoría</h2>
      <select onChange={(e) => cargarCocteles(e.target.value)} value={seleccion}>
        <option value="">Seleccionar categoría</option>
        {categorias.map(cat => (
          <option key={cat.strCategory} value={cat.strCategory}>
            {cat.strCategory}
          </option>
        ))}
      </select>
      <div>
        {cocteles.map(drink => (
          <div key={drink.idDrink}>
            <h4>{drink.strDrink}</h4>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} width="100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoctelesCategoria;
