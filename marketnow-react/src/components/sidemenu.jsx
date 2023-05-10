import * as React from 'react';
import Context from '../context';
import { useContext } from 'react';
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

const drawerWidth = 240;

const SideMenu = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const { user } = useContext(Context);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
   return(
    <Box sx={{ width: '100%', maxWidth: 360, minWidth: 200, height: '100vh',  bgcolor: 'background.paper', marginLeft: 0}}>
      <Box p={5}>
        <p>Bienvenido {user} </p>
      </Box>
      <Divider/>
    <List component="nav" aria-label="main mailbox folders">
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 1)}
        href='/miperfil'
      >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Mi Perfil" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 1)}
        href='/compras'
      >
        <ListItemIcon>
          <ShoppingBasketIcon />
        </ListItemIcon>
        <ListItemText primary="Mis Compras" />
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 1)}
        href='/misfavoritos'
      >
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="Mis Favoritos" />
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 1)}
        href='/agregarproducto'
      >
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Agregar Producto" />
      </ListItemButton>
    </List>
    
  </Box>
    )
}

export default SideMenu;