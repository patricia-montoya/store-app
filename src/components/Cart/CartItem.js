import React from 'react'
import { Item } from '../Styled/Cart'

class CartItem extends React.Component {
    state = {
        totalPrice: parseFloat(this.props.price),
        quantity: 1
    }

    addItem = (price) => {
        const quantity = this.state.quantity
        let totalPrice = this.state.totalPrice
        totalPrice = totalPrice + price

        this.setState({
            totalPrice: totalPrice,
            quantity: quantity + 1
        })
    }

    subsItem = (price) => {
        const quantity = this.state.quantity
        let totalPrice = this.state.totalPrice

        if(totalPrice > 0.0) {
            totalPrice = totalPrice - price
            
            this.setState({
                totalPrice: totalPrice,
                quantity: quantity - 1
            })
        }
    }

    render() {
        const {name, price, img} = this.props
        const priceNum = parseFloat(price)
        return <Item>
            <button>X</button>
            <img src={img} alt="Comic"/>
            <span>{name}</span>
            <p>$ {price}</p>
            <button onClick={() => this.addItem(priceNum)}>+</button>
            <p>{this.state.quantity}</p>
            <button onClick={() => this.subsItem(priceNum)}>-</button>
            <h1>$ {this.state.totalPrice.toFixed(2)}</h1>
        </Item>
    }
}
export default CartItem