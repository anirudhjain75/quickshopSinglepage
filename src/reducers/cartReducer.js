const initialState = {
    cart: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART' :
            return {
                ...state,
                cart: [ ...state.cart, action.payload]
            };
        case 'REMOVE_FROM_CART' : {
            let temp = state.cart;
            const index = temp.indexOf(action.payload);
            temp.splice(index, 1);
            return {
                ...state,
                cart: temp
            };
        }
        default:
            return state;
    }
}