import React, { useState, useEffect,useCallback } from 'react';
import {Link} from "react-router-dom";
import { ROUTES } from '../constants';


const images = ['https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMGNsb3RoaW5nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGUlMjBjbG90aGluZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60','https://plus.unsplash.com/premium_photo-1691367279675-0e466cfb5135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGUlMjBjbG90aGluZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60']; 

const imagess = ['https://images.unsplash.com/photo-1593344484962-796055d4a3a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60','https://plus.unsplash.com/premium_photo-1664194584496-a3bccb6c6d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60']
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const numberOfSlides = 2;
  const intervalDuration = 4000;

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % numberOfSlides);
  }, [numberOfSlides]);

  useEffect(() => {
    const abortController = new AbortController();

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    const intervall = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagess.length);
    }, intervalDuration);

    const carouselInterval = setInterval(nextSlide, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(intervall);
      clearInterval(carouselInterval);
      abortController.abort();
    };
  }, [nextSlide]);

  // Render your carousel component with images

  return (
      <div id="carouselExampleIndicators" className="carousel slide">
        <h1 className='titlee'>HIGHLIGHTS</h1>
  <div className="carousel-inner">
    <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
      <img src={images[currentImageIndex]} id="carousel" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <button id="shop-now" className="btn btn-outline-dark"><Link to={ROUTES.PRODUCTS}>Shop Now At Kinkiverse</Link></button>
      </div>
    </div>
    <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
      <img src={imagess[currentImageIndex]} id="carousel" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <button id="shop-now" className="btn btn-outline-dark">Deal Of The Day</button>
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel