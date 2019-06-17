import { ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY, ERROR_ITEM } from './actionTypes'

export const addItem = (comic) => ({
    type: ADD_ITEM,
    payload: comic
})

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id
})

export const addQuantity = (id) => ({
    type: ADD_QUANTITY,
    payload: id
})

export const subtractQuantity = (id) => ({
    type: SUB_QUANTITY,
    payload: id
})

export const errorItem = (error) => ({
    type: ERROR_ITEM,
    payload: error
})