'use client';
import React from 'react';
import SliderComponent from "@/components/SliderComponent";
import './globals.css';
import { register } from "swiper/element/bundle";
register();


export default function Home() {
  return (
    <div className="h-[1500px] flex flex-col justify-center gap-10 text-white "style={{ marginLeft: '5px'}}>
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
