import { useState } from "react";
import axios from "axios";

function BuscarCoctel() {
  const [nombre, setNombre] = useState("");
  const [cocteles, setCocteles] = useState([]);

  const buscar = async () => {
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`);
    setCocteles(res.data.drinks || []);
  };

  const obtenerIngredientes = (drink) => {
    const ingredientes = [];
    for (let i = 1; i <= 15; i++) {
      if (drink[`strIngredient${i}`]) {
        ingredientes.push(`${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`] || ""}`);
      }
    }
    return ingredientes;
  };

  return (
    <div>
      <h2>Buscar Cóctel por Nombre</h2>
      <input
        type="text"
        placeholder="Nombre del cóctel"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>
      <div>
        {cocteles.map(drink => (
          <div key={drink.idDrink}>
            <h3>{drink.strDrink}</h3>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} width="150" />
            <p>{drink.strInstructions}</p>
            <ul>
              {obtenerIngredientes(drink).map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuscarCoctel;
