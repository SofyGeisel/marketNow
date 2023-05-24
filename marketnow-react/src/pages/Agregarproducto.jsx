import React from "react";
import styled from "styled-components";
import Anuncios from "../components/Anuncios";
import NavbarVPrivada from "../components/NavbarVPrivada";
import Footer from "../components/Footer";
import SideMenu from "../components/sidemenu";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Container = styled.div`
  display: flex;
  height: 72vh;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  margin-top: 88px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: center;
`;
const Left = styled.div`
  margin-bottom: 32px;
  margin-left: 130px;
  display: flex;
`;
const Titulo = styled.h1`
  font-size: 40px;
  font-weight: normal;
`;
const ContainerAddProducto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 70%;
  background-color: white;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  margin-left: 130px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const ContainerTop = styled.div`
  display: flex;
  align-items: stretch;
`;
const ContainerImage = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  background-color: black;
  z-index: 1;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;
const PreClick = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 20px;
`;
const ContainerTextField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 400px;
`;
const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
const CustomButton = styled(Button)`
  && {
    background-color: #77d0cf;
    color: black;
    border-radius: 20px;
    text-transform: capitalize;
    padding-left: 20px;
    padding-right: 20px;
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
const Agregarproducto = () => {
  return (
    <div>
      <Anuncios />
      <NavbarVPrivada />
      <Container>
        <SideMenu />
        <Left>
          <Titulo>AGREGA TUS PRODUCTOS</Titulo>
        </Left>
        <ContainerAddProducto>
          <ContainerTop>
            <ContainerImage>
              <PreClick>
                Añadir imagen
                <AddIcon/>
              </PreClick>
            </ContainerImage>
            <ContainerTextField>
              <CustomTextField
                autoComplete="given-name"
                name="Nombre del producto"
                required
                fullWidth
                id="nombreproducto"
                label="Nombre del producto"
                autoFocus
                size="small"
                sx={{ marginBottom: 2 }}
              />
              <CustomTextField
                name="Precio"
                required
                fullWidth
                id="precio"
                label="Precio"
                autoFocus
                size="small"
                sx={{ marginBottom: 2 }}
              />
              <CustomTextField
                name="Descripción del producto"
                required
                fullWidth
                multiline
                maxRows={3}
                id="descripcionproducto"
                label="Descripción del producto"
                autoFocus
                size="small"
                sx={{ marginBottom: 3 }}
              />
              <ButtonContainer>
                <CustomButton variant="contained" size="small" color="primary">
                  Agregar producto
                </CustomButton>
              </ButtonContainer>
            </ContainerTextField>
          </ContainerTop>
        </ContainerAddProducto>
      </Container>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  );
};

export default Agregarproducto;
