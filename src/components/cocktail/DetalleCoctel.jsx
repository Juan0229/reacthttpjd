import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetalleCoctel() {
  const { id } = useParams();
  const [coctel, setCoctel] = useState(null);

  useEffect(() => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => setCoctel(res.data.drinks[0]))
      .catch(err => console.log(err));
  }, [id]);

  const obtenerIngredientes = (drink) => {
    const ingredientes = [];
    for (let i = 1; i <= 15; i++) {
      if (drink[`strIngredient${i}`]) {
        ingredientes.push(`${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`] || ""}`);
      }
    }
    return ingredientes;
  };

  if (!coctel) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{coctel.strDrink}</h2>
      <img src={coctel.strDrinkThumb} alt={coctel.strDrink} width="200" />
      <p><strong>Categoría:</strong> {coctel.strCategory}</p>
      <p><strong>Vaso:</strong> {coctel.strGlass}</p>
      <p><strong>Instrucciones:</strong> {coctel.strInstructions}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {obtenerIngredientes(coctel).map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetalleCoctel;
