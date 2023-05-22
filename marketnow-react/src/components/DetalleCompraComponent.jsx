import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { Pagination } from '@mui/material';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
  position: relative;
  align-content: flex-start;
  justify-content: flex-start;
  margin-left: 25rem;
  margin-top: 90px;
`;
const Left = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Titulo = styled.h1`
  font-size: 40px;
  font-weight: normal;
`;
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50rem;
  background-color: white;
  margin-bottom: 20px;
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;
const ImageContainer = styled.div`
  height: 90px;
  width: 90px;
  background-color: black;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;
const MenuItem = styled.h4``;
const MenuContainerLeft = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
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
const Image = styled.img`
  height: 60%;
  z-index: 1;
`;

const MisComprasComponent = () => {
  return (
    <Container>
      <Left>
        <Titulo>DETALLE COMPRA</Titulo>
        <Pagination count={3} variant="outlined" />
      </Left>
      <Card>
        <MenuContainerLeft>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <MenuContainer>
            <MenuItem>Producto </MenuItem>
            <MenuItem>ID: </MenuItem>
            <MenuItem>Valor: </MenuItem>
          </MenuContainer>
        </MenuContainerLeft>
        <ButtonContainer>
          <StyledLink to="/detallecompra">
            <CustomButton variant="contained" size="small" color="primary">
              Ver producto
            </CustomButton>
          </StyledLink>
        </ButtonContainer>
      </Card>
      <Card>
        <MenuContainerLeft>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <MenuContainer>
            <MenuItem>Producto </MenuItem>
            <MenuItem>ID: </MenuItem>
            <MenuItem>Valor: </MenuItem>
          </MenuContainer>
        </MenuContainerLeft>
        <ButtonContainer>
          <StyledLink to="/detallecompra">
            <CustomButton variant="contained" size="small" color="primary">
              Ver producto
            </CustomButton>
          </StyledLink>
        </ButtonContainer>
      </Card>
      <Card>
        <MenuContainerLeft>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <MenuContainer>
            <MenuItem>Producto </MenuItem>
            <MenuItem>ID: </MenuItem>
            <MenuItem>Valor: </MenuItem>
          </MenuContainer>
        </MenuContainerLeft>
        <ButtonContainer>
          <StyledLink to="/detallecompra">
            <CustomButton variant="contained" size="small" color="primary">
              Ver producto
            </CustomButton>
          </StyledLink>
        </ButtonContainer>
      </Card>  
    </Container>
  );
};

export default MisComprasComponent;
