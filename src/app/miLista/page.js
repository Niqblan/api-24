"use client";
import React, { useEffect, useState } from "react";

function Watchlist() {
  const [watchList, setWatchList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [watched, setWatched] = useState([]);

  const films = [1011985];

  // Función para buscar y agregar video a la lista de espera
  async function searchVideo(id) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmJkMWYyODI1ZGQ1Zjc0ZjAxYWI2MzYwZmY2ZmFhNSIsInN1YiI6IjYyYjI1MmM2NzUxMTBkMDA1MDllYWRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4bS5LtZJr43TsfGTyi-ykQ1W5Lt1sc77t3pXcsHOX1Y",
      },
    };
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&video=true&append_to_response=videos&include_video=true`,
        options
      );
      const data = await response.json();
      setWatchList((prevWatchList) => [...prevWatchList, data]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    films.forEach((f) => searchVideo(f));
  }, []);


  const moveToFavorites = (film) => {
    setFavorites((prevFavorites) => [...prevFavorites, film]);
    setWatchList((prevWatchList) => prevWatchList.filter((item) => item.id !== film.id));
  };


  const moveToWatched = (film) => {
    setWatched((prevWatched) => [...prevWatched, film]);
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== film.id));
    setWatchList((prevWatchList) => prevWatchList.filter((item) => item.id !== film.id));
  };

  const removeFromList = (list, film) => {
    list((prevList) => prevList.filter((item) => item.id !== film.id));
  };

  return (
    <div className="flex w-[100vw] min-h-[100vh] pt-[20vh] justify-center gap-[30em]">
      <div className="flex flex-col h-3  items-center gap-4">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative" style={{backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Quiero Ver</h1>
        <div className="flex flex-col gap-4">
          {watchList.length > 0 &&
            watchList.map((film) => (
              <div key={film.id} className="flex flex-col items-center gap-2">
                <img
                  src={`https://image.tmdb.org/t/p/w300${film.backdrop_path}`}
                  alt={film.title}
                  className="rounded-md hover:scale-[1.03] hover:opacity-30 duration-300 "
                />
                <h2 className="text-white">{film.title}</h2>
                <button className="text-gray-400" onClick={() => moveToWatched(film)}>Mover a Vistas</button>
                <button className="text-gray-400" onClick={() => moveToFavorites(film)}>Mover a favoritas</button>
                <button className="text-red-500" onClick={() => removeFromList(setWatchList, film)}>Eliminar</button>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Favoritos</h1>
        <div className="flex flex-col gap-4">
          {favorites.length > 0 &&
            favorites.map((film) => (
              <div key={film.id} className="flex flex-col items-center gap-2">
                <img
                  src={`https://image.tmdb.org/t/p/w300${film.backdrop_path}`}
                  alt={film.title}
                  className="rounded-md hover:scale-[1.03] hover:opacity-30 duration-300 "
                />
                <h2 className="text-white">{film.title}</h2>
                <button className="text-gray-400" onClick={() => moveToWatched(film)}>Mover a Vistas</button>
                <button className="text-red-500" onClick={() => removeFromList(setFavorites, film)}>Eliminar</button>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Vistas</h1>
        <div className="flex flex-col gap-4">
          {watched.length > 0 &&
            watched.map((film) => (
              <div key={film.id} className="flex flex-col items-center gap-2">
                <img
                  src={`https://image.tmdb.org/t/p/w300${film.backdrop_path}`}
                  alt={film.title}
                  className="rounded-md hover:scale-[1.03] hover:opacity-30 duration-300 "
                />
                <h2 className="text-white">{film.title}</h2>
                <button className="text-red-500" onClick={() => removeFromList(setWatched, film)}>Eliminar</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;

