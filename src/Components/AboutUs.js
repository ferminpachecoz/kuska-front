import React from 'react'
import "./AboutUs.scss"

export default function AboutUs() {
  return (
    <div className='about-us d-flex flex-column flex-lg-row'>
      <div className='col-12 col-lg-5 order-2 order-lg-1 d-flex justify-content-center d-lg-block'>
        <img src="/elementos-graficos/UNION (3).png" alt="Mockup Tablet" />
      </div>
      <div className='col-lg-7 col-12 contenido order-1 order-lg-2'>
        <h1 className='section-title mb-4'>¿Qué es Kuska?</h1>
        <p className='first mb-4'>Kuska es una app de citas creada para la comunidad boliviana, donde la cultura no es un filtro: es el corazón de la conexión.</p>
        <p className='second'>Aquí encontrás personas que hablan tu idioma, comparten tus tradiciones y entienden de dónde venís. Porque el amor también se construye desde las raíces.</p>
      </div>
    </div>
  )
}
