import React from 'react'
import ComicCard from '../components/ComicCard'
import { getComics } from '../services/comics'
import ComicFilter from '../components/ComicFilter'
import ShoppingCart from '../components/ShoppingCart'

class Home extends React.Component {
    state = {
        comics: [],
        shoppingList: []
    }

    addItemToCart = (id, name, price, img) => {
        const shoppingList = this.state.shoppingList
        const item = {id, name, price, img}
        this.setState({shoppingList: [...shoppingList, item]})
    }

    filterComics = (comics) => {
        this.setState({
            comics: [...comics]
        })
    }

    componentDidMount() {
        getComics().then((res) => {
            this.setState({comics: res})
        })
    }

    render() {
        const { comics } = this.state
        return <>
            <ShoppingCart shoppingList={this.state.shoppingList}/>
            <ComicFilter onFilterComics={this.filterComics} />
            {comics.map((comic) => <ComicCard  key={comic.id} {...comic} onItemAdded={this.addItemToCart}/>)}
        </>         
    } 
}

export default Home