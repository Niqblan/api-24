import React, { useState } from 'react';
import './SliderComponent.css';
import './MovieSearch.css';
import { BurgerSpin } from "react-burger-icons";
import { useRouter } from 'next/navigation';


const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchCriterio, setSearchCriterio] = useState('');
  const router = useRouter();

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
          setFilteredMovies(movieCreditsData.cast.map(movie => ({
            ...movie,
            isClosed: true // Añade el estado individual para cada película
          })));
        } else {
          setFilteredMovies([]);
        }
      } else if (searchCriterio === 'director') {
        // Búsqueda por director
        apiUrl = `https://api.themoviedb.org/3/search/person?api_key=5db3f946279d2d0bc22ef0c02f471fa8&query=${searchTerm}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results.length > 0) {
          const directorId = data.results[0].id;
          apiUrl = `https://api.themoviedb.org/3/person/${directorId}/movie_credits?api_key=5db3f946279d2d0bc22ef0c02f471fa8`;
          const movieCreditsResponse = await fetch(apiUrl);
          const movieCreditsData = await movieCreditsResponse.json();
          setFilteredMovies(movieCreditsData.crew.filter(movie => movie.department === "Directing").map(movie => ({
            ...movie,
            isClosed: true // Añade el estado individual para cada película
          })));
        } else {
          setFilteredMovies([]);
        }
      } else if (searchCriterio === 'year') {
        // Búsqueda por año de lanzamiento
        apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=5db3f946279d2d0bc22ef0c02f471fa8&year=${searchTerm}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setFilteredMovies(data.results.map(movie => ({
          ...movie,
          isClosed: true // Añade el estado individual para cada película
        })));
      } else {
        // Búsqueda por título de película
        apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=5db3f946279d2d0bc22ef0c02f471fa8&query=${searchTerm}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setFilteredMovies(data.results.map(movie => ({
          ...movie,
          isClosed: true // Añade el estado individual para cada película
        })));
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

  const toggleIsClosed = (index) => {
    setFilteredMovies(prevState =>
      prevState.map((movie, i) =>
        i === index ? { ...movie, isClosed: !movie.isClosed } : movie
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-column justify-center mb-4 px-1 gap-1" style={{ marginTop: '200px', marginBottom: '70px'}}>
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
          <option value="director">Director</option>
          <option value="year">Año</option> 
        </select>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMovies.map((movie, index) => (
          <div key={movie.id} className="carta">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[350px] object-center"
            />
            <div className="p-6 gap-4">
              <h2 className="titulo2">{movie.title}</h2>
              
            </div>
            <div className="flex items-center gap-16 justify-center">
                <svg
                    className="h-8 w-8 text-white "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={()=>router.push(`/movies/${movie.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <button
                    onClick={() => toggleIsClosed(index)}
                    style={{
                      width: "50px",
                      height: "50px",
                      display: "grid",
                      placeItems: "center",
                      color: "white",
                    }}
                  >
                    <BurgerSpin isClosed={movie.isClosed} />
                  </button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;



