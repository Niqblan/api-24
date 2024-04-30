import React, { useState } from 'react';
import './SliderComponent.css';
import MovieSearch from './MovieSearch';
import MovieFilters from './MovieFilters';


export default function Header() {
  const [filteredGenre, setFilteredGenre] = useState('');

  const handleApplyFilters = (filters) => {
    // Actualizar el estado del género filtrado
    setFilteredGenre(filters.genre);
  };

  return (
    <div className="bg-black w-full py-6 px-6 flex items-center justify-between ">
      <h1 className=" font-bold" style={{ backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '27px', lineHeight: '33px' }}>Esto Es Cine</h1>
      <MovieFilters onApplyFilters={handleApplyFilters} />
      
      <div>
        <a href='./signIn' className=" bg-gradient-to-r from-green-500 to-indigo-600 text-black hover:bg-white hover:text-black hover:rounded-xl rounded-xl px-3 py-2 mx-2">Inicia Sesión!</a>
        <a href='./signUp' className=" bg-gradient-to-r from-green-500 to-indigo-600 text-black hover:bg-white hover:text-black hover:rounded-xl rounded-xl px-3 py-2 mx-2">Registrate!</a>
      </div>
    </div>
  );
}
