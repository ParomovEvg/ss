import { StyleSheet } from 'react-native';
import { NativeModulesProxy } from '@unimodules/core';
import { AuthSession } from 'expo';



export default function(){
    let obgect = StyleSheet.create({
        topBar:{
            // backgroundColor: 'red',
            marginTop:20,
            padding:20,
            flexDirection: "row",
            justifyContent: 'space-between',
        },
        logo:{
            height: 32,   
            width: 80,
        },
        headText:{
            fontSize: 35,
            color: "#fff",
            lineHeight: 40,
            letterSpacing: 1.4,
            fontWeight: '700',
        },
        headBox:{
            marginTop: 40,
            marginBottom: "auto",
            paddingLeft:20,
            
        },
        buttonBox:{
            // marginTop: "auto",
            marginBottom: 20,
            padding:20,
        }
    })
    return obgect;
}


