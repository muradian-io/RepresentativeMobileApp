import React from 'react'
import  { StackNavigator } from 'react-navigation'
import Login from '../components/Login'
import PharmaciesList from '../components/pharmaciesList'
import Profile from "../components/Profile";
import drugsList from '../components/DrugsList'
import Register from '../components/Register'
import Home from '../components/Home'
import OrderList from '../components/OrderList'
import EditList from '../components/EditList'
import Pursuance from '../components/Pursuance'
import Invoice from '../components/Invoice'


export const Root = StackNavigator({
        login: { screen : Login },
    list: { screen : PharmaciesList },
    profile: { screen : Profile },
    drugs: { screen : drugsList },
    register: {screen : Register},
    inv: {screen : Invoice},
    purs: { screen: Pursuance},
    home: {screen : Home},
    edit: {screen : EditList},
    order: {screen : OrderList}
    }
    , {headerMode: 'none'});