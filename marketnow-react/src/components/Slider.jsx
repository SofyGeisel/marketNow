import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  min-height: 87vh;
  height: auto;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right:6rem;
  padding-left:0;
`;
const Image = styled.img`
  object-fit: cover;
  width:30rem;
  padding: 4rem;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding:2rem;
  padding-left:12rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  font-family: urbanist, sans-serif;
  font-weight: 400;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  

  const handleClick = (direction) => {

    if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
    } else{
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  };
  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowBackIosNewIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide>
              <InfoContainer>
                <Title>{item.title}</Title>
              </InfoContainer>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowForwardIosIcon />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
