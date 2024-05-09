import React, { useState } from 'react';
import './SliderComponent.css';
import './MovieSearch.css';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchCriterio, setSearchCriterio] = useState('');

  const handleSearch = async (searchTerm, searchCriterio) => {
    try {
      let apiUrl = '';

      if (searchCriterio === 'actor') {
        // Búsqueda por actor
        apiUrl = `https://api.themoviedb.org/3/search/person?api_key=5db3f946279d2d0bc22ef0c02f471fa8&query=${searchTerm}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results.length > 0) {
          const actorId = data.results[0].id;
          apiUrl = `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=5db3f946279d2d0bc22ef0c02f471fa8`;
          const movieCreditsResponse = await fetch(apiUrl);
          const movieCreditsData = await movieCreditsResponse.json();
          setFilteredMovies(movieCreditsData.cast);
        } else {
          setFilteredMovies([]);
        }
      } else if (searchCriterio === 'year') {
        // Búsqueda por año de lanzamiento
        apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=5db3f946279d2d0bc22ef0c02f471fa8&year=${searchTerm}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setFilteredMovies(data.results);
      } else {
        // Búsqueda por título de película
        apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=5db3f946279d2d0bc22ef0c02f471fa8&query=${searchTerm}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setFilteredMovies(data.results);
      }
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    if (searchTerm.length > 1) {
      handleSearch(searchTerm, searchCriterio);
    } else {
      setFilteredMovies([]);
    }
  };

  const handleCriterioChange = (e) => {
    const selectedCriterio = e.target.value;
    setSearchCriterio(selectedCriterio);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm, searchCriterio);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-column justify-center mb-4 px-1 gap-1" style={{ marginTop: '150px', marginBottom: '70px'}}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Busca por..."
          className="field2"
        />
        <select value={searchCriterio} onChange={handleCriterioChange} className="field3">
          <option value="">Película</option>
          <option value="actor">Actor</option>
          <option value="year">Año</option> 
        </select>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="carta">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-6 flex gap-4">
              <h2 className="titulo2">{movie.title}</h2>
              <div className="checkbox-wrapper">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;

