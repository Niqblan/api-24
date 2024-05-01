
import React, { useState } from 'react';
import './SliderComponent.css';
import './MovieSearch.css';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5db3f946279d2d0bc22ef0c02f471fa8&query=${searchTerm}` 
      );

      const data = await response.json();
      setFilteredMovies(data.results);
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    if (searchTerm.length > 1) { 
      handleSearch(searchTerm);
    } else {
      setFilteredMovies([]); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center mb-4 px-1 gap-1" style={{ marginTop: '100px', marginBottom: '70px'}}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Busca una película..."
          className="field2"
        />
        <button type="submit" class="buscar">
          <span>
            <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"></path></svg>
          </span>
      </button>
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
                <label className="toggleButton">
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
