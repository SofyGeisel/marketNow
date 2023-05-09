const jwt = require("jsonwebtoken")
const { secretKey } = require("./secretkey")
const { extraeUsuario } = require('./consultas')

const verificarCredenciales = (req, res, next) => {

    const { nombre, mail, direccion, password } = req.body
    if (!nombre || !mail || !direccion || !password) {
        res.status(500).send("Debe insertar todos los datos requeridos")
    }

    next()

}

const verificarToken = async (req, res, next) => {

    const Authorization = req.header("Authorization")
    const token = Authorization.split("Bearer ")[1]
    if (!token) throw{ code: 404, message: "Token no es valido" }
    jwt.verify(token, secretKey)
    const { mail } = jwt.decode(token)
    console.log(`Token de usuario ${mail} verificado`)
    const usuario = await extraeUsuario(mail)
    console.log(usuario)
    res.send(usuario)
    next()
}

module.exports = { verificarCredenciales, verificarToken }
