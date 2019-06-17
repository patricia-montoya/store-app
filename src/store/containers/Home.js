import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchComics } from '../actions/comics'
import { addItem } from '../actions/shoppingCart'

import Home from '../../views/Home'

const mapStateToProps = ({comics}) => ({
    comics
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchComics,
    addItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)