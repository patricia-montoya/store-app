import { REQUEST_COMICS, RECEIVE_COMICS, FILTER_COMICS, ERROR_COMICS } from './actionTypes'
import { getComics, getFilteredComics } from '../../services/comics'

export const requestComics = () => ({
    type: REQUEST_COMICS
})

export const receiveComics = (comics) => ({
    type: RECEIVE_COMICS,
    payload: comics
})

export const catchErrorComics = (error) => ({
    type: ERROR_COMICS,
    payload: error
})

export const filterComics = () => ({
    type: FILTER_COMICS
})

export const fetchComics = () => (dispatch) => {
    dispatch(requestComics())
    getComics()
    .then((data) => dispatch(receiveComics(data)))
    .catch((error) => dispatch(catchErrorComics(error)))
}

export const fetchFilteredComics = (filter) => (dispatch) => {
    dispatch(filterComics())
    getFilteredComics(filter)
    .then((data) => dispatch(receiveComics(data)))
    .catch((error) => dispatch(catchErrorComics(error)))
}
