import React from 'react'
import "./HowTo.scss"

export default function HowTo() {
  const array = [
    {
      color: "#ED484A",
      title: "Creá tu perfil",
      description: "Contanos quién sos y qué te representa",
      icon: "/iconos/user.png",
      number: "01"
    },
    {
      color: "#45A55A",
      title: "Descubrí personas afines",
      description: "Nuestro algoritmo te conecta con quienes comparten tu cultura",
      icon: "/iconos/teamwork.png",
      number: "02"
    },
    {
      color: "#9E81BA",
      title: "Conectá con personas que vibran como vos",
      description: "Iniciá conversaciones auténticas y construí relaciones significativas",
      icon: "/iconos/heart.png",
      number: "03"
    },
  ]
  return (
    <div className='how-to' id='como-funciona'>
      <h1 className='text-center section-title'>Cómo funciona</h1>
      <p className='subtitle text-center mb-5'>Tres pasos simples para encontrar tu conexión</p>
      <div className='row row-cols-1 row-cols-lg-3 g-4'>
        {
          array.map(item=>(
            <div>
              <div className='card-2'>
                <p className='card-number' style={{color: item.color}}>{item.number}</p>
                <span className='icon' style={{backgroundColor: item.color}}>
                  <img src={item.icon} alt={item.title} />
                </span>
                <p className='title'>{item.title}</p>
                <p className='description'>{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='d-flex justify-content-center'>
        <a href="/contacto" className='btn-download'>Pre inscripción</a>
      </div>
    </div>
  )
}
