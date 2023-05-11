import React from "react";
import Box from '@mui/material/Box';
import { Typography, FormControl, Button, Grid, TextField, Link, InputAdornment   } from "@mui/material";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< Updated upstream
=======
//import axios from "axios";
>>>>>>> Stashed changes
import '../css/estilos.css'


const Login_form = () => {
   
    const navigate = useNavigate();
    const [email, setEmailLocal] = useState("");
    const [password, setPasswordLocal] = useState("");
  

    const iniciarSesion = async () => {

        const usuarioprevio = {
            'email': email,
            'password': password 
        };
        
        try {

            const response = await fetch("http://localhost:3000/login", {
                method: "POST", // or 'PUT'
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(usuarioprevio),
            });

            const result = await response
            const token = await response.text()

            if (result.ok) {
                
                alert("Usuario identificado con éxito 😀");
                localStorage.setItem("token", token);
                navigate("/tienda");
            }
            
            } catch (error) {
                console.error("Error:", error);
            }
    };
  

    return (
       
        <div className="Container_Login">
            <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 4,
            minWidth: 200,
            maxWidth:350,
            m:10,
            }}>
                <Typography marginBottom={2} variant="h5">Iniciar Sesión</Typography>
                <Grid container spacing={1} rowSpacing={2} marginBottom={4}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField fullWidth id="email" type="email" label="Email" value={email} onChange={({ target }) => setEmailLocal(target.value)}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="end">
                                    <MailOutlineOutlinedIcon />
                                  </InputAdornment>
                                ),
                              }}
                              />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth >
                            <TextField fullWidth id="password" type="password" label="Password" variant="outlined" value={password} onChange={({ target }) => setPasswordLocal(target.value)}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="end">
                                    <LockOutlinedIcon />
                                  </InputAdornment>
                                ),
                              }}
                              />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={iniciarSesion}>
                        Iniciar Sesión
                    </Button> 
                    </Grid>  
                    
                    <Grid item xs>
                        <Link href="#" variant="body2">
                        ¿Olvidaste tu password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/registro" variant="body2">
                        {"¿No tienes cuenta? Registrate"}
                        </Link>
                    </Grid>
                    </Grid> 
                
            </Box>
            
        </div>
                
        

    )
}

export default Login_form;