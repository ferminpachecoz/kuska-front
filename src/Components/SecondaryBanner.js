import React from 'react'
import "./SecondaryBanner.scss"

export default function SecondaryBanner({title, subtitle, children, color}) {
  return (
    <div 
      className='secondary-banner'
      style={{background: color}}
    >
      <img src="/elementos-graficos/ESLABON (5).png" className='decoration-1' alt="Decorative element 1" />
      <img src="/elementos-graficos/RECURSOS KUSKA -44.png" className='decoration-2' alt="Decorative element 2" />
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
