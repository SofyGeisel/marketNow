import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import Slider from '../components/Slider'
import Productos from '../components/Productos'


const Home = () => {
  return (
    <div>
      <Anuncios/>
      <Navbar/>
      <Slider/>
      <Productos/>
    </div>
  )
}

export default Home

