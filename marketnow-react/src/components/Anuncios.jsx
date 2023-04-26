import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bolder;`

const Anuncios = () => {
  return (
    <Container>
      Envíos gratis en pedidos sobre $30.000
    </Container>
  )
}

export default Anuncios
