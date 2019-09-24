import * as React from 'react';
import colors from '../../assets/colors.js'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Button from '../globalModules/button/button.js'
export default function ({wait,wrangCheckout,already,bad,qrDump}) {
    const s = getStyle()

    return (
        <View style={s.wrapper}>
            <View></View>
            <View style={s.center}>
                {wait ? <ActivityIndicator size="large" color="#fff" /> :
                <Text style={s.text}>
                {
                wrangCheckout ? "В акции принимают участие только чеки из столовых в корпусах САФУ":
                already ? "Этот чек уже был зарегистрирован" :
                bad ? "Этот QR не действителен, Пожалуйста отсканируйте QR код на кассовом чеке" : "Неизвестная ошибка"
                }
                </Text>}
                
            </View>
            <View>
                {wait ? undefined :
                    <Button
                    onPress={qrDump}
                        style={s.button}
                        styleText={{ color: "#001941" }}
                    >
                        Сканировать снова
                </Button>}
            </View>
        </View>
    )
}

function getStyle() {
    return StyleSheet.create({
        button: {
            width: "90%",
            backgroundColor: "#e5e5e5",
            alignSelf: "center",
            marginBottom: 15,
        },
        wrapper: {
            backgroundColor: "rgba(0,0,0,0.95)",
            flexGrow: 1,
            width: "100%",
            justifyContent: "space-between",
        },
        center: {
        },
        text: {
            marginBottom: 10,
            color: "#fff",
            fontSize: 22,
            textAlign: "center"
        }
    })
}