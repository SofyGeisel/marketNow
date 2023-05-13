import styled from "styled-components";
import { listaDeProductos } from "../data";
import Producto from "./Producto";


const Container = styled.div`
  
  display: flex;
  height: 120vh;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 22rem;
  margin-top: 30px;
`;


const Productos = () => {
  return (
    <Container>
      {listaDeProductos.map((item) => (
        <Producto item={item} key={item.id}/>
      ))}
    </Container>
  );
};

export default Productos;