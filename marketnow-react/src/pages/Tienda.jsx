import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import Productos from '../components/Productos'
import TiendaContainer from '../components/TiendaContainer'


const Tienda = () => {
  return (
    <div>
      <Anuncios/>
      <Navbar/> 
      <TiendaContainer/>
      <Productos/>
    </div>
  )
}

export default Tienda
