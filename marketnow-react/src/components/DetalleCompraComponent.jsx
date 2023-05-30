import { Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ContextProductos from "../contextProductos";
import ItemDetalleCompra from './ItemDetalleCompra';

const DetalleCompraComponent = () => {

  const { prodIdCompras, setprodIdCompras } = useContext(ContextProductos)
  const [ productosCompra, setProductosCompra ] = useState([]);
  const navigate = useNavigate();
  
  const volver = () => navigate(`/tienda`);

  const traerDetallesCompra = async () => {
    const response = await fetch(`https://marketnow-backend2.onrender.com/comprasdetalle/${prodIdCompras}`, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    });

  const resultado = await response.json();
  setProductosCompra(resultado.productos); //
  console.log(resultado.productos)
};

  useEffect(() => {
    traerDetallesCompra();
  },[]);

  return (
    <div className='Container_Perfil'>
      <div className='titulo'>DETALLE DE COMPRA</div>
      <Box
        sx={{
          bgcolor: "#fafafa",
          boxShadow: 1,
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 40,
          p: 1,
          minWidth: 300,
          width: "90%",
          minHeight: 300,
          height: "fit-content",
          marginBottom: "80px"
        }}
      >
        {productosCompra.map((objeto, index) => (
          <div key={index}>
            {objeto.productos.map((producto, index) => (
              <ItemDetalleCompra item={producto} key={producto.productoid} />
            ))}
          </div>
        ))}
      </Box>
    </div>
  );
}

export default DetalleCompraComponent;