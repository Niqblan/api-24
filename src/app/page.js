'use client';
import React from 'react';
import SliderComponent from "@/components/SliderComponent";
import './globals.css';
import { register } from "swiper/element/bundle";
import Header from '@/components/Header';
import MovieSearch from '@/components/MovieSearch';
register();




export default function Home() {
  return (
    <div className="flex flex-col w-full" >
      <Header />
      <MovieSearch />
    <div className="h-[1400px] flex flex-col justify-center gap-10 text-white" style={{ marginLeft: '5px', marginTop: '270px'}}>
      <div className='flex flex-col gap-2 h-[200px] px-8 ' >
        <h1 className="titulo">Nuevos & Populares</h1>
        <SliderComponent genre={28} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8 '>
        <h1 className="titulo">Ciencia Ficción</h1>
        <SliderComponent genre={878} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo">Animadas</h1>
        <SliderComponent genre={16}/>
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo">Terror y Suspenso</h1>
        <SliderComponent genre={27} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo">Thriller</h1>
        <SliderComponent genre={53} />
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo">Comedia</h1>
        <SliderComponent genre={35}/>
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo">Romance</h1>
        <SliderComponent genre={10749}/>
      </div>
      <div className='flex flex-col gap-2 h-[200px] px-8'>
        <h1 className="titulo">Drama</h1>
        <SliderComponent genre={18} />
      </div>
    </div>
  </div>
);
}
