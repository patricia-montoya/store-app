import { connect } from 'react-redux'
import ComicDetail from '../../views/ComicDetail'

const mapStateToProps = ({comics}) => ({
    comics
})

export default connect(mapStateToProps)(ComicDetail)