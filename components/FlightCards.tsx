'use client';

import { useState } from 'react';

export default function FlightCards() {
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        
        {/* NEW YORK CARD */}
        <div className="bg-white rounded-[50px] p-6 shadow-2xl w-full max-w-[320px]">
          <div className="relative h-[580px] rounded-[40px] overflow-hidden">
            {/* Imagen de fondo que cubre toda la card */}
            <img 
              src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80" 
              alt="New York"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            
            {/* Degradado blur de abajo hacia arriba */}
            <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            {/* Icono corazón arriba a la derecha */}
            <button
              onClick={() => setLiked1(!liked1)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center"
            >
              <svg
                className={`w-5 h-5 ${liked1 ? 'fill-red-500' : 'fill-white'}`}
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>

            {/* Contenido sobre la imagen */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-white text-4xl font-bold mb-1">New York</h2>
              <p className="text-gray-300 text-sm mb-4">Economy</p>
              
              {/* Iconos de precio y aeropuerto */}
              <div className="flex items-center gap-4 text-white text-sm mb-5">
                <div className="flex items-center gap-1">
                  {/* Icono etiqueta precio */}
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
                  </svg>
                  <span>from $120</span>
                </div>
                <div className="flex items-center gap-1">
                  {/* Icono avión */}
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                  <span>JFK</span>
                </div>
              </div>

              {/* Botón Search flight */}
              <button className="w-full bg-white text-gray-800 font-semibold py-3 rounded-full">
                Search flight
              </button>
            </div>
          </div>
        </div>

        {/* SAN FRANCISCO CARD */}
        <div className="bg-white rounded-[50px] p-6 shadow-2xl w-full max-w-[320px] h-[640px] flex flex-col">
          {/* Imagen con bordes redondeados más grande */}
          <div className="rounded-[40px] overflow-hidden mb-4 flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80" 
              alt="San Francisco"
              className="w-full h-[360px] object-cover"
            />
          </div>

          {/* Contenido centrado sin espacios */}
          <div className="flex-1 flex flex-col justify-center px-4">
            <h2 className="text-gray-900 text-4xl font-bold mb-1">San Francisco</h2>
            <p className="text-gray-400 text-sm mb-4">Premium economy</p>
            
            {/* Iconos de precio y aeropuerto */}
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-5">
              <div className="flex items-center gap-1">
                {/* Icono etiqueta precio */}
                <svg className="w-4 h-4 fill-gray-500" viewBox="0 0 24 24">
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
                </svg>
                <span>from $240</span>
              </div>
              <div className="flex items-center gap-1">
                {/* Icono avión */}
                <svg className="w-4 h-4 fill-gray-500" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
                <span>SFO</span>
              </div>
            </div>

            {/* Botón Search flight con corazón */}
            <div className="flex items-center gap-3">
              <button className="flex-1 bg-black text-white font-semibold py-3 rounded-full">
                Search flight
              </button>
              <button
                onClick={() => setLiked2(!liked2)}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center"
              >
                <svg
                  className={`w-5 h-5 ${liked2 ? 'fill-red-500' : 'fill-gray-300'}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
