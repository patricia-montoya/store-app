import React from 'react'
import { ProductCard } from '../Styled/Cards'
import { Link } from 'react-router-dom'

class ComicCard extends React.Component {
    addItemHandler = () => {
        const item = {
            id: this.props.id,
            name: this.props.name,
            img: this.props.img,
            price: this.props.price
        }

        this.props.addItem(item)
    }
    
    render() {
        const { id, name, img, price } = this.props
        return <ProductCard>
                <img src={img} alt={name}/>
                    <p>{name}</p>
                    <p>$ {price}</p>
                    <Link className="comic-link" to={{pathname:`/comic/${id}`, comicInfo: this.props}} >View Details</Link>
                    <button className="comic-btn" onClick={this.addItemHandler}>Add to cart</button>
            </ProductCard>
    }
}

export default ComicCard