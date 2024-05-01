import { useState, useEffect } from 'react';

const MovieFilters = ({ onApplyFilters }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    // Obtener lista de géneros desde la API de TMDb
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=5db3f946279d2d0bc22ef0c02f471fa8`
      );
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error('Error al obtener la lista de géneros:', error);
    }
  };



  return (
    <div>
      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">Selecciona un género</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
      
    </div>
  );
};

export default MovieFilters;
