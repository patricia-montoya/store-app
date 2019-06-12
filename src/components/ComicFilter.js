import React from 'react';
import { getFilteredComics } from '../services/comics'
import { FilterForm } from './styled/Forms'

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
            <input name='Filter' value={this.state.comicFilter} onChange={this.changeHandler} placeholder='Filter'/>
            <input className="filter-btn"type='submit' value='Filter'/>
        </FilterForm>
    };
};

export default ComicFilter