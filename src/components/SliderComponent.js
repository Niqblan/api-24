'use client';
import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './SliderComponent.css'; 

const SliderComponent = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    // Inicializar Flickity cuando el componente se monta
    flickityRef.current = new Flickity('.carousel', {
      // Opciones de configuración de Flickity
      wrapAround: true,
      autoPlay: 1000, 
      pauseAutoPlayOnHover: false,
      freeScroll: true,
    });

    // Importante: destruir Flickity cuando el componente se desmonta
    return () => flickityRef.current.destroy();
  }, []);

  return (
    <div className="carousel">
      {[...Array(12)].map((_, index) => (
        <div className="carousel-cell" key={index}>
          <div className="gray-square"></div>
          <p>Slide {index + 1}</p>
        </div>
      ))}
    </div>
  );
}

export default SliderComponent;

