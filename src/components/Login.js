import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, Platform } from 'react-native';
import axios from 'axios'
import { LoginAttempt } from '../functions/LoginAttempt'



export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            userEmail: '',
            userPassword: '',
        }
    }

    componentDidMount() {
    }


    login = () => {
        const { userEmail, userPassword } = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (userEmail === '') {

            alert('Please enter Email address')

        }

        else if (reg.test(userEmail) === false) {
            alert('Email is not valid')
            return false;
        }

        else if (userPassword === "") {
           alert('Please enter password')
        }

        else if (LoginAttempt(userEmail, userPassword))
            this.props.navigation.navigate("home")
        else
            alert("Wrong Input")
        Keyboard.dismiss();
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>

                <View style={styles.content}>
                    <Text style={styles.logo}> - DIS - </Text>
                </View>

                <View style={styles.textinput}>
                    <TextInput
                        placeholder="email"
                        style={styles.input}
                        placeholderTextColor='rgba(0,0,0,0.3)'
                        returnKeyType="next"
                        keyboardType="email-address"
                        onChangeText={userEmail => this.setState({ userEmail })}
                    />
                    <TextInput
                        placeholder="password"
                        style={styles.input}
                        placeholderTextColor='rgba(0,0,0,0.3)'
                        returnKeyType="go"
                        secureTextEntry
                        onChangeText={userPassword => this.setState({ userPassword })}
                    />
                    <TouchableOpacity style={styles.buttonstyle} onPress={() => (this.login())} >
                        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', padding: 2 }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 151, 230,1.0)'
    },
    textinput: {
        margin: 15,
        padding: 15,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(255,255,255,1.0)',
        borderRadius: 10
    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,1.0)',
        borderBottomWidth: 1,
        borderBottomColor: Platform.OS === 'ios' ? 'rgba(0,0,0,0.2)' : 'white'
    },
    logo: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontStyle:'italic',
        fontSize: 48,
        marginBottom: 20,
        backgroundColor: 'transparent'
    },
    buttonstyle: {
        alignSelf: 'stretch',
        backgroundColor: 'rgba(0, 151, 230,1.0)',
        padding: 5,
        marginTop: 30,
        borderRadius: 3
    }
})