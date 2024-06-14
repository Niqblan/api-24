"use client"
import React, { useContext, useState } from 'react';
import './SliderComponent.css';
import MovieFilters from './MovieFilters';
import { useRouter } from 'next/navigation';
import { Context } from '@/context/Context';


export default function Header() {

  const router = useRouter()
  const { logged, user }=useContext(Context)

  return (
    <div className="bg-black w-full py-4 px-4 flex flex-wrap items-center justify-between fixed z-[99] top-0 ">
      <p onClick={()=>router.push("/")} className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{cursor: 'pointer' , backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Esto Es Cine</p>
      <div className='flex gap-8 items-center'>
      {logged && <p onClick={()=>router.push("../miLista")} className="text-[#8f928f]" style={{cursor: 'pointer' }}>Mi Lista</p>}
        <MovieFilters />
        
      </div>
      {!logged ? (
        <div className="flex justify-end gap-2">
          <p onClick={()=>router.push("../signIn")} className="botonH" style={{cursor: 'pointer'}}>Inicia Sesión</p>
          <p onClick={()=>router.push("../signUp")} className="botonH2" style={{cursor: 'pointer'}}>Regístrate</p>
        </div>
      ) : (
        <div className='flex items-center gap-4'>
          <h2 className='text-[#8f928f]'>{user?.userName}</h2>
          <svg className="h-5 w-5 text-[#8f928f]" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <circle cx="12" cy="7" r="4" />  
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg> 
          <p onClick={()=>router.push("../signIn")} className="botonH3" style={{cursor: 'pointer'}}>Cerrar Sesión</p>
        </div>
      )}
    </div>
  );
  
}

