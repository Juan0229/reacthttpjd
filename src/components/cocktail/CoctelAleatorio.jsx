import { useState } from "react";
import axios from "axios";

function CoctelAleatorio() {
  const [coctel, setCoctel] = useState(null);

  const cargarCoctel = async () => {
    const res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    setCoctel(res.data.drinks[0]);
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
      <h2>Cóctel Aleatorio</h2>
      <button onClick={cargarCoctel}>Sorpresa</button>
      {coctel && (
        <div>
          <h3>{coctel.strDrink}</h3>
          <img src={coctel.strDrinkThumb} alt={coctel.strDrink} width="200" />
          <p>{coctel.strInstructions}</p>
          <ul>
            {obtenerIngredientes(coctel).map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CoctelAleatorio;
