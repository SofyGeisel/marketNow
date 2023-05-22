import React from 'react'
import styled from 'styled-components'
import NavbarVPrivada from '../components/NavbarVPrivada'
import Anuncios from '../components/Anuncios'
import Perfil from '../components/perfil'
import SideMenu from '../components/sidemenu'
import Footer from '../components/Footer'
import { Container } from '@mui/material'



const FooterContainer = styled.div`
  position: relative; 
  z-index: 2; 
`;

const Miperfil = () => {
  return (
    <div className='contPaginas'>
      <Anuncios/>
      <NavbarVPrivada/>
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', margin: 0, padding: 0}}>
        <SideMenu/>
        <Perfil/>
      </Container>
      <FooterContainer>
      <Footer/> 
      </FooterContainer>
        
      
      
    </div>
  )
}

export default Miperfil
