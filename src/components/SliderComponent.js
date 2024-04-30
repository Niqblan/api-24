'use client';
import React, { useState, useEffect } from 'react';
import './SliderComponent.css';

function SliderComponent({ genre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&language=en&api_key=5db3f946279d2d0bc22ef0c02f471fa8`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [genre]);

  return (
    <div className='container2'>
      <swiper-container loop={true} space-between='4' slides-per-view="6"
        navigation="true"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-size": "30px",
          "--swiper-navigation-top-offset": "50%",
          "--swiper-navigation-sides-offset": "10px",
          "--swiper-navigation-color": "var(--swiper-theme-color)"
        }}>
        {movies.map(movie => (
          <swiper-slide key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>

    
  );
}

export default SliderComponent;