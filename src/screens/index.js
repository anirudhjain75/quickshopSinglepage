import { Navigation } from 'react-native-navigation';

import Home from './Home';
import Cart from './Cart';
import LoginForm from './LoginForm';
import SignUpForm from './signupForm';
import ProductList from './ProductList';
import Product from "./Product";
import Main from "./Main";
import InStore from "./InStore";
import startPoint from "./startPoint";

export function registerScreens(state, Provider) {
    Navigation.registerComponent('quickshop.main', () => Main, state, Provider);
    Navigation.registerComponent('quickshop.home', () => Home, state, Provider);
    Navigation.registerComponent('quickshop.cart', () => Cart, state, Provider);
    Navigation.registerComponent('quickshop.loginform', () => LoginForm, state, Provider);
    Navigation.registerComponent('quickshop.signup', () => SignUpForm, state, Provider);
    Navigation.registerComponent('quickshop.productList', () => ProductList, state, Provider);
    Navigation.registerComponent('quickshop.productPage', () => Product, state, Provider);
    Navigation.registerComponent('quickshop.instore', () => InStore, state, Provider);
    Navigation.registerComponent('quickshop.entry', () => startPoint, state, Provider);
}