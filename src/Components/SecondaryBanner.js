import React from 'react'
import "./SecondaryBanner.scss"

export default function SecondaryBanner({title, subtitle, children, color}) {
  return (
    <div 
      className='secondary-banner'
      style={{background: color}}
    >
      <div className='contenedor'>
        <h1 className='mb-2'>{title}</h1>
        <p className='subtitle mb-5'>{subtitle}</p>
        {
          children
        }
      </div>
    </div>
  )
}
