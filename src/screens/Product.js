import React from 'react';
import {ScrollView, Text, Image, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {addToCart, removeFromCart} from "../actions";

class Product extends React.Component {
    render() {
        return (
            <ScrollView>
                <Text style={{marginLeft: 10, marginTop: 10, fontSize: 20}}>{this.props.product.productName}</Text>
                <Image source={{uri: this.props.product.productImage}} style={{height: 300, width: 360, alignSelf: 'center', marginTop: 10, borderRadius: 10}}/>
                <TouchableOpacity
                    style={{height: 50, width: 350, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#ffa24a', marginTop: 10, borderRadius: 10}}
                    onPress = {() => {
                        this.props.addToCart({
                            name: this.props.product.productName,
                            price: this.props.product.productPrice,
                            image: this.props.product.productImage
                        })}}
                    >
                    <Text style={{alignSelf: 'center', color: '#ffffff', fontSize: 20, fontWeight: '700'}}>Add to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{height: 50, width: 350, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#ffa24a', marginTop: 10, borderRadius: 10}}
                >
                    <Text style={{alignSelf: 'center', color: '#ffffff', fontSize: 20, fontWeight: '700'}}>Share</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 18, marginTop: 25, marginLeft: 10, fontWeight: 'bold', textDecorationLine: 'underline', paddingBottom: 2}}>Product Description</Text>
                <Text style={{marginLeft: 10, marginTop: 10}}>{this.props.product.productDescription}</Text>
                <View style={{height: 100}}/>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, {addToCart, removeFromCart})(Product);