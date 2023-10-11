import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>StreetWear</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link"to="/">Inicio</Link></li>
            <li><Link className="menu-link"to="/productos">Productos</Link></li>
            <li><Link className="menu-link"to="/productos/joggers">Joggers</Link></li>
            <li><Link className="menu-link"to="/productos/oversizes">Oversizes</Link></li>
            <li><Link className="menu-link"to="/productos/hoodies">Hoodies</Link></li>
            <li><Link className="menu-link"to="/productos/tops">Tops</Link></li>
            <li><Link className="menu-link"to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-link"to="/contacto">Contacto</Link></li>
        </ul>

        <CartWidget />

    </nav>
  )
}

export default Navbar