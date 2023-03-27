import React from 'react'
import Brand from './brand.png'
import './Logo.css'

const BrandImage = () => {
  return (
    <div className='logo'>
        <img src={Brand} alt="logo" />
    </div>
  )
}

export default BrandImage