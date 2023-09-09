import React from 'react'
import "./NavBar.css"
import CartWidget from './CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <nav>
            <div id="logo-empresa">
                <a href="../../../index.html"><img src="./src/assets/IMG/NR.png" alt="Logo de la empresa" /></a>
                <p>NERITOS</p>
            </div>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Categorías</a></li>
                <li><a href="#">Ofertas</a></li>
                <li><a href="#">Soporte</a></li>
            </ul>
            <CartWidget />
        </nav>
    </header>
  )
}

export default NavBar