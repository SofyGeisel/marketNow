import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import LoginForm from '../components/Login_form'
import Footer from '../components/Footer'

const Login = () => {
    return (
    <div>
      <Anuncios/>
      <Navbar/>
      <LoginForm/>
      <Footer/>
    </div>
    )
}

export default Login;