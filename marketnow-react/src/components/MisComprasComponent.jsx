import React from 'react'
import styled from 'styled-components';
import { Button, Box } from '@mui/material';
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import ContextCarrito from "../contextCarrito";
import ContextUser from '../contextUsuario';
import { useContext, useEffect, useState } from "react";
import ItemMisCompras from './ItemMisCompras';


const MisComprasComponent = () => {

  const { carrito, total } = useContext(ContextCarrito)
  const {usuario, setUsuario} = useContext(ContextUser)
  const [compras, setCompras] = useState([])
  const navigate = useNavigate()
  const volver = () => navigate(`/tienda`);

  const precioTotal = parseInt(total);
  const totalFormato = precioTotal.toLocaleString("eng", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const datos = usuario[0].usuarioid

  const traerCompras = async () => {
    const response = await fetch(`https://marketnow-backend2.onrender.com/compras/${datos}`, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultado = await response.json();
    setCompras(resultado); //
  };

  useEffect(() => {
    traerCompras();
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
        
        {compras.map((item) => {
              return (
                <ItemMisCompras item={item} key={item.compraid} />
              );
            })}
            </Box>
    </div>
  )
}

export default MisComprasComponent

