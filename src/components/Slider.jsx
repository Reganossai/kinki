import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import lol from '../assets/ahmed-UdkfelDA_o0-unsplash.jpg';
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  
  
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
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
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display:flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  z-index:1;
  ${mobile({ display: "none" })}
  `;

const Image = styled.img`
  height: 100%;
  width: 32.5%;
  margin: 0px 5px 0px 5px;
  z-index:1;
  
  ${mobile({ height: "0px", width:"0px" })}
`;

const InfoContainer = styled.div`
  position:absolute;
  top:100px;
  left:20px;
  padding: 50px;
  z-index: 99;
  
`;

const Title = styled.h1`
  font-size: 30px;
  color: black;
  z-index :99;
  display:none;

`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 13px;
  width:450px;
  font-weight: 500;
  letter-spacing: 3px;
  color:black;
  z-index:999;
  font-weight:bolder;
`;

const Button = styled.button`
  padding: 5px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  margin-top:-20px;
 
  
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };




  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
            

            </ImgContainer>
            <InfoContainer>
              <h1 className="titlee">{item.title}</h1>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button className="shop-now">{item.link}</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
