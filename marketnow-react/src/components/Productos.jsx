import styled from "styled-components";
import Producto from "./Producto";
import { useEffect, useContext } from "react";
import ContextProductos from "../contextProductos";
import { Pagination } from "@mui/material";
import "../css/estilos.css"



const Container = styled.div`
  
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: center;
  /* margin-left: 23rem; */
  margin-top: 50px;
  padding-bottom: 80px;
  
`;

const Titulo = styled.h1`
    font-size: 40px;
    font-weight: normal;
    width: 100%;
    text-align: center;
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
      <Titulo>
        TIENDA
      </Titulo>
      <Pagination count={3} variant="outlined" />
      <div className="contenedor_prodTienda">
        {productos.map((item) => (
          <Producto item={item} key={item.productoid}/>
        ))}
      </div>
      
    </Container>
  );
};

export default Productos;