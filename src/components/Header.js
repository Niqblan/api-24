import React from 'react';
import './SliderComponent.css'

export default function Header(){
    return(

    <div className="bg-black w-full py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold" style={{ backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Esto Es Cine</h1>
    
      <div>
      <a href='./signIn' className=" bg-gradient-to-r from-green-500 to-indigo-600 text-black hover:bg-white hover:text-black hover:rounded-xl rounded-xl px-3 py-1 mx-2">Inicia Sesión!</a>
      <a href='./signUp' className=" bg-gradient-to-r from-green-500 to-indigo-600 text-black hover:bg-white hover:text-black hover:rounded-xl rounded-xl px-3 py-1 mx-2">Registrate!</a>
    </div>
      
    </div>

)
}