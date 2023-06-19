import React, { useRef } from 'react'
import { useForm } from '../hooks/useForm'
import PropTypes from 'prop-types'

export function LoginForm ({ onSubmit, onSignOut }) {
  const { email, password, handleChange } = useForm({ email:'', password: '' })
  const emailRef = useRef()
  const passwordRef = useRef()
  const handleSubmit = () => {
    if (!email.length) {
      emailRef.current.focus() 
      return
    }
    if (!password.length) { 
      return
    }
// Envío los datos
onSubmit({ email, password })
  }
  return (
    
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
    <div className='mb-4'>
      <label
        className='block text-grey-darker text-sm font-bold mb-2'
        htmlFor='email'
      >
        Introduce email válido:
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
        id='email'
        ref={emailRef}
        name='email'
        value={email}
        onChange={handleChange}
        type='email'
        placeholder='user@correo.com'
      />
    </div>
    <div className='mb-6'>
      <label
        className='block text-grey-darker text-sm font-bold mb-2'
        htmlFor='password'
      >
        Contraseña:
      </label>
      <input
        className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3'
        id='password'
        ref={passwordRef}
        name='password'
        onChange={handleChange}
        value={password}
        type='password'
        placeholder='******************'
      />
    </div>
    <div className='flex items-center justify-between'>
      <button
        onClick={handleSubmit}
        className='bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'
        type='button'
      >
        Login
      </button>
      <button onClick={() => onSignOut()}
      className='bg-red hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>
        LogOut
      </button>
    </div>
  </div>

  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired
}
