import React from 'react';
import Cart from '../Cart';

import renderer from 'react-test-renderer';

test("Cart is rendered properly", () => {
    const cart = renderer.create(<Cart />).toJSON();
    expect(cart).toMatchSnapshot();
});