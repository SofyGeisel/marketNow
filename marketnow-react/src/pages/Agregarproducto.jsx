import React, { useState, useContext } from "react";
import styled from "styled-components";
import Anuncios from "../components/Anuncios";
import NavbarVPrivada from "../components/NavbarVPrivada";
import Footer from "../components/Footer";
import SideMenu from "../components/sidemenu";
import TextField from "@mui/material/TextField";
import { Button, Container} from "@mui/material";
import ContextUser from '../contextUsuario';
import { useNavigate } from "react-router-dom";

const ContainerAddProducto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
  min-height: 365px;
  background-color: white;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
`;

const ContainerTextField = styled.div`
  display: flex;
  flex-direction: column;
  height:auto;
  margin-left: 150px;
  margin-right: 150px;
  justify-content: flex-start;
  margin-top: 40px;
  margin-bottom: 40px;
  flex: 1; 
  align-self: stretch; 
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
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
`;
const CustomButton = styled(Button)`
  && {
    background-color: #77d0cf;
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
const FooterContainer = styled.div`
  position: relative;
  z-index: 2;
`;
const Agregarproducto = () => {

  const navigate = useNavigate()
  const {usuario, setUsuario} = useContext(ContextUser)
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("")

  const cargarImagen = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    setImagen(base64)
    console.log(base64)
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      };

      fileReader.onerror = (error) => {
        reject(error)
      };

    });
  }

  const registrarProducto = async () => {

    const datos = usuario[0].usuarioid

    const producto = {
      nombre: nombre,
      precio: precio,
      descripcion: descripcion,
      imagen: imagen,
      usuarioid: datos,
    };

    const productotemporal = JSON.stringify(producto);
    try {
      const response = await fetch("http://localhost:3000/producto", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      const result = await response;
      const token = await response.text();

      if (result.ok) {

        navigate("/tienda");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Anuncios />
      <NavbarVPrivada />
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', height: 'auto', minHeight: '70vh', margin: 0, padding: 0, gap: 7}}>
        <SideMenu />
        <div className="Container_Perfil">
        <div className='titulo'>AGREGAR PRODUCTO</div>
        <ContainerAddProducto>
            <ContainerTextField>
              <CustomTextField
                autoComplete="given-name"
                name="Nombre del producto"
                required
                fullWidth
                id="nombreproducto"
                label="Nombre del producto"
                autoFocus
                size="small"
                value={nombre}
                onChange={({ target }) => setNombre(target.value)}
                sx={{ marginBottom: 2 }}
              />
              <CustomTextField
                name="Precio"
                required
                fullWidth
                id="precio"
                label="Precio"
                autoFocus
                size="small"
                value={precio}
                onChange={({ target }) => setPrecio(target.value)}
                sx={{ marginBottom: 2 }}
              />
              <CustomTextField
                name="Descripción del producto"
                required
                fullWidth
                multiline
                maxRows={3}
                id="descripcionproducto"
                label="Descripción del producto"
                autoFocus
                size="small"
                value={descripcion}
                onChange={({ target }) => setDescripcion(target.value)}
                sx={{ marginBottom: 3 }}
              />   
              <h4>Agrega la imagen de tu producto</h4>
              <input name="archivo" type="file" onChange={(e) => cargarImagen(e)}/>           
              <ButtonContainer>
                <CustomButton variant="contained" size="small" color="primary" onClick={registrarProducto}>
                  Agregar producto
                </CustomButton>
              </ButtonContainer>
            </ContainerTextField>
        </ContainerAddProducto> 
        </div>
      </Container>
      
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  );
};

export default Agregarproducto;
