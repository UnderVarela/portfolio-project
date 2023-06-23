
import { useNavigate } from 'react-router-dom'
import { addDocument } from '../helpers/firebase/cloud-firestore'
import { useState } from 'react'





export function ExperienciaForm() {
  const [error, setError] = useState(null)
  const [isLoading, setIsloading] = useState(false)
  const navigate = useNavigate()

  const insertData = async (data) => {
    setError(null)
    setIsloading(true)
    try {
      if (!data.titulo.length) throw new Error('El campo titulo no puede estar vacío')
      await addDocument('mixperiencia', data)
      navigate('/')
    } catch (error) {
      setError(error)
    } finally {
      setIsloading(false)

    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    // console.log(formData.get('titulo'))
    const data = Object.fromEntries(formData.entries())
    insertData(data)

  }
  return (
    <form
      onSubmit={handleSubmit}
      className='grid place-items-center'>
      <div className='campo'>
        <label htmlFor='titulo'>
          Titulo
        </label>
        <input
          className='border'
          id='titulo'
          type='text'
          name='titulo'
          required
        />
      </div>
      <div className='campo'>
        <label htmlFor='descripcion'>
          Descripcion
        </label>
        <input
          className='border'
          id='descripcion'
          type='text'
          name='descripcion'

        />
      </div>
      <button
        disabled={isLoading}
        className='border'>Enviar</button>
      {error?.message}
      {isLoading && 'Cargando............'}
    </form>
  )
}

