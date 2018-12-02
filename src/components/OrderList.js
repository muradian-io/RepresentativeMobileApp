import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { NavigationBar, Title, Icon, ListView, Text, TouchableOpacity } from '@shoutem/ui'
import { Drugs } from '../Fake Data/Drugs'


export default class OrderList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            selected: [],
        };
    }
    onLearnMore(x) {
        this.setState({
            selected: [...this.state.selected, x],
        });
    }

    onBuy() {
        const items =
            {
                DrugsList: this.state.selected,
                PharmacyInfo:this.props.navigation.state.params
                
            }

        
        const { selected } = this.state
        this.props.navigation.navigate("inv", { ...items })
    }

    componentDidMount() {
        this.setState({
            data: Drugs,
            selected: Drugs[0]
        })
        //this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://jsonplaceholder.typicode.com/users`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res,
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };



    renderRow = (x) => {
        return (
            <TouchableOpacity onPress={() => this.onLearnMore(x)} key={x.name.title} style={{ flexDirection: 'row', backgroundColor: "white", paddingBottom: 20, paddingLeft: 8, paddingTop: 8 }}>
                <View style={{ alignItems: 'flex-start', marginLeft: 5 }}>
                    <Title style={{ fontSize: 20 }}> {x.name.title} </Title>
                    <Text > {x.name.subtitle}  </Text>
                </View>


            </TouchableOpacity>
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
                        rightComponent={<Icon name="add-to-cart" onPress={() => this.onBuy()} />}

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