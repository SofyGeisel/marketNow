import styled from 'styled-components'
import Navbar from '../components/navbar'
import Anuncios from '../components/Anuncios'
import Productos from '../components/Productos'
import TiendaContainer from '../components/TiendaContainer'
import SideMenu from '../components/sidemenu'
import Footer from '../components/Footer'
import { Container } from '@mui/material'


const FooterContainer = styled.div`
  position: relative; 
  z-index: 1; 
`;

const Tienda = () => {


  return (
    <div>
      <Anuncios/>
      <Navbar/> 
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', margin: 0, padding: 0}}>
        <SideMenu/>
      </Container>
        <TiendaContainer/>
        <Productos/>
        <FooterContainer>
        <Footer/>
        </FooterContainer>
    </div>
  )
}

export default Tienda
