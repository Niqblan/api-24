'use client';
import './style.css';
import React, { useEffect, useState, useContext } from "react";
import { Context } from '@/context/Context';

function MyList() {
  const { user, logged, addToFavorites, removeFromList, addToWatched, watchList, setWatchList, favorites, setFavorites, watched, setWatched } = useContext(Context);
  const [activeList, setActiveList] = useState('watchList');

  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en&api_key=5db3f946279d2d0bc22ef0c02f471fa8`);
      if (!response.ok) throw new Error('Failed to fetch movie details');
      return await response.json();
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (logged) {
        const fetchDetails = async (list) => {
          const details = await Promise.all(list.map(id => fetchMovieDetails(id)));
          return details.filter(film => film !== null);
        };
        setWatchList(await fetchDetails(user.watchList || []));
        setFavorites(await fetchDetails(user.favorites || []));
        setWatched(await fetchDetails(user.watched || []));
      }
    };
    fetchData();
  }, [logged, user]);
  

  const moveToFavorites = (film) => {
    addToFavorites(film.id);
    setFavorites(prevFavorites => [...prevFavorites, film]);
    removeFromList('watchList', film.id);
    setWatchList(prev => prev.filter(item => item.id !== film.id));
    
  };
  
  const moveToWatched = (film) => {
    addToWatched(film.id);
    if (activeList === 'favorites') {
      removeFromList(activeList, film.id);
      setFavorites(prev => prev.filter(item => item.id !== film.id));
    } else {
      removeFromList(activeList, film.id);
      setWatchList(prev => prev.filter(item => item.id !== film.id));
    }
    setWatched(prev => [...prev, film]);
  };

  const handleRemoveFromList = async (film) => {
    if (activeList === 'watchList') {
      setWatchList(prev => prev.filter(item => item.id !== film.id));
    } else if (activeList === 'favorites') {
      setFavorites(prev => prev.filter(item => item.id !== film.id));
    } else if (activeList === 'watched') {
      setWatched(prev => prev.filter(item => item.id !== film.id));
    }
    removeFromList(activeList, film.id);
  };

  const renderList = (list) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 mb-20">
      {list.map((film) => (
        <div key={film.id} className="carta1">
          <img
            src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
            alt={film.title}
            className="w-full min-h-fit object-center"
          />
          <h2 className="peli">{film.title}</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {activeList === 'watchList' && (
              <>
                <button
                  className="text-gray-400 flex-1"
                  onClick={() => moveToFavorites(film)}
                >
                  Mover a Favoritos
                </button>
                <button
                  className="text-gray-400 flex-1"
                  onClick={() => moveToWatched(film)}
                >
                  Mover a Vistas
                </button>
              </>
            )}
            {activeList === 'favorites' && (
              <button
                className="text-gray-400 flex-1"
                onClick={() => moveToWatched(film)}
              >
                Mover a Vistas
              </button>
            )}
          </div>
          <button className="text-red-500 flex-1 mt-3" onClick={() => handleRemoveFromList(film)}>Eliminar</button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col w-full h-4/5 items-center">
      <div className="flex flex-wrap gap-2 mb-4 mt-16">
        <button
          className={`btn1 ${activeList === 'watchList' ? 'active' : ''}`}
          onClick={() => setActiveList('watchList')}
        >
          Quiero Ver
        </button>
        <button
          className={`btn1 ${activeList === 'favorites' ? 'active' : ''}`}
          onClick={() => setActiveList('favorites')}
        >
          Favoritos
        </button>
        <button
          className={`btn2 ${activeList === 'watched' ? 'active' : ''}`}
          onClick={() => setActiveList('watched')}
        >
          Vistas
        </button>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        {activeList === 'watchList' && renderList(watchList)}
        {activeList === 'favorites' && renderList(favorites)}
        {activeList === 'watched' && renderList(watched)}
      </div>
    </div>
  );
}

export default MyList;





