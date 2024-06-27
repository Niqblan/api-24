"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState  } from 'react'

export default function SliderElement({movie}) {


  const [titlePath, setTitlePath] = useState(null);
  const router = useRouter();

  async function searchTitle() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGIzZjk0NjI3OWQyZDBiYzIyZWYwYzAyZjQ3MWZhOCIsInN1YiI6IjY2MWRhNmI1NmQ5ZmU4MDE3ZDVmOWQ1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GkW4Z2lzuMQNdfYs9MFnK6jHGpsiQldRDiN5WGA8OSQ",
      },
    };
    await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/images`,

      options
    )
      .then((response) => response.json())
      .then((response) => {
        setTitlePath(
          response.logos.find((title) => title.iso_639_1 === "en").file_path
        );
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    searchTitle();
  }, []);

  return (
    <swiper-slide
      lazy="true"
      className="cursor-pointer"
        onClick={() => router.push(`/movies/${movie.id}`)}
        style={{ cursor: 'pointer' }}
    >
      <div className="h-full group ">
        <div className="relative bg-black rounded-sm">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt=""
            className="w-auto sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px] opacity-70 object-cover mx-1 relative "
          />
          <img
            src={`https://image.tmdb.org/t/p/original/${titlePath}`}
            alt=""
            className="w-full absolute z-40 top-0 h-full object-contain px-10 py-4"
          />
        </div>
      </div>
    </swiper-slide>
  )
}
