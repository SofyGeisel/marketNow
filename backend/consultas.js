const { Pool } = require('pg')
const bcrypt = require('bcryptjs')

//CONEXION A BASE DE DATOS
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'marketnow',
    allowExitOnIdle: true
})

//REGISTRO DE NUEVOS USUARIOS
const addUser = async (nombre, email, direccion, password) => {

    const consulta = "INSERT INTO usuarios (nombre, email, direccion, password) VALUES ($1, $2, $3, $4)"
    const passwordEncriptada = bcrypt.hashSync(password)
    const values = [nombre, email, direccion, passwordEncriptada]
    const result = await pool.query( consulta, values)
    console.log("usuario registrado con exito")
}

//REGISTRO DE NUEVOS PRODUCTOS
const addProducto = async (nombre, descripcion, precio, imagen) => {

    const consulta = "INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES ($1, $2, $3, $4)"
    const values = [nombre, descripcion, precio, imagen]
    const result = await pool.query( consulta, values)
    console.log("Producto registrado con exito")
}

//VALIDA CREDENCIALES DE USUARIO
const validarCredenciales = async ( email, password ) => {
    
    const values = [email]
    const consulta = "SELECT * FROM usuarios WHERE email = $1"
    const { rows: [usuario], rowCount } = await pool.query(consulta, values)
    const { password: passwordEncriptada } = usuario
    const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)
    if (!passwordEsCorrecta || !rowCount)
    throw { code: 401, message: "Email o contraseña incorrecta" }
}

//EXTRAE DATOS DE USUARIO
const extraeUsuario = async ( email ) => {

    const value = [email]
    const consulta = "SELECT usuarioid, nombre, email, direccion FROM usuarios WHERE email = $1"
    const { rows: usuario } = await pool.query(consulta, value)
    return usuario

}

//EXTRAE TODOS LOS PRODUCTOS
const leerProductos = async () => {

    const result = "SELECT * FROM productos"
    const { rows } = await pool.query(result)
    return rows

}

//ACTUALIZA INFORMACION DE USUARIO
const modificarUsuario = async (nombre, direccion, password, id) => {

    if (!password) {

    const consulta = "UPDATE posts SET nombre = $1, direccion = $2 WHERE id = $3"
    const values = [nombre, direccion, id]
    const result = await pool.query(consulta, values)
    console.log(("El usuario ha sido modificado con éxito"))

    } else {

    const consulta = "UPDATE posts SET nombre = $1, direccion = $2, password = $3 WHERE id = $4"
    const passwordEncriptada = bcrypt.hashSync(password)
    const values = [nombre, direccion, passwordEncriptada, id]
    const result = await pool.query(consulta, values)
    console.log(("El usuario ha sido modificado con éxito"))

    }
}

module.exports = { addUser, addProducto, validarCredenciales, extraeUsuario, leerProductos, modificarUsuario }