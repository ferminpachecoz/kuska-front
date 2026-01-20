import React from 'react'
import "./Phrase.scss"

export default function Phrase() {
  return (
    <div className='phrase'>
      <img src="/elementos-graficos/ESCALERA (2).png" className='decoration-1' alt="Elemento grafico escalera" />
      <img src="/elementos-graficos/ESLABON (2).png" className='decoration-2' alt="Elemento grafico escalera" />
      <div className='contenedor'>
        <h1 className='section-title text-center mb-4'>Las apps de citas no entienden tu cultura</h1>
        <p className='text-center mb-4'>La mayoría de las aplicaciones ignoran tu idioma, tus raíces y tu identidad. Te tratan como un número más en un algoritmo que no comprende lo que significa ser boliviano.</p>
        <p className='text-center'>Los bolivianos merecemos algo mejor. Merecemos un espacio donde nuestra cultura sea el centro de la conexión, no un detalle olvidado.</p>
      </div>
    </div>
  )
}
