import React from 'react'
import styled from 'styled-components'
import Anuncios from '../components/Anuncios'
import NavbarVPrivada from '../components/NavbarVPrivada'
import Footer from '../components/Footer'
import SideMenu from '../components/sidemenu'
import { Container, Box, Typography, Button } from '@mui/material'
import ContextCarrito from '../contextCarrito'
import { useContext } from 'react'
import ItemCarro from '../components/item_carro'
import { useNavigate } from "react-router-dom";


const FooterContainer = styled.div`
  position: relative; 
  z-index: 2; 
`;


const Carrito = () => {

  const { carrito, total } = useContext(ContextCarrito);
  const navigate = useNavigate();
  const volver = () => navigate(`/tienda`)

  
  

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
              marginLeft: "5%",
              marginTop: 8
            }}>
              <Typography variant='h5' mb={3} fontWeight={"bold"}>Carro de compras</Typography>
              {carrito.map((item) => {
                return(
                    <ItemCarro item={item} key={item.productoid + Math.random()}/>
                )
            })}
            <Button variant="contained" color="primary" sx={{ m: 2 }} onClick={volver}>
              Seguir comprando
            </Button>
            <Typography variant='h6' mb={3} fontWeight={"bold"}>Total: $ { total }</Typography>
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
