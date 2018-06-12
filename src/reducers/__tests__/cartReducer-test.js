import cartReducer from '../cartReducer';
import {addToCart, removeFromCart} from '../../actions';

test("add to cart", ()=>{
    const state = {
        cart: []
    };
    const data = {
        name: 'Apple 1KG',
        price: 100
    };
    expect(cartReducer(state, addToCart(data))).toMatchSnapshot();
});

test("remove from cart", () => {
   const state = {
       cart: [{
           name: "Apple 1KG",
           price: 100
       }]
   };
   const data = {
       name: "Apple 1KG",
       price: 100
   };
   expect(cartReducer(state, removeFromCart(data))).toMatchSnapshot();
});

test("default case", () => {
    const state = {
        cart: []
    };
    const data = {
        name: "Apple 1KG",
        price: 100
    };
    expect(cartReducer(state, {type: "default", payload: data})).toMatchSnapshot();
});