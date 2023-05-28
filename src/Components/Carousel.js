import React, { useState } from 'react';
import '../stylesheet/Carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className='boton' onClick={goToPreviousImage}><div className='flechaIzquierda'></div></button>
      <img src={images[currentImageIndex]} alt="carousel" />
      <button className='boton' onClick={goToNextImage}><div className='flechaDerecha'></div></button>
    </div>
  );
};

export default Carousel;
