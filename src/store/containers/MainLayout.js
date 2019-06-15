import { connect } from 'react-redux'

import MainLayout from '../../components/Layouts/MainLayout'

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.token !== null
})

export default connect(mapStateToProps)(MainLayout)