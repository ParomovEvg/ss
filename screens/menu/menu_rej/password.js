import React, {useState, useCallback, useRef} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ActivityIndicator,
    Animated
} from 'react-native'
import colors from '../../../assets/colors.js';

import HintError from "./hintError";
import {useSelector} from "react-redux";
import Button from "../../globalModules/button/button";
import {useShowAnimation} from "../../../assets/hooks/useShowAnimation";


export default function Password  (props) {
    const style = getStyle(props);
    const {isShown = true, maxHeight= 200} = props;
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const aniStyle = useShowAnimation(isShown, maxHeight);
    const aniView = useRef(null);
    console.log(aniView.current);

    return (
        <Animated.View ref={aniView} style={aniStyle}>
            <Text style={style.textHead}>Введите пароль из SMS</Text>
            <View style={style.container}>
                <View
                    style={[style.containerText, props.style]}
                >
                    {/*<View style={style.decor}><View style={style.decorInner}></View></View>*/}
                    {loading ?
                    <ActivityIndicator /> :
                    (<>
                        <TextInput
                            style={style.input}
                            onChangeText={setPassword}
                            placeholder={""}
                            value = {password}
                            onEndEditing={
                            () => {
                            // onPress(phone)
                            }
                            }
                        />
                    </>)}

                </View>
            </View>
            <View style={style.buttonGroup}>
                <TouchableOpacity style={{width:"49%"}} onPress={() => {
                }} >
                    <View style={style.buttonWrap}>
                        <Text style={style.buttonText}>Войти</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:"49%"}} onPress={() => {

                }} >
                    <View style={style.buttonWrapSecond}>
                        <Text style={style.buttonTextSecond}>Отправить SMS</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>

    )
}


function getStyle(props){
    return StyleSheet.create({
        textHead:{
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.main,
            marginTop: 15,
            paddingLeft: 10 ,
        },
        buttonGroup:{
            flexDirection:"row",
            marginTop: 15,
            width:"100%",
            justifyContent: 'space-between',
        },
        container:{
            justifyContent: 'space-between',
            // alignItems: 'center',
            flexDirection: 'row',
            marginVertical: 5,

        },
        containerText:{
            backgroundColor: colors.white,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            borderRadius: 15,
            elevation: 1,
            flex:3,
        },
        text:{
            color:"#000",
            fontSize: 14,
            fontWeight: "500",
            paddingLeft: 10,
            width: "100%",
    
        },
        decor:{
            position: "absolute",
            width: 8,
            height: 8,
            backgroundColor: colors.white,
            borderRadius: 4,
            left: -4,
            alignItems: 'center',
            justifyContent: 'center',
            display: props.noDecor ? "none" : undefined,
        },
        decorInner:{
            width: 6,
            height: 6,
            backgroundColor: colors.active,
            borderRadius: 3,
            display: props.noDecor ? "none" : undefined,
        },
        input: {
            width:"100%",
            height:25,
            fontSize:20,
        },
        plus:{
            fontSize:20,
            paddingLeft:10,
            height:25,
        },
        buttonWrap:{
            borderRadius: 15,
            padding: 15,
            width:"100%",
            justifyContent: "center",
            alignItems:"center",
            backgroundColor: colors.main,
        },
        buttonText:{
            color: "#fff",
            fontSize:14,
        },
        buttonWrapSecond: {
            borderRadius: 15,
            borderColor: colors.active,
            borderWidth: 1,
            marginLeft: 10,
            padding: 15,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
        },
        buttonTextSecond: {
            color: colors.active,
            fontSize: 14,
        },
        

    })
};