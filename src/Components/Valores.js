import React from 'react'
import Card from './Card'
import "./Valores.scss"

export default function Valores() {
  const array=[
    {
      icon: "/elementos-graficos/ZIGZAG.png",
      title: "Autenticidad",
      description: "Perfiles reales y moderados",
      color: "linear-gradient(to right, #F49F67, #ED484A)"
    },
    {
      icon: "/elementos-graficos/ROMBO.png",
      title: "Comunidad",
      description: "Espacios para compartir música, costumbres y experiencias",
      color: "linear-gradient(to right, #FED264, #45A55A)"
    },
    {
      icon: "/elementos-graficos/LINEAS.png",
      title: "Propósito",
      description: "Reforzar los lazos culturales en el mundo digital",
      color: "linear-gradient(to right, #9E81BA, #F49F67)"
    },
  ]
  return (
    <div className='valores' id='nuestros-valores'>
      <img 
        src="/elementos-graficos/UNION (1).png" 
        alt="Recursos Kuska 40" 
        className='decoration-1'
      />
      <img 
        src="/elementos-graficos/RECURSOS KUSKA -61.png" 
        alt="Recursos Kuska 40" 
        className='decoration-2'
      />
      <h1 className='section-title text-center'>Nuestros valores</h1>
      <p className='text-center subtitle mb-5'>Lo que nos hace diferentes</p>
      <div className='row row-cols-1 row-cols-lg-3 g-5'>
        {
          array.map(item=>(
            <div>
              <Card 
                title={item.title} 
                icon={item.icon} 
                description={item.description}
                color={item.color}
                flex={false}
                text={"text-large"}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
