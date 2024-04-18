import React from 'react';


export default function Header(){
    return(

    <div className="bg-black w-full py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold" style={{ backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Esto Es Cine</h1>
    
      <div className='flex gap-4'>
        <a href='./signIn' className='text-white' > Inicia Sesión! </a>
        <a href='./signUp' className='text-white' > Registrate! </a>
      </div>
      
    </div>

)
}