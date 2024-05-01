import React, { useState } from 'react';
import './SliderComponent.css';
import MovieFilters from './MovieFilters';

export default function Header() {
  const [filteredGenre, setFilteredGenre] = useState('');

  const handleApplyFilters = (filters) => {
    // Actualizar el estado del género filtrado
    setFilteredGenre(filters.genre);
  };

  return (
    <div className="bg-black w-full py-6 px-6 flex flex-wrap items-center justify-between">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{ backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Esto Es Cine</h1>
      <MovieFilters onApplyFilters={handleApplyFilters} />
      
      <div className="flex flex-wrap justify-end gap-2">
        <a href='./signIn' className="botonH">Inicia Sesión</a>
        <a href='./signUp' className="botonH2">Regístrate</a>
      </div>
    </div>
  );
}

