import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import Productos from '../components/Productos'
import TiendaContainer from '../components/TiendaContainer'
import SideMenu from '../components/sidemenu'

import { Container } from '@mui/material'

const Tienda = () => {
  return (
    <div>
      <Anuncios/>
      <Navbar/> 
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', margin: 0, padding: 0}}>
        <SideMenu/>
      </Container>
        <TiendaContainer/>
        <Productos/>

    </div>
  )
}

export default Tienda
