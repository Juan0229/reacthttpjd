import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const obtenerUsuarios = (params) => {
  return API.get("/users", { params });
};

export const crearUsuario = (usuario) =>
  API.post("/users", usuario);

export const actualizarUsuario = (id, usuario) =>
  API.put(`/users/${id}`, usuario);

export const eliminarUsuario = (id) =>
  API.delete(`/users/${id}`);
