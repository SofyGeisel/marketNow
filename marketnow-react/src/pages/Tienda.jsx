import styled from 'styled-components'
import NavbarVPrivada from '../components/NavbarVPrivada'
import Anuncios from '../components/Anuncios'
import Productos from '../components/Productos'
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
      <NavbarVPrivada/>
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', margin: 0, padding: 0, gap: 7}}>
        <SideMenu/>
        <Productos/>
      </Container> 
        <FooterContainer>
        <Footer/>
        </FooterContainer>
    </div>
  )
}

export default Tienda
