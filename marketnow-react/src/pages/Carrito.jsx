import React from "react";
import styled from "styled-components";
import Anuncios from "../components/Anuncios";
import NavbarVPrivada from "../components/NavbarVPrivada";
import Footer from "../components/Footer";
import SideMenu from "../components/sidemenu";
import { Container, Box, Typography, Button } from "@mui/material";
import ContextCarrito from "../contextCarrito";
import { useContext } from "react";
import ItemCarro from "../components/item_carro";
import { useNavigate } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomButton = styled(Button)`
  && {
    background-color: #77d0cf;
    color: black;
    border-radius: 20px;
    text-transform: capitalize;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 14px;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const FooterContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const Carrito = () => {

  const { carrito, total } = useContext(ContextCarrito);
  const navigate = useNavigate();
  const volver = () => navigate(`/tienda`)

  const precioTotal = parseInt(total)
    const totalFormato = precioTotal.toLocaleString('eng', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    })


  return (
    <div>
      <Anuncios />
      <NavbarVPrivada />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <SideMenu />
        <div className="Container_Perfil">
          <Box
            sx={{
              bgcolor: "#fafafa",
              boxShadow: 1,
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
              p: 4,
              m: 10,
              minWidth: 350,
              width: "75%",
              marginLeft: "5%",
              marginTop: 8
            }}
          >
            <Typography variant="h5" ml={2} mb={3}  fontSize={30}>
              CARRO DE COMPRAS
            </Typography>
            {carrito.map((item) => {
              return <ItemCarro item={item} key={item.productoid + Math.random()} />;
            })}
            <ButtonContainer>
            <CustomButton
              variant="contained"
              color="primary"
              sx={{ m: 2 }}
              onClick={volver}
            >
              Seguir comprando

            </CustomButton>
            <CustomButton
              variant="contained"
              color="primary"
              sx={{ m: 2 }}
              onClick={volver}
              disabled= { precioTotal == 0 ? true : false }
              
            >
              Finalizar compra
            </CustomButton>
            </ButtonContainer>
            <Typography variant='h6' mb={3} fontWeight={"bold"}>Total: { precioTotal == 0 ? `$ 0` : totalFormato }</Typography>

          </Box>
        </div>
      </Container>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  );
};

export default Carrito;
