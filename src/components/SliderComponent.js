'use client';
import React from 'react';
import './SliderComponent.css'

  function SliderComponent() {
    
  return(
  <div className='container2'>
    <swiper-container loop={true} space-between='4' slides-per-view="5"
        navigation="true"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}>
      <swiper-slide>slide1</swiper-slide>
      <swiper-slide>slide</swiper-slide>
      <swiper-slide>slide</swiper-slide>
      <swiper-slide>slide</swiper-slide>
      <swiper-slide>slide</swiper-slide>
      <swiper-slide>slide</swiper-slide>
      <swiper-slide>slide</swiper-slide>
      <swiper-slide>slide</swiper-slide>
      <swiper-slide>slide</swiper-slide>
      <swiper-slide>slide</swiper-slide>
      <swiper-slide>slide</swiper-slide>
      <swiper-slide>slide</swiper-slide>
      <swiper-slide>slide13</swiper-slide>
      
    </swiper-container>
  </div>
  )}

export default SliderComponent;