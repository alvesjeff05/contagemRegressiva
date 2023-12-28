import './Contador.css'
import React from 'react'

const Contagem = ({title, number}) => {
  return (
    <div className="counter">
        <p className="counter-number">{number}</p>
        <h2 className="counter-text">{title}</h2>
    </div>
  )
}


export default Contagem