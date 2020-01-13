import React, {useEffect, useState} from 'react';
import {StyleSheet,ScrollView,  Text, View, Image } from 'react-native';
import LocalStyle from './localStyle.js';
import colors from '../../../assets/colors.js';
import TopBar from '../../globalModules/TopBar.js';
import BottomBar from "../../globalModules/BottomBar/index.js"
import NavLinck from '../../globalModules/navlinck.js';
import Hint from './hint.js';
import PhoneField from './phone.js';
import {useDispatch, useSelector} from "react-redux";
import Password from "./password";
import {Choice} from "./Choice";
import {reducerTypes} from "../../../reducer/main";


export default function MenuRej (props){

    const [lPhone, setLPhone] = useState(undefined);
    const dispatch = useDispatch();



    const style = LocalStyle();
    const back = ()=>{
        props.navigation.goBack();
        dispatch({
            type: reducerTypes.changingPassword,
            value: false,
        })
    };


    const toQrScanner = () => {
        props.navigation.navigate("Hello")
    };

    const changingPassword = useSelector(store => store.changingPassword);
    const [choice, setChoice] = useState("adfafd");


    return(
        <View style={style.container}>
            <TopBar handlers={
                [back]
            } color = {colors.main} rightIcon={{style:{display: 'none',}}}
            >
                Меню
            </TopBar>
            <ScrollView>
                <Hint style={{marginTop: 20,}} isShown={!Boolean(lPhone)}>
                    {
                        changingPassword ?
                            "Введите новый номер телефона" :
                            "Введите ваш номер телефона, для того чтобы сканировать чеки и участвовать в розыгрыше"
                    }
                </Hint>
                <Text style={style.text}>Ваш номер телефона</Text>
                <PhoneField setPhone={setLPhone}/>
                <Choice isShown={Boolean(lPhone) && isNaN(Number(choice))} phone={lPhone} onChange={setChoice} />
                <Password
                    onSendPassword={toQrScanner}
                    isShown={!isNaN(Number(choice))}
                    phone={lPhone}
                />
                <Hint style={{marginTop: 10,}} isShown={!Boolean(lPhone)}>
                    {
                        changingPassword ?
                            "Для того что бы войти нужно получить новый пароль или ввести использовавшийся ранее с этим телефоном" :
                            "В случае победы на ваш мобильный телефон придет смс с местом и временем вручения приза."
                    }
                </Hint>
            </ScrollView>
        </View>
    )
}

