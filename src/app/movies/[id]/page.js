'use client'
import React, { useState, useEffect } from 'react';
import { useParams } from "next/navigation";

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en&api_key=5db3f946279d2d0bc22ef0c02f471fa8`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  /*HACER ESTILOS*/
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="w-full h-64 object-cover object-center"></img>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <p>Fecha de Lanzamiento: {movieDetails.release_date}</p>
          <p>Duracion: {movieDetails.runtime} minutos</p>
      </div>
    </div>
  );
}

export default MovieDetails;
