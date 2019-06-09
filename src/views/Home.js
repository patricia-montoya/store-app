import React from 'react'
import ComicCard from '../components/ComicCard'
import { getComics } from '../services/comics'

class Home extends React.Component {
    state = {
        comics: []
    }

    componentDidMount() {
        getComics().then((res) => {
            this.setState({comics: res})
        })
    }

    render() {
        const { comics } = this.state
        return (
            comics.map((comic) => <ComicCard  key={comic.id} {...comic}/>)
        )         
    }
}

export default Home