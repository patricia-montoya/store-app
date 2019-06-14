import { ADD_ITEM, REMOVE_ITEM, ERROR_ITEM } from './actionTypes'

export const addItem = (comic) => ({
    type: ADD_ITEM,
    payload: comic
})

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id
})

export const errorItem = (error) => ({
    type: ERROR_ITEM,
    payload: error
})