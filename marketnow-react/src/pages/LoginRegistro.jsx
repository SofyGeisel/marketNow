import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import LoginFormDos from '../components/Login_formDos'
import Footer from '../components/Footer'

const Login = () => {
    return (
    <div>
      <Anuncios/>
      <Navbar/>
      <LoginFormDos/>
      <Footer/>
    </div>
    )
}

export default Login;