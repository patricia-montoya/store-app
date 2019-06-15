import React from 'react';
import { FilterForm } from '../Styled/Forms'

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
        this.props.fetchFilteredComics(this.state.filterText)
    }

    render() {
        console.log(this.props)
        return <FilterForm onSubmit={this.filterHandler}>
            <input name='Filter' value={this.state.filterText} onChange={this.changeHandler} placeholder="Filter Comics"/>
            <input type='submit' value='Filter'/>
        </FilterForm>
    };
};

export default ComicFilter