import React from 'react'
import { ProductDetail } from './styled/Cards'

const ComicDetail = (props) => {
    const { id, name, date, img, price, publisher} = props.location.comicInfo
    return <ProductDetail>
            <p>ID: {id}</p>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <p>Release date: {date}</p>
            <h4>Publisher: {publisher}</h4>
            <h4>${price}</h4>
            <button>Add to cart</button>
    </ProductDetail>
}

export default ComicDetail