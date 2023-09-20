import React, { useState, useEffect } from 'react';

const images = ['https://i.ibb.co/XsdmR2c/1.png', 'https://i.ibb.co/DG69bQ4/2.png', 'https://i.ibb.co/cXFnLLV/3.png']; // Add more image paths

const ImageChangeComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

  return (
    <div className="image-containeru">
      <img className='imak' src={images[currentImageIndex]} alt="Changing Image" />
    </div>
  );
};

export default ImageChangeComponent;