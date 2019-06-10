import React from 'react'
import { getComicDetail } from '../services/comics'
import { ProductDetail } from '../components/Cards'
import { Link } from 'react-router-dom'

class ComicDetail extends React.Component {
    state = {
        comic: {}
    }

    componentDidMount() {
        const comicId = this.props.match.params.id
        if(comicId){
            getComicDetail(comicId)
            .then((response) => this.setState({ comic: response}))
        }
    }

    render() {
        console.log(this.state)
        const { id, date, img, name, price, publisher } = this.state 
       return <ProductDetail>
                <img src={img} alt={name}/>
                <h3>{name}</h3>
                <p>{date}</p>
                <h4>${publisher}</h4>
                <h4>${price}</h4>
                <Link to='/'>Go Back</Link>
                <button>Add to cart</button>
       </ProductDetail>
    }
}

export default ComicDetail