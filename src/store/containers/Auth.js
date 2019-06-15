import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signup, signin } from '../actions/auth'

import Auth from '../../components/Auth/Auth'

const mapStateToProps = ({ auth }) => ({
    auth
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    signup,
    signin
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Auth)