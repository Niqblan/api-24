import React from 'react';


export default function Header(){
    return(

    <div className="bg-black w-full py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold" style={{ backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Esto Es Cine</h1>
    
      <div>
        <a href='./signIn' className='text-white hover:bg-white hover:text-black hover:rounded-xl px-3 py-1 ' > Inicia Sesión! </a>
        <a href='./signUp' className='text-white hover:bg-white hover:text-black hover:rounded-xl px-3 py-1  ' > Registrate! </a>
      </div>
      
    </div>

)
}