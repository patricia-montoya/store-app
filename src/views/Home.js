import React from 'react'
import ComicCard from '../components/ComicCard'
import { getComics } from '../services/comics'
import ComicFilter from '../components/ComicFilter'

class Home extends React.Component {
    state = {
        comics: []
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
            <ComicFilter onFilterComics={this.filterComics}/>
            {comics.map((comic) => <ComicCard  key={comic.id} {...comic}/>)}
        </>         
    }
}

export default Home