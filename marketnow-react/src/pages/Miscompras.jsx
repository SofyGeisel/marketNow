import React from 'react'
import styled from 'styled-components'
import Anuncios from '../components/Anuncios'
import Navbar from '../components/navbar'
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

const FooterContainer = styled.div`
  position: relative; 
  z-index: 2; 
`;


const MisCompras = () => {
  return (
    <div>
      <Anuncios/>
      <Navbar/>
      <Container>
      <SideMenu/> 
      </Container>
      <FooterContainer>
      <Footer/> 
      </FooterContainer>
      
    </div>
  )
}

export default MisCompras