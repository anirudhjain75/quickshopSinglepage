import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Main extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity
                    style={{flex:2, backgroundColor: '#73ffec', alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => {
                        this.props.navigator.resetTo({
                            screen: 'quickshop.home',
                            title: 'QuickShop',
                            navigatorStyle: {},
                            navigatorButtons: {
                                rightButtons: [
                                    {
                                        icon: require('../../img/cart.png'),
                                        id: 'cart',
                                        disableIconTint: true
                                    }
                                ],
                                leftButtons: [
                                    {
                                        icon: require('../../img/list.png'),
                                        id: 'list',
                                        disableIconTint: true
                                    }
                                ]
                            }
                        })
                    }}
                    >
                    <Text style={{fontSize: 25}}>Shop from cataloge</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flex:2, backgroundColor: '#fff1a6', alignItems: 'center', justifyContent: 'center'}}
                    >
                    <Text style={{fontSize: 25}}>Shop in store</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Main;