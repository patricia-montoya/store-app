import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFilteredComics } from '../actions/comics'

import MainLayout from '../../components/Layouts/MainLayout'

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.token !== null
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchFilteredComics
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)