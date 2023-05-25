import React from "react";
import styled from "styled-components";
import Anuncios from "../components/Anuncios";
import NavbarVPrivada from "../components/NavbarVPrivada";
import Footer from "../components/Footer";
import SideMenu from "../components/sidemenu";
import { Container, Box, Typography, Button } from "@mui/material";

import ItemCarro from "../components/item_carro";
import { useNavigate } from "react-router-dom";

import ContextCarrito from "../contextCarrito";
import { useContext } from "react";

/* const Left = styled.div`
  
  margin-bottom: 32px;
`; */
/* const Titulo = styled.h1`
  font-size: 40px;
  font-weight: normal;
  margin-bottom: 20px;
  align-self: flex-start;
`; */
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;
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
  const volver = () => navigate(`/tienda`);

  const precioTotal = parseInt(total);
  const totalFormato = precioTotal.toLocaleString("eng", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <div>
      <Anuncios />
      <NavbarVPrivada />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          height: "120vh",
          flexDirection: "row",
          width: "100%",
          /* marginTop: "40px", */
          padding: 0,
          gap:5
        }}
      >
        <SideMenu />

        <div className="Container_Carrito">
        <div className="titulo">CARRITO</div>
          <Box
            sx={{
              bgcolor: "#fafafa",
              boxShadow: 1,
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
              p: 1,
              minWidth: 300,
              width: "90%",
              height: "fit-content",
            }}
            


          >
            {carrito.map((item) => {
              return (
                <ItemCarro item={item} key={item.productoid + Math.random()} />
              );
            })}

            <BottomContainer>
              <Typography variant="h6" fontWeight={"bold"}>
                {console.log(total)}
                Total: { precioTotal === 0 ? "$ 0" : totalFormato }
              </Typography>
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
                  disabled={precioTotal === 0 ? true : false}
                >
                  Finalizar compra
                </CustomButton>
              </ButtonContainer>
            
            </BottomContainer>
            
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
