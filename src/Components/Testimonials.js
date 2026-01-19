import React from 'react';
import "./Testimonials.scss"

export default function Testimonials() {
  const array=[
    {
      color: "linear-gradient(to right, #F49F67, #FED264)",
      text: "Nunca pensé que encontraría a alguien que entienda mis raíces como yo. Kuska me hizo sentir en casa.",
      name: "Mariana",
      location: "Cochabamba"
    },
    {
      color: "linear-gradient(to right, #FED264, #45A55A)",
      text: "Por primera vez sentí que una app hablaba mi mismo idioma del corazón.",
      name: "Diego",
      location: "La Paz"
    },
    {
      color: "linear-gradient(to right, #45A55A, #9E81BA)",
      text: "Kuska no es solo una app de citas, es un espacio donde puedo ser yo misma y celebrar mi cultura.",
      name: "Valentina",
      location: "Santa Cruz"
    },
    {
      color: "linear-gradient(to right, #9E81BA, #ED484A)",
      text: "Encontré personas que comparten mis valores y entienden de dónde vengo. Eso no tiene precio.",
      name: "Carlos",
      location: "Tarija"
    },
  ]
  return (
    <div className='testimonials' id='testimonios'>
      <h1 className='section-title text-center'>Historias que laten al ritmo de Bolivia</h1>
      <p className='subtitle text-center'>Conexiones reales, emociones auténticas</p>
      <div className='row row-cols-1 row-cols-lg-2 g-4'>
        {
          array.map(item=>(
            <div>
              <div className='card-testim'>
                <span className='quote' style={{backgroundImage: item.color}}>
                  <img src="/iconos/quote.png" alt="Quote Icon" />
                </span>
                <p className='texto'>"{item.text}"</p>
                <div className='d-flex align-self-start'>
                  <span className='initial' style={{backgroundImage: item.color}}>
                    <p>{item.name[0]}</p>
                  </span>
                  <span className='ms-3'>
                    <p className='name'>{item.name}</p>
                    <p className='location'>{item.location}</p>
                  </span>
                </div> 
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
