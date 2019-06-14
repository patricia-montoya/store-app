import { combineReducers } from 'redux'
import comics from './comics'
import users from './users'
import shoppingCart from './shoppingCart'

export default combineReducers({
    comics,
    users,
    shoppingCart
})