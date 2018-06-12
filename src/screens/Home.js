import React from 'react';
import { View, Text, TextInput, Image, ScrollView, FlatList, TouchableWithoutFeedback} from 'react-native';

import pastPurchase from './pastPurchaseData.json';

class Home extends React.Component {
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
            if( event.id === 'list' ) {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true,
                    to: 'open'
                })
            }
        }
    }
    render()
    {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={styles.pinCodeContainer}>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({ pinCode: text})}
                        value={this.state.pinCode}
                        placeholder='Enter your pincode'
                    />
                </View>
                <View style={{marginBottom: 15}}>
                    <Image source={require('../../img/offerBanner.jpg')} style={{height: 100, width: 'auto'}}/>
                </View>
                <View>
                    <Text style={{alignSelf: 'center', fontSize: 25}}> Stores </Text>
                    <View style={{flexDirection: 'row', height: 150, justifyContent: 'space-evenly', marginTop: 20}}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigator.push({screen: 'quickshop.productList', title: 'Categories'})}>
                            <Image source={require('../../img/store.png')} style={{height: 100, width: 100}}/>
                        </TouchableWithoutFeedback>
                        <Image source={require('../../img/store.png')} style={{height: 100, width: 100}}/>
                    </View>
                    <View style={{flexDirection: 'row', height: 150, justifyContent: 'space-evenly'}}>
                        <Image source={require('../../img/store.png')} style={{height: 100, width: 100}}/>
                        <Image source={require('../../img/store.png')} style={{height: 100, width: 100}}/>
                    </View>
                </View>
                <View style={{marginTop: 10, marginBottom: 10}}>
                    <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 20}}> Previously ordered Items </Text>
                    <FlatList
                        horizontal
                        data={pastPurchase}
                        style={{marginBottom: 20}}
                        renderItem={({item}) => {
                            return (
                                <View>
                                    <Image source={{ uri : item.productImage}} style={styles.pastPurchaseItemStyle}/>
                                    <Text style={{alignSelf: 'center', marginTop: 20, marginBottom: 10}}> {item.productName } </Text>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center'}}>
                                        <Text >{item.productPrice}</Text>
                                        <TouchableWithoutFeedback>
                                            <Image source={require('../../img/addIcon.png')} style={{width: 20, height: 20}}/>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    pinCodeContainer:{
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    textInputStyle: {
        height: 20,
        width: 320,
        backgroundColor: 'white',
        paddingLeft: 5,
        borderWidth: 1,
        borderColor: '#d7d7d7',
        borderRadius: 2
    },
    pastPurchaseItemStyle: {
        marginLeft: 5,
        height: 150,
        width: 150
    }
};

export default Home;