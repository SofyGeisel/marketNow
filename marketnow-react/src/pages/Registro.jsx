import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import RegistroForm from '../components/RegistroForm'
import Footer from '../components/Footer'

const Registro = () => {
  return (
    <div>
      <Anuncios/>
      <Navbar/>
      <RegistroForm/>
      <Footer/>
    </div>
  )
}

export default Registro
