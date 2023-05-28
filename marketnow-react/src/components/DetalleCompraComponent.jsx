import React from 'react'
import { Button, Box } from '@mui/material';
import { useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetalleCompra from './ItemDetalleCompra';


const DetalleCompraComponent = () => {

  const { id } = useParams()
  const [ productosCompra, setProductosCompra ] = useState([]);
  const navigate = useNavigate();
  const volver = () => navigate(`/tienda`);

/*  const precioTotal = parseInt(total);
  const totalFormato = precioTotal.toLocaleString("eng", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });*/

const traerProductosCompras = async () => {
  const response = await fetch(`http://localhost:3000/comprasdetalle/8`, {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resultado = await response.json();
  setProductosCompra(resultado.productos); //
  console.log(resultado.productos)
};

useEffect(() => {
  traerProductosCompras();
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
        
        {productosCompra.map((item) => {
              return (
                <ItemDetalleCompra item={item} key={item.productoid} />
              );
            })}
            </Box>
    </div>
  )
}

export default DetalleCompraComponent