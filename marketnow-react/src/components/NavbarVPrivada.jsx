import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import { useNavigate, Link } from "react-router-dom"

import ContextCarrito from "../contextCarrito";
import { useContext } from "react";

const Container = styled.div`
  height: 60px;
   
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
/* const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
`; */
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
/* const SearchContainer = styled.div`
  border: 0.5px solid #fff7f7;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 4px;
`; */
const Input = styled.input`
  border: none;
  font-size: 16px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
/* const Logo = styled(Link)`
  font-weight: bold;
  font-size: 35px;
  text-decoration: none;
  color:black;

`; */
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.h3`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color:black;
  font-weight: 400;
`;



const NavbarVPrivada = () => {

  const navigate = useNavigate();
  const { carrito } = useContext(ContextCarrito)

  const verCarrito = () => {
    navigate('/carrito')
  }

  const cerrarSesion = async () => {
    navigate("/login");
    localStorage.removeItem('token');
    carrito.length = 0;
  }

  const irTienda = async () => {
    navigate("/tienda");

  }

  return (
    <Container>
      <Wrapper>
        <div className="navLeft">
          {<Language>ES</Language>}
          <div className="searchBar">
            <Input />
            <SearchIcon style={{color: "gray", fontSize:16}} />
          </div>
        </div>
        <Center>
          <div to="/" className="logo">
            <DirectionsRunOutlinedIcon style={{color: "black", fontSize:30, transform:'rotate(15deg)'}} />
            MarketNow
            </div>
        </Center>
        <Right>
          <MenuItem onClick={irTienda}>TIENDA</MenuItem>
          <MenuItem onClick={cerrarSesion}>CERRAR SESIÓN</MenuItem>
          <MenuItem to="/carrito" onClick={verCarrito}>
            <Badge badgeContent={carrito.length}  color="primary">
              <ShoppingCartOutlinedIcon onClick={verCarrito} color="black" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavbarVPrivada;
