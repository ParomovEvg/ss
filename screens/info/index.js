import React from 'react';
import {StyleSheet,ScrollView,  Text, View, Image, Linking } from 'react-native';
import LocalStyle from './localStyle.js';
import colors from '../../assets/colors.js';
import TopBar from '../globalModules/TopBar.js';
import BottomBar from "../globalModules/BottomBar/index.js"
import NavLinck from '../globalModules/navlinck.js';
import openIP from "../../actions/openIP";



class Info extends React.Component{

    render(){
        console.log(this.props.questions)
        const style= LocalStyle();
        const back = ()=>{this.props.navigation.goBack()}
        const toMenu = ()=>{this.props.navigation.navigate('Menu')}
        const toScaner = ()=>{this.props.navigation.navigate('Scaner')};

        return(
            <View style={style.container}>
                <TopBar handlers={[back,toMenu]} color = {colors.main}>Информация</TopBar>
                <ScrollView
                    style={{paddingHorizontal:10,paddingTop:10}}
                >
                    {this.props.questions.map((elem, i )=>{
                        return <NavLinck
                            key={elem.id}
                            onPress={()=>{this.props.openIP( {id:elem.id, navigation: this.props.navigation})}}
                        >{elem.text}</NavLinck>
                    })}

                    <Text style={style.text}> Остались ещё вопросы?</Text>
                    <View style={style.mainQuest} >
                        <NavLinck
                            onPress={()=>{this.props.openIP( {id:0, navigation: this.props.navigation})}}
                            styleText={{width:"90%"}}
                            style={style.shortLinks}
                            noDecor={true}
                        >
                            <Text  style={style.shortLinksText1}>Правила</Text> 
                            {/* <Text  style={style.shortLinksText2}>Подробные</Text> */}
                        </NavLinck>
                        <Dots/>
                        <NavLinck onPress={()=>{Linking.openURL("https://vk.com/severservis.narfu")}} styleText={{width:"90%"}} style={style.shortLinks} noDecor={true} >
                            <Text style={style.shortLinksText1}>Задать вопрос</Text> 
                            {/* <Text style={style.shortLinksText2}>Организаторам</Text> */}
                        </NavLinck>
                        
                    </View>

                </ScrollView>
                <BottomBar onPress = {this.props.store.phone.value? toScaner : toMenu} />
            </View>
        )
    }
}

import { connect } from 'react-redux';
const mapStateToProps = (store /*, ownProps*/) => {
  return {
      questions: store.generate.info.questions,
      store,
  }
}

const mapDispatchToProps = { openIP }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info)

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