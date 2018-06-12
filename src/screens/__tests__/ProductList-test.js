import React from 'react';
import ProductList from '../ProductList';

import renderer from 'react-test-renderer';
import reducers from "../../reducers";
import {createStore} from "redux";
import {Provider} from 'react-redux';

const state = createStore(reducers, {});
test("Product List page", () => {
    const productsList = renderer.create(<Provider store={state}><ProductList/></Provider>).toJSON();
    expect(productsList).toMatchSnapshot();
});