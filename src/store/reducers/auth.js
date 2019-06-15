import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from '../actions/actionTypes'
import initialState from './initialState'

export default(state = initialState.user, action) => {
    switch(action.type) {
        case AUTH_REQUEST:
            return {...state, isFetching: true}
        case AUTH_SUCCESS:
            return {...state, isFetching: false, token: action.token, userId: action.userId}
        case AUTH_ERROR:
            return {...state, isFetching: false, error: action.payload}
        case AUTH_LOGOUT:
            return {...state, token: null, userId: null}
        default:
            return state
    }
}