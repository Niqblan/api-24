import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MovieFilters() {
  const router = useRouter();
  const [selectedGenre, setSelectedGenre] = useState('');

  const generos = [
    { id: 878, nombre: "Ciencia Ficción" },
    { id: 16, nombre: "Animadas" },
    { id: 12, nombre: "Aventura" },
    { id: 35, nombre: "Comedia" },
    { id: 27, nombre: "Terror" },
    { id: 53, nombre: "Suspenso" },
    { id: 18, nombre: "Drama" },
    { id: 99, nombre: "Documentales" },
    { id: 36, nombre: "Historia" },
    { id: 10402, nombre: "Musicales" },
    { id: 37, nombre: "Cowboys" },
    { id: 14, nombre: "Fantasía" },
    { id: 10752, nombre: "Guerra" },
    { id: 80, nombre: "Crimen" },
    { id: 10749, nombre: "Romance" },
  ];

  const handleChange = (event) => {
    const selectedGenreId = event.target.value;
    setSelectedGenre(selectedGenreId);
    router.push(`/generos/${selectedGenreId}`);
  };

  return (
    <div className='select-container' >
      <select value={selectedGenre} onChange={handleChange} className="selectH" style={{ cursor: 'pointer' }}>
        <option value="" disabled hidden>Seleccionar Género</option>
        {generos.map((genero) => (
          <option className="border-radius-sm " key={genero.id} value={genero.id}>{genero.nombre}</option>
        ))}
      </select>
    </div>
  );
};
