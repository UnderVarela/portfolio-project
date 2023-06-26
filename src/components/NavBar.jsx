import React from 'react'
import { Link } from 'react-router-dom'

export function NavBar () {
  return (
<nav className="flex justify-end">
  <div className="ml-4">
    <Link to="/">Inicio</Link>
  </div>
  {/* <div className="ml-4">
    <Link to="/experiencia">Experiencia</Link>
  </div> */}
  <div className="ml-4">
    <Link to="/login">Login</Link>
  </div>
</nav>
  )
}

