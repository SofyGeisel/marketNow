import styled from "styled-components";
import Producto from "./Producto";
import { useEffect, useContext } from "react";
import ContextProductos from "../contextProductos";



const Container = styled.div`
  
  display: flex;
  height: 120vh;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 23rem;
  margin-top: 30px;
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
      {productos.map((item) => (
        <Producto item={item} key={item.productoid}/>
      ))}
    </Container>
  );
};

export default Productos;