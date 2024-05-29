'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from "next/navigation";
import { BurgerSpin } from "react-burger-icons";


function FiltradoPorGenero({ genre }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&language=en&api_key=5db3f946279d2d0bc22ef0c02f471fa8`);
        const data = await response.json();
        setFilteredMovies(data.results.map(movie => ({ ...movie, isClosed: true }))); 
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [id]);

  const toggleIsClosed = (index) => {
    setFilteredMovies(prevState =>
      prevState.map((movie, i) =>
        i === index ? { ...movie, isClosed: !movie.isClosed } : movie
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-full h-full">
      <h1 className="text-3xl font-bold mb-8">{genre}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20">
        {filteredMovies.map((movie, index) => (
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
}

export default FiltradoPorGenero;

