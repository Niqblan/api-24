"use client"
import React, { useState } from 'react';
import './styles.css';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar el correo electrónico

    // Simulando el envío del correo, cambia el estado para mostrar la alerta
    setEmailSent(true);
  };

  return (
    <div className="container h-full">
      <a href='./signIn' className="back-button">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      <div className="card">
        <div className="card2">
          <form className="form" onSubmit={handleSubmit}>
            <p id="heading">Restablecer Contraseña</p>
            <p className="message">Ingresá el mail con el que te registraste y te enviaremos un correo para recuperar tu cuenta</p>
            <div className="field">
              <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="input-icon">
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input type="text" className="input-field" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="btn">
              <button type="submit" className="button1">Enviar correo</button>
            </div>
          </form>
          {emailSent && (
            <div className="alert px-3">
              Correo enviado correctamente
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
