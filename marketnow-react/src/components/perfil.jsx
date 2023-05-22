import React from "react";
import ContextUser from "../contextUsuario";
import { useEffect, useContext } from "react";
import styled from 'styled-components';
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  flex-wrap: wrap;
  justify-content: left;
  width:100%;
  position: relative;
  align-content: flex-start;
  justify-content: flex-start;
  margin-left: 8rem;
  margin-top: 88px;
  
`;
const Left = styled.div`
  
  margin-bottom: 32px;
`;
const Titulo = styled.h1`
    font-size: 40px;
    font-weight: normal;
  `;
  const CustomButton = styled(Button)`
  && {
      background-color: #77D0CF;
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

const Perfil = () => {

  const { usuario } = useContext(ContextUser);


  return (
    <Container>
      <Left>
        <Titulo>MI PERFIL</Titulo>
        </Left>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          p: 5,
          minWidth: 350,
          width: "70%",
          height: "280px",
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      >
        
        {usuario.map((user) => (
        <Grid key={user.usuarioid} container spacing={3}>
          <Grid item xs={1} m={2} marginRight={3} marginLeft={4} display={"flex"} alignItems={"center"}>
            <Avatar src="/broken-image.jpg" sx={{ width: 90, height: 90 }} style={{backgroundColor:"black"}} />
          </Grid>
          <Grid item xs={11} sm={10}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                paddingLeft: 10,
                paddingTop: 0 ,
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor:"black"}}>
                    <BadgeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Nombre" secondary={user.nombre} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor:"black"}}>
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
                  <Avatar style={{backgroundColor:"black"}}>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Email" secondary={user.email} />
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
            <CustomButton variant="contained" color="primary" sx={{ m: 2 }}>
              Editar
            </CustomButton>
          </Grid>
        </Grid>
        ))}
      </Box>
    </Container>
  );
};

export default Perfil;
