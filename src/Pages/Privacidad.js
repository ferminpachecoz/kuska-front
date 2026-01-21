import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PrivacyPolicy from '../Components/PrivacyPolicy'

export default function Privacidad() {
  return (
    <>
      <span className='roll-top'>
        <a href="#top">
          <img src="/iconos/flecha.png" alt="Icono de flecha" />
        </a>
      </span>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  )
}
