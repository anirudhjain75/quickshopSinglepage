import React from 'react';
import {View, Text} from 'react-native';

class inStoreCamera extends React.Component {
    render() {
        return (
            <View>
                <View style={{height: 300, backgroundColor: '#f7ff79'}}>
                </View>
                <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 20}}>Items on your basket</Text>
            </View>
        )
    }
}

export default inStoreCamera;