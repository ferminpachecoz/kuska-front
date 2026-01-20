import React from 'react'
import Header from '../Components/Header'
import HeroBanner from '../Components/HeroBanner'
import Phrase from '../Components/Phrase'
import AboutUs from '../Components/AboutUs'
import Valores from '../Components/Valores'
import Caracteristicas from '../Components/Caracteristicas'
import SecondaryBanner from '../Components/SecondaryBanner'
import HowTo from '../Components/HowTo'
import Testimonials from '../Components/Testimonials'
import Tecnologia from '../Components/Tecnologia'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Phrase />
      <AboutUs />
      <Valores />
      <Caracteristicas />
      <SecondaryBanner 
        title={"Conectá con tu comunidad, viví el amor a tu manera."}
        subtitle={"Kuska une raíces, tradiciones y sueños."}
        color={"linear-gradient(105deg, #9E81BA 0%, #ED484A 55%, #F49F67 100%)"}
      >
        <span className='lines-container'>
          <div className='line me-2'></div>
          <div className='line me-2'></div>
          <div className='line'></div>
        </span>
      </SecondaryBanner>
      <HowTo />
      {/* <Testimonials /> */}
      <Tecnologia />
      <SecondaryBanner
        title={"Unite. Compartí. Conectá."}
        subtitle={"Tu comunidad te está esperando"}
        color={"linear-gradient(105deg, #9E81BA 0%, #ED484A 55%, #9E81BA 100%)"}
      >
        <div className='d-flex justify-content-center mb-5'>
          <a href="/contacto">Pre inscripción</a>
        </div>
        <div className='fichas-aux d-flex justify-content-center flex-column flex-lg-row'>
          <p className='mb-4 mb-lg-0 me-0 me-lg-3'>App Store - Coming Soon</p>
          <p  className='mb-0'>Google Play - Coming Soon</p>
        </div>
      </SecondaryBanner>
      <Footer />
    </>
  )
}
