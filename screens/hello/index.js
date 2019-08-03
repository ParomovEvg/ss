import React from 'react';
import {StyleSheet,TouchableOpacity,  Text, View, Image } from 'react-native';
import ViewBg from './ViewBg.js'
const bgImage = require("./img/bg.jpg");
import LocalStyle from './locStyle';
import { Ionicons } from '@expo/vector-icons';
import Button from '../globalModules/button/button.js';



export default class Hello extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.props = props
    // }


    render(){
        const style = LocalStyle();
        const toInfo = ()=>{this.props.navigation.navigate('Info')};
        const toMenu = ()=>{this.props.navigation.navigate('Menu')};
        const toScaner = ()=>{this.props.navigation.navigate('Scaner')};

        return(
            <ViewBg source = {bgImage}>
                <View style={style.topBar}>
                    <View>
                        <Image resizeMode = "contain" style={style.logo} source = {require("./img/logo.png")}/>
                    </View>
                    <TouchableOpacity  onPress={toMenu} >
                        <Ionicons  name="ios-menu" size={32} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={style.headBox}>
                   
                     <Text style={style.headText}>Сканируй  </Text> 
                     <Text style={style.headText}>QR код  </Text>
                     <Text style={style.headText}>И выигрывай  </Text>
                     <Text style={style.headText}>Смартфон </Text>
                   
                </View>
                <View style={style.buttonBox}>
                    <Button onPress={toScaner} > Сканировать </Button>
                    <Button  onPress={toInfo} style={{backgroundColor: "#e5e5e5", marginTop: 10,}} styleText={{color:"#001941"}}> Узнать больше </Button>
                </View>
            </ViewBg>        
        )
    }
}



  