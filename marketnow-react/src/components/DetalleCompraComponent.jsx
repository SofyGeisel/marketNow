import React, { useEffect, useState, useContext } from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
import { useEffect, useState, useContext } from "react";
>>>>>>> parent of e6729d7 (Revert "Merge branch 'dev-mg' into devSG")
import ContextProductos from "../contextProductos";
import ItemDetalleCompra from './ItemDetalleCompra';

const DetalleCompraComponent = () => {
<<<<<<< HEAD
  const { prodIdCompras, setprodIdCompras } = useContext(ContextProductos);
  const [productosCompra, setProductosCompra] = useState([]);
=======

  const { prodIdCompras, setprodIdCompras } = useContext(ContextProductos)
  const [ productosCompra, setProductosCompra ] = useState([]);
>>>>>>> parent of e6729d7 (Revert "Merge branch 'dev-mg' into devSG")
  const navigate = useNavigate();
  
  const volver = () => navigate(`/tienda`);

  const traerDetallesCompra = async () => {
    const response = await fetch(`http://localhost:3000/comprasdetalle/${prodIdCompras}`, {
<<<<<<< HEAD
      method: "GET",
=======
      method: "GET", // or 'PUT'
>>>>>>> parent of e6729d7 (Revert "Merge branch 'dev-mg' into devSG")
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultado = await response.json();
    setProductosCompra(resultado);
    console.log(resultado);
  };

  useEffect(() => {
    traerDetallesCompra();
<<<<<<< HEAD
  }, []);
=======
  },[]);
>>>>>>> parent of e6729d7 (Revert "Merge branch 'dev-mg' into devSG")

  return (
    <div className='Container_Perfil'>
      <div className='titulo'>DETALLE DE COMPRA</div>
      <Box
<<<<<<< HEAD
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
=======
            sx={{
              bgcolor: "#fafafa",
              boxShadow: 1,
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
              p: 1,
              minWidth: 300,
              width: "90%",
              minHeight: 350 ,
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
>>>>>>> parent of e6729d7 (Revert "Merge branch 'dev-mg' into devSG")
    </div>
  );
}

export default DetalleCompraComponent;