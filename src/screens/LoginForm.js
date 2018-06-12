import React from 'react';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import { MKTextField, MKButton } from 'react-native-material-kit';
import { connect } from 'react-redux';

import {emailChange, passChange} from "../actions";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.props.navigator.setButtons({
            leftButtons: [
                {
                    icon: require('../../img/back.png'),
                    id: 'back',
                    disableIconTint: true
                }
            ],
            animated: true
        });
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }
    onNavigatorEvent(event) {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'back') {
                this.props.navigator.dismissModal({
                    animated: 'slide-down'
                })
            }
        }
    }
    onEmailChange(text) {
        this.props.emailChange(text);
    }
    onPasswordChange(text) {
        this.props.passChange(text);
    }
    render() {
        return (
            <ScrollView style={{flexDirection: 'column'}}>
                <View style={{marginLeft: 40, marginTop: 15,  height: 150, width: 300}}>
                    <MKTextField
                        placeholder={'Email'}
                        floatingLabelEnabled={true}
                        style={{marginTop: 30}}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                    <MKTextField
                        placeholder={'Password'}
                        password={true}
                        floatingLabelEnabled={true}
                        style={{marginTop: 20}}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                    <MKButton
                        style={{marginTop: 50, alignSelf: 'center', backgroundColor: 'black', width: 250, height: 40, justifyContent: 'center'}}
                        onPress={() => {

                        }}
                    >
                        <Text style={{fontSize: 23, color: '#ffffff', alignSelf: 'center', fontWeight: '600'}}>Login</Text>
                    </MKButton>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const {email, password} = state.auth;
    return {email, password}
};

export default connect(mapStateToProps, {emailChange, passChange})(LoginForm);