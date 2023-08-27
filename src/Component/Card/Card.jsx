import React from 'react'
import "./Card.css"


const Card = ({ product }) => {
    return (

        <div className='card_container'>
            <div className='name'>Name: {product.name}</div>
            <div className='category'>Category: {product.category}</div>
            <div className='price'>Price: ${product.price}</div>
            <div className='name'>{product.available}</div>
        </div>

    )
}

export default Card