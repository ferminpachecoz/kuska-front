import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYouPage.scss';

const ThankYouPage = () => {
  return (
    <div className="thankyou-page">      
      <main className="thankyou-main">
        <div className="thankyou-container">
          <div className="success-icon">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="thankyou-title">¡Gracias por inscribirte!</h1>
          
          <p className="thankyou-message">
            Tu registro fue exitoso y ya aseguraste 100% de descuento en tu primer mes del plan Premium. Queremos que vivas la experiencia completa desde el primer día.
          </p>

          <p className="thankyou-submessage">
            Mientras tanto, te invitamos a explorar más sobre Kuska y descubrir 
            cómo podemos ayudarte a encontrar conexiones auténticas.
          </p>

          <Link to="/" className="home-btn">
            Volver al inicio
          </Link>

          <div className="hearts-decoration">
            <div className="heart heart-1">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="heart heart-2">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="heart heart-3">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="thankyou-decoration">
          <div className="decoration-blob blob-1"></div>
          <div className="decoration-blob blob-2"></div>
        </div>
      </main>
    </div>
  );
};

export default ThankYouPage;
