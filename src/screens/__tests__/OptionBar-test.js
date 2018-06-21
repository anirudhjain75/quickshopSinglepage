import React from 'react';
import OptionBar from '../OptionBar';
import {Provider} from 'react-redux';

import renderer from 'react-test-renderer';
import reducers from "../../reducers";
import {createStore} from "redux";

const state = createStore(reducers, {});

test("Option Bar renders properly", () => {
    const options = renderer.create(<Provider store={state}><OptionBar/></Provider>).toJSON();
    expect(options).toMatchSnapshot();
})