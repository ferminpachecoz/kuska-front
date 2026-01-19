import React from 'react'
import "./Caracteristicas.scss"
import { div } from 'framer-motion/m'
import Card from './Card'

export default function Caracteristicas() {
  const array=[
    {
      icon: "/iconos/handshake.png",
      title: "Match por afinidad cultural y valores",
      description: "Conectá con personas que comparten tu visión del mundo y tus valores más profundos.",
      color: "linear-gradient(to right, #F49F67, #ED484A)"
    },
    {
      icon: "/iconos/globe.png",
      title: "Prioriza idioma, raíces e intereses",
      description: "Nuestro algoritmo entiende que tu cultura y tu idioma son parte esencial de quién sos.",
      color: "linear-gradient(to right, #FED264, #45A55A)"
    },
    {
      icon: "/iconos/group.png",
      title: "Espacios de comunidad",
      description: "Participá en conversaciones, eventos y actividades que celebran la cultura boliviana.",
      color: "linear-gradient(to right, #9E81BA, #F49F67)"
    },
    {
      icon: "/iconos/security.png",
      title: "Seguridad y validación de perfiles reales",
      description: "Verificación de identidad y moderación activa para garantizar un espacio seguro.",
      color: "linear-gradient(to right, #ED484A, #FED264)"
    },
  ]
  return (
    <div className='caracteristicas' id='caracteristicas'>
      <h1 className='text-center section-title'>Características que importan</h1>
      <p className='text-center subtitle'>Diseñadas para que encuentres conexiones auténticas</p>
      <div className='row row-cols-1 row-cols-lg-2 g-5'>
        {
          array.map(item=>(
            <div>
              <Card 
                title={item.title}
                description={item.description}
                icon={item.icon}
                color={item.color}
                flex={true}
                text={"text-medium"}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
