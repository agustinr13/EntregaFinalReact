import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing'>
        <h1>BIENVENIDX A LA TIENDA</h1>
        <p>ENTREGA FINAL - REACT JS</p>
        <p>Simulador de tienda de ropa</p>
        <p>Agustín Rodriguez - Comisión 45010 </p>
        <p><b>CODERHOUSE</b></p>
        <button>
            <Link to={'/products'}>VER PRODUCTOS</Link>
        </button>
    </div>
  )
}

export default Landing