import React from 'react'
import styled from 'styled-components';
import { Button, Box } from '@mui/material';
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import ContextCarrito from "../contextCarrito";
import { useContext } from "react";
import ItemMisCompras from './ItemMisCompras';


const MisComprasComponent = () => {

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
    <div className='Container_Perfil'>
        <div className='titulo'>MIS COMPRAS</div>
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
              marginBottom: "80px"
            }}
          >
        
        {carrito.map((item) => {
              return (
                <ItemMisCompras item={item} key={item.productoid + Math.random()} />
              );
            })}
            </Box>
    </div>
  )
}

export default MisComprasComponent

