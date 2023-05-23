import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import Perfil from '../components/perfil'
import SideMenu from '../components/sidemenu'
import { Container } from '@mui/material'
import ContextCarrito from '../contextCarrito'
import { useContext } from 'react'


const Miperfil = () => {
  return (
    <div className='contPaginas'>
      <Anuncios/>
      <Navbar/>
      
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', margin: 0, padding: 0}}>
        <SideMenu/>
        <Perfil/>
      </Container>
        
      
      
    </div>
  )
}

export default Miperfil
