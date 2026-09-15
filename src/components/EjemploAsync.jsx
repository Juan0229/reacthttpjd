import { useState } from "react"

function EjemploAsync() {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador((prev) => prev + 1)
    setContador((prev) => prev + 1)
    console.log("Valor después de setContador:", contador)
  }

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default EjemploAsync
