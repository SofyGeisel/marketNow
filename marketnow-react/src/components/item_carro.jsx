import React from "react";
import { Box, Button } from "@mui/material";
import ContextCarrito from '../contextCarrito'
import { useContext } from 'react'



const ItemCarro = ({ item }) => {

    const { carrito, setCarrito } = useContext(ContextCarrito);

    return(
        <>
            <Box key={item.id + Math.random()}  sx={{ boxShadow: 1, bgcolor: "white", p: 2, m: 1, borderRadius: 2,display: "flex", flexDirection: "row", alignContent: "space-around"  }}>
                <div className="fotoCarrito">
                    <img src={item.imagen} alt="" />
                </div>
                <div className="detalleCarrito">
                    <p><span>{item.nombre}</span> </p>
                    <p><span>Id:</span>{item.productoid}</p>
                    <p><span>Valor:</span>${item.precio}</p>
                </div>
                <Button variant="contained" sx={{alignSelf:"center"}}>Eliminar</Button>
            </Box>
        </>
    )
}

export default ItemCarro;