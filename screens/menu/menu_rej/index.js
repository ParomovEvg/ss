import React, {useCallback, useState} from 'react';
import {StyleSheet,ScrollView,  Text, View, Image } from 'react-native';
import LocalStyle from './localStyle.js';
import colors from '../../../assets/colors.js';
import TopBar from '../../globalModules/TopBar.js';
import BottomBar from "../../globalModules/BottomBar/index.js"
import NavLinck from '../../globalModules/navlinck.js';
import Hint from './hint.js';
import PhoneField from './phone.js';
import {useSelector} from "react-redux";
import Password from "./password";

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


export default function MenuRej (props){
    const [ loading, setLoading ]= useState(false);
    const [lPhone, setLPhone] = useState(undefined);





    const style = LocalStyle();
    const back = ()=>{props.navigation.goBack()};

    return(
        <View style={style.container}>
            <TopBar handlers={[back]} color = {colors.main} rightIcon={{style:{display: 'none',}}}>Меню</TopBar>
            <ScrollView
            style={{paddingHorizontal:10}}
            >
                <Hint style={{marginTop: 20,}} isShown={!Boolean(lPhone)}>
                    Введите ваш номер телефона, для того чтобы сканировать чеки и участвовать в розыгрыше
                </Hint>
                <Text style={style.text}>Ваш номер телефона</Text>
                <PhoneField setPhone={setLPhone}/>

                <Password isShown={Boolean(lPhone)}/>
                <Hint style={{marginTop: 10,}} isShown={!Boolean(lPhone)}>
                    В случае победы на ваш мобильный телефон придет смс с местом и временем вручения приза.
                </Hint>
            </ScrollView>
        </View>
    )
}

