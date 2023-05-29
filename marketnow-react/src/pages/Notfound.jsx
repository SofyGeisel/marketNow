import React from 'react'
import styled from 'styled-components'
import Anuncios from '../components/Anuncios'
import NavbarVPrivada from '../components/NavbarVPrivada'
import Footer from '../components/Footer'
import SideMenu from '../components/sidemenu'

const Container = styled.div`
  
  display: flex;
  height: 80vh;
  flex-wrap: wrap;
  justify-content: left;
  width:100%;
  position: relative;
`;
const ContainerTexto = styled.div`
  
  display: flex;
  height: 80vh;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 4rem ;
  margin-top: 30px;
  align-content: center;
  font-size: 40px;

`;

const FooterContainer = styled.div`
  position: relative; 
  z-index: 2; 
`;


const Notfound = () => {
  return (
    <div>
      <Anuncios/>
      <NavbarVPrivada/>
      <Container>
      <SideMenu/> 
      <ContainerTexto>
        La ruta que intentas consultar no existe</ContainerTexto>
      </Container>
      <FooterContainer>
      <Footer/> 
      </FooterContainer>
      
    </div>
  )
}

export default Notfound
