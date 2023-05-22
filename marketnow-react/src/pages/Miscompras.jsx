import React from 'react'
import styled from 'styled-components'
import Anuncios from '../components/Anuncios'
import NavbarVPrivada from '../components/NavbarVPrivada'
import Footer from '../components/Footer'
import SideMenu from '../components/sidemenu'
import ContextUser from '../contextUsuario'
import { useContext } from 'react'
import MisComprasComponent from '../components/MisComprasComponent'

const Container = styled.div`
  
  display: flex;
  height: 80vh;
  flex-wrap: wrap;
  justify-content: left;
  width:100%;
  position: relative;
`;
const FooterContainer = styled.div`
  position: relative; 
  z-index: 2; 
`;

const MisCompras = () => {



  return (
    <div>
      <Anuncios/>
      <NavbarVPrivada/>
      <Container>
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