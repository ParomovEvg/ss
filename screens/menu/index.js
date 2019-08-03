import React from 'react';
import {StyleSheet,ScrollView,  Text, View, Image } from 'react-native';
import LocalStyle from './localStyle.js';
import colors from '../../assets/colors.js';
import TopBar from '../globalModules/TopBar.js';
import BottomBar from "../globalModules/BottomBar/index.js"
import NavLinck from '../globalModules/navlinck.js';


export default class Menu extends React.Component{


    render(){
        const style=LocalStyle(this.props);
        const back = ()=>{this.props.navigation.goBack()}
        const toScaner = ()=>{this.props.navigation.navigate('Scaner')};
        return(
            <View style={style.container}>
                <TopBar handlers={[back]} color = {colors.main} rightIcon={{style:{display: 'none',}}}>Меню</TopBar>
                <ScrollView
                    style={{paddingHorizontal:10}}
                >


                </ScrollView>
                <BottomBar onPress={toScaner}/>
            </View>
        )
    }
}

