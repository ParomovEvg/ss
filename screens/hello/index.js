import React from 'react';
import {StyleSheet,TouchableOpacity,  Text, View, Image } from 'react-native';
import ViewBg from './ViewBg.js'
const bgImage = require("./img/bg.jpg");
import LocalStyle from './locStyle.js';
import { Ionicons } from '@expo/vector-icons';
import Button from '../globalModules/button/button.js';
import { useSelector} from 'react-redux';



function Hello(props){

    const phone = useSelector(store => store.phone);
    let hello_text = useSelector( store => store.text.Hello);

    const style = LocalStyle();
    const toInfo = () => {props.navigation.navigate('Info')};
    const toMenu = () => {props.navigation.navigate('Menu')};
    const toScaner = () => {props.navigation.navigate('Scanner')};

    return(
        <ViewBg source = {{uri:hello_text.bg_url}}>
            <View style={style.topBar}>
                <View>
                    <Image resizeMode = "contain" style={style.logo} source = {{uri:hello_text.logo_url}}/>
                </View>
                <TouchableOpacity  onPress={toMenu} >
                    <Ionicons  name="ios-menu" size={32} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={style.headBox}>
                {hello_text.main_text.split(":").map(text => (
                    <Text style={style.headText}>{text} </Text>
                ))}

            </View>
            <View style={style.buttonBox}>
                <Button
                    onPress={ phone ? toScaner : toMenu }
                > Сканировать </Button>
                <Button  onPress={toInfo} style={{backgroundColor: "#e5e5e5", marginTop: 10,}} styleText={{color:"#001941"}}> Узнать больше </Button>
            </View>
        </ViewBg>
    )
}


export default Hello;