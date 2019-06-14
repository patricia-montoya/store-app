import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './actionTypes'
import { signupNewUser } from '../../api/users'


export const signupRequest = () => ({
    type: SIGNUP_REQUEST
})

export const signupSuccess = (authData) => ({
    type: SIGNUP_SUCCESS,
    payload: authData
})

export const signupError = (error) => ({
    type: SIGNUP_ERROR,
    payload: error
})

export const signupUser = (authData) => (dispatch) => {
    dispatch(signupRequest())
    signupNewUser(authData)
    .then((response) => {
        console.log(response)
        dispatch(signupSuccess(response.data))
    })
    .catch((error) => {
        console.log(error)
        dispatch(signupError(error))
    })
}