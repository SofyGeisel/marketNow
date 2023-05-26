import React from "react";
import { Box, Button } from "@mui/material";
import ContextCarrito from '../contextCarrito'
import { useContext } from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CustomButton = styled(Button)`
  && {
    background-color: #77d0cf;
    color: black;
    border-radius: 20px;
    text-transform: capitalize;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 14px;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const ItemMisCompras = ({ item }) => {

    const { carrito, setCarrito, total, setTotal } = useContext(ContextCarrito);

    const precioProducto = parseInt(item.precio)
    const precioFormato = precioProducto.toLocaleString('eng', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    })
    const navigate = useNavigate();
    const verDetalle = () => navigate(`/detallecompra`);
    

    return(
        <>
            <Box sx={{ boxShadow: 1, bgcolor: "white", p: 2, m: 2, borderRadius: 2,display: "flex", flexDirection: "row", alignContent: "space-around"  }}>
                
                <div className="detalleCarrito">
                    <p><span>Fecha de compra: </span> </p>
                    <p><span>ID de compra: </span>{item.productoid}</p>
                    <p><span>Total: </span>{precioFormato}</p>
                </div>
                <CustomButton variant="contained" sx={{alignSelf:"center"}} onClick={verDetalle}>Ver detalle</CustomButton>
            </Box>
        </>
    )
}

export default ItemMisCompras;