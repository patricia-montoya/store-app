import React from 'react'
import { ProductCard } from './Cards'
import { Link } from 'react-router-dom'

class ComicCard extends React.Component {

    render() {
        const { id, name, date, img, price } = this.props

        return <ProductCard>
                <img src={img} alt={name}/>
                <h3>{name}</h3>
                <p>{date}</p>
                <h4>${price}</h4>
                {/* <Link to={`/comic/${id}`}>View Details</Link> */}
                <button>Add to cart</button>
            </ProductCard>
    }
}

export default ComicCard