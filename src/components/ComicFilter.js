import React from 'react';
import { getFilteredComics } from '../services/comics'
import { FilterForm } from '../components/Filter'

class ComicFilter extends React.Component {
    state = {
        comicFilter: ''
    }

    changeHandler = (e) => {
        this.setState({
            comicFilter: e.target.value
        })
    }

    filterHandler = (e) => {
        e.preventDefault();
        getFilteredComics(this.state.comicFilter)
        .then((response) => {
            this.props.onFilterComics(response)
        })
    }

    render() {
        return <FilterForm onSubmit={this.filterHandler}>
            <span>Filter: </span>
            <input name='Filter' value={this.state.comicFilter} onChange={this.changeHandler} placeholder='Filter Comic by Name'/>
            <input type='submit' value='Filter'/>
        </FilterForm>
    };
};

export default ComicFilter