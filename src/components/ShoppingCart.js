import React from 'react'
import CartItem from './CartItem'
import { Cart } from '../components/styled/Cart'

const ShoppingCart = (props) => {
    const shoppingList = props.shoppingList
    console.log(shoppingList)
    if(shoppingList.length > 0) {
        return <Cart>
             <h1>Shopping Cart </h1>
             <i class="fas fa-shopping-cart"></i>
            <ul>
                {shoppingList.map((item) => <CartItem key={item.id} {...item}/>)}
            </ul>
        </Cart> 
    } else {
        return <Cart>
            <h1>Shopping Cart </h1>
            <i class="fas fa-shopping-cart"></i>
            <p>Your cart is empty! Add some Comics!</p>
        </Cart>
    }



     
}

export default ShoppingCart