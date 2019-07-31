import React from 'react';
import {StyleSheet,  Text, View, Image } from 'react-native';
import colors from '../../../assets/colors.js';


export default function(props){
    return(
        <View style={style.container}>
            <Image style={style.bgimage} source={require('./qr.png')} resizeMode = "cover" />
            <Text>Привет мир</Text>

        </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginTop: "auto",
        backgroundColor: colors.main,
        width: "100%",
        height: 140,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    bgimage:{
        position: "absolute",
        zIndex: 0,
        bottom: 0,
        left: 0,
        width: "100%",
        height: 80,
        
    }
})