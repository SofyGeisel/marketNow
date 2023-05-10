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
        const { nombre, mail, direccion, password } =req.body
        await addUser(nombre, mail, direccion, password)
        res.send("Usuario ha sido creado con exito")
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }

})

app.post("/login", async (req, res) => {
    try {
        const { mail, password } = req.body
        await validarCredenciales(mail, password)
        const token = jwt.sign({ mail }, secretKey)
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