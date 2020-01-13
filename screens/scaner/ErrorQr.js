import * as React from 'react';
import colors from '../../assets/colors.js'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Button from '../globalModules/button/button.js'
export default function ({error, isLoading, dumpError}) {
    const s = getStyle();

    return (
        <View style={s.wrapper}>
            <View style={s.center}>
                {isLoading ? <ActivityIndicator size="large" color="#fff" /> :
                <Text style={s.text}>
                {
                    error
                }
                </Text>}
            </View>
            <View>
                {
                    isLoading ? undefined :
                    <Button
                        onPress={dumpError}
                        style={s.button}
                        styleText={{ color: "#001941" }}
                    >
                        Сканировать снова
                    </Button>
                }
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