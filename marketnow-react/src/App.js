import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react';
import ContextUser from './contextUsuario'
import ContextCarrito from "./contextCarrito";
import ContextProductos from "./contextProductos";

//Componentes y Vistas
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import LoginRegistro from "./pages/LoginRegistro"
import Carrito from "./pages/Carrito";
import Notfound from "./pages/Notfound";
import Tienda from "./pages/Tienda";
import Agregarproducto from "./pages/Agregarproducto";
import Detalleproducto from "./pages/Detalleproducto";
import Miperfil from "./pages/Miperfil";
import Editarperfil from "./pages/Editarperfil";
import Formulario from "./pages/Formulario";
import Misfavoritos from "./pages/Misfavoritos";
import Detallecompra from "./pages/Detallecompra";
import MisCompras from "./pages/Miscompras";


function App() {
  
  const [usuario, setUsuario] = useState([])
  const usuarioCompartido = {usuario, setUsuario}

  const [carrito, setCarrito] = useState([])
  const carritoCompartido = {carrito, setCarrito}

  const [productos, setProductos] = useState([])
  const productosCompartido = {productos, setProductos}

  return(
    <div className="App">

      <ContextUser.Provider value={usuarioCompartido}>
      <ContextCarrito.Provider value={carritoCompartido}>
      <ContextProductos.Provider value={productosCompartido}>
        <BrowserRouter>
            
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/loginregistro" element={<LoginRegistro/>} />
            <Route path="/tienda" element={<Tienda/>} />
            <Route path="/detalleproducto" element={<Detalleproducto/>} />
            <Route path="/miperfil" element={<Miperfil/>} />
            <Route path="/editarperfil" element={<Editarperfil/>} />
            <Route path="/agregarproducto" element={<Agregarproducto/>} />
            <Route path="/formulario" element={<Formulario/>} />
            <Route path="/misfavoritos" element={<Misfavoritos/>} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="/detallecompra" element={<Detallecompra/>} />
            <Route path="/compras" element={<MisCompras/>} />
            <Route path="*" element={<Notfound/>} />
              
          </Routes>
        </BrowserRouter>

      </ContextProductos.Provider>
      </ContextCarrito.Provider>
      </ContextUser.Provider>
      
      
    
  </div>  
);
}

export default App;
