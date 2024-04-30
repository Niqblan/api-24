'use client';
import React from 'react';
import SliderComponent from "@/components/SliderComponent";
import './globals.css';
import { register } from "swiper/element/bundle";
import Header from '@/components/Header';
import MovieSearch from '@/components/MovieSearch';
import { useRouter } from 'next/navigation';
register();




export default function Home() {

  const router = useRouter();

  return (
    <div className="flex flex-col w-full" >
      <Header />
      <MovieSearch />
    <div className="h-[1400px] flex flex-col justify-center gap-[60px] text-white" style={{ marginLeft: '5px', marginTop: '1350px'}}>
      <div className='flex flex-col gap-2 h-[200px] px-8 ' >
        <h1 className="titulo">Nuevos & Populares</h1>
        <SliderComponent genre={28} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8 '>
        <h1 onClick={()=>router.push(`generos/${878}`)} className="titulo max-w-fit" style={{ cursor: 'pointer' }}>Ciencia Ficción</h1>
        <SliderComponent genre={878} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Animadas</h1>
        <SliderComponent genre={16}/>
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Aventura</h1>
        <SliderComponent genre={12}/>
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Comedia</h1>
        <SliderComponent genre={35}/>
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Terror</h1>
        <SliderComponent genre={27} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Suspenso</h1>
        <SliderComponent genre={53} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Drama</h1>
        <SliderComponent genre={18} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Documental</h1>
        <SliderComponent genre={99} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Historia</h1>
        <SliderComponent genre={36} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Musical</h1>
        <SliderComponent genre={10402} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Cowboys</h1>
        <SliderComponent genre={37} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Fantasía</h1>
        <SliderComponent genre={14} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Guerra</h1>
        <SliderComponent genre={10752} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Crimen</h1>
        <SliderComponent genre={80} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo max-w-fit">Romance</h1>
        <SliderComponent genre={10749}/>
      </div>
    </div>  
  </div>
);
}
