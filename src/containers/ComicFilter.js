import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchFilteredComics } from '../store/actions/comics'

import ComicFilter from '../components/ComicFilter'

const mapStateToProps = ({ comics, users }) => ({
    comics,
    users
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchFilteredComics
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ComicFilter)