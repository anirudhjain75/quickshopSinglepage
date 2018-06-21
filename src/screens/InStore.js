import React from 'react';
import { View, Text, TextInput, Image, ScrollView, FlatList, TouchableWithoutFeedback} from 'react-native';

import pastPurchase from './pastPurchaseData.json';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinCode: ''
        };

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
                    <Image source={require('../../img/offerBanner.jpg')} style={{height: 170, width: 'auto'}}/>
                </View>
                <View>
                    <Text style={{alignSelf: 'center', fontSize: 25}}> Stores </Text>
                    <View style={{flexDirection: 'row', height: 100, justifyContent: 'space-evenly', marginTop: 20}}>
                        <TouchableWithoutFeedback onPress={() => {
                            this.props.navigator.push({
                                screen: 'quickshop.scanner'
                            })
                        }}>
                            <Image source={require('../../img/BigBazaarLogo.jpg')} style={{height: 80, width: 80}}/>
                        </TouchableWithoutFeedback>
                        <Image source={require('../../img/relianceFreshLogo.png')} style={{height: 80, width: 80}}/>
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