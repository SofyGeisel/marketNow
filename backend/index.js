const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const jwt = require("jsonwebtoken")
const { addUser, addProducto, addFavorito, addCompra, validarCredenciales, leerProductos, leerProductosFavoritos, leerCompras, modificarUsuario, eliminarFavorito } = require('./consultas')
const { verificarCredenciales, verificarToken } = require('./middelware')
const { secretKey } = require("./secretkey")


app.listen(3000, console.log("Servidor encendido"))
app.use(express.json())
app.use(cors())
// función middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


//--------------METODOS POST----------------

//REGISTRO DE NUEVOS USUARIOS
app.post("/usuarios", verificarCredenciales, async (req, res) => {

    try{
        const { nombre, email, direccion, password } =req.body
        await addUser(nombre, email, direccion, password)
        res.send("Usuario ha sido creado con exito")
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }

})

//INICIO DE SESION
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        await validarCredenciales(email, password)
        const token = jwt.sign({ email }, secretKey)
        res.send(token)

    } catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error)
    }
})

//AGREGA PRODUCTO
app.post("/producto", async (req, res) => {

    try{
        const { nombre, descripcion, precio, imagen } =req.body
        await addProducto(nombre, descripcion, precio, imagen)
        res.send("Producto ha sido creado con exito")
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }

})

//AGREGA PRODUCTO FAVORITO A USUARIO
app.post("/favoritos", async (req, res) => {
    try{
        const { productoid, usuarioid} = req.body
        await addFavorito(usuarioid, productoid)
        res.send("Favorito agregado con éxito")
    } catch (error) {
        res.status(500).send(error)
    }
  })

//AGREGA COMPRAS
app.post("/compras", async (req, res) => {
    try{
        const { usuarioid, fecha_compra, total, productos } = req.body
        await addCompra(usuarioid, fecha_compra, total, productos)
        res.send("Compra efectuada con éxito")
    } catch (error) {
        res.status(500).send(error)
    }
  })

//--------------METODOS PUT----------------

//ACTUALIZA DATOS DE USUARIO
app.put("/usuario/:id", async (req, res) => {
    try{
        const { id } = req.params
        const { nombre, direccion, password } = req.query
        await modificarUsuario(nombre, direccion, password, id)
        res.send("Usuario modificado con éxito")
    } catch (error) {
        res.status(500).send(error)
    }
  })


//--------------METODOS GET----------------

//OBTIENE DATOS DE USUARIO
app.get("/usuarios",verificarToken, async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error)
    }   
})

//OBTIENE PRODUCTOS GENERAL
app.get("/productos", async (req, res) => {
 try {
    const productos = await leerProductos()
    res.json(productos)
 } catch (error) {
    console.log(error)
    res.status(error.code || 500).send(error)
 }
})

//OBTIENE PRODUCTOS FAVORITOS
app.get("/favoritos/:id", async (req, res) => {
    try {
       const { id } = req.params
       const productos = await leerProductosFavoritos(id)
       res.json(productos)
    } catch (error) {
       console.log(error)
       res.status(error.code || 500).send(error)
    }
   })

//OBTIENE COMPRAS DE USUARIOS
app.get("/compras/:id", async (req, res) => {
    try {
       const { id } = req.params
       const compras = await leerCompras(id)
       res.json(compras)
    } catch (error) {
       console.log(error)
       res.status(error.code || 500).send(error)
    }
   })

//--------------METODOS DELETE----------------

//ELIMINA PRODUCTOS FAVORITOS
app.delete("/favoritos/:id", async (req, res) => {
    try{
        const { id } = req.params
        await eliminarFavorito(id)
        res.send("Favorito eliminado con éxito")
    } catch (error) {
        res.status(500).send(error)
    }
  })