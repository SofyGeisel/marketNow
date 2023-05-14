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
            'nombre': nombreCompleto,
            'email': nuevoEmail,
            'direccion': nuevaDireccion,
            'password': nuevoPassword 
        };

        
        try {

            const response = await fetch("http://localhost:3000/usuarios", {
                method: "POST", // or 'PUT'
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(usuarioNuevo),
                
            });

                alert("Usuario registrado con éxito 😀");
                navigate("/login");
            
            } catch (error) {
                console.error("Error:", error);
            }
    };

    return(
        <div className="Container_Login">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    bgcolor: 'background.paper',
                    p: 5,
                    borderRadius: 2,
                    boxShadow: 1,
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registro
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="given-name"
                        name="nombre"
                        required
                        fullWidth
                        id="nombre"
                        label="Nombre"
                        autoFocus
                        value={nuevoNombre} onChange={({ target }) => setNuevoNombre(target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="apellido"
                        label="Apellido"
                        name="apellido"
                        autoComplete="family-name"
                        value={nuevoApellido} onChange={({ target }) => setNuevoApellido(target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={nuevoEmail} onChange={({ target }) => setNuevoEmail(target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="direccion"
                        label="Dirección"
                        name="direccion"
                        autoComplete="direccion"
                        value={nuevaDireccion} onChange={({ target }) => setNuevaDireccion(target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={nuevoPassword} onChange={({ target }) => setNuevoPassword(target.value)}
                        />
                    </Grid>
                    
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={registroUsuario}
                    >
                    Registrar Usuario
                    </Button>
                    <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                       ¿Ya tienes una cuenta? Ingresa acá
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
            </Container>
        
        
        </div>
    )
}

export default RegistroForm;