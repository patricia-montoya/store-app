import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchComics, fetchFilteredComics } from '../actions/comics'

import Home from '../../views/Home'

const mapStateToProps = ({comics}) => ({
    comics
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchComics,
    fetchFilteredComics
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)