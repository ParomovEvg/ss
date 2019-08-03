import React from 'react';
import {TouchableOpacity,StyleSheet,  Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TopBar(props){

    const style = getStyle(props)
   
    return(
        <View style={[style.container, props.style]}>
            <TouchableOpacity  style={style.back} onPress={props.handlers.back} >
                <Ionicons style={style.icons}  name = "ios-arrow-back" size={32} />
            </TouchableOpacity>
            <Text style={[style.text, props.styleText]}>{props.children}</Text>
            <TouchableOpacity style={style.menu}>
                <Ionicons style={style.icons} name="ios-menu" size={32}  />
            </TouchableOpacity>
        </View>
    )

}


function getStyle(props){
    return StyleSheet.create({
        container:{ 
            paddingTop: 10,
            flexDirection:"row",
            justifyContent: "space-between",
            },
        back:{
            flex:1,
            paddingLeft:20,
            alignItems:'flex-start'
        },
        menu:{
            flex:1,
            paddingRight:20,
            alignItems:'flex-end'
        },
        text:{
            flex:2,
            color:props.color,
            fontSize:22,
            alignSelf:"center",
            textAlign:"center",
        },
        icons:{
            color:props.color,
        }

    })
}