import React from 'react';
import ReduxThunk from 'redux-thunk';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';

import { registerScreens } from "./screens";
import reducers from './reducers';

const state = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const config = {
    apiKey: "AIzaSyBOtRvViBHdnrbzOrydozmuwkRCrGV8S-c",
    authDomain: "quickshop-e8d3e.firebaseapp.com",
    databaseURL: "https://quickshop-e8d3e.firebaseio.com",
    projectId: "quickshop-e8d3e",
    storageBucket: "quickshop-e8d3e.appspot.com",
    messagingSenderId: "243144783676"
};
firebase.initializeApp(config);

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
            disableOpenGesture: false,
            fixedWidth: 300
        }
    }
});