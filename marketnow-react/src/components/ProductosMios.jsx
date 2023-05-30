import styled from "styled-components";
import ProductoMio from "./ProductoMio";
import { useEffect, useContext, useState } from "react";
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



const ProductosMios = () => {

  /*const {productos, setProductos} = useContext(ContextProductos);*/
  const [productosmios, setProductosmios] = useState([])
  const {usuario, setUsuario} = useContext(ContextUser)
  

  const traerProductosmios = async () => {

    const datos = usuario[0].usuarioid
    console.log(datos)

    const response = await fetch(`https://marketnow-backend2.onrender.com/productos/${datos}`, {
      method: "GET", // or 'PUT'
      headers: {
      "Content-Type": "application/json",
      },
    });

    const resultado = await response.json();
    setProductosmios(resultado)
  }

  useEffect(() => {
    traerProductosmios();
  });


  return (
    <div className="Container_Perfil"
    >
      <TopContainer>
      <Titulo>
        MIS PRODUCTOS SUBIDOS
      </Titulo>
      <Pagination count={3} variant="outlined" />
      </TopContainer>
      <div className="contenedor_prodTienda">
        {productosmios.map((item) => (
          <ProductoMio item={item} key={item.productoid}/>
        ))}
      </div>
    </div>
  );
};

export default ProductosMios;