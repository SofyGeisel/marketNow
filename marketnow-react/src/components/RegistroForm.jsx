import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/estilos.css'
import styled from "styled-components";

const TopContainer = styled.div`
    display: flex;
    align-items: center;
`;

const CustomButton = styled(Button)`
    && {
        background-color: #77D0CF;
        color: black;
        border-radius: 20px;
        text-transform: capitalize;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 15px;
        &:hover {
            background-color: black;  
            color: white;
        }
    }
`;
const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
          borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#6F7E8C',
        },
      },
    });


const RegistroForm = () => {

    const navigate = useNavigate();
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevoApellido, setNuevoApellido] = useState("");
    const [nuevoEmail, setNuevoEmail] = useState("");
    const [nuevaDireccion, setNuevaDireccion] = useState("");
    const [nuevoPassword, setNuevoPassword] = useState("");
  

    const registroUsuario = async () => {

        const nombreCompleto = nuevoNombre+" "+nuevoApellido;

        const usuarioNuevo = {
            nombre: nombreCompleto,
            email: nuevoEmail,
            direccion: nuevaDireccion,
            password: nuevoPassword,
        };

        
        try {

            const response = await fetch("https://marketnow-backend2.onrender.com/usuarios", {
                method: "POST", // or 'PUT'
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(usuarioNuevo),         
            });
            
            const result = await response;
            console.log(result);
            
            if (result.ok) {
            alert("Usuario registrado con éxito 😀");
            navigate("/loginregistro");
            }

            } catch (error) {
                console.error("Error:", error);
            }
    };

    return(
        <div className="Container_Login">
            
                <CssBaseline />
                <Box
                sx={{
                    bgcolor: 'background.paper',
                    maxWidth: 400,
                    minWidth: 350,
                    m: 2,
                    p: 4,
                    boxShadow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderTopRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    paddingBottom: '40px',
                    paddingTop: '30px'
                }}
                >
                <TopContainer>
                <Typography component="h1" variant="h5">
                    Crea tu cuenta en <strong>MarketNow</strong>
                </Typography>
                <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                    <LockOutlinedIcon  />
                </Avatar>
                </TopContainer>
                <Box component="form" noValidate sx={{ mt: 3, display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <Grid container spacing={1.5}  >
                    <Grid item xs={12} sm={6} >
                        <CustomTextField
                        autoComplete="given-name"
                        name="nombre"
                        required
                        fullWidth
                        id="nombre"
                        label="Nombre"
                        autoFocus
                        value={nuevoNombre} onChange={({ target }) => setNuevoNombre(target.value)}
                        size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                        required
                        fullWidth
                        id="apellido"
                        label="Apellido"
                        name="apellido"
                        autoComplete="family-name"
                        value={nuevoApellido} onChange={({ target }) => setNuevoApellido(target.value)}
                        size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={nuevoEmail} onChange={({ target }) => setNuevoEmail(target.value)}
                        size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextField
                        required
                        fullWidth
                        id="direccion"
                        label="Dirección"
                        name="direccion"
                        autoComplete="direccion"
                        value={nuevaDireccion} onChange={({ target }) => setNuevaDireccion(target.value)}
                        size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={nuevoPassword} onChange={({ target }) => setNuevoPassword(target.value)}
                        size="small"
                        />
                    </Grid>
                    
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center">
                    <CustomButton
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={registroUsuario}
                    >
                    Registrar Usuario
                    </CustomButton>
                    </Grid>
                    <Grid container justifyContent="center">
                    <Grid item>
                        <Link href="/loginregistro" color="inherit" >
                       ¿Ya tienes una cuenta?   Ingresa acá
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
            
        
        
        </div>
    )
}

export default RegistroForm;