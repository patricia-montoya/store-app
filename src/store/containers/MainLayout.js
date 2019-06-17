import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFilteredComics } from '../actions/comics'
import { addQuantity, subtractQuantity, removeItem } from '../actions/shoppingCart'

import MainLayout from '../../components/Layouts/MainLayout'

const mapStateToProps = ({ auth, shoppingCart }) => ({
    isAuthenticated: auth.token !== null,
    shoppingCart
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchFilteredComics,
    addQuantity,
    subtractQuantity,
    removeItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)