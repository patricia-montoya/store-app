import { combineReducers } from 'redux'
import comicsReducer from './comics'
import authReducer from './auth'

export default combineReducers({
    comics: comicsReducer,
    auth: authReducer
})