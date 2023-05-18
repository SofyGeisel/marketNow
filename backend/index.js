const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require("jsonwebtoken")
const { addUser, validarCredenciales, leerProductos, modificarUsuario } = require('./consultas')
const { verificarCredenciales, verificarToken } = require('./middelware')
const { secretKey } = require("./secretkey")


app.listen(3000, console.log("Servidor encendido"))
app.use(express.json())
app.use(cors())

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