import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ComicDetail from '../../views/ComicDetail'
import { addItem } from '../actions/shoppingCart'

const mapStateToProps = ({comics, shoppingCart}) => ({
    comics,
    shoppingCart
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addItem
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ComicDetail)