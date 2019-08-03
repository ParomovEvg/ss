import React from 'react';
import {StyleSheet,ScrollView,  Text, View, Image } from 'react-native';
import LocalStyle from './localStyle';
import colors from '../../assets/colors';
import TopBar from './TopBar';
import BottomBar from "../globalModules/BottomBar/index.js"
import NavLinck from '../globalModules/navlinck';
// import ViewBg from './ViewBg.js'
// const bgImage = require("./img/bg.jpg");
// import { Ionicons } from '@expo/vector-icons';

export default class Info extends React.Component{
    constructor(props){
        super(props);
        this.style = LocalStyle();

        this.back = ()=>{props.navigation.goBack()}

    }

    render(){
        const style= this.style;
        const back = this.back;
        return(
            <View style={this.style.container}>
                <TopBar handlers={{back}} color = {colors.main}>Информация</TopBar>
                <ScrollView
                    style={{paddingHorizontal:10}}
                >
                    <NavLinck style={{marginTop:20}} >Что нужно сделать для того что бы участвовать в розыгрыше?</NavLinck>
                    <NavLinck >Какие призы я могу получить?</NavLinck>
                    <NavLinck >Как я узнаю, что я победитель?</NavLinck>
                    <NavLinck >Это единоразовый розыгрыш,или они будут проходить постоянно?</NavLinck>
                    <NavLinck >Это единоразовый розыгрыш,или они будут проходить постоянно?</NavLinck>
                    <Text style={style.text}> Остались ещё вопросы?</Text>
                    <View style={style.mainQuest} >
                        <NavLinck styleText={{width:"90%"}} style={style.shortLinks} noDecor={true} >
                            <Text  style={style.shortLinksText1}>Правила</Text> 
                            {/* <Text  style={style.shortLinksText2}>Подробные</Text> */}
                        </NavLinck>
                        <Dots/>
                        <NavLinck  styleText={{width:"90%"}} style={style.shortLinks} noDecor={true} >
                            <Text style={style.shortLinksText1}>Задать вопрос</Text> 
                            {/* <Text style={style.shortLinksText2}>Организаторам</Text> */}
                        </NavLinck>
                        
                    </View>

                </ScrollView>
                <BottomBar />
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