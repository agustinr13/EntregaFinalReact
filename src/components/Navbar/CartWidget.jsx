import React, { useContext } from 'react'
import './CartWidget.css'
import CartImage from './cart.png'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {

  const { getTotalQuantity} = useContext(CartContext)
  

  return (
    <div className="cart">
        <img src={CartImage} alt="logo" />
        <span className="cantidad">{getTotalQuantity()}</span>
    </div>
  )
}

export default CartWidget