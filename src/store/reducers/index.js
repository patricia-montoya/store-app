import { combineReducers } from 'redux'
import comicsReducer from './comics'
import authReducer from './auth'
import shoppingCartReducer from './shoppingCart'

export default combineReducers({
    comics: comicsReducer,
    auth: authReducer,
    shoppingCart: shoppingCartReducer
})