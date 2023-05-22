import React from "react";
import { useEffect, useContext } from "react";
import ContextProductos from "../contextProductos";
import {
  Box,
  Grid,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  List,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../css/estilos.css";

const Detalle = () => {

  const { productos, prodId } = useContext(ContextProductos)
  const producto = productos.filter((prod) => prod.productoid === prodId)
  const navigate = useNavigate();
  const volver = () => navigate(`/tienda`)

  return (
    
    <div className="Container_Perfil">
      {producto.map((prod) =>(
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 4,
          m: 10,
          minWidth: 350,
          width: "75%",
        }}
      >
        <Typography marginBottom={2} variant="h5">
        {prod.nombre}
        </Typography>
        

        <Grid key={prod.productoid} container spacing={3}>
          <Grid item xs={3} m={3}>
            <Avatar src={prod.imagen} sx={{ width: '100%', height: '100%', borderRadius: 0, overflow: "clip", minWidth: 200, maxWidth: 240 }} />
          </Grid>
          <Grid item xs={7} m={4}>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              
              <Divider variant="inset" component="li" />
              <ListItem>
                
                <ListItemText
                  primary="Descripción del producto"
                  secondary={prod.descripcion}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                
                <ListItemText primary="Precio" secondary=  {'$' + prod.precio} />
              </ListItem>
            </List>
          </Grid>    
          <Grid
            className="btnEditarPerfil"
            item
            direction={"row"}
            justifyContent="flex-end"
            alignItems="flex-end"
            xs={12}
          >
            <Button variant="contained" color="primary" sx={{ m: 2 }} onClick={volver}>
              Volver
            </Button>
          </Grid>
        </Grid>
        
      </Box>
      ))}
    </div>
    
  );
};

export default Detalle;