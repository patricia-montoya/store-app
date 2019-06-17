import React from 'react'
import { Item } from '../Styled/Cart'

class CartItem extends React.Component {
    removeHandler = (id) => {
        this.props.removeItem(id)
    }

    addQuantityHandler = (id) => {
        this.props.addQuantity(id)
    } 

    subtractQuantityHandler = (id) => {
        this.props.subtractQuantity(id)
    } 

    render() {
        console.log(this.props)
        const {id, name, price, img, quantity} = this.props
        return <Item>
            <button className="item-delete" onClick={() => this.removeHandler(id)}><i className="fas fa-times-circle"></i></button>
            <img className="item-img" src={img} alt="Comic"/>
            <div className="item-info">
                <label className="item-name">{name}</label>
                <p>$ {price}</p>
                <div>
                    <button onClick={() => this.addQuantityHandler(id)}><i className="fas fa-plus"></i></button>
                    <label>{quantity}</label>
                    <button onClick={() => this.subtractQuantityHandler(id)}><i className="fas fa-minus"></i></button>
                </div>
            </div>
        </Item>
    }
}
export default CartItem