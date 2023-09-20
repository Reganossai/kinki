import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState, useEffect } from 'react';

const Container = styled.div`

  height: 60vh;
  position: relative;
  margin: 0px 0px 0px 5px;
  ${mobile({ height: "50vh" })}
`;

const Image = styled.img`
  width: 1300px;
  height: 100%;
  object-fit: cover;
  z-index:1;
  opacity:0.8;
  
  ${mobile({ height: "50vh",})}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({display:"hidden"})}
`;

const Title = styled.h1`
    color: black;
    margin-top:30px;
    margin-left:5px;
    margin-bottom: 20px;
    font-family:monospace;
    font-weight:bolder;
    font-size:15px;
    ${mobile({ fontSize: "13px", })}
    
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;


const images = ['https://images.unsplash.com/photo-1582279976742-3fb2592927ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2V4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1544488963-529d8ea25714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2V4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1518208940245-41bdd9dab228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2V4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1551382331-2109163a9734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2V4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1551382331-2109163a9734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2V4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1592318343309-853bcb2213ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNleHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60']; 


const CategoryItem = ({ item }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Container>
    
      <Image className='imak' src={images[currentImageIndex]} alt="Changing Image"></Image>
      
    
      {/* <Info>
        <Title>{item.title}</Title>
      </Info> */}
    </Container>
  );
};

export default CategoryItem;
