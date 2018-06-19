import React from 'react';
import { View, Text, SectionList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import storeData from './stores.json';

class Cart extends React.Component {

    render() {
        const cart = this.props.cart;
        const storeData = [];
        cart.map((item)=> {
            if(storeData.indexOf(item.store) === -1)
            {
                storeData.push(item.store);
            }
        });
        console.log(this.props.cart);
        return <View>
            {storeData.map((item) => {
                return (
                    <View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 40,
                            borderColor: '#98ff7f',
                            borderWidth: 2
                        }}>
                            <Text>{item}</Text>
                        </View>
                        {cart.map((product) => {
                            if (product.store === item) {
                                return (
                                    <View>
                                        <Text> {product.name}</Text>
                                    </View>
                                )
                            }
                        })}
                        <TouchableOpacity style={{
                            alignSelf: 'center',
                            backgroundColor: '#ffac3a',
                            height: 40,
                            width: 200,
                            marginTop: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 4
                        }}>
                            <Text style={{fontSize: 25, color: '#ffffff', fontWeight: '700'}}> Checkout </Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart
    }
};

export default connect(mapStateToProps)(Cart);