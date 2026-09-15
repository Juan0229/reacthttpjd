import { useState, useEffect } from "react";
import axios from "axios";

function ChisteAleatorio() {
  const [chiste, setChiste] = useState(null);

  const cargarChiste = async () => {
    const res = await axios.get("https://api.chucknorris.io/jokes/random");
    setChiste(res.data);
  };

  useEffect(() => {
    cargarChiste();
  }, []);

  return (
    <div>
      <h2>Chiste Aleatorio de Chuck Norris</h2>
      {chiste && (
        <div>
          <img src={chiste.icon_url} alt="Chuck Norris" width="80" />
          <p>{chiste.value}</p>
        </div>
      )}
      <button onClick={cargarChiste}>Otro chiste</button>
    </div>
  );
}

export default ChisteAleatorio;
