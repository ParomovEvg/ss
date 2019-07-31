import React from 'react';
import {StyleSheet,  Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TopBar(props){
    return(
        <View style={[{marginTop:10, flexDirection:"row", justifyContent: "space-between", alignItems: "center", paddingLeft:20, paddingRight: 20,}, props.style]}>
            <Ionicons style={{width:26}} name = "ios-arrow-back" size={32} color={props.color}/>
            <Text style={[{color:props.color, fontSize:22}, props.styleText]}>{props.children}</Text>
            <Ionicons style={{width:26}} name="ios-menu" size={32} color={props.color} />
        </View>
    )

}