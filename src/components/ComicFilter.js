import React from 'react';
import { getFilteredComics } from '../services/comics'
import { FilterForm } from './styled/Filter'

class ComicFilter extends React.Component {
    state = {
        filterText: ''
    }

    changeHandler = (e) => {
        this.setState({
            filterText: e.target.value
        })
    }

    filterHandler = (e) => {
        e.preventDefault();
        console.log(this.props)
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