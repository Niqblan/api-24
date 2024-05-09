"use client"
import React, { useState } from 'react';
import './SliderComponent.css';
import MovieFilters from './MovieFilters';

export default function Header() {

  return (
    <div className="bg-black w-full py-4 px-4 flex items-center justify-between fixed z-[99] top-0 ">
      <a href='../' className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{cursor: 'pointer' , backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Esto Es Cine</a>
      <MovieFilters />
      
      <div className="flex justify-end gap-2">
        <a href='./signIn' className="botonH">Inicia Sesión</a>
        <a href='./signUp' className="botonH2">Regístrate</a>
      </div>
    </div>
  );
}

