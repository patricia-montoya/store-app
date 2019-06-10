import React from 'react'
import { ProductCard } from './styled/Cards'
import { Link } from 'react-router-dom'

class ComicCard extends React.Component {
    addingToCartHandler = () => {
        const { id, name, price, img }  = this.props
        this.props.onItemAdded(id, name, price, img)
    }
    
    render() {
        const { id, name, date, img, price } = this.props
        return <ProductCard>
                <img src={img} alt={name}/>
                <h3>{name}</h3>
                <p>{date}</p>
                <h4>${price}</h4>
                <Link to={{pathname:`/comic/${id}`, comicInfo: this.props}} >View Details</Link>
                <button onClick={this.addingToCartHandler}>Add to cart</button>
            </ProductCard>
    }
}

export default ComicCard