import styled from "styled-components";
import ProductoFavorito from "./ProductoFavorito";
import { useEffect, useContext, useState } from "react";
import ContextProductos from "../contextProductos";
import { Pagination } from "@mui/material";
import "../css/estilos.css"
import ContextUser from '../contextUsuario';


const TopContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
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

    const response = await fetch(`https://marketnow-backend2.onrender.com/favoritos/${datos}`, {
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
    <div className="Container_Perfil"
    >
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
    </div>
  );
};

export default ProductosFavoritos;