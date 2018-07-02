import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

class Main extends React.Component {
    render() {
        return (
            <View style={{flex: 1, opacity: 50}}>
                <ImageBackground style={{flex: 2}} source={require('../../img/shopOnline.jpg')}>
                    <TouchableOpacity
                        style={{flex:1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 20}}
                        onPress={() => {
                            this.props.navigator.push({
                                screen: 'quickshop.home',
                                title: 'QuickShop',
                                navigatorStyle: {color: '#000000', paddingLeft: 10},
                                navigatorButtons: {
                                    rightButtons: [
                                        {
                                            icon: require('../../img/cart.png'),
                                            id: 'cart',
                                            disableIconTint: true
                                        }
                                    ]
                                },
                                backButtonTitle: 'Back'

                            })
                        }}
                        >
                        <Text style={{fontSize: 25, color: '#a600ff'}}>Shop from cataloge</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground style={{flex: 2}} source={require('../../img/shopInstore.jpg')}>
                    <TouchableOpacity
                        style={{flex:1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 20}}
                        onPress={() => {
                            this.props.navigator.push({
                                screen: 'quickshop.instore',
                                title: 'QuickShop',
                                backButtonTitle: 'Back',
                                navigatorStyle: {},
                                navigatorButtons: {}
                            })
                        }}
                        >
                        <Text style={{fontSize: 25, color: '#a600ff'}}>Shop in store</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

export default Main;