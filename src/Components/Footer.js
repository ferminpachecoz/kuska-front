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
            <a href="/contacto">Pre inscripción</a>
            <a href="/">Página Principal</a>
          </div>
        </div>
        <div className='col-lg-4 col-12 mb-lg-0 mb-4 right'>
          <p className='col-title'>Seguinos</p>
          <div className='social-media'>
            <span>
              <a href="https://www.instagram.com/kuskaoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  target='_blank' rel="noreferrer">
                <img src="/iconos/instagram.png" alt="Logo Instagram" />
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/profile.php?id=61582461046207&sk=directory_contact_info" target='_blank' rel="noreferrer">
                <img src="/iconos/facebook.png" alt="Logo Facebook" />
              </a>
            </span>
            <span>
              <a href="https://www.tiktok.com/@kuska90?_r=1&_t=ZM-93FMQgk7dEa" rel="noreferrer" target='_blank'>
                <img src="/iconos/tik-tok.png" alt="Logo Gmail" />
              </a>
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
