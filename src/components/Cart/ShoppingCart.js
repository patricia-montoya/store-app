import React from 'react'
import { ItemsContainer } from '../Styled/Cart'
import CartItem from './CartItem'

class ShoppingCart extends React.Component {

    render() {
        const { shoppingCart } = this.props 
        return <ItemsContainer>
                <h2><i className="fas fa-shopping-cart"></i>  Shopping Cart</h2>
                { shoppingCart.addedItems.length > 0 ? shoppingCart.addedItems.map((item) => <CartItem  key={item.id} {...item} {...this.props}/>)
                : <p>Your shopping cart is empty! Add some comics! </p>
                }
                Total Price: {shoppingCart.totalPrice}
            </ItemsContainer>
    }
}

export default ShoppingCart