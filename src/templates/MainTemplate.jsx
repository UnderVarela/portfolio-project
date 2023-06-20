import React from 'react'
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'


export function MainTemplate() {
  return (
    <>
      <header className='px-6 py-4 text-white bg-gray-800 main-header'>
        <h1 className='text-4xl'>Portafolio</h1>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

