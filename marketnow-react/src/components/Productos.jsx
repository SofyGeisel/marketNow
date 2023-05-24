import styled from "styled-components";
import Producto from "./Producto";
import { useEffect, useContext } from "react";
import ContextProductos from "../contextProductos";
import { Pagination } from "@mui/material";
import "../css/estilos.css"



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



const Productos = () => {

  const {productos, setProductos} = useContext(ContextProductos);


  /* const [productos, setProductos] = useState([]); */

  const traerProductos = async () => {

    const response = await fetch("http://localhost:3000/productos", {
      method: "GET", // or 'PUT'
      headers: {
      "Content-Type": "application/json",
      },

    });

    const resultado = await response.json();
    setProductos(resultado)
  }

  useEffect(() => {
    traerProductos();
  });


  return (
    <Container>
      <TopContainer>
      <Titulo>
        TIENDA
      </Titulo>
      <Pagination count={3} variant="outlined" />
      </TopContainer>
      <div className="contenedor_prodTienda">
        {productos.map((item) => (
          <Producto item={item} key={item.productoid}/>
        ))}
      </div>
      
    </Container>
  );
};

export default Productos;