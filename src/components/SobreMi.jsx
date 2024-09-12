import React from 'react'
import Foto from "../assets/sobremifoto.png"
const SobreMi = () => {
  return (
    <div className='sobreMiContainer'>
      <div className='foto-container'>
        <img className='foto-img' src={Foto} alt="foto" />
      </div>
      <p>Tengo 24 años, soy un apasionado desarrollador web Front-end con
        enfoque en crear experiencias digitales atractivas y funcionales. A pesar
        de mi corta trayectoria profesional, poseo un sólido conjunto de
        habilidades técnicas y un profundo conocimiento de las tecnologías
        esenciales para el desarrollo web moderno.</p>
    </div>
  )
}

export default SobreMi