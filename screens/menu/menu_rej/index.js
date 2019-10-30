import React from 'react';
import {StyleSheet,ScrollView,  Text, View, Image } from 'react-native';
import LocalStyle from './localStyle.js';
import colors from '../../../assets/colors.js';
import TopBar from '../../globalModules/TopBar.js';
import BottomBar from "../../globalModules/BottomBar/index.js"
import NavLinck from '../../globalModules/navlinck.js';
import Hint from './hint.js';
import Phone from './phone.js';

const c = {
    temp: "",
    get l (){
        return this.temp;
    },
    set l (val){
        console.log(val, typeof val);
        this.temp = val
    },
}


export default class MenuRej extends React.Component{
    state = {
        phone: '',
    }

    handleInput = (phone) => {
        let phoneArr = phone.match(/\d/g)
        if(phoneArr){
            this.setState({phone: phoneArr.join('')})
        } else {
            this.setState({phone: ""})
        }
    }


    render(){
        const phoneStore = this.props.store.phone;
        const phoneChanging = phoneStore.state === phoneStore.TOS.CHANGING;
        const style=LocalStyle(this.props);
        const {setNumber} = this.props;
        const {phone} = this.state;
        const back = ()=>{this.props.navigation.goBack()}
        const toScaner = ()=>{this.props.navigation.navigate('Scaner')};
        return(
            <View style={style.container}>
                <TopBar handlers={[back]} color = {colors.main} rightIcon={{style:{display: 'none',}}}>Меню</TopBar>
                <ScrollView
                    style={{paddingHorizontal:10}}
                >
                <Hint style={{marginTop: 20,}}>Введите ваш номер телефона, для того чтобы сканировать чеки и участвовать в розыгрыше</Hint>
                <Text style={style.text}>Ваш номер телефона</Text>
                <Phone 
                        {...{phoneChanging}}
                        onChangeText = {this.handleInput}  
                        onPress = {phoneChanging ? ()=>{} : setNumber}
                        phone = {phone}
                />
                <Hint style={{marginTop: 10,}}>В случае победы на ваш мобильный телефон придет смс с местом и временем вручения приза. </Hint>
                </ScrollView>
                {/* <BottomBar onPress={toScaner}/> */}
            </View>
        )
    }
}

function Dots(){
    let style = StyleSheet.create({
        dotsWrap:{
            justifyContent: "space-around",
            alignItems: "center",
            width:"6%",
            marginVertical: 15,
        },
        dot1:{
            width:4,
            height:4,
            borderRadius: 2,
            backgroundColor: colors.active,
        },
        dot2:{
            width:3,
            height:3,
            borderRadius: 1.5,
            backgroundColor: colors.active,

        },
        dot3:{
            width:2,
            height:2,
            borderRadius: 1,
            backgroundColor: colors.active,
        }
    })
    return(
        <View style={style.dotsWrap}><View style={style.dot1}></View><View style={style.dot2}></View><View style={style.dot3}></View></View>
    )
}