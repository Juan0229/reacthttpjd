import { useState } from "react";
import axios from "axios";

function CoctelesTipo() {
  const [tipo, setTipo] = useState("");
  const [cocteles, setCocteles] = useState([]);

  const tipos = ["Alcoholic", "Non_Alcoholic", "Optional_alcohol"];

  const cargarCocteles = async (t) => {
    setTipo(t);
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${t}`);
    setCocteles(res.data.drinks || []);
  };

  return (
    <div>
      <h2>Cócteles por Tipo</h2>
      <select onChange={(e) => cargarCocteles(e.target.value)} value={tipo}>
        <option value="">Seleccionar tipo</option>
        {tipos.map(t => (
          <option key={t} value={t}>{t}</option>
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

export default CoctelesTipo;
