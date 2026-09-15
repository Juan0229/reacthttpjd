import { useState } from "react";
import axios from "axios";

function CoctelIngrediente() {
  const [ingrediente, setIngrediente] = useState("");
  const [cocteles, setCocteles] = useState([]);

  const buscar = async () => {
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
    setCocteles(res.data.drinks || []);
  };

  return (
    <div>
      <h2>Cócteles por Ingrediente</h2>
      <input
        type="text"
        placeholder="Ingrediente (ej: Gin)"
        value={ingrediente}
        onChange={(e) => setIngrediente(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>
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

export default CoctelIngrediente;
