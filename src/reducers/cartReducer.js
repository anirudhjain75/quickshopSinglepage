const initialState = {
    cart: [{
        name: "Chocolate 100g",
        price: 100,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chocolate_%28blue_background%29.jpg/400px-Chocolate_%28blue_background%29.jpg",
        store: "Big Bazaar",
        quantity: 1
    }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART' :
        {
            let uuid = 'undefined';
            state.cart.map((item) => {
                if (item.name == action.payload.name)
                {
                    uuid = item.uuid;
                    item.quantity = item.quantity + 1
                }
            });
            if (uuid == 'undefined')
            {
                return {
                    ...state,
                    cart: [ ...state.cart, {...action.payload, quantity: 1}]
                };
            }
            const tmp = state;
            return tmp;
        }
        case 'REMOVE_FROM_CART' : {
            const uuid = action.payload;
            state.cart.map((item) => {
                if (item.uuid == uuid && item.quantity >= 0)
                {
                    item.quantity = item.quantity - 1;
                }
            });
            return {...state};
        }
        default:
            return state;
    }
}