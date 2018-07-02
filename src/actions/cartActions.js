var uuid = require('uuid/v1')

export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: {...item, uuid: uuid()}
    }
};

export const removeFromCart = (uuid) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: uuid
    }
};