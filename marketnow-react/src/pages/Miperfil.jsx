import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import Perfil from '../components/perfil'
import SideMenu from '../components/sidemenu'
import Grid from '@mui/material/Grid';

import { Container } from '@mui/material'

const Miperfil = () => {
  return (
    <div className='contPaginas'>
      <Navbar/>
      <Anuncios/>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SideMenu/>
        </Grid>

        <Grid xs={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Perfil/>
        </Grid>
        
        
      </Grid>
      
      
    </div>
  )
}

export default Miperfil
