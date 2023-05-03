import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
      <Anuncios/>
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default Home

