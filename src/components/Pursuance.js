import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import { NavigationBar, Title, Icon, ListView, Text, Heading } from '@shoutem/ui'
import MapView, { Marker } from 'react-native-maps';

export default class Pursuance extends React.Component {

    render() {
        const { id, name } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: "rgba(0, 151, 230,1.0)f" }}>
                    <NavigationBar
                        styleName="inline + clear"
                        leftComponent={<Icon name="back" onPress={() => this.props.navigation.goBack()} />}
                        centerComponent={<Title style={{ fontSize: 20, paddingTop: 15 }}> {`${name}`} </Title>}
                    />
                </View>
                <View style={styles.mapCon}>
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
                <Text style={{ alignSelf: 'center' }}>{ Platform.OS === 'ios' ? "Copyright © 2012-2018 Apple Inc" : 'Google Inc' }</Text>
                <View style={styles.buttonCon}>
                    <TouchableOpacity style={styles.registerButton} onPress={() => (this.props.navigation.navigate("order", { ...this.props.navigation.state.params }))}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='plus-button' style={{ color: 'white', fontSize: 40 }} />
                            <Heading style={{ color: 'white' }}>Select Drugs</Heading>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    mapCon: {
        flex: 3,
        margin:5

    },
    buttonCon: {
        flex: 1,
        justifyContent: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    registerButton: {
        width: '90%',
        height: '30%',
        margin: 10,
        marginBottom: 20,
        alignSelf: 'center',
        backgroundColor: "rgba(0, 151, 230,1.0)f",
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    }
})