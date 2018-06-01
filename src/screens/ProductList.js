import React from 'react';
import {View, FlatList, Text, Image, TouchableWithoutFeedback} from 'react-native';

import products from './products.json';

class ProductList extends React.Component {
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
                                        console.log(product);
                                        return (
                                            <View>
                                                <Image source={{ uri : product.item.productImage}} style={styles.pastPurchaseItemStyle}/>
                                                <Text style={{alignSelf: 'center', marginTop: 20, marginBottom: 10}}> {product.item.productName } </Text>
                                                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center'}}>
                                                    <Text >{product.item.productPrice}</Text>
                                                    <TouchableWithoutFeedback>
                                                        <Image source={require('../../img/addIcon.png')} style={{width: 20, height: 20}}/>
                                                    </TouchableWithoutFeedback>
                                                </View>
                                            </View>
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


export default ProductList;