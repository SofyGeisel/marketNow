import React from 'react'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import Slider from '../components/Slider'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Anuncios/>
      <Navbar/>
      <Slider/>
      <Footer/>
    </div>
  )
}

export default Home

