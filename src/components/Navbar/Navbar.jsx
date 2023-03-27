import React from 'react'
import { Link } from 'react-router-dom'
import BrandImage from './BrandImage'
import CartWidget from './CartWidget'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to={'/'}>
            <BrandImage/>
        </Link>
        <ul>
            <li>
                <Link to={'/products'}>PRODUCTOS</Link>
            </li>
            <li>
                <Link to={'/category/buzos'}>Buzos</Link>
            </li>
            <li>
                <Link to={'/category/camperas'}>Camperas</Link>
            </li>
            <li>
                <Link to={'/category/remeras'}>Remeras</Link>
            </li>
            <li>
                <Link to={'/category/chombas'}>Chombas</Link>
            </li>
            <li>
                <Link to={'/category/pantalones'}>Pantalones</Link>
            </li>
            <li>
                <Link to={'/category/shorts'}>Shorts</Link>
            </li>
        </ul>
        <Link to={'/cart'}>
          <CartWidget/>
        </Link>
    </nav>
  )
}

export default Navbar