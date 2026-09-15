import axios from "axios";
import { useEffect, useState } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsuarios(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      {usuarios.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Usuarios;
