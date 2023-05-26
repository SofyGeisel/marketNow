import * as React from 'react';
import { useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import ContextUser from '../contextUsuario';
import ContextCarrito from "../contextCarrito";
import { useNavigate } from "react-router-dom";

import { Button } from '@mui/material';
import styled from 'styled-components';

const CustomButton = styled(Button)`
    && {
        background-color: #77D0CF;
        color: black;
        border-radius: 20px;
        text-transform: capitalize;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 14px;
        &:hover {
            background-color: black;  
            color: white;
        }
    }
`;
const ButtonContainer = styled.div`
    height: 140px;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    
`;


const drawerWidth = 280;

const SideMenu = (props) => {
  /* Constantes para la navegación del menú */
  const navigate = useNavigate();
  const perfil = () => navigate(`/miperfil`)
  const misCompras = () => navigate(`/compras`)
  const misFavoritos = () => navigate(`/misfavoritos`)
  const agregarProducto = () => navigate(`/agregarproducto`)

  const { carrito } = useContext(ContextCarrito)
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const {usuario, setUsuario} = useContext(ContextUser);

  const cerrarSesion = async () => {
    navigate("/login");
    localStorage.removeItem('token');
    carrito.length = 0;
  }
  
  const obtenerUsuario = async () => {

    const token = localStorage.getItem("token");
  
    try {
      const response = await fetch("https://marketnow-backend.onrender.com/usuarios", {
        method: "GET", // or 'PUT'
        headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        },
      });
  
      let result = await response.json();
      setUsuario(result);
      console.log(result)
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };
  
  useEffect(() => {
    obtenerUsuario();
  },[]);

  const drawer = (
    
      <Box sx={{ width: '100%', maxWidth: 360, minWidth: 200, height: '100vh',  bgcolor: 'background.paper', marginLeft: 0,}}>
      <Box p={5} style={{ color: 'black' }}>  
        <p>Bienvenid@ </p>
        {usuario.map(user =>
        <strong key={user.usuarioid}>{user.nombre}</strong>
        )}
      </Box>
      <Divider/>
    <List component="nav" aria-label="main mailbox folders">
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => {
          handleListItemClick(event, 1)
          perfil()}}
      >
        <ListItemIcon>
          <AccountCircleIcon style={{ color: 'black' }}/>
        </ListItemIcon>
        <ListItemText primary="Mi Perfil" primaryTypographyProps={{
    style: {
      color: 'black', 
    },
  }} />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => {
          handleListItemClick(event, 1)
          misCompras()}}
      >
        <ListItemIcon>
          <ShoppingBasketIcon style={{ color: 'black' }} />
        </ListItemIcon>
        <ListItemText primary="Mis Compras" primaryTypographyProps={{
    style: {
      color: 'black', 
    },
  }}/>
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => {
          handleListItemClick(event, 1)
          misFavoritos()}}
      >
        <ListItemIcon>
          <FavoriteIcon style={{ color: 'black' }}/>
        </ListItemIcon>
        <ListItemText primary="Mis Favoritos" primaryTypographyProps={{
    style: {
      color: 'black', 
    },
  }} />
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => {
          handleListItemClick(event, 1)
          agregarProducto()}}
      >
        <ListItemIcon>
          <AddCircleIcon style={{ color: 'black' }}/>
        </ListItemIcon>
        <ListItemText primary="Agregar Producto" primaryTypographyProps={{
    style: {
      color: 'black', 
    },
  }} />
      </ListItemButton>
    </List>
    <ButtonContainer>
    <CustomButton variant="contained" size="small" color="primary" onClick={cerrarSesion}>Cerrar sesión</CustomButton>
    </ButtonContainer>
  </Box>
    
  );

  const container = window !== undefined ? () => window().document.body : undefined;

   return(
    <Box sx={{ display: 'flex', }}>
      <Box
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          
        }}
      >

        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, backgroundColor:'#1976d2', margin:'10px', color:'white', display: { sm: 'none' } }}
          >
            <MenuIcon />
        </IconButton>
        
      </Box> 
        
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop:'140px', marginBottom: '100px', zIndex: 1, borderTopRightRadius: 40,},
          }}
          open
        >
          {drawer}
        </Drawer>
        
      </Box>
      
            
      
    </Box>
    
    )
}

export default SideMenu;