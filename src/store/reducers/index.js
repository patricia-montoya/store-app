import { combineReducers } from 'redux'
import comics from './comics'
import users from './users'

export default combineReducers({
    comics,
    users
})