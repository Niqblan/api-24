'use client';
import React from 'react';
import SliderComponent from "@/components/SliderComponent";
import './globals.css';
import { register } from "swiper/element/bundle";
register();


export default function Home() {
  return (
    <div className="flex flex-col w-full">
    <div className="bg-black w-full py-4 px-6 flex items-center justify-between">
    <h1 className="text-2xl font-bold" style={{ backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Esto Es Cine</h1>
    </div>
    <div className="h-[1500px] flex flex-col justify-center gap-10 text-white" style={{ marginLeft: '5px', marginTop: '130px'}}>
      <div className='flex flex-col gap-2 h-[200px] w-full'>
        <h1 className="titulo">Pelis</h1>
        <SliderComponent />
      </div>
      <div className='flex flex-col gap-2 h-[200px] w-full'>
        <h1 className="titulo">Pelis</h1>
        <SliderComponent />
      </div>
      <div className='flex flex-col gap-2 h-[200px] w-full'>
        <h1 className="titulo">Pelis</h1>
        <SliderComponent />
      </div>
      <div className='flex flex-col gap-2 h-[200px] w-full'>
        <h1 className="titulo">Pelis</h1>
        <SliderComponent />
      </div>
    </div>
  </div>
);
}
