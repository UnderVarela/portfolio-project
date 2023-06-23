import React from 'react';
import Card from '../components/Card'


export function HomePage() {
  return (
    <>
      <h2 className='text-4xl'>Mis movidas</h2>
      <div className='grid grid-cols-3 gap-4 mx-4 mt-8'>
        <Card
          imageSrc='src/images/istockphoto-622064544-612x612.jpg'
          title='Tecnico audiovisual'
          description='Descripción del trabajo'
          link='https://www.example.com'
        />
        <Card
          imageSrc='src/images/IMDB_recortado.jpg'
          title='Mi perfil de IMDB'
          description='Sonido. Dirección de fotografía y cámara. Arte.'
          link='https://www.imdb.com/name/nm6244375/?ref_=fn_al_nm_1'
        />
        <Card
          imageSrc='src/images/yo.jpg'
          title='Sobre mi'
          description='Descripción del trabajo 3'
          link='https://www.example.com'
        />
          <Card
            imageSrc='src/images/IMDB_recortado.jpg'
            title='Artistadas'
            description='Proyectos artisticos propios y ajenos.'
            link='https://www.imdb.com/name/nm6244375/?ref_=fn_al_nm_1'
          />
        <Card
          imageSrc='src/images/audio-editing-software.jpg'
          title='Edición/Postproducción de audio'
          description='Grabacion. Edicion. Postproduccion de audio.'
          link='https://www.example.com'
        />
         <Card
          imageSrc='src/images/coding.jpg'
          title='Programación'
          description='Descripción del trabajo'
          link='https://www.example.com'
        />
      </div>
    </>
  )
}


