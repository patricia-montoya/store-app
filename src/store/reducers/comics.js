import { REQUEST_COMICS, RECEIVE_COMICS, FILTER_COMICS, ERROR_COMICS } from '../actions/actionTypes'
import initialState from './initialState'

export default(state = initialState.comics, action) => {
    switch(action.type) {
        case REQUEST_COMICS:
            return {...state, isFetching: true}
        case RECEIVE_COMICS:
            return {...state, isFetching: false, data: action.payload}
        case ERROR_COMICS:
            return {...state, isFetching: false, error: action.payload}
        case FILTER_COMICS:
            return {...state, isFetching: true}
        default:
            return state
    }
}
