'use client';
import React from 'react';
import SliderComponent from "@/components/SliderComponent";
import './globals.css';
import { register } from "swiper/element/bundle";
import MovieSearch from '@/components/MovieSearch';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
register();




export default function Home() {

  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-fit" >
      <Header/>
      <div className="flex flex-col gap-[4em] text-white" >
      <MovieSearch />
      <div className='flex flex-col gap-2 h-auto px-8 ' >
        <h1 className="titulo">Nuevos & Populares</h1>
        <SliderComponent genre={28} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8 '>
        <h1 onClick={()=>router.push(`generos/${878}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Ciencia Ficción</h1>
        <SliderComponent genre={878} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${16}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Animadas</h1>
        <SliderComponent genre={16}/>
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${12}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Aventura</h1>
        <SliderComponent genre={12}/>
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${35}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Comedia</h1>
        <SliderComponent genre={35}/>
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${27}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Terror</h1>
        <SliderComponent genre={27} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${53}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Suspenso</h1>
        <SliderComponent genre={53} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${18}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Drama</h1>
        <SliderComponent genre={18} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${99}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Documentales</h1>
        <SliderComponent genre={99} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${36}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Historia</h1>
        <SliderComponent genre={36} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${10402}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Musicales</h1>
        <SliderComponent genre={10402} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${37}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Cowboys</h1>
        <SliderComponent genre={37} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${14}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Fantasía</h1>
        <SliderComponent genre={14} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${10752}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Guerra</h1>
        <SliderComponent genre={10752} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${80}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Crimen</h1>
        <SliderComponent genre={80} />
      </div>
      <div className='flex flex-col gap-2 h-auto px-8'>
        <h1 onClick={()=>router.push(`generos/${10749}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Romance</h1>
        <SliderComponent genre={10749}/>
      </div>
    </div>  
    <footer
      className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left mt-20">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2024 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tw-elements.com/"
        > Esto Es Cine Argentina</a>
      </div>
    </footer>
  </div>
);
}
