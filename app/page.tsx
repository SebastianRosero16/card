'use client';

import { useState } from 'react';

export default function Home() {
  const [likedNY, setLikedNY] = useState(false);
  const [likedSF, setLikedSF] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <div className="flex flex-wrap gap-12 justify-center">
        
        {/* Card 1 - New York */}
        <div className="w-80 h-[600px] bg-white rounded-[40px] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105">
          <div className="relative h-full rounded-[32px] overflow-hidden">
            {/* Imagen de fondo */}
            <img 
              src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=800&fit=crop" 
              alt="New York"
              className="w-full h-full object-cover"
            />
            
            {/* Degradado blur desde abajo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 via-45% to-transparent"></div>
            
            {/* Corazón con backdrop blur */}
            <button
              onClick={() => setLikedNY(!likedNY)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
            >
              <svg 
                className={`w-6 h-6 transition-all duration-200 ${likedNY ? 'fill-red-500 scale-110' : 'fill-none stroke-white stroke-2'}`}
                viewBox="0 0 24 24"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
            
            {/* Contenido */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-white text-4xl font-bold mb-1 drop-shadow-lg">New York</h2>
              <p className="text-gray-200 text-base mb-4 drop-shadow-md">Economy</p>
              
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                  </svg>
                  <span className="text-white text-base drop-shadow-md">from $120</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                  <span className="text-white text-base drop-shadow-md">JFK</span>
                </div>
              </div>
              
              <button className="w-full bg-white text-gray-800 py-3.5 rounded-full text-base font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95">
                Search flight
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - San Francisco */}
        <div className="w-80 h-[600px] bg-white rounded-[40px] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 flex flex-col">
          {/* Imagen */}
          <div className="flex-1 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop" 
              alt="San Francisco"
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>
          
          {/* Contenido */}
          <div className="px-4 pb-2">
            <h2 className="text-gray-900 text-4xl font-bold mb-1">San Francisco</h2>
            <p className="text-gray-400 text-base mb-4">Premium economy</p>
            
            <div className="flex items-center gap-4 mb-5">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
                <span className="text-gray-700 text-base">from $240</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                <span className="text-gray-700 text-base">SFO</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex-1 bg-black text-white py-3.5 rounded-full text-base font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95">
                Search flight
              </button>
              <button
                onClick={() => setLikedSF(!likedSF)}
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all duration-200 hover:scale-110 shrink-0"
              >
                <svg 
                  className={`w-6 h-6 transition-all duration-200 ${likedSF ? 'fill-red-500 scale-110' : 'fill-pink-300'}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
