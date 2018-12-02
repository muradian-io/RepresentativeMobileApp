import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationBar, Title, Icon, ListView, Text } from '@shoutem/ui'
import MapView, { Marker } from 'react-native-maps';
import firebase from 'firebase'


export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };
    }
    componentDidMount(){
    }

    // writeUserData(userId, name, email, imageUrl) {
    //     firebase.database().ref('users/' + userId).set({
    //       username: name,
    //       email: email,
    //       profile_picture : imageUrl
    //     });
    //   }

    // renderRow = (x) => {
    //     return (
    //         <View style={{ backgroundColor: "white", borderBottomWidth: 1.5, borderBottomColor: "#eff0f0" }}>
    //             <View style={{ paddingTop: "3%" }}>
    //                 <TouchableOpacity onPress={() => this.props.navigation.navigate('drugs', { ...x })}>
    //                     <Text style={{ fontSize: 20, paddingLeft: 5 }}>{x.category.title}</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     );
    // }


    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
    }



    render() {
       // var database = firebase.database

       const {id, name, address, registered, phone, email, drugs } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: "rgba(0, 151, 230,1.0)f" }}>
                    <NavigationBar

                        styleName="inline + clear"
                        leftComponent={<Icon name="back" onPress={() => this.props.navigation.goBack()} />}
                        centerComponent={<Title style={{ fontSize: 20, paddingTop: 15 }}> {`${name}`} </Title>}
                        rightComponent={<Icon onPress={() => this.toggleEditMode()} name="edit" />}

                    />
                </View>
                <View style={styles.viewtwo}>
                    <View style={styles.textCon}>
                        {this.state.editMode
                            ? (
                                <View style={styles.editView}>
                                    <Text style={{ padding: 5, fontSize: 25 }} >Email: </Text>
                                    <TextInput placeholder={`${email}`} />
                                </View>

                            )
                            : <Text style={{ padding: 5, fontSize: 25 }}>Email: {`${email}`}</Text>}


                        {this.state.editMode
                            ? (
                                <View style={styles.editView}>
                                    <Text style={{ padding: 5, fontSize: 25 }} >Phone: </Text>
                                    <TextInput placeholder={`${phone}`} />
                                </View>

                            )
                            : <Text style={{ padding: 5, fontSize: 25 }}>Phone: {`${phone}`}</Text>}

                        {this.state.editMode
                            ? (
                                <View style={styles.editView}>
                                    <Text style={{ padding: 5, fontSize: 25 }} >Address: </Text>
                                    <TextInput placeholder={`${address.street}`} />
                                </View>

                            )
                            : <Text style={{ padding: 5, fontSize: 25 }}>Address: {`${address.street}`} </Text>}

                        <Text style={{ padding: 5, fontSize: 25 }}>Registered: {`${registered}`} </Text>
                    </View>


                </View>
                <View style={{ borderBottomWidth: 4, borderBottomColor: '#ddd', flex: 2 , margin:5}}>


                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 36.2063,
                            longitude: 44.0089,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                    <MapView.Marker
                            coordinate={{
                                latitude: 36.2063,
                                longitude: 44.0089,
                            }}
                            title={`${name}`}
                        />
            
                    </MapView>

                </View>
                <Text style={{alignSelf:'center',marginBottom:8}}> Copyright © 2012-2018 Apple Inc </Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textStyle:{
        padding:5,
        fontSize:25
    },
    viewtwo: {
        flex: 1,
        padding: 5,
    },
    textCon: {
        flex: 1,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5
    },
    purch: {
        margin: 10,
        marginTop: 20,
        padding: 5,
        flex: 1,
        backgroundColor: '#1F618D',
        borderRadius: 10,
        alignItems: 'center',
        maxHeight: 40,
    },
    purchText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    editView: {
        flexDirection: 'row'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})