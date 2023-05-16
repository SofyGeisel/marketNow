import React from 'react'
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from "react-router-dom"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  flex-wrap: wrap;
  justify-content: left;
  width:100%;
  position: relative;
  align-content: flex-start;
  justify-content: flex-start;
  margin-left: 25rem;
  margin-top: 90px;
  
`;

const Left = styled.div`
  margin-bottom: 30px;
`;

const Titulo = styled.h1`
    font-size: 40px;
    font-weight: normal;
  `;

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50rem;
    background-color: white;
    margin-bottom: 20px;
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 25px;
    padding-bottom: 25px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
`;

const MenuItem = styled.h4`

    `;
const MenuContainerLeft = styled.div``;
const MenuContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;  
`;
const ButtonContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const CustomButton = styled(Button)`
    && {
        background-color: #77D0CF;
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
  height:60%;
  z-index: 1;
`;


const MisComprasComponent = ({item}) => {
  return (
    <Container>
        <Left>
        <Titulo>DETALLE COMPRA</Titulo>
        </Left>
      <Card>
        <MenuContainerLeft>
        <Image/>
        </MenuContainerLeft>
        <MenuContainer>
        <MenuItem>Producto </MenuItem>
        <MenuItem>ID: </MenuItem>
        <MenuItem>Valor: </MenuItem>
        </MenuContainer>
        <ButtonContainer>
        <StyledLink to="/detallecompra">
        <CustomButton variant="contained" size="small" color="primary">Ver producto</CustomButton>
        </StyledLink>
        </ButtonContainer>
      </Card>
      <Card>
        <MenuContainer>
        <MenuItem>ID de compra: </MenuItem>
        <MenuItem>Fecha de compra: </MenuItem>
        <MenuItem>Total: </MenuItem>
        </MenuContainer>
        <ButtonContainer>
            <StyledLink to="/detallecompra">
        <CustomButton variant="contained" size="small" color="primary">Ver detalle</CustomButton>
            </StyledLink>
        </ButtonContainer>
      </Card>
      <Card>
        <MenuContainer>
        <MenuItem>ID de compra: </MenuItem>
        <MenuItem>Fecha de compra: </MenuItem>
        <MenuItem>Total: </MenuItem>
        </MenuContainer>
        <ButtonContainer>
        <StyledLink to="/detallecompra">
        <CustomButton variant="contained" size="small" color="primary">Ver detalle</CustomButton>
        </StyledLink>
        </ButtonContainer>
      </Card>
    </Container>
  )
}

export default MisComprasComponent