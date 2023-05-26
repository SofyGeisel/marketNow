import styled from "styled-components";
import ProductoFavorito from "./ProductoFavorito";
import { useEffect, useContext, useState } from "react";
import ContextProductos from "../contextProductos";
import { Pagination } from "@mui/material";
import "../css/estilos.css"
import ContextUser from '../contextUsuario';


const Container = styled.div`
  
  display: flex;
  height: 130vh;
  flex-wrap: wrap;
  margin-top: 88px;
  padding-bottom: 80px;
  
`;
const TopContainer = styled.div`
  display: flex;
  width: 39%;
  align-items: center;
  margin-left: 95px;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Titulo = styled.h1`
    font-size: 40px;
    font-weight: normal;
    
   
  `;



const ProductosFavoritos = () => {

  /*const {productos, setProductos} = useContext(ContextProductos);*/
  const [productosfav, setProductosfav] = useState([])
  const {usuario, setUsuario} = useContext(ContextUser)
  

  const traerProductosfavoritos = async () => {

    const datos = usuario[0].usuarioid

    const response = await fetch(`https://marketnow-backend.onrender.com/favoritos/${datos}`, {
      method: "GET", // or 'PUT'
      headers: {
      "Content-Type": "application/json",
      },
    });

    const resultado = await response.json();
    setProductosfav(resultado)
  }

  useEffect(() => {
    traerProductosfavoritos();
  });


  return (
    <Container>
      <TopContainer>
      <Titulo>
        MIS FAVORITOS
      </Titulo>
      <Pagination count={3} variant="outlined" />
      </TopContainer>
      <div className="contenedor_prodTienda">
        {productosfav.map((item) => (
          <ProductoFavorito item={item} key={item.productoid}/>
        ))}
      </div>
      
    </Container>
  );
};

export default ProductosFavoritos;