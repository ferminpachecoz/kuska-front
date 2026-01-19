import React from 'react'
import "./Tecnologia.scss"
import Card from './Card'

export default function Tecnologia() {
  const array=[
    {
      icon: "/iconos/smartphone-call.png",
      color: "linear-gradient(to right, #9E81BA, #ED484A)",
      title: "Disponible en Android y iOS"
    },
    {
      icon: "/iconos/unlock.png",
      color: "linear-gradient(to right, #9E81BA, #ED484A)",
      title: "Encriptación de datos de extremo a extremo"
    },
    {
      icon: "/iconos/authentication.png",
      color: "linear-gradient(to right, #9E81BA, #ED484A)",
      title: "Validación facial para perfiles verificados"
    },
    {
      icon: "/iconos/cyber-security.png",
      color: "linear-gradient(to right, #9E81BA, #ED484A)",
      title: "Control activo de spam y perfiles falsos"
    },
    {
      icon: "/iconos/cloud.png",
      color: "linear-gradient(to right, #9E81BA, #ED484A)",
      title: "Infraestructura segura en Google Cloud"
    },
  ]
  return (
    <div className='tecnologia'>
      <h1 className='text-center section-title mb-3'>Tecnología al servicio del encuentro</h1>
      <p className='text-center subtitle mb-5'>Tu seguridad y privacidad son nuestra prioridad</p>
      <div className='row row-cols-1 row-cols-lg-3 g-4'>
        {
          array.map(item=>(
            <div>
              <Card 
                title={item.title}
                icon={item.icon}
                color={item.color}
                flex={true}
                text={"text-small"}
              />
            </div>
          ))
        }
      </div>
      <div className='badge-aux pt-4'>
        <span className='d-flex justify-content-center align-items-center contenedor'>
          <img src="/iconos/unlock-black.png" alt="Icono de candado" />
          <p className='mb-0'>Certificado de seguridad y privacidad</p>
        </span>
      </div>
    </div>
  )
}
