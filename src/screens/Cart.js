import React from 'react';
import { View, Text, SectionList, TouchableOpacity} from 'react-native';

import storeData from './stores.json';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View>
                <SectionList
                    sections={storeData}
                    renderSectionHeader={({section}) => {
                        return(
                            <View style={{marginTop: 15, paddingBottom: 15, flexDirection:'row',height:40, alignItems: 'center', justifyContent: 'space-evenly', borderBottomWidth: 1, borderColor: '#c3c3c3'}}>
                                <Text style={{fontSize: 16, color: 'green'}}> {section.storeName} </Text>
                                <Text style={{fontSize: 16, color: 'green'}}> {`Rs ` + section.storePriceTotal}</Text>
                            </View>
                        )
                    }}
                    renderItem={({item}) => {
                        return (
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderBottomWidth:1, borderColor: '#d7d7d7'}}>
                                <Text style={{width: 100, marginTop:10, marginBottom:10}}>{item.productQuantity + ` * ` +  item.productName}</Text>
                                <Text>{item.productQuantity * item.productPrice}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => index}
                />
                <TouchableOpacity style={{alignSelf: 'center', backgroundColor: '#ffac3a', height: 40, width: 200, marginTop: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 4}}>
                    <Text style={{fontSize: 25, color: '#ffffff', fontWeight: '700'}}> Checkout </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Cart;