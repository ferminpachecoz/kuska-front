import React from 'react'
import "./Footer.scss"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='d-flex flex-column flex-lg-row'>
        <div className='col-12 col-lg-4 mb-lg-0 mb-4 left'>
          <img src="/logos/logo-grande.png" alt="Logo Kuska" />
          <p>Un puente que une corazones.</p>
        </div>
        <div className='col-lg-4 col-12 mb-lg-0 mb-4 middle'>
          <p className='col-title'>Enlaces</p>
          <div>
            <a href="/politica-de-privacidad">Privacidad</a>
            <a href="/terminos-y-condiciones">Términos y Condiciones</a>
            <a href="/contacto">Contacto</a>
            <a href="/">Home</a>
          </div>
        </div>
        <div className='col-lg-4 col-12 mb-lg-0 mb-4 right'>
          <p className='col-title'>Seguinos</p>
          <div className='social-media'>
            <span>
              <img src="/iconos/instagram.png" alt="Logo Instagram" />
            </span>
            <span>
              <img src="/iconos/facebook.png" alt="Logo Facebook" />
            </span>
            <span>
              <img src="/iconos/gmail.png" alt="Logo Gmail" />
            </span>
          </div>
        </div>
      </div>
      <div className='separador'></div>
      <div className='copyright'>
        <p>© 2026 Kuska. Todos los derechos reservados. Hecho con ❤️ para la comunidad boliviana.</p>
      </div>
    </div>
  )
}
