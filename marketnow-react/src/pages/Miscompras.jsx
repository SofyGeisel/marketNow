import React from 'react'
import styled from 'styled-components'
import Anuncios from '../components/Anuncios'
import NavbarVPrivada from '../components/NavbarVPrivada'
import Footer from '../components/Footer'
import SideMenu from '../components/sidemenu'
import ContextUser from '../contextUsuario'
import { useContext } from 'react'
import MisComprasComponent from '../components/MisComprasComponent'
import { Container } from '@mui/material'

const FooterContainer = styled.div`
  position: relative; 
  z-index: 2; 
`;

const MisCompras = () => {



  return (
    <div>
      <Anuncios/>
      <NavbarVPrivada/>
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', height: "auto", margin: 0, padding: 0, gap: 7}}>
      <SideMenu/>
      <MisComprasComponent/> 
      </Container>
      <FooterContainer>
      <Footer/> 
      </FooterContainer>
      
    </div>
  )
}

export default MisCompras