import React from 'react'
import CartItem from './CartItem'
import { Cart } from '../components/styled/Cart'

class ShoppingCart extends React.Component {
    state = {
        shoppingList: []
    }

    render() {
        const itemsList = this.props.shoppingList
        return <Cart>
                 <h1>Shopping Cart </h1>
                 <h3>{itemsList.length} Product(s)</h3>
                 <i className="fas fa-shopping-cart"></i>
                 {itemsList.length > 0 ?
                    <>
                        <ul>
                            {itemsList.map((item) => <CartItem key={item.id} {...item}/>)} 
                        </ul> 
                        <button>Proceed to Checkout</button> 
                    </> : 
                <h2>Your shopping cart is empty! Add some comics!</h2> }
            </Cart> 
    }
}


export default ShoppingCart