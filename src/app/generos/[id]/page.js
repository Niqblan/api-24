'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from "next/navigation";

function FiltradoPorGenero({ genre }) {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&language=en&api_key=5db3f946279d2d0bc22ef0c02f471fa8`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
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
  );
}

export default FiltradoPorGenero;
