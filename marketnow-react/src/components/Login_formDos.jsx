import React from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  FormControl,
  Button,
  Grid,
  TextField,
  Link,
  InputAdornment,
  Alert,
  AlertTitle,
  Collapse,
} from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import "../css/estilos.css";
import styled from "styled-components";

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

const Login_form = () => {
  const navigate = useNavigate();
  const [email, setEmailLocal] = useState("");
  const [password, setPasswordLocal] = useState("");
  const [checkLogin, setCheckLogin] = useState(true);

  const iniciarSesion = async () => {
    const usuarioprevio = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://marketnow-backend2.onrender.com/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarioprevio),
      });

      const result = await response;
      const token = await response.text();
      response.status === 401 || response.status === 500 ? setCheckLogin(false) : setCheckLogin(true)

      if (result.ok) {
        
        localStorage.setItem("token", token);
        navigate("/tienda");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Container_Login">
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          p: 4,
          minWidth: 200,
          maxWidth: 300,
          m: 10,
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      >
        <Typography marginBottom={1} variant="h5" >
          ¡Bienvenid@ a <strong>MarketNow</strong>!
        </Typography>
        <Typography marginBottom={3} variant="h6" >
          Inicia sesión con tu cuenta
        </Typography>
        <Grid container display="flex" justifyContent="center" spacing={1} rowSpacing={3} marginBottom={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <CustomTextField
                fullWidth
                id="email"
                type="email"
                label="Email"
                size="small"
                value={email}
                onChange={({ target }) => setEmailLocal(target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <MailOutlineOutlinedIcon style={{color: "gray", fontSize:18}} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <CustomTextField
                fullWidth
                id="password"
                type="password"
                size="small"
                label="Password"
                variant="outlined"
                value={password}
                onChange={({ target }) => setPasswordLocal(target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <LockOutlinedIcon style={{color: "gray", fontSize:16}} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <CustomButton variant="contained" color="primary" onClick={iniciarSesion}>
              Iniciar Sesión
            </CustomButton>
          </Grid>

          <Grid item >
            <Link href="/registro" color="inherit">
              {"¿No tienes cuenta? Registrate"}
            </Link>
          </Grid>
        </Grid>
        <Collapse in={!checkLogin}>
          <Alert severity="error" >
          <AlertTitle>Error</AlertTitle>
          Email o password incorrecto
        </Alert>
      </Collapse>
      </Box>
    </div>
  );
};

export default Login_form;
