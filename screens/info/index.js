import React from 'react';
import {StyleSheet,  Text, View, Image } from 'react-native';
import LocalStyle from './localStyle';
import colors from '../../assets/colors';
import TopBar from './TopBar';
import BottomBar from "./BottomBar/"
// import ViewBg from './ViewBg.js'
// const bgImage = require("./img/bg.jpg");
// import { Ionicons } from '@expo/vector-icons';
// import Button from './button/button.js';

export default class Info extends React.Component{
    constructor(props){
        super(props);
        this.style = LocalStyle();

    }

    render(){
        return(
            <View style={this.style.container}>
                <TopBar color = {colors.main}>Информация</TopBar>
                <BottomBar />
            </View>
        )
    }
}