import { ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY, ERROR_ITEM } from '../actions/actionTypes'
import initialState from './initialState';

export default(state = initialState.shoppingCart, action) => {
    switch(action.type) {
        case ADD_ITEM:
            let addedItem =  action.payload
            let existingItem = state.addedItems.find((item) => item.id === addedItem.id)
            console.log(existingItem)
            if(existingItem) {
                existingItem.quantity += 1
                return {
                    ...state,
                    totalPrice: (Number(state.totalPrice) + Number(existingItem.price)).toFixed(2)
                }
            } else {
                addedItem.quantity = 1
                let newTotal = (Number(state.totalPrice) + Number(addedItem.price)).toFixed(2)
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    totalPrice: newTotal
                }
            }

        case REMOVE_ITEM:
            let itemToRemove = state.addedItems.find((item) => item.id === action.payload)
            let newItems = state.addedItems.filter((item) =>  item.id !== action.payload)

            let newTotal = (Number(state.totalPrice) - (Number(itemToRemove.price) * itemToRemove.quantity)).toFixed(2)

            return {
                ...state,
                addedItems: newItems,
                totalPrice: newTotal
            }

        case ADD_QUANTITY:
            let addedItemAddQuantity = state.addedItems.find((item) => item.id === action.payload)
            addedItemAddQuantity.quantity += 1
            let newTotalAddQuantity = (Number(state.totalPrice) + Number(addedItemAddQuantity.price)).toFixed(2)

            return {
                ...state,
                totalPrice: newTotalAddQuantity
            }

        case SUB_QUANTITY:
            let addedItemSubQuantity = state.addedItems.find((item) => item.id === action.payload)

            if(addedItemSubQuantity.quantity === 1) {
                let newItemsSubQuantity = state.addedItems.filter((item) =>  item.id !== action.payload)
                let newTotalSubQuantity = (Number(state.totalPrice) - Number(addedItemSubQuantity.price)).toFixed(2)

                return {
                    ...state, 
                    addedItems: newItemsSubQuantity,
                    totalPrice: newTotalSubQuantity
                }
            } else {
                addedItemSubQuantity.quantity -= 1
                let newTotalSubQuantity = (Number(state.totalPrice) - Number(addedItemSubQuantity.price)).toFixed(2)

                return {
                    ...state,
                    totalPrice: newTotalSubQuantity
                }
            }

        case ERROR_ITEM:
            return {...state, error: action.payload}
        default:
            return state
    }
}