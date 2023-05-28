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
      <div className='text-overlay'>
        <p>La imprudencia e insensatez de la humanidad han llevado a la destrucción de los ecosistemas, al aumento desmedido de las temperaturas y a eventos climáticos extremos que amenazan nuestras vidas. Nuestra indiferencia hacia el futuro de nuestro hogar común es un acto de traición hacia la vida misma. Es hora de reconocer nuestros errores y asumir la responsabilidad de enmendarlos. El tiempo se agota y cada acción cuenta. ¡Despertad y actuar con urgencia antes de que sea demasiado tarde!</p>
      </div>
      <button className='boton' onClick={goToNextImage}><div className='flechaDerecha'></div></button>
    </div>
  );
};

export default Carousel;
