import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div id="cart-container">
        <i id="cart-logo" class="fa-solid fa-cart-shopping fa-2xl"></i>
        <div id="cart-number">0</div>
    </div>
  )
}

export default CartWidget
