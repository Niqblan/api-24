
import { useState } from 'react';
import React from 'react'; 
import './SliderComponent.css';
import './MovieSearch.css';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  
  const handleSearch = async () => {
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

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 2) { // Realizar la búsqueda solo si el término tiene más de 2 caracteres
      handleSearch();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className="flex justify-center mb-4 px-1" style={{ marginTop: '100px', marginBottom: '70px'}}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Busca una pelicula..."
          className="field2"
        />
        <button type="submit" className="bg-gradient-to-r from-green-500 to-indigo-600 text-black hover:bg-white hover:text-black hover:rounded-xl rounded-xl px-3 py-1 mx-2">
          Buscar
        </button>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="carta">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover object-center"
            />
              <div className="p-6">
                <h2 className="titulo2">{movie.title}</h2>
                <div class="checkbox-wrapper">
                  <label class="toggleButton">
                    <input type="checkbox" />
                    <div>
                      <svg viewBox="0 0 44 44">
                        <path transform="translate(-2.000000, -2.000000)" d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"></path>
                      </svg>
                    </div>
                  </label>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;