import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import { connect } from 'react-redux';

class OptionBar extends React.Component {

    showLoginOptions() {
        if(!this.props.login) {
            return (
                <View style={{marginTop: 30, flexDirection: 'row', justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: '#c3c3c3', paddingBottom: 20}}>
                    <TouchableOpacity
                        style={{height: 25, width: 100, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => {
                            console.log(this.props);
                            return this.props.navigator.push({screen: 'quickshop.loginform', title: 'login form'})
                        }}
                    >
                        <Text style={{fontSize: 14, color: 'white'}}> Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 25, width: 100, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 14, color: 'white'}}> Sign Up </Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return null
    }

    render() {
        return (
            <View style={{paddingLeft: 5}}>
                <View style={{marginTop: 40, marginLeft: 40}}>
                    <Text style={{fontSize: 16}}>{`Hi ` + this.props.name}</Text>
                </View>
                {this.showLoginOptions()}
                <View style={{marginTop: 15}}>
                    <Button
                        title={'Home'}
                        onPress={() => {
                            return (
                                this.props.navigator.popToRoot({
                                    animated: true,
                                    animationType: 'fade'
                                }))}
                        }
                    />
                    <Button
                        title={'Popular Products'}
                        onPress={() => null}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
  return { name: state.auth.firstName, login: state.auth.login}
};

export default connect(mapStateToProps)(OptionBar);