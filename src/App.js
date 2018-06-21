import React from 'react';
import { Navigation } from 'react-native-navigation';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { registerScreens } from "./screens";
import reducers from './reducers';

const state = createStore(reducers, applyMiddleware(thunk));

registerScreens( state, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'quickshop.main',
        title: 'QuickShop'
    }
});