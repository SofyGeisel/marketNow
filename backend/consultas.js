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

//ELIMINA FAVORITO
const eliminarFavorito = async (id) => {
    const consulta = "DELETE FROM favoritos WHERE favoritoid = $1"
    const values = [id]
    const result = await pool.query(consulta, values)
}

module.exports = { addUser, addProducto, addFavorito, addCompra, validarCredenciales, extraeUsuario, leerProductos, leerProductosFavoritos, leerCompras, leerComprasDetalle, modificarUsuario, eliminarFavorito }