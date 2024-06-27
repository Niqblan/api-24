import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function ActorCarousel({ movieId }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5db3f946279d2d0bc22ef0c02f471fa8`);
        const data = await response.json();
        setActors(data.cast);
      } catch (error) {
        console.error('Error fetching actors:', error);
      }
    };

    fetchActors();
  }, [movieId]);

  return (
    <div className="mt-7 w-full h-auto max-w-full">
      <p className="text-xl font-bold mb-4">Reparto</p>
      <Swiper
        navigation
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        style={{
          "--swiper-navigation-color": "#0c7ee9",
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-size": "20px",
          "--swiper-navigation-top-offset": "40%",
          "--swiper-navigation-sides-offset": "10px"
        }}
      >
        {actors.map((actor) => (
          <SwiperSlide key={actor.id}>
            <div className="text-center w-20 h-auto">
              <img
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={actor.name}
                className="w-full h-auto rounded"
              />
              <p className="mt-2 text-xs">{actor.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ActorCarousel;


