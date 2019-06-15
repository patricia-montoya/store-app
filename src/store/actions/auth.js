import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from './actionTypes'
import { signupNewUser, signinUser } from '../../api/users'

export const authRequest = () => ({
    type: AUTH_REQUEST
})

export const authSuccess = (token, userId) => ({
    type: AUTH_SUCCESS,
    token: token,
    userId: userId
})

export const authError = (error) => ({
    type: AUTH_ERROR,
    payload: error
})

export const logout = () => ({
    type: AUTH_LOGOUT
})

export const checkAuthTimeout = (expirationTime) => dispatch => {
    setTimeout(() => {
        dispatch(logout())
    }, expirationTime * 1000)
}

export const signup = (authData) => (dispatch) => {
    dispatch(authRequest())
    signupNewUser(authData)
    .then((response) => {
        console.log(response)
        dispatch(authSuccess(response.data.idToken, response.data.localId))
        dispatch(checkAuthTimeout(response.data.expiresIn))
    })
    .catch((error) => {
        console.log(error.response.data.error)
        dispatch(authError(error.response.data.error))
    }) 
}

export const signin = (authData) => (dispatch) => {
    dispatch(authRequest())
    signinUser(authData) 
    .then((response) => {
        console.log(response)
        dispatch(authSuccess(response.data.idToken, response.data.localId))
        dispatch(checkAuthTimeout(response.data.expiresIn))
    })
    .catch((error) => {
        console.log(error.response.data.error)
        dispatch(authError(error.response.data.error))
    }) 
}