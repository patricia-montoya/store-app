import React from 'react'
import { ProductCard } from './styled/Cards'
import { Link } from 'react-router-dom'

class ComicCard extends React.Component {
    addingToCartHandler = () => {
        const { id, name, price, img }  = this.props
        this.props.onItemAdded(id, name, price, img)
    }
    
    render() {
        const { id, name, img, price } = this.props
        return <ProductCard>
                <img src={img} alt={name}/>
                    <p>{name}</p>
                    <p>$ {price}</p>
                    <Link className="comic-link" to={{pathname:`/comic/${id}`, comicInfo: this.props}} >View Details</Link>
                    <button className="comic-btn" onClick={this.addingToCartHandler}>Add to cart</button>
            </ProductCard>
    }
}

export default ComicCard