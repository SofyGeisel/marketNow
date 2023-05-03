import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid #fff7f7;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 4px;
`;

const Input = styled.input`
  border: none;
  font-size: 16px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ES</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color: "gray", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <DirectionsRunOutlinedIcon style={{color: "black", fontSize:36, transform:'rotate(15deg)'}} />
            MarketNow
            </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTRARSE</MenuItem>
          <MenuItem>INICIAR SESION</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="black" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default navbar;
