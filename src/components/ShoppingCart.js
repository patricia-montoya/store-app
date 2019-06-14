import React from 'react'
import { ItemsContainer } from './styled/Cart'

class ShoppingCart extends React.Component {
    state = {
        shoppingList: []
    }

    render() {
        console.log(this.props)
        return <ItemsContainer>
                <h2><i className="fas fa-shopping-cart"></i>  Shopping Cart</h2>
                <p>Your shopping cart is empty! Add some comics! </p>
            </ItemsContainer>
    }
}

export default ShoppingCart