import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
  const { imageSrc, title, description, link } = props

  return (
    <div className='p-4 overflow-hidden transition duration-300 transform bg-gray-300 rounded-lg shadow-lg hover:scale-105'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img className='object-cover w-full h-48' src={imageSrc} alt={title} />
      </a>
      <div className='p-4'>
        <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
        <p className='text-gray-700'>{description}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Card
