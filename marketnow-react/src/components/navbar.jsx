import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';


const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;`

const SearchContainer = styled.div`
    border: 1px solid lightgray;`

const Center = styled.div`
    flex: 1;`
const Right = styled.div`
    flex: 1;`

const navbar = () => {
  return (
    <Container>
       <Wrapper>
        <Left>
            <Language>ES</Language>
            <SearchContainer>
                input
                <SearchIcon/>
            </SearchContainer>
            </Left>
        <Center>center</Center>
        <Right>right</Right>
        </Wrapper> 
      
    </Container>
  )
}

export default navbar

