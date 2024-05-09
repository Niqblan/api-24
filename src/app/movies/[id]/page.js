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

  const handleWatchTrailer = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5db3f946279d2d0bc22ef0c02f471fa8`);
      const data = await response.json();
      const trailer = data.results.find(video => video.type === "Trailer");
      if (trailer) {
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
      } else {
        console.error("Esta película no contiene trailer disponible.");
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const genres = movieDetails.genres.map(genre => genre.name).join(', ');

  return (
  <div className="flex justify-center h-[100vh] w-[100vw] py-24 ">
    <div className=" max-w-4xl p-6  bg-black rounded-lg shadow-lg text-white flex">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
        className="w-1/2 rounded-l-lg"
      />
      <div className='flex flex-col p-6 w-1/2'>
      <h1 className="text-xl font-bold mb-2 ">{movieDetails.title}</h1>
      <p className="mb-4">{movieDetails.overview}</p>
      <p>Fecha de Lanzamiento: {movieDetails.release_date}</p>
      <p>Duración: {movieDetails.runtime} minutos</p>
      <p>Género: {genres}</p>
      <button onClick={handleWatchTrailer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ">
            Ver Tráiler
      </button>
      </div>
    </div>
  </div>
);

}

export default MovieDetails;
