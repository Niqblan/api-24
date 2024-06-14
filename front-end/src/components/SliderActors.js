import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './SliderActors.css';

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
    <div className="actor-carousel mt-7">
      <p className="reparto">Reparto</p>
      <Swiper
        navigation
        loop={true}
        spaceBetween={10}
        slidesPerView={4} // Default slides per view
        breakpoints={{
          // When window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // When window width is >= 992px
          992: {
            slidesPerView: 3,
          },
          // When window width is >= 1200px
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
            <div className="actor-slide">
              <img
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={actor.name}
                className="actor-image"
              />
              <p>{actor.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ActorCarousel;


