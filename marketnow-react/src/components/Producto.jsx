import styled from 'styled-components'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



const Container = styled.div`
  flex:1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  background-color:white;
  `;

const Circle = styled.div``;
const Image = styled.img`
height:60%;
`;
const Info = styled.div``;
const Icon = styled.div``;

const Producto = ({item}) => {
  return (
      <Container>
        <Circle/>
        <Image src={item.imagen}/>
        <Info>
          <Icon>
          <ShoppingCartOutlinedIcon color="white" />
          </Icon>
          <Icon>
          <SearchIcon/>
          </Icon>
          <Icon>
          <FavoriteBorderOutlinedIcon color="white"/>
          </Icon>
        </Info>
      </Container> 
  )
}

export default Producto


