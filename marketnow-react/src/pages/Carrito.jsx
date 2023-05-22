import React from 'react'
import styled from 'styled-components'
import Anuncios from '../components/Anuncios'
import NavbarVPrivada from '../components/NavbarVPrivada'
import Footer from '../components/Footer'
import SideMenu from '../components/sidemenu'
import { Container, Box, Typography } from '@mui/material'
import ItemCarro from '../components/item_carro'


const FooterContainer = styled.div`
  position: relative; 
  z-index: 2; 
`;


const Carrito = () => {
  return (
    <div>
      <Anuncios/>
      <NavbarVPrivada/>
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', margin: 0, padding: 0}}>
        <SideMenu/>
        <div className="Container_Perfil">
          <Box
            sx={{
              bgcolor: "#fafafa",
              boxShadow: 1,
              borderRadius: 2,
              p: 4,
              m: 10,
              minWidth: 350,
              width: "75%",
            }}>
              <Typography variant='h5' mb={3} fontWeight={"bold"}>Carro de compras</Typography>
              <ItemCarro/>
          </Box>
        </div>
        
      </Container>
      
      <FooterContainer>
      <Footer/> 
      </FooterContainer>
      
    </div>
  )
}

export default Carrito
