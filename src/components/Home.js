import React from 'react';
import { View, TouchableOpacity , Keyboard} from 'react-native';
import { Heading, Text } from '@shoutem/ui'
import { pharmacies } from '../Fake Data/Pharmacies'
import axios from 'axios'

export default class home extends React.Component {

    // componentWillMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(resposne => {
    //         console.warn(Response)
    //     })
    // }
   

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "rgba(0, 151, 230,1.0)f" }}>
                <View style={{ flex: 1 }} />
                <View style={{
                    flex: 2,
                    backgroundColor: "white",
                    borderRadius: 9,
                    marginLeft: "5%",
                    marginRight: "5%",
                    alignItems: 'center',

                }}>

                    <TouchableOpacity style={styles.to} onPress={() => (this.props.navigation.navigate("list", { ...pharmacies }))}>
                        <Heading style={{ color: 'white' }}>Pursuance</Heading>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.to} onPress={() => (this.props.navigation.navigate("edit", { ...pharmacies }))}>
                        <Heading style={{ color: 'white' }}>Edit Profile</Heading>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.to} onPress={() => (this.props.navigation.navigate("drugs"))}>
                        <Heading style={{ color: 'white' }}>Drugs List</Heading>
                    </TouchableOpacity>

                    <Text style={{ paddingBottom: 25 }}>Online Drug Inventory System</Text>
                </View>
                <View style={{ flex: 1 }} />

            </View>
        )
    }

}

const styles = {
    to: {
        width: '90%',
        height: '25%',
        margin: 10,
        backgroundColor: "rgba(0, 151, 230,1.0)f",
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    }
};
