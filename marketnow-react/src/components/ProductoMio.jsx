import styled from 'styled-components'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from "@mui/icons-material/Search";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useNavigate } from "react-router-dom"
import { useContext } from 'react';
import ContextCarrito from '../contextCarrito';
import ContextProductos from '../contextProductos';
import ContextUser from '../contextUsuario';

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  border-top-right-radius: 20%;
  border-bottom-left-radius: 20%;
  opacity:0;
  transition: all 0.5s ease;
  cursor: pointer;
  `;
const Container = styled.div`
  flex:1;
  
  margin-bottom: 60px;
  min-width: 15rem;
  max-width: 180px;
  height: 340px;
  background-color:white;
  display:flex;
  align-items: flex-start;
  padding-top:20px;
  justify-content: center;
  position: relative;
  border-top-right-radius: 20%;
  border-bottom-left-radius: 20%;
  &:hover ${Info}{
    opacity: 1;
  }

  `;
const FondoImagen = styled.div`
  width: 200px;
  height: 200px ;
  background-color: black;
  position: absolute;
  border-top-right-radius: 30%;
  display:flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height:60%;
  z-index: 1;
`;
const TituloyDescripcion = styled.div`
  position: absolute;
  top: 65%;
  bottom: 10%;
  width: 180px;
  height: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const Titulo = styled.h3`
  font-size: 16px;
  margin-top: 2px;
  margin-bottom: 5px;
  text-align: left;
`;
const Descripcion = styled.h4`
  font-size: 12px;
  font-weight: initial;
  text-align: center;
`;
const Precio = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
} 
`;
const PrecioContainer = styled.div`
  display:flex;
  height: 100px;
  align-items: flex-end;
  `;
const Icon = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }


  `;
const ProductoMio = ({ item }) => {

const navigate = useNavigate();
const { prodId, setProdId } = useContext(ContextProductos)

const verProducto = `/detalleproductomio/${prodId}`


  const quitarProducto = async (productoid) => {
    
    const response = await fetch(`https://marketnow-backend2.onrender.com/producto/${productoid}`, {
    method: "DELETE", // or 'PUT'
    headers: {
        "Content-Type": "application/json",
    },
    });

      const result = await response;
      navigate('/misproductos')
  };
  const precioTotal = parseInt(item.precio);
  const totalFormato = precioTotal.toLocaleString("eng", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  
  return (
      <Container>
        <FondoImagen>
        <Image src={item.imagen}/>
        </FondoImagen>
        <TituloyDescripcion>
        <Titulo>{item.nombre}</Titulo> 
          <Descripcion>{item.descripcion}</Descripcion> 
          <PrecioContainer>
          <Precio>{totalFormato}</Precio>
          </PrecioContainer>
        </TituloyDescripcion>
        <Info>
          <Icon onMouseEnter={() => {
            setProdId(item.productoid)
            console.log(item.productoid)}} 
            to={verProducto}>
          <SearchIcon/>
          </Icon>
          <Icon onClick={() => {
            quitarProducto(item.productoid)
            }}>
          <DeleteForeverIcon color="white"/>
          </Icon>
        </Info>
      </Container> 
  )
}

export default ProductoMio


