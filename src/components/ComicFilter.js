import React from 'react';
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
    }

    render() {
        console.log(this.props)
        return <FilterForm onSubmit={this.filterHandler}>
            <span>Filter comics</span>
            <input name='Filter' value={this.state.filterText} onChange={this.changeHandler} />
            <input className="filter-btn"type='submit' value='Filter'/>
        </FilterForm>
    };
};

export default ComicFilter