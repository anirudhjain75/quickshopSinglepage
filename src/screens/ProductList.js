import React from 'react';
import {View, FlatList, Text, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import {addToCart, removeFromCart} from "../actions";
import products from './products.json';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinCode: ''
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    }
    onNavigatorEvent(event) {
        if (event.type === 'NavBarButtonPress') {
            if( event.id === 'cart' ) {
                this.props.navigator.push({
                    screen: 'quickshop.cart',
                    title: 'Your Cart'
                })
            }
        }
    }
    renderAddToCart(product) {
        return (
            <TouchableOpacity
                style={{ backgroundColor: '#ffa24a', marginTop: 10, height: 30, width: 130, justifyContent: 'center', borderRadius: 5, alignSelf: 'center'}}
                onPress = {() => {
                    this.props.addToCart({
                        name: product.item.productName,
                        price: product.item.productPrice,
                        image: product.item.productImage,
                        store: product.item.storeName,
                        quantity: 1
                    });
                }}
            >
                <Text style={{color: "#ffffff", alignSelf: 'center', fontWeight: '700', fontSize: 18}}>Add To Cart</Text>
            </TouchableOpacity>
        )
    };
    render() {
        return(
            <View>
                <FlatList
                    data={products}
                    renderItem={({item}) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#c3c3c3'}}>
                                <Text style={{fontSize: 18, fontWeight: '500', color: '#232323', marginTop: 5, marginBottom: 15}}>{item.category}</Text>
                                <FlatList
                                    horizontal
                                    data={item.products}
                                    style={{marginBottom: 20}}
                                    renderItem={(product) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.props.navigator.push({screen: 'quickshop.productPage', passProps: {product: product.item, },
                                                        navigatorButtons: {
                                                            rightButtons: [
                                                                {
                                                                    icon: require('../../img/cart.png'),
                                                                    id: 'cart',
                                                                    disableIconTint: true
                                                                }
                                                            ]
                                                        }})
                                                }}
                                            >
                                                <Image source={{ uri : product.item.productImage}} style={styles.pastPurchaseItemStyle}/>
                                                <Text style={{marginLeft: 5, marginTop: 5, marginBottom: 5}}> {product.item.productName } </Text>
                                                <Text style={{marginLeft: 10}}>{product.item.productPrice}</Text>
                                                {this.renderAddToCart(product)}
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = {
    pastPurchaseItemStyle: {
        marginLeft: 5,
        height: 150,
        width: 150
    }
};

const mapStateToProps = state => {
  const cart = state.cart.cart;
  return {cart}
};

export default connect(mapStateToProps, {addToCart, removeFromCart})(ProductList);