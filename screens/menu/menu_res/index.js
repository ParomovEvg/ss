import React from 'react';
import {StyleSheet,ScrollView,  Text, View, Image } from 'react-native';
import LocalStyle from './localStyle.js';
import colors from '../../../assets/colors.js';
import TopBar from '../../globalModules/TopBar.js';
import BottomBar from "../../globalModules/BottomBar/index.js";
import Сounter from './counter/counter.js';
import NavLinck from '../../globalModules/navlinck.js';
import Phone from './phone.js';
import res  from '../../../assets/scripts/fetchApi.js';


export default class MenuRes extends React.Component{
    state = {
        phone:"",
    }
    hangePhone = (phone)=>{
        let phoneArr = phone.match(/\d/g)
        if(phoneArr){
            this.setState({phone: phoneArr.join('')})
        } else {
            this.setState({phone: ""})
        }
        
    };
    clear = () => this.setState({phone:""})

    render(){
        
        const phoneStore = this.props.store.phone;
        const phoneChanging = phoneStore.state === phoneStore.TOS.CHANGING;
        const phone = phoneStore.value;
        const hangePhone = this.state.phone;
        const {setNumber} = this.props;
        const style=LocalStyle(this.props);
        const back = ()=>{this.props.navigation.goBack()}
        const toScaner = ()=>{this.props.navigation.navigate('Scaner')};
        
        return(
            <View style={style.container}>
                <TopBar handlers={[back]} color = {colors.main} rightIcon={{style:{display: 'none',}}}>Меню</TopBar>
                <ScrollView
                    style={{paddingHorizontal:10, marginTop: 5,}}
                >
                <Text style={style.text}>Ваш номер телефона</Text>
                <Phone 
                        {...{phone,phoneChanging, hangePhone,clear: this.clear}}
                        onChangeText = {this.hangePhone}  
                        onPress = {this.state.phone ? setNumber : ()=>{}}
                />
                <Сounter {...{phoneChanging,num: phoneStore.qrNum}}/>
                <Text style={style.text}> Полезная информация</Text>
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
                <BottomBar onPress={toScaner }/>
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