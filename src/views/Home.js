import React from 'react'
import ComicCard from '../components/Comics/ComicCard'

class Home extends React.Component {
    
    componentDidMount() {
        this.props.fetchComics()
    }

    render() {
        const { comics } = this.props
        return <>
            {comics.data.map((comic) => <ComicCard  key={comic.id} {...comic} onItemAdded={this.addItemToCart} {...this.props}/>)}
        </>         
    } 
}

export default Home