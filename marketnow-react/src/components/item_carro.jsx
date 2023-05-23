import React from "react";
import { Box, Button } from "@mui/material";
import ContextCarrito from '../contextCarrito'
import { useContext } from 'react'



const ItemCarro = ({ item }) => {

    const { carrito, setCarrito, total, setTotal } = useContext(ContextCarrito);

    const precioProducto = parseInt(item.precio)
    const precioFormato = precioProducto.toLocaleString('eng', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    })

    

    return(
        <>
            <Box sx={{ boxShadow: 1, bgcolor: "white", p: 2, m: 1, borderRadius: 2,display: "flex", flexDirection: "row", alignContent: "space-around"  }}>
                <div className="fotoCarrito">
                    <img src={item.imagen} alt="" />
                </div>
                <div className="detalleCarrito">
                    <p><span>{item.nombre}</span> </p>
                    <p><span>Id: </span>{item.productoid}</p>
                    <p><span>Valor: </span>{precioFormato}</p>
                </div>
                <Button variant="contained" sx={{alignSelf:"center"}} onClick={() => {
                    const indice = carrito.findIndex((e) => item === e)
                    carrito.splice(indice, 1)
                    setCarrito([...carrito])
                    setTotal(parseInt(total - item.precio))
                    console.log(indice)}}>Eliminar</Button>
            </Box>
        </>
    )
}

export default ItemCarro;