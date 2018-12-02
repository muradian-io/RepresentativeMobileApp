import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, Divider } from 'react-native-elements';
import { NavigationBar, Title, Icon, ListView, Text } from '@shoutem/ui'
import axios from 'axios'


export default class Invoice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            selected: [],
        };
    }


    onBuy() {
    //    const pack = {
    //        ListOfDrugs:selected,
    //        PharmID:id
    //    }
    //    axios.post('/user', {
    //     info : this.pack
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    alert('The Process is completed successfully')
    this.props.navigation.navigate("home")
    }


    componentDidMount() {
        
    }

   
    renderRow = (x) => {
        return (
            <View key={x.name.title} style={{ backgroundColor: "white", paddingBottom: 20, paddingLeft: 8, paddingTop: 8 }}>
                <View style={{ alignItems: 'flex-start' }}>
                    <Title style={{ fontSize: 20 }}> {x.name.title} </Title>
                    <Text > {x.name.subtitle}  </Text>
                </View>
            </View>
        );
    }
    render() {
        const items = this.props.navigation.state.params
        const Pharmacy = items.PharmacyInfo
        const selected = items.DrugsList
      //  const name = items.PharmacyName
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ backgroundColor: "rgba(0, 151, 230,1.0)f" }}>
                    <NavigationBar
                        styleName="inline + clear"
                        leftComponent={<Icon name="back" onPress={() => this.props.navigation.goBack()} />}
                        centerComponent={<Title style={{ fontSize: 21, paddingTop: 15 }}> Invoice </Title>}
                        rightComponent={<Icon name="cart" onPress={() => this.onBuy()} />}
                    />
                </View>
                <View style={{flex:1 , justifyContent:'center',alignItems:'center'}}>
                
                <Text style={{fontSize:20 , marginBottom:6}}> Online Drug Inventory System </Text>
                <Text style={{fontSize:18 , marginBottom:4}}> {Pharmacy.name} </Text>
                <Text style={{fontSize:18 , marginBottom:4}}> {Pharmacy.email}</Text>
                <Text style={{fontSize:18 , marginBottom:4}}> {Pharmacy.phone}</Text>
                <Text style={{fontSize:18}}> Date : {date}/{month}/{year}</Text>
                
                </View>
                <Text style={{fontSize:18,margin:8}}> Selected Drugs: </Text>
                <Divider/>
                <View style={{flex:2}}>
                    <ListView
                        style={{ backgroundColor: "white" }}
                        data={selected}
                        renderRow={this.renderRow}
                    />
                </View>

            </View>
        )
    }
}