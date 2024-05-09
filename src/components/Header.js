"use client"
import React, { useState } from 'react';
import './SliderComponent.css';
import MovieFilters from './MovieFilters';
import { useRouter } from 'next/navigation';


export default function Header() {

  const router = useRouter()

  return (
    <div className="bg-black w-full py-4 px-4 flex items-center justify-between fixed z-[99] top-0 ">
      <p onClick={()=>router.push("/")} className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{cursor: 'pointer' , backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Esto Es Cine</p>
      <MovieFilters />
      
      <div className="flex justify-end gap-2">
        <p onClick={()=>router.push("../signIn")} className="botonH" style={{cursor: 'pointer'}}>Inicia Sesión</p>
        <p onClick={()=>router.push("../signUp")} className="botonH2" style={{cursor: 'pointer'}}>Regístrate</p>
      </div>
    </div>
  );
}

