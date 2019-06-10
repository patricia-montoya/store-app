import React from 'react'
import { Item } from './styled/Cart'

const CartItem = (props) => {
    const {name, price, img} = props
    console.log(name, price)
    return <Item>
        <img src={img} alt="Comic"/>
        <span>{name}</span>
        <p>${price}</p>
        <button>+</button>
        <p>1</p>
        <button>-</button>
    </Item>
}

export default CartItem