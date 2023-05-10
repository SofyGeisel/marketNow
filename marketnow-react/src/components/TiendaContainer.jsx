import React from 'react'
import styled from "styled-components";
import { Pagination } from '@mui/material';

const Container = styled.div`
  height: 50px;
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 50px;
  
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Titulo = styled.h1`
    font-size: 40px;
    font-weight: normal;
  `;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  `;

  const Right = styled.div`
  flex: 1;
  display: flex;
  `;

const TiendaContainer = () => {
  return (
    <div>
        <Container>
            <Wrapper>
            <Left>
            <Titulo>
            TIENDA
            </Titulo>
            </Left>
            <Center>
            <Pagination count={3} variant="outlined" />
            </Center>
            <Right></Right>
            </Wrapper>
        </Container>
      
    </div>
  )
}

export default TiendaContainer
