import React from 'react';
import {WebView, View, Text} from 'react-native';

class paymentPage extends React.Component {
    render() {
        return (
            <WebView
                source={{uri: 'https://www.paypal.com/in/home'}}
                style={{flex: 1}}
            />
        )
    }
}

export default paymentPage;