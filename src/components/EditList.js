import React from 'react';
import {NavigationBar, Title, Icon, Image, Subtitle, Tile, ListView, Divider} from '@shoutem/ui'
import {View, TouchableOpacity} from 'react-native';

import SearchBar from 'react-native-searchbar'
import {pharmacies} from "../Fake Data/Pharmacies";

export default class EditList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            data: [],
            //pharmacies:this.props.navigation.state.params,
        };
        this._handleResults = this._handleResults.bind(this);
    }

    componentDidMount(){
        this.setState({
            data:pharmacies,
            results:pharmacies
        })
    }

    _handleResults(results) {
        if (results.length === 0)
            this.setState({results: this.state.data});
        else
            this.setState({results});
    }

    renderRow = (pharmacy) => {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('profile',{...pharmacy})
            }} style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "white",
                borderBottomWidth: 1.5,
                borderBottomColor: "#eff0f0"
            }}>
                <View>
                    <Image source={require('../images/logo.jpg')} styleName="small"/>
                </View>
                <View style={{paddingTop: "3%"}}>
                    <View>
                        <Tile>
                            <Subtitle styleName="sm-gutter-bottom">{pharmacy.name}</Subtitle>
                            <Subtitle styleName="sm-gutter-horizontal">{pharmacy.email}</Subtitle>
                        </Tile>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };


    render() {
        return (
            <View style={{flex:1,backgroundColor: 'white'}}>

                <View style={{backgroundColor: "rgba(0, 151, 230,1.0)f"}}>
                    <NavigationBar
                        styleName="inline + clear"
                        leftComponent={<Icon name="back" onPress={() => this.props.navigation.goBack()}/>}
                        centerComponent={<Title style={{fontSize: 21, paddingTop: 15}}> Pharmacies </Title>}
                        rightComponent={<Icon name="search" onPress={() => this.searchBar.show()}/>}/>
                </View>

                <SearchBar
                    ref={(ref) => this.searchBar = ref}
                    data={this.state.data}
                    handleResults={this._handleResults}
                />

                <Divider style={{borderColor: "rgba(0, 151, 230,1.0)f", borderBottomWidth: 5, paddingTop: 0}}/>

                <ListView
                    style={{backgroundColor: "white"}}
                    data={this.state.results}
                    renderRow={this.renderRow}
                />

            </View>
        )
    }
}
