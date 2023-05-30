const { Pool } = require('pg')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv');
dotenv.config();

//CONEXION A BASE DE DATOS
const pool = new Pool({
    host: 'containers-us-west-64.railway.app',
    user: 'postgres',
    password: 'bARR3Xb70Cmdf9gOUAla',
    database: 'railway',
    port: 6547,
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
const addProducto = async (nombre, precio, descripcion, imagen, usuarioid) => {

    const consulta = "INSERT INTO productos (nombre, precio, descripcion, imagen, usuarioid) VALUES ($1, $2, $3, $4, $5)"
    const values = [nombre, precio, descripcion, imagen, usuarioid]
    const result = await pool.query( consulta, values)
    console.log("Producto registrado con exito")
}

//AGREGAR UN NUEVO FAVORITO
const addFavorito = async (usuarioid, productoid) => {

    const consulta = "INSERT INTO favoritos (usuarioid, productoid) VALUES ($1, $2)"
    const values = [usuarioid, productoid]
    const result = await pool.query( consulta, values)
    console.log("Favorito agregado con exito")
}

//AGREGAR COMPRA
const addCompra = async (usuarioid, fecha_compra, total, productos) => {

    const consulta = "INSERT INTO compras (usuarioid, fecha_compra, total, productos) VALUES ($1, $2, $3, $4)"
    const values = [usuarioid, fecha_compra, total, productos]
    const result = await pool.query( consulta, values)
    console.log("Compra agregada con exito")
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

//EXTRAE LOS PRODUCTOS FAVORITOS POR USUARIO
const leerProductosFavoritos = async ( usuarioid ) => {

    const value = [usuarioid]
    const consulta = "SELECT * FROM productos INNER JOIN favoritos ON productos.productoid = favoritos.productoid WHERE favoritos.usuarioid = $1"
    const { rows } = await pool.query(consulta, value)
    return rows

}

//EXTRAE COMPRAS POR USUARIO
const leerCompras = async ( usuarioid ) => {

    const value = [usuarioid]
    const consulta = "SELECT * FROM compras WHERE usuarioid = $1"
    const { rows } = await pool.query(consulta, value)
    return rows

}

//EXTRAE DETALLE DE LAS COMPRAS
const leerComprasDetalle = async ( compraid ) => {

    const value = [compraid]
    const consulta = "SELECT * FROM compras WHERE compraid = $1"
    const { rows } = await pool.query(consulta, value)
    return rows

}


//ACTUALIZA INFORMACION DE USUARIO
const modificarUsuario = async (nombre, email, direccion, password, usuarioid) => {

    const consulta = "UPDATE usuarios SET nombre = $1, email = $2, direccion = $3, password = $4 WHERE usuarioid = $5"
    const passwordEncriptada = bcrypt.hashSync(password)
    const values = [nombre, email, direccion, passwordEncriptada, usuarioid]
    const result = await pool.query(consulta, values)
    console.log(result)
 
}

//ELIMINA FAVORITO
const eliminarFavorito = async (id) => {
    const consulta = "DELETE FROM favoritos WHERE favoritoid = $1"
    const values = [id]
    const result = await pool.query(consulta, values)
}

module.exports = { addUser, addProducto, addFavorito, addCompra, validarCredenciales, extraeUsuario, leerProductos, leerProductosFavoritos, leerCompras, leerComprasDetalle, modificarUsuario, eliminarFavorito }