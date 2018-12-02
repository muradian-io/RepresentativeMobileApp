import React from 'react';
import { View } from 'react-native';
import { NavigationBar, Title, Icon, ListView, Text,Image } from '@shoutem/ui'
import axios from 'axios'
import {Drugs} from '../Fake Data/Drugs'

export default class drugsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }


    componentDidMount() {
        this.setState({
            data:Drugs
        })
        // axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then((response) => {
        //         this.setState({
        //             data: response.data
        //         })
        //     })
        //     .catch(error => {
        //         console.warn(response.error)
        //     });

    }

    // makeRemoteRequest = () => {
    //     const { page, seed } = this.state;
    //     const url = `https://jsonplaceholder.typicode.com/users`;
    //     this.setState({ loading: true });

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(res => {
    //             this.setState({
    //                 data: res,
    //                 error: res.error || null,
    //                 loading: false,
    //                 refreshing: false
    //             });
    //         })
    //         .catch(error => {
    //             this.setState({ error, loading: false });
    //         });
    // };

    renderRow = (x) => {
        return (
            <View  key={x.name.title} style={{flexDirection:'row', backgroundColor: "white", paddingBottom: 20 , paddingLeft:8, paddingTop:8}}>
             <View style={{alignItems:'flex-end'}}>
                    <Image style={{height:40,width:60}} source={require('../images/pills.jpg')} styleName="small"/>
                </View>
                <View style={{ alignItems: 'flex-start',marginLeft:5 }}>
                    <Title style={{ fontSize: 20 }}> {x.name.title} </Title>
                    <Text > {x.name.subtitle}  </Text>
                </View>

                
            </View>
        );
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>

                <View style={{ backgroundColor: "rgba(0, 151, 230,1.0)f" }}>
                    <NavigationBar
                        styleName="inline + clear"
                        leftComponent={<Icon name="back" onPress={() => this.props.navigation.goBack()} />}
                        centerComponent={<Title style={{ fontSize: 21, paddingTop: 15 }}> Drugs List </Title>}
                    />
                </View>

                <ListView
                    style={{ backgroundColor: "white" }}
                    data={this.state.data}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }
}
