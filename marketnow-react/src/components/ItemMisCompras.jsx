import React from "react";
import { Box, Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ContextProductos from "../contextProductos";

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

    const navigate = useNavigate();
    const { prodIdCompras, setprodIdCompras } = useContext(ContextProductos)
    const precioTotal = parseInt(item.total)
    const precioFormato = precioTotal.toLocaleString('eng', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    })

    const id = item.compraid
    const verdetalle = () => {
      setprodIdCompras(id)
      navigate(`/detallecompra/${id}`)

    }
    

    return(
        <div>
            <Box sx={{ boxShadow: 1, bgcolor: "white", p: 2, m: 2, borderRadius: 2,display: "flex", flexDirection: "row", alignContent: "space-around"  }}>
                
                <div className="detalleCarrito">
                    <p><span>Fecha de compra: </span>{item.fecha_compra}</p>
                    <p><span>ID de compra: </span>{item.compraid}</p>
                    <p><span>Total: </span>{precioFormato}</p>
                </div>
                <CustomButton variant="contained" sx={{alignSelf:"center"}} onClick={verdetalle}>Ver detalle</CustomButton>
            </Box>
        </div>
    )
}

export default ItemMisCompras;