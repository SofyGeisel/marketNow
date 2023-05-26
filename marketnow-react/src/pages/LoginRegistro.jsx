import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import LoginFormDos from '../components/Login_formDos'
import Footer from '../components/Footer'
import { Container } from '@mui/material'

const Login = () => {
    return (
    <div>
      <Anuncios/>
      <Navbar/>
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', margin: 0, padding: 0, gap: 7, justifyContent: 'center'}}>
      <LoginFormDos/>
      </Container>
      <Footer/>
    </div>
    )
}

export default Login;