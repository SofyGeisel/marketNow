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
import ContextUser from '../contextUsuario';
import { useContext } from "react";


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
  const {usuario, setUsuario} = useContext(ContextUser)
  const navigate = useNavigate();
  const volver = () => navigate(`/tienda`);
  const precioTotal = parseInt(total);
  const totalFormato = precioTotal.toLocaleString("eng", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const agregarCompra = async () => {

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const carritoJson = JSON.stringify(carrito);

    const compraPrevia = {
      usuarioid: usuario[0].usuarioid,
      fecha_compra: hoy.toLocaleDateString(),
      total: total,
      productos: carritoJson,
    };

    try {
      const response = await fetch("https://marketnow-backend.onrender.com/compras", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(compraPrevia),
      });

      const result = await response;

      if (result.ok) {
        alert("Su compra a sido registrada éxitosamente 😀");
        navigate(`/compras`)
        carrito.length = 0;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Anuncios />
      <NavbarVPrivada />
      <Container 
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          height: "auto",
          flexDirection: "row",
          width: "100%",
          padding: 0,
          gap:7
        }}
      >
        <SideMenu />

        <div className="Container_Perfil">
        <div className="titulo">CARRITO</div>
          <Box
            sx={{
              bgcolor: "#fafafa",
              boxShadow: 1,
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
              p: 1,
              minWidth: 300,
              minHeight: 300,
              width: "90%",
              height: "fit-content",
              marginBottom: "80px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",

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
                  onClick={agregarCompra}
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
