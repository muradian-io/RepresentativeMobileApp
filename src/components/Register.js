import React from 'react';
import { StyleSheet, TextInput, Text, View, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import { NavigationBar, Icon } from '@shoutem/ui'
import { Registeration } from '../functions/Registeration'
import { Constants, Location, Permissions } from 'expo';


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            locationResult: null,
            latitude: null
        }
    }

    register() {
        const { name, email, phone, locationResult } = this.state
        const newPharmacy = {
            name: name,
            email: email,
            phone: phone,
            address: locationResult
        }
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (name === "") {
            alert('Please enter a name')
         }
        else if (email === '') {

            alert('Please enter Email address')

        }
        else if (reg.test(email) === false) {
            alert('Email is not valid')
            return false;
        }

        else if (phone === "") {
           alert('Please enter a phone number')
        }
        else {
        Registeration(newPharmacy);
        this.props.navigation.navigate("home")}
    }




    componentDidMount() {
        this._getLocationAsync();
    }



    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });
    };




    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "rgba(0, 151, 230,1.0)f" }}>
                    <NavigationBar
                        styleName="inline + clear"
                        leftComponent={<Icon name="back" onPress={() => this.props.navigation.goBack()} />}
                    />
                </View>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <Text style={styles.logo}> Register </Text>
                    <View style={styles.textinput}>
                        <TextInput
                            placeholder="Name"
                            style={styles.input}
                            placeholderTextColor='rgba(0,0,0,0.3)'
                            returnKeyType="next"
                            onChangeText={name => this.setState({ name })}

                        />
                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                            placeholderTextColor='rgba(0,0,0,0.3)'
                            keyboardType="email-address"
                            onChangeText={email => this.setState({ email })}

                        />
                        <TextInput
                            placeholder="Phone"
                            style={styles.input}
                            placeholderTextColor='rgba(0,0,0,0.3)'
                            onChangeText={phone => this.setState({ phone })}
                        />
                        <TextInput
                            placeholder="Address"
                            style={styles.input}
                            value={this.state.locationResult}
                            placeholderTextColor='rgba(0,0,0,0.3)'
                            onChangeText={address => this.setState({ address })}
                        />
                        <TouchableOpacity style={styles.buttonstyle} onPress={() => this.register()}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', padding: 8 }}>Register</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 151, 230,1.0)' }}>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 151, 230,1.0)'
    },
    textinput: {
        margin: 15,
        marginTop: '10%',
        marginBottom: 10,
        padding: 15,
        alignSelf: 'stretch',
        borderWidth: 1,
        // borderColor: '#000',
        backgroundColor: 'rgba(255,255,255,1.0)',
        borderRadius: 10,
    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,1.0)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)'
    },
    logo: {
        //marginTop:'20%',
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        backgroundColor: 'transparent'
    },
    buttonstyle: {
        alignSelf: 'stretch',
        backgroundColor: 'rgba(0, 151, 230,1.0)',
        padding: 5,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 3,
    }
})