import React from 'react'
import { ProductCard } from './styled/Cards'
import { Link } from 'react-router-dom'

class ComicCard extends React.Component {

    render() {
        const { id, name, date, img, publisher, price } = this.props

        return <ProductCard>
                <img src={img} alt={name}/>
                <h3>{name}</h3>
                <p>{date}</p>
                <h4>${price}</h4>
                <Link to={{pathname:`/comic/${id}`, props: this.props}} >View Details</Link>
                <button>Add to cart</button>
            </ProductCard>
    }
}

export default ComicCard