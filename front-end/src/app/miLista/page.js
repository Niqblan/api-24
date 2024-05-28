"use client";
import './style.css';
import React, { useEffect, useState } from "react";

function Watchlist() {
  const [watchList, setWatchList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [watched, setWatched] = useState([]);
  const [activeList, setActiveList] = useState('watchList');
  const [listsVisible, setListsVisible] = useState(true); 

  const films = [1011985, 550, 27205, 157336, 324857, 299534, 122, 272, 389, 13, 128, 429, 500, 769, 854];

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

  const renderList = (list, setList, additionalButtons = []) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {list.length > 0 &&
        list.map((film) => (
          <div key={film.id} className="carta1">
            <img
              src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
              alt={film.title}
              className="w-full h-[350px] object-center"
            />
            <h2 className="peli">{film.title}</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {additionalButtons.map((button) => (
                <button
                  key={button.label}
                  className="text-gray-400 flex-1"
                  onClick={() => button.onClick(film)}
                >
                  {button.label}
                </button>
              ))}
            </div>
            <button className="text-red-500 flex-1 mt-3" onClick={() => removeFromList(setList, film)}>Eliminar</button>
          </div>
        ))}
    </div>
  );

  const showLists = () => {
    setListsVisible(true);
  };

  return (
    <div className="flex flex-col w-full min-h-screen pt-16 items-center">
      <div className="flex flex-wrap gap-2 mb-4 mt-14">
        <button
          className={`button1 ${activeList === 'watchList' ? 'active' : ''}`}
          onClick={() => { setActiveList('watchList'); showLists(); }}
        >
          Quiero Ver
        </button>
        <button
          className={`button2 ${activeList === 'favorites' ? 'active' : ''}`}
          onClick={() => { setActiveList('favorites'); showLists(); }}
        >
          Favoritos
        </button>
        <button
          className={`button3 ${activeList === 'watched' ? 'active' : ''}`}
          onClick={() => { setActiveList('watched'); showLists(); }}
        >
          Vistas
        </button>
      </div>
      {listsVisible && (
        <div className="flex flex-col items-center gap-4 w-full">
          {activeList === 'watchList' &&
            renderList(watchList, setWatchList, [
              { label: 'Mover a Favoritos', onClick: moveToFavorites },
              { label: 'Mover a Vistas', onClick: moveToWatched }
            ])}
          {activeList === 'favorites' &&
            renderList(favorites, setFavorites, [
              { label: 'Mover a Vistas', onClick: moveToWatched },
            ])}
          {activeList === 'watched' &&
            renderList(watched, setWatched)}
        </div>
      )}
    </div>
  );
}

export default Watchlist;

