const { Pool } = require('pg')
const bcrypt = require('bcryptjs')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'marketnow',
    allowExitOnIdle: true
})

const addUser = async (nombre, mail, direccion, password) => {

    const consulta = "INSERT INTO usuarios (nombre, mail, direccion, password) VALUES ($1, $2, $3, $4)"
    const passwordEncriptada = bcrypt.hashSync(password)
    const values = [nombre, mail, direccion, passwordEncriptada]
    const result = await pool.query( consulta, values)
    console.log("usuario registrado con exito")
}

const validarCredenciales = async ( mail, password ) => {
    
    const values = [mail]
    const consulta = "SELECT * FROM usuarios WHERE mail = $1"
    const { rows: [usuario], rowCount } = await pool.query(consulta, values)
    const { password: passwordEncriptada } = usuario
    const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)
    if (!passwordEsCorrecta || !rowCount)
    throw { code: 401, message: "Email o contraseña incorrecta" }
}

const extraeUsuario = async ( mail ) => {

    const value = [mail]
    const consulta = "SELECT usuarioid, nombre, mail, direccion, password FROM usuarios WHERE mail = $1"
    const { rows: usuario } = await pool.query(consulta, value)
    return usuario

}

module.exports = { addUser, validarCredenciales, extraeUsuario}