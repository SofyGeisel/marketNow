import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../css/estilos.css";
import styled from "styled-components";
import ContextUser from "../contextUsuario";


const CustomButton = styled(Button)`
  && {
    background-color: #77d0cf;
    color: black;
    border-radius: 20px;
    text-transform: capitalize;
    margin-bottom: 0px;
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
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const EditarPerfilComponent = () => {
  const navigate = useNavigate();

  const { usuario } = useContext(ContextUser);
  const [editarNombre, setEditarNombre] = useState("");
  const [editarDireccion, setEditarDireccion] = useState("");
  const [editarPassword, setEditarPassword] = useState("");


  useEffect(() => {
    setEditarNombre(usuario[0].nombre)
    setEditarDireccion(usuario[0].direccion)
  });

  const editarUsuario = async () => {

    const datos = usuario[0].usuarioid

    try {
      const response = await fetch(`https://marketnow-backend2.onrender.com/usuario/${datos}?nombre=${editarNombre}&direccion=${editarDireccion}&password=${editarPassword}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response;

      if (result.ok) {
        navigate("/formularioexito");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Container_Perfil">
      <div className="titulo">EDITAR PERFIL</div>
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
        <Box component="form" noValidate sx={{ mt: 3, display: 'flex',flexDirection: 'column', alignItems: 'center', marginLeft: "50px", marginRight: "50px" }}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                autoComplete="given-name"
                name="nombre"
                fullWidth
                id="nombre"
                label={usuario[0].nombre}
                autoFocus
                value={editarNombre}
                onChange={({ target }) => setEditarNombre(target.value)}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                id="email"
                label="Email al ser tu Usuario no puede ser cambiado"
                name="email"
                autoComplete="email"
                value={usuario[0].email}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                id="direccion"
                label={usuario[0].direccion}
                name="direccion"
                autoComplete="direccion"
                value={editarDireccion}
                onChange={({ target }) => setEditarDireccion(target.value)}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                name="password"
                label="Dejar vacio si no desea cambiar Password"
                type="password"
                id="password"
                autoComplete="Dejar vacio si no desea cambiar Password"
                value={editarPassword}
                onChange={({ target }) => setEditarPassword(target.value)}
                size="small"
              />
            </Grid>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", margin:3 }} >
          <CustomButton
            fullWidth
            variant="contained"
            sx={{ mt: 4, mb: 2 }}
            onClick={editarUsuario}
          >
            Guardar cambios
          </CustomButton>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default EditarPerfilComponent;
