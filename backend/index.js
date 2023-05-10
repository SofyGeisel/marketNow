const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require("jsonwebtoken")
const { addUser, validarCredenciales } = require('./consultas')
const { verificarCredenciales, verificarToken } = require('./middelware')
const { secretKey } = require("./secretkey")


app.listen(3000, console.log("Servidor encendido"))
app.use(express.json())
app.use(cors())


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

app.get("/usuarios",verificarToken, async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error)
    }   
})