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
        screen: 'quickshop.home',
        title: 'QuickShop',
        navigatorStyle: {},
        navigatorButtons: {
            rightButtons: [
                {
                    icon: require('../img/cart.png'),
                    id: 'cart',
                    disableIconTint: true
                }
            ],
            leftButtons: [
                {
                    icon: require('../img/list.png'),
                    id: 'list',
                    disableIconTint: true
                }
            ]
        }
    },
    drawer : {
        left: {
            screen: 'quickshop.optionBar',
            fixedWidth: 300
        },
        disableOpenGesture: true
    }
});