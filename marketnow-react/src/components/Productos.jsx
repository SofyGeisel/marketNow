import styled from "styled-components";
import Producto from "./Producto";
import { useEffect, useContext } from "react";
import ContextProductos from "../contextProductos";
import { Pagination, Container } from "@mui/material";
import "../css/estilos.css";

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

const Productos = () => {
  const { productos, setProductos } = useContext(ContextProductos);

  /* const [productos, setProductos] = useState([]); */

  const traerProductos = async () => {
    const response = await fetch("https://marketnow-backend2.onrender.com/productos", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultado = await response.json();
    setProductos(resultado);
  };

  useEffect(() => {
    traerProductos();
  });

  return (
    <div className="Container_Perfil"
    >
      <TopContainer>
        <Titulo>TIENDA</Titulo>
        <Pagination count={3} variant="outlined" />
      </TopContainer>
      <div className="contenedor_prodTienda">
        {productos.map((item) => (
          <Producto item={item} key={item.productoid} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
