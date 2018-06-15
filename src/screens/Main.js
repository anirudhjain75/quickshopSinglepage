import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Main extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity
                    style={{flex:2, backgroundColor: '#73ffec', alignItems: 'center', justifyContent: 'center'}}
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
                    <Text style={{fontSize: 25}}>Shop from cataloge</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flex:2, backgroundColor: '#fff1a6', alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => {
                        this.props.navigator.resetTo({
                            screen: 'quickshop.instore',
                            title: 'QuickShop',
                            navigatorStyle: {},
                            navigatorButtons: {
                                leftButtons: [
                                    {
                                        icon: require('../../img/back.png'),
                                        id: 'back',
                                        disableIconTint: true
                                    }
                                ]
                            }
                        })
                    }}
                    >
                    <Text style={{fontSize: 25}}>Shop in store</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Main;