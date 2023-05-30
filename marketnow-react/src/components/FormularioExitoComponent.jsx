import React from 'react'
import styled from 'styled-components';
import { Button, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD

=======
import ContextCarrito from "../contextCarrito";
import { useContext, useEffect, useState } from "react";
import ItemMisCompras from './ItemMisCompras';
>>>>>>> parent of e6729d7 (Revert "Merge branch 'dev-mg' into devSG")

const CustomButton = styled(Button)`
    && {
        background-color: #77D0CF;
        color: black;
        border-radius: 20px;
        text-transform: inherit;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 15px;
        &:hover {
            background-color: black;  
            color: white;
        }
    }
`;

const FormularioExitoComponent = () => {

<<<<<<< HEAD

=======
  const { carrito, total } = useContext(ContextCarrito)
  const [compras, setCompras] = useState([])
>>>>>>> parent of e6729d7 (Revert "Merge branch 'dev-mg' into devSG")
  const navigate = useNavigate()
  const volver = () => navigate(`/tienda`);

  
  return (
    <div className='Container_Perfil'>
        <div className='titulo'>REGISTRO EXITOSO</div>
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
              marginBottom: "80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              
            }}
          >
            <Grid display="flex" flexDirection="column" justifyContent="center">
            <Typography marginBottom={5} variant="h5" >
          Tu perfil ha sido editado con éxito. ¿Seguir vitrineando en <strong>MarketNow</strong>?
        </Typography>
            
            </Grid>
            <CustomButton variant="contained" color="primary" onClick={volver}>Ir a la tienda</CustomButton>
            </Box>
            
    </div>
  )
}

export default FormularioExitoComponent
