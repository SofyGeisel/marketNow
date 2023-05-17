import React from "react";
import { Box, Button } from "@mui/material";
const ItemCarro = () => {
    return(
        <>
            <Box  sx={{ boxShadow: 1, bgcolor: "white", p: 2, m: 1, borderRadius: 2,display: "flex", flexDirection: "row", alignContent: "space-around"  }}>
                <div className="fotoCarrito">
                    <img src="./img/LaptopDell1.png" alt="" />
                </div>
                <div className="detalleCarrito">
                    <p><span>Nombre Producto</span> </p>
                    <p><span>Id:</span> $ 1000</p>
                    <p><span>Valor:</span> $0</p>
                </div>
                <Button variant="contained" alignSelf="flex-end" sx={{alignSelf:"center"}}>Eliminar</Button>
            </Box>
        </>
    )
}

export default ItemCarro;