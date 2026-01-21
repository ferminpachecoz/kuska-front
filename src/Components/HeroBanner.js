import React from 'react';
import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <section className="hero-banner" id='top'>
      <div className='col-lg-7 col-12'>
        <h1>Un puente que une corazones</h1>
        <h2>Conectá con personas que comparten tu cultura, tus raíces y tu forma de amar.</h2>
        <span className='d-flex align-items-center flex-lg-row flex-column'>
          <a href="/contacto" className='btn-download'>Pre inscripción</a>
          <a href="/#como-funciona" className='btn-how-to'>Cómo funciona</a>
        </span>
      </div>
      <div className='col-lg-5 col-12 d-none d-lg-flex justify-content-center align-items-center'>
        <img src="/elementos-graficos/CHAKANA (1).png" alt="Mockup phone con logo de Kuska" />
      </div>
    </section>
  );
};

export default HeroBanner;