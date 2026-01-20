import React, {useState} from 'react'
import "./Header.scss"

export default function Header() {
  const [display, setDisplay] = useState(false)
  return (
    <div className='header row row-cols-2 g-0'>
      <div className='col-6 col-lg-6'>
        <a href="/">
          <img src="/logos/logo-grande.png" alt="Logo grande de Kuska" />
        </a>
      </div>
      <div className='col-6 d-lg-none d-flex justify-content-end align-items-center mobile-list'>
        <img src="/iconos/menu.png" alt="Menu Logo" onClick={()=>setDisplay(!display)} />
      </div>
      <div 
      className={`col-12 col-lg-6 ${display?"d-flex":"d-none"} flex-column flex-lg-row justify-content-end align-items-center d-lg-flex`}
      >
        <a href="/#como-funciona">Cómo funciona</a>
        <a href="/#caracteristicas">Características</a>
        <a href="/#testimonios">Testimonios</a>
        <a href="/contacto" className='btn-download'>Pre inscripción</a>
      </div>
    </div>
  )
}
