import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchComics } from '../store/actions/comics'

import Home from '../views/Home'

const mapStateToProps = ({ comics, users }) => ({
    comics,
    users
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchComics,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)