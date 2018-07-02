import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';

import {addToCart, removeFromCart} from "../actions";

import storeData from './stores.json';

class Cart extends React.Component {

    render() {
        const storeData = [];
        this.props.cart.map((item)=> {
            if(storeData.indexOf(item.store) === -1)
            {
                storeData.push(item.store);
            }
        });
        return <ScrollView>
            {storeData.map((item) => {
                return (
                    <ScrollView>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 40,
                            borderColor: '#98ff7f',
                            borderWidth: 2
                        }}>
                            <Text>{item}</Text>
                        </View>
                        {this.props.cart.map((product) => {
                            if (product.store === item) {
                                return (
                                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#bababa', paddingBottom: 10}}>
                                        <View style={{paddingLeft: 10, paddingTop: 10}}>
                                            <Image source={{uri: product.image}} style={{height: 70, width: 70}}/>
                                        </View>
                                        <View style={{flexDirection: 'column', marginLeft: 50}}>
                                            <Text style={{paddingTop: 15}}> {product.name}</Text>
                                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                                <TouchableOpacity onPress={() => {
                                                    this.props.removeFromCart(product.uuid);
                                                }}>
                                                    <Image source={require('../../img/back.png')}/>
                                                </TouchableOpacity>
                                                <Text style={{marginTop: 5, fontSize: 20}}>{product.quantity}</Text>
                                                <TouchableOpacity onPress={() => {
                                                    this.props.addToCart({
                                                        name: product.name,
                                                        price: product.price,
                                                        image: product.image,
                                                        store: product.store,
                                                        quantity: 1
                                                    });
                                                }}>
                                                    <Image source={require('../../img/forward.png')}/>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={{marginLeft: 50}}>
                                            <Text style={{marginTop: 15}}> Amount </Text>
                                            <Text style={{marginTop: 20, fontSize: 20}}> {product.price * product.quantity} </Text>
                                        </View>
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
                            borderRadius: 4,
                            marginBottom: 50
                        }}
                        onPress={() => {
                            this.props.navigator.push({
                                screen: 'quickshop.payment',
                                title: 'Payment'
                            })
                        }}
                        >
                            <Text style={{fontSize: 25, color: '#ffffff', fontWeight: '700'}}> Checkout </Text>
                        </TouchableOpacity>
                    </ScrollView>
                )
            })}
        </ScrollView>
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart
    }
};

export default connect(mapStateToProps, {addToCart, removeFromCart})(Cart);