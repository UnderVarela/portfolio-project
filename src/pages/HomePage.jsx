import React from 'react'

export function HomePage() {
  return (
    <>
    <h2 className='text-4xl'>Home Page</h2>
    <div className='grid grid-cols-3 gap-4 mx-4 mt-8'>
      <div className='p-4 overflow-hidden transition duration-300 transform bg-gray-400 rounded-lg shadow-lg hover:scale-105'>
        <img
          className='object-cover w-full h-48'
          src='src/images/istockphoto-622064544-612x612.jpg'
          alt='Trabajo 1'
        />
        <div className='p-4'>
          <h3 className='mb-2 text-xl font-semibold'>Tecnico audiovisual</h3>
          <p className='text-gray-700'>
            Descripción del trabajo 
          </p>
        </div>
      </div>
      <div className='overflow-hidden transition duration-300 transform bg-gray-400 rounded-lg shadow-lg hover:scale-105'>
        <img
          className='object-cover w-full h-48'
          src='src/images/IMDB_recortado.jpg'
          alt='Trabajo 2'
        />
        <div className='p-4'>
          <h3 className='mb-2 text-xl font-semibold'>Mi perfil de IMDB</h3>
          <p className='text-gray-700'>
            Descripción del trabajo
          </p>
        </div>
      </div>
      <div className='p-4 overflow-hidden transition duration-300 transform bg-gray-400 rounded-lg shadow-lg hover:scale-105'>
        <img
          className='object-cover w-full h-48'
          src='src/images/yo.jpg'
          alt='Trabajo 3'
        />
        <div className='p-4'>
          <h3 className='mb-2 text-xl font-semibold'>Sobre mi</h3>
          <p className='text-gray-700'>
            Descripción del trabajo 3
          </p>
        </div>
      </div>
    </div>
  </>
  )
}
