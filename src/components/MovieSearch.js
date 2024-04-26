
import { useState } from 'react';
import React from 'react'; 
import './SliderComponent.css';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5db3f946279d2d0bc22ef0c02f471fa8&query=${searchTerm}` 
        
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  };

  return (
    <div >
      <form onSubmit={handleSearch} className="flex mb-4" style={{ marginTop: '10px'}}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Busca una pelicula..."
          className="field"
        />
        <button type="submit" className= "bg-gradient-to-r from-green-500 to-indigo-600 text-black hover:bg-white hover:text-black hover:rounded-xl rounded-xl px-3 py-1 mx-2">
          Buscar
        </button>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-600 rounded-lg overflow-hidden shadow-md">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-gray-700">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
