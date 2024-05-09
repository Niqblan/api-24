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
    <div className="container mx-auto px-4 py-8 max-w-full ">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20 ">
      {movies.map((movie) => (
        <div key={movie.id} className="carta">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-[350px] object-center"
          />
          <div className="p-6">
            <h2 className="titulo2">{movie.title}</h2>
            <div className="checkbox-wrapper">
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default FiltradoPorGenero;
