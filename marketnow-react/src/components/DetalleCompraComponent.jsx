import React from 'react'
import { Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ContextCarrito from "../contextCarrito";
import { useContext } from "react";
import ItemDetalleCompra from './ItemDetalleCompra';


const DetalleCompraComponent = () => {

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
        <div className='titulo'>DETALLE DE COMPRA</div>
      <Box
            sx={{
              bgcolor: "#fafafa",
              boxShadow: 1,
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
              p: 1,
              minWidth: 300,
              width: "90%",
              minHeight: 300 ,
              height: "fit-content",
              marginBottom: "80px"
            }}
          >
        
        {carrito.map((item) => {
              return (
                <ItemDetalleCompra item={item} key={item.productoid + Math.random()} />
              );
            })}
            </Box>
    </div>
  )
}

export default DetalleCompraComponent