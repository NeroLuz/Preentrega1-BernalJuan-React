import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
  return (
    <div id="greeting-container">
        <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer