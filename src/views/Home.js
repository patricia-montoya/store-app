import React from 'react'
import ComicCard from '../components/Comics/ComicCard'

class Home extends React.Component {
    
    addItemToCart = (id, name, price, img) => {
        const shoppingList = this.state.shoppingList
        const item = {id, name, price, img}
        this.setState({shoppingList: [...shoppingList, item]})
    }

    componentDidMount() {
        this.props.fetchComics()
    }

    render() {
        const { comics } = this.props
        return <>
            {comics.data.map((comic) => <ComicCard  key={comic.id} {...comic} onItemAdded={this.addItemToCart}/>)}
        </>         
    } 
}

export default Home