import React from 'react'
import styled from 'styled-components'
import Anuncios from '../components/Anuncios'
import NavbarVPrivada from '../components/NavbarVPrivada'
import Footer from '../components/Footer'
import SideMenu from '../components/sidemenu'
import ProductosFavoritos from '../components/ProductosFavoritos'
import { Container } from '@mui/material'


const FooterContainer = styled.div`
  position: relative; 
  z-index: 2; 
`;


const Misfavoritos = () => {
  return (
    <div>
      <Anuncios/>
      <NavbarVPrivada/>
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', margin: 0, padding: 0, gap: 7}}>
        <SideMenu/>
        <ProductosFavoritos/>
      </Container>
      <FooterContainer>
        <Footer/> 
      </FooterContainer>
      
    </div>
  )
}

export default Misfavoritos