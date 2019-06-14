import { ADD_ITEM, REMOVE_ITEM, ERROR_ITEM } from '../actions/actionTypes'
import initialState from './initialState';

export default(state = initialState.shoppingCart, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {...state, data: state.data.concat(action.payload)}
        case REMOVE_ITEM:
            return {...state, data: state.data.filter(item => item.id !== action.payload)}
        case ERROR_ITEM:
            return {...state, error: action.payload}
        default:
            return state
    }
}