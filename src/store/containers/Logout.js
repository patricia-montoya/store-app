import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'

import Logout from '../../components/Auth/Logout'

const mapStateToProps = ({ auth }) => ({
    auth
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    logout
}, dispatch);

export default connect(null, mapDispatchToProps)(Logout)