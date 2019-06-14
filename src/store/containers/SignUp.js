import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signupUser } from '../actions/users'

import SignUp from '../../components/Auth/SignUp'

const mapDispatchToProps = (dispatch) => bindActionCreators({
    signupUser
}, dispatch)

export default connect(null, mapDispatchToProps)(SignUp)