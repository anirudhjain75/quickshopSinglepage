import { Navigation } from 'react-native-navigation';

import Home from './Home';
import Cart from './Cart';
import OptionBar from './OptionBar';

export function registerScreens(state, Provider) {
    Navigation.registerComponent('quickshop.home', () => Home, state, Provider);
    Navigation.registerComponent('quickshop.cart', () => Cart, state, Provider);
    Navigation.registerComponent('quickshop.optionBar', () => OptionBar, state, Provider);
}