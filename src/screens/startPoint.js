import React from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {connect} from 'react-redux';
import {MKTextField, MKButton} from 'react-native-material-kit';

import {optGen, signUp, login} from "../actions";


class startPoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            existingUser: false,
            highlightColor: '#888888',
            placeholder: 'Enter your mobile number',
            mobileNumber: '',
            name: '',
            email: '',
            otp: '',
            signup: true,
            editable: false
        };
    }

    renderSignupComponents() {
        if (this.props.otp && this.state.signup) {
            return (
                <View>
                    <MKTextField
                        placeholder={'Enter your name'}
                        autoCorrect={false}
                        floatingLabelEnabled={true}
                        style={styles.basicInputStyle}
                        onChangeText={(name) => {
                            this.setState(() => {
                                return {
                                    name
                                }
                            })
                        }}
                        value={this.state.name}
                        highlightColor={"#888888"}
                        tintColor={"#888888"}
                    />
                    <MKTextField
                        placeholder={'Enter your email address'}
                        autoCorrect={false}
                        floatingLabelEnabled={true}
                        style={styles.basicInputStyle}
                        onChangeText={(email) => {
                            this.setState(() => {
                                return {
                                    email
                                }
                            })
                        }}
                        value={this.state.email}
                        highlightColor={"#888888"}
                        tintColor={"#888888"}
                    />
                </View>
            )
        }
        else
            return null
    }

    renderOtpEntry() {
        if (this.props.otp) {
            return (
                <View>
                    <MKTextField
                        placeholder={'Enter the One Time Password'}
                        autoCorrect={false}
                        floatingLabelEnabled={true}
                        style={styles.basicInputStyle}
                        onChangeText={(otp) => {
                            this.setState(() => {
                                return {
                                    otp
                                }
                            })
                        }}
                        value={this.state.otp}
                        highlightColor={"#888888"}
                        tintColor={"#888888"}
                    />
                </View>
            )
        }
    }

    renderCheckoutButtonWhenOtp() {
        if (this.props.otp) {
            return (
                <MKButton
                    style={{
                        alignSelf: 'center',
                        backgroundColor: 'black',
                        width: 250,
                        height: 40,
                        marginBottom: 30,
                        borderRadius: 5,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        if(this.props.exist)
                        {
                            this.props.login({
                                mobileNumber: this.state.mobileNumber,
                                otp: this.state.otp
                            }, this.props.navigator)
                        }
                        else {
                            this.props.signUp({
                                mobileNumber: this.state.mobileNumber,
                                otp: this.state.otp,
                                name: this.state.name,
                                email: this.state.email
                            }, this.props.navigator)
                        }
                    }}
                >
                    <Text
                        style={{fontSize: 23, color: '#ffffff', alignSelf: 'center', fontWeight: '600'}}>Continue</Text>
                </MKButton>
            )
        }
        else return null
    }

    renderCheckoutButtonNoOtp() {
        if (!this.props.otp) {
            return (
                <MKButton
                    style={{
                        alignSelf: 'center',
                        backgroundColor: 'black',
                        width: 250,
                        marginTop: 40,
                        height: 40,
                        marginBottom: 30,
                        borderRadius: 5,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        if (this.state.mobileNumber.length === 10) {
                            this.props.optGen(this.props.mobNo)
                        }
                        else {
                            this.setState({
                                highlightColor: '#ff282d',
                                placeholder: 'Please enter valid number'
                            })
                        }
                    }}
                >
                    <Text
                        style={{fontSize: 23, color: '#ffffff', alignSelf: 'center', fontWeight: '600'}}>Continue</Text>
                </MKButton>
            )
        }
        else return null
    }

    textChange(text) {
        if(text.length === 10) {
            this.setState(() => {
                return {
                    highlightColor: '#888888',
                    placeholder: 'Enter your mobile number'
                }
            });
        }
        this.setState(() => {
            return {
            mobileNumber: text
        }});
    }

    render() {
        return <View style={{flex: 1}}>
            <View style={{flex: 3}}>
                {this.renderSignupComponents()}
            </View>
            <View style={{flex: 3}}>
                <MKTextField
                    placeholder={this.state.placeholder}
                    autoCorrect={false}
                    floatingLabelEnabled={true}
                    style={styles.mobileNumberInputStyle}
                    onChangeText={this.textChange.bind(this)}
                    value={this.state.mobileNumber}
                    highlightColor={this.state.highlightColor}
                    tintColor={this.state.highlightColor}
                    editable={!this.props.otp}
                />
                {this.renderOtpEntry()}
                {this.renderCheckoutButtonNoOtp()}
            </View>
            <View style={{flex: 3,alignItems: 'center', justifyContent: 'flex-end'}}>
                {this.renderCheckoutButtonWhenOtp()}
                <Text style={{marginBottom: 20, color: '#2060ff'}}> Terms and Conditions </Text>
            </View>
        </View>
    }
}

const styles = {
    mobileNumberInputStyle: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20
    },
    basicInputStyle: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 40
    }
};

const mapStateToProps = state => {
    return {
        name: state.auth.name,
        mobNo: state.auth.mobNo,
        otp: state.auth.currentOTP,
        exist: state.auth.login
  }
};

export default connect(mapStateToProps, {optGen, signUp, login})(startPoint);