import React from 'react';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import { MKTextField, MKButton } from 'react-native-material-kit';
import { connect } from 'react-redux';

import {emailChange, passChange, FirstNameChange, LastNameChange} from "../actions";

class SignUpForm extends React.Component {
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
    onFirstNameChange(text) {
        this.props.FirstNameChange(text);
    }
    onLastNameChange(text) {
        this.props.LastNameChange(text);
    }
    render() {
        return (
            <ScrollView style={{flexDirection: 'column'}}>
                <View style={{marginLeft: 40, marginTop: 15,  height: 150, width: 300}}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
                        <MKTextField
                            placeholder={'First Name'}
                            autoCorrect={false}
                            floatingLabelEnabled={true}
                            style={{marginTop: 20, width: 140}}
                            onChangeText={this.onFirstNameChange.bind(this)}
                            value={this.props.firstName}
                        />
                        <MKTextField
                            placeholder={'Last Name'}
                            autoCorrect={false}
                            floatingLabelEnabled={true}
                            style={{marginTop: 20, width: 140}}
                            onChangeText={this.onLastNameChange.bind(this)}
                            value={this.props.lastName}
                        />
                    </View>
                    <MKTextField
                        placeholder={'Email'}
                        autoCorrect={false}
                        floatingLabelEnabled={true}
                        style={{marginTop: 20}}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                    <MKTextField
                        placeholder={'Password'}
                        autoCorrect={false}
                        password={true}
                        floatingLabelEnabled={true}
                        style={{marginTop: 20}}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                    <MKButton
                        style={{marginTop: 50, alignSelf: 'center', backgroundColor: 'black', width: 250, height: 40, justifyContent: 'center'}}
                        onPress={() => {
                            console.log(this.props)
                        }}
                    >
                        <Text style={{fontSize: 23, color: '#ffffff', alignSelf: 'center', fontWeight: '600'}}>Sign Up</Text>
                    </MKButton>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const {email, password, firstName, lastName} = state.auth;
    return {email, password, firstName, lastName}
};

export default connect(mapStateToProps, {emailChange, passChange, FirstNameChange, LastNameChange})(SignUpForm);