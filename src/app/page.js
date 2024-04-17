'use client';
import React from 'react';
import SliderComponent from "@/components/SliderComponent";
import './globals.css';
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();


export default function Home() {
  return (
    <div className="h-[1200px] flex flex-col justify-center gap-10 bg-black text-white ">
      <div className='flex flex-col gap-2 h-[200px]'>
      <h1 className="titulo">Pelis</h1>
      <SliderComponent />
      </div>
      <div className='flex flex-col gap-2 h-[200px]'>
      <h1 className="titulo">Pelis</h1>
      <SliderComponent />
      </div>
      <div className='flex flex-col gap-2 h-[200px]'>
      <h1 className="titulo">Pelis</h1>
      <SliderComponent />
      </div>
      <div className='flex flex-col gap-2 h-[200px]'>
      <h1 className="titulo">Pelis</h1>
      <SliderComponent />
      </div>
    </div>


  )
}
