import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ActivityIndicator
} from 'react-native'
import colors from '../../../assets/colors.js';



export default function Phone(props) {
    const style = getStyle(props);
    const { phone, onPress, onChangeText, phoneChanging, hangePhone, clear } = props

    const telConfig = {
        autoCompleteType: "tel",
        keyboardType: "numeric",
    }


    return (
        <View style={style.container}>
            <View
                style={[style.containerText, props.style]}
            >
                <View style={style.decor}><View style={style.decorInner}></View></View>
                {/* <Text style={[style.text, props.styleText]}>{props.children}</Text> */}
                {phoneChanging ?
                    <ActivityIndicator /> :
                    <TextInput style={style.input}
                        onChangeText={onChangeText}
                        placeholder={phone}
                        value={hangePhone}
                        maxLength={11}
                        {...telConfig}
                        onEndEditing={
                            () => {
                                onPress(hangePhone)
                                clear()
                            }
                        }
                        
                    />}


            </View>
            <TouchableOpacity onPress={() => {
                onPress(hangePhone)
                clear()
            }} >
                <View style={style.buttonWrap}>
                    <Text style={style.buttonText}>Изменить</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}



function getStyle(props) {
    return StyleSheet.create({
        container: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: 5,

        },
        containerText: {
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
            flex: 3,
        },
        text: {
            color: "#000",
            fontSize: 14,
            fontWeight: "500",
            paddingLeft: 10,
            width: "100%",

        },
        decor: {
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
        decorInner: {
            width: 6,
            height: 6,
            backgroundColor: colors.main,
            borderRadius: 3,
            display: props.noDecor ? "none" : undefined,
        },
        input: {
            fontSize: 20,
            paddingLeft: 10,
            flex: 1
        },
        buttonWrap: {
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
        buttonText: {
            color: colors.active,
            fontSize: 14,
        },


    })
}