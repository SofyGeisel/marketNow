import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import RegistroForm from '../components/RegistroForm'
import Footer from '../components/Footer'
import { Container } from '@mui/material'

const Registro = () => {
  return (
    <div>
      <Anuncios/>
      <Navbar/>
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', margin: 0, padding: 0, gap: 7, justifyContent: 'center'}}>
      <RegistroForm/>
      </Container>
      <Footer/>
    </div>
  )
}

export default Registro
