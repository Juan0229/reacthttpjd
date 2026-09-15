import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"
import "./App.css"

import EjemploAsync from "./components/EjemploAsync"
import Usuarios from "./components/Usuarios"
import FormUsuario from "./components/FormUsuario"
import BuscarUsuarios from "./components/BuscarUsuarios"
import UsuarioList from "./components/UsuarioList"
import UsuarioForm from "./components/UsuarioForm"

import ChisteAleatorio from "./components/chucknorris/ChisteAleatorio"
import CategoriasChistes from "./components/chucknorris/CategoriasChistes"
import BuscarChistes from "./components/chucknorris/BuscarChistes"

import BuscarCoctel from "./components/cocktail/BuscarCoctel"
import CoctelesCategoria from "./components/cocktail/CoctelesCategoria"
import DetalleCoctel from "./components/cocktail/DetalleCoctel"
import CoctelIngrediente from "./components/cocktail/CoctelIngrediente"
import CoctelAleatorio from "./components/cocktail/CoctelAleatorio"
import CoctelesTipo from "./components/cocktail/CoctelesTipo"

import ListaPersonajes from "./components/rickmorty/ListaPersonajes"
import BuscarPersonajes from "./components/rickmorty/BuscarPersonajes"
import DetallePersonaje from "./components/rickmorty/DetallePersonaje"
import ListaEpisodios from "./components/rickmorty/ListaEpisodios"
import FiltrosPersonajes from "./components/rickmorty/FiltrosPersonajes"
import TablaPersonajes from "./components/rickmorty/TablaPersonajes"
import Totales from "./components/rickmorty/Totales"
import PersonajeAleatorio from "./components/rickmorty/PersonajeAleatorio"

function App() {
  const [usuarioEditar, setUsuarioEditar] = useState(null)
  const [actualizar, setActualizar] = useState(false)

  const recargar = () => {
    setActualizar(!actualizar)
    setUsuarioEditar(null)
  }

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>Proyecto React HTTP Client</h1>
          <div className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/async">Async State</Link>
            <Link to="/usuarios">Usuarios</Link>
            <Link to="/chuck-norris">Chuck Norris</Link>
            <Link to="/cocteles">Cócteles</Link>
            <Link to="/rick-morty">Rick & Morty</Link>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/async" element={<EjemploAsync />} />
            <Route path="/usuarios" element={<UsuariosSection usuarioEditar={usuarioEditar} setUsuarioEditar={setUsuarioEditar} actualizar={actualizar} recargar={recargar} />} />
            <Route path="/chuck-norris" element={<ChuckNorrisSection />} />
            <Route path="/cocteles" element={<CoctelesSection />} />
            <Route path="/coctel/:id" element={<DetalleCoctel />} />
            <Route path="/rick-morty" element={<RickMortySection />} />
            <Route path="/personaje/:id" element={<DetallePersonaje />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Bienvenido al Proyecto React HTTP Client</h2>
      <p>Este proyecto contiene ejemplos y ejercicios de:</p>
      <ul>
        <li>Asincronía del estado en React</li>
        <li>HTTP Client con Axios</li>
        <li>CRUD de usuarios con JSONPlaceholder</li>
        <li>Chuck Norris API</li>
        <li>TheCocktailDB API</li>
        <li>Rick and Morty API</li>
      </ul>
    </div>
  )
}

function UsuariosSection({ usuarioEditar, setUsuarioEditar, actualizar, recargar }) {
  return (
    <div>
      <h2>CRUD Usuarios</h2>
      <UsuarioForm usuarioEditar={usuarioEditar} recargar={recargar} />
      <UsuarioList onEditar={setUsuarioEditar} actualizar={actualizar} />
      <hr />
      <h3>Búsqueda con parámetros</h3>
      <BuscarUsuarios />
      <hr />
      <h3>Usuarios directos con Axios</h3>
      <Usuarios />
      <hr />
      <h3>Formulario directo con Axios</h3>
      <FormUsuario />
    </div>
  )
}

function ChuckNorrisSection() {
  return (
    <div>
      <h2>Chuck Norris API</h2>
      <ChisteAleatorio />
      <hr />
      <CategoriasChistes />
      <hr />
      <BuscarChistes />
    </div>
  )
}

function CoctelesSection() {
  return (
    <div>
      <h2>TheCocktailDB API</h2>
      <BuscarCoctel />
      <hr />
      <CoctelesCategoria />
      <hr />
      <CoctelIngrediente />
      <hr />
      <CoctelAleatorio />
      <hr />
      <CoctelesTipo />
    </div>
  )
}

function RickMortySection() {
  return (
    <div>
      <h2>Rick and Morty API</h2>
      <Totales />
      <hr />
      <PersonajeAleatorio />
      <hr />
      <BuscarPersonajes />
      <hr />
      <FiltrosPersonajes />
      <hr />
      <TablaPersonajes />
      <hr />
      <ListaPersonajes />
      <hr />
      <ListaEpisodios />
    </div>
  )
}

export default App
