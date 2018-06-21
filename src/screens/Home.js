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
        }
    }
    render()
    {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={{marginBottom: 15}}>
                    <Image source={require('../../img/offerBanner.jpg')} style={{height: 170, width: 'auto'}}/>
                </View>
                <View>
                    <Text style={{alignSelf: 'center', fontSize: 25}}> Stores </Text>
                    <View style={{flexDirection: 'row', height: 100, justifyContent: 'space-evenly', marginTop: 20}}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigator.push({screen: 'quickshop.productList', title: 'Categories', navigatorButtons: {
                                rightButtons: [
                                    {
                                        icon: require('../../img/cart.png'),
                                        id: 'cart',
                                        disableIconTint: true
                                    }
                                ]
                            }})}>
                            <Image source={require('../../img/BigBazaarLogo.jpg')} style={{height: 80, width: 80, borderRadius: 50}}/>
                        </TouchableWithoutFeedback>
                        <Image source={require('../../img/relianceFreshLogo.png')} style={{height: 80, width: 80, borderRadius: 50}}/>
                    </View>
                    <View style={{flexDirection: 'row', height: 100, justifyContent: 'space-evenly', marginTop: 20}}>
                        <Image source={require('../../img/sparLogo.png')} style={{height: 80, width: 80, borderRadius: 50}}/>
                        <Image source={require('../../img/hypercityLogo.png')} style={{height: 80, width: 80, borderRadius: 50}}/>
                    </View>
                    <View style={{flexDirection: 'row', height: 100, justifyContent: 'space-evenly', marginTop: 20}}>
                        <Image source={require('../../img/toyWizLogo.png')} style={{height: 80, width: 80, borderRadius: 50}}/>
                        <Image source={require('../../img/muradLogo.png')} style={{height: 80, width: 80, borderRadius: 50}}/>
                    </View>
                    <View style={{flexDirection: 'row', height: 100, justifyContent: 'space-evenly', marginTop: 20}}>
                        <Image source={require('../../img/epicSportsLogo.png')} style={{height: 80, width: 80, borderRadius: 50}}/>
                        <Image source={require('../../img/costcoLogo.png')} style={{height: 80, width: 80, borderRadius: 50}}/>
                    </View>
                </View>
                <View style={{marginTop: 10, marginBottom: 10}}>
                    <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 20}}> Popular Products </Text>
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