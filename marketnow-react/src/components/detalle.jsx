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
import styled from "styled-components";
import "../css/estilos.css";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const CustomButton = styled(Button)`
  && {
    background-color: #77d0cf;
    color: black;
    border-radius: 20px;
    text-transform: capitalize;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 14px;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const Detalle = () => {
  const { productos, prodId } = useContext(ContextProductos);
  const producto = productos.filter((prod) => prod.productoid === prodId);
  const navigate = useNavigate();
  const volver = () => navigate(`/tienda`);

  return (
    <div className="Container_Perfil">
      <div className='titulo'>DETALLE DE PRODUCTO</div>
      {producto.map((prod) => (
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 230,
            minHeight: 300,
            width: "90%",
          }}
        >
          <Grid item>
            <Typography marginBottom={2} variant="h4">
              {prod.nombre}
            </Typography>
          </Grid>
          <Grid
            key={prod.productoid}
            container
            spacing={1}
            sx={{ width: "100%", display: "flex", alignItems: "flex-end" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              m={4}
              sx={{
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: "black",
                minHeight: 180,
                marginBottom: 0,
                minWidth: 160,
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                src={prod.imagen}
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 0,
                  overflow: "clip",
                  minWidth: 100,
                  maxWidth: 200,
                  zIndex: 1,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} m={0}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  color: "black",
                }}
              >
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ fontWeight: "bolder", fontSize: "20px" }}
                      >
                        Descripción del producto
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{ color: "black" }}>
                        {prod.descripcion}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ fontWeight: "bolder", fontSize: "20px" }}
                      >
                        Precio
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{ color: "black" }}>
                        {"$" + prod.precio}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <ButtonContainer>
              <CustomButton
                variant="contained"
                color="primary"
                position="absolute"
                sx={{ m: 0 }}
                onClick={volver}
              >
                Volver
              </CustomButton>
            </ButtonContainer>
          </Grid>
        </Box>
      ))}
    </div>
  );
};

export default Detalle;
