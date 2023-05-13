import React from "react";
import Context from "../context";
import { useContext } from "react";
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
import BadgeIcon from "@mui/icons-material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";

import "../css/estilos.css";

const Perfil = () => {
  const { user } = useContext(Context);
  return (
    <div className="Container_Perfil">
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
          Mi Perfil
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={1} m={4}>
            <Avatar src="/broken-image.jpg" sx={{ width: 90, height: 90 }} />
          </Grid>
          <Grid item xs={11} sm={10}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BadgeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Nombre" secondary={user} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <HomeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Dirección"
                  secondary="Dirección de prueba"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Email" secondary="usuario@email.com" />
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
            <Button variant="contained" color="primary" sx={{ m: 2 }}>
              Editar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Perfil;
