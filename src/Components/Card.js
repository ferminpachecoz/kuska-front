import React from 'react'
import "./Card.scss"

export default function Card({flex, icon, title, description, color, text}) {
  console.log(color)
  return (
    <div className={`${flex?"d-lg-flex":"d-lg-block"} card-container d-flex flex-column align-items-center flex-lg-row`}>
      <div>
        <span className='icon mb-3' style={{background: color}}>
          <img src={icon} alt={`${title} icon`} />
        </span>
      </div>
      <div className={flex?"ms-3":""}>
        <p className={`title mb-2 ${text}`}>{title}</p>
        {description &&
          <p className='description'>{description}</p>
        }
      </div>
    </div>
  )
}
