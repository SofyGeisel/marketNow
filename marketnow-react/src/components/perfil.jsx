import React from "react";
import ContextUser from "../contextUsuario";
import { useEffect, useContext } from "react";
import styled from "styled-components";
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
import BadgeIcon from "@mui/icons-material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";

const CustomButton = styled(Button)`
  && {
    background-color: #77d0cf;
    color: black;
    border-radius: 20px;
    text-transform: capitalize;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 14px;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const Perfil = () => {
  const { usuario } = useContext(ContextUser);
  const navigate = useNavigate();
  const editarPerfil = () => navigate(`/editarperfil`);

  return (
    <div className="Container_Perfil">
      <div className="titulo">MI PERFIL</div>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          p: 1,
          minWidth: 300,
          minHeight: 300,
          width: "90%",
          height: "auto",
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      >
        {usuario.map((user) => (
          <Grid
            key={user.usuarioid}
            container
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 300,
              minHeight: 300,
              width: "100%",
              height: "auto",
            }}
          >
            <Grid
              item
              xs={4}
              m={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <Avatar

                src="/broken-image.jpg"
                sx={{ width: 180, height: 180, fontSize: "100px" }}
                style={{ backgroundColor: "black" }}
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <List
                sx={{
                  maxWidth: 200, 
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "black" }}>
                      <BadgeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Nombre" secondary={user.nombre} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "black" }}>
                      <HomeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dirección"
                    secondary={user.direccion}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "black" }}>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary={user.email} />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }} >
              <CustomButton
                variant="contained"
                color="primary"
                onClick={editarPerfil}
                sx={{ }}
              >
                Editar
              </CustomButton>
            </Grid>
          </Grid>
        ))}
      </Box>
    </div>
  );
};

export default Perfil;
