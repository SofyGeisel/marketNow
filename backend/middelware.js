const jwt = require("jsonwebtoken")
const { secretKey } = require("./secretkey")
const { extraeUsuario } = require('./consultas')

const verificarCredenciales = (req, res, next) => {

    const { nombre, email, direccion, password } = req.body
    if (!nombre || !email || !direccion || !password) {
        res.status(500).send("Debe insertar todos los datos requeridos")
    }

    next()

}

const verificarToken = async (req, res, next) => {

    const Authorization = req.header("Authorization")
    const token = Authorization.split("Bearer ")[1]
    if (!token) throw{ code: 404, message: "Token no es valido" }
    jwt.verify(token, secretKey)
    const { email } = jwt.decode(token)
    console.log(`Token de usuario ${email} verificado`)
    const usuario = await extraeUsuario(email)
    console.log(usuario)
    res.send(usuario)
    next()
}

module.exports = { verificarCredenciales, verificarToken }
