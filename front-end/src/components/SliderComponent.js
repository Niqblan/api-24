'use client';
import React, { useState, useEffect } from 'react';
import './SliderComponent.css';
import { useRouter } from 'next/navigation';

function SliderComponent({ genre }) {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

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
      breakpoints={JSON.stringify({400: { slidesPerView: 1, spaceBetween:4 }, 640: { slidesPerView: 2, spaceBetween:4 }, 768: { slidesPerView: 4, spaceBetween:4}, 1024: { slidesPerView: 5, spaceBetween:4}, 1280: { slidesPerView: 6, spaceBetween:4},})}
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
          <swiper-slide key={movie.id} onClick={()=>router.push(`movies/${movie.id}`)} style={{ cursor: 'pointer' }} >
            <img className='object-cover' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>

    
  );
}

export default SliderComponent;