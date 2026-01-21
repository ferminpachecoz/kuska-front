import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import TermsAndConditions from '../Components/TermsAndConditions'

export default function Terminos() {
  return (
    <>
      <span className='roll-top'>
        <a href="#top">
          <img src="/iconos/flecha.png" alt="Icono de flecha" />
        </a>
      </span>
      <Header />
      <TermsAndConditions />
      <Footer />
    </>
  )
}
