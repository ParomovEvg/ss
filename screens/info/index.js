import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Linking } from 'react-native';
import LocalStyle from './localStyle.js';
import colors from '../../assets/colors.js';
import TopBar from '../globalModules/TopBar.js';
import BottomBar from '../globalModules/BottomBar/index.js';
import NavLinck from '../globalModules/navlinck.js';
import { useOpenIp } from '../../assets/hooks/useOpenIp';
import { useSelector } from 'react-redux';

function Info(props) {
    const openIp = useOpenIp(props.navigation);
    const style = LocalStyle();
    const back = () => {
        props.navigation.goBack();
    };
    const toMenu = () => {
        props.navigation.navigate('Menu');
    };
    const toScanner = () => {
        props.navigation.navigate('Scanner');
    };
    const [{ Info }, token] = useSelector(state => [state.text, state.token]);

    return (
        <View style={style.container}>
            <TopBar handlers={[back, toMenu]} color={colors.main}>
                Информация
            </TopBar>
            <ScrollView style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                {Info.questions.map((elem, i) => {
                    return (
                        <NavLinck
                            key={elem.id}
                            onPress={() => {
                                openIp(elem.id);
                            }}
                        >
                            {elem.text}
                        </NavLinck>
                    );
                })}

                <Text style={style.text}> Остались ещё вопросы?</Text>
                <View style={style.mainQuest}>
                    <NavLinck
                        onPress={() => {
                            openIp(0);
                        }}
                        styleText={{ width: '90%' }}
                        style={style.shortLinks}
                        noDecor={true}
                    >
                        <Text style={style.shortLinksText1}>Правила</Text>
                    </NavLinck>
                    <Dots />
                    <NavLinck
                        onPress={() => {
                            Linking.openURL('https://vk.com/severservis.narfu');
                        }}
                        styleText={{ width: '90%' }}
                        style={style.shortLinks}
                        noDecor={true}
                    >
                        <Text style={style.shortLinksText1}>Задать вопрос</Text>
                    </NavLinck>
                </View>
            </ScrollView>
            <BottomBar onPress={token ? toScanner : toMenu} />
        </View>
    );
}

export default Info;

function Dots() {
    let style = StyleSheet.create({
        dotsWrap: {
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '6%',
            marginVertical: 15,
        },
        dot1: {
            width: 4,
            height: 4,
            borderRadius: 2,
            backgroundColor: colors.active,
        },
        dot2: {
            width: 3,
            height: 3,
            borderRadius: 1.5,
            backgroundColor: colors.active,
        },
        dot3: {
            width: 2,
            height: 2,
            borderRadius: 1,
            backgroundColor: colors.active,
        },
    });
    return (
        <View style={style.dotsWrap}>
            <View style={style.dot1}></View>
            <View style={style.dot2}></View>
            <View style={style.dot3}></View>
        </View>
    );
}
